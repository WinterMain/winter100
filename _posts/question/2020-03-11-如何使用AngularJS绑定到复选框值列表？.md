---
layout: question
title:  如何使用AngularJS绑定到复选框值列表？
date:   2020-03-11T07:23:51.000Z
description: 我有几个复选框：<input type='checkbox' value="apple" checked><input type='checkbox...
img: 
author: 西门神奇
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有几个复选框：</font></font></p>

<pre><code>&lt;input type='checkbox' value="apple" checked&gt;<font></font>
&lt;input type='checkbox' value="orange"&gt;<font></font>
&lt;input type='checkbox' value="pear" checked&gt;<font></font>
&lt;input type='checkbox' value="naartjie"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想绑定到控制器中的列表，以便每当更改复选框时，控制器都维护所有检查值的列表，例如</font></font><code>['apple', 'pear']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-model似乎只能将一个复选框的值绑定到控制器中的变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有另一种方法可以使四个复选框绑定到控制器中的列表吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第728篇《如何使用AngularJS绑定到复选框值列表？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中（假设复选框位于表中每一行的第一列中）。</font></font></p>

<pre><code>&lt;tr ng-repeat="item in fruits"&gt;<font></font>
    &lt;td&gt;&lt;input type="checkbox" ng-model="item.checked" ng-click="getChecked(item)"&gt;&lt;/td&gt;<font></font>
    &lt;td ng-bind="fruit.name"&gt;&lt;/td&gt;<font></font>
    &lt;td ng-bind="fruit.color"&gt;&lt;/td&gt;<font></font>
    ...<font></font>
&lt;/tr&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>controllers.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中：</font></font></p>

<pre><code>// The data initialization part...<font></font>
$scope.fruits = [<font></font>
    {<font></font>
      name: ....,<font></font>
      color:....<font></font>
    },<font></font>
    {<font></font>
      name: ....,<font></font>
      color:....<font></font>
    }<font></font>
     ...<font></font>
    ];<font></font>
