---
layout: question
title:  数据绑定在AngularJS中如何工作？
date:   2020-03-09T11:07:25.000Z
description: 数据绑定在AngularJS框架中如何工作？我尚未在其网站上找到技术细节。数据从视图传播到模型时，或多或少地清楚了它是如何工作的。但是，Angular...
img: 
author: 神奇西里泡芙
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据绑定在</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">框架中</font><font style="vertical-align: inherit;">如何工作</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尚未在</font></font><a href="http://angularjs.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其网站</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上找到技术细节</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">数据从视图传播到模型时，或多或少地清楚了它是如何工作的。</font><font style="vertical-align: inherit;">但是，AngularJS如何在没有设置者和获取者的情况下跟踪模型属性的变化？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现有些</font></font><a href="https://stackoverflow.com/questions/1029241/javascript-object-watch-for-all-browsers"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript观察</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序可以完成这项工作。</font><font style="vertical-align: inherit;">但是</font></font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_6" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 6</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Internet_Explorer_7" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 7</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持它们</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那么AngularJS如何知道我更改了以下内容并在视图中反映了此更改？</font></font></p>

<pre><code>myobject.myproperty="new value";
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第214篇《数据绑定在AngularJS中如何工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular.js为我们在视图中创建的每个模型创建一个观察者。</font><font style="vertical-align: inherit;">每当更改模型时，都会向该模型添加“ ng-dirty”类，因此观察者将观察所有具有“ ng-dirty”类的模型，并在控制器中更新其值，反之亦然。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi米亚斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJs支持</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双向数据绑定</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
表示您可以访问数据</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">View-&gt; Controller</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Controller-&gt; View</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于前</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）</font></font></strong></p>

<pre><code>// If $scope have some value in Controller. <font></font>
$scope.name = "Peter";<font></font>
<font></font>
// HTML<font></font>
&lt;div&gt; {{ name }} &lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O / P</font></font></strong></p>

<pre><code>Peter
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>ng-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">绑定数据</font><font style="vertical-align: inherit;">：</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-2）</font></font></strong></p>

<pre><code>&lt;input ng-model="name" /&gt;<font></font>
<font></font>
&lt;div&gt; {{ name }} &lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，无论输入用户提供什么，它都将在</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签中</font><font style="vertical-align: inherit;">可见</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将html的输入绑定到控制器：</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-3）</font></font></strong></p>

<pre><code>&lt;form name="myForm" ng-submit="registration()"&gt;<font></font>
   &lt;label&gt; Name &lt;/lbel&gt;<font></font>
   &lt;input ng-model="name" /&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制器中</font><font style="vertical-align: inherit;">使用输入</font><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>$scope.name = {};<font></font>
<font></font>
$scope.registration = function() {<font></font>
   console.log("You will get the name here ", $scope.name);<font></font>
};<font></font>
</code></pre>

<p><code>ng-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定我们的视图并将其呈现为expression </font></font><code>{{ }}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br>
<code>ng-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在视图中向用户显示并与用户进行交互的数据。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此在AngularJs中绑定数据很容易。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个使用输入字段与AngularJS进行数据绑定的示例。</font><font style="vertical-align: inherit;">我稍后再解释</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML代码</font></font></strong></p>

<pre><code>&lt;div ng-app="myApp" ng-controller="myCtrl" class="formInput"&gt;<font></font>
     &lt;input type="text" ng-model="watchInput" Placeholder="type something"/&gt;<font></font>
     &lt;p&gt;{{watchInput}}&lt;/p&gt; <font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS代码</font></font></strong></p>

