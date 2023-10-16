---
layout: question
title:  如何基于AngularJS部分视图动态更改标头？
date:   2020-03-17T03:46:03.000Z
description: 我正在使用ng-view来包含AngularJS部分视图，并且我想根据所包含的视图来更新页面标题和h1标头标签。但是，这些超出了部分视图控制器的范围，因此...
img: 
author: 西里小哥
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用ng-view来包含AngularJS部分视图，并且我想根据所包含的视图来更新页面标题和h1标头标签。</font><font style="vertical-align: inherit;">但是，这些超出了部分视图控制器的范围，因此我无法弄清楚如何将它们绑定到控制器中的数据集。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是ASP.NET MVC，则可以使用@ViewBag进行此操作，但是我不知道AngularJS中的等效方法。</font><font style="vertical-align: inherit;">我已经搜索了有关共享服务，事件等的信息，但仍然无法正常运行。</font><font style="vertical-align: inherit;">任何修改我的示例使其可行的方法将不胜感激。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的HTML：</font></font></p>

<pre><code>&lt;html data-ng-app="myModule"&gt;<font></font>
&lt;head&gt;<font></font>
&lt;!-- include js files --&gt;<font></font>
&lt;title&gt;&lt;!-- should changed when ng-view changes --&gt;&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;h1&gt;&lt;!-- should changed when ng-view changes --&gt;&lt;/h1&gt;<font></font>
<font></font>
&lt;div data-ng-view&gt;&lt;/div&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的JavaScript：</font></font></p>

<pre><code>var myModule = angular.module('myModule', []);<font></font>
myModule.config(['$routeProvider', function($routeProvider) {<font></font>
    $routeProvider.<font></font>
        when('/test1', {templateUrl: 'test1.html', controller: Test1Ctrl}).<font></font>
        when('/test2', {templateUrl: 'test2.html', controller: Test2Ctrl}).<font></font>
        otherwise({redirectTo: '/test1'});<font></font>
}]);<font></font>
<font></font>
function Test1Ctrl($scope, $http) { $scope.header = "Test 1"; <font></font>
                                  /* ^ how can I put this in title and h1 */ }<font></font>
function Test2Ctrl($scope, $http) { $scope.header = "Test 2"; }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1856篇《如何基于AngularJS部分视图动态更改标头？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现更好，更动态的解决方案是使用$ watch跟踪变量更改，然后更新标题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁村村</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢</font></font><a href="https://stackoverflow.com/users/1238847/tosh-shimayama"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tosh shimayama</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的解决方案。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我认为直接将服务放入并不是很干净</font></font><code>$scope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此这是我的一点改动：</font><a href="http://plnkr.co/edit/QJbuZZnZEDOBcYrJXWWs" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :   </font></font><a href="http://plnkr.co/edit/QJbuZZnZEDOBcYrJXWWs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//plnkr.co/edit/QJbuZZnZEDOBcYrJXWWs</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制器（在我的原始回答中似乎有点愚蠢）创建了一个ActionBar对象，并将其填充到$ scope中。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
该对象负责实际查询服务。</font><font style="vertical-align: inherit;">它还</font><font style="vertical-align: inherit;">从$ scope中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了设置模板URL的调用，而其他控制器可以使用该调用来设置URL。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://github.com/apparentlymart/angularjs-viewhead" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angularjs-viewhead</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">展示了一种仅使用定制指令就每个视图设置标题的机制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以应用于内容已经是视图标题的现有视图元素：</font></font></p>

<pre><code>&lt;h2 view-title&gt;About This Site&lt;/h2&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...或者它可以用作独立元素，在这种情况下，该元素将在呈现的文档中不可见，并且仅用于设置视图标题：</font></font></p>

<pre><code>&lt;view-title&gt;About This Site&lt;/view-title&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该伪指令的内容在根作用域中作为可用</font></font><code>viewTitle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此它可以像其他任何变量一样在title元素上使用：</font></font></p>

<pre><code>&lt;title ng-bind-template="{{viewTitle}} - My Site"&gt;My Site&lt;/title&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以在可以“看到”根范围的任何其他位置使用它。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;h1&gt;{{viewTitle}}&lt;/h1&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案允许通过用于控制演示文稿其余部分的相同机制来设置标题：AngularJS模板。</font><font style="vertical-align: inherit;">这避免了使用此表示逻辑使控制器混乱的需求。</font><font style="vertical-align: inherit;">控制器需要提供将用于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通知</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题的</font><font style="vertical-align: inherit;">任何数据</font><font style="vertical-align: inherit;">，但是模板将最终确定如何显示标题，并且可以正常使用表达式插值和过滤器绑定到范围数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（免责声明：我是该模块的作者，但我在此引用它只是希望它可以帮助其他人解决此问题。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您还可以直接使用javascript设置标题，即</font></font></p>

<pre><code>$window.document.title = someTitleYouCreated;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有数据绑定，但是在放入</font><font style="vertical-align: inherit;">标签有问题</font><font style="vertical-align: inherit;">时就足够</font></font><code>ng-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font><code>&lt;html&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（例如，使用</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在一个位置定义的</font><font style="vertical-align: inherit;">JSP模板</font><font style="vertical-align: inherit;">，但您拥有多个应用程序。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>ng-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">声明</font><font style="vertical-align: inherit;">可为</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">提供根范围</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在控制器中注入</font></font><code>$rootScope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在其上设置标头属性：</font></font></p>

<pre><code>function Test1Ctrl($rootScope, $scope, $http) { $rootScope.header = "Test 1"; }<font></font>
<font></font>
function Test2Ctrl($rootScope, $scope, $http) { $rootScope.header = "Test 2"; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在您的页面中：</font></font></p>

<pre><code>&lt;title ng-bind="header"&gt;&lt;/title&gt;
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
