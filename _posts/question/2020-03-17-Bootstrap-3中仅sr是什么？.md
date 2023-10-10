---
layout: question
title:  Bootstrap 3中仅sr是什么？
date:   2020-03-17T08:24:56.000Z
description: 该类的sr-only用途是什么？是重要的还是我可以删除它？工作正常，没有。这是我的示例：<div class="btn-group">    <...
img: 
author: TomGil村村
category: question
answer: 6
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类的</font></font><code>sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用途是什么？</font><font style="vertical-align: inherit;">是重要的还是我可以删除它？</font><font style="vertical-align: inherit;">工作正常，没有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的示例：</font></font></p>

<pre><code>&lt;div class="btn-group"&gt;<font></font>
    &lt;button type="button" class="btn btn-info btn-md"&gt;Departments&lt;/button&gt;<font></font>
    &lt;button type="button" class="btn btn-info dropdown-toggle btn-md" data-toggle="dropdown"&gt;<font></font>
    &lt;span class="caret"&gt;&lt;/span&gt;<font></font>
    &lt;span class="sr-only"&gt;Toggle Dropdown&lt;/span&gt;<font></font>
    &lt;/button&gt;<font></font>
    &lt;ul class="dropdown-menu" role="menu"&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;Sales&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;Technical&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;Show all&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1907篇《Bootstrap 3中仅sr是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类隐藏除了一个元件的所有设备</font></font><code>screen readers:</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跳到主要内容将.sr-only与.sr-only-focusable结合使用可在元素聚焦时再次显示该元素</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保对象仅（或应该）显示给阅读器和类似设备。</font><font style="vertical-align: inherit;">与具有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aria-hidden =“ true”属性的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他元素相比，它在上下文中更具意义</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div class="alert alert-danger" role="alert"&gt;<font></font>
  &lt;span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"&gt;&lt;/span&gt;<font></font>
  &lt;span class="sr-only"&gt;Error:&lt;/span&gt;<font></font>
  Enter a valid email address<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Glyphicon将在所有其他设备上显示，</font><font style="vertical-align: inherit;">在文本阅读器上</font><font style="vertical-align: inherit;">显示</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字样</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖凯前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是专门用于屏幕阅读器的类名。</font><font style="vertical-align: inherit;">您可以使用任何类名，但是</font></font><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很常用。</font><font style="vertical-align: inherit;">如果您不关心遵循合规性进行开发，则可以将其删除。</font><font style="vertical-align: inherit;">如果将其删除，则不会以任何方式影响UI，因为此类的CSS对台式机和移动设备浏览器不可见。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里似乎缺少一些有关使用</font></font><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来解释其目的以及供屏幕阅读器使用的信息。</font><font style="vertical-align: inherit;">首先，最重要的是始终牢记受损用户。</font><font style="vertical-align: inherit;">减损是508合规性的目的：</font></font><a href="https://www.section508.gov/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://www.section508.gov/" rel="noreferrer"><font style="vertical-align: inherit;">//www.section508.gov/</font></a><font style="vertical-align: inherit;">，引导程序将这一点考虑在内非常重要。</font><font style="vertical-align: inherit;">但是，</font></font><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于508合规性，并不需要考虑全部</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用颜色，字体大小，通过导航的可访问性，描述符，使用aria等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是至于</font></font><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-CSS实际上是做什么的？</font><font style="vertical-align: inherit;">用于的CSS有几种略有不同的变体</font></font><code>.sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">下面是我使用的少数几个之一：</font></font></p>

