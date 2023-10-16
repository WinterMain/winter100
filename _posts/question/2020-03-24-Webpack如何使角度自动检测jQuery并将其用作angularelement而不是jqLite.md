---
layout: question
title:  Webpack：如何使角度自动检测jQuery并将其用作angular.element而不是jqLit​​e？
date:   2020-03-24T10:18:22.000Z
description: 我正在使用Webpack构建Angular 1.4项目。该项目使用了多个jQuery插件，这些插件被包装到angular指令中。这些指令在内部使用angu...
img: 
author: 阿飞
category: question
answer: 3
tags: jquery Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Webpack构建Angular 1.4项目。</font><font style="vertical-align: inherit;">该项目使用了多个jQuery插件，这些插件被包装到angular指令中。</font><font style="vertical-align: inherit;">这些指令在内部使用</font></font><code>angular.element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能暗示angular.element是真正的jQuery，而不是jqLit​​e。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要angular自动检测jQuery并使用它代替jqLit​​e。</font><font style="vertical-align: inherit;">我试图在本地需要的jquery我的入口点模块</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>require('jquery')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并与全球范围内暴露的jQuery </font></font><code>require(expose?$!expose?jQuery!jquery)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我所做的都是</font></font><code>angular.element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指jqLit​​e。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的研究得出了一些发现： </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使当作为CommonJS模块导入时，Angular也会将自己分配给全局变量</font></font><code>window.angular</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以我不需要</font></font><code>expose</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack：</font></font><a href="https://stackoverflow.com/questions/36101119/does-angular-assign-itself-to-window-angular-globally-when-loaded-as-commonjs/36106899#36106899"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当作为CommonJS模块加载时，Angular是否会将自己分配给全局的`window.angular`吗？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ProviderPlugin似乎无法解决问题：它不会将jQuery公开给全局名称空间；</font><font style="vertical-align: inherit;">相反，对于依赖于全局名称jQuery的每个模块，它都会插入</font></font><code>require('jquery')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中。</font><font style="vertical-align: inherit;">我不确定100％，但是看起来Angular不会</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接从全局名称空间</font><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">，而是尝试</font></font><code>window.jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>bindJQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">，因此这种方法无济于事：</font></font><a href="https://stackoverflow.com/questions/29080148/expose-jquery-to-real-window-object-with-webpack"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Webpack将jQuery暴露给真实的Window对象</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于与ProviderPlugin相同的原因，它</font></font><code>imports-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎不适合：Angular想要</font></font><code>window.jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不仅仅是</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>expose-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，jquery使其进入window对象。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是Babel将所有导入都提升到结果代码中模块的顶部。</font><font style="vertical-align: inherit;">因此，尽管</font><font style="vertical-align: inherit;">源文件中的包</font></font><code>require(expose?jquery!jquery)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font><code>import angular from "angular"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，捆绑包中的包   </font></font><code>require("angular")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位于文件顶部，jquery之前，所以在导入Angular时，jquery尚不可用。</font><font style="vertical-align: inherit;">我想知道如何将Webpack加载程序与ECMA6导入语法一起使用。</font></font></li>
<li>There was a suggestion to use <code>import</code> syntax instead of <code>require</code> syntax with jquery: <code>import "jquery"</code> or <code>import $ from "jquery"</code>, not <code>require(jquery)</code>: (Petr Averyanov: <a href="https://stackoverflow.com/questions/36150641/how-to-use-webpack-loaders-syntax-imports-exports-expose-with-ecmascript-6-im">How to use Webpack loaders syntax ( imports/exports/expose) with ECMAScript 6 imports?</a>). jquery source code is <a href="https://github.com/jquery/jquery/blob/master/src/wrapper.js#L41" rel="noreferrer">wrapped with a special wrapper</a>, which idenitifies how jquery is required (with AMD/require, CommonJS or globally with <code>&lt;script&gt;</code> statement). Based on that it sets a special argument <code>noGlobal</code> for jquery fabric and either creates <code>window.jQuery</code> or not, based on the value of <code>noGlobal</code>. As of jquery 2.2.4, upon <code>import "jquery"</code> <code>noGlobal === true</code> and <code>window.jQuery</code> is not created. IIRC, some older versions of jquery didn't recognize <code>import</code> as CommonJS import and added <code>import</code>ed jquery to global namespace, which allowed angular to use it.</li>
</ol>

<hr>

<p>Details: here's my <code>app.js</code>:</p>

