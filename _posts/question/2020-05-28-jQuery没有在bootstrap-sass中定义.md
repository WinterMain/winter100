---
layout: question
title:  jQuery没有在bootstrap-sass中定义
date:   2020-05-28T07:00:21.000Z
description: 我使用angular-cli引导了Angular 2应用程序。直到我决定使用bootstrap modal之前，一切都是轻而易举的。我只是从其他不使用an...
img: 
author: GO
category: question
answer: 3
tags: jQuery的 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用angular-cli引导了Angular 2应用程序。</font><font style="vertical-align: inherit;">直到我决定使用bootstrap modal之前，一切都是轻而易举的。</font><font style="vertical-align: inherit;">我只是从其他不使用angular-cli的项目中复制了用于打开模态的代码。</font><font style="vertical-align: inherit;">我在angular-cli.json文件中的脚本中添加了jquery和bootstrap依赖项。</font><font style="vertical-align: inherit;">jQuery在项目中是公认的，但是当我尝试</font></font><code>this.$modalEl.modal(options)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在角度组件中</font><font style="vertical-align: inherit;">运行时</font><font style="vertical-align: inherit;">，出现错误</font></font><code>jQuery is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上jQuery是导入到项目中的，但是是全局的</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我做了一些挖掘，显然引导程序希望将jQuery作为“ jQuery”变量传递给它。</font><font style="vertical-align: inherit;">它不会给老鼠带来麻烦</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以</font><font style="vertical-align: inherit;">像在其他项目中一样</font><font style="vertical-align: inherit;">将其</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">的变量</font><font style="vertical-align: inherit;">公开</font><font style="vertical-align: inherit;">：（为简洁起见，省略了很多代码）</font></font></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> jQueryPlugin </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  $</span><span class="pun">:</span><span class="pln"> </span><span class="str">'jquery'</span><span class="pun">,</span><span class="pln">
  jquery</span><span class="pun">:</span><span class="pln"> </span><span class="str">'jquery'</span><span class="pun">,</span><span class="pln">
  jQuery</span><span class="pun">:</span><span class="pln"> </span><span class="str">'jquery'</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

exports</span><span class="pun">.</span><span class="pln">root </span><span class="pun">=</span><span class="pln"> root</span><span class="pun">;</span><span class="pln">

exports</span><span class="pun">.</span><span class="pln">plugins </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  globalLibProvider</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> webpack</span><span class="pun">.</span><span class="typ">ProvidePlugin</span><span class="pun">(</span><span class="pln">webpackMerge</span><span class="pun">(</span><span class="pln">jQueryPlugin</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    svg4everybody</span><span class="pun">:</span><span class="pln"> </span><span class="str">'svg4everybody/dist/svg4everybody.js'</span><span class="pln">
  </span><span class="pun">}))</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font><code>angular-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发团队决定不让其他开发人员混入Webpack配置文件。</font><font style="vertical-align: inherit;">谢谢你们！</font><font style="vertical-align: inherit;">很体贴的你</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试将jQuery直接导入Angular组件以及此处提到的其他一堆东西</font></font><a href="https://github.com/angular/angular-cli/issues/3202" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular/angular-cli/issues/3202</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（将导入添加到vendor.ts文件中，然后将vendor.ts添加到angular-cli.json中的scripts数组），但没有任何效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">老实说，我很生气，像</font><font style="vertical-align: inherit;">在angular-cli中</font></font><code>jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用依赖项</font><font style="vertical-align: inherit;">这样的琐碎问题</font></font><code>bootstrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样的雷区。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否处理过类似的问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4209篇《jQuery没有在bootstrap-sass中定义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1</font></font></strong></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="pln">npm install jssha </span><span class="pun">--</span><span class="pln">save </span><span class="pun">[</span><span class="kwd">using</span><span class="pln"> jssha </span><span class="kwd">for</span><span class="pln"> </span><span class="kwd">this</span><span class="pln"> demo</span><span class="pun">]</span><span class="pln">
