---
layout: question
title:  如何禁用textarea的resizable属性？
date:   2020-03-13T07:50:18.000Z
description: 我想禁用的可调整大小的属性textarea。目前，我可以textarea通过单击的右下角textarea并拖动鼠标来调整a 的大小。如何禁用此功能？...
img: 
author: 乐米亚
category: question
answer: 11
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想禁用的可调整大小的属性</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我可以</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过单击的右下角</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并拖动鼠标</font><font style="vertical-align: inherit;">来调整a </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">大小</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如何禁用此功能？</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/555/images/thumbnails/1584085818315.png" data-src="https://www.samyoc.com//uploads/users/555/images/1584085818315.png" rel="noreferrer"><img src="https://i.stack.imgur.com/xrfWQ.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Adding <code>!important</code> makes it work:</p>

<pre><code>width:325px !important; height:120px !important; outline:none !important;
</code></pre>

<p><code>outline</code> is just to avoid the blue outline on certain browsers.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>With <code>@style</code>, you can give it a custom size and disable the resize feature <code>(resize: none;)</code>.</p>

<pre><code>@Html.TextAreaFor(model =&gt; model.YourProperty, new { @style = "width: 90%; height: 180px; resize: none;" })
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Stafan宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>To disable the resize property, use the following CSS property:</p>

<pre><code>resize: none;
</code></pre>

<ul>
<li><p>You can either apply this as an inline style property like so:</p>

<pre><code>&lt;textarea style="resize: none;"&gt;&lt;/textarea&gt;
</code></pre></li>
<li><p>or in between <code>&lt;style&gt;...&lt;/style&gt;</code> element tags like so:</p>

<pre><code>textarea {<font></font>
    resize: none;<font></font>
}<font></font>
</code></pre></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You simply use: <code>resize: none;</code> in your CSS.</p>

<blockquote>
  <p>The <strong>resize</strong> property specifies whether or not an element is resizable
  by the user.</p>
  
  <p><strong>Note:</strong> The resize property applies to elements whose computed overflow
  value is something other than "visible".</p>
</blockquote>

<p>Also <strong>resize</strong> not supported in Internet&nbsp;Explorer  at the moment.</p>

<p>Here are different properties for resize:</p>

<p><strong>No Resize:</strong></p>

<pre><code>textarea {<font></font>
  resize: none;<font></font>
}<font></font>
</code></pre>

<p><strong>Resize both ways (vertically &amp; horizontally):</strong></p>

<pre><code>textarea {<font></font>
  resize: both;<font></font>
}<font></font>
</code></pre>

<p><strong>Resize vertically:</strong></p>

<pre><code>textarea {<font></font>
  resize: vertical;<font></font>
}<font></font>
</code></pre>

<p><strong>Resize horizontally:</strong></p>

<pre><code>textarea {<font></font>
  resize: horizontal;<font></font>
}<font></font>
</code></pre>

<p>Also if you have <code>width</code> and <code>height</code> in your CSS or HTML, it will prevent your textarea be resized, with a broader browsers support.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You can simply <strong>disable the textarea</strong> property like this:</p>

<pre><code>textarea {<font></font>
    resize: none;<font></font>
}<font></font>
</code></pre>

<p>To disable <strong>vertical</strong> or <strong>horizontal</strong> resizing, use</p>

<pre><code>resize: vertical;
</code></pre>

<p>or</p>

<pre><code>resize: horizontal;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天蛋蛋达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要深入的支持，则可以使用一种过时的技巧：</font></font></p>

<pre><code>textarea {<font></font>
    max-width: /* desired fixed width */ px;<font></font>
    min-width: /* desired fixed width */ px;<font></font>
    min-height: /* desired fixed height */ px;<font></font>
    max-height: /* desired fixed height */ px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS 3为UI元素提供了一个新属性，使您可以执行此操作。</font><font style="vertical-align: inherit;">该属性是</font></font><a href="http://www.w3.org/TR/css3-ui/#resize" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">resize属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，您可以将以下内容添加到样式表中，以禁用所有textarea元素的大小调整：</font></font></p>

<pre><code>textarea { resize: none; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个CSS 3属性。</font><font style="vertical-align: inherit;">使用</font></font><a href="http://quirksmode.org/css/contents.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容性图表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看浏览器的兼容性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人认为禁用textarea元素的大小调整会很烦人。</font><font style="vertical-align: inherit;">这是设计人员试图“破坏”用户客户端的情况之一。</font><font style="vertical-align: inherit;">如果您的设计不能容纳较大的文本区域，则可能需要重新考虑设计的工作方式。</font><font style="vertical-align: inherit;">任何用户都可以添加</font></font><code>textarea { resize: both !important; }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到其用户样式表中以覆盖您的首选项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Jim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;textarea style="resize:none" rows="10" placeholder="Enter Text" &gt;&lt;/textarea&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中...</font></font></p>

<pre><code>textarea {<font></font>
    resize: none;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以用HTML轻松完成：</font></font></p>

<pre><code>&lt;textarea name="textinput" draggable="false"&gt;&lt;/textarea&gt;
</code></pre>

<p>This works for me. The default value is <code>true</code> for the <code>draggable</code> attribute.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猿阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现了两件事：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一</font></font></p>

<pre><code>textarea{resize: none}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尚未发布</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS 3，</font><font style="vertical-align: inherit;">与</font></font><a href="http://www.w3schools.com/cssref/css3_pr_resize.asp" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 4（及更高版本），Chrome和Safari</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种格式功能是</font></font><a href="http://www.codingforums.com/showthread.php?t=85786" rel="nofollow noreferrer"><code>overflow: auto</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑到</font></font><a href="http://www.w3schools.com/tags/att_global_dir.asp" rel="nofollow noreferrer"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dir</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">，以摆脱右侧的滚动条</font><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码和不同的浏览器</font></font></h2>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本HTML</font></font></em></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;textarea style="overflow:auto;resize:none" rows="13" cols="20"&gt;&lt;/textarea&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些浏览器</font></font></em></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 8</font></font></li>
</ul>

<p><img src="https://i.stack.imgur.com/IObIu.png" alt="在此处输入图片说明"></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 17.0.1</font></font></li>
</ul>

<p><img src="https://i.stack.imgur.com/Xr3ub.png" alt="在此处输入图片说明"></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬</font></font></li>
</ul>

<p><img src="https://i.stack.imgur.com/VxYgY.png" alt="在此处输入图片说明"></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
