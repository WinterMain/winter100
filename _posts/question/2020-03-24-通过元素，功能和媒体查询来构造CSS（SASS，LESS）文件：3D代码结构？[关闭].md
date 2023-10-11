---
layout: question
title:  通过元素，功能和媒体查询来构造CSS（SASS，LESS）文件：3D代码结构？\[关闭\]
date:   2020-03-24T10:13:11.000Z
description:                                                                          ...
img: 
author: Tom凯
category: question
answer: 4
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            很难说出这里的要求。</font><font style="vertical-align: inherit;">这个问题是模棱两可，含糊，不完整，过于宽泛或夸张的，不能以目前的形式合理地回答。</font><font style="vertical-align: inherit;">如需帮助澄清此问题以便可以重新打开，    </font></font><a href="/help/reopen-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请访问帮助中心</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                            
                        </font></font></div>
                    </div>
                </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2012-10-13 18：05：55Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零维</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个人都开始将CSS与包含所有样式的单个文件一起使用。</font></font></p>

<ul>
<li><code>style.css</code></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一维</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很快，它变得笨重，决定将CSS按页面元素分组在多个文件中：</font></font></p>

<ul>
<li><code>html_elements.css</code></li>
<li><code>header.css</code></li>
<li><code>main-area.css</code></li>
<li><code>footer.css</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人可能觉得这不够方便，并按功能对样式进行分组：</font></font></p>

<ul>
<li><code>typography.css</code></li>
<li><code>layout.css</code></li>
<li><code>sticky-footer.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （包含许多元素的声明，而不仅仅是页脚）</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2D</font></font></h2>

<p>When a project has a lot of CSS, it might require using both groupings simultaneously. CSS files structure becomes two-dimensional:</p>

<p><code>layout/</code></p>

<ul>
<li><code>grid-system.css</code></li>
<li><code>header.css</code></li>
<li><code>sidebars.css</code></li>
</ul>

<p><code>look/</code></p>

<ul>
<li><code>typography/</code>

<ul>
<li><code>main.css</code></li>
<li><code>headers.css</code></li>
<li><code>lists.css</code></li>
</ul></li>
<li><code>backgrounds/</code>

<ul>
<li><code>html_elements.css</code></li>
<li><code>header.css</code></li>
<li><code>main-area.css</code></li>
<li><code>footer.css</code></li>
</ul></li>
</ul>

<p>Okay, the example is fabricated, but you sure do understand what i mean.</p>

<p>Up to this point everything is fine.</p>

<h2>Enter Media Query</h2>

<p>This is where my CSS structure gets funked up.</p>

<p>In addition to the 2D structure described above, i have to structure my code by media queries:</p>

<ul>
<li>Some of my styles are universal (applied everywhere)</li>
<li>Some are applied to certain screen size only:

<ul>
<li>small;</li>
<li>medium;</li>
<li>large;</li>
<li>extra large.</li>
</ul></li>
<li>Some are applied to certain groups of screen sizes:

