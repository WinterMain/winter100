---
layout: question
title:  如何在AngularJS的ng-options中设置value属性？
date:   2020-03-12T06:53:57.000Z
description: 这似乎困扰着很多人（包括我）。当ng-options在AngularJS中使用指令填充<select>标签的选项时，我无法弄清楚如何为选项设置值。对此...
img: 
author: 梅十三Near
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎困扰着很多人（包括我）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>ng-options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在AngularJS中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">指令填充</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">的选项时</font><font style="vertical-align: inherit;">，我无法弄清楚如何为选项设置值。</font><font style="vertical-align: inherit;">对此的文档确实不清楚-至少对于像我这样的简单人而言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以像这样轻松设置选项的文本：</font></font></p>

<pre><code>ng-options="select p.text for p in resultOptions"
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>resultOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font><font style="vertical-align: inherit;">何时</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>[<font></font>
    {<font></font>
        "value": 1,<font></font>
        "text": "1st"<font></font>
    },<font></font>
    {<font></font>
        "value": 2,<font></font>
        "text": "2nd"<font></font>
    }<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置选项值应该是（可能是）最简单的事情，但是到目前为止，我还是不明白。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Here is how I solve this problem in a legacy application:</p>

<h3>In HTML:</h3>

<pre><code>ng-options="kitType.name for kitType in vm.kitTypes track by kitType.id" ng-model="vm.itemTypeId"
</code></pre>

<h3>In JavaScript:</h3>

<pre><code>vm.kitTypes = [<font></font>
    {"id": "1", "name": "Virtual"},<font></font>
    {"id": "2", "name": "Physical"},<font></font>
    {"id": "3", "name": "Hybrid"}<font></font>
];<font></font>
</code></pre>

<p>...</p>

<pre><code>vm.itemTypeId = vm.kitTypes.filter(function(value, index, array){<font></font>
    return value.id === (vm.itemTypeId || 1);<font></font>
})[0];<font></font>
</code></pre>

<p>My HTML displays the option value properly.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>It is always painful for developers to with ng-options. For example: Getting an empty/blank selected value in the select tag. Especially when dealing with JSON objects in ng-options, it becomes more tedious. Here I have done some exercises on that.</p>

<p>Objective: Iterate array of JSON objects through ng-option and set selected first element.</p>

<p>Data:</p>

<pre><code>someNames = [{"id":"1", "someName":"xyz"}, {"id":"2", "someName":"abc"}]
</code></pre>

<p>In the select tag I had to show xyz and abc, where xyz must be selected without much effort.</p>

<h3>HTML:</h3>

<pre><code>&lt;pre class="default prettyprint prettyprinted" style=""&gt;&lt;code&gt;<font></font>
    &amp;lt;select class="form-control" name="test" style="width:160px"    ng-options="name.someName for name in someNames" ng-model="testModel.test" ng-selected = "testModel.test = testModel.test || someNames[0]"&amp;gt;<font></font>
&amp;lt;/select&amp;gt;<font></font>
&lt;/code&gt;&lt;/pre&gt;<font></font>
</code></pre>

<p>By above code sample, you might get out of this exaggeration.</p>

<p>Another <a href="https://github.com/angular/angular.js/issues/1302" rel="nofollow noreferrer">reference</a>:</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小卤蛋Tom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>The tutorial <em><a href="http://www.grobmeier.de/angular-js-ng-select-and-ng-options-21112012.html#.VAOo58OwV2M" rel="nofollow noreferrer">ANGULAR.JS: NG-SELECT AND NG-OPTIONS</a></em> helped me solve the problem:</p>

<pre><code>&lt;select id="countryId"<font></font>
  class="form-control"<font></font>
  data-ng-model="entity.countryId"<font></font>
  ng-options="value.dataValue as value.dataText group by value.group for value in countries"&gt;&lt;/select&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Please use track by property which differentiate values and labels in select box.</p>

<p>Please try </p>

<pre><code>&lt;select ng-options="obj.text for obj in array track by obj.value"&gt;&lt;/select&gt;
</code></pre>

<p>which will assign labels with text and value with value(from the array)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;select ng-model="output"&gt;<font></font>
   &lt;option ng-repeat="(key,val) in dictionary" value="{{key}}"&gt;{{val}}&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>For an object:</p>

<pre><code>&lt;select ng-model="mySelect" ng-options="key as value for (key, value) in object"&gt;&lt;/select&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;select ng-model="color" ng-options="(c.name+' '+c.shade) for c in colors"&gt;&lt;/select&gt;&lt;br&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC66078158</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用ng-options实现select标记绑定到value和display成员 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此数据源时 </font></font></p>

<pre><code>countries : [<font></font>
              {<font></font>
                 "key": 1,<font></font>
                 "name": "UAE"<font></font>
             },<font></font>
              {<font></font>
                  "key": 2,<font></font>
                  "name": "India"<font></font>
              },<font></font>
              {<font></font>
                  "key": 3,<font></font>
                  "name": "OMAN"<font></font>
              }<font></font>
         ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下内容将您的选择标签绑定到值和名称 </font></font></p>

<pre><code>&lt;select name="text" ng-model="name" ng-options="c.key as c.name for c in countries"&gt;&lt;/select&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它很棒</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐伽罗古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>ng-options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令未在</font></font><code>&lt;options&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上设置value属性</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>limit.value as limit.text for limit in limits</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为</font></font><code>limit.text</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  将</font></font><code>limit.value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">保存</font><font style="vertical-align: inherit;">到选择的</font><font style="vertical-align: inherit;">标签中</font></font><code>ng-model</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅堆栈溢出问题</font></font><em><a href="https://stackoverflow.com/questions/14425686/angularjs-ng-options-not-rendering-values"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS ng-options不呈现值</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的说法，这最适合所有情况：</font></font></p>

<pre><code>&lt;select ng-model="mySelection.value"&gt;<font></font>
   &lt;option ng-repeat="r in myList" value="{{r.Id}}" ng-selected="mySelection.value == r.Id"&gt;{{r.Name}}<font></font>
   &lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在其中使用模型绑定数据的位置。</font><font style="vertical-align: inherit;">您将获得该对象将包含的值，并根据您的方案选择默认值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">录泰红木家具</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，我已经为这个问题苦苦挣扎了一段时间。</font><font style="vertical-align: inherit;">我通读了AngularJS文档，这篇文章和其他文章以及它们导致的一些博客。</font><font style="vertical-align: inherit;">他们全都帮助我掌握了更详细的信息，但最终这似乎是一个令人困惑的话题。</font><font style="vertical-align: inherit;">主要是由于语法的许多细微差别</font></font><code>ng-options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，对我来说，归结为少即是多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个范围，其配置如下：</font></font></p>

<pre><code>        //Data used to populate the dropdown list<font></font>
        $scope.list = [<font></font>
           {"FirmnessID":1,"Description":"Soft","Value":1},         <font></font>
           {"FirmnessID":2,"Description":"Medium-Soft","Value":2},<font></font>
           {"FirmnessID":3,"Description":"Medium","Value":3}, <font></font>
           {"FirmnessID":4,"Description":"Firm","Value":4},     <font></font>
           {"FirmnessID":5,"Description":"Very Firm","Value":5}];<font></font>
<font></font>
        //A record or row of data that is to be save to our data store.<font></font>
        //FirmnessID is a foreign key to the list specified above.<font></font>
        $scope.rec = {<font></font>
           "id": 1,<font></font>
           "FirmnessID": 2<font></font>
        };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我要获得所需结果所需要的：</font></font></p>

<pre><code>        &lt;select ng-model="rec.FirmnessID"<font></font>
                ng-options="g.FirmnessID as g.Description for g in list"&gt;<font></font>
            &lt;option&gt;&lt;/option&gt;<font></font>
        &lt;/select&gt;   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意，我没有使用</font></font><code>track by</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用</font></font><code>track by</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所选项目将始终返回与FirmnessID匹配的对象，而不是与FirmnessID本身匹配的对象。</font><font style="vertical-align: inherit;">现在，这符合我的标准，那就是它应该返回一个数字值而不是对象，并且</font></font><code>ng-options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过不为每个生成的选项创建新范围来获得性能改进。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我需要空白的第一行，因此我只需将an添加</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><font style="vertical-align: inherit;">展示我工作</font><font style="vertical-align: inherit;">的</font></font><a href="http://plnkr.co/edit/fbfmpPht7ENkWrlfT8c4?p=info" rel="nofollow noreferrer" title="朋克"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Plunkr</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望值与文本相同，则可以使用数组简单地执行此操作，而不是使用新的“跟踪依据”功能：</font></font></p>

<pre><code>&lt;select ng-options="v as v for (k,v) in Array/Obj"&gt;&lt;/select&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意标准语法之间的区别，这将使值成为对象/数组的键，因此使数组成为0,1,2等。</font></font></p>

<pre><code>&lt;select ng-options"k as v for (k,v) in Array/Obj"&gt;&lt;/select&gt;
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">k随v</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v随v</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这只是基于常识。</font><font style="vertical-align: inherit;">（k，v）是将数组/对象拆分为键值对的实际语句。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“ k as v”语句中，k将是值，而v将是显示给用户的文本选项。</font><font style="vertical-align: inherit;">我认为“跟踪”是凌乱和过大的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要更改</font></font><code>option</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的值，</font><font style="vertical-align: inherit;">因为最终会将表单提交给服务器，则可以这样做，而不是这样做，</font></font></p>

<pre><code>&lt;select name="text" ng-model="text" ng-options="select p.text for p in resultOptions"&gt;&lt;/select&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样做：</font></font></p>

<pre><code>&lt;select ng-model="text" ng-options="select p.text for p in resultOptions"&gt;&lt;/select&gt;<font></font>
&lt;input type="hidden" name="text" value="{{ text }}" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，期望值将以正确的名称通过表格发送。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐LEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将</font></font><code>my_hero</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用常规格式提交</font><font style="vertical-align: inherit;">的自定义值发送</font><font style="vertical-align: inherit;">到服务器，请提交：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON：</font></font></p>

<pre><code>"heroes": [<font></font>
  {"id":"iron", "label":"Iron Man Rocks!"},<font></font>
  {"id":"super", "label":"Superman Rocks!"}<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;select ng-model="hero" ng-options="obj.id as obj.label for obj in heroes"&gt;&lt;/select&gt;<font></font>
&lt;input type="hidden" name="my_hero" value="{{hero}}" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器将接收</font></font><code>iron</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为的值</font></font><code>my_hero</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这类似于</font></font><a href="https://stackoverflow.com/questions/12139152/how-do-i-set-the-value-property-in-angularjs-ng-options/17070766#17070766"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@neemzy的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是为该</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">指定了单独的数据</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
