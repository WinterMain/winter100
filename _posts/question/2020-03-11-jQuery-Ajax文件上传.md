---
layout: question
title:  jQuery Ajax文件上传
date:   2020-03-11T03:30:41.000Z
description: 我可以使用以下jQuery代码使用ajax请求的POST方法执行文件上传吗？$.ajax({    type  "POST",    timeou...
img: 
author: 神乐宝儿小小
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用以下jQuery代码使用ajax请求的POST方法执行文件上传吗？</font></font></p>

<pre><code>$.ajax({<font></font>
    type: "POST",<font></font>
    timeout: 50000,<font></font>
    url: url,<font></font>
    data: dataString,<font></font>
    success: function (data) {<font></font>
        alert('success');<font></font>
        return false;<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可能，我是否需要填写</font></font><code>data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分？</font><font style="vertical-align: inherit;">这是正确的方法吗？</font><font style="vertical-align: inherit;">我只将文件发布到服务器端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在搜索，但是我发现是一个插件，而在我的计划中我不想使用它。</font><font style="vertical-align: inherit;">至少目前是这样。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第601篇《jQuery Ajax文件上传》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here was an idea i was thinking of:</p>

<pre><code>Have an iframe on page and have a referencer.
</code></pre>

<p>Have a form in which you move the INPUT:File element to.</p>

<pre><code>Form:  A processing page AND a target of the FRAME.
</code></pre>

<p>The result will post to the frame, and then you can just send the fetched data up a level to the image tag you want with something like:</p>

<pre><code>data:image/png;base64,asdfasdfasdfasdfa
</code></pre>

<p>and the page loads.</p>

<p>I believe it works for me, and depending you might be able to do something like:</p>

<pre><code>.aftersubmit(function(){<font></font>
    stopPropigation()// or some other code which would prevent a refresh.<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>to upload a file which is submitted by user as a part of form using jquery please follow the below code :</p>

<pre><code>var formData = new FormData();<font></font>
formData.append("userfile", fileInputElement.files[0]);<font></font>
</code></pre>

<p>Then send the form data object to server.</p>

<p>We can also append a File or Blob directly to the FormData object.</p>

<pre><code>data.append("myfile", myBlob, "filename.txt");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经用简单的代码处理了这些。</font><font style="vertical-align: inherit;">您可以从</font><a href="http://whats-online.info/science-and-tutorials/30/select-preview-rename-and-upload-image-using-jquery-Ajax/" rel="noreferrer"><strong><font style="vertical-align: inherit;">此处</font></strong></a><font style="vertical-align: inherit;">下载有效的演示</font></font><a href="http://whats-online.info/science-and-tutorials/30/select-preview-rename-and-upload-image-using-jquery-Ajax/" rel="noreferrer"><strong><font style="vertical-align: inherit;"></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您的情况，这些很有可能。</font><font style="vertical-align: inherit;">我将逐步指导您如何使用AJAX jquery将文件上传到服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，让我们创建一个HTML文件，以添加以下表单文件元素，如下所示。</font></font></p>

<pre><code>&lt;form action="" id="formContent" method="post" enctype="multipart/form-data" &gt;<font></font>
         &lt;input  type="file" name="file"  required id="upload"&gt;<font></font>
         &lt;button class="submitI" &gt;Upload Image&lt;/button&gt; <font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，创建一个jquery.js文件，并添加以下代码来处理我们向服务器提交的文件</font></font></p>

<pre><code>    $("#formContent").submit(function(e){<font></font>
        e.preventDefault();<font></font>
<font></font>
    var formdata = new FormData(this);<font></font>
<font></font>
        $.ajax({<font></font>
            url: "ajax_upload_image.php",<font></font>
            type: "POST",<font></font>
            data: formdata,<font></font>
            mimeTypes:"multipart/form-data",<font></font>
            contentType: false,<font></font>
            cache: false,<font></font>
            processData: false,<font></font>
            success: function(){<font></font>
                alert("file successfully submitted");<font></font>
            },error: function(){<font></font>
                alert("okey");<font></font>
            }<font></font>
         });<font></font>
      });<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到此为止。</font></font><a href="http://whats-online.info/science-and-tutorials/30/select-preview-rename-and-upload-image-using-jquery-Ajax/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看更多</font></font></strong></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Sam猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用隐藏的iframe，然后将表单目标设置为该iframe的名称。</font><font style="vertical-align: inherit;">这样，提交表单时，仅会刷新iframe。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为iframe的load事件注册一个事件处理程序，以解析响应。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关我的博客文章的更多详细信息：</font></font><a href="http://blog.manki.in/2011/08/ajax-fie-upload.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://blog.manki.in/2011/08/ajax-fie-upload.html"><font style="vertical-align: inherit;">//blog.manki.in/2011/08/ajax-fie-upload.html</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为此很晚，但是我正在寻找一个基于Ajax的图像上传解决方案，而我一直在寻找的答案在整个帖子中都有些分散。</font><font style="vertical-align: inherit;">我确定的解决方案涉及FormData对象。</font><font style="vertical-align: inherit;">我组装了代码的基本形式。</font><font style="vertical-align: inherit;">您可以看到它演示了如何使用fd.append（）向表单添加自定义字段，以及如何在ajax请求完成后处理响应数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上载html：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;title&gt;Image Upload Form&lt;/title&gt;<font></font>
    &lt;script src="//code.jquery.com/jquery-1.9.1.js"&gt;&lt;/script&gt;<font></font>
    &lt;script type="text/javascript"&gt;<font></font>
        function submitForm() {<font></font>
            console.log("submit event");<font></font>
            var fd = new FormData(document.getElementById("fileinfo"));<font></font>
            fd.append("label", "WEBUPLOAD");<font></font>
            $.ajax({<font></font>
              url: "upload.php",<font></font>
              type: "POST",<font></font>
              data: fd,<font></font>
              processData: false,  // tell jQuery not to process the data<font></font>
              contentType: false   // tell jQuery not to set contentType<font></font>
            }).done(function( data ) {<font></font>
                console.log("PHP Output:");<font></font>
                console.log( data );<font></font>
            });<font></font>
            return false;<font></font>
        }<font></font>
    &lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
    &lt;form method="post" id="fileinfo" name="fileinfo" onsubmit="return submitForm();"&gt;<font></font>
        &lt;label&gt;Select a file:&lt;/label&gt;&lt;br&gt;<font></font>
        &lt;input type="file" name="file" required /&gt;<font></font>
        &lt;input type="submit" value="Upload" /&gt;<font></font>
    &lt;/form&gt;<font></font>
    &lt;div id="output"&gt;&lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是php，这是一种处理上传的方法，其中包括利用上面html中演示的两个自定义字段。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Upload.php</font></font></p>

<pre><code>&lt;?php<font></font>
if ($_POST["label"]) {<font></font>
    $label = $_POST["label"];<font></font>
}<font></font>
$allowedExts = array("gif", "jpeg", "jpg", "png");<font></font>
$temp = explode(".", $_FILES["file"]["name"]);<font></font>
$extension = end($temp);<font></font>
if ((($_FILES["file"]["type"] == "image/gif")<font></font>
|| ($_FILES["file"]["type"] == "image/jpeg")<font></font>
|| ($_FILES["file"]["type"] == "image/jpg")<font></font>
|| ($_FILES["file"]["type"] == "image/pjpeg")<font></font>
|| ($_FILES["file"]["type"] == "image/x-png")<font></font>
|| ($_FILES["file"]["type"] == "image/png"))<font></font>
&amp;&amp; ($_FILES["file"]["size"] &lt; 200000)<font></font>
&amp;&amp; in_array($extension, $allowedExts)) {<font></font>
    if ($_FILES["file"]["error"] &gt; 0) {<font></font>
        echo "Return Code: " . $_FILES["file"]["error"] . "&lt;br&gt;";<font></font>
    } else {<font></font>
        $filename = $label.$_FILES["file"]["name"];<font></font>
        echo "Upload: " . $_FILES["file"]["name"] . "&lt;br&gt;";<font></font>
        echo "Type: " . $_FILES["file"]["type"] . "&lt;br&gt;";<font></font>
        echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB&lt;br&gt;";<font></font>
        echo "Temp file: " . $_FILES["file"]["tmp_name"] . "&lt;br&gt;";<font></font>
<font></font>
        if (file_exists("uploads/" . $filename)) {<font></font>
            echo $filename . " already exists. ";<font></font>
        } else {<font></font>
            move_uploaded_file($_FILES["file"]["tmp_name"],<font></font>
            "uploads/" . $filename);<font></font>
            echo "Stored in: " . "uploads/" . $filename;<font></font>
        }<font></font>
    }<font></font>
} else {<font></font>
    echo "Invalid file";<font></font>
}<font></font>
?&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用确实可以上传AJAX </font></font><code>XMLHttpRequest()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">无需iframe。</font><font style="vertical-align: inherit;">可以显示上传进度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关详细信息，请参见：回答</font></font><a href="https://stackoverflow.com/a/4943774/873282"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/4943774/873282</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以质疑</font></font><a href="https://stackoverflow.com/questions/4856917/jquery-upload-progress-and-ajax-file-upload"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Upload Progress和AJAX文件上传</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件上传是</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过Ajax。</font><font style="vertical-align: inherit;">您可以使用IFrame上传文件，而无需刷新页面。</font><font style="vertical-align: inherit;">您可以</font><a href="http://www.ajaxf1.com/tutorial/ajax-file-upload-tutorial.html" rel="noreferrer"><font style="vertical-align: inherit;">在此处</font></a><font style="vertical-align: inherit;">查看更多详细</font></font><a href="http://www.ajaxf1.com/tutorial/ajax-file-upload-tutorial.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">信息</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用XHR2，支持通过AJAX上传文件。</font><font style="vertical-align: inherit;">例如，通过</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FormData</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，但是不幸的是，所有/旧的浏览器都不支持它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FormData支持从以下桌面浏览器版本开始。</font><font style="vertical-align: inherit;">IE 10以上版本，Firefox 4.0以上版本，Chrome 7以上版本，Safari 5以上版本，Opera 12以上版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请参见</font></font><a href="https://developer.mozilla.org/en-US/docs/XMLHttpRequest/FormData" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN链接。</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
