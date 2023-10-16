---
layout: question
title:  ReferenceError：描述未定义NodeJs
date:   2020-04-03T02:32:47.000Z
description: 我正在尝试定义一些端点并使用进行测试nodejs。在server.js我有：var express = require('express');var...
img: 
author: 小宇宙
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试定义一些端点并使用进行测试</font></font><code>nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><code>server.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有：</font></font></p>

<pre><code>var express = require('express');<font></font>
var func1 = require('./func1.js');<font></font>
var port = 8080;<font></font>
var server = express();<font></font>
<font></font>
server.configure(function(){<font></font>
  server.use(express.bodyParser());<font></font>
});<font></font>
<font></font>
server.post('/testend/', func1.testend);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在</font></font><code>func1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    var testend = function(req, res) {<font></font>
           serialPort.write("1", function(err, results) {<font></font>
           serialPort.write("2" + "\n", function(err, results) {<font></font>
           });<font></font>
      });<font></font>
   });<font></font>
    exports.testend = testend;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，</font></font><code>test.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用此端点：</font></font></p>

<pre><code>var should = require('should');<font></font>
var assert = require('assert');<font></font>
var request = require('supertest');<font></font>
var http = require('http');<font></font>
var app = require('./../server.js');<font></font>
var port = 8080;<font></font>
<font></font>
describe('Account', function() {<font></font>
        var url = "http://localhost:" + port.toString();<font></font>
        it('test starts', function(done) {<font></font>
                request(url).post('/testend/')<font></font>
                // end handles the response<font></font>
                .end(function(err, res) {<font></font>
                        if (err) {<font></font>
                                throw err;<font></font>
                        }<font></font>
                        res.body.error.should.type('string');<font></font>
                        done();<font></font>
                });<font></font>
        });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我运行</font></font><code>node test.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，出现此错误：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">describe（'Account'，function（）{</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
^</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ReferenceError：描述未定义</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在对象。</font><font style="vertical-align: inherit;">（/test/test.js:9:1）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在Module._compile（module.js：456：26）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在Object.Module._extensions..js（module.js：474：10）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在Module.load（module.js：356：32）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在Function.Module._load（module.js：312：12）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在Function.Module.runMain（module.js：497：10）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在启动时（node.js：119：16）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    在node.js：906：3</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何解决该问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3893篇《ReferenceError：描述未定义NodeJs》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您通过进行测试</font></font><a href="http://mochajs.org/"><code>mocha</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则必须使用</font></font><code>mocha</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令而不是</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可执行文件</font><font style="vertical-align: inherit;">运行测试</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您还没有这样做，请确保您已这样做</font></font><code>npm install mocha -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，只需</font></font><code>mocha</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目的根目录中运行即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是vscode，则要调试文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>tdd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前</font><font style="vertical-align: inherit;">用过</font></font><code>ReferenceError: describe is not defined</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我使用时</font></font><code>bdd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它有效！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浪费半天时间解决...</font></font></p>

<pre><code>    {<font></font>
      "type": "node",<font></font>
      "request": "launch",<font></font>
      "name": "Mocha Tests",<font></font>
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",<font></font>
      "args": [<font></font>
        "-u",<font></font>
        "bdd",// set to bdd, not tdd<font></font>
        "--timeout",<font></font>
        "999999",<font></font>
        "--colors",<font></font>
        "${workspaceFolder}/test/**/*.js"<font></font>
      ],<font></font>
      "internalConsoleOptions": "openOnSessionStart"<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“ --ui tdd”时出现此错误。</font><font style="vertical-align: inherit;">删除此问题或使用“ --ui bdd”修复问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
