---
layout: question
title:  如何在jQuery中发送带有Ajax请求的FormData对象？\[重复\]
date:   2020-03-12T12:39:06.000Z
description:                                                                          ...
img: 
author: 飞云Pro
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/5392344/sending-multipart-formdata-with-jquery-ajax" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery.ajax发送多部分/表单数据</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （14个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-05-11 10：32：41Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="http://www.w3.org/TR/XMLHttpRequest2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHttpRequest的2级</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准（还是一个工作草案）定义</font></font><code>FormData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的接口。</font><font style="vertical-align: inherit;">该接口允许将</font></font><code>File</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">附加</font><font style="vertical-align: inherit;">到XHR请求（Ajax请求）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，这是一个新功能-过去曾使用过“ hidden-iframe-trick”（请在</font></font><a href="https://stackoverflow.com/questions/6718664/is-it-possible-to-peform-an-asynchronous-cross-domain-file-upload/6963843"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的另一个问题中阅读</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是这样工作的（示例）：</font></font></p>

<pre><code>var xhr = new XMLHttpRequest(),<font></font>
    fd = new FormData();<font></font>
<font></font>
fd.append( 'file', input.files[0] );<font></font>
xhr.open( 'POST', 'http://example.com/script.php', true );<font></font>
xhr.onreadystatechange = handler;<font></font>
xhr.send( fd );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段，并且</font></font><code>handler</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Ajax请求的成功处理者。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有浏览器中（同样，除IE之外），它都能很好地工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想使此功能与jQuery一起使用。</font><font style="vertical-align: inherit;">我尝试了这个：</font></font></p>

<pre><code>var fd = new FormData();    <font></font>
fd.append( 'file', input.files[0] );<font></font>
<font></font>
$.post( 'http://example.com/script.php', fd, handler );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这是行不通的（抛出“非法调用”错误- </font></font><a href="https://i.imgur.com/Uy8Xu.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕截图在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我假设jQuery需要一个表示表单字段名称/值的简单键值对象，并且</font></font><code>FormData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要传递</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">实例显然不兼容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，由于可以将</font></font><code>FormData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">到中</font></font><code>xhr.send()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我希望也可以使其与jQuery一起使用。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在jQuery的Bug跟踪器上创建了“功能票”。</font><font style="vertical-align: inherit;">在这里：</font><a href="http://bugs.jquery.com/ticket/9995" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://bugs.jquery.com/ticket/9995" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//bugs.jquery.com/ticket/9995</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议我使用“ Ajax预过滤器” ...</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p>First, let me give a demo demonstrating what behavior I would like to achieve. </p>

<p>HTML:</p>

<pre><code>&lt;form&gt;<font></font>
    &lt;input type="file" id="file" name="file"&gt;<font></font>
    &lt;input type="submit"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>JavaScript:</p>

<pre><code>$( 'form' ).submit(function ( e ) {<font></font>
    var data, xhr;<font></font>
<font></font>
    data = new FormData();<font></font>
    data.append( 'file', $( '#file' )[0].files[0] );<font></font>
<font></font>
    xhr = new XMLHttpRequest();<font></font>
<font></font>
    xhr.open( 'POST', 'http://hacheck.tel.fer.hr/xml.pl', true );<font></font>
    xhr.onreadystatechange = function ( response ) {};<font></font>
    xhr.send( data );<font></font>
<font></font>
    e.preventDefault();<font></font>
});<font></font>
</code></pre>

<p>The above code results in this HTTP-request:</p>

<p><img src="https://www.samyoc.com//uploads/users/13793/images/thumbnails/1584016618735.png" data-src="https://www.samyoc.com//uploads/users/13793/images/1584016618735.png" alt="多部分数据"></p>

<p><strong>This is what I need</strong> - I want that "multipart/form-data" content-type!</p>

<hr>

<p>The proposed solution would be like so:</p>

<pre><code>$( 'form' ).submit(function ( e ) {<font></font>
    var data;<font></font>
<font></font>
    data = new FormData();<font></font>
    data.append( 'file', $( '#file' )[0].files[0] );<font></font>
<font></font>
    $.ajax({<font></font>
        url: 'http://hacheck.tel.fer.hr/xml.pl',<font></font>
        data: data,<font></font>
        processData: false,<font></font>
        type: 'POST',<font></font>
        success: function ( data ) {<font></font>
            alert( data );<font></font>
        }<font></font>
    });<font></font>
<font></font>
    e.preventDefault();<font></font>
});<font></font>
</code></pre>

<p>However, this results in:</p>

<p><img src="https://www.samyoc.com//uploads/users/13793/images/thumbnails/1584016618736.png" data-src="https://www.samyoc.com//uploads/users/13793/images/1584016618736.png" alt="错误的内容类型"></p>

<p>As you can see, the content type is wrong...</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1330篇《如何在jQuery中发送带有Ajax请求的FormData对象？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