</span><span class="typ">It</span><span class="pln"> it </span><span class="kwd">is</span><span class="pln"> your own custom file place it </span><span class="kwd">in</span><span class="pln"> the scripts array </span><span class="kwd">of</span><span class="pln"> angular</span><span class="pun">-</span><span class="pln">cli</span><span class="pun">.</span><span class="pln">json skip </span><span class="kwd">this</span><span class="pln"> step </span><span class="lit">1</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二步</font></font></strong></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="typ">Add</span><span class="pln"> the jssha scripts file </span><span class="kwd">in</span><span class="pln"> </span><span class="pun">.</span><span class="pln">angular</span><span class="pun">-</span><span class="pln">cli</span><span class="pun">.</span><span class="pln">json file
</span><span class="str">"scripts"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="str">"../node_modules/jssha/src/sha.js"</span><span class="pln"> </span><span class="pun">]</span><span class="pln">
</span><span class="typ">Step</span><span class="pln"> three </span><span class="typ">Adding</span><span class="pln"> a </span><span class="kwd">var</span><span class="pln"> </span><span class="kwd">in</span><span class="pln"> component to be used </span><span class="kwd">as</span><span class="pln"> a </span><span class="kwd">global</span><span class="pln"> variable

</span><span class="com">//using external js modules in Angular Component</span><span class="pln">
declare </span><span class="kwd">var</span><span class="pln"> jsSHA</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln"> </span><span class="com">// place this above the component decorator</span><span class="pln">
shaObj</span><span class="pun">:</span><span class="pln">any</span><span class="pun">;</span><span class="pln">
hash</span><span class="pun">:</span><span class="kwd">string</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">shaObj </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> jsSHA</span><span class="pun">(</span><span class="str">"SHA-512"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"TEXT"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">shaObj</span><span class="pun">.</span><span class="pln">update</span><span class="pun">(</span><span class="str">"This is a Test"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">hash </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">shaObj</span><span class="pun">.</span><span class="pln">getHash</span><span class="pun">(</span><span class="str">"HEX"</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看@这个</font></font><a href="https://rahulrsingh09.github.io/AngularConcepts/faq" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它有一个有效的示例，并提供了一个有关键入是否不包含示例的问题。</font><font style="vertical-align: inherit;">我在该项目中使用了Angular的bootstrap和jquery，您也可以检查存储库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，您需要添加jquery文件 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样在你的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-cli.json中</font></font></strong></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="pln">  </span><span class="str">"styles"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
    </span><span class="str">"../node_modules/bootstrap-v4-dev/dist/css/bootstrap.min.css"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"styles.css"</span><span class="pln">
  </span><span class="pun">],</span><span class="pln">
  </span><span class="str">"scripts"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
    </span><span class="str">"../node_modules/jquery/dist/jquery.js"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"../node_modules/tether/dist/js/tether.min.js"</span><span class="pun">,</span><span class="pln">
    </span><span class="str">"../node_modules/bootstrap-v4-dev/dist/js/bootstrap.min.js"</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在component中声明。</font></font><code>declare var $: any;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该工作。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我继续使用我提到的步骤，仅使用Angular中的jquery创建了一个引导模式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它起作用检查此gh页面链接</font></font><a href="https://rahulrsingh09.github.io/TestingSPA" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-LINK</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要检查源代码是否相同，请检查</font></font><a href="https://github.com/rahulrsingh09/TestingSPA" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LINK</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发布的答案来自此链接，这是我在Angular </font><a href="https://rahulrsingh09.github.io/AngularConcepts" rel="nofollow noreferrer"><font style="vertical-align: inherit;">LINK上的</font></a><font style="vertical-align: inherit;">页面</font></font><a href="https://rahulrsingh09.github.io/AngularConcepts" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用命令</font></font><a href="https://github.com/angular/angular-cli/wiki/eject" rel="nofollow noreferrer"><code>ng eject</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让Angular CLI生成webpack.config文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后像以前一样将jQuery公开为变量。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十刃</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有专门在Angular 2中使用Bootstrap，但是我在Angular 1中使用，情况是一样的，因为常规版本的Bootstrap设计为可与jQuery一起使用，而并非为Angular构建的。</font><font style="vertical-align: inherit;">您当然可以安装jQuery，但是Javascript可能无法在Angular的上下文中正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是使用考虑到Angular构建的版本，我相信</font></font><a href="https://ng-bootstrap.github.io/#/home" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是其中最突出的版本。</font><font style="vertical-align: inherit;">我自己没有使用过，但是我为Angular 1使用了angular-ui-bootstrap，这似乎是同一项目的Angular 2对应版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您也可以</font></font><a href="https://hackernoon.com/wrap-any-jquery-plugin-with-angular-2-component-case-study-8b00eacec998" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己将其包装在指令中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是如果您可以让ng-bootstrap做您想做的事，我会避免这样做，因为这样做会做更多的工作。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
