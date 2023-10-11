---
layout: question
title:  VueJS：Google Maps在数据准备就绪之前先加载-如何使其等待？（Nuxt）
date:   2020-03-23T02:58:14.000Z
description: 这是我第VueJS项目，我已经得到了vue2，谷歌，地图和运行，但我遇到一个问题，当我尝试地图标记连接到我的网站的JSON饲料（使用WordPress的R...
img: 
author: 老丝阿飞
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我第VueJS项目，我已经得到了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue2，谷歌，地图</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和运行，但我遇到一个问题，当我尝试地图标记连接到我的网站的JSON饲料（使用WordPress的REST API），该</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纬度</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lng</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">undefined</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NaN</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过进一步的调查（由于下面的@QuỳnhNguyễn），似乎在数据准备就绪之前正在运行Google Maps实例。</font><font style="vertical-align: inherit;">我已尝试在初始化地图之前查看要加载的供稿，但是它似乎不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记位置使用JSON从WordPress REST API中提取，并存在于数组（位置）中。</font><font style="vertical-align: inherit;">该阵列存在并已在Vue Dev Tools中填充（51条记录），但是在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mount上</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查时</font><font style="vertical-align: inherit;">，该阵列为空。</font><font style="vertical-align: inherit;">数据是在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阶段</font><font style="vertical-align: inherit;">提取的</font><font style="vertical-align: inherit;">，所以我不知道为什么安装阶段无法准备好数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有问题的代码如下...</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板：</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;gmap-map v-if="feedLoaded" ref="map" :center="center" :zoom="zoom" :map-type-id="mapTypeId" :options="options"&gt;<font></font>
        &lt;gmap-marker <font></font>
            :key="index" v-for="(m, index) in locations" <font></font>
            :position="{ lat: parseFloat(m.place_latitude), lng: parseFloat(m.place_longitude) }" <font></font>
            @click="toggleInfoWindow(m,index)" <font></font>
            :icon="mapIconDestination"&gt;<font></font>
        &lt;/gmap-marker&gt;<font></font>
        &lt;gmap-info-window&gt;&lt;/gmap-info-window&gt;<font></font>
    &lt;/gmap-map&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本</font></font></strong></p>

<pre><code>&lt;script&gt;<font></font>
    const axios = require('axios');<font></font>
    const feedURL = "API_REF";<font></font>
