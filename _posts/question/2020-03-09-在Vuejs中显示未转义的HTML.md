---
layout: question
title:  在Vue.js中显示未转义的HTML
date:   2020-03-09T14:53:15.000Z
description: 如何设法在胡子绑定中解释HTML？目前，中断（<br />）只是显示/转义。小Vue应用：var logapp = new Vue({  el ...
img: 
author: 泡芙Green
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何设法在胡子绑定中解释HTML？</font><font style="vertical-align: inherit;">目前，中断（</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）只是显示/转义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小Vue应用：</font></font></p>

<pre><code>var logapp = new Vue({<font></font>
  el: '#logapp',<font></font>
  data: {<font></font>
    title: 'Logs',<font></font>
    logs: [<font></font>
      { status: true, type: 'Import', desc: 'Learn&lt;br /&gt;JavaScript', date: '11.11.2015', id: 1  },<font></font>
      { status: true, type: 'Import', desc: 'Learn&lt;br /&gt;JavaScript', date: '11.11.2015', id: 1  }<font></font>
    ]<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是模板：</font></font></p>

<pre><code>&lt;div id="logapp"&gt;    <font></font>
    &lt;table&gt;<font></font>
        &lt;tbody&gt;<font></font>
            &lt;tr v-repeat="logs"&gt;<font></font>
                &lt;td&gt;{{fail}}&lt;/td&gt;<font></font>
                &lt;td&gt;{{type}}&lt;/td&gt;<font></font>
                &lt;td&gt;{{description}}&lt;/td&gt;<font></font>
                &lt;td&gt;{{stamp}}&lt;/td&gt;<font></font>
                &lt;td&gt;{{id}}&lt;/td&gt;<font></font>
            &lt;/tr&gt;<font></font>
        &lt;/tbody&gt;<font></font>
    &lt;/table&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第329篇《在Vue.js中显示未转义的HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，Vue附带了v-html指令来显示它，您将其绑定到元素本身，而不是对字符串变量使用常规的胡子绑定。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对于您的特定示例，您将需要：</font></font></p>

<pre><code>&lt;div id="logapp"&gt;    <font></font>
    &lt;table&gt;<font></font>
        &lt;tbody&gt;<font></font>
            &lt;tr v-repeat="logs"&gt;<font></font>
                &lt;td v-html="fail"&gt;&lt;/td&gt;<font></font>
                &lt;td v-html="type"&gt;&lt;/td&gt;<font></font>
                &lt;td v-html="description"&gt;&lt;/td&gt;<font></font>
                &lt;td v-html="stamp"&gt;&lt;/td&gt;<font></font>
                &lt;td v-html="id"&gt;&lt;/td&gt;<font></font>
            &lt;/tr&gt;<font></font>
        &lt;/tbody&gt;<font></font>
    &lt;/table&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="http://vuejs.org/guide/syntax.html#Raw-HTML" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以在这里读到</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font></p>

<pre><code>{{&lt;br /&gt;}}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会逃脱。</font><font style="vertical-align: inherit;">如果您想要原始html，则必须使用</font></font></p>

<pre><code>{{{&lt;br /&gt;}}}
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（2017年2月5日）：正如@hitautodestruct指出的那样，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在vue 2中，您应该使用</font></font><a href="https://vuejs.org/v2/api/#v-html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-html</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是三重花括号。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用v-html指令在vue组件中显示html内容</font></font></p>

<pre><code>&lt;div v-html="html content data property"&gt;&lt;/div&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGO梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用指令v-html进行显示。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;td v-html="desc"&gt;&lt;/td&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Vue2开始，不赞成使用三括号</font></font><code>v-html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>&lt;div v-html="task.html_content"&gt; &lt;/div&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://vuejs.org/v2/guide/syntax.html#Raw-HTML" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不清楚</font><font style="vertical-align: inherit;">我们应该放置在什么地方</font></font><code>v-html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您的变量在里面</font></font><code>v-html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，</font></font><code>v-html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能与一起使用</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不能与一起使用</font></font><code>&lt;template&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想在应用程序中实时观看，请单击</font></font><a href="https://github.com/thewhitetulip/Tasks-vue/commit/d9da739f0ff5968abdac9555e1321dcf30b931c5" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
