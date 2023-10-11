---
layout: question
title:  如何将JavaScript数组信息导出到csv（在客户端）？
date:   2020-03-12T10:32:30.000Z
description: 我知道有很多这种性质的问题，但是我需要使用JavaScript来完成。我正在使用Dojo 1.8并将所有属性信息都放在数组中，如下所示：\[\["name...
img: 
author: Stafan逆天
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道有很多这种性质的问题，但是我需要使用JavaScript来完成。</font><font style="vertical-align: inherit;">我正在使用</font></font><code>Dojo 1.8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将所有属性信息都放在数组中，如下所示：</font></font></p>

<pre><code>[["name1", "city_name1", ...]["name2", "city_name2", ...]]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道如何将其导出到</font></font><code>CSV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1284篇《如何将JavaScript数组信息导出到csv（在客户端）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I would recommend using a library like PapaParse:
<a href="https://github.com/mholt/PapaParse" rel="nofollow noreferrer">https://github.com/mholt/PapaParse</a></p>

<p>The accepted answer currently has multiple issues including:</p>

<ul>
<li>it fails if the data contains a comma</li>
<li>it fails if the data contains a linebreak</li>
<li>it (kind of) fails if the data contains a quotation mark</li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Sam小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有很多将数据转换为CSV的自带解决方案，但是几乎所有这些解决方案在正确格式化数据类型方面都会有各种警告，而不会引起Excel或类似问题。 </font></font></p>

<p>Why not use something proven: <a href="http://papaparse.com/docs#json-to-csv" rel="noreferrer">Papa Parse</a></p>

<pre><code>Papa.unparse(data[, config])
</code></pre>

<p>Then just combine this with one of the local download solutions here eg. the one by @ArneHB looks good.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用下面的代码使用Javascript将数组导出到CSV文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也处理特殊字符部分</font></font></p>

<pre><code>var arrayContent = [["Séjour 1, é,í,ú,ü,ű"],["Séjour 2, é,í,ú,ü,ű"]];<font></font>
var csvContent = arrayContent.join("\n");<font></font>
var link = window.document.createElement("a");<font></font>
link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent));<font></font>
link.setAttribute("download", "upload_data.csv");<font></font>
link.click(); <font></font>
</code></pre>

<p><a href="https://jsfiddle.net/vigneshvdm/02f6d4cL/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是工作jsfiddle的链接</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Default的解决方案在Chrome上运行完美（非常感谢！），但是IE出现问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个解决方案（适用于IE10）：</font></font></p>

<pre><code>var csvContent=data; //here we load our csv data <font></font>
var blob = new Blob([csvContent],{<font></font>
    type: "text/csv;charset=utf-8;"<font></font>
});<font></font>
<font></font>
navigator.msSaveBlob(blob, "filename.csv")<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用本机JavaScript执行此操作。</font><font style="vertical-align: inherit;">您必须这样将数据解析为正确的CSV格式（假设您正在使用问题中所描述的数组数组）：</font></font></p>

<pre><code>const rows = [<font></font>
    ["name1", "city1", "some other info"],<font></font>
    ["name2", "city2", "more info"]<font></font>
];<font></font>
<font></font>
let csvContent = "data:text/csv;charset=utf-8,";<font></font>
<font></font>
rows.forEach(function(rowArray) {<font></font>
    let row = rowArray.join(",");<font></font>
    csvContent += row + "\r\n";<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更短的方法（使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>const rows = [<font></font>
    ["name1", "city1", "some other info"],<font></font>
    ["name2", "city2", "more info"]<font></font>
];<font></font>
<font></font>
let csvContent = "data:text/csv;charset=utf-8," <font></font>
    + rows.map(e =&gt; e.join(",")).join("\n");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以使用JavaScript </font></font><code>window.open</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>encodeURI</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数下载CSV文件，如下所示：</font></font></p>

<pre><code>var encodedUri = encodeURI(csvContent);<font></font>
window.open(encodedUri);<font></font>
</code></pre>

<p></p><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要给文件指定一个特定的名称，则必须做一些不同的事情，因为不支持使用</font></font><code>window.open</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">访问数据URI </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了实现这一点，您可以创建一个隐藏的</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM节点并按</font></font><code>download</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示</font><font style="vertical-align: inherit;">设置其</font><font style="vertical-align: inherit;">属性：</font></font><p></p>

<pre><code>var encodedUri = encodeURI(csvContent);<font></font>
var link = document.createElement("a");<font></font>
link.setAttribute("href", encodedUri);<font></font>
link.setAttribute("download", "my_data.csv");<font></font>
document.body.appendChild(link); // Required for FF<font></font>
<font></font>
link.click(); // This will download the data file named "my_data.csv".<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
