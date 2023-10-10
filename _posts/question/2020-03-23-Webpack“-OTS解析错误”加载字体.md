---
layout: question
title:  Webpack“ OTS解析错误”加载字体
date:   2020-03-23T13:56:34.000Z
description: 我的webpack配置指定应使用加载字体url-loader，而当我尝试使用Chrome浏览页面时，出现以下错误：OTS parsing error ...
img: 
author: Gil逆天
category: question
answer: 6
tags: CSS Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的webpack配置指定应使用加载字体</font></font><code>url-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而当我尝试使用Chrome浏览页面时，出现以下错误：</font></font></p>

<pre><code>OTS parsing error: invalid version tag<font></font>
Failed to decode downloaded font: [My local URL]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的配置的相关部分如下所示：</font></font></p>

<pre><code>{<font></font>
  module: {<font></font>
    loaders: [<font></font>
      // ...<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        loaders: ['style', 'css?sourceMap', 'autoprefixer', 'sass?sourceMap'],<font></font>
      },<font></font>
      {<font></font>
        test: /images\/.*\.(png|jpg|svg|gif)$/,<font></font>
        loader: 'url-loader?limit=10000&amp;name="[name]-[hash].[ext]"',<font></font>
      },<font></font>
      {<font></font>
        test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,<font></font>
        loader: 'file-loader?name="[name]-[hash].[ext]"',<font></font>
      }<font></font>
    ],<font></font>
  },<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Safari中不会发生这种情况，而且我还没有尝试过Firefox。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发中，我通过提供文件</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在生产中，它们被写入磁盘并复制到S3；</font><font style="vertical-align: inherit;">在这两种情况下，我在Chrome中的行为都相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也适用于较大的图像（大于图像加载器配置中的10kB限制）。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2018年， </font></font></p>

<h1><code>use MiniCssExtractPlugin</code></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Webpack（&gt; 4.0）将解决此问题。 </font></font></p>

<p><a href="https://github.com/webpack-contrib/mini-css-extract-plugin" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack-contrib/mini-css-extract-plugin</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利用</font></font><code>extract-text-webpack-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在接受的答案是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">推荐的WebPack 4.0+。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Angular</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则需要检查以确保您的</font></font></p>

<pre><code>&lt;base href="/"&gt; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记位于样式表包之前。</font><font style="vertical-align: inherit;">我从这里切换了代码：</font></font></p>

<pre><code> &lt;script src="~/bundles/style.bundle.js"&gt;&lt;/script&gt;<font></font>
 &lt;base href="~/" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此：</font></font></p>

<pre><code> &lt;base href="~/" /&gt;<font></font>
 &lt;script src="~/bundles/style.bundle.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且问题得以解决。</font><font style="vertical-align: inherit;">感谢</font></font><a href="https://stackoverflow.com/a/34669257/2607157"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我睁开了眼睛。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了相同的问题，但是原因不同。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在威尔·麦登的解决方案无济于事之后，我尝试了所有可以通过Intertubes找到的替代解决方案-也无济于事。</font><font style="vertical-align: inherit;">进一步研究，我只是打开了一个有争议的字体文件。</font><font style="vertical-align: inherit;">Webpack已以某种方式覆盖了文件的原始内容，以包含某种配置信息，这可能是由于先前对文件加载器的修改。</font><font style="vertical-align: inherit;">我用原始文件替换了损坏的文件，瞧瞧，错误消失了（对于Chrome和Firefox）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与上面的@ user3006381一样，我的问题不仅是相对URL，而是webpack像放置JavaScript文件一样放置文件。</font><font style="vertical-align: inherit;">它们的内容基本上都是：</font></font></p>

<pre><code>module.exports = __webpack_public_path__ + "7410dd7fd1616d9a61625679285ff5d4.eot";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在字体目录中而不是在实际字体中，并且字体文件在哈希代码下的输出文件夹中。</font><font style="vertical-align: inherit;">要解决此问题，我必须在url加载程序（在我的情况下为图像处理器）上更改测试，以不加载字体文件夹。</font><font style="vertical-align: inherit;">我仍然必须将webpack.config.js中的output.publicPath设置为@ will-madden的出色回答。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这不能回答OP的确切问题，但我来到这里的症状相同，但原因不同： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我包含了Slick Slider的.scss文件，如下所示：</font></font></p>

<pre><code>@import "../../../node_modules/slick-carousel/slick/slick.scss";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仔细检查后发现，它试图从无效位置（</font></font><code>&lt;host&gt;/assets/css/fonts/slick.woff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">加载字体</font><font style="vertical-align: inherit;">，这是从样式表中引用</font><font style="vertical-align: inherit;">字体</font><font style="vertical-align: inherit;">的方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最终只是将拷贝</font></font><code>/font/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到了我</font></font><code>assets/css/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，问题就为我解决了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像@mcortesi </font></font><a href="https://stackoverflow.com/questions/30762323/webpack-must-i-specify-the-domain-in-publicpath-for-url-directive-to-work-in"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里要求</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的那样，如果您从css加载程序查询中删除sourceMaps，则将在不使用blob的情况下构建css，并且将对数据URL进行很好的解析。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