<ul>
<li>everything except small (non-mobile styles);</li>
<li>small and medium (where sidebars aren't at the sides)</li>
<li>large and xlarge (where you do have sidebars)</li>
</ul></li>
</ul>

<p>I tried to overcome the issue by scattering media queried styles among existing CSS files. The <a href="https://github.com/canarymason/breakpoint" rel="noreferrer">breakpoint</a> Compass extension helps a lot, but the stylesheets become too messy. Finding a certain style when it's not portrayed in the files structures a lot of pain.</p>

<p>I tried grouping by media queries, then by elements and function. But files structure is two dimensional, so you can't add a new dimension, you can only add another level of hierarchy. So, it's not graceful. Also, it's very bulky.</p>

<p>So i end up with a 2D structure with media queries on one axis and an ugly mix of elements and functions on the other axis.</p>

<p>I'm absolutely not satisfied with that but i just fail to come up with a graceful solution. Please suggest one.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3627篇《通过元素，功能和媒体查询来构造CSS（SASS，LESS）文件：3D代码结构？\[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最终要做的是您的2D解决方案（尽管我的解决方案还有更多的嵌套功能），并在需要时使用Breakpoint在线编写媒体查询。</font><font style="vertical-align: inherit;">我们需要处理的事情之一是我们的输出CSS看起来不会和我们的手写代码相同，这是使用CSS预处理器并专门抽象处理周围事物的现实。</font><font style="vertical-align: inherit;">很快，</font></font><a href="https://twitter.com/anthonyshort/status/236256012259180545" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Chrome浏览器的开发工具将附带内置的Sass部分支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且</font><font style="vertical-align: inherit;">
 Firefox的</font></font><a href="https://addons.mozilla.org/en-US/firefox/addon/firesass-for-firebug/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FireSass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以帮助您确定样式的来源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这些帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，这更多是个人喜好问题，可能无法真正回答问题，但这是我的贡献：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要做的是像您所说的“ 2D”组织，文件少了很多（假设我们说的CSS的预处理器少了）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现在我正在样式的元素的同一“较少”文件中使用媒体查询更加容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，例如，我有header.less，并且在同一文件中有其媒体查询。</font></font></p>

<pre><code>#header {<font></font>
    ...<font></font>
}<font></font>
<font></font>
//Header media queries<font></font>
-----------------------<font></font>
<font></font>
@media screen and (min-width:480px) { ... }<font></font>
@media screen and (min-width:768px) { ... }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，为什么我选择这样做呢？</font><font style="vertical-align: inherit;">-&gt;因为（对我而言）在...中不得不查找另一个文件（例如说响应.less），在其中搜索媒体查询标题，进行更改等，这是一个巨大的痛苦。等等，相反，使用这种方法，我总是知道我的媒体查询在哪里，并且可以轻松地访问/修改每个元素，并且不会在代码中添加很多行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的问题是，当生成CSS时，我们最终将获得遍历整个CSS代码的单个元素的媒体查询。</font><font style="vertical-align: inherit;">不是很漂亮！</font><font style="vertical-align: inherit;">（这时，less / winless不会自动对媒体查询进行分组。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我结束了构建一个小的应用程序来对媒体查询进行分组的过程：</font></font><a href="http://nokturnalapp.com/mqhelper/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://nokturnalapp.com/mqhelper/" rel="nofollow"><font style="vertical-align: inherit;">//nokturnalapp.com/mqhelper/</font></a><font style="vertical-align: inherit;"> 
我用它来构建用于生产的CSS文件。</font><font style="vertical-align: inherit;">（尚未完成，我需要添加从媒体查询版本中剥离的代码，但请看一下。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对您有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS已经是一种结构化语言。</font><font style="vertical-align: inherit;">无论好坏，代码的顺序都会改变其含义。</font><font style="vertical-align: inherit;">因此，重要的是任何CSS组织方案都主要由级联决定。</font><font style="vertical-align: inherit;">CSS的另一个结构方面是语义。</font><font style="vertical-align: inherit;">利用它来发挥您的优势。</font><font style="vertical-align: inherit;">组织的关注在于保持事物有意义和可维护。</font><font style="vertical-align: inherit;">保留意义的最好办法就是展现人际关系。</font><font style="vertical-align: inherit;">关系已经通过语义表达。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些内容放在一起，最终您将得到的代码是按</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特定性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后按</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语义</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组织的</font><font style="vertical-align: inherit;">，而不是按外部概念（如类型与布局或屏幕大小）进行组织。</font><font style="vertical-align: inherit;">这是我的命名方案：</font></font></p>

<pre><code>base/<font></font>
  - Sass imports and settings - no CSS output.<font></font>
  - e.g _grid, _colors, _rhythm, etc.<font></font>
general/<font></font>
  - Initial CSS baseline with resets, defaults, font imports, and classes to extend.<font></font>
  - e.g. _reset, _root, _fonts, _icons, _defaults, etc.<font></font>
layout/<font></font>
  - The rough outline of the site structure.<font></font>
  - Not "layout" as a set of properties excluding type, "layout" as the overall site template which might well include typography. <font></font>
  - e.g. _banner, _nav, _main, _contentinfo, etc.<font></font>
modules/<font></font>
  - All the details. First by effect (classes/general), then by widget (ids/specifics).<font></font>
  - e.g. _users, _admin, _product-lists etc.<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">媒体查询应尽可能接近其影响的代码。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可能，它们将直接内联（使用Sass媒体鼓泡）。</font><font style="vertical-align: inherit;">如果那变得笨重，它们将移动到块的外部，但</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移到</font><em><font style="vertical-align: inherit;">partial的外部</font></em><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">MQ是重写。</font><font style="vertical-align: inherit;">当您覆盖代码时，尤为重要的是，您必须能够准确地看到被覆盖的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些站点上，您可能会更进一步。</font><font style="vertical-align: inherit;">我偶尔在末尾添加了两个文件夹：</font></font><code>plugins/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于管理第三方代码，以及</font></font><code>overrides/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理对窗口小部件不可避免的（尝试避免它们！）特定于位置的替代。</font><font style="vertical-align: inherit;">我也进行了更深入的介绍，</font></font><code>fonts/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为每个字体系列</font><font style="vertical-align: inherit;">添加了</font><font style="vertical-align: inherit;">带有部分内容</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件夹，或者</font></font><code>users/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为添加，编辑，查看等添加</font><font style="vertical-align: inherit;">了</font><font style="vertical-align: inherit;">带有部分内容</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件夹。细节非常灵活，但是基本组织保持不变：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始一般。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽可能缓慢地转向细节。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切勿</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据任何外部概念（类型/布局，屏幕尺寸等）进行划分。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不尝试这样的事情：</font></font></p>

<pre><code>/root<font></font>
  /modules<font></font>
    /header<font></font>
      /html<font></font>
        header.html<font></font>
      /css<font></font>
        module_styles.css /*Configure which style sheets are included with @media rule in this file*/<font></font>
        /at-media<font></font>
          small.css<font></font>
          medium.css<font></font>
          large.css<font></font>
      /js<font></font>
        fancy-nav.js<font></font>
  /site<font></font>
    includes.css /*use @import to include each modules stylesheet in a file here and let each module control its own media issues*/<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
