---
layout: question
title:  SPA（Angular，Vue）中的Google DFP广告管理系统-如何销毁广告及其所有引用以避免内存泄漏
date:   2020-03-12T10:19:15.000Z
description: 我试图在SPA Vue.js和AngularSPA 中都使用Google的DFP广告管理系统，但这似乎引起了内存泄漏。在Angular中，您可以看到概...
img: 
author: 猴子泡芙
category: question
answer: 0
tags: 角度 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图在</font><font style="vertical-align: inherit;">SPA </font></font><code>Vue.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Angular</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SPA </font><font style="vertical-align: inherit;">中都使用Google的DFP广告管理系统，</font><font style="vertical-align: inherit;">但这似乎引起了内存泄漏。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以看到概念证明</font></font><a href="https://github.com/jbojcic1/angular-dfp-memory-leak-proof-of-concept" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jbojcic1/angular-dfp-memory-leak-proof-of-concept</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于广告，我正在使用</font></font><code>ngx-dfp npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包（</font></font><a href="https://github.com/atwwei/ngx-dfp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/atwwei/ngx-dfp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">要重现拉并运行概念证明项目，请转到主页，该主页最初将在Feed中包含3个广告，并进行堆快照。</font><font style="vertical-align: inherit;">之后，通过使用标题中的链接转到没有广告的页面，再次进行堆快照，您将看到在插槽被销毁后会保留插槽引用，这会导致内存泄漏。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vue中，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个创建和销毁广告位的组件，并且正在将这些动态添加到内容供稿中。</font><font style="vertical-align: inherit;">当我离开页面时，该组件被销毁，并且在</font></font><a href="https://developers.google.com/doubleclick-gpt/reference#googletag.destroySlots" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">beforeDestroy</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩中，我调用</font><a href="https://developers.google.com/doubleclick-gpt/reference#googletag.destroySlots" rel="noreferrer"><font style="vertical-align: inherit;">destroySlots，</font></a><font style="vertical-align: inherit;">但似乎仍有一些引用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的dfp-ad组件：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;template&gt;<font></font>
  &lt;div :id="id" class="ad" ref="adContainer"&gt;&lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  export default {<font></font>
    name: 'dfp-ad',<font></font>
    props: {<font></font>
      id: { type: String, default: null },<font></font>
      adName: { type: String, default: null },<font></font>
      forceSafeFrame: { type: Boolean, default: false },<font></font>
      safeFrameConfig: { type: String, default: null },<font></font>
      recreateOnRouteChange: { type: Boolean, default: true },<font></font>
      collapseIfEmpty: { type: Boolean, default: true },<font></font>
      sizes: { type: Array, default: () =&gt; [] },<font></font>
      responsiveMapping: { type: Array, default: () =&gt; [] },<font></font>
      targetings: { type: Array, default: () =&gt; [] },<font></font>
      outOfPageSlot: { type: Boolean, default: false }<font></font>
    },<font></font>
    data () {<font></font>
      return {<font></font>
        slot: null,<font></font>
        networkCode: 'something',<font></font>
        topLevelAdUnit: 'something_else'<font></font>
      }<font></font>
    },<font></font>
    computed: {<font></font>
      slotName () {<font></font>
        return `/${this.networkCode}/${this.topLevelAdUnit}/${this.adName}`<font></font>
      }<font></font>
    },<font></font>
    mounted () {<font></font>
      this.$defineTask(() =&gt; {<font></font>
        this.defineSlot()<font></font>
      })<font></font>
    },<font></font>
    watch: {<font></font>
      '$route': function (to, from) {<font></font>
        if (this.recreateOnRouteChange) {<font></font>
          this.$defineTask(() =&gt; {<font></font>
            // this.resetTargetings()<font></font>
            // We can't just change targetings because slot name is different on different pages (not sure why though)<font></font>
            // too so we need to recreate it.<font></font>
            this.recreateSlot()<font></font>
            this.refreshContent()<font></font>
          })<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    methods: {<font></font>
      getState () {<font></font>
        return Object.freeze({<font></font>
          sizes: this.sizes,<font></font>
          responsiveMapping: this.responsiveMapping,<font></font>
          targetings: this.targetings,<font></font>
          slotName: this.slotName,<font></font>
          forceSafeFrame: this.forceSafeFrame === true,<font></font>
          safeFrameConfig: this.safeFrameConfig,<font></font>
          clickUrl: this.clickUrl,<font></font>
          recreateOnRouteChange: this.recreateOnRouteChange,<font></font>
          collapseIfEmpty: this.collapseIfEmpty === true,<font></font>
          outOfPageSlot: this.outOfPageSlot<font></font>
        })<font></font>
      },<font></font>
<font></font>
      setResponsiveMapping (slot) {<font></font>
        const ad = this.getState()<font></font>
<font></font>
        const sizeMapping = googletag.sizeMapping()<font></font>
<font></font>
        if (ad.responsiveMapping.length === 0) {<font></font>
          ad.sizes.forEach(function (size) {<font></font>
            sizeMapping.addSize([size[0], 0], [size])<font></font>
          })<font></font>
        } else {<font></font>
          ad.responsiveMapping.forEach(function (mapping) {<font></font>
            sizeMapping.addSize(mapping.viewportSize, mapping.adSizes)<font></font>
          })<font></font>
        }<font></font>
<font></font>
        slot.defineSizeMapping(sizeMapping.build())<font></font>
      },<font></font>
<font></font>
      refreshContent () {<font></font>
        googletag.pubads().refresh([this.slot])<font></font>
      },<font></font>
<font></font>
      defineSlot () {<font></font>
        const ad = this.getState()<font></font>
        const element = this.$refs.adContainer<font></font>
<font></font>
        this.slot = ad.outOfPageSlot<font></font>
          ? googletag.defineOutOfPageSlot(ad.slotName, this.id)<font></font>
          : googletag.defineSlot(ad.slotName, ad.sizes, this.id)<font></font>
<font></font>
        if (ad.forceSafeFrame) {<font></font>
          this.slot.setForceSafeFrame(true)<font></font>
        }<font></font>
<font></font>
        if (ad.clickUrl) {<font></font>
          this.slot.setClickUrl(ad.clickUrl)<font></font>
        }<font></font>
<font></font>
        if (ad.collapseIfEmpty) {<font></font>
          this.slot.setCollapseEmptyDiv(true, true)<font></font>
        }<font></font>
<font></font>
        if (ad.safeFrameConfig) {<font></font>
          this.slot.setSafeFrameConfig(<font></font>
            /** @type {googletag.SafeFrameConfig} */<font></font>
            (JSON.parse(ad.safeFrameConfig))<font></font>
          )<font></font>
        }<font></font>
<font></font>
        if (!ad.outOfPageSlot) {<font></font>
          this.setResponsiveMapping(this.slot)<font></font>
        }<font></font>
<font></font>
        this.setTargetings(ad.targetings)<font></font>
<font></font>
        this.slot.addService(googletag.pubads())<font></font>
<font></font>
        googletag.display(element.id)<font></font>
<font></font>
        this.refreshContent()<font></font>
      },<font></font>
<font></font>
      setTargetings (targetings) {<font></font>
        targetings.forEach(targeting =&gt; {<font></font>
          this.slot.setTargeting(targeting.key, targeting.values)<font></font>
        })<font></font>
      },<font></font>
<font></font>
      resetTargetings () {<font></font>
        this.slot.clearTargeting()<font></font>
        this.setTargetings(this.targetings)<font></font>
      },<font></font>
<font></font>
      recreateSlot () {<font></font>
        googletag.destroySlots([this.slot])<font></font>
        this.defineSlot()<font></font>
      }<font></font>
    },<font></font>
<font></font>
    created () {<font></font>
    },<font></font>
<font></font>
    beforeDestroy () {<font></font>
      if (this.slot) {<font></font>
        googletag.destroySlots([this.slot])<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style lang="scss" scoped&gt;<font></font>
<font></font>
...<font></font>
<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在注入GPT并在插件中设置全局配置：</font></font></p>

<pre class="lang-js prettyprint-override"><code>const dfpConfig = {<font></font>
  enableVideoAds: true,<font></font>
  collapseIfEmpty: true,<font></font>
  centering: false,<font></font>
  location: null,<font></font>
  ppid: null,<font></font>
  globalTargeting: null,<font></font>
  forceSafeFrame: false,<font></font>
  safeFrameConfig: null,<font></font>
  loadGPT: true,<font></font>
  loaded: false<font></font>
}<font></font>
<font></font>
const GPT_LIBRARY_URL = '//www.googletagservices.com/tag/js/gpt.js'<font></font>
<font></font>
const googletag = window.googletag || {}<font></font>
googletag.cmd = googletag.cmd || []<font></font>
<font></font>
var scriptInjector<font></font>
<font></font>
exports.install = function (Vue, options) {<font></font>
  initialize(options)<font></font>
<font></font>
  Vue.prototype.$hasLoaded = function () {<font></font>
    return dfpConfig.loaded<font></font>
  }<font></font>
<font></font>
  Vue.prototype.$defineTask = function (task) {<font></font>
    googletag.cmd.push(task)<font></font>
  }<font></font>
}<font></font>
<font></font>
function initialize (options) {<font></font>
  scriptInjector = options.scriptInjector<font></font>
<font></font>
  googletag.cmd.push(() =&gt; {<font></font>
    setup()<font></font>
  })<font></font>
<font></font>
  if (dfpConfig.loadGPT) {<font></font>
    scriptInjector.injectScript(GPT_LIBRARY_URL).then((script) =&gt; {<font></font>
      dfpConfig.loaded = true<font></font>
    })<font></font>
<font></font>
    window['googletag'] = googletag<font></font>
  }<font></font>
}<font></font>
<font></font>
function setup () {<font></font>
  const pubads = googletag.pubads()<font></font>
<font></font>
  if (dfpConfig.enableVideoAds) {<font></font>
    pubads.enableVideoAds()<font></font>
  }<font></font>
<font></font>
  if (dfpConfig.collapseIfEmpty) {<font></font>
    pubads.collapseEmptyDivs()<font></font>
  }<font></font>
<font></font>
  // We always refresh ourselves<font></font>
  pubads.disableInitialLoad()<font></font>
<font></font>
  pubads.setForceSafeFrame(dfpConfig.forceSafeFrame)<font></font>
  pubads.setCentering(dfpConfig.centering)<font></font>
<font></font>
  addLocation(pubads)<font></font>
  addPPID(pubads)<font></font>
  addTargeting(pubads)<font></font>
  addSafeFrameConfig(pubads)<font></font>
<font></font>
  pubads.enableAsyncRendering()<font></font>
  // pubads.enableSingleRequest()<font></font>
<font></font>
  googletag.enableServices()<font></font>
}<font></font>
<font></font>
function addSafeFrameConfig (pubads) {<font></font>
  if (!dfpConfig.safeFrameConfig) { return }<font></font>
  pubads.setSafeFrameConfig(dfpConfig.safeFrameConfig)<font></font>
}<font></font>
<font></font>
function addTargeting (pubads) {<font></font>
  if (!dfpConfig.globalTargeting) { return }<font></font>
<font></font>
  for (const key in dfpConfig.globalTargeting) {<font></font>
    if (dfpConfig.globalTargeting.hasOwnProperty(key)) {<font></font>
      pubads.setTargeting(key, dfpConfig.globalTargeting[key])<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
function addLocation (pubads) {<font></font>
  if (!dfpConfig.location) { return }<font></font>
<font></font>
  if (typeof dfpConfig.location === 'string') {<font></font>
    pubads.setLocation(dfpConfig.location)<font></font>
    return<font></font>
  }<font></font>
<font></font>
  if (!Array.isArray(dfpConfig.location)) {<font></font>
    throw new Error('Location must be an array or string')<font></font>
  }<font></font>
<font></font>
  pubads.setLocation.apply(pubads, dfpConfig.location)<font></font>
}<font></font>
<font></font>
function addPPID (pubads) {<font></font>
  if (!dfpConfig.ppid) { return }<font></font>
<font></font>
  pubads.setPublisherProvidedId(dfpConfig.ppid)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是广告组件之一：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;template&gt;<font></font>
  &lt;div class="feed-spacer"&gt;<font></font>
    &lt;dfp-ad class="feed-ad"<font></font>
            :id="adId"<font></font>
            :adName="adName"<font></font>
            :sizes="sizes"<font></font>
            :responsiveMapping="responsiveMapping"<font></font>
            :targetings="targetings"<font></font>
            :recreateOnRouteChange="false"&gt;<font></font>
    &lt;/dfp-ad&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
import DfpAd from '@/dfp/component/dfp-ad.vue'<font></font>
<font></font>
export default {<font></font>
  components: {DfpAd},<font></font>
  name: 'feed-ad',<font></font>
  props: ['instance'],<font></font>
  data () {<font></font>
    return {<font></font>
      responsiveMapping: [<font></font>
        {viewportSize: [1280, 0], adSizes: [728, 90]},<font></font>
        {viewportSize: [640, 0], adSizes: [300, 250]},<font></font>
        {viewportSize: [320, 0], adSizes: [300, 250]}<font></font>
      ],<font></font>
      sizes: [[728, 90], [300, 250]]<font></font>
    }<font></font>
  },<font></font>
  computed: {<font></font>
    adId () {<font></font>
      return `div-id-for-mid${this.instance}-leaderboard`<font></font>
    },<font></font>
    adName () {<font></font>
      return this.$route.meta.pageId<font></font>
    },<font></font>
    targetings () {<font></font>
      const targetings = [<font></font>
        { key: 's1', values: this.$route.meta.pageId },<font></font>
        { key: 'pid', values: this.$route.meta.pageId },<font></font>
        { key: 'pagetype', values: this.$route.meta.pageType },<font></font>
        { key: 'channel', values: this.$route.meta.pageId },<font></font>
        { key: 'test', values: this.$route.query.test },<font></font>
        { key: 'pos', values: `mid${this.instance}` }<font></font>
      ]<font></font>
<font></font>
      switch (this.$route.name) {<font></font>
        case 'games':<font></font>
          targetings.push('some_tag', this.$route.params.slug)<font></font>
          break<font></font>
        case 'show':<font></font>
          targetings.push('some_other_tag', this.$route.params.slug)<font></font>
          break<font></font>
      }<font></font>
      return targetings<font></font>
    }<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style lang="scss" scoped&gt;<font></font>
<font></font>
  ...<font></font>
<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人有类似的问题吗？</font><font style="vertical-align: inherit;">难道我做错了什么？</font><font style="vertical-align: inherit;">也许您只是不能破坏SPA并在其中创建插槽而不会引起内存泄漏？</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是分离节点的屏幕截图：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/13392/images/thumbnails/1584008227856.png" data-src="https://www.samyoc.com//uploads/users/13392/images/1584008227856.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Kkvbs.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1267篇《SPA（Angular，Vue）中的Google DFP广告管理系统-如何销毁广告及其所有引用以避免内存泄漏》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
