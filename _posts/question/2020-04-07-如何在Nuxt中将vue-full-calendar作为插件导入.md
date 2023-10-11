---
layout: question
title:  如何在Nuxt中将vue-full-calendar作为插件导入
date:   2020-04-07T03:53:50.000Z
description: 我在让vue-full-calendar与Nuxt合作时遇到问题。我在插件目录中创建了插件vue-full-calendar.js，在其中检查浏览器环境：...
img: 
author: 樱
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在让vue-full-calendar与Nuxt合作时遇到问题。</font><font style="vertical-align: inherit;">我在插件目录中创建了插件vue-full-calendar.js，在其中检查浏览器环境：</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
<font></font>
if (process.browser) {<font></font>
  window.onNuxtReady(() =&gt; {<font></font>
    const VueFullCalendar = require('vue-full-calendar')<font></font>
    Vue.use(VueFullCalendar)<font></font>
  })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接下来，我将插件添加到nuxt.config.js并将ssr设置为“ false”，如下所示：</font></font></p>

<pre><code>plugins: [<font></font>
    { src: '~plugins/vue-full-calendar', ssr: false }<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是将其包含在我的nuxt页面文件的模板部分中：</font></font></p>

<pre><code> &lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;full-calendar :events="events" :header="header" :config="config" ref="calendar"&gt;&lt;/full-calendar&gt;<font></font>
    &lt;appointment-dialog :show="showAppointmentDialog"<font></font>
                        :selectedAppointment="selectedAppointment"<font></font>
                        @dialog-close="showAppointmentDialog = false"&gt;<font></font>
    &lt;/appointment-dialog&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  import {mapGetters} from 'vuex'<font></font>
  import AppointmentDialog from '~/components/AppointmentDialog'<font></font>
<font></font>
  export default {<font></font>
    head () {<font></font>
      return {title: this.$t('appointments')}<font></font>
    },<font></font>
    data () {<font></font>
      return {<font></font>
        showAppointmentDialog: false,<font></font>
        selected: {},<font></font>
        header: {<font></font>
          center: 'title',<font></font>
          left: 'prev,next today',<font></font>
          right: 'agendaWeek,agendaDay'<font></font>
        },<font></font>
        events: []<font></font>
      }<font></font>
    },<font></font>
    fetch ({store, params}) {<font></font>
      store.dispatch('appointments/fetch')<font></font>
      store.dispatch('settings/fetch')<font></font>
    },<font></font>
    methods: {<font></font>
      goToDate (date) {<font></font>
        this.$refs.calendar.fireMethod('gotoDate', date)<font></font>
      }<font></font>
    },<font></font>
    watch: {<font></font>
      selectedDate (date) {<font></font>
        this.goToDate(date)<font></font>
      }<font></font>
    },<font></font>
    computed: {<font></font>
      ...mapGetters({<font></font>
        selectedAppointment: 'appointments/selected',<font></font>
        appointments: 'appointments/appointments',<font></font>
        settings: 'settings/byName',<font></font>
        selectedDate: 'dates/selectedDate'<font></font>
      }),<font></font>
      config () {<font></font>
        return {<font></font>
          eventClick: (event) =&gt; {<font></font>
            this.selected = event.source.rawEventDefs[0]<font></font>
            this.$store.commit('SET_SELECTED_APPOINTMENT', this.selected)<font></font>
            this.showAppointmentDialog = true<font></font>
          },<font></font>
          firstDay: 1,<font></font>
          defaultDate: this.selectedDate,<font></font>
          allDaySlot: false,<font></font>
          slotDuration: 15,<font></font>
          slotLabelInterval: 'label',<font></font>
          minTime: 8,<font></font>
          maxTime: 19<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    components: {<font></font>
      AppointmentDialog<font></font>
    }<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在控制台中，我得到两个错误：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">' </font></font><code>The client-side rendered virtual DOM tree is not matching server-rendered content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">' </font></font><code>Unknown custom element: &lt;full-calendar&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于我将完整的日历组件注册为插件，因此应该在全球范围内进行注册。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4133篇《如何在Nuxt中将vue-full-calendar作为插件导入》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
