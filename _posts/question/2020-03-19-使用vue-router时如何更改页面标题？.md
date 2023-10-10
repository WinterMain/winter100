---
layout: question
title:  使用vue-router时如何更改页面标题？
date:   2020-03-19T02:10:41.000Z
description: 如果可能，我想在路线定义中指定标题。通常在<head><title>浏览器标题栏中指定和显示的内容。我的项目设置如下：main.jsimpor...
img: 
author: 神奇飞云
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可能，我想在路线定义中指定标题。</font><font style="vertical-align: inherit;">通常在</font></font><code>&lt;head&gt;&lt;title&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器标题栏中</font><font style="vertical-align: inherit;">指定</font><font style="vertical-align: inherit;">和显示的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目设置如下：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>import Vue from 'vue'<font></font>
import App from './App.vue'<font></font>
import VeeValidate from 'vee-validate';<font></font>
import router from './router'<font></font>
import ElementUI from 'element-ui';<font></font>
import 'element-ui/lib/theme-chalk/index.css';<font></font>
<font></font>
Vue.use(VeeValidate);<font></font>
Vue.use(ElementUI);<font></font>
Vue.config.productionTip = false<font></font>
<font></font>
new Vue({<font></font>
    router,<font></font>
    render: h =&gt; h(App)<font></font>
}).$mount('#app')<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">router.js</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>import Vue from 'vue'<font></font>
import Router from 'vue-router'<font></font>
import Skills from './components/Skills.vue'<font></font>
import About from './components/About.vue'<font></font>
<font></font>
Vue.use(Router)<font></font>
<font></font>
export default new Router({<font></font>
  routes: [<font></font>
    {<font></font>
      path: '/',<font></font>
      name: 'skills',<font></font>
      component: Skills,<font></font>
      meta: { title: 'Skills - MyApp' } // &lt;- I would to use this one<font></font>
    },<font></font>
    {<font></font>
      path: '/about/:name',  // Add /:name here<font></font>
      name: 'about',<font></font>
      component: About,<font></font>
      meta: { title: 'About - MyApp' }<font></font>
    }<font></font>
  ]<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好是，我希望有一个自动系统，而不是在每个组件的已创建功能上更改页面标题。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2248篇《使用vue-router时如何更改页面标题？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西三千曜飞云</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想补充一点，以上内容并未真正保留历史记录。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得更好的答案，该答案实际上可以处理历史记录（尽管有些古怪）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
