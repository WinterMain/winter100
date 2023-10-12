---
layout: question
title:  使用SSL的node.js，socket.io
date:   2020-03-24T10:09:16.000Z
description: 我正在尝试使用我的SSL证书运行socket.io，但是它将无法连接。我基于聊天示例创建代码：var https = require('https...
img: 
author: GO
category: question
answer: 2
tags: ssl Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用我的SSL证书运行socket.io，但是它将无法连接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我基于聊天示例创建代码：</font></font></p>

<pre><code>var https = require('https');<font></font>
var fs = require('fs');<font></font>
/**<font></font>
 * Bootstrap app.<font></font>
 */<font></font>
var sys = require('sys')<font></font>
require.paths.unshift(__dirname + '/../../lib/');<font></font>
<font></font>
/**<font></font>
* Module dependencies.<font></font>
*/<font></font>
<font></font>
var express = require('express')<font></font>
  , stylus = require('stylus')<font></font>
  , nib = require('nib')<font></font>
  , sio = require('socket.io');<font></font>
<font></font>
/**<font></font>
 * App.<font></font>
 */<font></font>
var privateKey = fs.readFileSync('../key').toString();<font></font>
var certificate = fs.readFileSync('../crt').toString();<font></font>
var ca = fs.readFileSync('../intermediate.crt').toString();<font></font>
<font></font>
var app = express.createServer({key:privateKey,cert:certificate,ca:ca });<font></font>
<font></font>
<font></font>
/**<font></font>
 * App configuration.<font></font>
 */<font></font>
<font></font>
...<font></font>
<font></font>
/**<font></font>
 * App routes.<font></font>
 */<font></font>
<font></font>
app.get('/', function (req, res) {<font></font>
  res.render('index', { layout: false });<font></font>
});<font></font>
<font></font>
/**<font></font>
 * App listen.<font></font>
 */<font></font>
<font></font>
app.listen(443, function () {<font></font>
  var addr = app.address();<font></font>
  console.log('   app listening on http://' + addr.address + ':' + addr.port);<font></font>
});<font></font>
<font></font>
/**<font></font>
 * Socket.IO server (single process only)<font></font>
 */<font></font>
<font></font>
var io = sio.listen(app,{key:privateKey,cert:certificate,ca:ca});<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我删除SSL代码，它运行正常，但是与此同时，我收到了对</font><a href="http://domain.com/socket.io/1/?t=1309967919512" rel="noreferrer"><font style="vertical-align: inherit;">http://domain.com/socket.io/1/?t=1309967919512</font></a><font style="vertical-align: inherit;">的请求</font></font><a href="http://domain.com/socket.io/1/?t=1309967919512" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，它没有尝试使用https，这会导致它失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在测试chrome，因为它是该应用程序的目标浏览器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，这是一个简单的问题，我是node / socket.io新手。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3619篇《使用SSL的node.js，socket.io》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidMandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于企业应用程序，应注意，您不应在代码中处理https。</font><font style="vertical-align: inherit;">应该通过IIS或nginx自动升级。</font><font style="vertical-align: inherit;">该应用程序不应该知道使用了哪些协议。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的需要，您可以允许安全连接和不安全连接，并且仍然仅使用一个Socket.io实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需实例化两台服务器，一台用于HTTP，一台用于HTTPS，然后将这些服务器连接到Socket.io实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端 ：</font></font></p>

<pre><code>// needed to read certificates from disk<font></font>
const fs          = require( "fs"    );<font></font>
<font></font>
// Servers with and without SSL<font></font>
const http        = require( "http"  )<font></font>
const https       = require( "https" );<font></font>
const httpPort    = 3333;<font></font>
const httpsPort   = 3334;<font></font>
const httpServer  = http.createServer();<font></font>
const httpsServer = https.createServer({<font></font>
    "key" : fs.readFileSync( "yourcert.key" ),<font></font>
    "cert": fs.readFileSync( "yourcert.crt" ),<font></font>
    "ca"  : fs.readFileSync( "yourca.crt"   )<font></font>
});<font></font>
httpServer.listen( httpPort, function() {<font></font>
    console.log(  `Listening HTTP on ${httpPort}` );<font></font>
});<font></font>
httpsServer.listen( httpsPort, function() {<font></font>
    console.log(  `Listening HTTPS on ${httpsPort}` );<font></font>
});<font></font>
<font></font>
// Socket.io<font></font>
const ioServer = require( "socket.io" );<font></font>
const io       = new ioServer();<font></font>
io.attach( httpServer );<font></font>
io.attach( httpsServer );<font></font>
<font></font>
io.on( "connection", function( socket ) {<font></font>
<font></font>
    console.log( "user connected" );<font></font>
    // ... your code<font></font>
<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端 ：</font></font></p>

<pre><code>var url    = "//example.com:" + ( window.location.protocol == "https:" ? "3334" : "3333" );<font></font>
var socket = io( url, {<font></font>
    // set to false only if you use self-signed certificate !<font></font>
    "rejectUnauthorized": true<font></font>
});<font></font>
socket.on( "connect", function( e ) {<font></font>
    console.log( "connect", e );<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的NodeJS服务器与Web服务器不同，则可能需要设置一些CORS标头。</font><font style="vertical-align: inherit;">因此，在服务器端，请替换：</font></font></p>

<pre><code>httpServer.listen( httpPort, function() {<font></font>
    console.log(  `Listening HTTP on ${httpPort}` );<font></font>
});<font></font>
httpsServer.listen( httpsPort, function() {<font></font>
    console.log(  `Listening HTTPS on ${httpsPort}` );<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有：</font></font></p>

<pre><code>const httpServer  = http.createServer( (req, res) =&gt; {<font></font>
    res.setHeader( "Access-Control-Allow-Origin"  , "*" );<font></font>
    res.setHeader( "Access-Control-Request-Method", "*" );<font></font>
    res.setHeader( "Access-Control-Allow-Methods" , "*" );<font></font>
    res.setHeader( "Access-Control-Allow-Headers" , "*" );<font></font>
    if ( req.method === "OPTIONS" ) {<font></font>
        res.writeHead(200);<font></font>
        res.end();<font></font>
        return;<font></font>
    }<font></font>
});<font></font>
const httpsServer = https.createServer({<font></font>
        "key" : fs.readFileSync( "yourcert.key" ),<font></font>
        "cert": fs.readFileSync( "yourcert.crt" )<font></font>
    }, (req, res) =&gt; {<font></font>
    res.setHeader( "Access-Control-Allow-Origin"  , "*" );<font></font>
    res.setHeader( "Access-Control-Request-Method", "*" );<font></font>
    res.setHeader( "Access-Control-Allow-Methods" , "*" );<font></font>
    res.setHeader( "Access-Control-Allow-Headers" , "*" );<font></font>
    if ( req.method === "OPTIONS" ) {<font></font>
        res.writeHead(200);<font></font>
        res.end();<font></font>
        return;<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，还可以根据需要调整标题的值。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
