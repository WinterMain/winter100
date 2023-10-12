---
layout: question
title:  node.js fs.readdir递归目录搜索
date:   2020-03-20T02:33:43.000Z
description: 关于使用fs.readdir进行异步目录搜索的任何想法？我意识到我们可以引入递归并使用下一个目录来调用read目录函数以进行读取，但是我有点担心它不会异步...
img: 
author: Eva梅村村
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于使用fs.readdir进行异步目录搜索的任何想法？</font><font style="vertical-align: inherit;">我意识到我们可以引入递归并使用下一个目录来调用read目录函数以进行读取，但是我有点担心它不会异步...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font><font style="vertical-align: inherit;">我看过</font><font style="vertical-align: inherit;">很棒的</font></font><a href="https://github.com/coolaj86/node-walk" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-walk</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但不像readdir那样仅给我数组中的文件。</font><font style="vertical-align: inherit;">虽然</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">寻找像...的输出</font></font></p>

<pre><code>['file1.txt', 'file2.txt', 'dir/file3.txt']
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2447篇《node.js fs.readdir递归目录搜索》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种获取所有文件（包括子目录）的递归方法。</font></font></p>

<pre><code>const FileSystem = require("fs");<font></font>
const Path = require("path");<font></font>
<font></font>
//...<font></font>
<font></font>
function getFiles(directory) {<font></font>
    directory = Path.normalize(directory);<font></font>
    let files = FileSystem.readdirSync(directory).map((file) =&gt; directory + Path.sep + file);<font></font>
<font></font>
    files.forEach((file, index) =&gt; {<font></font>
        if (FileSystem.statSync(file).isDirectory()) {<font></font>
            Array.prototype.splice.apply(files, [index, 1].concat(getFiles(file)));<font></font>
        }<font></font>
    });<font></font>
<font></font>
    return files;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin卡卡西小胖</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://www.npmjs.org/package/recursive-readdir" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">递归READDIR</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块具有此功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/manidlou/node-klaw-sync" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">klaw</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/manidlou/node-klaw-sync" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">klaw-sync</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这种事情值得考虑。</font><font style="vertical-align: inherit;">这些</font></font><a href="https://github.com/jprichardson/node-fs-extra/issues/338" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是node-fs-extra的一部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢</font></font><a href="https://stackoverflow.com/a/5827895/881558"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从</font></font><a href="https://stackoverflow.com/users/716248/chjj"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">chjj</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上，并且不会已经能够没有这种开始创建我的版本并行循环的。</font></font></p>

<pre><code>var fs = require("fs");<font></font>
<font></font>
var tree = function(dir, done) {<font></font>
  var results = {<font></font>
        "path": dir<font></font>
        ,"children": []<font></font>
      };<font></font>
  fs.readdir(dir, function(err, list) {<font></font>
    if (err) { return done(err); }<font></font>
    var pending = list.length;<font></font>
    if (!pending) { return done(null, results); }<font></font>
    list.forEach(function(file) {<font></font>
      fs.stat(dir + '/' + file, function(err, stat) {<font></font>
        if (stat &amp;&amp; stat.isDirectory()) {<font></font>
          tree(dir + '/' + file, function(err, res) {<font></font>
            results.children.push(res);<font></font>
            if (!--pending){ done(null, results); }<font></font>
          });<font></font>
        } else {<font></font>
          results.children.push({"path": dir + "/" + file});<font></font>
          if (!--pending) { done(null, results); }<font></font>
        }<font></font>
      });<font></font>
    });<font></font>
  });<font></font>
};<font></font>
<font></font>
module.exports = tree;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也创建</font></font><a href="https://gist.github.com/3718809" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一个Gist</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">欢迎发表评论。</font><font style="vertical-align: inherit;">我仍是从NodeJS领域开始的，所以这是我希望学习更多的一种方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝达蒙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想使用npm套件，</font></font><a href="https://github.com/ryanmcgrath/wrench-js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扳手</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常好。</font></font></p>

<pre><code>var wrench = require("wrench");<font></font>
<font></font>
var files = wrench.readdirSyncRecursive("directory");<font></font>
<font></font>
wrench.readdirRecursive("directory", function (error, files) {<font></font>
    // live your dreams<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑（2018）：</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近阅读过的任何人：作者于2015年弃用了此软件包：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不推荐使用扳手.js，并且已经有一段时间没有更新了。</font></font><a href="https://github.com/jprichardson/node-fs-extra" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我强烈建议使用fs-extra</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行任何额外的文件系统操作。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝梅樱</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个不错的npm软件包是</font></font><a href="https://github.com/isaacs/node-glob" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">glob</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>npm install glob</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它非常强大，可以满足您的所有递归需求。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上对glob并不</font></font><a href="https://github.com/thlorenz/readdirp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">十分满意</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以我创建了</font><a href="https://github.com/thlorenz/readdirp" rel="noreferrer"><font style="vertical-align: inherit;">readdirp</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我非常有信心，它的API使得递归查找文件和目录以及应用特定过滤器变得非常容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通读其</font></font><a href="https://github.com/thlorenz/readdirp/blob/master/README.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以更好地了解其功能并通过以下方式进行安装：</font></font></p>

<p><code>npm install readdirp</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil飞云</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一有人发现它有用，我还整理了一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本。</font></font></p>

<pre class="lang-js prettyprint-override"><code>var walk = function(dir) {<font></font>
    var results = [];<font></font>
    var list = fs.readdirSync(dir);<font></font>
    list.forEach(function(file) {<font></font>
        file = dir + '/' + file;<font></font>
        var stat = fs.statSync(file);<font></font>
        if (stat &amp;&amp; stat.isDirectory()) { <font></font>
            /* Recurse into a subdirectory */<font></font>
            results = results.concat(walk(file));<font></font>
        } else { <font></font>
            /* Is a file */<font></font>
            results.push(file);<font></font>
        }<font></font>
    });<font></font>
    return results;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示：过滤时使用较少的资源。</font><font style="vertical-align: inherit;">在此函数本身中进行过滤。</font><font style="vertical-align: inherit;">例如，</font></font><code>results.push(file);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用下面的代码</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">根据需要进行调整：</font></font></p>

<pre><code>    file_type = file.split(".").pop();<font></font>
    file_name = file.split(/(\\|\/)/g).pop();<font></font>
    if (file_type == "json") results.push(file);<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
