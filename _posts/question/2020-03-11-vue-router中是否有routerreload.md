---
layout: question
title:  vue-router中是否有router.reload？
date:   2020-03-11T03:04:26.000Z
description: 我在此拉取请求中看到：    添加一个 router.reload()    重新加载当前路径并再次调用数据挂钩  但是，当我尝试从V...
img: 
author: 理查德Itachi
category: question
answer: 8
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在此</font></font><a href="https://github.com/vuejs/vue-router/pull/442" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拉取请求中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <ul>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加一个 </font></font><code>router.reload()</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新加载当前路径并再次调用数据挂钩</font></font></p></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我尝试从Vue组件发出以下命令时： </font></font></p>

<pre><code>this.$router.reload()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到此错误：</font></font></p>

<blockquote>
  <p><code>Uncaught TypeError: this.$router.reload is not a function</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="https://router.vuejs.org/en/api/router-link.html?q=reload" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中进行了搜索</font><font style="vertical-align: inherit;">，但未找到任何相关内容。</font><font style="vertical-align: inherit;">vue / vue-router是否提供某些这样的功能？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我感兴趣的软件版本是：</font></font></p>

<pre><code>"vue": "^2.1.0",<font></font>
"vue-router": "^2.0.3",<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS。</font><font style="vertical-align: inherit;">我知道这</font></font><code>location.reload()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是替代方法之一，但我正在寻找本机Vue选项。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第579篇《vue-router中是否有router.reload？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>For rerender you can use in parent component</p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div v-if="renderComponent"&gt;content&lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
   data() {<font></font>
      return {<font></font>
        renderComponent: true,<font></font>
      };<font></font>
    },<font></font>
    methods: {<font></font>
      forceRerender() {<font></font>
        // Remove my-component from the DOM<font></font>
        this.renderComponent = false;<font></font>
<font></font>
        this.$nextTick(() =&gt; {<font></font>
          // Add the component back in<font></font>
          this.renderComponent = true;<font></font>
        });<font></font>
      }<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析到URL的路由，并使用Javascript导航窗口。 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>        let r = this.$router.resolve({<font></font>
        name: this.$route.name, // put your route information in<font></font>
        params: this.$route.params, // put your route information in<font></font>
        query: this.$route.query // put your route information in<font></font>
      });<font></font>
      window.location.assign(r.href)</code></pre>
</div>
</div>
<p></p>

<p>This method replaces the URL and causes the page to do a full request (refresh) rather than relying on Vue.router. $router.go does not work the same for me even though it is theoretically supposed to.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>router.go(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用 TypeScript，并且它要求的参数为细末方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神乐路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的重载。</font><font style="vertical-align: inherit;">由于某些浏览器很奇怪。</font></font><code>location.reload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法重新加载。</font></font></p>

<pre><code>methods:{<font></font>
   reload: function(){<font></font>
      this.isRouterAlive = false<font></font>
      setTimeout(()=&gt;{<font></font>
         this.isRouterAlive = true<font></font>
      },0)<font></font>
   }<font></font>
}<font></font>
</code></pre>

<pre><code>&lt;router-view v-if="isRouterAlive"/&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德神乐老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我的方法！</font></font></p>

<pre><code>methods:<font></font>
{<font></font>
        reload()<font></font>
        {<font></font>
            var location = this.$route.fullPath<font></font>
<font></font>
            this.$router.replace('/')<font></font>
<font></font>
            this.$nextTick(() =&gt; this.$router.replace(location))<font></font>
        }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是将：key属性添加到：</font></font></p>

<pre><code>&lt;router-view :key="$route.fullPath"&gt;&lt;/router-view&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为如果寻址相同的组件，Vue Router不会注意到任何更改。</font><font style="vertical-align: inherit;">使用该键，对路径的任何更改都将触发使用新数据重新加载组件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在GitHub上检查了vue-router回购，似乎不再有</font></font><code>reload()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何方法。</font><font style="vertical-align: inherit;">但在同一文件中有：</font></font><code>currentRoute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><a href="https://github.com/vuejs/vue-router/blob/dev/src/index.js#L79" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-router / src / index.js</font></font></a> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
文件：</font></font><a href="https://github.com/vuejs/vue-router/blob/8bdabc772065fbcba9c59318f07c09bf45769c12/docs/en/api/router-instance.md#routercurrentroute" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs</font></font></a></p>

<pre><code>get currentRoute (): ?Route {<font></font>
    return this.history &amp;&amp; this.history.current<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以</font></font><code>this.$router.go(this.$router.currentRoute)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于重新加载当前路线。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的</font></font><a href="http://codepen.io/anon/pen/eBaEPw" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案的版本：</font></font></p>

<pre><code>"vue": "^2.1.0",<font></font>
"vue-router": "^2.1.1"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>this.$router.go()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正是这样做的；</font><font style="vertical-align: inherit;">如果未指定任何参数，则路由器导航到当前位置，刷新页面。</font></font></p>

<p><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注：目前</font></font><a href="http://github.com/vuejs/vue-router/blob/dev/src/index.js#L175" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行的路由器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://github.com/vuejs/vue-router/blob/dev/src/history/html5.js#L40" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的历史分量</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不标记帕拉姆为可选，但IMVHO它要么错误或埃文您的部分不作为，因为</font></font><a href="http://developer.mozilla.org/en-US/docs/Web/API/History/go#Parameters" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该规范明确允许</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="http://github.com/vuejs/vue-router/issues/3065" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经提交了一个问题报告。</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您真的担心当前的TS批注，请使用等效的</font></font><code>this.$router.go(0)</code></sub></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于“为什么会这样”：在</font></font><code>go</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部将其参数传递给</font></font><code>window.history.go</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此其等于</font></font><code>windows.history.go()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-进而根据</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/History" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN doc</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新加载页面</font><font style="vertical-align: inherit;">。</font></font></p>

<p><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：由于这会在常规桌面（非便携式）Firefox上执行“软”重新加载，因此，如果使用它，可能会出现许多奇怪的怪癖，但实际上您需要真正的重新加载；</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">OP提到</font><font style="vertical-align: inherit;">的</font></font><code>window.location.reload(true);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Web/API/Location/reload</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）可能会有所帮助-它确实解决了我在FF上的问题。</font></font></sub></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
