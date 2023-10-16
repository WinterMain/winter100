---
layout: question
title:  如何在Webpack中使用Jest？
date:   2020-03-24T02:00:46.000Z
description: 我使用webpack开发一个React组件。这是它的简单版本：'use strict';require('./MyComponent.less')...
img: 
author: 神无
category: question
answer: 9
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="http://webpack.github.io/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发一个React组件。</font><font style="vertical-align: inherit;">这是它的简单版本：</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
require('./MyComponent.less');<font></font>
<font></font>
var React = require('react');<font></font>
<font></font>
var MyComponent = React.createClass({<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div className="my-component"&gt;<font></font>
        Hello World<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
module.exports = MyComponent;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想使用</font></font><a href="https://facebook.github.io/jest/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jest</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试此组件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是我的相关内容</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"scripts": {<font></font>
  "test": "jest"<font></font>
},<font></font>
"jest": {<font></font>
  "rootDir": ".",<font></font>
  "testDirectoryName": "tests",<font></font>
  "scriptPreprocessor": "&lt;rootDir&gt;/node_modules/babel-jest",<font></font>
  "unmockedModulePathPatterns": [<font></font>
    "react"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时</font></font><code>npm test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，出现以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法错误：/Users/mishamoroshko/react-component/src/tests/MyComponent.js：/Users/mishamoroshko/react-component/src/MyComponent.js：/Users/mishamoroshko/react-component/src/MyComponent.less：意外代币非法</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来webpack需要先处理</font></font><code>require('./MyComponent.less')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才能开玩笑才能运行测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否需要使用诸如</font></font><a href="https://www.npmjs.com/package/jest-webpack"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jest-webpack之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类</font><a href="https://www.npmjs.com/package/jest-webpack"><font style="vertical-align: inherit;">的东西</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果是，是否可以指定多个</font></font><code>scriptPreprocessor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s？</font><font style="vertical-align: inherit;">（请注意，我已经使用了</font></font><code>babel-jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3204篇《如何在Webpack中使用Jest？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS文件也有类似的问题。</font><font style="vertical-align: inherit;">正如您之前提到的</font></font><a href="https://www.npmjs.com/package/jest-webpack" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jest-webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以很好地解决此问题。</font><font style="vertical-align: inherit;">您也不必模拟或使用任何模块映射器。</font><font style="vertical-align: inherit;">对我们来说，我们从我们的替代NPM测试命令</font></font><code>jest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>jest-webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它只是工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最终遇到了以下黑客：</font></font></p>

<pre><code>// package.json<font></font>
<font></font>
"jest": {<font></font>
  "scriptPreprocessor": "&lt;rootDir&gt;/jest-script-preprocessor",<font></font>
  ...<font></font>
}<font></font>
<font></font>
<font></font>
// jest-script-preprocessor.js<font></font>
var babelJest = require("babel-jest");<font></font>
<font></font>
module.exports = {<font></font>
  process: function(src, filename) {<font></font>
    return babelJest.process(src, filename)<font></font>
      .replace(/^require.*\.less.*;$/gm, '');<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我仍然想知道该问题的正确解决方案是什么。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是babel，则可以在</font></font><a href="https://github.com/Shyp/babel-plugin-import-noop" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Shyp/babel-plugin-import-noop之类的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">东西进行babel转换期间剥离不需要的导入，</font><font style="vertical-align: inherit;">并配置</font></font><code>.babelrc</code> <code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">env以使用该插件，如下所示：</font></font></p>

<pre><code>{<font></font>
  "env": {<font></font>
    "development": {<font></font>
      ...<font></font>
    },<font></font>
    "test": {<font></font>
      "presets": [ ... ],<font></font>
      "plugins": [<font></font>
        ["import-noop", {<font></font>
          "extensions": ["scss", "css"]<font></font>
        }]<font></font>
      ]<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，一种不太hacky的解决方案是将预处理器包装在与JavaScript文件匹配的文件名中：</font></font></p>

<pre><code>if (filename.match(/\.jsx?$/)) {<font></font>
    return babelJest.process(src, filename);<font></font>
} else {<font></font>
    return '';<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您没有在require行中显式设置扩展名，也不需要源代码上的正则表达式替换，此方法仍然有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack是一个很棒的工具，但是我不需要使用Jest单元测试来测试它的行为，在运行单元测试之前添加Webpack构建只会减慢该过程。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教科书的答案</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是使用</font></font><code>"moduleNameMapper"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">模拟非代码依赖</font><font style="vertical-align: inherit;">项</font></font></p>

<p><a href="https://facebook.github.io/jest/docs/webpack.html#handling-static-assets" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://facebook.github.io/jest/docs/webpack.html#handling-static-assets</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Misha的响应中获得启发，我创建了一个NPM程序包来解决此问题，同时还处理了一些我遇到的方案：</font></font></p>

<p><a href="https://github.com/atecarlos/webpack-babel-jest" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack-babel-jest</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以节省下一个人几个小时。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近发布了</font></font><a href="https://www.npmjs.com/package/jestpack" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jestpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这可能会有所帮助。</font><font style="vertical-align: inherit;">它首先使用Webpack构建您的测试文件，因此任何自定义模块解析度/加载器/插件等都可以正常工作，并且最终使用JavaScript。</font><font style="vertical-align: inherit;">然后，它为Jest提供了一个定制的模块加载器，它了解Webpack模块的运行时。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是发现Jest的</font></font><code>moduleNameMapper</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置</font><font style="vertical-align: inherit;">更加简单</font><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// package.json<font></font>
<font></font>
"jest": {<font></font>
    "moduleNameMapper": {<font></font>
      "^.+\\.scss$": "&lt;rootDir&gt;/scripts/mocks/style-mock.js"<font></font>
    }<font></font>
}<font></font>
<font></font>
// style-mock.js<font></font>
<font></font>
module.exports = {};</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Jest的</font></font><a href="https://facebook.github.io/jest/docs/en/webpack.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教程页面上有</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多详细信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现忽略必需模块的最干净的解决方案是使用</font></font><a href="https://facebook.github.io/jest/docs/api.html#config-modulenamemapper-object-string-string" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">moduleNameMapper配置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（适用于最新版本0.9.2）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文档很难遵循。</font><font style="vertical-align: inherit;">希望以下内容对您有所帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将moduleNameMapper密钥添加到您的packages.json配置中。</font><font style="vertical-align: inherit;">项目的键应为所需字符串的正则表达式。</font><font style="vertical-align: inherit;">“ .less”文件的示例：</font></font></p>

<pre><code>"moduleNameMapper": { "^.*[.](less|LESS)$": "EmptyModule" },
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将EmptyModule.js添加到您的根文件夹中：</font></font></p>

<pre><code>/**<font></font>
 * @providesModule EmptyModule<font></font>
 */<font></font>
module.exports = '';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该注释很重要，因为moduleNameMapper使用EmptyModule作为此模块的别名（</font></font><a href="https://www.npmjs.com/package/fbjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见ProvidesModule </font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，每个与正则表达式匹配的require引用都将替换为空字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将moduleFileExtensions配置与“ js”文件一起使用，请确保还将EmptyModule也添加到“ unmockedModulePathPatterns”中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我最后的玩笑配置：</font></font></p>

<pre><code>"jest": {<font></font>
  "scriptPreprocessor": "&lt;rootDir&gt;/node_modules/babel-jest",<font></font>
  "moduleFileExtensions": ["js", "json","jsx" ],<font></font>
  "moduleNameMapper": {<font></font>
    "^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS)$": "EmptyModule"<font></font>
  },<font></font>
  "preprocessorIgnorePatterns": [ "/node_modules/" ],<font></font>
  "unmockedModulePathPatterns": [<font></font>
    "&lt;rootDir&gt;/node_modules/react",<font></font>
    "&lt;rootDir&gt;/node_modules/react-dom",<font></font>
    "&lt;rootDir&gt;/node_modules/react-addons-test-utils",<font></font>
    "&lt;rootDir&gt;/EmptyModule.js"<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
