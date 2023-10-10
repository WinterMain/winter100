---
layout: question
title:  在JavaScript中创建多行字符串
date:   2020-03-09T09:20:24.000Z
description: 我在Ruby中有以下代码。我想将此代码转换为JavaScript。JS中的等效代码是什么？text = <<"HERE"ThisIsAMult...
img: 
author: 凯飞云西里
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Ruby中有以下代码。</font><font style="vertical-align: inherit;">我想将此代码转换为JavaScript。</font><font style="vertical-align: inherit;">JS中的等效代码是什么？</font></font></p>

<pre><code>text = &lt;&lt;"HERE"<font></font>
This<font></font>
Is<font></font>
A<font></font>
Multiline<font></font>
String<font></font>
HERE<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第179篇《在JavaScript中创建多行字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用串联运算符“ +”。</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;meta charset="UTF-8"&gt;<font></font>
    &lt;title&gt;Document&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;p id="demo"&gt;&lt;/p&gt;<font></font>
    &lt;script&gt;<font></font>
        var str = "This "<font></font>
                + "\n&lt;br&gt;is "<font></font>
                + "\n&lt;br&gt;multiline "<font></font>
                + "\n&lt;br&gt;string.";<font></font>
        document.getElementById("demo").innerHTML = str;<font></font>
     &lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的源代码，您将看起来像-</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个 </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 &lt;br&gt;是</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 &lt;br&gt;多行</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 &lt;br&gt;字符串。</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器，输出看起来像-</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
是</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
多行</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
串。</font></font><font></font>
</pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了对互联网的热爱，请使用字符串串联，并选择不为此使用ES6解决方案。</font><font style="vertical-align: inherit;">ES6并非全面支持，就像CSS3一样，某些浏览器适应CSS3的速度很慢。</font><font style="vertical-align: inherit;">使用普通的JavaScript，您的最终用户将感谢您。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p><code>var str = "This world is neither flat nor round. "+
           "Once was lost will be found";</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，当在每行末尾使用正斜杠将字符串扩展到多行时，正斜杠后的任何多余字符（通常是空格，制表符和错误添加的注释）都会导致意外的字符错误，我花了一个小时才找到出</font></font></p>

