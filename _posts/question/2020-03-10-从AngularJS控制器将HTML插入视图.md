---
layout: question
title:  从AngularJS控制器将HTML插入视图
date:   2020-03-10T13:42:49.000Z
description: 是否可以在AngularJS控制器中创建HTML片段并将该HTML显示在视图中？这是因为需要将不一致的JSON Blob转换为嵌套的id   valu...
img: 
author: 斯丁JinJin
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在AngularJS控制器中创建HTML片段并将该HTML显示在视图中？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为需要将不一致的JSON Blob转换为嵌套的</font></font><code>id : value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对对</font><font style="vertical-align: inherit;">列表</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，在控制器中创建了HTML，现在我希望显示它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个模型属性，但是如果不打印HTML，就无法在视图中呈现它。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来问题出在将创建的HTML角化为引号内的字符串而引起。</font><font style="vertical-align: inherit;">将尝试找到解决此问题的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制器示例：</font></font></p>

<pre><code>var SomeController = function () {<font></font>
<font></font>
    this.customHtml = '&lt;ul&gt;&lt;li&gt;render me please&lt;/li&gt;&lt;/ul&gt;';<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例视图：</font></font></p>

<pre><code>&lt;div ng:bind="customHtml"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    "&lt;ul&gt;&lt;li&gt;render me please&lt;/li&gt;&lt;/ul&gt;"<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋A</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 7 + ionic 4中，可以使用“ [innerHTML]”显示HTML内容：</font></font></p>

<pre><code>&lt;div [innerHTML]="htmlContent"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有帮助。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需简单使用</font></font><code>[innerHTML]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>&lt;div [innerHTML]="htmlString"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您需要使用之前</font></font><code>ng-bind-html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Harry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-include</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div class="col-sm-9 TabContent_container" ng-include="template/custom.html"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ ng-show”</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来显示隐藏此模板数据。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是通过遵循</font></font><a href="https://docs.angularjs.org/api/ng/directive/ngBindHtml"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular（v1.4）docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ngBindHtml做到了这一点</font><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>&lt;div ng-bind-html="expression"&gt;&lt;/div&gt; <font></font>
and expression can be "&lt;ul&gt;&lt;li&gt;render me please&lt;/li&gt;&lt;/ul&gt;"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保在模块的依赖项中包括ngSanitize。</font><font style="vertical-align: inherit;">然后它应该工作正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML上</font></font></p>

<pre><code>&lt;div ng-controller="myAppController as myCtrl"&gt;<font></font>
<font></font>
&lt;div ng-bind-html-unsafe="myCtrl.comment.msg"&gt;&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>&lt;div ng-bind-html="myCtrl.comment.msg"&gt;&lt;/div
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制器上</font></font></p>

<pre><code>mySceApp.controller("myAppController", function myAppController( $sce) {<font></font>
<font></font>
this.myCtrl.comment.msg = $sce.trustAsHtml(html);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以与 </font></font><code>$scope.comment.msg = $sce.trustAsHtml(html);</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我今天尝试过，我发现的唯一方法是</font></font></p>

<p><code>&lt;div ng-bind-html-unsafe="expression"&gt;&lt;/div&gt;</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
