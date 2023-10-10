---
layout: question
title:  Bower init-AMD，ES6，全局变量和节点之间的区别
date:   2020-03-19T01:39:30.000Z
description: 我正在创建我的第一个Bower组件。运行bower init脚本后，问我“此软件包公开了哪些模块类型？” 这些选项：d es6 全球 节点...
img: 
author: Pro路易
category: question
answer: 2
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在创建我的第一个Bower组件。</font><font style="vertical-align: inherit;">运行</font></font><code>bower init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本后，问我“此软件包公开了哪些模块类型？” </font><font style="vertical-align: inherit;">这些选项：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">es6 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些选项之间有什么区别？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2217篇《Bower init-AMD，ES6，全局变量和节点之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西樱</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>bower init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也是第一次</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些选项应参考模块化JavaScript代码的不同方法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">amd：使用AMD </font></font><code>define</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如requirejs。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点：使用Node.js的</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局变量：使用JavaScript模块模式公开全局变量（例如window.JQuery）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">es6：使用即将推出的EcmaScript6模块功能。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我编写了一个Node.js模块</font></font><a href="http://g14n.info/dflow" rel="nofollow" title="流"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dflow，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我使用</font><a href="http://g14n.info/dflow" rel="nofollow" title="流"><font style="vertical-align: inherit;">browserify</font></a><font style="vertical-align: inherit;">创建了一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dist / dflow.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，该文件导出了一个全局</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dflow</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> var：所以我选择了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">globals</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他更新</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用来将</font></font><a href="http://g14n.info/dflow" rel="nofollow" title="流"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dflow浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">化为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">窗口</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局对象的命令是</font></font></p>

<p><code>
browserify -s dflow -e index.js -o dist/dflow.js
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更改了它，因为我更喜欢</font><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">require</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以现在我正在使用</font></font></p>

<p><code>
browserify -r ./index.js:dflow -o dist/dflow.js
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我改变了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bower.moduleType</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bower.json</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其主要动机是，如果我的模块名称有一个破折号，例如我的项目</font></font><a href="http://g14n.info/flow-view" rel="nofollow" title="流视图"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">流程视图</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我需要</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">camelize</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在全局名称</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flowView</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种新方法还有两个好处：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点和浏览器界面相同。</font><font style="vertical-align: inherit;">在客户端和服务器端都</font><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">require</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，让我只编写一次代码示例，然后在两个上下文中轻松地重用它们。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用npm脚本，因此，我可以利用</font></font><code>${npm_package_name}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量并编写一次用于浏览器的脚本。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是另一个话题，但是，值得考虑一下后一个好处是多么值得：让我分享</font></font><code>npm.scripts.browserify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font><em><font style="vertical-align: inherit;">package.json中</font></em><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性</font></font><em><font style="vertical-align: inherit;"></font></em> </p>

<p><code>"browserify": "browserify -r ./index.js:${npm_package_name} -o dist/${npm_package_name}.js"</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，这正是Bower针对模块类型指定的内容：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"></font><code>main</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript文件中</font><font style="vertical-align: inherit;">定义的模块类型</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可以是以下字符串之一或数组：</font></font></p>
  
  <ul>
  <li><code>globals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：使用</font></font><code>window.namespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>this.namespace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">添加到全局名称空间的JavaScript模块</font></font></li>
  <li><code>amd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">与AMD兼容的JavaScript模块，例如</font></font><a href="http://requirejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RequireJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>define()</code><font style="vertical-align: inherit;"></font></li>
  <li><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">与</font></font><a href="https://nodejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://nodejs.org/docs/latest/api/modules.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CommonJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容的JavaScript模块</font></font><code>module.exports</code><font style="vertical-align: inherit;"></font></li>
  <li><code>es6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：与</font></font><a href="http://www.2ality.com/2014/09/es6-modules-final.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块兼容的JavaScript模块</font><font style="vertical-align: inherit;">，使用</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font></font></li>
  <li><code>yui</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">与</font></font><a href="http://yuilibrary.com/yui/docs/yui/create.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块兼容的JavaScript模块</font></font><code>YUI.add()</code><font style="vertical-align: inherit;"></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关链接：</font><a href="https://github.com/bower/spec/blob/master/json.md#moduletype"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/bower/spec/blob/master/json.md#moduletype"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/bower/spec/blob/master/json.md#moduletype</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
