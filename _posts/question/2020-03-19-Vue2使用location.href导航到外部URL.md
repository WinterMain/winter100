---
layout: question
title:  Vue2使用location.href导航到外部URL
date:   2020-03-19T06:37:07.000Z
description: 我试图使用router.go，router.push，router.replace和window.location.href转到“ www.mytarge...
img: 
author: 西门Eva小胖
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图使用router.go，router.push，router.replace和window.location.href转到“ www.mytargeturl.org”以重定向我的vuejs应用程序，但我总是得到myVueapp.com/www.mytargeturl.org，这是我的路线：</font></font></p>

<pre><code>  routes:[<font></font>
{path: '/', component: App,<font></font>
  children:[<font></font>
    {<font></font>
      path: 'detail',<font></font>
      component: ItemDetail,<font></font>
      props: true<font></font>
    },<font></font>
    {<font></font>
      path: 'search',<font></font>
      component: Middle<font></font>
    }       <font></font>
  ]<font></font>
},   <font></font>
{<font></font>
  path: '/test', component: Test<font></font>
},<font></font>
{ path: '/a', redirect: 'www.mytargeturl.org' } // also tried this but didnt work<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2406篇《Vue2使用location.href导航到外部URL》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
