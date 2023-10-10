---
layout: question
title:  如何使用AngularJS重新加载或重新渲染整个页面
date:   2020-03-19T01:31:53.000Z
description: 在基于几个用户上下文渲染了整个页面并提出了几个$http请求之后，我希望用户能够切换上下文并再次重新渲染所有内容（重新发送所有$http请求等）。如果我只...
img: 
author: Pro神无
category: question
answer: 6
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在基于几个用户上下文渲染了整个页面并提出了几个</font></font><code>$http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求之后，我希望用户能够切换上下文并再次重新渲染所有内容（重新发送所有</font></font><code>$http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求等）。</font><font style="vertical-align: inherit;">如果我只是将用户重定向到其他地方，则一切正常：</font></font></p>

<pre><code>$scope.on_impersonate_success = function(response) {<font></font>
  //$window.location.reload(); // This cancels any current request<font></font>
  $location.path('/'); // This works as expected, if path != current_path<font></font>
};<font></font>
<font></font>
$scope.impersonate = function(username) {<font></font>
  return auth.impersonate(username)<font></font>
    .then($scope.on_impersonate_success, $scope.on_auth_failed);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用</font></font><code>$window.location.reload()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则</font><font style="vertical-align: inherit;">正在等待响应</font><font style="vertical-align: inherit;">的</font></font><code>$http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求中的</font><font style="vertical-align: inherit;">某些</font><font style="vertical-align: inherit;">请求</font></font><code>auth.impersonate(username)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被取消，因此无法使用。</font><font style="vertical-align: inherit;">此外，骇客</font></font><code>$location.path($location.path())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也无法运作（一无所获）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有另一种方法可以重新渲染页面，而无需再次手动发出所有请求吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2210篇《如何使用AngularJS重新加载或重新渲染整个页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经为这个问题进行了数月的艰苦奋斗，而对我来说唯一有效的解决方案是：</font></font></p>

<pre><code>var landingUrl = "http://www.ytopic.es"; //URL complete<font></font>
$window.location.href = landingUrl;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下代码，而无需向用户发送密切的重新加载通知。</font><font style="vertical-align: inherit;">它将呈现页面  </font></font></p>

<pre><code>var currentPageTemplate = $route.current.templateUrl;<font></font>
$templateCache.remove(currentPageTemplate);<font></font>
$window.location.reload();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到了用于删除缓存和重新加载页面的工作代码  </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视图</font></font></strong></p>

<pre><code>        &lt;a class="btn" ng-click="reload()"&gt;<font></font>
            &lt;i class="icon-reload"&gt;&lt;/i&gt; <font></font>
        &lt;/a&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制者</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注入器：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ scope，$ state，$ stateParams，$ templateCache</font></font></strong></p>

<pre><code>       $scope.reload = function() { // To Reload anypage<font></font>
            $templateCache.removeAll();     <font></font>
            $state.transitionTo($state.current, $stateParams, { reload: true, inherit: true, notify: true });<font></font>
        };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端梅</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><code>$route.reload()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将重新初始化控制器，而不是服务。</font><font style="vertical-align: inherit;">如果要重置应用程序的整体状态，可以使用：</font></font></p>

<pre><code>$window.location.reload();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/location/reload"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准的DOM方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以访问注入</font></font><a href="https://docs.angularjs.org/api/ng/service/$window"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ window</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要确保从服务器重新加载页面（例如，当您使用Django或其他Web框架时），并且想要新的服务器端渲染，请</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照</font><a href="https://developer.mozilla.org/en-US/docs/Web/API/location/reload"><font style="vertical-align: inherit;">docs中的</font></a></font><code>reload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font><font style="vertical-align: inherit;">作为参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">给</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于这需要与服务器交互，因此它会变慢，因此仅在必要时才这样做</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/location/reload"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角度2</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上述适用于角1.我不使用角2，貌似服务不同有，有</font></font><code>Router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>Location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>DOCUMENT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我没有在那里测试不同的行为</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长蛋蛋Davaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了进行记录，要强制angular重新呈现当前页面，可以使用：</font></font></p>

<pre><code>$route.reload();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据AngularJS </font></font><a href="http://docs.angularjs.org/api/ngRoute/service/$route" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使$ location保持不变，也使$ route服务重新加载当前路由。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果，ngView创建了新的作用域，重新实例化了控制器。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProA</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角度ui路由器，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将是最佳解决方案。</font></font></p>

<pre><code>$scope.myLoadingFunction = function() {<font></font>
    $state.reload();<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
