---
layout: question
title:  删除Safari / Chrome文本输入/ textarea发光
date:   2020-03-23T03:01:06.000Z
description: 我想知道是否有可能在使用CSS单击文本输入/文本区域时删除默认的蓝色和黄色发光？...
img: 
author: 伽罗
category: question
answer: 9
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有可能在使用CSS单击文本输入/文本区域时删除默认的蓝色和黄色发光？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现删除“滑动门”类型的输入按钮上的轮廓很有帮助，因为轮廓没有覆盖滑动门图像的右侧“帽​​”，从而使焦点状态看起来有些不规则。 </font></font></p>

<pre><code>input.slidingdoorbutton:focus { outline: none;}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时候，按钮也会在下面使用，以删除外线</font></font></p>

<pre><code>input:hover<font></font>
input:active, <font></font>
input:focus, <font></font>
textarea:active,<font></font>
textarea:hover,<font></font>
textarea:focus, <font></font>
button:focus,<font></font>
button:active,<font></font>
button:hover<font></font>
{<font></font>
    outline:0px !important;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个解决方案对我有用。</font></font></p>

<pre><code>input:focus {<font></font>
    outline: none !important;<font></font>
    box-shadow: none !important;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要删除Bootstrap中按钮的辉光（我认为这不一定是糟糕的UX），则需要以下代码：</font></font></p>

<pre><code>.btn:focus, .btn:active:focus, .btn.active:focus{<font></font>
  outline-color: transparent;<font></font>
  outline-style: none;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种效果也可能发生在非输入元素上。</font><font style="vertical-align: inherit;">我发现以下作品可以作为更通用的解决方案</font></font></p>

<pre><code>:focus {<font></font>
  outline-color: transparent;<font></font>
  outline-style: none;<font></font>
}<font></font>
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能不必使用</font></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器。</font><font style="vertical-align: inherit;">如果您有一个元素，例如说</font></font><code>&lt;div id="mydiv"&gt;stuff&lt;/div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且您正在此div元素上获得外部辉光，则像通常一样应用：</font></font></p>

<pre><code>#mydiv {<font></font>
  outline-color: transparent;<font></font>
  outline-style: none;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关心可访问性的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们的解决方案</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请不要使用</font></font><code>outline:none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用焦点轮廓。</font><font style="vertical-align: inherit;">如果执行此操作，则会杀死Web的可访问性。</font><font style="vertical-align: inherit;">有一种可访问的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font><font style="vertical-align: inherit;">我写的</font></font><a href="https://www.sitebase.be/disable-focus-outline-without-breaking-accessibility/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以解释如何以一种易于访问的方式删除边框。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，想法是仅在我们检测到键盘用户时才显示轮廓边框。</font><font style="vertical-align: inherit;">用户开始使用鼠标后，我们将禁用轮廓。</font><font style="vertical-align: inherit;">结果，您可以充分利用两者的优势。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在一个</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有点击事件的</font><font style="vertical-align: inherit;">上遇到了这种情况</font><font style="vertical-align: inherit;">，经过20次搜索后，我发现该摘要节省了我的时间。</font></font></p>

<pre><code>-webkit-tap-highlight-color: rgba(0,0,0,0);
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将禁用Webkit移动浏览器中的默认按钮突出显示</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackoverflow.com/a/6780405/578288"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卡尔·W</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种效果也可能发生在非输入元素上。</font><font style="vertical-align: inherit;">我发现以下作品可以作为更通用的解决方案</font></font></p>

<pre><code>:focus {<font></font>
  outline-color: transparent;<font></font>
  outline-style: none;<font></font>
}<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将解释这一点：</font></font></p>

<ul>
<li><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示它可以对焦点元素进行样式设置。</font><font style="vertical-align: inherit;">因此，我们正在设计重点元素。</font></font></li>
<li><code>outline-color: transparent;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示蓝色发光是透明的。</font></font></li>
<li><code>outline-style: none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 做同样的事情。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在基于Webkit的浏览器中调整textarea大小时： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在textarea上设置max-height和max-width不会删除视觉调整手柄。</font><font style="vertical-align: inherit;">尝试：</font></font></p>

<pre><code>resize: none;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（是的，我同意“尝试避免做任何会破坏用户期望的事情”，但有时确实是有道理的，即在Web应用程序的上下文中）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要从头开始自定义Webkit表单元素的外观：</font></font></p>

<pre><code>-webkit-appearance: none;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
