---
layout: question
title:  src目录外的create-react-app导入限制
date:   2020-05-28T02:05:59.000Z
description: 我正在使用create-react-app。我正在尝试从文件夹中的文件中调用公用文件夹中的图片src/components。我收到此错误消息。  ....
img: 
author: 古一
category: question
answer: 5
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用create-react-app。</font><font style="vertical-align: inherit;">我正在尝试从文件夹中的文件中调用公用文件夹中的图片</font></font><code>src/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我收到此错误消息。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">./src/components/website_index.js找不到模块：您试图导入属于项目src /目录之外的../../public/images/logo/WC-BlackonWhite.jpg。</font><font style="vertical-align: inherit;">不支持src /以外的相对导入。</font><font style="vertical-align: inherit;">您可以将其移动到src /中，也可以从项目的node_modules /中向其添加符号链接。</font></font></p>
</blockquote>

<p><code>import logo from '../../public/images/logo_2016.png';
&lt;img className="Header-logo" src={logo} alt="Logo" /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我读过很多东西，说您可以导入路径，但对我来说仍然行不通。</font><font style="vertical-align: inherit;">任何帮助将不胜感激。</font><font style="vertical-align: inherit;">我知道有很多这样的问题，但是它们都告诉我要导入徽标或图像，因此很明显我在全局图中缺少某些内容。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4185篇《src目录外的create-react-app导入限制》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除Bartek Maciejiczek的答案外，Craco的外观也是如此：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ModuleScopePlugin</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">"react-dev-utils/ModuleScopePlugin"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">const</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">"path"</span><span class="pun">);</span><span class="pln">

module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  webpack</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    configure</span><span class="pun">:</span><span class="pln"> webpackConfig </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      webpackConfig</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">.</span><span class="pln">plugins</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">plugin </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">plugin </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">ModuleScopePlugin</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          plugin</span><span class="pun">.</span><span class="pln">allowedFiles</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"./config.json"</span><span class="pun">));</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
      </span><span class="pun">});</span><span class="pln">
      </span><span class="kwd">return</span><span class="pln"> webpackConfig</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit snippet-box-result" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的解决方案是fork </font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，实际上在官方文档中提到过，请参阅：</font></font><a href="https://facebook.github.io/create-react-app/docs/alternatives-to-ejecting" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹出的替代方法</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Vicky</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><a href="https://stackoverflow.com/a/55298684/10459242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lukas Bach解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/timarney/react-app-rewired" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-app-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> rewired来修改webpack配置是一个好方法，但是，我不会排除整个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ModuleScopePlugin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是将可以导入src外部的特定文件列入白名单：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config-overrides.js</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> </span><span class="typ">ModuleScopePlugin</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">"react-dev-utils/ModuleScopePlugin"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">const</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">"path"</span><span class="pun">);</span><span class="pln">

module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> override</span><span class="pun">(</span><span class="pln">config</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  config</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">.</span><span class="pln">plugins</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">plugin </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">plugin </span><span class="kwd">instanceof</span><span class="pln"> </span><span class="typ">ModuleScopePlugin</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      plugin</span><span class="pun">.</span><span class="pln">allowedFiles</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="str">"./config.json"</span><span class="pun">));</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">

  </span><span class="kwd">return</span><span class="pln"> config</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">武藏</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要弹出，可以</font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="https://github.com/harrysolovay/rescripts" rel="nofollow noreferrer"><font style="vertical-align: inherit;">rescripts库</font></a><font style="vertical-align: inherit;">修改</font><font style="vertical-align: inherit;">配置</font></font><a href="https://github.com/harrysolovay/rescripts" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以这样：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> config </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">const</span><span class="pln"> scopePluginIndex </span><span class="pun">=</span><span class="pln"> config</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">.</span><span class="pln">plugins</span><span class="pun">.</span><span class="pln">findIndex</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">({</span><span class="pln"> </span><span class="kwd">constructor</span><span class="pln"> </span><span class="pun">})</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">constructor</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="kwd">constructor</span><span class="pun">.</span><span class="pln">name </span><span class="pun">===</span><span class="pln"> </span><span class="str">"ModuleScopePlugin"</span><span class="pln">
  </span><span class="pun">);</span><span class="pln">

  config</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">.</span><span class="pln">plugins</span><span class="pun">.</span><span class="pln">splice</span><span class="pun">(</span><span class="pln">scopePluginIndex</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span><span class="pln">

  </span><span class="kwd">return</span><span class="pln"> config</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要</font></font><code>WC-BlackonWhite.jpg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录。</font><font style="vertical-align: inherit;">该</font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录用于将直接在HTML中链接的静态文件（例如favicon），而不是要直接导入捆绑包中的内容。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