<pre><code>myApp = angular.module ("myApp", []);<font></font>
myApp.controller("myCtrl", ["$scope", function($scope){<font></font>
  //Your Controller code goes here<font></font>
}]);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您在上面的示例中看到的那样，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><code>ng-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">侦听和观察HTML元素（尤其是</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段）</font><font style="vertical-align: inherit;">上发生的情况</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当某事发生时，做某事。</font><font style="vertical-align: inherit;">在我们的案例中，</font></font><code>ng-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用髭标记绑定到我们的视图</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">输入字段中键入的任何内容都会立即显示在屏幕上。</font><font style="vertical-align: inherit;">这就是使用最简单形式的AngularJS进行数据绑定的好处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="http://codepen.io/chrisN/pen/YqEmOO" rel="noreferrer"><font style="vertical-align: inherit;">Codepen</font></a><font style="vertical-align: inherit;">上查看工作示例
</font></font><a href="http://codepen.io/chrisN/pen/YqEmOO" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单向数据绑定是一种从数据模型中获取值并将其插入HTML元素的方法。</font><font style="vertical-align: inherit;">无法从视图更新模型。</font><font style="vertical-align: inherit;">它在经典模板系统中使用。</font><font style="vertical-align: inherit;">这些系统仅在一个方向上绑定数据。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular应用程序中的数据绑定是模型和视图组件之间的数据自动同步。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据绑定使您可以将模型视为应用程序中的单一事实来源。</font><font style="vertical-align: inherit;">该视图始终是模型的投影。</font><font style="vertical-align: inherit;">如果模型发生更改，则视图将反映更改，反之亦然。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS借助三个强大的函数处理数据绑定机制：       </font></font><a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ watch（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ digest（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ apply（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">大多数时候，AngularJS都会调用$ scope。$ watch（）和$ scope。$ digest（），但是在某些情况下，您可能必须手动调用这些函数才能使用新值进行更新。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ watch（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：-</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该函数用于观察$ scope变量的变化。</font><font style="vertical-align: inherit;">它接受三个参数：表达式，侦听器和相等对象，其中侦听器和相等对象是可选参数。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ digest（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此函数遍历$ scope对象及其子$ scope对象</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     （如果有）中的所有监视。</font><font style="vertical-align: inherit;">当$ digest（）遍历表时，它将检查表达式的值是否已更改。</font><font style="vertical-align: inherit;">如果值已更改，AngularJS将使用新值和旧值调用侦听器。</font><font style="vertical-align: inherit;">每当AngularJS认为必要时，都会调用$ digest（）函数。</font><font style="vertical-align: inherit;">例如，在单击按钮后或在进行AJAX调用后。</font><font style="vertical-align: inherit;">在某些情况下，AngularJS可能不会为您调用$ digest（）函数。</font><font style="vertical-align: inherit;">在这种情况下，您必须自己调用它。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ apply（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular只会自动魔术地更新AngularJS上下文中的那些模型更改。</font><font style="vertical-align: inherit;">当您确实在Angular上下文之外的任何模型中进行更改（例如浏览器DOM事件，setTimeout，XHR或第三方库）时，则需要通过手动调用$ apply（）来通知Angular更改。</font><font style="vertical-align: inherit;">当$ apply（）函数调用完成时，AngularJS在内部调用$ digest（），因此所有数据绑定都将更新。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">碰巧我需要将一个人的数据模型与表单联系起来，我所做的是将数据直接与表单进行映射。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果模型具有以下内容：</font></font></p>

<pre><code>$scope.model.people.name
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">形式的控制输入：</font></font></p>

<pre><code>&lt;input type="text" name="namePeople" model="model.people.name"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，如果您修改对象控制器的值，这将自动反映在视图中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过的模型从服务器数据中更新的示例是，当您要求邮政编码和基于书面负载的邮政编码时，列出了与该视图相关联的殖民地和城市列表，并且默认情况下为用户设置了第一个值。</font><font style="vertical-align: inherit;">我做得很好，发生的事情是，</font></font><code>angularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时需要几秒钟来刷新模型，为此，您可以在显示数据时放置微调器。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，没有定期检查</font></font><code>Scope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加到它的对象是否有任何更改。</font><font style="vertical-align: inherit;">并非监视所有附加到作用域的对象。</font><font style="vertical-align: inherit;">范围原型保持一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ watchers</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>Scope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font></font><code>$$watchers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>$digest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被调用</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">对此进行</font><font style="vertical-align: inherit;">迭代</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular为$$ watcher的每一个添加了一个watcher </font></font></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{expression}}-在您的模板（以及存在表达式的其他任何地方）中或当我们定义ng-model时。 </font></font><br></li>
  <li>$scope.$watch(‘expression/function’) — In your JavaScript we can just attach a scope object for angular to watch. </li>
  </ol>
</blockquote>

<p><strong>$watch</strong> function takes in three parameters:<br></p>

<blockquote>
  <ol>
  <li><p>First one is a watcher function which just returns the object or we can just add an expression. <br></p></li>
  <li><p>Second one is a listener function which will be called when there is a change in the object. All the things like DOM changes will be implemented in this function.<br></p></li>
  <li><p>The third being an optional parameter which takes in a boolean . If its true , angular deep watches the object &amp; if its false Angular just does a reference watching on the object.
    Rough Implementation of $watch looks like this </p></li>
  </ol>
