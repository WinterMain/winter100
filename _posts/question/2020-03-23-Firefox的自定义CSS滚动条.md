---
layout: question
title:  Firefox的自定义CSS滚动条
date:   2020-03-23T08:01:00.000Z
description: 我想用CSS自定义滚动条。我使用此WebKit CSS代码，该代码非常适合Safari和Chrome：  -webkit-scrollbar {...
img: 
author: 斯丁
category: question
answer: 6
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想用CSS自定义滚动条。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用此WebKit CSS代码，该代码非常适合Safari和Chrome：</font></font></p>

<pre><code>::-webkit-scrollbar {<font></font>
    width: 15px;<font></font>
    height: 15px;<font></font>
}<font></font>
<font></font>
::-webkit-scrollbar-track-piece  {<font></font>
    background-color: #C2D2E4;<font></font>
}<font></font>
<font></font>
::-webkit-scrollbar-thumb:vertical {<font></font>
    height: 30px;<font></font>
    background-color: #0A4C95;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Firefox中做同样的事情？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以使用jQuery轻松地做到这一点，但如果可行，我宁愿使用纯CSS做到这一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不胜感激某人的专家意见！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它以用户风格工作，似乎不适用于网页。</font><font style="vertical-align: inherit;">我还没有找到Mozilla的官方指导。</font><font style="vertical-align: inherit;">尽管可能在某些时候可行，但Firefox对此没有官方支持。</font><font style="vertical-align: inherit;">该错误仍在打开中</font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=77790" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://bugzilla.mozilla.org/show_bug.cgi?id=77790</font></font></a></p>

<pre><code>scrollbar {<font></font>
/*  clear useragent default style*/<font></font>
   -moz-appearance: none !important;<font></font>
}<font></font>
/* buttons at two ends */<font></font>
scrollbarbutton {<font></font>
   -moz-appearance: none !important;<font></font>
}<font></font>
/* the sliding part*/<font></font>
thumb{<font></font>
   -moz-appearance: none !important;<font></font>
}<font></font>
scrollcorner {<font></font>
   -moz-appearance: none !important;<font></font>
   resize:both;<font></font>
}<font></font>
/* vertical or horizontal */<font></font>
scrollbar[orient="vertical"] {<font></font>
    color:silver;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  有关详细信息，</font><font style="vertical-align: inherit;">请访问</font></font><a href="http://codemug.com/html/custom-scrollbars-using-css/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codemug.com/html/custom-scrollbars-using-css/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 64添加了对规范草案</font></font><a href="https://drafts.csswg.org/css-scrollbars-1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS滚动条模块级别1的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持，该</font><a href="https://drafts.csswg.org/css-scrollbars-1/" rel="noreferrer"><font style="vertical-align: inherit;">模块</font></a><font style="vertical-align: inherit;">添加了的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个新属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width" rel="noreferrer"><code>scrollbar-width</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color" rel="noreferrer"><code>scrollbar-color</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以对滚动条的显示方式进行一些控制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color" rel="noreferrer"><code>scrollbar-color</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为以下值之一（来自MDN的描述）：</font></font></p>

<ul>
<li><code>auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在没有其他任何相关滚动条颜色属性的情况下，滚动条的轨道部分的默认平台渲染。</font></font></li>
<li><code>dark</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 显示深色滚动条，它可以是平台提供的深色滚动条，也可以是深色的自定义滚动条。</font></font></li>
<li><code>light</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 显示一个浅滚动条，它可以是平台提供的滚动条的浅变体，也可以是具有浅色的自定义滚动条。</font></font></li>
<li><code>&lt;color&gt;</code> <code>&lt;color&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将第一种颜色应用于滚动条滑块，将第二种颜色应用于滚动条轨道。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1492040" rel="noreferrer"><font style="vertical-align: inherit;">Firefox当前未实现</font></a></font><code>dark</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>light</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">。</font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1492040" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">macOS注意事项：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">macOS默认的自动隐藏半透明滚动条无法使用此规则着色（它们仍会根据背景选择自己的对比色）。</font><font style="vertical-align: inherit;">仅永久显示的滚动条（系统偏好设置&gt;显示滚动条&gt;始终）是彩色的。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视觉演示：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="false" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.scroll {<font></font>
  width: 20%;<font></font>
  height: 100px;<font></font>
  border: 1px solid grey;<font></font>
  overflow: scroll;<font></font>
  display: inline-block;<font></font>
}<font></font>
.scroll-color-auto {<font></font>
  scrollbar-color: auto;<font></font>
}<font></font>
.scroll-color-dark {<font></font>
  scrollbar-color: dark;<font></font>
}<font></font>
.scroll-color-light {<font></font>
  scrollbar-color: light;<font></font>
}<font></font>
.scroll-color-colors {<font></font>
  scrollbar-color: orange lightyellow;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="scroll scroll-color-auto"&gt;<font></font>
&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="scroll scroll-color-dark"&gt;<font></font>
&lt;p&gt;dark&lt;/p&gt;&lt;p&gt;dark&lt;/p&gt;&lt;p&gt;dark&lt;/p&gt;&lt;p&gt;dark&lt;/p&gt;&lt;p&gt;dark&lt;/p&gt;&lt;p&gt;dark&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="scroll scroll-color-light"&gt;<font></font>
&lt;p&gt;light&lt;/p&gt;&lt;p&gt;light&lt;/p&gt;&lt;p&gt;light&lt;/p&gt;&lt;p&gt;light&lt;/p&gt;&lt;p&gt;light&lt;/p&gt;&lt;p&gt;light&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="scroll scroll-color-colors"&gt;<font></font>
&lt;p&gt;colors&lt;/p&gt;&lt;p&gt;colors&lt;/p&gt;&lt;p&gt;colors&lt;/p&gt;&lt;p&gt;colors&lt;/p&gt;&lt;p&gt;colors&lt;/p&gt;&lt;p&gt;colors&lt;/p&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width" rel="noreferrer"><code>scrollbar-width</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为以下值之一（来自MDN的描述）：</font></font></p>

<ul>
<li><code>auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 平台的默认滚动条宽度。</font></font></li>
<li><code>thin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 提供该选项的平台上的滚动条宽度变薄，或者滚动条的宽度比默认平台宽度薄。</font></font></li>
<li><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 没有显示滚动条，但是该元素仍然可以滚动。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以根据规格设置特定的长度值。</font><font style="vertical-align: inherit;">两者</font></font><code>thin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和特定长度可能无法在所有平台上执行任何操作，而确切的作用是特定于平台的。</font><font style="vertical-align: inherit;">特别是，Firefox当前似乎不支持特定的长度值（</font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1475033#c65" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关其错误跟踪器的评论似乎证实了这一点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">该</font></font><code>thin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">keywork确实出现了但是很好的支持，与-至少MacOS和Windows的支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能值得注意的是，将</font></font><code>scrollbar-width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在将来的草案中考虑删除</font><font style="vertical-align: inherit;">length值选项和整个</font><font style="vertical-align: inherit;">属性，如果发生这种情况，则可能在将来的版本中从Firefox中删除此特定属性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视觉演示：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="false" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.scroll {<font></font>
  width: 30%;<font></font>
  height: 100px;<font></font>
  border: 1px solid grey;<font></font>
  overflow: scroll;<font></font>
  display: inline-block;<font></font>
}<font></font>
.scroll-width-auto {<font></font>
  scrollbar-width: auto;<font></font>
}<font></font>
.scroll-width-thin {<font></font>
  scrollbar-width: thin;<font></font>
}<font></font>
.scroll-width-none {<font></font>
  scrollbar-width: none;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="scroll scroll-width-auto"&gt;<font></font>
&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;&lt;p&gt;auto&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="scroll scroll-width-thin"&gt;<font></font>
&lt;p&gt;thin&lt;/p&gt;&lt;p&gt;thin&lt;/p&gt;&lt;p&gt;thin&lt;/p&gt;&lt;p&gt;thin&lt;/p&gt;&lt;p&gt;thin&lt;/p&gt;&lt;p&gt;thin&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="scroll scroll-width-none"&gt;<font></font>
&lt;p&gt;none&lt;/p&gt;&lt;p&gt;none&lt;/p&gt;&lt;p&gt;none&lt;/p&gt;&lt;p&gt;none&lt;/p&gt;&lt;p&gt;none&lt;/p&gt;&lt;p&gt;none&lt;/p&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/64" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 64开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来实现简单的Scrollbar样式（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不如带有供应商前缀的Chrome那样完整</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://jsfiddle.net/ldetomi/4Lt2ro5z/9/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中，可以看到一个解决方案，该解决方案结合了不同的规则以解决Firefox和Chrome的最终结果相似（不相等）的情况（例如，使用原始的Chrome规则）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键规则是：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Firefox</font></font></strong></p>

<pre><code>.scroller {<font></font>
  overflow-y: scroll;<font></font>
  scrollbar-color: #0A4C95 #C2D2E4;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Chrome</font></font></strong></p>

<pre><code>.scroller::-webkit-scrollbar {<font></font>
    width: 15px;<font></font>
    height: 15px;<font></font>
}<font></font>
<font></font>
.scroller::-webkit-scrollbar-track-piece  {<font></font>
    background-color: #C2D2E4;<font></font>
}<font></font>
<font></font>
.scroller::-webkit-scrollbar-thumb:vertical {<font></font>
    height: 30px;<font></font>
    background-color: #0A4C95;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，就您的解决方案而言，可以使用以下更简单的Chrome规则：</font></font></p>

<pre><code>.scroller::-webkit-scrollbar-track  {<font></font>
    background-color: #C2D2E4;<font></font>
}<font></font>
<font></font>
.scroller::-webkit-scrollbar-thumb {<font></font>
    height: 30px;<font></font>
    background-color: #0A4C95;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，为了在Firefox中也隐藏滚动条中的箭头，当前必须</font><font style="vertical-align: inherit;">使用以下规则</font><font style="vertical-align: inherit;">将其设置为“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">thin</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font><code>scrollbar-width: thin;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以提供替代方法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有脚本，只有标准化的CSS样式和一点点创造力。</font><font style="vertical-align: inherit;">简短的答案-遮盖现有浏览器滚动条的某些部分，这意味着您保留了所有功能。</font></font></p>

<pre><code>.scroll_content {<font></font>
    position: relative;<font></font>
    width: 400px;<font></font>
    height: 414px;<font></font>
    top: -17px;<font></font>
    padding: 20px 10px 20px 10px;<font></font>
    overflow-y: auto;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关演示和更深入的说明，请在此处查看...</font></font></p>

<p><a href="http://jsfiddle.net/aj7bxtjz/1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle.net/aj7bxtjz/1/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到2020年有效</font></font></p>

<pre><code>/* Thin Scrollbar */<font></font>
:root{<font></font>
  scrollbar-color: rgb(210,210,210) rgb(46,54,69) !important;<font></font>
  scrollbar-width: thin !important;<font></font>
}<font></font>
</code></pre>

<p><a href="https://github.com/Aris-t2/CustomCSSforFx/issues/160" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Aris-t2/CustomCSSforFx/issues/160</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2018年末，Firefox中现在提供有限的自定义功能！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看以下答案：</font></font></p>

<ul>
<li><a href="https://stackoverflow.com/a/54101063/405015"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/54101063/405015</font></font></a></li>
<li><a href="https://stackoverflow.com/a/53739309/405015"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/53739309/405015</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是背景信息：</font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1460109" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1460109" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//bugzilla.mozilla.org/show_bug.cgi?id=1460109</font></font></a></p>

<hr>

<p><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有Firefox </font></font><code>::-webkit-scrollbar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和朋友</font><font style="vertical-align: inherit;">等效</font><font style="vertical-align: inherit;">。</font></font></strike></p><strike>

</strike><p><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须坚持使用JavaScript。</font></font></strike></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很多人都希望使用此功能，请参见：</font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=77790" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=77790" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//bugzilla.mozilla.org/show_bug.cgi?id=77790</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就JavaScript替代品而言，您可以尝试：</font></font></p>

<ul>
<li><a href="https://github.com/noraesae/perfect-scrollbar" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/noraesae/perfect-scrollbar</font></font></a></li>
<li><a href="https://github.com/jnicol/trackpad-scroll-emulator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jnicol/trackpad-scroll-emulator</font></font></a></li>
<li><a href="https://github.com/vitch/jScrollPane" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vitch/jScrollPane</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（但是它已经过时了，显然是PITA ...）</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
