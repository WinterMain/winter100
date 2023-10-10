---
layout: question
title:  AngularJS ngClass条件
date:   2020-03-18T07:57:14.000Z
description: 有什么办法可以表达ng-class条件表达式吗？例如，我尝试了以下方法：<span ng-class="{test  'obj.value1 ==...
img: 
author: 猿神奇梅
category: question
answer: 1
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么办法可以表达</font></font><a href="https://docs.angularjs.org/api/ng/directive/ngClass" rel="noreferrer"><code>ng-class</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件</font><font style="vertical-align: inherit;">表达式</font><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我尝试了以下方法：</font></font></p>

<pre><code>&lt;span ng-class="{test: 'obj.value1 == \'someothervalue\''}"&gt;test&lt;/span&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码的问题在于，无论如何</font></font><code>obj.value1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，类测试始终应用于元素。</font><font style="vertical-align: inherit;">这样做：</font></font></p>

<pre><code>&lt;span ng-class="{test: obj.value2}"&gt;test&lt;/span&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要</font></font><code>obj.value2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不等于真实值，就不会应用该类。</font><font style="vertical-align: inherit;">现在，我可以通过执行以下操作解决第一个示例中的问题：</font></font></p>

<pre><code>&lt;span ng-class="{test: checkValue1()}"&gt;test&lt;/span&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>checkValue1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数如下所示：</font></font></p>

<pre><code>$scope.checkValue1 = function() {<font></font>
  return $scope.obj.value === 'somevalue';<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是想知道这</font></font><code>ng-class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否应该工作。</font><font style="vertical-align: inherit;">我还在建立一个自定义指令，在其中我想做类似的事情。</font><font style="vertical-align: inherit;">但是，我找不到观察表达式的方法（也许这是不可能的，以及它如此工作的原因）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><font style="vertical-align: inherit;">显示我的意思</font><font style="vertical-align: inherit;">的</font></font><a href="http://plnkr.co/edit/iSh0t8swDEyGbh7ylZg2?p=preview" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">plnkr</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2044篇《AngularJS ngClass条件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当有人必须运行复杂的逻辑来确定适当的CSS类时，将功能与ng-class一起使用是一个不错的选择。</font></font></p>

<p><a href="http://jsfiddle.net/ms403Ly8/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/ms403Ly8/2/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></strong></p>

<pre><code>&lt;div ng-app&gt;<font></font>
  &lt;div ng-controller="testCtrl"&gt;<font></font>
        &lt;div ng-class="getCSSClass()"&gt;Testing ng-class using function&lt;/div&gt;       <font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></strong></p>

<pre><code>.testclass { Background: lightBlue}
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function testCtrl($scope) {<font></font>
    $scope.getCSSClass = function() {<font></font>
     return "testclass ";<font></font>
  }     <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
