---
layout: question
title:  Vue Chart.js-数据更改时图表未更新
date:   2020-03-13T12:26:00.000Z
description: 我正在使用Vue.js和Chart.js绘制一些图表。每次调用该函数时generateChart()，图表不会自动更新。当我在Vue Devtools中检...
img: 
author: 米亚Near
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vue.js和Chart.js绘制一些图表。</font><font style="vertical-align: inherit;">每次调用该函数时</font></font><code>generateChart()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，图表不会自动更新。</font><font style="vertical-align: inherit;">当我在Vue Devtools中检查数据时，它们是正确的，但图表未反映数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的事实：调整窗口大小时，图表正在更新。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在做什么错了？ </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次致电时如何更新图表</font></font><code>generateChart()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这将</font></font><code>object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改检测警告有关，但是我不确定该怎么做。</font></font></p>

<p><a href="https://codepen.io/anon/pen/bWRVKB?editors=1010" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codepen.io/anon/pen/bWRVKB?editors=1010</font></font></a></p>

<pre><code>&lt;el-dialog title="Chart" v-model="showGeneratedChart"&gt;<font></font>
     &lt;line-chart :chartData="dataChart"&gt;&lt;/line-chart&gt;<font></font>
&lt;/el-dialog&gt;<font></font>
<font></font>
 export default{<font></font>
    data (){<font></font>
        const self = this;<font></font>
        return {<font></font>
         dataChart : {<font></font>
                labels : [],<font></font>
                datasets: [{<font></font>
                        label: 'label',<font></font>
                        backgroundColor: '#FC2525',<font></font>
                        data: [0, 1, 2, 3, 4],<font></font>
                    }]<font></font>
        }<font></font>
    }<font></font>
}<font></font>
<font></font>
<font></font>
 generateChart() { <font></font>
     this.dataChart['labels'] = [];<font></font>
     this.dataChart['datasets'] = [];<font></font>
<font></font>
     ... compute datasets and formattedLabels<font></font>
<font></font>
     this.dataChart['labels'] = formattedLabels;<font></font>
     this.dataChart['datasets'] = datasets;<font></font>
 }<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LineChart.js</font></font></h3>

<pre><code>import { Line, mixins } from 'vue-chartjs'<font></font>
<font></font>
export default Line.extend({<font></font>
    mixins: [mixins.reactiveProp],<font></font>
    props: ["options"],<font></font>
    mounted () {<font></font>
        this.renderChart(this.chartData, this.options)<font></font>
    }<font></font>
})<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1551篇《Vue Chart.js-数据更改时图表未更新》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将计算的属性用于图表数据。</font><font style="vertical-align: inherit;">而不是调用</font></font><code>this.renderChart</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">watch，将其包装在方法中，</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在</font><font style="vertical-align: inherit;">和中重用该方法</font></font><code>watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>Vue.component("line-chart", {<font></font>
  extends: VueChartJs.Line,<font></font>
  props: ["data", "options"],<font></font>
  mounted() {<font></font>
    this.renderLineChart();<font></font>
  },<font></font>
  computed: {<font></font>
    chartData: function() {<font></font>
      return this.data;<font></font>
    }<font></font>
  },<font></font>
  methods: {<font></font>
    renderLineChart: function() {<font></font>
    this.renderChart(<font></font>
      {<font></font>
        labels: [<font></font>
          "January",<font></font>
          "February",<font></font>
          "March",<font></font>
          "April",<font></font>
          "May",<font></font>
          "June",<font></font>
          "July"<font></font>
        ],<font></font>
        datasets: [<font></font>
          {<font></font>
            label: "Data One",<font></font>
            backgroundColor: "#f87979",<font></font>
            data: this.chartData<font></font>
          }<font></font>
        ]<font></font>
      },<font></font>
      { responsive: true, maintainAspectRatio: false }<font></font>
    );      <font></font>
    }<font></font>
  },<font></font>
  watch: {<font></font>
    data: function() {<font></font>
      this._chart.destroy();<font></font>
      //this.renderChart(this.data, this.options);<font></font>
      this.renderLineChart();<font></font>
    }<font></font>
  }<font></font>
});<font></font>
<font></font>
var vm = new Vue({<font></font>
  el: ".app",<font></font>
  data: {<font></font>
    message: "Hello World",<font></font>
    dataChart: [10, 39, 10, 40, 39, 0, 0],<font></font>
    test: [4, 4, 4, 4, 4, 4]<font></font>
  },<font></font>
  methods: {<font></font>
    changeData: function() {<font></font>
      this.dataChart = [6, 6, 3, 5, 5, 6];<font></font>
    }<font></font>
  }<font></font>
});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;meta charset="utf-8"&gt;<font></font>
  &lt;meta name="viewport" content="width=device-width"&gt;<font></font>
  &lt;title&gt;Vue.jS Chart&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div class="app"&gt;<font></font>
    {{ dataChart }}<font></font>
   &lt;button v-on:click="changeData"&gt;Change data&lt;/button&gt;<font></font>
  &lt;line-chart :data="dataChart" :options="{responsive: true, maintainAspectRatio: false}"&gt;&lt;/line-chart&gt;<font></font>
 <font></font>
&lt;/div&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://unpkg.com/vue-chartjs@2.5.7-rc3/dist/vue-chartjs.full.min.js"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p>

<p>You could also make the options a computed property, and if option not going to change much you can setup default props. <a href="https://vuejs.org/v2/guide/components.html#Prop-Validation" rel="noreferrer">https://vuejs.org/v2/guide/components.html#Prop-Validation</a></p>

<p>Here is a working codepen <a href="https://codepen.io/azs06/pen/KmqyaN?editors=1010" rel="noreferrer">https://codepen.io/azs06/pen/KmqyaN?editors=1010</a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
