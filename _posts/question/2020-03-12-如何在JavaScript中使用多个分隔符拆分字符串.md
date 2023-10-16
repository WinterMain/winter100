---
layout: question
title:  如何在JavaScript中使用多个分隔符拆分字符串？
date:   2020-03-12T10:34:11.000Z
description: 如何在JavaScript中使用多个分隔符拆分字符串？我正在尝试在逗号和空格上进行拆分，但是AFAIK，JS的拆分功能仅支持一个分隔符。...
img: 
author: 神乐小哥Near
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中使用多个分隔符拆分字符串？</font><font style="vertical-align: inherit;">我正在尝试在逗号和空格上进行拆分，但是AFAIK，JS的拆分功能仅支持一个分隔符。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1288篇《如何在JavaScript中使用多个分隔符拆分字符串？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将提供此类功能的经典实现。</font><font style="vertical-align: inherit;">该代码几乎可以在所有JavaScript版本中使用，并且在某种程度上是最佳的。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不使用正则表达式，很难维护</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有使用JavaScript的新功能</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不使用多个.split（）.join（）调用，而这需要更多的计算机内存</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是纯代码：</font></font></p>

<pre><code>var text = "Create a function, that will return an array (of string), with the words inside the text";<font></font>
<font></font>
println(getWords(text));<font></font>
<font></font>
function getWords(text)<font></font>
{<font></font>
    let startWord = -1;<font></font>
    let ar = [];<font></font>
<font></font>
    for(let i = 0; i &lt;= text.length; i++)<font></font>
    {<font></font>
        let c = i &lt; text.length ? text[i] : " ";<font></font>
<font></font>
        if (!isSeparator(c) &amp;&amp; startWord &lt; 0)<font></font>
        {<font></font>
            startWord = i;<font></font>
        }<font></font>
<font></font>
        if (isSeparator(c) &amp;&amp; startWord &gt;= 0)<font></font>
        {<font></font>
            let word = text.substring(startWord, i);<font></font>
            ar.push(word);<font></font>
<font></font>
            startWord = -1;<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return ar;<font></font>
}<font></font>
<font></font>
function isSeparator(c)<font></font>
{<font></font>
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];<font></font>
    return separators.includes(c);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以看到在操场上运行的代码：</font><a href="https://codeguppy.com/code.html?IJI0E4OGnkyTZnoszAzf" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://codeguppy.com/code.html?IJI0E4OGnkyTZnoszAzf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codeguppy.com/code.html?IJI0E4OGnkyTZnoszAzf</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种简单的方法是使用每个定界符处理字符串的每个字符并构建拆分数组：</font></font></p>
</blockquote>

<pre><code>splix = function ()<font></font>
{<font></font>
  u = [].slice.call(arguments); v = u.slice(1); u = u[0]; w = [u]; x = 0;<font></font>
<font></font>
  for (i = 0; i &lt; u.length; ++i)<font></font>
  {<font></font>
    for (j = 0; j &lt; v.length; ++j)<font></font>
    {<font></font>
      if (u.slice(i, i + v[j].length) == v[j])<font></font>
      {<font></font>
        y = w[x].split(v[j]); w[x] = y[0]; w[++x] = y[1];<font></font>
      };<font></font>
    };<font></font>
  };<font></font>
<font></font>
  return w;<font></font>
};<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.logg = function ()<font></font>
{<font></font>
  document.body.innerHTML += "&lt;br&gt;" + [].slice.call(arguments).join();<font></font>
}<font></font>
<font></font>
splix = function() {<font></font>
  u = [].slice.call(arguments);<font></font>
  v = u.slice(1);<font></font>
  u = u[0];<font></font>
  w = [u];<font></font>
  x = 0;<font></font>
  console.logg("Processing: &lt;code&gt;" + JSON.stringify(w) + "&lt;/code&gt;");<font></font>
<font></font>
  for (i = 0; i &lt; u.length; ++i) {<font></font>
    for (j = 0; j &lt; v.length; ++j) {<font></font>
      console.logg("Processing: &lt;code&gt;[\x22" + u.slice(i, i + v[j].length) + "\x22, \x22" + v[j] + "\x22]&lt;/code&gt;");<font></font>
      if (u.slice(i, i + v[j].length) == v[j]) {<font></font>
        y = w[x].split(v[j]);<font></font>
        w[x] = y[0];<font></font>
        w[++x] = y[1];<font></font>
        console.logg("Currently processed: " + JSON.stringify(w) + "\n");<font></font>
      };<font></font>
    };<font></font>
  };<font></font>
<font></font>
  console.logg("Return: &lt;code&gt;" + JSON.stringify(w) + "&lt;/code&gt;");<font></font>
};<font></font>
<font></font>
setTimeout(function() {<font></font>
  console.clear();<font></font>
  splix("1.23--4", ".", "--");<font></font>
}, 250);</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>@import url("http://fonts.googleapis.com/css?family=Roboto");<font></font>
<font></font>
body {font: 20px Roboto;}</code></pre>
</div>
</div>
<p></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法： </font></font><code>splix(string, delimiters...)</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font><code>splix("1.23--4", ".", "--")</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回值： </font></font><code>["1", "23", "4"]</code></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现我需要这样做的主要原因之一是在</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">上都拆分了文件路径</font></font><code>\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是一个棘手的正则表达式，因此我将其发布在这里以供参考：</font></font></p>

<pre><code>var splitFilePath = filePath.split(/[\/\\]/);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现相同目标的新方法</font><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function SplitByString(source, splitBy) {<font></font>
  var splitter = splitBy.split('');<font></font>
  splitter.push([source]); //Push initial value<font></font>
<font></font>
  return splitter.reduceRight(function(accumulator, curValue) {<font></font>
    var k = [];<font></font>
    accumulator.forEach(v =&gt; k = [...k, ...v.split(curValue)]);<font></font>
    return k;<font></font>
  });<font></font>
}<font></font>
<font></font>
var source = "abc,def#hijk*lmn,opq#rst*uvw,xyz";<font></font>
var splitBy = ",*#";<font></font>
console.log(SplitByString(source, splitBy));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意此功能：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不涉及正则表达式</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回拆分值，顺序与出现在其中的顺序相同 </font></font><code>source</code></strong></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上代码的结果将是：</font></font></p>

<p><a href="https://i.stack.imgur.com/FadrH.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/FadrH.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您应该执行某种字符串替换操作，以将一个分隔符转换为另一个分隔符，以便在拆分时只处理一个分隔符。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">APro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将要用作分隔符的所有字符单独或共同打包成正则表达式，然后将它们传递给split函数。</font><font style="vertical-align: inherit;">例如，您可以编写：</font></font></p>

<pre><code>console.log( "dasdnk asd, (naks) :d skldma".split(/[ \(,\)]+/) );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出将是：</font></font></p>

<pre><code>["dasdnk", "asd", "naks", ":d", "skldma"]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些想要在拆分功能中进行更多自定义的人，我编写了一个递归算法，该算法将给定的字符串与要拆分的字符列表进行拆分。</font><font style="vertical-align: inherit;">我在看到以上帖子之前写了这篇文章。</font><font style="vertical-align: inherit;">我希望它可以帮助一些沮丧的程序员。</font></font></p>

<pre><code>splitString = function(string, splitters) {<font></font>
    var list = [string];<font></font>
    for(var i=0, len=splitters.length; i&lt;len; i++) {<font></font>
        traverseList(list, splitters[i], 0);<font></font>
    }<font></font>
    return flatten(list);<font></font>
}<font></font>
<font></font>
traverseList = function(list, splitter, index) {<font></font>
    if(list[index]) {<font></font>
        if((list.constructor !== String) &amp;&amp; (list[index].constructor === String))<font></font>
            (list[index] != list[index].split(splitter)) ? list[index] = list[index].split(splitter) : null;<font></font>
        (list[index].constructor === Array) ? traverseList(list[index], splitter, 0) : null;<font></font>
        (list.constructor === Array) ? traverseList(list, splitter, index+1) : null;    <font></font>
    }<font></font>
}<font></font>
<font></font>
flatten = function(arr) {<font></font>
    return arr.reduce(function(acc, val) {<font></font>
        return acc.concat(val.constructor === Array ? flatten(val) : val);<font></font>
    },[]);<font></font>
}<font></font>
<font></font>
var stringToSplit = "people and_other/things";<font></font>
var splitList = [" ", "_", "/"];<font></font>
splitString(stringToSplit, splitList);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的示例返回： </font></font><code>["people", "and", "other", "things"]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：此</font></font><code>flatten</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能取自</font></font><a href="http://rosettacode.org/wiki/Flatten_a_list" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rosetta Code</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil樱Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将正则表达式传递给</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/String/split" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript的split运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>"1,2 3".split(/,| /) <font></font>
["1", "2", "3"]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您希望允许多个分隔符一起仅充当一个分隔符：</font></font></p>

<pre><code>"1, 2, , 3".split(/(?:,| )+/) <font></font>
["1", "2", "3"]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您必须使用非捕获（？:)括号，因为否则它会被拼接回结果中。或者您可以像Aaron一样聪明，并使用字符类。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（示例在Safari + FF中测试）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞古一A</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递正则表达式作为参数：</font></font></p>

<pre><code>js&gt; "Hello awesome, world!".split(/[\s,]+/)<font></font>
Hello,awesome,world!<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑添加：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过选择数组的长度减去1来获得最后一个元素：</font></font></p>

<pre><code>&gt;&gt;&gt; bits = "Hello awesome, world!".split(/[\s,]+/)<font></font>
["Hello", "awesome", "world!"]<font></font>
&gt;&gt;&gt; bit = bits[bits.length - 1]<font></font>
"world!"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...，如果模式不匹配：</font></font></p>

<pre><code>&gt;&gt;&gt; bits = "Hello awesome, world!".split(/foo/)<font></font>
["Hello awesome, world!"]<font></font>
&gt;&gt;&gt; bits[bits.length - 1]<font></font>
"Hello awesome, world!"<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
