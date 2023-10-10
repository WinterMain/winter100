---
layout: question
title:  我可以更改Font Awesome的图标颜色吗？
date:   2020-04-03T03:57:32.000Z
description: <a>由于某种原因，我必须将图标包装在标签中。有什么可能的方法可以将超棒字体图标的颜色更改为黑色？还是只要包裹在<a>标签中就不可能吗？真棒字体应该是...
img: 
author: 番长
category: question
answer: 17
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，</font><font style="vertical-align: inherit;">我必须将图标包装在</font><font style="vertical-align: inherit;">标签中。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
有什么可能的方法可以将超棒字体图标的颜色更改为黑色？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
还是只要包裹在</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签中</font><font style="vertical-align: inherit;">就不可能</font><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">真棒字体应该是字体而不是图像，对不对？</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/24176/images/thumbnails/1585886252343.png" data-src="https://www.samyoc.com//uploads/users/24176/images/1585886252343.png" alt="在此处输入图片说明"></p>

<pre><code>&lt;a href="/users/edit"&gt;&lt;i class="icon-cog"&gt;&lt;/i&gt; Edit profile&lt;/a&gt;
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用bootstrap类更改Font Awesome的图标颜色</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用 </font></font></p>

<pre><code>text-color
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></p>

<pre><code>text-white
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，唯一有效的方法是内联CSS +覆盖</font></font></p>

<pre><code>&lt;i class="fas fa-ellipsis-v fa-2x" style="color:red !important"&gt;&lt;/i&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;i class="icon-cog blackiconcolor"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css：</font></font></p>

<pre><code> .blackiconcolor {color:black;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用类将为您提供免费的绑定属性，您可以将其应用于所需的任何标签。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要更改特定图标的颜色，可以使用如下所示的内容：</font></font></p>

<pre><code>.fa-stop {<font></font>
    color:red;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一行中编写此代码，这将更改图标颜色：</font></font></p>

<pre><code>&lt;li class="fa fa-id-card-o" style="color:white" aria-hidden="true"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">使用</font><strong><font style="vertical-align: inherit;">属性</font></strong><font style="vertical-align: inherit;">通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改前</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字体图标的</font><strong><font style="vertical-align: inherit;">前景色</font></strong><font style="vertical-align: inherit;">来</font><strong><font style="vertical-align: inherit;">更改其颜色</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以下是示例：</font></font><strong><code>css</code> <code>color</code><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>&lt;i class="fa fa-cog" style="color:white"&gt;
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也支持svgs</font></font></p>

<pre><code>&lt;style&gt;<font></font>
.fa-cog{<font></font>
color:white;<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<hr>

<pre><code>&lt;style&gt;<font></font>
.parent svg, .parent i{<font></font>
color:white<font></font>
}<font></font>
&lt;/style&gt;<font></font>
<font></font>
&lt;div class="parent"&gt;<font></font>
  &lt;i class="fa fa-cog" style="color:white"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<hr></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随便随便给它样式</font></font></p>

<pre><code>style="color: white;font-size: 20px;"
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><pre><code>.fa-search{<font></font>
    color:#fff;<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在CSS中编写该代码，它将颜色更改为白色或您想要的任何颜色，请指定它</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要给和文本样式就可以了：D HTML：</font></font></p>

<pre><code>&lt;a href="javascript:;" class="fa fa-trash" style="color:#d9534f;"&gt;<font></font>
   &lt;span style="color:black;"&gt;Text Name&lt;/span&gt;<font></font>
&lt;/a&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryJinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要仅击中此类按钮中的齿轮图标，可以给按钮一个类，并仅在按钮内部时设置图标的颜色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;a class="my-nice-button" href="/users/edit"&gt;<font></font>
    &lt;i class="icon-cog"&gt;&lt;/i&gt;<font></font>
    Edit profile<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.my-nice-button&gt;i { color: black; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使按钮的直接后代中的所有图标变为黑色。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考@ClarkeyBoy答案，如果使用最新版本的</font></font><code>Font-Awesome</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图标或使用</font></font><code>fa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">，则以下代码可以正常工作</font></font></p>

<pre><code>.fa.icon-white {<font></font>
    color: white;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，然后添加</font></font><code>icon-white</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到现有的类</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>&lt;i class="icon-cog text-red"&gt;<font></font>
&lt;i class="icon-cog text-blue"&gt;<font></font>
&lt;i class="icon-cog text-yellow"&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Davaid</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>.icon-cog {<font></font>
  color: black;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.7.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上的Font Awesome版本</font><font style="vertical-align: inherit;">，其外观如下：</font></font></p>

<pre><code>.fa-cog {<font></font>
  color: black;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>    &lt;i class="icon-cog blackiconcolor"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css：</font></font></p>

<pre><code>    .blackiconcolor {color:black;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以向按钮图标添加额外的类...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想更改CSS文件，那么这对我有用。</font><font style="vertical-align: inherit;">在HTML中，用颜色添加样式：</font></font></p>

<pre><code>&lt;i class="fa fa-cog" style="color:#fff;"&gt;&lt;/i&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在style属性中指定颜色：</font></font></p>

<pre><code>&lt;a href="/users/edit"&gt;&lt;i class="icon-cog" style="color:black"&gt;&lt;/i&gt; Edit profile&lt;/a&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更改整个项目的字体真棒图标颜色，请在CSS中使用</font></font></p>

<pre><code>.fa {<font></font>
  color : red;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
