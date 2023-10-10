---
layout: question
title:  如何将变量和数据从PHP传递到JavaScript？
date:   2020-03-11T09:34:20.000Z
description:                                                                          ...
img: 
author: 村村A小卤蛋
category: question
answer: 5
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
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想要改善这篇文章吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供此问题的详细答案，包括引文和答案正确的解释。</font><font style="vertical-align: inherit;">答案不够详细的答案可能会被编辑或删除。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在PHP中有一个变量，我的JavaScript代码中需要它的值。</font><font style="vertical-align: inherit;">如何将变量从PHP转换为JavaScript？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有看起来像这样的代码：</font></font></p>

<pre><code>&lt;?php<font></font>
     ...<font></font>
     $val = $myService-&gt;getValue(); // Makes an API and database call<font></font>
?&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有需要</font></font><code>val</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和看起来类似以下内容的</font><font style="vertical-align: inherit;">JavaScript代码</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
    myPlugin.start($val); // I tried this, but it didn't work<font></font>
    &lt;?php myPlugin.start($val); ?&gt; // This didn't work either<font></font>
    myPlugin.start(&lt;?=$val?&gt; // This works sometimes, but sometimes it fails<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第767篇《如何将变量和数据从PHP传递到JavaScript？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;?php<font></font>
<font></font>
    $val = $myService-&gt;getValue(); // Makes an API and database call<font></font>
<font></font>
    echo "<font></font>
        &lt;script&gt;<font></font>
            myPlugin.start({$val});<font></font>
        &lt;/script&gt; ";<font></font>
<font></font>
?&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云伽罗伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将数据转换为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></em> </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AJAX</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换</font><font style="vertical-align: inherit;">为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1</font></font></strong></p>

<pre><code>&lt;?php<font></font>
<font></font>
   $servername = "localhost";<font></font>
   $username = "";<font></font>
   $password = "";<font></font>
   $dbname = "";<font></font>
   $conn = new mysqli($servername, $username, $password, $dbname);<font></font>
<font></font>
   if ($conn-&gt;connect_error) {<font></font>
      die("Connection failed: " . $conn-&gt;connect_error);<font></font>
   } <font></font>
<font></font>
   $sql = "SELECT id, name, image FROM phone";<font></font>
   $result = $conn-&gt;query($sql);<font></font>
<font></font>
   while($row = $result-&gt;fetch_assoc()){ <font></font>
      $v[] = $row;    <font></font>
   }<font></font>
<font></font>
  echo json_encode($v);<font></font>
<font></font>
  $conn-&gt;close();<font></font>
?&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步</font></font></strong></p>

<pre><code>function showUser(fnc) {<font></font>
   var xhttp = new XMLHttpRequest();<font></font>
<font></font>
   xhttp.onreadystatechange = function() {<font></font>
      if (this.readyState == 4 &amp;&amp; this.status == 200) {<font></font>
         // STEP 3    <font></font>
         var p = JSON.parse(this.responseText);<font></font>
      }<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">D坤</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我提出了一种使用PHP分配JavaScript变量的简单方法。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用HTML5数据属性存储PHP变量，然后在页面加载时将其分配给JavaScript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的教程可以在</font></font><a href="http://qnimate.com/assign-javascript-variables-using-wordpressphp/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;?php<font></font>
    $variable_1 = "QNimate";<font></font>
    $variable_2 = "QScutter";<font></font>
?&gt;<font></font>
    &lt;span id="storage" data-variable-one="&lt;?php echo $variable_1; ?&gt;" data-variable-two="&lt;?php echo $variable_2; ?&gt;"&gt;&lt;/span&gt;<font></font>
&lt;?php<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是JavaScript代码</font></font></p>

<pre><code>var variable_1 = undefined;<font></font>
var variable_2 = undefined;<font></font>
<font></font>
window.onload = function(){<font></font>
    variable_1 = document.getElementById("storage").getAttribute("data-variable-one");<font></font>
    variable_2 = document.getElementById("storage").getAttribute("data-variable-two");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云伽罗伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>&lt;?php<font></font>
    echo "&lt;script&gt; var x = " . json_encode($phpVariable) . "&lt;/script&gt;";<font></font>
?&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-尝试了一段时间后</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然可以，但是会降低性能。</font><font style="vertical-align: inherit;">因为PHP是服务器端脚本，而JavaScript是用户端。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script&gt;<font></font>
  var jsvar = &lt;?php echo json_encode($PHPVar); ?&gt;;<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">json_encode（）要求：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP 5.2.0或更高</font></font></li>
<li><code>$PHPVar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 编码为UTF-8，Unicode。</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
