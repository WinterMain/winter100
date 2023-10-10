---
layout: question
title:  如何允许<input type =“ file”>仅接受图像文件？
date:   2020-03-23T07:15:12.000Z
description: 我只需要通过<input type="file">标签上传图像文件。现在，它接受所有文件类型。但是，我想将它限制为仅特定的图像文件的扩展名，其中包括....
img: 
author: 乐
category: question
answer: 6
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只需要通过</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">上传图像文件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，它接受所有文件类型。</font><font style="vertical-align: inherit;">但是，我想将它限制为仅特定的图像文件的扩展名，其中包括</font></font><code>.jpg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.gif</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何实现此功能？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2897篇《如何允许<input type =“ file”>仅接受图像文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGreen</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以通过</font></font></p>

<pre><code>&lt;input type="file" accept="image/*" /&gt; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这不是一个好方法。</font><font style="vertical-align: inherit;">您必须在服务器端进行编码以检查文件是否为图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查图像文件是真实图像还是伪图像</font></font></p>

<pre><code>if(isset($_POST["submit"])) {<font></font>
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);<font></font>
    if($check !== false) {<font></font>
        echo "File is an image - " . $check["mime"] . ".";<font></font>
        $uploadOk = 1;<font></font>
    }<font></font>
    else {<font></font>
        echo "File is not an image.";<font></font>
        $uploadOk = 0;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多参考，请参见此处 </font></font></p>

<p><a href="http://www.w3schools.com/tags/att_input_accept.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/tags/att_input_accept.asp </font></font></a><br>
<a href="http://www.w3schools.com/php/php_file_upload.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/php/php_file_upload.asp</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 1.将accept属性添加到输入标签</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 2.使用javascript </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 进行验证3.添加服务器端验证以验证内容是否确实是预期的文件类型</font></font><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于HTML和javascript：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;body&gt;<font></font>
&lt;input name="image" type="file" id="fileName" accept=".jpg,.jpeg,.png" onchange="validateFileType()"/&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    function validateFileType(){<font></font>
        var fileName = document.getElementById("fileName").value;<font></font>
        var idxDot = fileName.lastIndexOf(".") + 1;<font></font>
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();<font></font>
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){<font></font>
            //TO DO<font></font>
        }else{<font></font>
            alert("Only jpg/jpeg and png files are allowed!");<font></font>
        }   <font></font>
    }<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明：</font></font><br></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">accept属性过滤将在文件选择器弹出窗口中显示的文件。</font><font style="vertical-align: inherit;">但是，这不是验证。</font><font style="vertical-align: inherit;">这只是浏览器的提示。</font><font style="vertical-align: inherit;">用户仍然可以在弹出窗口中更改选项。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript仅验证文件扩展名，而不能真正验证所选文件是实际的jpg还是png。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您必须在服务器端编写文件内容验证。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样使用 </font></font></p>

<pre><code>&lt;input type="file" accept=".png, .jpg, .jpeg" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用</font></font></p>

<p><a href="https://jsfiddle.net/ermagrawal/5u4ftp3k/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/ermagrawal/5u4ftp3k/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">输入标签</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">accept</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">因此，仅接受PNG，JPEG和GIF可以使用以下代码：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" /&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者简单地：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input type="file" name="myImage" accept="image/*" /&gt;</code></pre>
</div>
</div>
<p></p>

<p>Note that this only provides a hint to the browser as to what file-types to display to the user, but this can be easily circumvented, so you should always validate the uploaded file on the server also.  </p>

<p>It should work in IE 10+, Chrome, Firefox, Safari 6+, Opera 15+, but support is very sketchy on mobiles (as of 2015) and by some reports this may actually prevent some mobile browsers from uploading anything at all, so be sure to test your target platforms well.  </p>

<p>For detailed browser support, see <a href="http://caniuse.com/#feat=input-file-accept" rel="noreferrer">http://caniuse.com/#feat=input-file-accept</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>accept</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读此文档</font></font><a href="http://www.w3schools.com/tags/att_input_accept.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/tags/att_input_accept.asp</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这个：</font></font></p>

<pre><code>&lt;input type="file" accept="image/*"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在FF和Chrome中均可使用。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
