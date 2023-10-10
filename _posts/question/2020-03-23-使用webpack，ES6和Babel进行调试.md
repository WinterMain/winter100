---
layout: question
title:  使用webpack，ES6和Babel进行调试
date:   2020-03-23T12:11:24.000Z
description: 这似乎应该比较容易实现，但是可惜。我有ES6课：'use strict';export class BaseModel {      con...
img: 
author: 泡芙
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎应该比较容易实现，但是可惜。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有ES6课：</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
export class BaseModel {  <font></font>
    constructor(options) {<font></font>
        console.log(options);<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和使用它的根模块：</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
import {BaseModel} from './base/model.js';<font></font>
<font></font>
export let init = function init() {<font></font>
    console.log('In Bundle');<font></font>
    new BaseModel({a: 30});    <font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的目标是：</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过Babel传递以上内容以获得ES5代码</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack打包模块</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">能够调试结果</font></font></strong></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过一番尝试，这是我拥有的webpack配置：</font></font></p>

<pre><code>{<font></font>
    entry: {<font></font>
        app: PATH.resolve(__dirname, 'src/bundle.js'),<font></font>
    },<font></font>
    output: {<font></font>
        path: PATH.resolve(__dirname, 'public/js'),<font></font>
        filename: 'bundle.js'<font></font>
    },        <font></font>
    devtool: 'inline-source-map',<font></font>
    module: {<font></font>
        loaders: [<font></font>
            {<font></font>
                test: /\.js$/,<font></font>
                exclude: /(node_modules|bower_components)/,<font></font>
                loader: 'babel'<font></font>
            }<font></font>
        ]        <font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某种程度上，这似乎是可行的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我可以这样做：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24021/images/thumbnails/1584965347015.png" data-src="https://www.samyoc.com//uploads/users/24021/images/1584965347015.png"><img src="https://i.stack.imgur.com/7uoqi.png" alt="devtools断点截图"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以单击F11并输入代码，但无法评估</font></font><code>BaseModel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24021/images/thumbnails/1584965347017.png" data-src="https://www.samyoc.com//uploads/users/24021/images/1584965347017.png"><img src="https://i.stack.imgur.com/c0OqD.png" alt="控制台评估错误"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有点违反了调试的目的（或目的之一）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试着</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加入</font></font><code>source-map-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">各种顺序有</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
    test: /\.js$/,<font></font>
    loader: "source-map-loader"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无济于事。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旁注1</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如果我放弃webpack，而只是通过Babel将带有源映射的模块编译为System.js：</font></font></p>

<pre><code>babel src/ --out-dir public/js/ --debug --source-maps inline --modules system
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切正常。</font></font></li>
</ul>

<p><a href="https://www.samyoc.com//uploads/users/24021/images/thumbnails/1584965347019.png" data-src="https://www.samyoc.com//uploads/users/24021/images/1584965347019.png"><img src="https://i.stack.imgur.com/3OwzH.png" alt="在此处输入图片说明"></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旁注2</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这</font></font><code>?sourceMaps=true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎根本没有做任何事情，因为，如果我从webpack中删除源地图配置-根本不会保留/生成任何源地图。</font><font style="vertical-align: inherit;">人们会希望将最初由Babel制作的原始地图保存在生成​​的文件中。</font><font style="vertical-align: inherit;">不。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何建议将不胜感激</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3026篇《使用webpack，ES6和Babel进行调试》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
