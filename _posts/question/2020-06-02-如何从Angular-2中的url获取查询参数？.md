---
layout: question
title:  如何从Angular 2中的url获取查询参数？
date:   2020-06-02T01:48:30.000Z
description: 我使用angular2.0.0-beta.7。将组件加载到类似路径的路径上时/path?query=value1，会将其重定向到/path。为什么要删除G...
img: 
author: 小宇宙
category: question
answer: 2
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用angular2.0.0-beta.7。</font><font style="vertical-align: inherit;">将组件加载到类似路径的路径上时</font></font><code>/path?query=value1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，会将其重定向到</font></font><code>/path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为什么要删除GET参数？</font><font style="vertical-align: inherit;">如何保存参数？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的路由器有错误。</font><font style="vertical-align: inherit;">如果我有一条主要路线</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">@RouteConfig</span><span class="pun">([</span><span class="pln">
  </span><span class="pun">{</span><span class="pln">
      path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/todos/...'</span><span class="pun">,</span><span class="pln">
      name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'TodoMain'</span><span class="pun">,</span><span class="pln">
      component</span><span class="pun">:</span><span class="pln"> </span><span class="typ">TodoMainComponent</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">])</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的孩子路线像 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">@RouteConfig</span><span class="pun">([</span><span class="pln">
  </span><span class="pun">{</span><span class="pln"> path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/'</span><span class="pun">,</span><span class="pln"> component</span><span class="pun">:</span><span class="pln"> </span><span class="typ">TodoListComponent</span><span class="pun">,</span><span class="pln"> name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'TodoList'</span><span class="pun">,</span><span class="pln"> useAsDefault</span><span class="pun">:</span><span class="kwd">true</span><span class="pln"> </span><span class="pun">},</span><span class="pln">
  </span><span class="pun">{</span><span class="pln"> path</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/:id'</span><span class="pun">,</span><span class="pln"> component</span><span class="pun">:</span><span class="pln"> </span><span class="typ">TodoDetailComponent</span><span class="pun">,</span><span class="pln"> name</span><span class="pun">:</span><span class="str">'TodoDetail'</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">])</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么我就无法在TodoListComponent中获取参数。</font><font style="vertical-align: inherit;">我能够得到</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">params</span><span class="pun">(</span><span class="str">"/my/path;param1=value1;param2=value2"</span><span class="pun">)</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我要经典</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">query params</span><span class="pun">(</span><span class="str">"/my/path?param1=value1&amp;param2=value2"</span><span class="pun">)</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4243篇《如何从Angular 2中的url获取查询参数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">武藏</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未在路由中定义参数，则无法从RouterState获取参数，因此在您的示例中，您必须解析查询字符串...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的代码：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> re </span><span class="pun">=</span><span class="pln"> </span><span class="str">/[?&amp;]([^=#&amp;]+)=([^&amp;#]*)/</span><span class="pln">g</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> match</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> isMatch </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">let</span><span class="pln"> matches </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><span class="pln">
</span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">isMatch</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    match </span><span class="pun">=</span><span class="pln"> re</span><span class="pun">.</span><span class="pln">exec</span><span class="pun">(</span><span class="pln">window</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">href</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">match </span><span class="pun">!==</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        matches</span><span class="pun">[</span><span class="pln">decodeURIComponent</span><span class="pun">(</span><span class="pln">match</span><span class="pun">[</span><span class="lit">1</span><span class="pun">])]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> decodeURIComponent</span><span class="pun">(</span><span class="pln">match</span><span class="pun">[</span><span class="lit">2</span><span class="pun">]);</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">match</span><span class="pun">.</span><span class="pln">index </span><span class="pun">===</span><span class="pln"> re</span><span class="pun">.</span><span class="pln">lastIndex</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            re</span><span class="pun">.</span><span class="pln">lastIndex</span><span class="pun">++;</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        isMatch </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">matches</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit snippet-box-result" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人</span>
            <span class="discuss-time">2020.06.02</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在它是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">activatedRoute</span><span class="pun">.</span><span class="pln">queryParams</span><span class="pun">.</span><span class="pln">subscribe</span><span class="pun">((</span><span class="pln">params</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Params</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">params</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
