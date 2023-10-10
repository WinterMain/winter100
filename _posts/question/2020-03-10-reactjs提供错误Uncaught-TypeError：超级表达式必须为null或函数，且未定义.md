---
layout: question
title:  reactjs提供错误Uncaught TypeError：超级表达式必须为null或函数，且未定义
date:   2020-03-10T04:32:55.000Z
description: 我正在使用reactjs。当我运行下面的代码时，浏览器说：未捕获的TypeError：超级表达式必须为null或函数，且未定义关于任何错误的任...
img: 
author: 西门达蒙
category: question
answer: 17
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用reactjs。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行下面的代码时，浏览器说：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：超级表达式必须为null或函数，且未定义</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于任何错误的任何暗示将不胜感激。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先是用于编译代码的行： </font></font></p>

<pre><code>browserify -t reactify -t babelify examples/temp.jsx  -o examples/public/app.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和代码：</font></font></p>

<pre><code>var React = require('react');<font></font>
<font></font>
class HelloMessage extends React.Component {<font></font>
  render() {<font></font>
    return &lt;div&gt;Hello &lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：针对此问题在地狱中燃烧了三天后，我发现我没有使用最新版本的react。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局安装：</font></font></strong></p>

<pre><code>sudo npm install -g react@0.13.2
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地安装：</font></font></strong></p>

<pre><code>npm install react@0.13.2
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保浏览器也使用正确的版本：</font></font></strong></p>

<pre><code>&lt;script type="text/javascript" src="react-0.13.2.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以为他人节省三天的宝贵生命。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第476篇《reactjs提供错误Uncaught TypeError：超级表达式必须为null或函数，且未定义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">做个有心人</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，正是React.Element更改为React.Component才解决了该错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用这个时也发生在我身上：</font></font></p>

<pre><code>class App extends React.Component(){<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是正确的：</font></font></p>

<pre><code>class App extends React.Component{<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：-（）在第一个中是导致此问题的主要原因</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您收到此错误，并且正在使用</font></font><a href="http://browserify.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Browserify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="http://browserify.org/" rel="nofollow"><font style="vertical-align: inherit;">browserify </font></a></font><a href="https://github.com/thlorenz/browserify-shim" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-shim</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如在Grunt任务中），您可能会遇到一个愚蠢的时刻，就像我那样，您无意间告诉我</font></font><code>browserify-shim</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将React视为全局名称空间的一部分（例如，从CDN加载）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果希望Browserify将React作为转换的一部分而不是单独的文件，请确保该行</font></font><code>"react": "global:React"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未出现在</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">的</font></font><code>"browserify-shim"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分中</font></font><code>packages.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小小西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码中，</font><font style="vertical-align: inherit;">也会发生这种情况</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我通过将更</font></font><code>export default class yourComponent extends React.Component() {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改为</font><font style="vertical-align: inherit;">解决了该错误</font></font><code>export default class yourComponent extends React.Component {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">是的，删除括号可以</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决该错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYPro前端</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看您在输入或生成类时是否有错字错误，可能就是这样。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能有第三方软件包导致此情况。</font><font style="vertical-align: inherit;">在我们的例子中，这是</font></font><a href="https://github.com/Raathigesh/dazzle" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令人反感的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我们具有与@steine相似的设置（</font></font><a href="https://stackoverflow.com/a/54899812/145599"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见上面的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了找到有问题的软件包，我以生产模式在本地运行了webpack构建，因此能够在堆栈跟踪中找到有问题的软件包。</font><font style="vertical-align: inherit;">因此，</font></font><a href="https://github.com/Raathigesh/dazzle/issues/53" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我们</font><font style="vertical-align: inherit;">提供了解决方案，而我得以保持丑陋的状态。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小碗儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Babel（5.8）如果尝试将表达式</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他一些</font><font style="vertical-align: inherit;">表达式</font><font style="vertical-align: inherit;">结合</font><font style="vertical-align: inherit;">使用，则会遇到相同的错误</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export const foo = "foo"<font></font>
export const bar = "bar"<font></font>
export default function baz() {}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写过</font></font></p>

<pre><code>React.component
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
那是我的问题）），并且一直在寻找超过半小时的时间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Stafan</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的条件</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建反应应用</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应脚本v3.2</font></font></li>
<li><a href="https://www.froala.com/wysiwyg-editor" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Froala</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Rich Text编辑器v3.1</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发模式效果很好</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生产版本因问题中提到的错误而中断</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决我的问题</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Froala降级到v3.0。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v3.1中的某个内容破坏了我们的Create React App构建过程。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：使用react脚本v3.3</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们发现React Scripts 3.2和Froala 3.1之间存在问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过更新到React Scripts v3.3，我们可以升级到Froala 3.1。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何其他人，这可能会引发此问题。</font><font style="vertical-align: inherit;">您还可以检查中的</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否大写。</font><font style="vertical-align: inherit;">我遇到了同样的问题，而导致该问题的原因是我写了：</font></font></p>

<pre><code>class Main extends React.component {<font></font>
  //class definition<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其更改为</font></font></p>

<pre><code>class Main extends React.Component {<font></font>
  //class definition<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切都很好</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺少JSX类的导出语句时，我遇到了这种情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
}<font></font>
export default MyComponent // &lt;- add me<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您有循环依赖项时，我已经看到此错误。</font></font></p>

<pre><code>class A extends B {}<font></font>
class B extends C {}<font></font>
class C extends A {}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您试图以</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的类定义</font><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">也可以收到此消息</font><font style="vertical-align: inherit;">。  </font></font></p>

<pre><code>export default class MyComponent extends React.Component() {}<font></font>
                                                        ^^ REMOVE<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从无状态功能组件转换为类时，有时可以做到这一点。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着您想要子类化某些东西，应该是</font></font><code>Class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">原因可能是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的错字</font></font><code>Class extends ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此您扩展了未定义的变量</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入错误</font></font><code>import ... from</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此您需要</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从模块</font><font style="vertical-align: inherit;">导入</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用的模块不包含您要导入的值（例如，过时的模块-React的情况），因此您导入不存在的值（</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用模块</font></font><code>export ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句中的</font><font style="vertical-align: inherit;">错字</font><font style="vertical-align: inherit;">，因此它会导出未定义的变量</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用的模块完全缺少</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句，因此仅导出</font></font><code>undefined</code></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它也可能是由输入错误引起的，因此</font></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您要</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用较低的c </font><font style="vertical-align: inherit;">来代替</font><font style="vertical-align: inherit;">大写C，</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>React.component //wrong.<font></font>
React.Component //correct.<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
此错误的根源可能是因为存在</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我们认为接下来自动出现的应该是一个以小写字母开头的react方法或属性，但实际上是另一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Class</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）应该以一个大写字母开头。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Jim斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类名</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，如果您确定要从正确命名的类扩展，例如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.Component</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是React.component或React.createComponent，则可能需要升级React版本。</font><font style="vertical-align: inherit;">有关扩展类的更多信息，请参见下面的答案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级React</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从0.13.0版本开始，React只支持ES6风格的类（请参阅</font></font><a href="https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html" rel="noreferrer" title="React v0.13.0 Beta 1 React博客"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的官方博客，以了解支持简介</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此之前，使用时：</font></font></p>

<pre><code>class HelloMessage extends React.Component
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您试图使用ES6关键字（</font></font><code>extends</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来从未使用ES6定义的类中继承子类</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这可能是为什么您在</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义等方面</font><font style="vertical-align: inherit;">遇到奇怪行为的原因</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，是的，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新到Reactv0.13.x。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环依赖</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您具有循环导入结构，也会发生这种情况。</font><font style="vertical-align: inherit;">一个模块导入另一个模块，反之亦然。</font><font style="vertical-align: inherit;">在这种情况下，您只需要重构代码即可避免它。</font></font><a href="https://medium.com/content-uneditable/circular-dependencies-in-javascript-a-k-a-coding-is-not-a-rock-paper-scissors-game-9c2a9eccd4bc#.9nppw7oqv" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