</blockquote>

<pre><code>Scope.prototype.$watch = function(watchFn, listenerFn) {<font></font>
   var watcher = {<font></font>
       watchFn: watchFn,<font></font>
       listenerFn: listenerFn || function() { },<font></font>
       last: initWatchVal  // initWatchVal is typically undefined<font></font>
   };<font></font>
   this.$$watchers.push(watcher); // pushing the Watcher Object to Watchers  <font></font>
};<font></font>
</code></pre>

<p>There is an interesting thing in Angular called Digest Cycle. The $digest cycle starts as a result of a call to $scope.$digest(). Assume that you change a $scope model in a handler function through the ng-click directive. In that case AngularJS automatically triggers a $digest cycle by calling $digest().In addition to ng-click, there are several other built-in directives/services that let you change models (e.g. ng-model, $timeout, etc) and automatically trigger a $digest cycle.  The rough implementation of $digest looks like this.</p>

<pre><code>Scope.prototype.$digest = function() {<font></font>
      var dirty;<font></font>
      do {<font></font>
          dirty = this.$$digestOnce();<font></font>
      } while (dirty);<font></font>
}<font></font>
Scope.prototype.$$digestOnce = function() {<font></font>
   var self = this;<font></font>
   var newValue, oldValue, dirty;<font></font>
   _.forEach(this.$$watchers, function(watcher) {<font></font>
          newValue = watcher.watchFn(self);<font></font>
          oldValue = watcher.last;   // It just remembers the last value for dirty checking<font></font>
          if (newValue !== oldValue) { //Dirty checking of References <font></font>
   // For Deep checking the object , code of Value     <font></font>
   // based checking of Object should be implemented here<font></font>
             watcher.last = newValue;<font></font>
             watcher.listenerFn(newValue,<font></font>
                  (oldValue === initWatchVal ? newValue : oldValue),<font></font>
                   self);<font></font>
          dirty = true;<font></font>
          }<font></font>
     });<font></font>
   return dirty;<font></font>
 };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们使用JavaScript的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数更新范围模型，则Angular无法知道您可能会更改的内容。</font><font style="vertical-align: inherit;">在这种情况下，我们有责任手动调用$ apply（），这将触发一个$ digest循环。</font><font style="vertical-align: inherit;">同样，如果您有一个设置DOM事件侦听器并更改处理程序函数内某些模型的指令，则需要调用$ apply（）以确保更改生效。</font><font style="vertical-align: inherit;">$ apply的主要思想是我们可以执行一些不了解Angular的代码，这些代码可能仍会改变作用域。</font><font style="vertical-align: inherit;">如果将代码包装在$ apply中，它将调用$ digest（）。</font><font style="vertical-align: inherit;">$ apply（）的粗略实现。</font></font></p>

