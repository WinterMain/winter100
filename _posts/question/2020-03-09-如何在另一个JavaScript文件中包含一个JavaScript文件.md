---
layout: question
title:  如何在另一个JavaScript文件中包含一个JavaScript文件？
date:   2020-03-09T04:30:43.000Z
description: JavaScript中是否有类似于\`importCSS的东西，允许您在另一个JavaScript文件中包含一个JavaScript文件？...
img: 
author: 古一LEY
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中是否有类似于</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS的</font><font style="vertical-align: inherit;">东西</font><font style="vertical-align: inherit;">，允许您在另一个JavaScript文件中包含一个JavaScript文件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第141篇《如何在另一个JavaScript文件中包含一个JavaScript文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanTomTom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用Mixture之类的工具通过其特殊</font></font><code>.mix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件类型</font><font style="vertical-align: inherit;">来实现类似CSS的JavaScript导入</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">（请参见</font></font><a href="http://docs.mixture.io/preprocessors#mix" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我想该应用程序只是内部使用一种上述方法，尽管我不知道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文件的Mixture文档中</font></font><code>.mix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混合文件只是带.mix的.js或.css文件。</font><font style="vertical-align: inherit;">在文件名中。</font><font style="vertical-align: inherit;">混合文件只是扩展了普通样式或脚本文件的功能，并允许您导入和合并。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><code>.mix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将多个</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件合并为一个</font><font style="vertical-align: inherit;">的示例</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// scripts-global.mix.js</span><span class="pln">
</span><span class="com">// Plugins - Global</span><span class="pln">

</span><span class="lit">@import</span><span class="pln"> </span><span class="str">"global-plugins/headroom.js"</span><span class="pun">;</span><span class="pln">
</span><span class="lit">@import</span><span class="pln"> </span><span class="str">"global-plugins/retina-1.1.0.js"</span><span class="pun">;</span><span class="pln">
</span><span class="lit">@import</span><span class="pln"> </span><span class="str">"global-plugins/isotope.js"</span><span class="pun">;</span><span class="pln">
</span><span class="lit">@import</span><span class="pln"> </span><span class="str">"global-plugins/jquery.fitvids.js"</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mixture将其输出为</font></font><code>scripts-global.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也将其</font><font style="vertical-align: inherit;">输出为</font><font style="vertical-align: inherit;">缩小版本（</font></font><code>scripts-global.min.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：除了将它用作前端开发工具之外，我与Mixture无关。</font><font style="vertical-align: inherit;">在看到一个运行中的</font></font><code>.mix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript文件（在其中一个Mixture样板中）并对它有点困惑时，</font><font style="vertical-align: inherit;">我遇到了这个问题</font><font style="vertical-align: inherit;">（“我能想到吗？”）</font><font style="vertical-align: inherit;">然后我意识到这是一种特定于应用程序的文件类型（有些令人失望，同意）。</font><font style="vertical-align: inherit;">但是，认为这些知识可能对其他人有所帮助。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：混合物</font></font><a href="http://mixture.io/blog/free/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在免费</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（脱机）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：混合物现已停产。</font></font><a href="https://github.com/teammixture/mixture.io/issues/6" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧的混合物版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然可用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用现代语言检查脚本是否已经加载，它将是： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> loadJs</span><span class="pun">(</span><span class="pln">url</span><span class="pun">){</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Promise</span><span class="pun">(</span><span class="pln"> </span><span class="pun">(</span><span class="pln">resolve</span><span class="pun">,</span><span class="pln"> reject</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(`</span><span class="pln">head </span><span class="pun">&gt;</span><span class="pln"> script</span><span class="pun">[</span><span class="pln">src</span><span class="pun">=</span><span class="str">"${src}"</span><span class="pun">]`)</span><span class="pln"> </span><span class="pun">!==</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> resolve</span><span class="pun">()</span><span class="pln">
    </span><span class="kwd">const</span><span class="pln"> script </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">"script"</span><span class="pun">)</span><span class="pln">
    script</span><span class="pun">.</span><span class="pln">src </span><span class="pun">=</span><span class="pln"> url
    script</span><span class="pun">.</span><span class="pln">onload </span><span class="pun">=</span><span class="pln"> resolve
    script</span><span class="pun">.</span><span class="pln">onerror </span><span class="pun">=</span><span class="pln"> reject
    document</span><span class="pun">.</span><span class="pln">head</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">script</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法（异步/等待）：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">try</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">await</span><span class="pln"> loadJs</span><span class="pun">(</span><span class="str">"https://.../script.js"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> 
</span><span class="kwd">catch</span><span class="pun">(</span><span class="pln">error</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">error</span><span class="pun">)}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">await</span><span class="pln"> loadJs</span><span class="pun">(</span><span class="str">"https://.../script.js"</span><span class="pun">).</span><span class="kwd">catch</span><span class="pun">(</span><span class="pln">err </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{})</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法（承诺）：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">loadJs</span><span class="pun">(</span><span class="str">"https://.../script.js"</span><span class="pun">).</span><span class="pln">then</span><span class="pun">(</span><span class="pln">res </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{}).</span><span class="kwd">catch</span><span class="pun">(</span><span class="pln">err </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{})</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> js </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">"script"</span><span class="pun">);</span><span class="pln">

js</span><span class="pun">.</span><span class="pln">type </span><span class="pun">=</span><span class="pln"> </span><span class="str">"text/javascript"</span><span class="pun">;</span><span class="pln">
js</span><span class="pun">.</span><span class="pln">src </span><span class="pun">=</span><span class="pln"> jsFilePath</span><span class="pun">;</span><span class="pln">

document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">js</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小宇宙小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/basic_usage" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Workers，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且希望在worker的范围内包括其他脚本，则有关将脚本添加到</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记等</font><font style="vertical-align: inherit;">的其他答案</font><font style="vertical-align: inherit;">将对您不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">幸运的是，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/basic_usage#Importing_scripts_and_libraries" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Workers具有自己的</font></font><code>importScripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是</font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/basic_usage#Importing_scripts_and_libraries" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">Web Workers</font></a><font style="vertical-align: inherit;">范围内的全局功能，它</font></font><a href="https://html.spec.whatwg.org/multipage/workers.html#importing-scripts-and-libraries" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器本身的固有功能，因为它</font><a href="https://html.spec.whatwg.org/multipage/workers.html#importing-scripts-and-libraries" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">是规范的一部分</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，</font></font><a href="https://stackoverflow.com/a/10939737/1676444" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为对您问题的第二高投票答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://www.requirejs.org/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RequireJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可以处理Web Worker内的脚本（可能会</font></font><code>importScripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自称，但还有一些其他有用的功能）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是在运行时添加，而是使用脚本在上传之前进行串联。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://github.com/sstephenson/sprockets" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链轮</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我不知道是否还有其他</font><a href="https://github.com/sstephenson/sprockets" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">链轮</font></a><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">您将JavaScript代码构建在单独的文件中，并包含由Sprockets引擎处理的注释（包括）。</font><font style="vertical-align: inherit;">对于开发，您可以依次包含文件，然后在生产中将它们合并...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以看看：</font></font></p>

<ul>
<li><em><a href="http://37signals.com/svn/posts/1587-introducing-sprockets-javascript-dependency-management-and-concatenation" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sprockets简介：JavaScript依赖关系管理和串联</font></font></a></em></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该这样做：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">xhr </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">XMLHttpRequest</span><span class="pun">();</span><span class="pln">
xhr</span><span class="pun">.</span><span class="pln">open</span><span class="pun">(</span><span class="str">"GET"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"/soap/ajax/11.0/connection.js"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">);</span><span class="pln">
xhr</span><span class="pun">.</span><span class="pln">send</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">eval</span><span class="pun">(</span><span class="pln">xhr</span><span class="pun">.</span><span class="pln">responseText</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木千</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要加载JavaScript文件的目的是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用导入/包含的文件中的函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则还可以定义一个全局对象并将这些函数设置为对象项。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">global.js</font></font></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">A </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span></code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file1.js</font></font></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">A</span><span class="pun">.</span><span class="pln">func1 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"func1"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file2.js</font></font></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">A</span><span class="pun">.</span><span class="pln">func2 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"func2"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></h3>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">A</span><span class="pun">.</span><span class="pln">func1</span><span class="pun">();</span><span class="pln">
A</span><span class="pun">.</span><span class="pln">func2</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML文件中包含脚本时，只需要小心即可。</font><font style="vertical-align: inherit;">顺序应如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">head</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">script type</span><span class="pun">=</span><span class="str">"text/javascript"</span><span class="pln"> src</span><span class="pun">=</span><span class="str">"global.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">script type</span><span class="pun">=</span><span class="str">"text/javascript"</span><span class="pln"> src</span><span class="pun">=</span><span class="str">"file1.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">script type</span><span class="pun">=</span><span class="str">"text/javascript"</span><span class="pln"> src</span><span class="pun">=</span><span class="str">"file2.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">script type</span><span class="pun">=</span><span class="str">"text/javascript"</span><span class="pln"> src</span><span class="pun">=</span><span class="str">"main.js"</span><span class="pun">&gt;&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">head</span><span class="pun">&gt;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处显示的大多数解决方案都暗含动态载荷。</font><font style="vertical-align: inherit;">我正在搜索的是一个将所有依赖文件组装成一个输出文件的编译器。</font><font style="vertical-align: inherit;">与</font></font><a href="http://en.wikipedia.org/wiki/Less_%28stylesheet_language%29" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Less</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font><a href="http://en.wikipedia.org/wiki/Sass_%28stylesheet_language%29" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预处理器处理CSS </font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则相同。</font><font style="vertical-align: inherit;">由于我没有找到任何像样的东西，因此我编写了一个简单的工具来解决该问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是编译器</font></font><a href="https://github.com/dsheiko/jsic" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/dsheiko/jsic</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以</font></font><code>$import("file-path")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全地</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">为请求的文件内容。</font><font style="vertical-align: inherit;">这是对应的</font></font><a href="http://gruntjs.com/" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Grunt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件：</font></font><a href="https://github.com/dsheiko/grunt-jsic" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/dsheiko/grunt-jsic" data-bitapp="processed"><font style="vertical-align: inherit;">//github.com/dsheiko/grunt-jsic</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery master分支上，它们仅将原子源文件连接成一个以开头</font></font><code>intro.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和以结束</font><font style="vertical-align: inherit;">的单个源文件</font></font><code>outtro.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那不适合我，因为它在源代码设计上没有灵活性。</font><font style="vertical-align: inherit;">查看jsic的工作方式：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / main.js</font></font></em></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> $import</span><span class="pun">(</span><span class="str">"./Form/Input/Tel"</span><span class="pun">);</span></code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src /表格/输入/Tel.js</font></font></em></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          prop</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln">
          method</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我们可以运行编译器：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">node jsic</span><span class="pun">.</span><span class="pln">js src</span><span class="pun">/</span><span class="pln">main</span><span class="pun">.</span><span class="pln">js build</span><span class="pun">/</span><span class="pln">mail</span><span class="pun">.</span><span class="pln">js</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并获得合并的文件</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">build / main.js</font></font></em></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          prop</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln">
          method</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猿猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" rel="noreferrer" data-bitapp="processed"><code>import</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ECMAScript 6中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">句法</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> name </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> member </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> member as alias </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> member1 </span><span class="pun">,</span><span class="pln"> member2 </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> member1 </span><span class="pun">,</span><span class="pln"> member2 as alias2 </span><span class="pun">,</span><span class="pln"> </span><span class="pun">[...]</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> name </span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> member </span><span class="pun">[</span><span class="pln"> </span><span class="pun">,</span><span class="pln"> </span><span class="pun">[...]</span><span class="pln"> </span><span class="pun">]</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="str">"module-name"</span><span class="pln"> as name</span><span class="pun">;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以动态生成JavaScript标记并将其从其他JavaScript代码内部附加到HTML文档。</font><font style="vertical-align: inherit;">这将加载目标JavaScript文件。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> includeJs</span><span class="pun">(</span><span class="pln">jsFilePath</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> js </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">createElement</span><span class="pun">(</span><span class="str">"script"</span><span class="pun">);</span><span class="pln">

    js</span><span class="pun">.</span><span class="pln">type </span><span class="pun">=</span><span class="pln"> </span><span class="str">"text/javascript"</span><span class="pun">;</span><span class="pln">
    js</span><span class="pun">.</span><span class="pln">src </span><span class="pun">=</span><span class="pln"> jsFilePath</span><span class="pun">;</span><span class="pln">

    document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">js</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

includeJs</span><span class="pun">(</span><span class="str">"/path/to/some/file.js"</span><span class="pun">);</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为更简洁的另一种方法是发出同步Ajax请求，而不使用</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font></font><a href="http://en.wikipedia.org/wiki/Node.js" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理的内容</font><font style="vertical-align: inherit;">也</font><font style="vertical-align: inherit;">包括在内。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用jQuery的示例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> require</span><span class="pun">(</span><span class="pln">script</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    $</span><span class="pun">.</span><span class="pln">ajax</span><span class="pun">({</span><span class="pln">
        url</span><span class="pun">:</span><span class="pln"> script</span><span class="pun">,</span><span class="pln">
        dataType</span><span class="pun">:</span><span class="pln"> </span><span class="str">"script"</span><span class="pun">,</span><span class="pln">
        </span><span class="kwd">async</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">           </span><span class="com">// &lt;-- This is the key</span><span class="pln">
        success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="com">// all good...</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        error</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">throw</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Error</span><span class="pun">(</span><span class="str">"Could not load script "</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> script</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以像通常使用include那样在代码中使用它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">require</span><span class="pun">(</span><span class="str">"/scripts/subscript.js"</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并能够在下一行中从所需脚本中调用函数：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">subscript</span><span class="pun">.</span><span class="pln">doSomethingCool</span><span class="pun">();</span><span class="pln"> </span></code></pre></div>
        </div></div>
    </div>
    
  </div>
<div>