<font></font>
    export default {<font></font>
        props: {<font></font>
            centerRef: {<font></font>
                type: Object,<font></font>
                default: function() {<font></font>
                    return { lat: -20.646378400026226, lng: 116.80669825605469 }<font></font>
                }<font></font>
            },<font></font>
            zoomVal: {<font></font>
               type: Number,<font></font>
               default: function() {<font></font>
                   return 11<font></font>
               }<font></font>
            }<font></font>
        },<font></font>
        data: function() {<font></font>
            return {<font></font>
                feedLoaded: false,<font></font>
                zoom: this.zoomVal,<font></font>
                center: this.centerRef,<font></font>
                options: {<font></font>
                    mapTypeControl: false,<font></font>
                    streetViewControl: false,<font></font>
                },<font></font>
                mapTypeId: 'styledMapType',<font></font>
                mapIconDestination: '/images/map-pin_destination.png',<font></font>
                mapIconActivity: '/images/map-pin_activity.png',<font></font>
                mapIconAccommodation: '/images/map-pin_accommodation.png',<font></font>
                mapIconEvent: '/images/map-pin_event.png',<font></font>
                mapIconBusiness: '/images/map-pin_business.png',<font></font>
                locations: [],<font></font>
                markers: []<font></font>
            }<font></font>
        },<font></font>
        created: function() {<font></font>
            this.getData();<font></font>
        },<font></font>
        mounted: function() {<font></font>
            this.$nextTick(() =&gt; {<font></font>
                this.$refs.karrathaMap.$mapPromise.then((map) =&gt; {<font></font>
                    var styledMapType = new google.maps.StyledMapType(<font></font>
                        [...MAP_STYLE SETTINGS...]<font></font>
                    )<font></font>
                    map.mapTypes.set('styled_map', styledMapType);<font></font>
                    map.setMapTypeId('styled_map');<font></font>
<font></font>
                })<font></font>
<font></font>
            });<font></font>
        },<font></font>
        watch: {<font></font>
            feedLoaded: function() {<font></font>
                if (this.feedLoaded == true) {<font></font>
                    console.log(JSON.stringify(this.locations))<font></font>
                }<font></font>
            }<font></font>
        },<font></font>
        methods: {<font></font>
            getData() {<font></font>
                const url = feedURL;<font></font>
                axios<font></font>
                    .get(url)<font></font>
                    .then((response) =&gt; {this.locations = response.data;})<font></font>
                    .then(this.feedLoaded = true)<font></font>
                    .catch( error =&gt; { console.log(error); }<font></font>
                );<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2705篇《VueJS：Google Maps在数据准备就绪之前先加载-如何使其等待？（Nuxt）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuejs在元素上支持v-if指令。</font><font style="vertical-align: inherit;">我建议您尝试使用以下代码段。</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="map" v-if="loaded"&gt;<font></font>
    &lt;gmap-map ref="map" :center="center" :zoom="zoom" :map-type-id="mapTypeId" :options="options"&gt;<font></font>
      &lt;gmap-marker<font></font>
        :key="index" v-for="(m, index) in locations"<font></font>
        :position="{ lat: parseFloat(m.place_latitude), lng: parseFloat(m.place_longitude) }"<font></font>
        @click="toggleInfoWindow(m,index)"<font></font>
        :icon="mapIconDestination"&gt;<font></font>
      &lt;/gmap-marker&gt;<font></font>
      &lt;gmap-info-window&gt;&lt;/gmap-info-window&gt;<font></font>
    &lt;/gmap-map&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
<font></font>
&lt;script&gt;<font></font>
  export default {<font></font>
    data() {<font></font>
      return {<font></font>
        loaded: false<font></font>
      }<font></font>
    },<font></font>
    beforeMount: function () {<font></font>
      const url = feedURL;<font></font>
      axios<font></font>
        .get(url)<font></font>
        .then((response) =&gt; {<font></font>
          this.locations = response.data;<font></font>
          //activate element after api call response recieved<font></font>
          this.loaded = true<font></font>
        })<font></font>
        .catch(error =&gt; {<font></font>
            console.log(error);<font></font>
          }<font></font>
        );<font></font>
    }<font></font>
  }<font></font>
<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它似乎与数据格式有关。</font><font style="vertical-align: inherit;">据</font></font><code>vue-devtools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://www.dropbox.com/s/p0536306hk8v0nu/Screen%20Shot%202018-12-29%20at%2015.01.41.png?dl=0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供的屏幕截图</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的数据是从WordPress的REST API在下面的格式返回：</font></font></p>

<pre><code>[<font></font>
  {<font></font>
    "acf": {<font></font>
      "place_latitude": "-22.695754",<font></font>
      "place_longitude": "118.269081",<font></font>
      "place_short-description": "Karijini National Park"<font></font>
    },<font></font>
    "id": 12,<font></font>
    "parent": 10,<font></font>
    "title": {<font></font>
      "rendered": "Karijini National Park"<font></font>
    }<font></font>
  },<font></font>
  ... <font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有如何</font></font><code>locations</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化数组的</font></font><code>getData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">方法），可以像这样传递position属性：</font></font></p>

<pre><code>&lt;gmap-marker<font></font>
    :key="index"<font></font>
    v-for="(m, index) in locations"<font></font>
    :position="{ lat: parseFloat(m.acf.place_latitude), lng: parseFloat(m.acf.place_longitude) }"<font></font>
&gt;&lt;/gmap-marker&gt;<font></font>
</code></pre>

<p><a href="https://codesandbox.io/s/w66rlyj345" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个演示</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