<pre><code>Scope.prototype.$apply = function(expr) {<font></font>
       try {<font></font>
         return this.$eval(expr); //Evaluating code in the context of Scope<font></font>
       } finally {<font></font>
         this.$digest();<font></font>
       }<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图片解释： </font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据绑定需要映射</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范围中的引用与模板中的引用不完全相同。</font><font style="vertical-align: inherit;">在对两个对象进行数据绑定时，您需要第三个对象来监听第一个对象并修改另一个对象。</font></font></p>

<p><a href="https://i.stack.imgur.com/zcMvf.png" rel="noreferrer"><img src="https://i.stack.imgur.com/zcMvf.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，当您修改时</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以触摸</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">data-ref3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">经典的数据绑定机制将改变</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">data-ref4</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那么其他</font></font><code>{{data}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式将</font><font style="vertical-align: inherit;">如何</font><font style="vertical-align: inherit;">移动？</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件导致$ digest（）</font></font></h2>

<p><a href="https://i.stack.imgur.com/IYRLT.png" rel="noreferrer"><img src="https://i.stack.imgur.com/IYRLT.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角保持</font></font><code>oldValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>newValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每一个结合。</font><font style="vertical-align: inherit;">并且在每个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular事件之后</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，著名的</font></font><code>$digest()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环将检查WatchList以查看是否发生了更改。</font><font style="vertical-align: inherit;">这些</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角的事件</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>ng-click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>ng-change</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>$http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成的... </font></font><code>$digest()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要任何将循环</font></font><code>oldValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从不同</font></font><code>newValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上一张图片中，将注意到data-ref1和data-ref2已更改。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点像鸡蛋和鸡肉。</font><font style="vertical-align: inherit;">您永远不会知道谁开始，但是希望它在大多数情况下都能按预期运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一点是，您可以轻松理解简单绑定对内存和CPU的深层影响。</font><font style="vertical-align: inherit;">希望台式机足够胖以应付这一问题。</font><font style="vertical-align: inherit;">手机不是那么强大。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我自己想了一段时间。</font><font style="vertical-align: inherit;">没有二传手，如何</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意到</font></font><code>$scope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">物体的</font><font style="vertical-align: inherit;">变化</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">它会轮询他们吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的实际作用是：修改过模型的任何“正常”位置都已经从的胆量中</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过</font><font style="vertical-align: inherit;">，因此它</font><font style="vertical-align: inherit;">在代码运行后</font><font style="vertical-align: inherit;">会自动</font><font style="vertical-align: inherit;">为您</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">假设您的控制器具有某种连接到</font></font><code>ng-click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某个元素的方法。</font><font style="vertical-align: inherit;">由于</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您将该方法的调用连接在一起，因此有机会</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在适当的位置进行操作。</font><font style="vertical-align: inherit;">同样，出现在正确的意见表达，这些被执行</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它确实是这样的</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当文档讨论必须</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font><font style="vertical-align: inherit;">调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之外的</font></font><code>AngularJS</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font><em><font style="vertical-align: inherit;">时</font></em><font style="vertical-align: inherit;">，它是在讨论运行时并非源于</font></font><code>AngularJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用栈本身的</font><font style="vertical-align: inherit;">代码</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的基本理解。</font><font style="vertical-align: inherit;">可能是错误的！</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将函数（返回要监视的事物）传递给</font></font><code>$watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">来监视项目</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对观看项目的更改必须在该</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">包装的代码块内进行</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在方法的末尾，将</font><font style="vertical-align: inherit;">调用该方法</font><font style="vertical-align: inherit;">，</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>$digest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法将遍历每个手表，并检查自上次</font></font><code>$digest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">以来它们是否已更改</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果发现任何更改，则再次调用摘要，直到所有更改稳定下来。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在常规开发中，HTML中的数据绑定语法会告诉AngularJS编译器为您创建监视，并且控制器方法已在内部运行</font></font><code>$apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，对于应用程序开发人员而言，这一切都是透明的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Misko已经很好地描述了数据绑定的工作方式，但是我想对数据绑定的性能问题发表自己的看法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Misko所说，大约2000个绑定是您开始发现问题的地方，但是无论如何您在页面上都不应拥有超过2000条信息。</font><font style="vertical-align: inherit;">这可能是正确的，但并非每个数据绑定都对用户可见。</font><font style="vertical-align: inherit;">一旦开始使用双向绑定构建任何类型的窗口小部件或数据网格，就可以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松实现</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2000个绑定，而不会出现不良的UX。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，考虑一个组合框，您可以在其中键入文本以过滤可用选项。</font><font style="vertical-align: inherit;">这种控件可能有约150个项目，但仍然非常有用。</font><font style="vertical-align: inherit;">如果它具有某些额外功能（例如，当前选定选项上的特定类），则每个选项将开始获得3-5个绑定。</font><font style="vertical-align: inherit;">将其中三个小部件放在页面上（例如，一个用于选择国家/地区，另一个用于选择该国家/地区的城市，而第三个用于选择酒店），您已经在1000到2000个绑定之间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或考虑公司Web应用程序中的数据网格。</font><font style="vertical-align: inherit;">每页50行并非不合理，每行可以有10到20列。</font><font style="vertical-align: inherit;">如果使用ng-repeats构建它，并且/或者在某些使用某些绑定的单元中包含信息，则仅使用此网格就可以达到2000个绑定。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现</font><font style="vertical-align: inherit;">在使用AngularJS时</font><font style="vertical-align: inherit;">这是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巨大的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题，到目前为止，我唯一能找到的解决方案是在不使用双向绑定的情况下构造小部件，而不是使用ngOnce，注销观察者和类似技巧或构造使用jQuery和DOM操作构建DOM的指令。</font><font style="vertical-align: inherit;">我觉得这违背了首先使用Angular的目的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很想听听有关其他方法的建议，但是也许我应该写我自己的问题。</font><font style="vertical-align: inherit;">我想对此发表评论，但事实证明它太长了……</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR</font></font></strong> <br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
数据绑定可能会导致复杂页面上的性能问题。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
