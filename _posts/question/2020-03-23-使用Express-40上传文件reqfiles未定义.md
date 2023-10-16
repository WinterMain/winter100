---
layout: question
title:  使用Express 4.0上传文件：req.files未定义
date:   2020-03-23T02:33:02.000Z
description: 我试图得到一个简单的文件上传机制的工作与快车4.0，但我不断收到undefined对req.files在app.post体内。以下是相关代码：var ...
img: 
author: 米亚
category: question
answer: 4
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图得到一个简单的文件上传机制的工作与快车4.0，但我不断收到</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font></font><code>req.files</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>app.post</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">体内。</font><font style="vertical-align: inherit;">以下是相关代码：</font></font></p>

<pre><code>var bodyParser = require('body-parser');<font></font>
var methodOverride = require('method-override');<font></font>
//...<font></font>
app.use(bodyParser({ uploadDir: path.join(__dirname, 'files'), keepExtensions: true })); <font></font>
app.use(methodOverride()); <font></font>
//...<font></font>
app.post('/fileupload', function (req, res) {<font></font>
  console.log(req.files); <font></font>
  res.send('ok'); <font></font>
}); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">..和随附的帕格代码： </font></font></p>

<pre><code>form(name="uploader", action="/fileupload", method="post", enctype="multipart/form-data")<font></font>
    input(type="file", name="file", id="file")<font></font>
    input(type="submit", value="Upload")<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
由于</font><font style="vertical-align: inherit;">以下</font></font><a href="https://stackoverflow.com/users/2050455/mscdex"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mscdex</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的响应</font><font style="vertical-align: inherit;">，我已切换为使用</font></font><code>busboy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>bodyParser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var fs = require('fs');<font></font>
var busboy = require('connect-busboy');<font></font>
//...<font></font>
app.use(busboy()); <font></font>
//...<font></font>
app.post('/fileupload', function(req, res) {<font></font>
    var fstream;<font></font>
    req.pipe(req.busboy);<font></font>
    req.busboy.on('file', function (fieldname, file, filename) {<font></font>
        console.log("Uploading: " + filename); <font></font>
        fstream = fs.createWriteStream(__dirname + '/files/' + filename);<font></font>
        file.pipe(fstream);<font></font>
        fstream.on('close', function () {<font></font>
            res.redirect('back');<font></font>
        });<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2655篇《使用Express 4.0上传文件：req.files未定义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>express-fileupload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 看起来是当今唯一仍然有效的中间件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在相同的示例中，</font></font><code>multer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>connect-multiparty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">req.file</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">req.files</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的未定义值</font><font style="vertical-align: inherit;">，但是</font></font><code>express-fileupload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以工作。</font></font></p>

<p>And there are a lot of questions and issues raised about the empty value of <em>req.file/req.files</em>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://github.com/expressjs/body-parser" rel="noreferrer"><code>body-parser</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块仅处理JSON和urlencoded表单提交，而不是多部分提交（如果您正在上传文件，情况就是如此）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于multipart，您需要使用诸如</font></font><a href="https://github.com/mscdex/connect-busboy" rel="noreferrer"><code>connect-busboy</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/expressjs/multer" rel="noreferrer"><code>multer</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/andrewrk/connect-multiparty" rel="noreferrer"><code>connect-multiparty</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（multiparty / formidable是Express BodyParser中间件最初使用的东西）之类的东西。</font><font style="vertical-align: inherit;">同样是FWIW，我正在名为busboy的busboy上的更高层次上工作</font></font><a href="https://github.com/mscdex/reformed" rel="noreferrer"><code>reformed</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它带有Express中间件，也可以单独使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请使用下面的代码 </font></font></p>

<pre><code>app.use(fileUpload());
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在谷歌上搜索的内容：</font></font></p>

<pre><code>var fileupload = require("express-fileupload");<font></font>
app.use(fileupload());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是上传的非常简单的机制 </font></font></p>

<pre><code>app.post("/upload", function(req, res)<font></font>
{<font></font>
    var file;<font></font>
<font></font>
    if(!req.files)<font></font>
    {<font></font>
        res.send("File was not found");<font></font>
        return;<font></font>
    }<font></font>
<font></font>
    file = req.files.FormFieldName;  // here is the field name of the form<font></font>
<font></font>
    res.send("File Uploaded");<font></font>
<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
