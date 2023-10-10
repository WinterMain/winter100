---
layout: question
title:  这个Javascript“要求”是什么？
date:   2020-03-12T10:29:28.000Z
description: 我正在尝试让Javascript读取/写入PostgreSQL数据库。我在github上找到了这个项目。我能够获得以下示例代码以在节点中运行。var ...
img: 
author: 西门卡卡西
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试让Javascript读取/写入PostgreSQL数据库。</font><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在github上</font><font style="vertical-align: inherit;">找到了这个</font></font><a href="https://github.com/brianc/node-postgres"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我能够获得以下示例代码以在节点中运行。</font></font></p>

<pre><code>var pg = require('pg'); //native libpq bindings = `var pg = require('pg').native`<font></font>
var conString = "tcp://postgres:1234@localhost/postgres";<font></font>
<font></font>
var client = new pg.Client(conString);<font></font>
client.connect();<font></font>
<font></font>
//queries are queued and executed one after another once the connection becomes available<font></font>
client.query("CREATE TEMP TABLE beatles(name varchar(10), height integer, birthday timestamptz)");<font></font>
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['Ringo', 67, new Date(1945, 11, 2)]);<font></font>
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['John', 68, new Date(1944, 10, 13)]);<font></font>
<font></font>
//queries can be executed either via text/parameter values passed as individual arguments<font></font>
//or by passing an options object containing text, (optional) parameter values, and (optional) query name<font></font>
client.query({<font></font>
  name: 'insert beatle',<font></font>
  text: "INSERT INTO beatles(name, height, birthday) values($1, $2, $3)",<font></font>
  values: ['George', 70, new Date(1946, 02, 14)]<font></font>
});<font></font>
<font></font>
//subsequent queries with the same name will be executed without re-parsing the query plan by postgres<font></font>
client.query({<font></font>
  name: 'insert beatle',<font></font>
  values: ['Paul', 63, new Date(1945, 04, 03)]<font></font>
});<font></font>
var query = client.query("SELECT * FROM beatles WHERE name = $1", ['John']);<font></font>
<font></font>
//can stream row results back 1 at a time<font></font>
query.on('row', function(row) {<font></font>
  console.log(row);<font></font>
  console.log("Beatle name: %s", row.name); //Beatle name: John<font></font>
  console.log("Beatle birth year: %d", row.birthday.getYear()); //dates are returned as javascript dates<font></font>
  console.log("Beatle height: %d' %d\"", Math.floor(row.height/12), row.height%12); //integers are returned as javascript ints<font></font>
});<font></font>
<font></font>
//fired after last row is emitted<font></font>
query.on('end', function() { <font></font>
  client.end();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接下来，我试图使其在网页上运行，但是似乎什么也没有发生。</font><font style="vertical-align: inherit;">我在Javascript控制台上进行了检查，它只显示“要求未定义”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么这是什么“要求”？</font><font style="vertical-align: inherit;">为什么它在节点中有效但在网页中无效？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在我让它在节点上工作之前，我必须做</font></font><code>npm install pg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那是什么意思 </font><font style="vertical-align: inherit;">我查看了目录，但没有找到文件pg。</font><font style="vertical-align: inherit;">它放在哪里，JavaScript如何找到它？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到，尽管其他答案解释了要求是什么，并且该答案用于在Node中加载模块，但它们并未对在浏览器中工作时如何加载节点模块给出完整的答复。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很简单。</font><font style="vertical-align: inherit;">如描述的那样，使用npm安装模块，模块本身将位于通常称为node_modules的文件夹中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，将其加载到您的应用程序中的最简单方法是使用指向该目录的脚本标记从html引用它。</font><font style="vertical-align: inherit;">也就是说，如果您的node_modules目录位于项目的根目录中，并且位于与index.html相同的级别，则可以在index.html中编写：</font></font></p>

<pre><code>&lt;script src="node_modules/ng"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，整个脚本将被加载到页面中-因此您可以直接访问其变量和方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他在大型项目中使用更广泛的方法，例如</font></font><a href="http://requirejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">require.js之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的模块加载器</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这两个中，我没有使用Require my，但是我认为许多人认为它是可行的方式。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
