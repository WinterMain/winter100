---
layout: question
title:  何时在CSS中使用margin和padding \[关闭\]
date:   2020-03-13T07:53:41.000Z
description:                                                                          ...
img: 
author: 逆天伽罗宝儿
category: question
answer: 13
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
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于观点的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/2189452/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2018-11-20 16：32：45Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在编写CSS时，在决定何时使用</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和何时使用</font><font style="vertical-align: inherit;">时应使用特定的规则或准则</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1418篇《何时在CSS中使用margin和padding \[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证金在盒子外面，填充物在盒子里面</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Tony</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">余量</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距通常用于在元素本身及其周围之间创建空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我在构建导航栏时使用它，以使其贴在屏幕的边缘并且没有白色间隙。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常在边框中有一个元素</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似</font><font style="vertical-align: inherit;">元素时使用</font><font style="vertical-align: inherit;">它，并且我想减小其大小，但是当时我想保持周围其他元素之间的距离或边距。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，这是情况。</font><font style="vertical-align: inherit;">这取决于您要做什么。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>I always use this principle:</p>

<p><a href="https://i.stack.imgur.com/039iW.png" rel="noreferrer"><img src="https://i.stack.imgur.com/039iW.png" alt="盒子模型图"></a></p>

<p>This is the box model from the inspect element feature in Firefox. It works like an onion: </p>

<ul>
<li>Your content is in the middle.</li>
<li>Padding is space between your content and edge of the tag it is
inside.</li>
<li>The border and its specifications</li>
<li>The margin is the space around the tag.</li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，更大的边距将在包含您的内容的盒子周围留出更多空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较大的填充将增加您的内容与其所在的框之间的空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将其设置为特定值，则它们都不会增大或减小框的大小。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一些HTML，演示了如何</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font><font style="vertical-align: inherit;">如何</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">影响可点击性和背景填充。</font><font style="vertical-align: inherit;">一个对象获得对其填充的点击，但是在对象边缘区域的点击进入其父对象。  </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$(".outer").click(function(e) {<font></font>
  console.log("outer");<font></font>
  e.stopPropagation();<font></font>
});<font></font>
<font></font>
$(".inner").click(function(e) {<font></font>
  console.log("inner");<font></font>
  e.stopPropagation();<font></font>
});</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.outer {<font></font>
  padding: 10px;<font></font>
  background: red;<font></font>
}<font></font>
<font></font>
.inner {<font></font>
  margin: 10px;<font></font>
  padding: 10px;<font></font>
  background: blue;<font></font>
  border: solid white 1px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="http://code.jquery.com/jquery-latest.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div class="outer"&gt;<font></font>
  &lt;div class="inner" style="position:relative; height:0px; width:0px"&gt;<font></font>
<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距清除元素周围（边框之外）的区域，但填充清除元素周围（边框内）的内容。</font></font></p>

<p><img src="https://i.stack.imgur.com/XyRhQ.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着您的元素不知道其外部页边距，因此，如果要开发动态Web控件，建议您尽可能使用padding vs margin。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，有些时候您必须使用保证金。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是很好的了解之间的差异</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以下是一些区别：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距是</font><font style="vertical-align: inherit;">元素的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部空间</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而填充是</font><font style="vertical-align: inherit;">元素的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部空间</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距是元素边框外部的空间，而填充是元素边框内部的空间。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证金接受auto：的值</font></font><code>margin: auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是您不能将padding设置为auto。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距可以设置为任何数字，但填充必须为非负数。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在设置元素样式时，填充也会受到影响（例如背景色），但空白不会受到影响。</font></font></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要注意的一件事是，当自动折叠边距使您烦恼（并且您没有在元素上使用背景色）时，使用填充就更容易了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高级保证金与填充说明</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空格分隔元素中的内容</font><font style="vertical-align: inherit;">是不合适</font><font style="vertical-align: inherit;">的。</font><font style="vertical-align: inherit;">你</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利用</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子元素</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来代替。</font><font style="vertical-align: inherit;">较早的浏览器（例如Internet Explorer）会误解盒式模型，除非要使用</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它，</font><font style="vertical-align: inherit;">否则它</font><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 4中</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以完美运行</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有当使用两个例外</font></font><code>padding</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适当的使用：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应用于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含任何子元素（例如输入元素）</font><font style="vertical-align: inherit;">的内联</font><font style="vertical-align: inherit;">元素。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在补偿浏览器的一个高度杂项错误，供应商*咳嗽* Mozilla *咳嗽*拒绝修复该错误，并确定（在与W3C和WHATWG编辑器进行定期交流的程度上）您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拥有一个可行的解决方案，并且该解决方案不会影响您要补偿的错误以外的其他任何内容的样式。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您拥有100％宽度的元素时，</font></font><code>padding: 50px;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以有效获得</font></font><code>width: calc(100% + 100px);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加入</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不会造成意想不到的布局问题，当您使用</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font></font><code>child elements</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接的元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行上述两项操作之一，请</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在元素中添加填充，而是直接在子元素/子元素中添加填充，以确保</font><font style="vertical-align: inherit;">在</font><em><font style="vertical-align: inherit;">所有</font></em><font style="vertical-align: inherit;">浏览器</font><font style="vertical-align: inherit;">中</font><em><font style="vertical-align: inherit;">都能</font></em><font style="vertical-align: inherit;">获得</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预期的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行为</font><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证金</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页边距用于在元素中创建该元素与页面的其他元素之间的距离。</font><font style="vertical-align: inherit;">使用填充来创建内容与元素边框之间的距离的地方。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距不是元素的一部分，而填充是元素的一部分。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考下面摘自</font></font><a href="http://www.digizol.com/2006/12/margin-vs-padding-css-properties.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Margin Vs Padding-CSS Properties的图像</font></font></a></p>

<p><img src="https://i.stack.imgur.com/PaLp6.jpg" alt="保证金与填充"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我见过的最好的例子，图表甚至“尝试一下”视图都</font></font><a href="http://www.w3schools.com/css/css_boxmodel.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里解释</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为下面的图表可以直观地了解两者之间的区别。</font></font></p>

<p><img src="https://i.stack.imgur.com/PeSIJ.gif" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要记住的一件事是，符合标准的浏览器（</font></font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_box_model_bug" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE怪癖是一个例外</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）仅将内容部分呈现为给定的宽度，因此在布局计算中应注意这一点。</font><font style="vertical-align: inherit;">另请注意，</font></font><a href="https://stackoverflow.com/a/15406347/311525"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font><font style="vertical-align: inherit;">边框，边框在某种程度上</font><a href="https://stackoverflow.com/a/15406347/311525"><font style="vertical-align: inherit;">卷土重来</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Pro卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距位于块元素的外部，而填充位于内部。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用边距将图块与它外面的东西分开 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用填充将内容从块的边缘移开。</font></font></li>
</ul>

<p><img src="https://i.stack.imgur.com/UHD7W.gif" alt="在此处输入图片说明"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关问题的更多技术说明，但是如果您正在寻找一种</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">思考</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距和填充的方法，可以帮助您选择何时以及如何使用它们，则可能会有所帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将块元素与挂在墙上的图片进行比较：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器窗口</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是在墙上。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一样的照片。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像被框住的图片之间的墙面空间一样。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像围绕着照片抠图。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边界</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像一个框上的边框。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当保证金和填充之间的决定，这是经验的一个很好的规则来使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证金</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当你在关系到其他事情上墙，间距元素</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，要调整的元素本身的外观。</font><font style="vertical-align: inherit;">边距不会更改元素的大小，但填充通常会使元素变大</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1 </font></font></sup> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用</font></font><a href="http://www.paulirish.com/2012/box-sizing-border-box-ftw/"><code>box-sizing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改此默认框模型</font><font style="vertical-align: inherit;">。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://www.w3schools.com/css/css_boxmodel.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/css/css_boxmodel.asp</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同部分的说明：</font></font></p>
  
  <ul>
  <li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -框的内容，其中显示文本和图像</font></font></p></li>
  <li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -清除内容周围的区域。</font><font style="vertical-align: inherit;">填充是透明的</font></font></p></li>
  <li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边框</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -围绕边框和内容的边框</font></font></p></li>
  <li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边距</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -清除边界外的区域。</font><font style="vertical-align: inherit;">边距是透明的</font></font></p></li>
  </ul>
  
  <p><a href="https://i.stack.imgur.com/cHqTR.png" rel="noreferrer"><img src="https://i.stack.imgur.com/cHqTR.png" alt="CSS盒子模型的插图"></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实时示例（通过更改值进行操作）：</font><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
