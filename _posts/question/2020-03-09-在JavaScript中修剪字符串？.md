---
layout: question
title:  在JavaScript中修剪字符串？
date:   2020-03-09T13:42:05.000Z
description: 如何修剪JavaScript中的字符串？...
img: 
author: 神无乐
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何修剪JavaScript中的字符串？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第285篇《在JavaScript中修剪字符串？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于IE9 +和其他浏览器</font></font></p>

<pre><code>function trim(text) {<font></font>
    return (text == null) ? '' : ''.trim.call(text);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的程序使用单个正则表达式查找需要修整的情况，并使用该正则表达式的结果来确定所需的子字符串范围：</font></font></p>

<pre><code>var illmatch= /^(\s*)(?:.*?)(\s*)$/<font></font>
function strip(me){<font></font>
    var match= illmatch.exec(me)<font></font>
    if(match &amp;&amp; (match[1].length || match[2].length)){<font></font>
        me= me.substring(match[1].length, p.length-match[2].length)<font></font>
    }<font></font>
    return me<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个设计决定是使用子字符串执行最终捕获。</font><font style="vertical-align: inherit;">s / \？：//（捕获中间项），并且替换片段变为：</font></font></p>

<pre><code>    if(match &amp;&amp; (match[1].length || match[3].length)){<font></font>
        me= match[2]<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这些展示次数中，我做了两个性能方面的押注：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子字符串实现会复制原始字符串的数据吗？</font><font style="vertical-align: inherit;">如果是这样，首先，当需要修剪字符串时，会进行两次遍历，首先是正则表达式（可能希望是部分遍历），然后是子字符串提取。</font><font style="vertical-align: inherit;">希望子字符串实现仅引用原始字符串，因此子字符串之类的操作几乎是免费的。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">交叉手指</font></font></em></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式中的捕获效果有多好？</font><font style="vertical-align: inherit;">中间值，即输出值，可能会很长。</font><font style="vertical-align: inherit;">我还没有准备好所有正则表达式的捕获都不会阻止数百KB输入捕获，但是我也没有进行测试（太多的运行时，对不起！）。</font><font style="vertical-align: inherit;">第二个总是进行捕获；</font><font style="vertical-align: inherit;">如果您的引擎可以做到这一点而不会受到打击，则可以使用上述一些字符串编排技术来确保使用它！</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当.trim（）函数在2008年以JS方式不可用时，我已经编写了此函数进行修整。一些较旧的浏览器仍然不支持.trim（）函数，我希望该函数可以对某人有所帮助。</font></font></p>

<p><em><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修剪功能</font></font></strong></em></p>

<pre><code>function trim(str)<font></font>
{<font></font>
    var startpatt = /^\s/;<font></font>
    var endpatt = /\s$/;<font></font>
<font></font>
    while(str.search(startpatt) == 0)<font></font>
        str = str.substring(1, str.length);<font></font>
<font></font>
    while(str.search(endpatt) == str.length-1)<font></font>
        str = str.substring(0, str.length-1);   <font></font>
<font></font>
    return str;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：函数trim（）接受一个字符串对象，并删除所有开头和结尾的空格（空格，制表符和换行符）并返回修剪后的字符串。</font><font style="vertical-align: inherit;">您可以使用此功能修剪表格输入，以确保发送有效数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，可以以下方式调用该函数。</font></font></p>

<pre><code>form.elements[i].value = trim(form.elements[i].value);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小次郎</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在TypeScript中：</font></font></p>

<pre><code>var trim: (input: string) =&gt; string = String.prototype.trim<font></font>
    ? ((input: string) : string =&gt; {<font></font>
        return (input || "").trim();<font></font>
    })<font></font>
    : ((input: string) : string =&gt; {<font></font>
        return (input || "").replace(/^\s+|\s+$/g,"");<font></font>
    })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果本地原型不可用，它将退回到正则表达式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道什么错误可以隐藏在这里，但是我用这个：</font></font></p>

<pre><code>var some_string_with_extra_spaces="   goes here    "<font></font>
console.log(some_string_with_extra_spaces.match(/\S.*\S|\S/)[0])<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果文本包含输入：</font></font></p>

<pre><code>console.log(some_string_with_extra_spaces.match(/\S[\s\S]*\S|\S/)[0])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种尝试：</font></font></p>

<pre><code>console.log(some_string_with_extra_spaces.match(/^\s*(.*?)\s*$/)[1])
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>if(!String.prototype.trim){  <font></font>
  String.prototype.trim = function(){  <font></font>
    return this.replace(/^\s+|\s+$/gm,'');  <font></font>
  };  <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与之前的答案不同，添加标志有所不同</font></font><code>m</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font></font><code>m</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将搜索几个线性的文本。</font><font style="vertical-align: inherit;">在此模式下，模式的开始和结束标记（</font></font><code>^</code> <code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）插入在换行符（</font></font><code>\n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">之前和之后</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用trim的库。</font><font style="vertical-align: inherit;">因此通过使用以下代码解决了它。</font></font></p>

<pre><code>String.prototype.trim = String.prototype.trim || function(){ return jQuery.trim(this); };
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个非常简单的方法：</font></font></p>

<pre><code>function removeSpaces(string){<font></font>
return string.split(' ').join('');<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用简单的代码</font></font></p>

<pre><code>var str = "       Hello World!        ";<font></font>
alert(str.trim());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></p>

<pre><code>Feature         Chrome  Firefox Internet Explorer   Opera   Safari  Edge<font></font>
Basic support   (Yes)   3.5     9                   10.5    5       ?<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于旧的浏览器，添加原型</font></font></p>

<pre><code>if (!String.prototype.trim) {<font></font>
  String.prototype.trim = function () {<font></font>
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');<font></font>
  };<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">本地</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是最简单的方法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const fullName = "       Alireza Dezfoolian     ";<font></font>
const trimmedFullName = fullName.trim();<font></font>
<font></font>
console.log(trimmedFullName);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小小蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>String.prototype.trim = String.prototype.trim || function () {<font></font>
    return this.replace(/^\s+|\s+$/g, "");<font></font>
};<font></font>
<font></font>
String.prototype.trimLeft = String.prototype.trimLeft || function () {<font></font>
    return this.replace(/^\s+/, "");<font></font>
};<font></font>
<font></font>
String.prototype.trimRight = String.prototype.trimRight || function () {<font></font>
    return this.replace(/\s+$/, "");<font></font>
};<font></font>
<font></font>
String.prototype.trimFull = String.prototype.trimFull || function () {<font></font>
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ");<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://github.com/duereg/SwimTraining/blob/master/lib/app/swim/string.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Matt Duereg</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无耻地偷走了</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以使用</font><font style="vertical-align: inherit;">本机Javascript实现的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">string.trim（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font></p>

<pre><code>var orig = "   foo  ";<font></font>
console.log(orig.trim());//foo<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以看看 </font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft?redirectlocale=en-US&amp;redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FString%2FTrimLeft" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">trimLeft（）</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight?redirectlocale=en-US&amp;redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FString%2FTrimRight" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">trimRight（）</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是jQuery，请使用</font></font><code>jQuery.trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>if( jQuery.trim(StringVariable) == '')
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公然的Badassery</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有11种不同的带有基准信息的</font><em><font style="vertical-align: inherit;">修饰</font></em><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="http://blog.stevenlevithan.com/archives/faster-trim-javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.stevenlevithan.com/archives/faster-trim-javascript</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">毫无疑问，基于正则表达式的速度比传统循环慢。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我个人的。</font><font style="vertical-align: inherit;">该代码很旧！</font><font style="vertical-align: inherit;">我是为JavaScript1.1和Netscape 3编写的，此后仅作了少许更新。</font><font style="vertical-align: inherit;">（原始使用的String.charAt）</font></font></p>

<pre><code>/**<font></font>
 *  Trim string. Actually trims all control characters.<font></font>
 *  Ignores fancy Unicode spaces. Forces to string.<font></font>
 */<font></font>
function trim(str) {<font></font>
    str = str.toString();<font></font>
    var begin = 0;<font></font>
    var end = str.length - 1;<font></font>
    while (begin &lt;= end &amp;&amp; str.charCodeAt(begin) &lt; 33) { ++begin; }<font></font>
    while (end &gt; begin &amp;&amp; str.charCodeAt(end) &lt; 33) { --end; }<font></font>
    return str.substr(begin, end - begin + 1);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题已经三年前问过了，现在</font></font><code>String.trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在JavaScript </font><font style="vertical-align: inherit;">中原生</font><font style="vertical-align: inherit;">添加的。例如，您可以直接进行如下修剪，</font></font></p>

<pre><code>document.getElementById("id").value.trim();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的简单版本</font></font><a href="http://www.whadiz.com/what-is.aspx/programming/javascript/javascript-trim" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript修剪的一般功能是什么？</font></font></a></p>

<pre><code>function trim(str) {<font></font>
        return str.replace(/^\s+|\s+$/g,"");<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管上面有很多正确答案，但是应该注意，</font></font><code>String</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript </font><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">对象</font></font><code>.trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始具有本机</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，理想情况下，对trim方法进行原型设计的任何尝试均应真正检查其是否已经存在。</font></font></p>

<pre><code>if(!String.prototype.trim){  <font></font>
  String.prototype.trim = function(){  <font></font>
    return this.replace(/^\s+|\s+$/g,'');  <font></font>
  };  <font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原生添加：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
JavaScript 1.8.1 / ECMAScript 5</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此受以下支持：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.5+</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5岁以上</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE9 +</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（仅在标准模式下！）</font></font><a href="http://blogs.msdn.com/b/ie/archive/2010/06/25/enhanced-scripting-in-ie9-ecmascript-5-support-and-more.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blogs.msdn.com/b/ie/archive/2010/06/25/enhanced-scripting-in-ie9-ecmascript-5-support-and-more .aspx</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5+</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">歌剧：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">10.5+</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5支持表：</font><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//kangax.github.com/es5-compat-table/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><a href="http://blog.stevenlevithan.com/archives/faster-trim-javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很多</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用</font><a href="http://blog.stevenlevithan.com/archives/faster-trim-javascript" rel="noreferrer"><font style="vertical-align: inherit;">的实现</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">最明显的似乎是这样的：</font></font></p>

<pre><code>String.prototype.trim = function() {<font></font>
    return this.replace(/^\s+|\s+$/g, "");<font></font>
};<font></font>
<font></font>
" foo bar ".trim();  // "foo bar"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自IE9 +起，所有浏览器都具有</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim" rel="noreferrer"><code>trim()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于不支持的浏览器</font></font><code>trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下polyfill </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>if (!String.prototype.trim) {<font></font>
    (function() {<font></font>
        // Make sure we trim BOM and NBSP<font></font>
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;<font></font>
        String.prototype.trim = function() {<font></font>
            return this.replace(rtrim, '');<font></font>
        };<font></font>
    })();<font></font>
}<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，如果使用</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>$.trim(str)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">并且可以处理undefined / null。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这个：</font></font></p>

<pre><code>String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};<font></font>
<font></font>
String.prototype.ltrim=function(){return this.replace(/^\s+/,'');};<font></font>
<font></font>
String.prototype.rtrim=function(){return this.replace(/\s+$/,'');};<font></font>
<font></font>
String.prototype.fulltrim=function(){return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');};<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
