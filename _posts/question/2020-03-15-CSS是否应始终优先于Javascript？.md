---
layout: question
title:  CSS是否应始终优先于Javascript？
date:   2020-03-15T11:05:51.000Z
description: 在网上的无数地方，我看到了建议在JavaScript之前包含CSS。推理通常采用以下形式：  在订购CSS和JavaScript时，您希望CSS排在...
img: 
author: 斯丁斯丁
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在网上的无数地方，我看到了建议在JavaScript之前包含CSS。</font><font style="vertical-align: inherit;">推理通常</font></font><a href="https://stackoverflow.com/questions/6005827/what-can-i-do-to-decrease-load-times-of-html-pages/6005832#6005832"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用以下形式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在订购CSS和JavaScript时，您希望CSS排在第一位。</font><font style="vertical-align: inherit;">原因是渲染线程具有渲染页面所需的所有样式信息。</font><font style="vertical-align: inherit;">如果首先包含JavaScript，则JavaScript引擎必须先解析所有内容，然后再继续下一组资源。</font><font style="vertical-align: inherit;">这意味着渲染线程无法完全显示页面，因为它没有所需的所有样式。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的实际测试揭示了完全不同的东西： </font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的测试线束</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下Ruby脚本为各种资源生成特定的延迟： </font></font></p>

<pre><code>require 'rubygems'<font></font>
require 'eventmachine'<font></font>
require 'evma_httpserver'<font></font>
require 'date'<font></font>
<font></font>
class Handler  &lt; EventMachine::Connection<font></font>
  include EventMachine::HttpServer<font></font>
<font></font>
  def process_http_request<font></font>
    resp = EventMachine::DelegatedHttpResponse.new( self )<font></font>
<font></font>
    return unless @http_query_string<font></font>
<font></font>
    path = @http_path_info<font></font>
    array = @http_query_string.split("&amp;").map{|s| s.split("=")}.flatten<font></font>
    parsed = Hash[*array]<font></font>
<font></font>
    delay = parsed["delay"].to_i / 1000.0<font></font>
    jsdelay = parsed["jsdelay"].to_i<font></font>
<font></font>
    delay = 5 if (delay &gt; 5)<font></font>
    jsdelay = 5000 if (jsdelay &gt; 5000)<font></font>
<font></font>
    delay = 0 if (delay &lt; 0) <font></font>
    jsdelay = 0 if (jsdelay &lt; 0)<font></font>
<font></font>
    # Block which fulfills the request<font></font>
    operation = proc do<font></font>
      sleep delay <font></font>
<font></font>
      if path.match(/.js$/)<font></font>
        resp.status = 200<font></font>
        resp.headers["Content-Type"] = "text/javascript"<font></font>
        resp.content = "(function(){<font></font>
            var start = new Date();<font></font>
            while(new Date() - start &lt; #{jsdelay}){}<font></font>
          })();"<font></font>
      end<font></font>
      if path.match(/.css$/)<font></font>
        resp.status = 200<font></font>
        resp.headers["Content-Type"] = "text/css"<font></font>
        resp.content = "body {font-size: 50px;}"<font></font>
      end<font></font>
    end<font></font>
<font></font>
    # Callback block to execute once the request is fulfilled<font></font>
    callback = proc do |res|<font></font>
        resp.send_response<font></font>
    end<font></font>
<font></font>
    # Let the thread pool (20 Ruby threads) handle request<font></font>
    EM.defer(operation, callback)<font></font>
  end<font></font>
end<font></font>
<font></font>
EventMachine::run {<font></font>
  EventMachine::start_server("0.0.0.0", 8081, Handler)<font></font>
  puts "Listening..."<font></font>
}<font></font>
</code></pre>

<p>The above mini server allows me to set arbitrary delays for JavaScript files (both server and client) and arbitrary CSS delays. For example, <code>http://10.0.0.50:8081/test.css?delay=500</code> gives me a 500&nbsp;ms delay transferring the CSS. </p>

<p>I use the following page to test.</p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
      &lt;title&gt;test&lt;/title&gt;<font></font>
      &lt;script type='text/javascript'&gt;<font></font>
          var startTime = new Date();<font></font>
      &lt;/script&gt;<font></font>
      &lt;link href="http://10.0.0.50:8081/test.css?delay=500" type="text/css" rel="stylesheet"&gt;<font></font>
      &lt;script type="text/javascript" src="http://10.0.0.50:8081/test2.js?delay=400&amp;amp;jsdelay=1000"&gt;&lt;/script&gt; <font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;p&gt;<font></font>
      Elapsed time is: <font></font>
      &lt;script type='text/javascript'&gt;<font></font>
        document.write(new Date() - startTime);<font></font>
      &lt;/script&gt;<font></font>
    &lt;/p&gt;    <font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p>When I include the CSS first, the page takes 1.5&nbsp;seconds to render: </p>

<p><img src="https://www.samyoc.com//uploads/users/17010/images/thumbnails/1584270224131.png" data-src="https://www.samyoc.com//uploads/users/17010/images/1584270224131.png" alt="CSS优先"></p>

<p>When I include the JavaScript first, the page takes 1.4&nbsp;seconds to render: </p>

<p><img src="https://www.samyoc.com//uploads/users/17010/images/thumbnails/1584270224133.png" data-src="https://www.samyoc.com//uploads/users/17010/images/1584270224133.png" alt="JavaScript优先"></p>

<p>I get similar results in Chrome, Firefox and Internet&nbsp;Explorer. In Opera however, the ordering simply does not matter.</p>

<p>What appears to be happening is that the JavaScript interpreter refuses to start until all the CSS is downloaded. So, it seems that having JavaScript includes first is more efficient as the JavaScript thread gets more run time. </p>

<p>Am I missing something, is the recommendation to place CSS includes prior to JavaScript includes not correct? </p>

<p><sub>It is clear that we could add async or use setTimeout to free up the render thread or put the JavaScript code in the footer, or use a JavaScript loader. The point here is about ordering of essential JavaScript bits and CSS bits in the head.</sub></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
