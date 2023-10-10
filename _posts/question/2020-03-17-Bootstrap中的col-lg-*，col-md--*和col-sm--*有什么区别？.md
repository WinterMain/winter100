---
layout: question
title:  Bootstrap中的col-lg-\*，col-md- \*和col-sm- \*有什么区别？
date:   2020-03-17T10:32:08.000Z
description: 是什么之间的差异col-lg-\*，col-md-\*并col-sm-\*在Twitter的引导？...
img: 
author: 神乐Tony阿飞
category: question
answer: 8
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么之间的差异</font></font><code>col-lg-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>col-md-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>col-sm-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Twitter的引导？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1978篇《Bootstrap中的col-lg-*，col-md- *和col-sm- *有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/Cu9qt.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Cu9qt.png" alt="在此处输入图片说明"></a></p>

<p><strong>I think this image is pretty good to understand the concept better!</strong></p>

<p><em>for more detail understanding please go though below link:</em></p>

<p><a href="https://getbootstrap.com/docs/3.4/css/" rel="nofollow noreferrer">https://getbootstrap.com/docs/3.4/css/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ANear</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR</font></font></strong></p>

<p><code>.col-X-Y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在屏幕尺寸X或更大的尺寸上</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拉伸该元素以填充Y列</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap提供了每个12列的网格</font></font><code>.row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此Y = 3表示宽度= 25％。</font></font></p>

<p><code>xs, sm, md, lg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 分别是智能手机，平板电脑，笔记本电脑和台式机的尺寸。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不同的屏幕尺寸上指定不同的宽度的目的是让您在较小的屏幕上放大尺寸。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<pre><code>&lt;div class="col-lg-6 col-xs-12"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">含义：台式机为50％宽度，移动设备，平板电脑和笔记本电脑为100％宽度。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种特殊情况：在学习引导网格系统之前，请确保将浏览器缩放比例设置为100％（百分之百）。</font><font style="vertical-align: inherit;">例如：如果屏幕分辨率为（1600px x 900px），浏览器缩放比例为175％，则将堆叠“自举”元素。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;div class="container-fluid"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="col-lg-4"&gt;class="col-lg-4"&lt;/div&gt;<font></font>
        &lt;div class="col-lg-4"&gt;class="col-lg-4"&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬变焦100％</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/0aFsZ.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器100％-元素水平放置</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">镀铬变焦175％</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/rN3FR.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器175％-堆叠式元素</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://getbootstrap.com/getting-started/#migration-new" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Bootstrap文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小网格（≥768px）= </font></font><code>.col-sm-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中格（≥992px）= </font></font><code>.col-md-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大网格（≥1200px）= </font></font><code>.col-lg-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这令人困惑的方面是，BootStrap 3是一个移动优先响应系统，无法在Bootstrap文档的那部分中解释这如何影响col-xx-n层次结构。</font><font style="vertical-align: inherit;">这使您想知道如果为较大的设备选择一个值，那么在较小的设备上会发生什么，并且使您怀疑是否需要指定多个值。</font><font style="vertical-align: inherit;">（你不）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将尝试通过阐明以下内容来澄清这一点：较小的晶粒类型（xs，sm）尝试在较小的屏幕上保留布局外观，而较大的晶粒类型（md，lg）仅在较大的屏幕上正确显示，但在较小的设备上会包裹列。</font><font style="vertical-align: inherit;">先前示例中引用的值指的是阈值，因为该引导会降低外观以适合可用的屏幕空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，这意味着如果您将列col-xs-n设置为即使在很小的屏幕上，它们也将保持正确的外观，直到窗口大小减小到无法正确显示页面的程度为止。</font><font style="vertical-align: inherit;">这应该意味着宽度为768px或更小的设备应在设计时显示表格，而不是以降级（单列或包裹列的形式）显示。</font><font style="vertical-align: inherit;">显然，这仍然取决于列的内容，这就是重点。</font><font style="vertical-align: inherit;">如果页面尝试在小屏幕上并排显示大数据的多列，那么如果您不考虑这些列，这些列自然会以一种可怕的方式包装。</font><font style="vertical-align: inherit;">因此，根据列中的数据，您可以确定要布局的点，以充分显示内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您的页面包含三个col-sm-n列，则当页面宽度降至992px以下时，引导程序会将这些列包装为行。</font><font style="vertical-align: inherit;">这意味着数据仍然可见，但需要垂直滚动才能查看。</font><font style="vertical-align: inherit;">如果您不希望布局降级，请选择xs（只要您的数据可以在三列的较低分辨率设备上充分显示）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果数据的水平位置很重要，则应尝试选择较低的粒度值以保持外观。</font><font style="vertical-align: inherit;">如果位置不太重要，但是页面在所有设备上都必须可见，则应使用更高的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-lg-n，则各列将正确显示，直到屏幕宽度降至1200像素的xs阈值以下。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光小哥小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设备大小和类前缀：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型设备电话（&lt;768px）- </font></font><code>.col-xs-</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型设备平板电脑（≥768像素）- </font></font><code>.col-sm-</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中型设备台式机（≥992px）- </font></font><code>.col-md-</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大型设备台式机（≥1200px）- </font></font><code>.col-lg-</code></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网格选项：</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/nyqbS.png" rel="noreferrer"><img src="https://i.stack.imgur.com/nyqbS.png" alt="Bootstarp网格系统"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="http://getbootstrap.com/css/#grid" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网格系统</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>.col-xs-$&nbsp;  Extra Small&nbsp;    Phones Less than 768px&nbsp;<font></font>
.col-sm-$&nbsp;  Small Devices&nbsp;  Tablets 768px and Up&nbsp;<font></font>
.col-md-$&nbsp;  Medium Devices&nbsp; Desktops 992px and Up&nbsp;<font></font>
.col-lg-$&nbsp;  Large Devices&nbsp;  Large Desktops 1200px and Up&nbsp;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导</font></font><a href="http://getbootstrap.com/css/#grid"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实对此进行了解释，但是仍然花了我一段时间。</font><font style="vertical-align: inherit;">当我以两种方式之一向自己解释时，它更有意义：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想到的列是水平开始的，那么可以选择何时堆叠它们</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您从以下列开始：ABC</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以决定何时堆叠它们，如下所示：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">乙</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-lg，则当宽度&lt;1200px时，列将堆叠。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-md，则当宽度&lt;992px时，列将堆叠。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-sm，则宽度小于768px时，列将堆叠。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-xs，则列将永远不会堆叠。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，如果您想到从堆叠开始的列，则可以选择它们在什么时候变为水平的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-sm，则当宽度&gt; = 768px时，列将变为水平。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-md，则宽度&gt; = 992px时，列将变为水平。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择col-lg，则当宽度&gt; = 1200px时，列将变为水平。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
