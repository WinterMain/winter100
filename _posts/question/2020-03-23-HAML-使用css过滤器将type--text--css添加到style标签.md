---
layout: question
title:  HAML-使用：css过滤器将type = text / css添加到<style>标签
date:   2020-03-23T12:01:25.000Z
description: 我正在尝试在HAML文件中添加一些内联CSS。我以为%noscript   css    .pagecontent {display none;}...
img: 
author: JinJinDavaid
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在HAML文件中添加一些内联CSS。</font><font style="vertical-align: inherit;">我以为</font></font></p>

<pre><code>%noscript<font></font>
  :css<font></font>
    .pagecontent {display:none;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会产生：</font></font></p>

<pre><code>&lt;noscript&gt;<font></font>
  &lt;style type="text/css"&gt;<font></font>
    /*&lt;![CDATA[*/<font></font>
      .pagecontent {display:none;}<font></font>
    /*]]&gt;*/<font></font>
  &lt;/style&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但事实并非如此。</font><font style="vertical-align: inherit;">由于遗漏了</font></font><code>type="text/css"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并产生：</font></font></p>

<pre><code>&lt;noscript&gt;<font></font>
  &lt;style&gt;<font></font>
    /*&lt;![CDATA[*/<font></font>
      .pagecontent {display:none;}<font></font>
    /*]]&gt;*/<font></font>
  &lt;/style&gt;<font></font>
&lt;/noscript&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用蛮力，</font></font><code>%style(type="text/css")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是HAML的</font></font><code>:css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤器似乎</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更“优雅”？！？</font><font style="vertical-align: inherit;">或者，我是否错过了某些东西（我很少处理内联CSS）并且</font></font><code>type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再需要？！？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3009篇《HAML-使用：css过滤器将type = text / css添加到<style>标签》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="http://developers.whatwg.org/semantics.html#attr-style-type" rel="noreferrer"><code>type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font></font><code>text/css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为HTML5版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且在实践中（即在浏览器实现中）始终这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以是的，</font></font><code>type="text/css"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有必要（而且从未如此）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>format</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项设置为</font></font><code>xhtml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或，</font><font style="vertical-align: inherit;">则</font><font style="vertical-align: inherit;">Haml将输出</font><font style="vertical-align: inherit;">属性</font></font><code>html4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果将格式设置为</font></font><code>html5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，则将省略。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font><a href="http://haml.info/docs/yardoc/file.HAML_REFERENCE.html#options"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/haml/haml/blob/3.1.4/lib/haml/filters.rb#L223"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS过滤器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://github.com/haml/haml/blob/3.1.4/lib/haml/filters.rb#L223"><font style="vertical-align: inherit;">来源，</font></a><font style="vertical-align: inherit;">请参见</font><a href="http://haml.info/docs/yardoc/file.HAML_REFERENCE.html#options"><font style="vertical-align: inherit;">Haml文档</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Haml 3.1.x中的默认值为</font></font><code>xhtml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但Rails除外（</font></font><code>html5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这是Rails的默认值）。</font><font style="vertical-align: inherit;">在Haml 4+中，默认设置将</font></font><code>html5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终存在。</font><font style="vertical-align: inherit;">（当格式为</font></font><code>html4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">时，默认情况下也会在4+中保留CDATA标记</font></font><code>html5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
