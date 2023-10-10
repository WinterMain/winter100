---
layout: question
title:  Angular 2-Typescript函数与外部js库的通信
date:   2020-06-02T01:57:09.000Z
description: 将Javascript Infovis Toolkit用作绘制图形和树的外部库。我需要操纵节点的onClick方法，以便将HTTP GET请求异步发送到服...
img: 
author: 番长猴子
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><a href="https://philogb.github.io/jit/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript Infovis Toolkit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作绘制图形和树的外部库。</font><font style="vertical-align: inherit;">我需要操纵节点的onClick方法，以便将HTTP GET请求异步发送到服务器，并将来自服务器的数据分配给Angular服务类的属性和变量。</font><font style="vertical-align: inherit;">通过使用webpack将所有已编译的TypeScript打包到单个js文件中，输出文件会令人困惑且难以理解。</font><font style="vertical-align: inherit;">因此，从外部js库中调用已编译js文件中的函数显然不是最佳解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Angular服务中尝试了以下解决方案，因此我可以毫无问题地访问该服务的属性：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">document</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'DOMContentLoaded'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  
  </span><span class="kwd">var</span><span class="pln"> nodes </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">querySelectorAll</span><span class="pun">(</span><span class="str">".nodes"</span><span class="pun">);</span><span class="pln"> </span><span class="com">// nodes = []</span><span class="pln">
  
  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> nodes</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="com">// nodes.length = 0</span><span class="pln">
    
    nodes</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">"click"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      
      </span><span class="com">// asynchronously sending GET request to the server</span><span class="pln">
      </span><span class="com">// and assing receiving data to the properties of this Angular service</span><span class="pln">
      
    </span><span class="pun">});</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

</span><span class="pun">});</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit snippet-box-result" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，此解决方案不起作用，因为在Javascript Infovis Toolkit中，节点是在完成DOM渲染之后以及</font></font><code>window.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">之后绘制的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该库具有一些生命周期方法，例如onAfterCompute（），在绘制树完成后会调用该方法。</font><font style="vertical-align: inherit;">如何触发全局事件以通知Angular服务树的绘制已完成并且它可以查询所有节点？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
