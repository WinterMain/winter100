---
layout: question
title:  使用AngularJS的ng-options进行选择
date:   2020-03-14T10:00:24.000Z
description: 我在其他帖子中已经读过，但是我无法弄清楚。我有一个数组$scope.items = \[   {ID  '000001', Title  'Chi...
img: 
author: 米亚GO
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在其他帖子中已经读过，但是我无法弄清楚。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个数组</font></font></p>

<pre><code>$scope.items = [<font></font>
   {ID: '000001', Title: 'Chicago'},<font></font>
   {ID: '000002', Title: 'New York'},<font></font>
   {ID: '000003', Title: 'Washington'},<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将其呈现为：</font></font></p>

<pre><code>&lt;select&gt;<font></font>
  &lt;option value="000001"&gt;Chicago&lt;/option&gt;<font></font>
  &lt;option value="000002"&gt;New York&lt;/option&gt;<font></font>
  &lt;option value="000003"&gt;Washington&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也想选择ID = 000002的选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了</font></font><em><a href="http://docs.angularjs.org/api/ng.directive:select" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">select</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试过，但是我无法弄清楚。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1587篇《使用AngularJS的ng-options进行选择》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁A</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果每个选项都需要自定义标题，</font></font><code>ng-options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则不适用。</font><font style="vertical-align: inherit;">而是</font></font><code>ng-repeat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与选项一起</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;select ng-model="myVariable"&gt;<font></font>
  &lt;option ng-repeat="item in items"<font></font>
          value="{{item.ID}}"<font></font>
          title="Custom title: {{item.Title}} [{{item.ID}}]"&gt;<font></font>
       {{item.Title}}<font></font>
  &lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某些原因，AngularJS会让我感到困惑。</font><font style="vertical-align: inherit;">他们的文档对此非常恐怖。</font><font style="vertical-align: inherit;">欢迎提供更多更好的变体示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我对本·莱什的回答略有不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的数据收集看起来像这样：</font></font></p>

<pre><code>items =<font></font>
[<font></font>
   { key:"AD",value:"Andorra" }<font></font>
,  { key:"AI",value:"Anguilla" }<font></font>
,  { key:"AO",value:"Angola" }<font></font>
 ...etc..<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font></p>

<pre><code>&lt;select ng-model="countries" ng-options="item.key as item.value for item in items"&gt;&lt;/select&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然导致选项值成为索引（0、1、2等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我</font><font style="vertical-align: inherit;">添加</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Track By</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复：</font></font></p>

<pre><code>&lt;select ng-model="blah" ng-options="item.value for item in items track by item.key"&gt;&lt;/select&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这种情况经常发生，您想将一组对象添加到选择列表中，所以我要记住这一点！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，从AngularJS 1.4开始，您不能再使用ng-options了，但是需要</font></font><code>ng-repeat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在option标签上使用：</font></font></p>

<pre><code>&lt;select name="test"&gt;<font></font>
   &lt;option ng-repeat="item in items" value="{{item.key}}"&gt;{{item.value}}&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
