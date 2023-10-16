---
layout: question
title:  查找项目是否在JavaScript数组中的最佳方法？\[重复\]
date:   2020-03-11T02:30:24.000Z
description:                                                                          ...
img: 
author: JinJin樱
category: question
answer: 5
tags: JavaScript
topic: JavaScript
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
                            <a href="/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查数组是否在JavaScript中包含值？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （50个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2017-01-06 21：04：51Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找对象是否在数组中的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我知道的最好方法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function include(arr, obj) {<font></font>
  for (var i = 0; i &lt; arr.length; i++) {<font></font>
    if (arr[i] == obj) return true;<font></font>
  }<font></font>
}<font></font>
<font></font>
console.log(include([1, 2, 3, 4], 3)); // true<font></font>
console.log(include([1, 2, 3, 4], 6)); // undefined</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第547篇《查找项目是否在JavaScript数组中的最佳方法？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AMandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是为您提供的一些元知识-如果您想知道可以使用Array做什么，请查看文档-这是Mozilla的Array页面</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Global_Objects/Array</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那里，您将看到对Javascript 1.6中添加的indexOf的引用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry蛋蛋Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果数组未排序，则实际上没有更好的方法（除了使用上述indexOf之外，我认为这是同一件事）。</font><font style="vertical-align: inherit;">如果数组已排序，则可以执行二进制搜索，其工作方式如下：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择数组的中间元素。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要查找的元素是否大于您选择的元素？</font><font style="vertical-align: inherit;">如果是这样，您就消除了阵列的下半部分。</font><font style="vertical-align: inherit;">如果不是，那么您已经淘汰了上半部分。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选取阵列其余一半的中间元素，然后按照步骤2继续操作，消除剩余阵列的一半。</font><font style="vertical-align: inherit;">最终，您将找到您的元素或没有数组可以浏览。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二进制搜索在时间上与数组长度的对数成正比，因此它比查看每个单个元素要快得多。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于您的目的。</font><font style="vertical-align: inherit;">如果您为Web编程，请避免使用</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Internet Explorer 6不支持它（很多仍在使用中！），或有条件使用：</font></font></p>

<pre><code>if (yourArray.indexOf !== undefined) result = yourArray.indexOf(target);<font></font>
else result = customSlowerSearch(yourArray, target);<font></font>
</code></pre>

<p><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是用本机代码编码的，因此它比您在JavaScript中可以做的任何事情都要快（如果合适的话，二进制搜索/二分法除外）。</font><font style="vertical-align: inherit;">注意：这是一个品味问题，但是我会</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在例程结束时</font><font style="vertical-align: inherit;">执行一个操作</font><font style="vertical-align: inherit;">，以返回真正的布尔值...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery： </font></font></p>

<pre><code>$.inArray(5 + 5, [ "8", "9", "10", 10 + "" ]);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息：</font><a href="http://api.jquery.com/jQuery.inArray/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://api.jquery.com/jQuery.inArray/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//api.jquery.com/jQuery.inArray/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC60211911</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ECMAScript 2016开始，您可以使用 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="noreferrer"><code>includes()</code></a></p>

<pre><code>arr.includes(obj);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要支持IE或其他较旧的浏览器：</font></font></p>

<pre><code>function include(arr,obj) {<font></font>
    return (arr.indexOf(obj) != -1);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这将无法在IE6、7或8上运行。</font><font style="vertical-align: inherit;">最好的解决方法是自行定义它（如果不存在）：</font></font></p>

<ol>
<li><p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（ECMA-262）版本：</font></font></p>

<pre><code>  if (!Array.prototype.indexOf)<font></font>
  {<font></font>
<font></font>
       Array.prototype.indexOf = function(searchElement /*, fromIndex */)<font></font>
<font></font>
    {<font></font>
<font></font>
<font></font>
    "use strict";<font></font>
<font></font>
    if (this === void 0 || this === null)<font></font>
      throw new TypeError();<font></font>
<font></font>
    var t = Object(this);<font></font>
    var len = t.length &gt;&gt;&gt; 0;<font></font>
    if (len === 0)<font></font>
      return -1;<font></font>
<font></font>
    var n = 0;<font></font>
    if (arguments.length &gt; 0)<font></font>
    {<font></font>
      n = Number(arguments[1]);<font></font>
      if (n !== n)<font></font>
        n = 0;<font></font>
      else if (n !== 0 &amp;&amp; n !== (1 / 0) &amp;&amp; n !== -(1 / 0))<font></font>
        n = (n &gt; 0 || -1) * Math.floor(Math.abs(n));<font></font>
    }<font></font>
<font></font>
    if (n &gt;= len)<font></font>
      return -1;<font></font>
<font></font>
    var k = n &gt;= 0<font></font>
          ? n<font></font>
          : Math.max(len - Math.abs(n), 0);<font></font>
<font></font>
    for (; k &lt; len; k++)<font></font>
    {<font></font>
      if (k in t &amp;&amp; t[k] === searchElement)<font></font>
        return k;<font></font>
    }<font></font>
    return -1;<font></font>
  };<font></font>
<font></font>
}<font></font>
</code></pre></li>
<li><p><a href="https://stackoverflow.com/questions/143847/best-way-to-find-an-item-in-a-javascript-array#144172"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Daniel James</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的版本：</font></font></p>

<pre><code>if (!Array.prototype.indexOf) {<font></font>
  Array.prototype.indexOf = function (obj, fromIndex) {<font></font>
    if (fromIndex == null) {<font></font>
        fromIndex = 0;<font></font>
    } else if (fromIndex &lt; 0) {<font></font>
        fromIndex = Math.max(0, this.length + fromIndex);<font></font>
    }<font></font>
    for (var i = fromIndex, j = this.length; i &lt; j; i++) {<font></font>
        if (this[i] === obj)<font></font>
            return i;<font></font>
    }<font></font>
    return -1;<font></font>
  };<font></font>
}<font></font>
</code></pre></li>
<li><p><a href="https://stackoverflow.com/questions/143847/best-way-to-find-an-item-in-a-javascript-array#144664"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公鸡酸</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的版本：</font></font></p>

<pre><code>Array.prototype.hasObject = (<font></font>
  !Array.indexOf ? function (o)<font></font>
  {<font></font>
    var l = this.length + 1;<font></font>
    while (l -= 1)<font></font>
    {<font></font>
        if (this[l - 1] === o)<font></font>
        {<font></font>
            return true;<font></font>
        }<font></font>
    }<font></font>
    return false;<font></font>
  } : function (o)<font></font>
  {<font></font>
    return (this.indexOf(o) !== -1);<font></font>
  }<font></font>
);<font></font>
</code></pre></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
