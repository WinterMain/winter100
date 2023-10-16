---
layout: question
title:  如何在vue-router上回退/回退？
date:   2020-03-11T03:51:00.000Z
description: 好的，简单解释一下：我有3页。第1页（首页）第2页（菜单）第3页（关于）第1页有- <router-link  to="/menu...
img: 
author: GilDavaid米亚
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，简单解释一下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有3页。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第1页（首页）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2页（菜单）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第3页（关于）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第1页有- </font></font></p>

<pre><code>&lt;router-link  to="/menu"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击该按钮将转到“ /菜单”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，第2页（菜单）有一个 </font></font></p>

<pre><code>&lt;router-link  to="/"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮，然后单击此按钮，它将返回到先前的位置“ /”第1页（主页）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我不想为路由器的每个页面创建一个组件以“返回”上一页（好像我有100个页面，这可能会路由很多工作）。</font><font style="vertical-align: inherit;">有没有办法用vue-router做到这一点？</font><font style="vertical-align: inherit;">类似于window.history.back（）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好奇是否有办法做到这一点，因为我在文档中找不到它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢！</font><font style="vertical-align: inherit;">约翰</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第626篇《如何在vue-router上回退/回退？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种解决方案是使用</font></font><a href="https://www.npmjs.com/package/vue-router-back-mixin" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-router-back-mixin</font></font></a></p>

<pre><code>import BackMixin from `vue-router-back-mixin`<font></font>
<font></font>
export default {<font></font>
  ...<font></font>
  mixins: [BackMixin],<font></font>
  methods() {<font></font>
    goBack() {<font></font>
      this.backMixin_handleBack()<font></font>
    }<font></font>
  }<font></font>
  ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin西门神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://router.vuejs.org/en/essentials/navigation.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序化导航</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。要返回，请使用以下命令：</font></font></p>

<pre><code>router.go(n) 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">n</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以是正数或负数（返回）。</font><font style="vertical-align: inherit;">这与history.back（）相同，因此您可以使用以下元素：</font></font></p>

<pre><code>&lt;a @click="$router.go(-1)"&gt;back&lt;/a&gt;
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
