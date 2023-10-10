---
layout: question
title:  如何在JavaScript正则表达式中访问匹配的组？
date:   2020-03-09T13:31:22.000Z
description: 我想使用正则表达式匹配字符串的一部分，然后访问带括号的子字符串：var myString = "something format_abc"; // I...
img: 
author: Stafan小哥
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用</font></font><a href="http://en.wikipedia.org/wiki/Regular_expression" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配字符串的一部分，</font><font style="vertical-align: inherit;">然后访问带括号的子字符串：</font></font></p>

<pre><code>var myString = "something format_abc"; // I want "abc"<font></font>
<font></font>
var arr = /(?:^|\s)format_(.*?)(?:\s|$)/.exec(myString);<font></font>
<font></font>
console.log(arr);     // Prints: [" format_abc", "abc"] .. so far so good.<font></font>
console.log(arr[1]);  // Prints: undefined  (???)<font></font>
console.log(arr[0]);  // Prints: format_undefined (!!!)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现上面的正则表达式代码没有任何问题：我要针对的实际字符串是：</font></font></p>

<pre><code>"date format_%A"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告“％A”未定义似乎是一个非常奇怪的行为，但与该问题没有直接关系，因此我打开了一个新的代码，</font></font><em><a href="https://stackoverflow.com/questions/432826/why-is-a-matched-substring-returning-undefined-in-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么匹配的子字符串在JavaScript中返回“未定义”？</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的参数就像一条</font></font><code>printf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句一样，并且由于我正在记录的字符串（</font></font><code>"%A"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）具有特殊值，因此它试图查找下一个参数的值。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第277篇《如何在JavaScript正则表达式中访问匹配的组？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>We can access the matched group in a regular expressions by using backslash followed by number of the matching group:</p>
</blockquote>

<pre><code>/([a-z])\1/
</code></pre>

<p><strong>In the code \1 represented matched by first group ([a-z])</strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Get all group occurrence </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let m=[], s = "something format_abc  format_def  format_ghi";<font></font>
<font></font>
s.replace(/(?:^|\s)format_(.*?)(?:\s|$)/g, (x,y)=&gt; m.push(y));<font></font>
<font></font>
console.log(m);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当您有一对括号时，一个内衬才实用：</font></font></p>

<pre><code>while ( ( match = myRegex.exec( myStr ) ) &amp;&amp; matches.push( match[1] ) ) {};
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tony小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需调用该</font></font><code>exec</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法！</font><font style="vertical-align: inherit;">您可以直接在字符串上使用“ match”方法。</font><font style="vertical-align: inherit;">只是不要忘记括号。</font></font></p>

<pre><code>var str = "This is cool";<font></font>
var matches = str.match(/(This is)( cool)$/);<font></font>
console.log( JSON.stringify(matches) ); // will print ["This is cool","This is"," cool"] or something like that...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位置0有一个包含所有结果的字符串。</font><font style="vertical-align: inherit;">位置1的第一个匹配项用括号表示，位置2的第二个匹配项用括号括起来。</font><font style="vertical-align: inherit;">嵌套括号很棘手，所以要当心！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用您的代码：</font></font></p>

<pre><code>console.log(arr[1]);  // prints: abc<font></font>
console.log(arr[0]);  // prints:  format_abc<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：Safari 3，如果有关系。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll" rel="noreferrer"><strong><code>String#matchAll</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅</font></font><a href="https://tc39.github.io/proposal-string-matchall/#sec-string-prototype-matchall" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第3阶段草案/ 2018年12月7日提案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），简化了比赛对象中所有小组的出入率（请注意，小组0是整个比赛，而其他小组则对应于模式中的捕获小组）：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>matchAll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">available可以避免</font></font><code>while</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环，</font></font><code>exec</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>/g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... </font><font style="vertical-align: inherit;">可以</font><font style="vertical-align: inherit;">通过使用来</font></font><code>matchAll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得迭代器，该迭代器可以与更方便的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" rel="noreferrer"><code>for...of</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">array spread</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><code>Array.from()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造一起使用</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法产生的输出类似于</font></font><code>Regex.Matches</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C＃，</font></font><code>re.finditer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Python，</font></font><code>preg_match_all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP的输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看JS演示（已在Google Chrome 73.0.3683.67（官方版本）中进行测试，测试版（64位））：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var myString = "key1:value1, key2-value2!!@key3=value3";<font></font>
var matches = myString.matchAll(/(\w+)[:=-](\w+)/g);<font></font>
console.log([...matches]); // All match with capturing group values</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>console.log([...matches])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节目</font></font></p>

