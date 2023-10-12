---
layout: question
title:  Node Express图片上使用formidable库报出TypeError  require is not a function
date:   2017-11-21T15:02:20.000Z
description: 使用Node Express做图片上传功能，会经常用到formidable这个库，老版本的Node对图片上传的功能是比较难处理的，有了formidable这一切...
img: http://www.samyoc.com/uploads/users/1/images/1511275674194.png
author: Winter
category: question
answer: 1
tags: 前端的一些坑
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>使用Node Express做图片上传功能，会经常用到formidable这个库，老版本的Node对图片上传的功能是比较难处理的，有了formidable这一切都简单多了，只需要如下的一段简单的代码就可以完成图片的上传</p>

<pre>
    //保存上传的文件
    saveUploadFile: function(req, dirname, callback){
        var userDirPath = Path.resolve(this.MAIN+dirname);
        var form = new formidable.IncomingForm(); //创建上传表单
        form.encoding = &#39;utf-8&#39;; //设置编辑
        form.uploadDir = userDirPath; //设置上传目录
        form.keepExtensions = true; //保留后缀
        form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
        form.type = true;
        var displayUrl;

        form.parse(req, function(err, fields, files) {
            if (err) {
                callback(false, &quot;上传失败&quot;);
                return;
            }

            var extName = &#39;&#39;; //后缀名
            switch (files.file.type) {
                case &#39;image/pjpeg&#39;:
                    extName = &#39;jpg&#39;;
                    break;
                case &#39;image/jpeg&#39;:
                    extName = &#39;jpg&#39;;
                    break;
                case &#39;image/png&#39;:
                    extName = &#39;png&#39;;
                    break;
                case &#39;image/x-png&#39;:
                    extName = &#39;png&#39;;
                    break;
                default:
                    extName = files.file.name.substring(files.file.name.lastIndexOf(&quot;.&quot;));
                    break;
            }
            if (extName.length === 0) {
                callback(false, 2023); //文件格式错误
                return;
            } else {
                var picName = fields.name || Date.now();
                var avatarName = &#39;/&#39; + picName + &#39;.&#39; + extName;
                var newPath = form.uploadDir + avatarName;
                fs.renameSync(files.file.path, newPath); //重命名

                callback(true, dirname+avatarName);
            }
        });
    },</pre>

<p>但是在编译的时候却会遇到一个非常棘手的问题，编译器报出了如下的错误：</p>

<p><img src="https://www.samyoc.com/uploads/users/1/images/1511275674194.png" style="width:100%" /></p>

<pre>
/Users/yanglidong/Documents/Work/Company/Git/YLD/samyoc/dist/server/server.js:257847
	var crypto = require(&#39;crypto&#39;);
	             ^

TypeError: require is not a function
    at Object.map../file (/Users/yanglidong/Documents/Work/Company/Git/YLD/samyoc/dist/server/server.js:257847:15)

</pre>

<p>从这里TypeError: require is not a function我们可以看出，我们在模块应用的require函数无效了，说它不是一个函数。这是个很无厘头的问题，即不是代码问题也不是环境问题，找遍了所有地方也没找到问题。最后在Stack Overflow上找到提示。</p>

<p>要解决这个问题只需要在webconfig文件中，添加定义&quot;global.GENTLY&quot;: false，因为formidable库是有使用到GENTLY库的。</p>

<pre>
var serverConfig = {
  plugins: [
    new webpack.DefinePlugin({
        &quot;global.GENTLY&quot;: false,
        &#39;__isServer__&#39;: true,
        &#39;__isClient__&#39;: false,
        &#39;_isDevelopment_&#39;: true,
        location: {
            origin: &quot;&#39;http://localhost:3001&#39;&quot;
        }
    }),
    .
    .
    .
};
</pre>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第30篇《Node Express图片上使用formidable库报出TypeError  require is not a function》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2017.11.28</span>
          </div>
          <div class="discuss-comment">要解决这个问题只需要在webconfig文件中，添加定义"global.GENTLY": false，因为formidable库是有使用到GENTLY库的。</div>
        </div></div>
    {% endraw %}
  </div>
<div>
