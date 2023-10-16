---
layout: question
title:  我可以在输入字段上使用：before或：after伪元素吗？
date:   2020-03-16T07:52:31.000Z
description: 我正在尝试 after在input字段上使用CSS伪元素，但是它不起作用。如果我将它与一起使用span，则可以正常运行。<style type="te...
img: 
author: 凯ANear
category: question
answer: 15
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">CSS伪元素</font><font style="vertical-align: inherit;">，但是它不起作用。</font><font style="vertical-align: inherit;">如果我将它与一起使用</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以正常运行。</font></font></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
.mystyle:after {content:url(smiley.gif);}<font></font>
.mystyle {color:red;}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效（在“ buu！”之后和“更多”之前放置笑脸）</font></font></p>

<pre><code>&lt;span class="mystyle"&gt;buuu!&lt;/span&gt;a some more
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是行不通的-它只将someValue涂成红色，但没有笑脸。</font></font></p>

<pre><code>&lt;input class="mystyle" type="text" value="someValue"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font><font style="vertical-align: inherit;">我应该使用另一个伪选择器吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我无法在</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">周围</font><font style="vertical-align: inherit;">添加</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它是由第三方控件生成的。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1824篇《我可以在输入字段上使用：before或：after伪元素吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘要</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不能使用</font></font><code>&lt;input type="button"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但可以使用</font></font><code>&lt;input type="checkbox"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="http://jsfiddle.net/gb2wY/50/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/gb2wY/50/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/gb2wY/50/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;p class="submit"&gt;<font></font>
    &lt;input id="submit-button" type="submit" value="Post"&gt;<font></font>
    &lt;br&gt;&lt;br&gt;<font></font>
    &lt;input id="submit-cb" type="checkbox" checked&gt;<font></font>
&lt;/p&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>#submit-button::before,<font></font>
#submit-cb::before {<font></font>
    content: ' ';<font></font>
    background: transparent;<font></font>
    border: 3px solid crimson;<font></font>
    display: inline-block;<font></font>
    width: 100%;<font></font>
    height: 100%;<font></font>
    padding: 0;<font></font>
    margin: -3px -3px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有另一个想法，用这个代替：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
&lt;input type="text"&gt;&lt;/input&gt;text can be entered here&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于可以具有子节点的节点，因为它们会插入新节点作为第一个或最后一个节点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><code>:before</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><strong><code>:after</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用于容器内，这意味着您可以将其用于带有结束标签的元素。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不适用于自动关闭的元素。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带说明，自动关闭的元素（例如img / hr / input）也称为“替换元素”，因为它们已被其各自的内容替换。</font><font style="vertical-align: inherit;">“外部对象”缺乏更好的用语。</font><font style="vertical-align: inherit;">更好的阅读</font></font><a href="http://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaLEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这个帖子的原因是我遇到了同样的问题，这是对我有用的解决方案。</font><font style="vertical-align: inherit;">与其替换输入值，不如将其删除并在其后绝对放置一个大小相同的跨度，跨度可以使用</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您选择的图标字体应用于其伪类。</font></font></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
<font></font>
form {position: relative; }<font></font>
.mystyle:before {content:url(smiley.gif); width: 30px; height: 30px; position: absolute; }<font></font>
.mystyle {color:red; width: 30px; height: 30px; z-index: 1; position: absolute; }<font></font>
&lt;/style&gt;<font></font>
<font></font>
&lt;form&gt;<font></font>
&lt;input class="mystyle" type="text" value=""&gt;&lt;span class="mystyle"&gt;&lt;/span&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>According to a <a href="http://www.w3.org/TR/CSS2/generate.html#x2" rel="noreferrer">note</a> in the CSS 2.1 spec, the specification “does not fully define the interaction of :before and :after with replaced elements (such as IMG in HTML). This will be defined in more detail in a future specification.” Although <code>input</code> is not really a replaced element any more, the basic situation has not changed: the effect of <code>:before</code> and <code>:after</code> on it in unspecified and generally has no effect.</p>

<p>The solution is to find a different approach to the problem you are trying to address this way. Putting generated content into a text input control would be very misleading: to the user, it would appear to be part of the initial value in the control, but it cannot be modified – so it would appear to be something forced at the start of the control, but yet it would not be submitted as part of form data.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry神乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里最大的误区，就是这些词的含义</font></font><code>before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它们</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指元素本身，而是指元素中的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以，</font></font><code>element:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是之前的内容，并且</font></font><code>element:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是内容之后，但两者仍然是原来的元素中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元件具有在CSS视图中没有的内容，所以不具有</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪内容。</font><font style="vertical-align: inherit;">许多其他void或替换元素也是如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有伪元素引用</font><font style="vertical-align: inherit;">元素</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不同的宇宙中，这些伪元素可能被称为其他名称，以使这种区分更加清楚。</font><font style="vertical-align: inherit;">甚至有人可能提出了一个伪元素，而该伪元素确实在元素之外。</font><font style="vertical-align: inherit;">到目前为止，在这个宇宙中情况并非如此。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人所解释的那样，</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s是有点替换的void元素，因此大多数浏览器都不允许您在其中生成</font></font><code>::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>::after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然而，CSS工作组正在考虑明确允许</font></font><code>::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>::after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>appearance: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://lists.w3.org/Archives/Public/www-style/2016Mar/0190.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://lists.w3.org/Archives/Public/www-style/2016Mar/0190.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari和Chrome都允许在表单输入中使用伪元素。</font><font style="vertical-align: inherit;">其他浏览器则没有。</font><font style="vertical-align: inherit;">我们曾考虑删除它，但是使用计数器正在记录使用它的〜.07％的页面，这是我们最大删除阈值的20倍。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，在输入上指定伪元素将需要至少指定输入的内部结构，而我们尚未设法做到这一点（我不确定我们可以做到）。</font><font style="vertical-align: inherit;">但鲍里斯（Boris）建议，在其中一个bug线程中，允许它出现：无输入-基本上只是将它们转换为&lt;div&gt;，而不是“ kinda替换”元素。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪乐理查德</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇怪的是，它适用于某些类型的输入。</font><font style="vertical-align: inherit;">至少在Chrome中，</font></font></p>

