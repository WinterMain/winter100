---
layout: question
title:  Polymer元素和AngularJS指令之间有什么区别？
date:   2020-03-12T08:15:00.000Z
description: 在“聚合物入门”页面上，我们看到了一个正在使用的聚合物示例：<html>  <head>    <\!-- 1. Shim missing plat...
img: 
author: 蛋蛋猿
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“聚合物</font></font><a href="http://www.polymer-project.org/docs/start/usingelements.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入门”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面上，我们看到了一个正在使用的聚合物示例：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;!-- 1. Shim missing platform features --&gt;<font></font>
    &lt;script src="polymer-all/platform/platform.js"&gt;&lt;/script&gt;<font></font>
    &lt;!-- 2. Load a component --&gt;<font></font>
    &lt;link rel="import" href="x-foo.html"&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;!-- 3. Declare the component by its tag. --&gt;<font></font>
    &lt;x-foo&gt;&lt;/x-foo&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会注意到</font></font><code>&lt;x-foo&gt;&lt;/x-foo&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，由</font></font><code>platform.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">定义</font></font><code>x-foo.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎这等效于AngularJS中的指令模块：</font></font></p>

<pre><code>angular.module('xfoo', [])<font></font>
.controller('X-Foo', ['$scope',function($scope) {<font></font>
    $scope.text = 'hey hey!';<font></font>
})<font></font>
.directive('x-foo', function() {<font></font>
    return {<font></font>
        restrict: 'EA',<font></font>
        replace: true,<font></font>
        controller: 'X-Foo',<font></font>
        templateUrl: '/views/x-foo.html',<font></font>
        link: function(scope, controller) {<font></font>
        }<font></font>
    };<font></font>
});<font></font>
</code></pre>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者有什么区别？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Polymer解决了AngularJS没有或没有的哪些问题？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将来是否有计划将Polymer与AngularJS联系在一起？</font></font></p></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种用于制作自定义元素的方法。</font><font style="vertical-align: inherit;">您可以使用自定义属性定义新的自定义标签。</font><font style="vertical-align: inherit;">Polymer也可以做到这一点，但它会以一种有趣且更简单的方式进行工作.Polymer实际上并不是一个框架，它只是一个库，而是一个功能强大而令人惊叹的库，您可以爱上它（像我一样）。</font><font style="vertical-align: inherit;">Polymer让您学习由w3c开发的本机Web组件技术，该Web浏览器最终会实现该技术。Web组件是未来的技术，但是Polymer让您现在就使用该技术。GooglePolymer是一个提供语法糖和polyfill用于构建的库元素和带有Web组件的应用程序。请记住，我说的Polymer不是框架，而是库。但是当您使用Polymer时，实际上您的框架是DOM。</font><font style="vertical-align: inherit;">这篇文章是关于angular js ver 1和polymer的，我一直与他们一起工作是我的项目，我个人更喜欢Polymer而不是angularjs。</font><font style="vertical-align: inherit;">但是Angular版本2与angularjs ver 1的比较完全不同。angular2中的指令具有不同的含义。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular提供的MVVM（模型视图，视图模型）不是Polymer旨在解决的问题。</font><font style="vertical-align: inherit;">当您考虑比较Angular和Polymer时，Angular指令提供给您的可组合和可重复使用的特性（自定义标签+关联的逻辑组合）是更合理的比较。</font><font style="vertical-align: inherit;">Angular是并且将继续是一个更广泛的目标服务框架。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您的问题：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将来是否有计划将Polymer与AngularJS联系在一起？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自AngularJS的官方Twitter帐户：“ angularjs将使用聚合物作为其小部件。这是双赢的”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://twitter.com/angularjs/status/335417160438542337"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://twitter.com/angularjs/status/335417160438542337"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//twitter.com/angularjs/status/335417160438542337</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Green古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1＆2）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于聚合物组件在阴影域中是隐藏的树，因此对其作用域进行了分类。</font><font style="vertical-align: inherit;">这意味着他们的风格和行为无法流血。</font><font style="vertical-align: inherit;">Angular的范围不像您创建的特定指令（如聚合物Web组件）。</font><font style="vertical-align: inherit;">角度指令可能会与全局范围内的某些内容冲突。</font><font style="vertical-align: inherit;">IMO，您将从聚合物中获得的好处就是我所解释的..模块化组件将css和JavaScript的范围限定为没有任何接触的特定组件。</font><font style="vertical-align: inherit;">不可修改的DOM！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以创建Angular指令，以便您可以使用多个功能来注释元素。</font><font style="vertical-align: inherit;">在聚合物网组件中并非如此。</font><font style="vertical-align: inherit;">如果要组合组件的功能，则可以将两个组件包含在另一个组件中（或将它们包装在另一个组件中），也可以扩展现有组件。</font><font style="vertical-align: inherit;">请记住，主要区别仍然是每个组件都在聚合物纤网组件中。</font><font style="vertical-align: inherit;">您可以在多个组件之间共享css和js文件，也可以内联它们。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，据Rob Dodson和Eric Bidelman所述，Angular计划将聚合物添加到版本2+中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，这里没有人提到作用域一词。</font><font style="vertical-align: inherit;">我认为这是主要区别之一。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多差异，但是在创建类似于应用程序功能的模块化乐高玩具时，它们也有很多共同点。</font><font style="vertical-align: inherit;">我认为可以肯定地说，Angular是应用程序框架，有一天聚合物可能会与附带指令一起生活在同一个应用程序中，主要区别是范围，但聚合物可能会替代您当前的许多指令。</font><font style="vertical-align: inherit;">但是我认为Angular不能按原样工作并且也不能包含聚合物组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在写这篇文章时，再次通读了答案，我注意到Eric Bidelman（ebidel）在他的</font></font><a href="https://stackoverflow.com/a/18092637/345078"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做了某种掩饰</font><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ Shadow DOM可以组成HTML的一部分，但它也是封装HTML的工具。”</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在应有的信誉上获得荣誉，我听了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rob Dodson</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Eric Bidelman的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次采访后得到了答案</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我觉得没有用答案来表达这个人的问题，这是他想要的理解。</font><font style="vertical-align: inherit;">话虽如此，我想我已经触及了他正在寻找的答案，但是与Rob Dodson和Eric Bidelman相比，我绝对没有关于该主题的更多信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我收集的信息的主要来源。</font></font></p>

<p><a href="http://javascriptjabber.com/120-jsj-google-polymer-with-rob-dodson-and-eric-bidelman/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript Jabber-Rob Dodson和Eric Bidelman撰写的Polymer</font></font></a></p>

<p><a href="http://shoptalkshow.com/episodes/124-rob-dodson/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店脱口秀-Rob Dodson的Web组件</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim前端Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为从实际角度来看，最终角度指令的模板功能以及聚合物利用的Web组件方法都可以完成相同的任务。</font><font style="vertical-align: inherit;">我看到的主要区别在于，Polymer利用Web API来包含HTML的某些部分，这是一种语法正确，简化的方法，可以实现Angular在渲染模板时以编程方式实现的功能。</font><font style="vertical-align: inherit;">但是，如前所述，Polymer是一个使用组件构建声明性和交互式模板的小型框架。</font><font style="vertical-align: inherit;">它仅可用于UI设计，并且仅在最现代的浏览器中受支持。</font><font style="vertical-align: inherit;">AngularJS是一个完整的MVC框架，旨在通过使用数据绑定，依赖项和指令使Web应用程序具有声明性。</font><font style="vertical-align: inherit;">他们是两只完全不同的动物。</font><font style="vertical-align: inherit;">对你的问题 </font><font style="vertical-align: inherit;">在我看来，到目前为止，使用聚合物比使用angular不会带来什么大的好处，除了拥有数十个预先构建的组件外，但是仍然需要您将它们移植到angular指令上。</font><font style="vertical-align: inherit;">但是，在将来，随着Web API变得更加高级，Web组件将完全不需要以编程方式定义和构建模板，因为浏览器将能够以类似于处理javascript或CSS文件的方式简单地包含它们。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此视频中，来自AngularJS的2个人讨论了这两个框架（AngularJS 1.2和Beyond）的异同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些链接将带您进入正确的问答页面：</font></font></p>

<ul>
<li><a href="http://www.youtube.com/watch?v=W13qDdJDHp8&amp;feature=share&amp;t=56m34s"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.youtube.com/watch?v=W13qDdJDHp8&amp;feature=share&amp;t=56m34s</font></font></a></li>
<li><a href="http://www.youtube.com/watch?v=W13qDdJDHp8&amp;feature=share&amp;t=59m8s"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.youtube.com/watch?v=W13qDdJDHp8&amp;feature=share&amp;t=59m8s</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
