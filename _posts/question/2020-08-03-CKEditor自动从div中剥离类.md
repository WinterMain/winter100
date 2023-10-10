---
layout: question
title:  CKEditor自动从div中剥离类
date:   2020-08-03T06:18:26.000Z
description: 我在网站上使用CKEditor作为后端编辑器。尽管它似乎想在每次按下源按钮时都将代码更改为适合自己的样子，但仍使我转弯。例如，如果我点击源代码并创建一个<...
img: 
author: 小胖Gil
category: question
answer: 7
tags: 类 Ckeditor
topic: Ckeditor
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在网站上</font><font style="vertical-align: inherit;">使用</font></font><a href="http://ckeditor.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CKEditor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为后端编辑器。</font><font style="vertical-align: inherit;">尽管它似乎想在每次按下源按钮时都将代码更改为适合自己的样子，但仍使我转弯。</font><font style="vertical-align: inherit;">例如，如果我点击源代码并创建一个</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"myclass"</span><span class="tag">&gt;</span><span class="pln">some content</span><span class="tag">&lt;/div&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，它没有明显的原因将类从中剥离</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此当我再次点击source时，它已更改为...</font></font></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="tag">&lt;div&gt;</span><span class="pln">some content</span><span class="tag">&lt;/div&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为可以在中关闭这种令人讨厌的行为</font></font><code>config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我一直在挖掘并且无法在文档中找到任何内容来关闭它。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用drupal，则另一种选择是简单地添加要使用的css样式。</font><font style="vertical-align: inherit;">这样，它不会删除样式或类名。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以在我的情况下，在drupal 7的css选项卡下，只需添加类似</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">facebook = span.icon-facebook2</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要检查是否启用了字体样式按钮</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想添加此config.allowedContent = true; </font><font style="vertical-align: inherit;">需要添加到ckeditor.config.js文件而不是config.js，config.js对我没有任何帮助，但将其添加到ckeditor.config.js的顶部区域使我的div类</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现切换为使用完整html而不是过滤的html（在“文本格式”下拉框中的编辑器下方）对我来说已解决了此问题。</font><font style="vertical-align: inherit;">否则，样式将消失。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Vicky</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：此答案适用于在drupal中使用ckeditor模块的用户。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了不需要修改ckeditor js文件的解决方案。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案是从</font></font><a href="https://drupal.stackexchange.com/a/80296/2281"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所有学分应归原作者所有。</font></font></p>
<blockquote>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到“管理&gt;&gt;配置&gt;&gt; CKEditor”；</font><font style="vertical-align: inherit;">在个人资料下，选择您的个人资料（例如完整）。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑该配置文件，然后在“高级选项&gt;&gt;自定义JavaScript配置”中添加</font></font><code>config.allowedContent = true;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
<p><img src="https://i.stack.imgur.com/BEBwj.png" alt="在此处输入图片说明"></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘记在“性能”标签下刷新缓存。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌小哥</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考</font></font><a href="http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方的高级内容过滤器指南</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://docs.ckeditor.com/#!/guide/plugin_sdk_integration_with_acf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件集成教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于此强大功能，您会发现更多。</font><font style="vertical-align: inherit;">另请参阅</font></font><a href="http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-extraAllowedContent" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config.extraAllowedContent</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它看起来很适合您的需求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在ckeditor中称为ACF（自动内容过滤器）。它会删除所有不必要的标记，即我们在文本内容中使用的标记。在config.js文件中使用此命令应关闭此ACK。</font></font></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="pln">config</span><span class="pun">.</span><span class="pln">allowedContent </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ckeditor 4.x，则可以尝试</font></font></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="pln">config</span><span class="pun">.</span><span class="pln">allowedContent </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ckeditor 3.x，则可能出现</font></font><a href="https://dev.ckeditor.com/ticket/5818"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将以下行放在config.js中</font></font></p>

<pre class="default prettyprint prettyprinted" style=""><code><span class="pln">config</span><span class="pun">.</span><span class="pln">ignoreEmptyParagraph </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
