---
layout: question
title:  如何使用JavaScript获得文件扩展名？
date:   2020-03-12T10:36:26.000Z
description: 看到代码： var file1 = "50.xsl";var file2 = "30.doc";getFileExtension(file1); ...
img: 
author: Itachi小哥
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到代码： </font></font></p>

<pre><code>var file1 = "50.xsl";<font></font>
var file2 = "30.doc";<font></font>
getFileExtension(file1); //returns xsl<font></font>
getFileExtension(file2); //returns doc<font></font>
<font></font>
function getFileExtension(filename) {<font></font>
    /*TODO*/<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1289篇《如何使用JavaScript获得文件扩展名？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>fetchFileExtention(fileName) {<font></font>
    return fileName.slice((fileName.lastIndexOf(".") - 1 &gt;&gt;&gt; 0) + 2);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var file = "hello.txt";<font></font>
var ext = (function(file, lio) { <font></font>
  return lio === -1 ? undefined : file.substring(lio+1); <font></font>
})(file, file.lastIndexOf("."));<font></font>
<font></font>
// hello.txt -&gt; txt<font></font>
// hello.dolly.txt -&gt; txt<font></font>
// hello -&gt; undefined<font></font>
// .hello -&gt; hello<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function func() {<font></font>
  var val = document.frm.filename.value;<font></font>
  var arr = val.split(".");<font></font>
  alert(arr[arr.length - 1]);<font></font>
  var arr1 = val.split("\\");<font></font>
  alert(arr1[arr1.length - 2]);<font></font>
  if (arr[1] == "gif" || arr[1] == "bmp" || arr[1] == "jpeg") {<font></font>
    alert("this is an image file ");<font></font>
  } else {<font></font>
    alert("this is not an image file");<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Try this:</p>

<pre><code>function getFileExtension(filename) {<font></font>
  var fileinput = document.getElementById(filename);<font></font>
  if (!fileinput)<font></font>
    return "";<font></font>
  var filename = fileinput.value;<font></font>
  if (filename.length == 0)<font></font>
    return "";<font></font>
  var dot = filename.lastIndexOf(".");<font></font>
  if (dot == -1)<font></font>
    return "";<font></font>
  var extension = filename.substr(dot, filename.length);<font></font>
  return extension;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Davaid斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// 获取文件后缀名<font></font>
function getFileExtension(file) {<font></font>
  var regexp = /\.([0-9a-z]+)(?:[\?#]|$)/i;<font></font>
  var extension = file.match(regexp);<font></font>
  return extension &amp;&amp; extension[1];<font></font>
}<font></font>
<font></font>
console.log(getFileExtension("https://www.example.com:8080/path/name/foo"));<font></font>
console.log(getFileExtension("https://www.example.com:8080/path/name/foo.BAR"));<font></font>
console.log(getFileExtension("https://www.example.com:8080/path/name/.quz/foo.bar?key=value#fragment"));<font></font>
console.log(getFileExtension("https://www.example.com:8080/path/name/.quz.bar?key=value#fragment"));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function file_get_ext(filename)<font></font>
    {<font></font>
    return typeof filename != "undefined" ? filename.substring(filename.lastIndexOf(".")+1, filename.length).toLowerCase() : false;<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码</font></font></strong></p>

<pre><code>/**<font></font>
 * Extract file extension from URL.<font></font>
 * @param {String} url<font></font>
 * @returns {String} File extension or empty string if no extension is present.<font></font>
 */<font></font>
var getFileExtension = function (url) {<font></font>
    "use strict";<font></font>
    if (url === null) {<font></font>
        return "";<font></font>
    }<font></font>
    var index = url.lastIndexOf("/");<font></font>
    if (index !== -1) {<font></font>
        url = url.substring(index + 1); // Keep path without its segments<font></font>
    }<font></font>
    index = url.indexOf("?");<font></font>
    if (index !== -1) {<font></font>
        url = url.substring(0, index); // Remove query<font></font>
    }<font></font>
    index = url.indexOf("#");<font></font>
    if (index !== -1) {<font></font>
        url = url.substring(0, index); // Remove fragment<font></font>
    }<font></font>
    index = url.lastIndexOf(".");<font></font>
    return index !== -1<font></font>
        ? url.substring(index + 1) // Only keep file extension<font></font>
        : ""; // No extension found<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font></font></strong></p>

<p>Notice that in the absence of a query, the fragment might still be present.</p>

<pre><code>"https://www.example.com:8080/segment1/segment2/page.html?foo=bar#fragment" --&gt; "html"<font></font>
"https://www.example.com:8080/segment1/segment2/page.html#fragment"         --&gt; "html"<font></font>
"https://www.example.com:8080/segment1/segment2/.htaccess?foo=bar#fragment" --&gt; "htaccess"<font></font>
"https://www.example.com:8080/segment1/segment2/page?foo=bar#fragment"      --&gt; ""<font></font>
"https://www.example.com:8080/segment1/segment2/?foo=bar#fragment"          --&gt; ""<font></font>
""                                                                          --&gt; ""<font></font>
null                                                                        --&gt; ""<font></font>
"a.b.c.d"                                                                   --&gt; "d"<font></font>
".a.b"                                                                      --&gt; "b"<font></font>
".a.b."                                                                     --&gt; ""<font></font>
"a...b"                                                                     --&gt; "b"<font></font>
"..."                                                                       --&gt; ""<font></font>
</code></pre>

<p><strong>JSLint</strong></p>

<p>0 Warnings.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function getFileExtension(filename)<font></font>
{<font></font>
  var ext = /^.+\.([^.]+)$/.exec(filename);<font></font>
  return ext == null ? "" : ext[1];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过测试 </font></font></p>

<pre><code>"a.b"     (=&gt; "b") <font></font>
"a"       (=&gt; "") <font></font>
".hidden" (=&gt; "") <font></font>
""        (=&gt; "") <font></font>
null      (=&gt; "")  <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也 </font></font></p>

<pre><code>"a.b.c.d" (=&gt; "d")<font></font>
".a.b"    (=&gt; "b")<font></font>
"a..b"    (=&gt; "b")<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>The following solution is <strong>fast</strong> and <strong>short</strong> enough to use in bulk operations and save extra bytes:</p>

<pre><code> return fname.slice((fname.lastIndexOf(".") - 1 &gt;&gt;&gt; 0) + 2);
</code></pre>

<p>Here is another one-line non-regexp universal solution:</p>

<pre><code> return fname.slice((Math.max(0, fname.lastIndexOf(".")) || Infinity) + 1);
</code></pre>

<p>Both work correctly with names having no extension (e.g. <em>myfile</em>) or starting with <code>.</code> dot (e.g. <em>.htaccess</em>):</p>

<pre><code> ""                            --&gt;   ""<font></font>
 "name"                        --&gt;   ""<font></font>
 "name.txt"                    --&gt;   "txt"<font></font>
 ".htpasswd"                   --&gt;   ""<font></font>
 "name.with.many.dots.myext"   --&gt;   "myext"<font></font>
</code></pre>

<p>If you care about the speed you may run the <a href="http://jsperf.com/extract-file-extension" rel="noreferrer"><strong>benchmark</strong></a> and check that the provided solutions are the fastest, while the short one is tremendously fast:</p>

<p><img src="https://i.stack.imgur.com/ZL8Bn.png" alt="速度比较"></p>

<p><em>How the short one works:</em></p>

<ol>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf" rel="noreferrer"><code>String.lastIndexOf</code></a> method returns the last position of the substring (i.e. <code>"."</code>) in the given string (i.e. <code>fname</code>). If the substring is not found method returns <code>-1</code>.</li>
<li>The "unacceptable" positions of dot in the filename are <code>-1</code> and <code>0</code>, which respectively refer to names with no extension (e.g. <code>"name"</code>) and to names that start with dot (e.g. <code>".htaccess"</code>).</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_%28Zero-fill_right_shift%29" rel="noreferrer">Zero-fill right shift operator</a> (<code>&gt;&gt;&gt;</code>) if used with zero affects negative numbers transforming <code>-1</code> to <code>4294967295</code> and <code>-2</code> to <code>4294967294</code>, which is useful for remaining the filename unchanged in the edge cases (sort of a trick here).</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noreferrer"><code>String.prototype.slice</code></a> extracts the part of the filename from the position that was calculated as described. If the position number is more than the length of the string method returns <code>""</code>.</li>
</ol>

<hr>

<p>If you want more clear solution which will work in the same way (plus with extra support of full path), check the following extended version. This solution will be <em>slower</em> than previous one-liners but is much easier to understand.</p>

<pre><code>function getExtension(path) {<font></font>
    var basename = path.split(/[\\/]/).pop(),  // extract file name from full path ...<font></font>
                                               // (supports `\\` and `/` separators)<font></font>
        pos = basename.lastIndexOf(".");       // get last position of `.`<font></font>
<font></font>
    if (basename === "" || pos &lt; 1)            // if file name is empty or ...<font></font>
        return "";                             //  `.` not found (-1) or comes first (0)<font></font>
<font></font>
    return basename.slice(pos + 1);            // extract extension ignoring `.`<font></font>
}<font></font>
<font></font>
console.log( getExtension("/path/to/file.ext") );<font></font>
// &gt;&gt; "ext"<font></font>
</code></pre>

<p>All three variants should work in any web browser on the client side and can be used in the server side NodeJS code as well.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
