---
layout: question
title:  如何在TypeScript的\`window\`上显式设置新属性？
date:   2020-05-26T01:48:15.000Z
description: 我通过在上显式设置属性来为对象设置全局名称空间window。window.MyNamespace = window.MyNamespace || {}...
img: 
author: 神奇神奇Near
category: question
answer: 15
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过在上显式设置属性来为对象设置全局名称空间</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">{};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript强调</font></font><code>MyNamespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并抱怨：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性“ MyNamespace”在类型为“ window”的值上不存在“</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过声明</font></font><code>MyNamespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为环境变量并删除</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显式性</font><font style="vertical-align: inherit;">来使代码正常工作，</font><font style="vertical-align: inherit;">但我不想这样做。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare </span><span class="kwd">var</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln">

</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">{};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎样才能</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">留在那里并使TypeScript开心呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为旁注，我发现TypeScript抱怨特别有趣，因为它告诉我</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型</font></font><code>any</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">肯定可以包含任何内容。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您需要在当前范围内声明窗口对象。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因为 TypeScript想知道对象的类型。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
由于窗口对象是在其他位置定义的，因此无法重新定义它。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是您可以声明如下：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare </span><span class="kwd">var</span><span class="pln"> window</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不会重新定义window对象，也不会创建另一个具有name的变量</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这意味着窗口是在其他地方定义的，您只是在当前作用域中引用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以通过以下方式简单地引用MyNamespace对象： </font></font><br></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="typ">MyNamespace</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下方法简单地</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">上设置新属性</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">MyObject</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在 TypeScript将不会抱怨。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用create-react-app v3.3，我发现实现此目的的最简单方法是扩展</font></font><code>Window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动生成</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">类型</font></font><code>react-app-env.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="typ">MyNamespace</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Elena</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我今天想在Angular（6）库中使用它，花了我一段时间才能使它按预期工作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使我的库使用声明，我必须对</font></font><code>d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">扩展名，以声明全局对象的新属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以最后，该文件最终显示为：</font></font></p>

<p><code>/path-to-angular-workspace/angular-workspace/projects/angular-library/src/globals.d.ts</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建完成后，请不要忘记在您的中公开它</font></font><code>public_api.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说就做到了。</font><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Chloe</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个自定义界面扩展Window并将您的自定义属性添加为可选属性。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，让customWindow使用自定义界面，但与原始窗口一起使用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它与typescript@3.1.3一起使用。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">ICustomWindow</span><span class="pln"> extends </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="typ">MyNamespace</span><span class="pun">?:</span><span class="pln"> any
</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> customWindow</span><span class="pun">:</span><span class="typ">ICustomWindow</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> window</span><span class="pun">;</span><span class="pln">

customWindow</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> customWindow</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">{}</span><span class="pln"> </span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供参考（这是正确的答案）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义文件中</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">type </span><span class="typ">MyGlobalFunctionType</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">void</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在浏览器中工作，则可以通过重新打开Window的界面将成员添加到浏览器的window上下文中：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  myGlobalFunction</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyGlobalFunctionType</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeJS的想法相同：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare module </span><span class="typ">NodeJS</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Global</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    myGlobalFunction</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyGlobalFunctionType</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您声明根变量（实际上将存在于window或global上）</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare </span><span class="kwd">const</span><span class="pln"> myGlobalFunction</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyGlobalFunctionType</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在一个常规</font></font><code>.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中（但作为副作用导入），您实际上实现了它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">global</span><span class="com">/* or window */</span><span class="pun">.</span><span class="pln">myGlobalFunction </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Hey !"</span><span class="pun">,</span><span class="pln"> name</span><span class="pun">);</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，通过以下任一方式在代码库中的其他地方使用它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">global</span><span class="com">/* or window */</span><span class="pun">.</span><span class="pln">myGlobalFunction</span><span class="pun">(</span><span class="str">"Kevin"</span><span class="pun">);</span><span class="pln">

myGlobalFunction</span><span class="pun">(</span><span class="str">"Kevin"</span><span class="pun">);</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><a href="https://github.com/typings/typings" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript定义管理器，请执行以下操作</font></font></a><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></em></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">npm install typings </span><span class="pun">--</span><span class="pln">global</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><code>typings/custom/window.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="typ">MyNamespace</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

declare </span><span class="kwd">var</span><span class="pln"> window</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Window</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装您的自定义键入：  </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">typings install file</span><span class="pun">:</span><span class="pln">typings</span><span class="pun">/</span><span class="pln">custom</span><span class="pun">/</span><span class="pln">window</span><span class="pun">.</span><span class="pln">d</span><span class="pun">.</span><span class="pln">ts </span><span class="pun">--</span><span class="pln">save </span><span class="pun">--</span><span class="pln">global</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成，使用它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">‌！</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> TypeScript不会再抱怨了：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">{};</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在找到答案之后，我认为此页面可能会有所帮助。
</font></font><a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
不确定声明合并的历史，但是它说明了为什么以下内容可以工作。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare global </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">{};</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个名为</font></font><code>global.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eg </font><font style="vertical-align: inherit;">的文件，</font></font><code>/src/@types/global.d.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后定义如下接口：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  myLib</span><span class="pun">:</span><span class="pln"> any
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> TypeScript不会对字符串属性执行类型检查。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">[</span><span class="str">"newProperty"</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> customObj</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，应避免使用全局变量方案。</font><font style="vertical-align: inherit;">我有时用它来调试浏览器控制台中的对象。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Typescript 3.x，则可以</font></font><code>declare global</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其他答案中</font><font style="vertical-align: inherit;">省略该</font><font style="vertical-align: inherit;">部分，而只需使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  someValue</span><span class="pun">:</span><span class="pln"> string
  another</span><span class="pun">:</span><span class="pln"> boolean
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在使用Typescript 3.3，WebPack和TSLint时与我合作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他大多数答案都不完美。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中一些只是抑制shop的类型推断。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他一些只关心全局变量作为名称空间，而不关心作为接口/类</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天早上我也遇到类似的问题。</font><font style="vertical-align: inherit;">我在SO上尝试了很多“解决方案”，但是没有一个绝对不会产生类型错误，并且无法在IDE（webstorm或vscode）中触发类型跳转。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，从这里</font></font></p>

<blockquote>
  <p><a href="https://github.com/Microsoft/TypeScript/issues/3180#issuecomment-102523512" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Microsoft/TypeScript/issues/3180#issuecomment-102523512</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我找到了一个合理的解决方案</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以为用作接口/类和名称空间的全局变量附加类型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例如下：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// typings.d.ts</span><span class="pln">
declare </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    myNamespace</span><span class="pun">?:</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln"> </span><span class="kwd">typeof</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

declare </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    somemethod</span><span class="pun">?()</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

declare namespace </span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// ...</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，上面的代码将名称空间</font></font><code>MyNamespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和接口的类型</font></font><code>MyNamespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并到全局变量</font></font><code>myNamespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（window的属性）中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使其保持动态，只需使用：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(&lt;</span><span class="pln">any</span><span class="pun">&gt;</span><span class="pln">window</span><span class="pun">).</span><span class="typ">MyNamespace</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可接受的答案是我曾经使用的答案，但是使用TypeScript 0.9。*时，它将不再起作用。</font></font><code>Window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口</font><font style="vertical-align: inherit;">的新定义</font><font style="vertical-align: inherit;">似乎完全取代了内置定义，而不是对其进行了扩充。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我改为这样做：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">interface</span><span class="pln"> </span><span class="typ">MyWindow</span><span class="pln"> extends </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    myFunction</span><span class="pun">():</span><span class="pln"> </span><span class="kwd">void</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

declare </span><span class="kwd">var</span><span class="pln"> window</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MyWindow</span><span class="pun">;</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用TypeScript 0.9.5，可接受的答案再次起作用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">武藏</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚在</font></font><a href="https://stackoverflow.com/a/12703866/31308"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个StackOverflow问题的答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了</font><a href="https://stackoverflow.com/a/12703866/31308"><font style="vertical-align: inherit;">答案</font></a><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">declare global </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ">Window</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> window</span><span class="pun">.</span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">{};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您需要扩展现有</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口以向其介绍新属性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.05.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用TSX？</font><font style="vertical-align: inherit;">没有其他答案对我有用。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我所做的：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="pln">window as any</span><span class="pun">).</span><span class="typ">MyNamespace</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