<pre><code>.sr-only {<font></font>
    position: absolute;<font></font>
    margin: -1px 0 0 -1px;<font></font>
    padding: 0;<font></font>
    display: block;<font></font>
    width: 1px;<font></font>
    height: 1px;<font></font>
    font-size: 1px;<font></font>
    line-height: 1px;<font></font>
    overflow: hidden;<font></font>
    clip: rect(0,0,0,0);<font></font>
    border: 0;<font></font>
    outline: 0;<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的CSS在此类包装的台式机和移动浏览器中隐藏了内容，但是可通过JAWS之类的屏幕阅读器查看：</font></font><a href="http://www.freedomscientific.com/Products/Blindness/JAWS" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://www.freedomscientific.com/Products/Blindness/JAWS" rel="noreferrer"><font style="vertical-align: inherit;">//www.freedomscientific.com/Products/Blindness/JAWS</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">标记示例如下：</font></font></p>

<pre><code>&lt;a href="#" target="_blank"&gt;<font></font>
    Click to Open Site<font></font>
    &lt;span class="sr-only"&gt;This is an external link&lt;/span&gt;<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p>Additionally, if a DOM element has a width and height of 0, the element is not seen by the DOM. This is why the above CSS uses <code>width: 1px; height: 1px;</code>. By using <code>display: none</code> and setting your CSS to <code>height: 0</code> and <code>width: 0</code>, the element is not seen by the DOM and is thus problematic. The above CSS using <code>width: 1px; height: 1px;</code> is not all you do to make the content invisible to desktop and mobile browsers (without <code>overflow: hidden</code>, your content would still show on the screen), and visible to screen readers. Hiding the content from desktop and mobile browsers is done by adding an offset from <code>width: 1px</code> and <code>height: 1px</code> previously mentioned by using:</p>

<pre><code>position: absolute;<font></font>
margin: -1px 0 0 -1px; <font></font>
overflow: hidden;<font></font>
</code></pre>

<p>Lastly, to have a very good idea of what a screen reader sees and relays to its impaired user, turn off page styling for your browser. For Firefox, you can do this by going to:</p>

<pre><code>View &gt; Page Style &gt; No Style
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望我在此提供的信息除了其他回复之外，还对某人有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://getbootstrap.com/examples/navbar-fixed-top/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">navbar示例中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了</font><font style="vertical-align: inherit;">它，并对其进行了简化。</font></font></p>

<pre><code>&lt;ul class="nav"&gt;<font></font>
  &lt;li&gt;&lt;a&gt;Default&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;li&gt;&lt;a&gt;Static top&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;li&gt;&lt;b&gt;&lt;a&gt;Fixed top &lt;span class="sr-only"&gt;(current)&lt;/span&gt;&lt;/a&gt;&lt;/b&gt;&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会看到选择了哪一个（</font></font><code>sr-only</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分被隐藏）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态顶</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定顶</font></font></strong></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用屏幕阅读器，则会听到选择了哪个选项：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态顶</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定顶（当前）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这项技术的存在，盲人本可以更轻松地在您的网站上导航。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙A</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如JoshC所说，该类用于隐藏用于屏幕阅读器的信息。</font><font style="vertical-align: inherit;">但是，不仅要隐藏标签，您还可以考虑向视力不佳的用户隐藏“跳至主要内容”的内部链接，如果您在主要内容之前有复杂的导航或广告，这对于盲人用户来说是理想的。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望您的网站与屏幕阅读器进行更多互动，请使用W3C标准化的ARIA属性，我绝对建议您访问</font></font><a href="https://webaccessibility.withgoogle.com/course" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google在线课程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><a href="https://webaccessibility.withgoogle.com/course" rel="nofollow noreferrer"><font style="vertical-align: inherit;">课程</font></a><font style="vertical-align: inherit;">最多需要1-2 </font></font><a href="http://www.youtube.com/watch?v=x18vEEfpK3g" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小时，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者至少观看</font><a href="http://www.youtube.com/watch?v=x18vEEfpK3g" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Google的40分钟视频</font></a><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据世界卫生组织的数据，2.85亿人有视力障碍。</font><font style="vertical-align: inherit;">因此，使网站可访问性很重要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为开发人员，我们应该提供仅适用于所有即用型内容的可访问内容，而不是专门针对屏幕阅读器的内容。</font><font style="vertical-align: inherit;">并非总是可能的，但请</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ARIA和“仅限屏幕阅读器”调整要小心</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您不完全了解它，请不要这样做。</font><font style="vertical-align: inherit;">错误的实现可能比不使用它更糟糕。</font><font style="vertical-align: inherit;">请阅读</font></font><a href="https://www.accessibility-developer-guide.com/knowledge/aria/bad-practices/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关ARIA错误示例的accessibility-developer-guide</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这里，您将找到完全可访问的组件/小部件，不需要任何“仅屏幕阅读器”干预。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Jim</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="http://getbootstrap.com/css/#helper-classes-screen-readers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap的文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该类用于</font><font style="vertical-align: inherit;">从呈现的页面的布局中</font><font style="vertical-align: inherit;">隐藏仅用于</font></font><a href="https://webaccess.berkeley.edu/ask-pecan/what-is-a-screen-reader" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕阅读器的</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">信息</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您没有为每个输入都添加标签，那么屏幕阅读器将在您的表单上遇到麻烦。</font><font style="vertical-align: inherit;">对于这些内联表单，您可以使用.sr-only类隐藏标签。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用的</font></font><a href="http://jsfiddle.net/s9LFQ/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式：</font></font></p>

<pre class="lang-css prettyprint-override"><code>.sr-only {<font></font>
  position: absolute;<font></font>
  width: 1px;<font></font>
  height: 1px;<font></font>
  padding: 0;<font></font>
  margin: -1px;<font></font>
  overflow: hidden;<font></font>
  clip: rect(0,0,0,0);<font></font>
  border: 0;<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是重要的还是我可以删除它？</font><font style="vertical-align: inherit;">工作正常，没有。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是，请勿删除它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该始终将屏幕阅读器用于辅助功能。</font><font style="vertical-align: inherit;">使用该类无论如何都会隐藏该元素，因此您不应看到视觉上的差异。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有兴趣阅读有关可访问性的信息：</font></font></p>

<ul>
<li><p><a href="http://www.w3.org/WAI/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络无障碍倡议（WAI）</font></font></a></p></li>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility?redirectlocale=en-US&amp;redirectslug=Accessibility" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN可访问性文档</font></font></a></p></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
