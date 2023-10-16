---
layout: question
title:  用vue-cli构建深层嵌套的html需要永远
date:   2020-03-13T09:12:08.000Z
description: 我发现，一旦模板的html变得相对较深，vue-cli（2.9.6，但3.0.0 beta \*也有同样的问题）的构建过程将永远花费。举例来说，我只是增...
img: 
author: GreenGil
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现，一旦模板的html变得相对较深，vue-cli（2.9.6，但3.0.0 beta *也有同样的问题）的构建过程将永远花费。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">举例来说，我只是增加了一些</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s到</font></font><code>App.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中预先包括：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;img src="./assets/logo.png"&gt;<font></font>
    &lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<font></font>
    &lt;HelloWorld/&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要那么长时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是一旦得到这个：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;img src="./assets/logo.png"&gt;<font></font>
    &lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<font></font>
    &lt;HelloWorld/&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么构建过程将永远耗费时间，而且我相信这种深度的嵌套并不少见。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何处理这个问题？</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑（详细信息）</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来问题可能是特定于环境的，所以这里是详细信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少在以下环境中可以重现此问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mac mini上的macOS High Sierra（2014年末）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dell XPS 13上的Ubuntu 18.04</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点和npm版本是：</font></font></p>

<pre><code>node --version<font></font>
# prints<font></font>
v8.9.4<font></font>
# and<font></font>
npm version<font></font>
# prints<font></font>
{ npm: '6.1.0',<font></font>
  ares: '1.10.1-DEV',<font></font>
  cldr: '31.0.1',<font></font>
  http_parser: '2.7.0',<font></font>
  icu: '59.1',<font></font>
  modules: '57',<font></font>
  nghttp2: '1.25.0',<font></font>
  node: '8.9.4',<font></font>
  openssl: '1.0.2n',<font></font>
  tz: '2017b',<font></font>
  unicode: '9.0',<font></font>
  uv: '1.15.0',<font></font>
  v8: '6.1.534.50',<font></font>
  zlib: '1.2.11' }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有了这些，我在Mac上重试了以下内容：</font></font></p>

<pre><code>npm uninstall -g vue-cli<font></font>
npm install -g vue-cli<font></font>
vue init webpack divnest<font></font>
# then some Enter keys - everything is default<font></font>
cd divnest<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，打开</font></font><code>App.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并放置许多div：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;img src="./assets/logo.png"&gt;<font></font>
    &lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;<font></font>
    &lt;router-view/&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p>(Since I used the default settings here, <code>&lt;router-view/&gt;</code> is included unlike the original post, but should not be the problem.)</p>

<p>And finally,</p>

<pre><code>npm run dev
</code></pre>

<p>which takes forever - specifically, the process stops at this point:</p>

<pre><code> 13% building modules 28/31 modules 3 active ...myname/Documents/divnest/src/App.vue
</code></pre>

<p>In the case of</p>

<pre><code>npm run build
</code></pre>

<p>, the process stops at this point:</p>

<pre><code>&gt; divnest@1.0.0 build /Users/myname/Documents/divnest<font></font>
&gt; node build/build.js<font></font>
<font></font>
Hash: 483ebabc54d5aed79fd7<font></font>
Version: webpack 3.12.0<font></font>
Time: 13742ms<font></font>
                                                  Asset       Size  Chunks             Chunk Names<font></font>
               static/js/vendor.7fed9fa7b7ba482410b7.js     112 kB       0  [emitted]  vendor<font></font>
                  static/js/app.f1ebca7a6e0ec0b7ebdf.js      12 kB       1  [emitted]  app<font></font>
             static/js/manifest.2ae2e69a05c33dfc65f8.js  857 bytes       2  [emitted]  manifest<font></font>
    static/css/app.30790115300ab27614ce176899523b62.css  432 bytes       1  [emitted]  app<font></font>
static/css/app.30790115300ab27614ce176899523b62.css.map  828 bytes          [emitted]  <font></font>
           static/js/vendor.7fed9fa7b7ba482410b7.js.map     553 kB       0  [emitted]  vendor<font></font>
              static/js/app.f1ebca7a6e0ec0b7ebdf.js.map    23.3 kB       1  [emitted]  app<font></font>
         static/js/manifest.2ae2e69a05c33dfc65f8.js.map    4.97 kB       2  [emitted]  manifest<font></font>
                                             index.html  509 bytes          [emitted]  <font></font>
<font></font>
  Build complete.<font></font>
<font></font>
  Tip: built files are meant to be served over an HTTP server.<font></font>
  Opening index.html over file:// won't work.<font></font>
<font></font>
 94% asset optimization <font></font>
</code></pre>

<p>and if I let it go, it takes... 1155409ms!!!!</p>

<pre><code> DONE  Compiled successfully in 1155409ms                                                        13:35:34<font></font>
<font></font>
 I  Your application is running here: http://localhost:8080<font></font>
</code></pre>

<h1>MORE EDIT</h1>

<p>As @tony19 pointed out, prettier is the likely suspect. Following the advice, I've tried some patterns with Ubuntu 18.04 (not Mac because Mac isn't here right now, sorry) and my results are:</p>

