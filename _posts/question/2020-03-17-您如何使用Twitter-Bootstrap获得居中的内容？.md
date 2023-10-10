---
layout: question
title:  您如何使用Twitter Bootstrap获得居中的内容？
date:   2020-03-17T07:53:44.000Z
description: 我正在尝试遵循一个非常基本的示例。使用入门页面和网格系统，我希望以下几点：<div class="row">  <div class="span...
img: 
author: LGil
category: question
answer: 22
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试遵循一个非常基本的示例。</font><font style="vertical-align: inherit;">使用</font></font><a href="http://getbootstrap.com/css/#grid" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入门页面和网格系统</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我希望以下几点：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="row"&gt;<font></font>
  &lt;div class="span12"&gt;<font></font>
    &lt;h1&gt;Bootstrap starter template&lt;/h1&gt;<font></font>
    &lt;p&gt;Example text.&lt;/p&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...将产生居中的文字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它仍然显示在最左侧。</font><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2018：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4.1.3中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用class将内容居中</font></font><code>mx-auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div class="mx-auto"&gt;<font></font>
  Centered element<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://getbootstrap.com/docs/4.1/utilities/spacing/#horizontal-centering" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://getbootstrap.com/docs/4.1/utilities/spacing/#horizontal-centering" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//getbootstrap.com/docs/4.1/utilities/spacing/#horizo​​ntal-centering</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了此类，以在不考虑屏幕大小的情况下保持居中，同时保持响应功能：</font></font></p>

