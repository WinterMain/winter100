---
layout: question
title:  Nuxt渲染函数，用于包含Vue组件的HTML字符串
date:   2020-03-23T02:55:21.000Z
description: 我正在为Nuxt解决这个问题WIP的Codesandbox无法使用：https：//codesandbox.io/s/zw26v3940m好的，所...
img: 
author: 西门
category: question
answer: 4
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为Nuxt解决这个问题</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WIP的Codesandbox无法使用：</font><a href="https://codesandbox.io/s/zw26v3940m" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：//codesandbox.io/s/zw26v3940m</font></font><a href="https://codesandbox.io/s/zw26v3940m" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，所以我将WordPress作为CMS，它正在输出一堆HTML。</font><font style="vertical-align: inherit;">HTML的示例如下所示：</font></font></p>

<pre><code>'&lt;h2&gt;A heading tag&lt;/h2&gt;<font></font>
&lt;site-banner image="{}" id="123"&gt;Slot text here&lt;/site-banner&gt;<font></font>
&lt;p&gt;some text&lt;/p&gt;'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，它包含一个</font></font><code>&lt;site-banner&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有一些道具</font><font style="vertical-align: inherit;">的Vue组件</font><font style="vertical-align: inherit;">（该</font></font><code>image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具是我为了简洁而省略的JSON对象）。</font><font style="vertical-align: inherit;">该组件已在全球注册。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个我们编写的组件，该组件</font></font><code>&lt;wp-content&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vue中很好用，但在Nuxt中不起作用。</font><font style="vertical-align: inherit;">注意这两个渲染函数，一个是Vue的，另一个是Nuxt的（显然，这是出于示例的原因，我不会同时使用两者）。</font></font></p>

<pre><code>export default {<font></font>
    props: {<font></font>
        html: {<font></font>
            type: String,<font></font>
            default: ""<font></font>
        }<font></font>
    },<font></font>
    render(h, context) {<font></font>
        // Worked great in Vue<font></font>
        return h({ template: this.html })<font></font>
    }      <font></font>
    render(createElement, context) {<font></font>
        // Kind of works in Nuxt, but doesn't render Vue components at all<font></font>
        return createElement("div", { domProps: { innerHTML: this.html } })<font></font>
    } <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，最后一个渲染函数在Nuxt中可用，除了它实际上不会在中渲染Vue组件外</font></font><code>this.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它只是将它们作为HTML放置在页面上。</font></font></p>

<p>So how do I do this in Nuxt? I want to take a string of HTML from the server, and render it on the page, and turn any registered Vue components into proper full-blown Vue components. Basically a little "VueifyThis(html)" factory.</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对您的codeandbox进行了一些更改。</font><font style="vertical-align: inherit;">似乎现在可以工作</font></font><a href="https://codesandbox.io/s/q9wl8ry6q9" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codesandbox.io/s/q9wl8ry6q9</font></font></a>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更改的东西无效：  </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板在当前版本的Vue中只能具有一个根元素</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-bind仅接受变量，但您传入一个字符串。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><a href="https://vuejs.org/v2/guide/syntax.html#Raw-HTML" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令呈现html？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喜欢：</font></font></p>

<pre><code>&lt;div v-html="html"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为它将做得到。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是关于codeandbox的解决方案：</font><a href="https://codesandbox.io/s/wpcontent-j43sp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://codesandbox.io/s/wpcontent-j43sp</font></font><a href="https://codesandbox.io/s/wpcontent-j43sp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要点是将动态组件包装</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>dynamicComponent()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板</font><font style="vertical-align: inherit;">中的一个HTML标记中</font><font style="vertical-align: inherit;">（因为它只有一个根元素），并且它来自Wordpress，因此源字符串本身可以具有任意数量的顶级元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且该</font></font><code>WpContent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件必须导入。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Harry</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最有效的方法，也是最干净的方法，这要归功于Nuxt团队通过</font></font><a href="https://otechie.com/nuxt/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">oTechie</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供的Jonas Galvez </font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>export default {<font></font>
  props: {<font></font>
    html: {<font></font>
      type: String,<font></font>
      default: ""<font></font>
    }<font></font>
  },<font></font>
  render(h) {<font></font>
    return h({<font></font>
      template: `&lt;div&gt;${this.html}&lt;/div&gt;`<font></font>
    });<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中：</font></font></p>

<pre><code>    build: {<font></font>
        extend(config, ctx) {<font></font>
            // Include the compiler version of Vue so that wp-content works<font></font>
            config.resolve.alias["vue$"] = "vue/dist/vue.esm.js"<font></font>
        }<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