<pre><code>&lt;input type="checkbox" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作正常，与</font></font></p>

<pre><code>&lt;input type="radio" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是这样</font></font><code>type=text</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，还有一些是行不通的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪元素（如</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅用于容器元素。</font><font style="vertical-align: inherit;">开始和在像一个单一的地方封闭元件</font></font><code>&lt;input/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等不是容器元素，因此伪构件不被支持。</font><font style="vertical-align: inherit;">将伪元素应用于容器元素之后</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您检查代码（参见图片），您就可以理解我的意思。</font><font style="vertical-align: inherit;">实际上，伪元素是在容器元素内部创建的。</font><font style="vertical-align: inherit;">在</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">情况下这是不可能的</font></font><code>&lt;img&gt;</code></p>

<p><a href="https://i.stack.imgur.com/1yUox.png" rel="noreferrer"><img src="https://i.stack.imgur.com/1yUox.png" alt="在此处输入图片说明"></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能在输入元素中放置伪元素，但可以像占位符一样放置阴影元素！</font></font></p>

<pre><code>input[type="text"] {   <font></font>
  &amp;::-webkit-input-placeholder {<font></font>
    &amp;:before {<font></font>
      // your code<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使其在其他浏览器中运行，请使用</font></font><code>:-moz-placeholder</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>::-moz-placeholder</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>:-ms-input-placeholder</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不同的选择器中使用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">无法对选择器进行分组，因为如果浏览器无法识别选择器，则会使整个语句无效。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：上面的代码仅适用于CSS预处理器（SASS，LESS ...），而无需使用预处理器：</font></font></p>

<pre><code>input[type="text"]::-webkit-input-placeholder:before { // your code }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="http://jsfiddle.net/br522ca9/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是另一种方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（假设您拥有HTML的控制权）：</font></font><code>&lt;span&gt;&lt;/span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在输入之后</font><font style="vertical-align: inherit;">添加一个空白</font><font style="vertical-align: inherit;">，然后使用</font></font><code>input.mystyle + span:after</code> </p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.field_with_errors {<font></font>
  display: inline;<font></font>
  color: red;<font></font>
}<font></font>
.field_with_errors input+span:after {<font></font>
  content: "*"<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="field_with_errors"&gt;Label:&lt;/div&gt;<font></font>
&lt;div class="field_with_errors"&gt;<font></font>
  &lt;input type="text" /&gt;&lt;span&gt;&lt;/span&gt; <font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在AngularJS中使用这种方法，因为它将</font></font><code>.ng-invalid</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动</font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单元素和表单中，而不添加到中</font></font><code>&lt;label&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐米亚蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来为必填字段创建红点。</font></font></p>

<pre><code>input[type="text"][required] {<font></font>
  background-image: radial-gradient(red 15%, transparent 16%);<font></font>
  background-size: 1em 1em;<font></font>
  background-position: top right;<font></font>
  background-repeat: no-repeat<font></font>
}<font></font>
</code></pre>

<p><a href="http://codepen.io/vkjgr/pen/Bfcae" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Codepen上查看</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h2><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在容器内渲染</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和&lt;input&gt;不能包含其他元素。</font></font></strong></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪元素只能在容器元素上定义（或者最好仅支持）。</font><font style="vertical-align: inherit;">因为它们的呈现方式</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器本身内作为子元素。</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能包含其他元素，因此不受支持。</font><font style="vertical-align: inherit;">甲</font></font><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一方面这也是一个表格元件支持它们，因为它的其他子元素的容器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您问我，如果某个浏览器</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的确</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在非容器元素上显示了这两个伪元素，那是一个错误，并且是非标准的一致性。</font><font style="vertical-align: inherit;">规范直接讨论元素的内容...</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C规格</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们仔细阅读</font></font><a href="http://www.w3.org/TR/CSS2/generate.html#before-after-content" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明书</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它实际上说，他们***入</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">含有元素：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作者使用：before和：after伪元素指定生成内容的样式和位置。</font><font style="vertical-align: inherit;">顾名思义，：before和：after伪元素指定元素的文档树内容之前和之后的内容位置。</font><font style="vertical-align: inherit;">“ content”属性与这些伪元素一起指定了要插入的内容。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到？</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素的文档树</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font></font></strong></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">据我了解，这意味着</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器内。</font></font><br>
</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Internet Explorer 7及更高版本中的任何元素上均不受支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还不打算用于替换的元素，例如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单元素</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（输入）和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图像元素</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，</font><font style="vertical-align: inherit;">使用纯CSS </font><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可能的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果使用</font></font><a href="http://jquery.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用</font></font></p>

<pre><code>$(".mystyle").after("add your smiley here");
</code></pre>

<p><a href="http://api.jquery.com/after/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.after上的API文档</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用javascript附加内容。</font><font style="vertical-align: inherit;">这将适用于所有浏览器。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