<pre><code>'use strict';<font></font>
<font></font>
require("expose?$!expose?jQuery!jquery");<font></font>
require("metisMenu/dist/metisMenu");<font></font>
require("expose?_!lodash");<font></font>
require("expose?angular!angular");<font></font>
<font></font>
import angular from "angular";<font></font>
import "angular-animate";<font></font>
import "angular-messages";<font></font>
import "angular-resource";<font></font>
import "angular-sanitize";<font></font>
import "angular-ui-router";<font></font>
import "bootstrap/dist/css/bootstrap.css";<font></font>
import "font-awesome/css/font-awesome.css";<font></font>
import "angular-bootstrap";<font></font>
<font></font>
require("../assets/styles/style.scss");<font></font>
require("../assets/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css");<font></font>
<font></font>
// Import all html files to put them in $templateCache<font></font>
// If you need to use lazy loading, you will probably need<font></font>
// to remove these two lines and explicitly require htmls<font></font>
const templates = require.context(__dirname, true, /\.html$/);<font></font>
templates.keys().forEach(templates);<font></font>
<font></font>
import HomeModule from "home/home.module";<font></font>
import UniverseDirectives from "../components/directives";<font></font>
<font></font>
angular.module("Universe", [<font></font>
    "ngAnimate",<font></font>
    "ngMessages",<font></font>
    "ngResource",<font></font>
    "ngSanitize",<font></font>
    "ui.router",<font></font>
    "ui.bootstrap",<font></font>
<font></font>
    HomeModule.name,<font></font>
    UniverseDirectives.name,<font></font>
])<font></font>
.config(function($urlRouterProvider, $locationProvider, $stateProvider){<font></font>
    // $urlRouterProvider.otherwise('/');<font></font>
<font></font>
    // $locationProvider.html5Mode(true);<font></font>
<font></font>
    $stateProvider<font></font>
      .state('test', {<font></font>
        url: "/test",<font></font>
        template: "This is a test"<font></font>
      });<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3639篇《Webpack：如何使角度自动检测jQuery并将其用作angular.element而不是jqLit​​e？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/users/761388/john-reilly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">john-reilly</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得了这个答案</font><font style="vertical-align: inherit;">：</font></font><br>
<a href="http://blog.johnnyreilly.com/2016/05/the-mysterious-case-of-webpack-angular-and-jquery.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack angular和jquery的神秘案例</font></font></a></p>

<p><a href="https://stackoverflow.com/users/1554165/bob-sponge"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bob-sponge</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的答案不太正确-Provide插件实际上是在其处理的模块上进行文本替换，因此我们需要提供</font></font><code>window.jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（而不仅仅是angular所寻求的）</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要将以下条目添加到您的插件：</font></font></p>
</blockquote>

<pre><code>new webpack.ProvidePlugin({<font></font>
    "window.jQuery": "jquery"<font></font>
}),<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本品采用的WebPack </font></font><a href="https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ProvidePlugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并在webpackification点（©2016约翰·赖利）将到包含的jQuery的的WebPack模块的引用来代替在代码中window.jQuery所有引用。</font><font style="vertical-align: inherit;">因此，当您查看捆绑的文件时，您会看到检查</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">的代码</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已变为：</font></font></p>
</blockquote>

<pre><code>jQuery = isUndefined(jqName) ?<font></font>
  __webpack_provided_window_dot_jQuery : // use jQuery (if present)<font></font>
    !jqName ? undefined : // use jqLite<font></font>
    window[jqName]; // use jQuery specified by `ngJq`<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那就对了; </font><font style="vertical-align: inherit;">的WebPack被提供角度与jQuery同时仍然
   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放置一个</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可变到</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">整洁吧？</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">!!更新</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，在ES6示例中，您仍然需要使用commonJs对角度的要求。</font></font></p>

<pre><code>import $ from "jquery"<font></font>
<font></font>
window.$ = $;<font></font>
window.jQuery = $;<font></font>
<font></font>
var angular = require("angular");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是原始答案</font></font></p>

<hr>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个更简单的解决方案。</font><font style="vertical-align: inherit;">只需将jQuery设置为全局窗口，以便angular可以识别它：</font></font></p>

<pre><code>var $ = require("jquery")<font></font>
<font></font>
window.$ = $;<font></font>
window.jQuery = $;<font></font>
<font></font>
var angular = require("angular");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或您的情况（已</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过期</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>import $ from "jquery"<font></font>
<font></font>
window.$ = $;<font></font>
window.jQuery = $;<font></font>
<font></font>
import angular from "angular";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助 ：）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，最好使用</font></font><a href="http://webpack.github.io/docs/list-of-plugins.html#provideplugin" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ProvidePlugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需将此行添加到插件部分的webpack配置中，jquery将在您的应用中可用：</font></font></p>

<pre><code>    new webpack.ProvidePlugin({<font></font>
         "$": "jquery",<font></font>
         "jQuery": "jquery"<font></font>
    })<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