<p><a href="https://i.stack.imgur.com/hfFbK.png" rel="noreferrer"><img src="https://i.stack.imgur.com/hfFbK.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用以下方式获取匹配值或特定的组值：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let matchData = "key1:value1, key2-value2!!@key3=value3".matchAll(/(\w+)[:=-](\w+)/g)<font></font>
var matches = [...matchData]; // Note matchAll result is not re-iterable<font></font>
<font></font>
console.log(Array.from(matches, m =&gt; m[0])); // All match (Group 0) values<font></font>
// =&gt; [ "key1:value1", "key2-value2", "key3=value3" ]<font></font>
console.log(Array.from(matches, m =&gt; m[1])); // All match (Group 1) values<font></font>
// =&gt; [ "key1", "key2", "key3" ]</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：请参阅</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#Browser_compatibility" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细信息。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案中使用的术语：</font></font></h2>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Match</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示对字符串运行RegEx模式的结果，如下所示：</font></font><code>someString.match(regexPattern)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配的模式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指示输入字符串的所有匹配部分，它们全部位于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">match</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组内。</font><font style="vertical-align: inherit;">这些都是输入字符串中模式的所有实例。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配的组</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指示在RegEx模式中定义的所有要捕获的组。</font><font style="vertical-align: inherit;">（括号内的模式，如下所示：</font></font><code>/format_(.*?)/g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中</font></font><code>(.*?)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是一个匹配的组。）它们位于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配的模式内</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述</font></font></h2>

<p>To get access to the <em>matched groups</em>, in each of the <em>matched patterns</em>, you need a function or something similar to iterate over the <em>match</em>. There are a number of ways you can do this, as many of the other answers show. Most other answers use a while loop to iterate over all <em>matched patterns</em>, but I think we all know the potential dangers with that approach. It is necessary to match against a <code>new RegExp()</code> instead of just the pattern itself, which only got mentioned in a comment. This is because the <code>.exec()</code> method behaves similar to a <em>generator function</em> – <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Description" rel="noreferrer">it stops every time there is a match</a>, but keeps its <code>.lastIndex</code> to continue from there on the next <code>.exec()</code> call.</p>

<h2>Code examples</h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是一个函数示例，该函数</font></font><code>searchString</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配模式的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中每个</font></font><code>match</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">，其中</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含所有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配的组</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我没有使用while循环，而是提供了使用</font></font><code>Array.prototype.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数以及更</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高效的</font><font style="vertical-align: inherit;">方法的</font><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">-使用纯</font><font style="vertical-align: inherit;">循环。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简洁的版本（更少的代码，更多的语法糖）</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于它们基本上实现了</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop而不是更快的</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop </font><font style="vertical-align: inherit;">，因此</font><font style="vertical-align: inherit;">它们的性能较低</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>// Concise ES6/ES2015 syntax<font></font>
const searchString = <font></font>
    (string, pattern) =&gt; <font></font>
        string<font></font>
        .match(new RegExp(pattern.source, pattern.flags))<font></font>
        .map(match =&gt; <font></font>
            new RegExp(pattern.source, pattern.flags)<font></font>
            .exec(match));<font></font>
<font></font>
// Or if you will, with ES5 syntax<font></font>
function searchString(string, pattern) {<font></font>
    return string<font></font>
        .match(new RegExp(pattern.source, pattern.flags))<font></font>
        .map(match =&gt;<font></font>
            new RegExp(pattern.source, pattern.flags)<font></font>
            .exec(match));<font></font>
}<font></font>
<font></font>
let string = "something format_abc",<font></font>
    pattern = /(?:^|\s)format_(.*?)(?:\s|$)/;<font></font>
<font></font>
let result = searchString(string, pattern);<font></font>
// [[" format_abc", "abc"], null]<font></font>
// The trailing `null` disappears if you add the `global` flag<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能版本（更多代码，更少语法糖）</font></font></h3>

<pre class="lang-js prettyprint-override"><code>// Performant ES6/ES2015 syntax<font></font>
const searchString = (string, pattern) =&gt; {<font></font>
    let result = [];<font></font>
<font></font>
    const matches = string.match(new RegExp(pattern.source, pattern.flags));<font></font>
<font></font>
    for (let i = 0; i &lt; matches.length; i++) {<font></font>
        result.push(new RegExp(pattern.source, pattern.flags).exec(matches[i]));<font></font>
    }<font></font>
<font></font>
    return result;<font></font>
};<font></font>
<font></font>
// Same thing, but with ES5 syntax<font></font>
function searchString(string, pattern) {<font></font>
    var result = [];<font></font>
<font></font>
    var matches = string.match(new RegExp(pattern.source, pattern.flags));<font></font>
<font></font>
    for (var i = 0; i &lt; matches.length; i++) {<font></font>
        result.push(new RegExp(pattern.source, pattern.flags).exec(matches[i]));<font></font>
    }<font></font>
<font></font>
    return result;<font></font>
}<font></font>
<font></font>
let string = "something format_abc",<font></font>
    pattern = /(?:^|\s)format_(.*?)(?:\s|$)/;<font></font>
<font></font>
let result = searchString(string, pattern);<font></font>
// [[" format_abc", "abc"], null]<font></font>
// The trailing `null` disappears if you add the `global` flag<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有将这些替代方案与其他答案中先前提到的替代方案进行比较，但是我怀疑这种方法与其他方法相比，其性能和故障安全性更低。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var myString = "something format_abc";<font></font>
var arr = myString.match(/\bformat_(.*?)\b/);<font></font>
console.log(arr[0] + " " + arr[1]);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><code>\b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是一回事。</font><font style="vertical-align: inherit;">（它适用于</font></font><code>--format_foo/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但不适用</font></font><code>format_a_b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但我想展示一种替代您的表情的方法，这很好。</font><font style="vertical-align: inherit;">当然，</font></font><code>match</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通话是重要的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