<ul>
<li>vue-cli 2.9.6 + <code>npm run dev</code> - hang</li>
<li>vue-cli 2.9.6 + <code>npm run build</code> - 6 secs (This is so confusing. What was  the 1 million seconds above!? Maybe reinstalling vue-cli owes the change?)</li>
<li>vue-cli 3.0.0-beta16 + <code>vue serve</code> - hang (as opposed to @tony19's report)</li>
<li>vue-cli 3.0.0-beta16 + <code>vue build</code> - 5 secs</li>
</ul>

<h1>EVEN MORE EDIT</h1>

<p>So, it seems that this is definitely caused by prettier.
<a href="https://github.com/prettier/prettier/issues/1250" rel="noreferrer">https://github.com/prettier/prettier/issues/1250</a>
is the original issue that addressed this problem and the dev team thought that <a href="https://github.com/prettier/prettier/pull/2259" rel="noreferrer">https://github.com/prettier/prettier/pull/2259</a> fixed it, but the reality is that it couldn't handle my case, as @tony19 shows it on <a href="https://github.com/prettier/prettier/issues/4672" rel="noreferrer">https://github.com/prettier/prettier/issues/4672</a> . Oh well.</p>

<h1>"SOLUTION"</h1>

<p>I ended up doing this - following @tony19's report, changing <code>/node_modules/vue-loader/lib/template-compiler/index.js</code> lines 78:81</p>

<pre><code>if (!isProduction) {<font></font>
  code = prettier.format(code, { semi: false })<font></font>
}<font></font>
</code></pre>

<p>to</p>

<pre><code>// if (!isProduction) {<font></font>
//   code = prettier.format(code, { semi: false })<font></font>
// }<font></font>
</code></pre>

<p>thus the problem is solved. Thank you frontend, thank you.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1472篇《用vue-cli构建深层嵌套的html需要永远》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近</font></font><code>vue-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其选项中添加了一个标志，以便</font></font><code>prettier</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发期间也</font><font style="vertical-align: inherit;">将其禁用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加</font></font><code>prettify: false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的</font></font><code>vue-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项。</font></font></p>

<p><a href="https://vue-loader.vuejs.org/options.html#prettify" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vue-loader.vuejs.org/options.html#prettify</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：请确保您拥有最新的vue-loader版本</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在vue-cli 3.1.1（TypeScript + SCSS）和Bootstrap（默认情况下需要嵌套）中遇到了类似的问题。</font><font style="vertical-align: inherit;">示例结构：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div class="container"&gt;<font></font>
        &lt;div class="row"&gt;<font></font>
            &lt;div class="col-12"&gt;<font></font>
                &lt;div class="card-deck"&gt;<font></font>
                    &lt;div class="card"&gt;<font></font>
                        &lt;div class="card-body"&gt;<font></font>
                            &lt;div class="accordion"&gt;<font></font>
                                &lt;div class="card"&gt;<font></font>
                                    &lt;div class="card-header"&gt;<font></font>
                                        ...<font></font>
                                    &lt;/div&gt;<font></font>
                                    &lt;div class="collapse"&gt;<font></font>
                                        &lt;div class="card-body"&gt;<font></font>
                                            &lt;div class="row"&gt;<font></font>
                                                &lt;div class="col-12 form-group"&gt;<font></font>
                                                    &lt;label&gt;...&lt;/label&gt;<font></font>
                                                    &lt;div class="dropdown"&gt;<font></font>
                                                        &lt;button class="custom-select" type="button" data-toggle="dropdown"&gt;{{someValue}}&lt;/button&gt;<font></font>
                                                        &lt;div class="dropdown-menu"&gt;<font></font>
                                                            &lt;a class="dropdown-item" href="#" :data-key="somekey1" @click="onClickMethod"&gt;value1&lt;/a&gt;<font></font>
                                                            &lt;a class="dropdown-item" href="#" :data-key="somekey2" @click="onClickMethod"&gt;value2&lt;/a&gt;<font></font>
                                                            ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要大约12秒钟来编译400多行代码（模板+ TypeScript + SCSS）。</font><font style="vertical-align: inherit;">删除后：</font></font></p>

<pre><code>:data-key="somekey1" @click="onClickMethod"<font></font>
:data-key="somekey2" @click="onClickMethod"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码需要约5-6秒的时间来编译。</font><font style="vertical-align: inherit;">将代码移至自定义组件（以及将某些TypeScript代码从Vue组件移至Helper.ts文件）之后：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div class="container"&gt;<font></font>
        &lt;div class="row"&gt;<font></font>
            &lt;div class="col-12"&gt;<font></font>
                &lt;div class="card-deck"&gt;<font></font>
                    &lt;div class="card"&gt;<font></font>
                        &lt;div class="card-body"&gt;<font></font>
                            &lt;div class="accordion"&gt;<font></font>
                                &lt;div class="card"&gt;<font></font>
                                    &lt;div class="card-header"&gt;<font></font>
                                        ...<font></font>
                                    &lt;/div&gt;<font></font>
                                    &lt;div class="collapse"&gt;<font></font>
                                        &lt;div class="card-body"&gt;<font></font>
                                            &lt;SubComponent/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它需要大约700毫秒的时间进行编译（一个主要组件和两个附加子组件，每个文件的代码少于100行，而Helper.ts文件恰好有97行代码）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，如果你患有不佳</font></font><code>npm run serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表现，尝试子组件首先，在调用我没有注意到，在编译时太大的区别</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以我认为（也许不正确地），这个问题也引起这是启用的码prettifier </font></font><code>serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但禁用</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（ TSLint不会在保存操作中调用，因此</font></font><code>npm run serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下</font><font style="vertical-align: inherit;">不受影响</font><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