<pre><code>var string = "line1\  // comment, space or tabs here raise error<font></font>
line2";<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6允许您使用反引号在多行上指定字符串。</font><font style="vertical-align: inherit;">它称为模板文字。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>var multilineString = `One line of text<font></font>
    second line of text<font></font>
    third line of text<font></font>
    fourth line of text`;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用反引号可在NodeJS中使用，Chrome，Firefox，Edge，Safari和Opera支持该反引号。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6的实现方式是使用模板文字：</font></font></p>

<pre><code>const str = `This <font></font>
<font></font>
is <font></font>
<font></font>
a<font></font>
<font></font>
multiline text`; <font></font>
<font></font>
console.log(str);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" rel="noreferrer"><font style="vertical-align: inherit;">在这里</font></a><font style="vertical-align: inherit;">更多参考</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript中的等效项是：</font></font></p>

<pre><code>var text = `<font></font>
This<font></font>
Is<font></font>
A<font></font>
Multiline<font></font>
String<font></font>
`;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请参阅此</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">底部的浏览器支持</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这里也有一些</font></font><a href="https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en#multiline-strings"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您愿意使用转义的换行符，可以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好地</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用它们</font><font style="vertical-align: inherit;">。  </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它看起来像带有页面边框的文档</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><img src="https://i.stack.imgur.com/e51kg.png" alt="在此处输入图片说明"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对</font></font><a href="https://stackoverflow.com/a/15558082/80404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/15558082/80404的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它期望以</font></font><code>/*! any multiline comment */</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号</font><font style="vertical-align: inherit;">形式的注释</font><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">用于防止缩小（至少对于YUI压缩机而言）</font></font></p>

<pre><code>Function.prototype.extractComment = function() {<font></font>
    var startComment = "/*!";<font></font>
    var endComment = "*/";<font></font>
    var str = this.toString();<font></font>
<font></font>
    var start = str.indexOf(startComment);<font></font>
    var end = str.lastIndexOf(endComment);<font></font>
<font></font>
    return str.slice(start + startComment.length, -(str.length - end));<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var tmpl = function() { /*!<font></font>
 &lt;div class="navbar-collapse collapse"&gt;<font></font>
    &lt;ul class="nav navbar-nav"&gt;<font></font>
    &lt;/ul&gt;<font></font>
 &lt;/div&gt;<font></font>
*/}.extractComment();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总结一下，我已经尝试了用户javascript编程（Opera 11.01）中列出的2种方法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个没有用：</font></font><a href="https://stackoverflow.com/questions/805107/multiline-strings-in-javascript/805111#805111"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用JavaScript创建多行字符串</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这工作得很好，我还想出了如何在Notepad ++源代码视图中使其看起来更好：</font></font><a href="https://stackoverflow.com/questions/805107/multiline-strings-in-javascript/5571069#5571069"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中创建多行字符串</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我为Opera用户JS用户推荐了一种工作方法。</font><font style="vertical-align: inherit;">与作者所说的不同：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不适用于Firefox或Opera；</font><font style="vertical-align: inherit;">仅适用于IE，Chrome和Safari。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它确实在Opera 11中起作用。至少在用户JS脚本中。</font><font style="vertical-align: inherit;">太糟糕了，我无法对单个答案发表评论或对答案进行投票，我会立即这样做。</font><font style="vertical-align: inherit;">如果可能的话，请具有较高特权的人替我做。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想出了多行字符串的这种非常笨拙的操纵方法。</font><font style="vertical-align: inherit;">由于将函数转换为字符串还会返回该函数内部的所有注释，因此您可以使用多行注释/ ** /将注释用作字符串。</font><font style="vertical-align: inherit;">您只需要修剪两端就可以了。</font></font></p>

<pre><code>var myString = function(){/*<font></font>
    This is some<font></font>
    awesome multi-lined<font></font>
    string using a comment <font></font>
    inside a function <font></font>
    returned as a string.<font></font>
    Enjoy the jimmy rigged code.<font></font>
*/}.toString().slice(14,-3)<font></font>
<font></font>
alert(myString)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在纯JavaScript中使用多行字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法基于功能的序列化，该序列化被</font></font><a href="http://es5.github.io/#x15.3.4.2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义为与实现相关</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它确实可以在大多数浏览器中运行（请参阅下文），但不能保证它将来仍会运行，因此请不要依赖它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下功能：</font></font></p>

<pre><code>function hereDoc(f) {<font></font>
  return f.toString().<font></font>
      replace(/^[^\/]+\/\*!?/, '').<font></font>
      replace(/\*\/[^\/]+$/, '');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以拥有以下文档：</font></font></p>

<pre><code>var tennysonQuote = hereDoc(function() {/*!<font></font>
  Theirs not to make reply,<font></font>
  Theirs not to reason why,<font></font>
  Theirs but to do and die<font></font>
*/});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该方法已在以下浏览器中成功测试（未提及=未测试）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE 4-10</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 9.50-12（不在9-中）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari 4-6（不在3中）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">镀铬1-45</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString#Notes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">17-21</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString#Notes" rel="noreferrer"><font style="vertical-align: inherit;">不在16-中</font></a><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rekonq 0.7.0-0.8.0</font></font></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Konqueror 4.7.4不支持</font></font></em></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，请小心您的缩小器。</font><font style="vertical-align: inherit;">它倾向于删除评论。</font><font style="vertical-align: inherit;">对于</font></font><a href="http://www.julienlecomte.net/yuicompressor/README" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI压缩器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>/*!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将保留</font><font style="vertical-align: inherit;">以</font><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">开头）开头的注释</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案是使用</font></font><a href="http://coffeescript.org/#strings" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CoffeeScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6更新：您可以使用反引号代替使用注释创建函数并在注释上运行toString。</font><font style="vertical-align: inherit;">正则表达式将需要更新为仅删除空格。</font><font style="vertical-align: inherit;">您也可以使用字符串原型方法来执行此操作：</font></font></p>

<pre><code>let foo = `<font></font>
  bar loves cake<font></font>
  baz loves beer<font></font>
  beer loves people<font></font>
`.removeIndentation()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那会很酷。</font><font style="vertical-align: inherit;">有人应该写这个.removeIndentation字符串方法...;）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