<font></font>
// The checked or not data is stored in the object array elements themselves<font></font>
$scope.fruits.forEach(function(item){<font></font>
    item.checked = false;<font></font>
});<font></font>
<font></font>
// The array to store checked fruit items<font></font>
$scope.checkedItems = [];<font></font>
<font></font>
// Every click on any checkbox will trigger the filter to find checked items<font></font>
$scope.getChecked = function(item){<font></font>
    $scope.checkedItems = $filter("filter")($scope.fruits,{checked:true});<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下解决方案似乎是一个不错的选择，</font></font></p>

<pre><code>&lt;label ng-repeat="fruit in fruits"&gt;<font></font>
  &lt;input<font></font>
    type="checkbox"<font></font>
    ng-model="fruit.checked"<font></font>
    ng-value="true"<font></font>
  &gt; {{fruit.fruitName}}<font></font>
&lt;/label&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且在控制器中模型值</font></font><code>fruits</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是这样</font></font></p>

<pre><code>$scope.fruits = [<font></font>
  {<font></font>
    "name": "apple",<font></font>
    "checked": true<font></font>
  },<font></font>
  {<font></font>
    "name": "orange"<font></font>
  },<font></font>
  {<font></font>
    "name": "grapes",<font></font>
    "checked": true<font></font>
  }<font></font>
];<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个简单的指令可能像：</font></font></p>

<pre><code>var appModule = angular.module("appModule", []);<font></font>
<font></font>
appModule.directive("checkList", [function () {<font></font>
return {<font></font>
    restrict: "A",<font></font>
    scope: {<font></font>
        selectedItemsArray: "=",<font></font>
        value: "@"<font></font>
    },<font></font>
    link: function (scope, elem) {<font></font>
        scope.$watchCollection("selectedItemsArray", function (newValue) {<font></font>
            if (_.contains(newValue, scope.value)) {<font></font>
                elem.prop("checked", true);<font></font>
            } else {<font></font>
                elem.prop("checked", false);<font></font>
            }<font></font>
        });<font></font>
        if (_.contains(scope.selectedItemsArray, scope.value)) {<font></font>
            elem.prop("checked", true);<font></font>
        }<font></font>
        elem.on("change", function () {<font></font>
            if (elem.prop("checked")) {<font></font>
                if (!_.contains(scope.selectedItemsArray, scope.value)) {<font></font>
                    scope.$apply(<font></font>
                        function () {<font></font>
                            scope.selectedItemsArray.push(scope.value);<font></font>
                        }<font></font>
                    );<font></font>
                }<font></font>
            } else {<font></font>
                if (_.contains(scope.selectedItemsArray, scope.value)) {<font></font>
                    var index = scope.selectedItemsArray.indexOf(scope.value);<font></font>
                    scope.$apply(<font></font>
                        function () {<font></font>
                            scope.selectedItemsArray.splice(index, 1);<font></font>
                        });<font></font>
                }<font></font>
            }<font></font>
            console.log(scope.selectedItemsArray);<font></font>
        });<font></font>
    }<font></font>
};<font></font>
}]);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制器：</font></font></p>

<pre><code>appModule.controller("sampleController", ["$scope",<font></font>
  function ($scope) {<font></font>
    //#region "Scope Members"<font></font>
    $scope.sourceArray = [{ id: 1, text: "val1" }, { id: 2, text: "val2" }];<font></font>
    $scope.selectedItems = ["1"];<font></font>
    //#endregion<font></font>
    $scope.selectAll = function () {<font></font>
      $scope.selectedItems = ["1", "2"];<font></font>
  };<font></font>
    $scope.unCheckAll = function () {<font></font>
      $scope.selectedItems = [];<font></font>
    };<font></font>
}]);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和HTML：</font></font></p>

<pre><code>&lt;ul class="list-unstyled filter-list"&gt;<font></font>
&lt;li data-ng-repeat="item in sourceArray"&gt;<font></font>
    &lt;div class="checkbox"&gt;<font></font>
        &lt;label&gt;<font></font>
            &lt;input type="checkbox" check-list selected-items-array="selectedItems" value="{{item.id}}"&gt;<font></font>
            {{item.text}}<font></font>
        &lt;/label&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/li&gt;<font></font>
</code></pre>

<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还包括一个Plunker：</font><a href="http://plnkr.co/edit/XnFtyij4ed6RyFwnFN6V?p=preview" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://plnkr.co/edit/XnFtyij4ed6RyFwnFN6V?p=preview</font></font><a href="http://plnkr.co/edit/XnFtyij4ed6RyFwnFN6V?p=preview" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim达蒙阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最简单的解决方法是在指定了“多个”的情况下使用“选择”：</font></font></p>

<pre><code>&lt;select ng-model="selectedfruit" multiple ng-options="v for v in fruit"&gt;&lt;/select&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，我认为您必须处理列表以构造列表（通过</font></font><code>$watch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将模型数组与复选框绑定在一起）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签出可有效管理复选框列表的指令。</font><font style="vertical-align: inherit;">我希望这个对你有用。
</font></font><a href="https://vitalets.github.io/checklist-model/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清单模型</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用字符串</font></font><code>$index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以帮助使用选定值的哈希表：</font></font></p>

<pre><code>&lt;ul&gt;<font></font>
    &lt;li ng-repeat="someItem in someArray"&gt;<font></font>
        &lt;input type="checkbox" ng-model="someObject[$index.toString()]" /&gt;<font></font>
    &lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，ng-model对象将使用代表索引的键进行更新。</font></font></p>

<pre><code>$scope.someObject = {};
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过了一会儿</font></font><code>$scope.someObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该看起来像：</font></font></p>

<pre><code>$scope.someObject = {<font></font>
     0: true,<font></font>
     4: false,<font></font>
     1: true<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法并非在所有情况下都适用，但易于实现。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于您接受了不使用列表的答案，因此，我认为我的评论问题的答案是“不，它不必是列表”。</font><font style="vertical-align: inherit;">我还给人一种印象，就是您可能正在使用HTML服务器端，因为示例HTML中出现了“ checked”（如果使用ng-model来对复选框进行建模，则不需要这样做）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，这是我问这个问题时想到的，还假设您正在生成HTML服务器端：</font></font></p>

<pre><code>&lt;div ng-controller="MyCtrl" <font></font>
 ng-init="checkboxes = {apple: true, orange: false, pear: true, naartjie: false}"&gt;<font></font>
    &lt;input type="checkbox" ng-model="checkboxes.apple"&gt;apple<font></font>
    &lt;input type="checkbox" ng-model="checkboxes.orange"&gt;orange<font></font>
    &lt;input type="checkbox" ng-model="checkboxes.pear"&gt;pear<font></font>
    &lt;input type="checkbox" ng-model="checkboxes.naartjie"&gt;naartjie<font></font>
    &lt;br&gt;{{checkboxes}}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-init允许服务器端生成的HTML最初设置某些复选框。</font></font></p>

<p><a href="http://jsfiddle.net/mrajcok/CBmgM/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