<pre><code>.container {<font></font>
    alignment-adjust: central;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了两种方法，但将div居中的效果很好。</font><font style="vertical-align: inherit;">两种方式都会在所有屏幕上对齐div。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1：使用推送：</font></font></strong></p>

<pre><code>&lt;div class = "col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-push-4 col-md-push-4 col-sm-push-4 col-xs-push-4" style="border-style:solid;border-width:1px"&gt;<font></font>
    &lt;h2&gt;Grievance form&lt;/h2&gt; &lt;!-- To center this text, use style="text-align: center" --&gt;<font></font>
  &lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式2：使用偏移：</font></font></strong></p>

<pre><code>&lt;div class = "col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-offset-4 col-md-offest-4 col-sm-offest-4 col-xs-offest-4" style="border-style:solid;border-width:1px"&gt;<font></font>
    &lt;h2&gt;Grievance form&lt;/h2&gt; &lt;!--to center this text, use style="text-align: center"--&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/VPegx.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/VPegx.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序将在左侧指定屏幕占用率的第一列。</font><font style="vertical-align: inherit;">如果我们使用offset或push，它将把“ this”列移动“ those”许多列。</font><font style="vertical-align: inherit;">尽管我在抵消能力方面遇到了一些问题，但推动还是很棒的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将一个文本中心类用于所需的div或标签即可。</font><font style="vertical-align: inherit;">我认为这可能很好。</font><font style="vertical-align: inherit;">这是用于文本对齐中心的Bootstrap类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些文本对齐的Bootstrap类：</font></font></p>

<pre><code>text-left, text-right, text-justify, etc.<font></font>
&lt;div class="row"&gt;<font></font>
 &lt;div class="col-md-12 text-center"&gt;<font></font>
  &lt;h1&gt;Bootstrap starter template&lt;/h1&gt;<font></font>
  &lt;p&gt;Example text.&lt;/p&gt;<font></font>
 &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁米亚小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下任何一种类型</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Bootstrap现有的类</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加自定义样式</font></font><code>style = "text-align:center"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用列偏移量：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font><code>&lt;div class="col-md-offset-6 col-md-12"&gt;&lt;/div&gt;</code></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在保持响应性（移动兼容性）的同时，使信息中心居中的首选方法是在要居中</font></font><code>span1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的内容前后</font><font style="vertical-align: inherit;">放置两个空</font><font style="vertical-align: inherit;">div。</font></font></p>

<pre><code>&lt;div class="row-fluid"&gt;<font></font>
<font></font>
    &lt;div class="span1"&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
        &lt;div class="span10"&gt;<font></font>
          &lt;div class="hero-unit"&gt;<font></font>
            &lt;h1&gt;Reading Resources&lt;/h1&gt;<font></font>
            &lt;p&gt;Read here...&lt;/p&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/div&gt;&lt;!--/span--&gt;<font></font>
<font></font>
    &lt;div class="span1"&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
&lt;/div&gt;&lt;!--/row--&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗MandyTony</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中心块也是上述答案中未提及的选项</font></font></p>

<pre class="lang-html prettyprint-override"><code>    &lt;div class="center-block" style="width:200px;background-color:#ccc;"&gt;...&lt;/div&gt;
</code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所做的只是告诉元素的auto边距为0，其中auto为左/右边距。</font><font style="vertical-align: inherit;">但是，除非类text-center或css text-align：center; </font><font style="vertical-align: inherit;">在父对象上设置时，元素不知道要从中进行此自动计算的点，因此它不会像预期的那样居中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，以文本为中心是一个更好的选择。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Tom</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Bootstrap 3.1.1及更高版本，将内容居中的最佳类是</font></font><code>.center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">helper类。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖凯樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="col-md-12 centered"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
      &lt;div class="col-md-1"&gt;&lt;/div&gt;<font></font>
       &lt;div class="col-md-10"&gt;<font></font>
           label<font></font>
       &lt;/div&gt;<font></font>
      &lt;div class="col-md-1"&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请勿在主体上使用容器液体。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要用进行调整</font></font><code>.span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;div class="container-fluid"&gt;<font></font>
  &lt;div class="row-fluid"&gt;<font></font>
    &lt;div class="span4"&gt;&lt;/div&gt;<font></font>
    &lt;!--/span--&gt;<font></font>
    &lt;div class="span4" align="center"&gt;<font></font>
      &lt;div class="hero-unit" align="center"&gt;<font></font>
        &lt;h3&gt;Sign In&lt;/h3&gt;<font></font>
        &lt;form&gt;<font></font>
          &lt;div class="input-prepend"&gt;<font></font>
            &lt;span class="add-on"&gt;&lt;i class="icon-envelope"&gt;&lt;/i&gt; &lt;/span&gt;<font></font>
            &lt;input class="span6" type="text" placeholder="Email address"&gt;<font></font>
          &lt;/div&gt;<font></font>
          &lt;div class="input-prepend"&gt;<font></font>
            &lt;span class="add-on"&gt;&lt;i class="icon-key"&gt;&lt;/i&gt; &lt;/span&gt;<font></font>
            &lt;input class="span6" type="password" placeholder="Password"&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/form&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;!-- /span --&gt;<font></font>
    &lt;div class="span4"&gt;&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
  &lt;!-- /row --&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何文本对齐实用程序类都可以解决问题。</font><font style="vertical-align: inherit;">Bootstrap使用</font></font><code>.text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类将文本居中已有很长时间了。</font></font></p>

<pre><code>.text-center { text-align: center !important; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以创建自己的实用程序。</font><font style="vertical-align: inherit;">这些年来，我看到了一些变化：</font></font></p>

<pre><code>.u-text-center { text-align: center !important; }<font></font>
.ta-center { text-align: center !important; }<font></font>
.ta\:c { text-align: center !important; }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Tony</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我这边，我定义了</font></font><code>CSS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易于使用且易于记忆的</font><font style="vertical-align: inherit;">新</font><font style="vertical-align: inherit;">样式：</font></font></p>

<pre><code>.center { text-align: center;}<font></font>
.left { text-align: left;}<font></font>
.right { text-align: right;}<font></font>
.justify { text-align: justify;}<font></font>
.fleft { float: left;} /*-&gt; similar to .pull-left already existing in bootstrap*/<font></font>
.fright { float: right;}  /*-&gt; similar to .pull-right already existing in bootstrap*/<font></font>
.vab { vertical-align: bottom;}<font></font>
.bold { font-weight: bold;}<font></font>
.italic { font-style: italic;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是个好主意吗？</font><font style="vertical-align: inherit;">有什么好的做法吗？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC41811590</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Bootstrap 2.0+</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以使div居中于页面。</font></font></p>

<pre><code>&lt;div class="row"&gt;<font></font>
    &lt;div class="span4 offset4"&gt;<font></font>
        //your content here gets centered of the page<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProStafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 2.3有一个</font></font><code>text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类。</font></font></p>

<pre><code>&lt;p class="text-left"&gt;Left aligned text.&lt;/p&gt;<font></font>
&lt;p class="text-center"&gt;Center aligned text.&lt;/p&gt;<font></font>
&lt;p class="text-right"&gt;Right aligned text.&lt;/p&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用Bootstrap 3，它还具有名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.text-center的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置CSS类</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那就是你想要的。</font></font></p>

<pre><code>&lt;div class="text-left"&gt;<font></font>
    left<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="text-center"&gt;<font></font>
    center<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div class="text-right"&gt;<font></font>
    right<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅jsfiddle中的示例。</font></font><a href="http://jsfiddle.net/ucheng/Q4Fue/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/ucheng/Q4Fue/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚ItachiL</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2013年2月开始，在某些情况下，我向“ span” div中添加了“中心”类：</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="row"&gt;<font></font>
    &lt;div class="span9 centred"&gt;<font></font>
      This div will be centred.<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和CSS：</font></font></p>

<pre><code>[class*="span"].centred {<font></font>
  margin-left: auto;<font></font>
  margin-right: auto;<font></font>
  float: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的原因是因为span * div的位置向左浮动，并且“ auto margin”居中技术仅在div不浮动的情况下有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示（在JSFiddle上）：</font><a href="http://jsfiddle.net/5RpSh/8/embedded/result/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/5RpSh/8/embedded/result/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/5RpSh/8/embedded/result/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle：</font><a href="http://jsfiddle.net/5RpSh/8/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/5RpSh/8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/5RpSh/8/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.show-grid类在链接的示例中应用居中对齐的文本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您总是可以</font></font><code>style="text-align:center"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将div或其他我想的类</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到行中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Gil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这已</font></font><a href="https://stackoverflow.com/questions/15265253/centering-the-pagination-in-bootstrap#comment29641329_15265287"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><a href="https://stackoverflow.com/questions/15265253/centering-the-pagination-in-bootstrap#comment29641329_15265287"><font style="vertical-align: inherit;">删除</font></a><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在引导程序3之前，您可以使用CSS类，</font></font><code>pagination-centered</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>&lt;div class="span12 pagination-centered"&gt;<font></font>
    Centered content.<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类</font></font><code>pagination-centered</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经在bootstrap.css（或bootstrap.min.css）中，并且只有一条规则：</font></font></p>

<pre><code>.pagination-centered{text-align:center;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 2.3.0。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是使用类</font></font><code>text-center</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3.1.1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有一个</font></font><code>.center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于使div居中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">类。</font><font style="vertical-align: inherit;">请参阅：</font></font><a href="http://getbootstrap.com/css/#helper-classes-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://getbootstrap.com/css/#helper-classes-center"><font style="vertical-align: inherit;">//getbootstrap.com/css/#helper-classes-center</font></a><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中心内容块将元素设置为</font></font><code>display: block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并通过居中</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可作为mixin和class。</font></font></p>
  </blockquote>
</blockquote>

<pre><code>&lt;div class="center-block"&gt;...&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，正如其他人已经说过的那样，使用</font></font><code>.text-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类将文本居中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tony</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是定义一个CSS样式：</font></font></p>

<pre><code>.centered-text {<font></font>
    text-align:center<font></font>
}    <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在任何需要居中文本的地方，都可以像这样添加文本：</font></font></p>

<pre><code>&lt;div class="row"&gt;<font></font>
    &lt;div class="span12 centered-text"&gt;<font></font>
        &lt;h1&gt;Bootstrap starter template&lt;/h1&gt;<font></font>
        &lt;p&gt;Use this document as a way to quick start any new project.&lt;br&gt; All you get is this message and a barebones HTML document.&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您只是想让p标签居中：</font></font></p>

<pre><code>&lt;div class="row"&gt;<font></font>
    &lt;div class="span12 centered-text"&gt;<font></font>
        &lt;h1&gt;Bootstrap starter template&lt;/h1&gt;<font></font>
        &lt;p class="centered-text"&gt;Use this document as a way to quick start any new project.&lt;br&gt; All you get is this message and a barebones HTML document.&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的内联CSS越少越好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿梅路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想这里的大多数人实际上是在寻找</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使整个</font></font><code>div</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font><em><font style="vertical-align: inherit;">居中的</font></em><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">，而不仅仅是文本内容（这是琐碎的……）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中使内容居中的第二种方法（而不是使用text-align：center）是使元素具有固定的宽度和自动边距（左右）。</font><font style="vertical-align: inherit;">使用Bootstrap时，定义自动边距的样式是“容器”类。</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    &lt;div class="span12"&gt;<font></font>
        "Centered stuff there"<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看这里的小提琴：</font><a href="http://jsfiddle.net/D2RLR/7788/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/D2RLR/7788/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/D2RLR/7788/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙JinJinHarry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是用于文本居中的（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是问题所在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关其他类型的内容，请参见</font></font><a href="https://stackoverflow.com/a/13099189/2812842"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flavien的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：Bootstrap 2.3.0+答案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初的答案是引导程序的早期版本。</font><font style="vertical-align: inherit;">从bootstrap 2.3.0开始，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以简单地给div这个class</font></font><code>.text-center</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始答案（2.3.0之前）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要定义两个类之一，</font></font><code>row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>span12</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>text-align: center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参见</font></font><a href="http://jsfiddle.net/xKSUH/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/xKSUH/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://jsfiddle.net/xKSUH/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/xKSUH/1/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
