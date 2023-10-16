---
layout: question
title:  如何通过CSS在UL / LI html列表中设置项目符号颜色，而无需使用任何图像或跨度标签\[重复\]
date:   2020-03-18T01:51:40.000Z
description:                                                                          ...
img: 
author: 乐米亚
category: question
answer: 15
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/1470214/change-bullets-color-of-an-html-list-without-using-span" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不使用跨度的情况下更改HTML列表的项目符号颜色</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （13个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-11-20 08：07：24Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想象一个简单的未排序列表，其中包含一些</font></font><code>&lt;li&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目。</font><font style="vertical-align: inherit;">现在，我将子弹定义为通过。</font></font><code>list-style:square;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我将</font></font><code>&lt;li&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目</font><font style="vertical-align: inherit;">的颜色设置为</font><font style="vertical-align: inherit;">，</font></font><code>color: #F00;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目</font><em><font style="vertical-align: inherit;">都</font></em><font style="vertical-align: inherit;">将变为红色！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我只想设置方形项目符号的颜色。</font><font style="vertical-align: inherit;">是否有一种</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优雅的方式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来定义CSS中项目符号的颜色...</font></font></p>

<h1><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...不使用任何图片图像或span标签！</font></font></em></h1>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;ul&gt;<font></font>
&lt;li&gt;Item 1&lt;/li&gt;<font></font>
&lt;li&gt;Item 2&lt;/li&gt;<font></font>
&lt;li&gt;Item 3&lt;/li&gt;<font></font>
&lt;ul&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>li{<font></font>
   list-style:square;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1985篇《如何通过CSS在UL / LI html列表中设置项目符号颜色，而无需使用任何图像或跨度标签\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就可以了。</font></font></p>

<pre><code>li{<font></font>
  color: #fff;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lea Verous解决方案很好，但我想对子弹的位置进行更多控制，所以这是我的方法：</font></font></p>

<pre><code>.entry ul {<font></font>
    list-style: none;<font></font>
    padding: 0;<font></font>
    margin: 0;<font></font>
    /* hide overflow in the case of floating elements around ... */<font></font>
    overflow: hidden;<font></font>
}<font></font>
.entry li { <font></font>
    position: relative;<font></font>
    padding-left: 24px;<font></font>
}<font></font>
.entry li:before {<font></font>
    /* with absolute position you can move this around or make it bigger without getting unwanted scrollbars */<font></font>
    position: absolute;<font></font>
    content: "• ";<font></font>
    color: #E94E24;<font></font>
    font-size: 30px;<font></font>
    left: 0;<font></font>
    /* use fonts like "arial" or use "sans-serif" to make the dot perfect round */ <font></font>
    font-family: Arial, sans-serif;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙西门</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以Lea的演示为例，这是制作带有边框的无序列表的另一种方法：</font><a href="http://jsfiddle.net/vX4K8/7/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/vX4K8/7/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/vX4K8/7/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;ul&gt;<font></font>
    &lt;li&gt;Foo&lt;/li&gt;<font></font>
    &lt;li&gt;Bar&lt;/li&gt;<font></font>
    &lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/li&gt;<font></font>
        &lt;ul&gt;<font></font>
        &lt;li&gt;Son&lt;/li&gt;<font></font>
        &lt;li&gt;Of&lt;/li&gt;<font></font>
            &lt;ul&gt;<font></font>
            &lt;li&gt;Foo&lt;/li&gt;<font></font>
            &lt;li&gt;Bar&lt;/li&gt;<font></font>
            &lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/li&gt;<font></font>
            &lt;/ul&gt;<font></font>
        &lt;/ul&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>ul {<font></font>
list-style: none;<font></font>
margin: 0;<font></font>
}<font></font>
<font></font>
ul:first-child {<font></font>
   padding: 0;<font></font>
}<font></font>
<font></font>
li {<font></font>
    line-height: 180%;<font></font>
    border-bottom: 1px dashed #CCC;<font></font>
    margin-left: 14px;<font></font>
    text-indent: -14px;<font></font>
}<font></font>
<font></font>
li:last-child {<font></font>
    border: none;<font></font>
}<font></font>
<font></font>
li:before {<font></font>
    content: "";<font></font>
    border-left: 4px solid #CCC;<font></font>
    padding-left: 10px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猪猪伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这篇文章的答案有点晚了，仅供参考...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></p>

<pre><code>ul {<font></font>
    color: red;<font></font>
}<font></font>
<font></font>
li {<font></font>
    color: black;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目符号的颜色在ul标签上定义，然后我们将li颜色切换回去。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗神奇</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在为这个问题添加解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想使用图像，而验证器会因为在CSS中使用负值而惩罚您，所以我采用这种方式：</font></font></p>

<pre><code>ul          { list-style:none; padding:0; margin:0; }<font></font>
<font></font>
li          { padding-left:0.75em; position:relative; }<font></font>
<font></font>
li:before       { content:"•"; color:#e60000; position:absolute; left:0em; }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在多行条目中具有完美缩进</font><font style="vertical-align: inherit;">的</font></font><a href="https://stackoverflow.com/users/90826/lea-verou"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lea Verou</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案的</font><font style="vertical-align: inherit;">变体</font><font style="vertical-align: inherit;">可能是这样的：</font></font></p>

<pre><code>ul{<font></font>
    list-style: none;<font></font>
    position: relative;<font></font>
    padding: 0;<font></font>
    margin: 0;<font></font>
}<font></font>
<font></font>
li{<font></font>
    padding-left: 1.5em; <font></font>
}<font></font>
<font></font>
li:before {<font></font>
    position: absolute;<font></font>
    content: "•";<font></font>
    color: red;<font></font>
    left: 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙猪猪</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您最容易做的就是将中的内容包装</font></font><code>&lt;li&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或等效形式，然后可以独立设置颜色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以使用所需的项目符号颜色制作图像，然后使用</font></font><code>list-style-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性进行</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY神无</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议给</font></font><code>LI</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">a </font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>padding-left</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>list-style-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在跨浏览器的环境中，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">属性为flakey，不需要添加额外的元素（例如span）。</font><font style="vertical-align: inherit;">因此，您的代码最终看起来像这样：</font></font></p>

<pre><code>li {<font></font>
  background:url(../images/bullet.png) 0 0 no-repeat;<font></font>
  list-style:none;<font></font>
  padding-left:10px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Stafan小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了这个，事情对我来说很奇怪。</font><font style="vertical-align: inherit;">（在完成</font></font><code>:after {content: "";}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本教程</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">部分</font><font style="vertical-align: inherit;">之后，css停止了工作</font><font style="vertical-align: inherit;">。我发现您可以仅通过使用</font><font style="vertical-align: inherit;">项目本身</font><font style="vertical-align: inherit;">来</font></font><code>color:#ddd;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>li</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目</font><font style="vertical-align: inherit;">符号着色</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><strong><a href="http://jsfiddle.net/bGKYJ/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>li{<font></font>
    color:#ff0000;    <font></font>
    list-style:square;                <font></font>
}<font></font>
a {<font></font>
    text-decoration: none;<font></font>
    color:#00ff00;<font></font>
}<font></font>
<font></font>
a:hover {<font></font>
    background-color: #ddd;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，另一种解决方案是将</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪元素与一起使用</font></font><code>border-radius: 50%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将适用于所有浏览器，包括IE 8及更高版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用本</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">机可以响应字体大小的变化。</font><font style="vertical-align: inherit;">您可以通过调整jsFiddle窗口的大小来进行测试。</font></font></p>

<pre><code>ul {<font></font>
    list-style: none;<font></font>
    line-height: 1em;<font></font>
    font-size: 3vw;<font></font>
}<font></font>
<font></font>
ul li:before {<font></font>
    content: "";<font></font>
    line-height: 1em;<font></font>
    width: .5em;<font></font>
    height: .5em;<font></font>
    background-color: red;<font></font>
    float: left;<font></font>
    margin: .25em .25em 0;<font></font>
    border-radius: 50%;<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/HS82t/224/"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以使用</font></font><code>box-shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来创建一些漂亮的阴影，而该阴影在</font></font><code>content: "• "</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案中</font><font style="vertical-align: inherit;">看起来并不好</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="http://www.w3.org/TR/css3-lists/#marker-pseudoelement" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS 3 Lists</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">的当前规范</font><font style="vertical-align: inherit;">确实指定了</font></font><a href="http://www.w3.org/TR/css3-lists/#marker-pseudo-element" rel="noreferrer"><code>::marker</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
伪元素</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将完全满足您的要求。</font><font style="vertical-align: inherit;">FF已被测试为不支持</font></font><code>::marker</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我怀疑Safari或Opera是否具有它。</font><font style="vertical-align: inherit;">IE当然不支持它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，目前，唯一的方法是使用带有的图片</font></font><code>list-style-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜您可以</font></font><code>li</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来</font><font style="vertical-align: inherit;">包装a的内容，</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以设置每个的颜色，但这对我来说似乎有点不足。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是解决了这样的问题，它应该在所有浏览器中都可以使用：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></strong></p>

<pre class="lang-html prettyprint-override"><code>&lt;ul&gt;<font></font>
  &lt;li&gt;&lt;span&gt;Foo&lt;/span&gt;&lt;/li&gt;<font></font>
  &lt;li&gt;&lt;span&gt;Bar&lt;/span&gt;&lt;/li&gt;<font></font>
  &lt;li&gt;&lt;span&gt;Bat&lt;/span&gt;&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></strong>
</p>

<pre><code>ul li{<font></font>
    color: red<font></font>
}<font></font>
<font></font>
ul li span{<font></font>
    color: blue;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种实现方法是使用</font></font><code>li:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>content: ""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其样式化为</font></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个工作代码段：</font></font></em></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>ul {<font></font>
  list-style-type: none; /* no default bullets */<font></font>
}<font></font>
<font></font>
ul li { <font></font>
  font-family: Arial;<font></font>
  font-size: 18px;<font></font>
}<font></font>
<font></font>
ul li:before { /* the custom styled bullets */<font></font>
  background-color: #14CCBB;<font></font>
  border-radius: 50%;<font></font>
  content: "";<font></font>
  display: inline-block;<font></font>
  margin-right: 10px;<font></font>
  margin-bottom: 2px;<font></font>
  height: 10px;<font></font>
  width: 10px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;ul&gt;<font></font>
  &lt;li&gt;Swollen joints&lt;/li&gt;<font></font>
  &lt;li&gt;Pain in hands and knees&lt;/li&gt;<font></font>
  &lt;li&gt;Redness around joints&lt;/li&gt;<font></font>
  &lt;li&gt;Constant fatigue&lt;/li&gt;<font></font>
  &lt;li&gt;Morning stiffness in joints&lt;/li&gt;<font></font>
  &lt;li&gt;High fevers&lt;/li&gt;<font></font>
  &lt;li&gt;Rheumatoid nodules, which develop around joints&lt;/li&gt;<font></font>
&lt;/ul&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前一段时间浏览时，找到了此站点，您是否尝试过这种方法？</font></font></p>

<pre><code>li{<font></font>
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAE0lEQVQIW2NkYGD4D8RwwEi6AACaVAQBULo4sgAAAABJRU5ErkJggg==");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来很难，但是您可以</font></font><strong><a href="http://www.patternify.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">制作自己的png图像/图案</font><font style="vertical-align: inherit;">，然后复制/粘贴代码并自定义项目符号=）仍然优雅吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循@ lea-verou在另一个答案上的想法，并应用外部资源增强的这种哲学，我来到了另一个解决方案：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Webfont图标库的样式表嵌入到您的头部，在这种情况下为Font Awesome：</font></font></li>
</ol>

<p><code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"&gt;</code></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采取从FontAwesome一个代码</font></font><a href="http://fontawesome.io/cheatsheet/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的cheatsheet</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或任何其它web字体图标）。</font></font></li>
</ol>

<blockquote>
<pre><code>i.e.:<font></font>
fa-angle-right [&amp;#xf105;]<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用f ...的最后一部分，后跟这样的数字，</font></font><code>font-family</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以使用：</font></font></p>

<pre><code>li:before {<font></font>
    content: "\f105";<font></font>
    font-family: FontAwesome;<font></font>
    color: red; /* or whatever color you prefer */<font></font>
    margin-right: 4px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样！</font><font style="vertical-align: inherit;">现在您也有自定义的项目符号提示=）</font></font></p>

<p><a href="http://jsfiddle.net/ytH5P/5721/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最常见的方法是按照以下方式进行操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>ul {<font></font>
  list-style: none;<font></font>
  padding: 0;<font></font>
  margin: 0;<font></font>
}<font></font>
<font></font>
li {<font></font>
  padding-left: 1em; <font></font>
  text-indent: -.7em;<font></font>
}<font></font>
<font></font>
li::before {<font></font>
  content: "• ";<font></font>
  color: red; /* or whatever color you prefer */<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;ul&gt;<font></font>
  &lt;li&gt;Foo&lt;/li&gt;<font></font>
  &lt;li&gt;Bar&lt;/li&gt;<font></font>
  &lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/li&gt;<font></font>
&lt;/ul&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle：</font><a href="http://jsfiddle.net/leaverou/ytH5P/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/leaverou/ytH5P/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/leaverou/ytH5P/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于所有浏览器，包括版本8及更高版本的IE。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
