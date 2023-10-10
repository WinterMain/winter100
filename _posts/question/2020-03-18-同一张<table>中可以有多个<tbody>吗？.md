---
layout: question
title:  同一张<table>中可以有多个<tbody>吗？
date:   2020-03-18T08:30:45.000Z
description: 我们可以<tbody>在同一标签中包含多个标签<table>吗？如果是，那么在什么情况下我们应该使用多个<tbody>标签？...
img: 
author: 神奇Davaid
category: question
answer: 8
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以</font></font><code>&lt;tbody&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一标签中</font><font style="vertical-align: inherit;">包含多个</font><font style="vertical-align: inherit;">标签</font></font><code>&lt;table&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">如果是，那么在什么情况下我们应该使用多个</font></font><code>&lt;tbody&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝路易神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个</font></font><a href="http://jsfiddle.net/Pixic/Q5WyX/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中有两个带表的嵌套ng-repeats，以及在tbody上的父ng-repeat。</font><font style="vertical-align: inherit;">如果检查表中的任何行，您将看到有六个tbody元素，即父级。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></p>

<pre><code>&lt;div&gt;<font></font>
        &lt;table class="table table-hover table-condensed table-striped"&gt;<font></font>
            &lt;thead&gt;<font></font>
                &lt;tr&gt;<font></font>
                    &lt;th&gt;Store ID&lt;/th&gt;<font></font>
                    &lt;th&gt;Name&lt;/th&gt;<font></font>
                    &lt;th&gt;Address&lt;/th&gt;<font></font>
                    &lt;th&gt;City&lt;/th&gt;<font></font>
                    &lt;th&gt;Cost&lt;/th&gt;<font></font>
                    &lt;th&gt;Sales&lt;/th&gt;<font></font>
                    &lt;th&gt;Revenue&lt;/th&gt;<font></font>
                    &lt;th&gt;Employees&lt;/th&gt;<font></font>
                    &lt;th&gt;Employees H-sum&lt;/th&gt;<font></font>
                &lt;/tr&gt;<font></font>
            &lt;/thead&gt;<font></font>
            &lt;tbody data-ng-repeat="storedata in storeDataModel.storedata"&gt;<font></font>
                &lt;tr id="storedata.store.storeId" class="clickableRow" title="Click to toggle collapse/expand day summaries for this store." data-ng-click="selectTableRow($index, storedata.store.storeId)"&gt;<font></font>
                    &lt;td&gt;{{storedata.store.storeId}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.store.storeName}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.store.storeAddress}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.store.storeCity}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.data.costTotal}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.data.salesTotal}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.data.revenueTotal}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.data.averageEmployees}}&lt;/td&gt;<font></font>
                    &lt;td&gt;{{storedata.data.averageEmployeesHours}}&lt;/td&gt;<font></font>
                &lt;/tr&gt;<font></font>
                &lt;tr data-ng-show="dayDataCollapse[$index]"&gt;<font></font>
                    &lt;td colspan="2"&gt;&amp;nbsp;&lt;/td&gt;<font></font>
                    &lt;td colspan="7"&gt;<font></font>
                        &lt;div&gt;<font></font>
                            &lt;div class="pull-right"&gt;<font></font>
                                &lt;table class="table table-hover table-condensed table-striped"&gt;<font></font>
                                    &lt;thead&gt;<font></font>
                                        &lt;tr&gt;<font></font>
                                            &lt;th&gt;&lt;/th&gt;<font></font>
                                            &lt;th&gt;Date [YYYY-MM-dd]&lt;/th&gt;<font></font>
                                            &lt;th&gt;Cost&lt;/th&gt;<font></font>
                                            &lt;th&gt;Sales&lt;/th&gt;<font></font>
                                            &lt;th&gt;Revenue&lt;/th&gt;<font></font>
                                            &lt;th&gt;Employees&lt;/th&gt;<font></font>
                                            &lt;th&gt;Employees H-sum&lt;/th&gt;<font></font>
                                        &lt;/tr&gt;<font></font>
                                    &lt;/thead&gt;<font></font>
                                    &lt;tbody&gt;<font></font>
                                        &lt;tr data-ng-repeat="dayData in storeDataModel.storedata[$index].data.dayData"&gt;<font></font>
                                            &lt;td class="pullright"&gt;<font></font>
                                                &lt;button type="btn btn-small" title="Click to show transactions for this specific day..." data-ng-click=""&gt;&lt;i class="icon-list"&gt;&lt;/i&gt;<font></font>
                                                &lt;/button&gt;<font></font>
                                            &lt;/td&gt;<font></font>
                                            &lt;td&gt;{{dayData.date}}&lt;/td&gt;<font></font>
                                            &lt;td&gt;{{dayData.cost}}&lt;/td&gt;<font></font>
                                            &lt;td&gt;{{dayData.sales}}&lt;/td&gt;<font></font>
                                            &lt;td&gt;{{dayData.revenue}}&lt;/td&gt;<font></font>
                                            &lt;td&gt;{{dayData.employees}}&lt;/td&gt;<font></font>
                                            &lt;td&gt;{{dayData.employeesHoursSum}}&lt;/td&gt;<font></font>
                                        &lt;/tr&gt;<font></font>
                                    &lt;/tbody&gt;<font></font>
                                &lt;/table&gt;<font></font>
                            &lt;/div&gt;<font></font>
                        &lt;/div&gt;<font></font>
                    &lt;/td&gt;<font></font>
                &lt;/tr&gt;<font></font>
            &lt;/tbody&gt;<font></font>
        &lt;/table&gt;<font></font>
    &lt;/div&gt;<font></font>
</code></pre>

<p>(
Side note:
This fills up the DOM if you have a lot of data on both levels, so I am therefore working on a directive to fetch data and replace, i.e. adding into DOM when clicking parent and removing when another is clicked or same parent again.
To get the kind of behavior you find on <a href="http://www.prisjakt.nu/kategori.php?k=353#footer" rel="nofollow">Prisjakt.nu</a>, if you scroll down to the computers listed and click on the row (not the links). If you do that and inspect elements you will see that a tr is added and then removed if parent is clicked again or another.
)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，如果您</font></font><code>&lt;tbody&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><a href="http://validator.w3.org/check" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C的HTML验证器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（带有HTML5 DOCTYPE）</font><font style="vertical-align: inherit;">运行带有多个</font><font style="vertical-align: inherit;">标签</font><a href="http://validator.w3.org/check" rel="nofollow"><font style="vertical-align: inherit;">的HTML</font></a><font style="vertical-align: inherit;">文档，它将成功验证。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Near小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font><code>caption</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记属于表，因此应该只存在一次。</font><font style="vertical-align: inherit;">不要</font><font style="vertical-align: inherit;">像我一样将</font><font style="vertical-align: inherit;">a </font></font><code>caption</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与每个</font></font><code>tbody</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">相关联</font><font style="vertical-align: inherit;">：</font></font></strong> </p>

<pre><code>&lt;table&gt;<font></font>
    &lt;caption&gt;First Half of Table (British Dinner)&lt;/caption&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;1&lt;/th&gt;&lt;td&gt;Fish&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;2&lt;/th&gt;&lt;td&gt;Chips&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;3&lt;/th&gt;&lt;td&gt;Pease&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;4&lt;/th&gt;&lt;td&gt;Gravy&lt;/td&gt;&lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
    &lt;caption&gt;Second Half of Table (Italian Dinner)&lt;/caption&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;5&lt;/th&gt;&lt;td&gt;Pizza&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;6&lt;/th&gt;&lt;td&gt;Salad&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;7&lt;/th&gt;&lt;td&gt;Oil&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;8&lt;/th&gt;&lt;td&gt;Bread&lt;/td&gt;&lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
&lt;/table&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的错误示例：请勿复制</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的示例未按您期望的方式进行渲染，因为这样的编写表明对</font></font><code>caption</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">有误解</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您将需要大量CSS技巧来使其正确呈现，因为这将违反标准。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><code>caption</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">上搜索了W3Cs标准，</font><font style="vertical-align: inherit;">但找不到明确的规则来声明</font></font><code>caption</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个表</font><font style="vertical-align: inherit;">只能有一个</font><font style="vertical-align: inherit;">元素，但实际上就是这种情况。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font><font style="vertical-align: inherit;">我使用它们来动态隐藏/显示表的相关部分，例如课程。</font><font style="vertical-align: inherit;">就是</font></font></p>

<pre><code>&lt;table&gt;<font></font>
  &lt;tbody id="day1" style="display:none"&gt;<font></font>
    &lt;tr&gt;&lt;td&gt;session1&lt;/td&gt;&lt;tr&gt;<font></font>
    &lt;tr&gt;&lt;td&gt;session2&lt;/td&gt;&lt;tr&gt;<font></font>
  &lt;/tbody&gt;<font></font>
  &lt;tbody id="day2"&gt;<font></font>
    &lt;tr&gt;&lt;td&gt;session3&lt;/td&gt;&lt;tr&gt;<font></font>
    &lt;tr&gt;&lt;td&gt;session4&lt;/td&gt;&lt;tr&gt;<font></font>
  &lt;/tbody&gt;<font></font>
  &lt;tbody id="day3" style="display:none"&gt;<font></font>
    &lt;tr&gt;&lt;td&gt;session5&lt;/td&gt;&lt;tr&gt;<font></font>
    &lt;tr&gt;&lt;td&gt;session6&lt;/td&gt;&lt;tr&gt;<font></font>
  &lt;/tbody&gt;<font></font>
&lt;/table&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以提供一个按钮，以通过操纵正文而不在单独处理很多行的情况下在所有日期之间切换或仅在当天切换。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据此示例可以完成：</font></font><a href="http://www.w3.org/TR/html401/struct/tables.html#h-11.2.3" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3-struct-tables</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以使用它们，例如，我可以使用它们来更轻松地设置数据组的样式，如下所示：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>thead th { width: 100px; border-bottom: solid 1px #ddd; font-weight: bold; }<font></font>
tbody:nth-child(odd) { background: #f5f5f5;  border: solid 1px #ddd; }<font></font>
tbody:nth-child(even) { background: #e5e5e5;  border: solid 1px #ddd; }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
    &lt;thead&gt;<font></font>
        &lt;tr&gt;&lt;th&gt;Customer&lt;/th&gt;&lt;th&gt;Order&lt;/th&gt;&lt;th&gt;Month&lt;/th&gt;&lt;/tr&gt;<font></font>
    &lt;/thead&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 1&lt;/td&gt;&lt;td&gt;#1&lt;/td&gt;&lt;td&gt;January&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 1&lt;/td&gt;&lt;td&gt;#2&lt;/td&gt;&lt;td&gt;April&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 1&lt;/td&gt;&lt;td&gt;#3&lt;/td&gt;&lt;td&gt;March&lt;/td&gt;&lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 2&lt;/td&gt;&lt;td&gt;#1&lt;/td&gt;&lt;td&gt;January&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 2&lt;/td&gt;&lt;td&gt;#2&lt;/td&gt;&lt;td&gt;April&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 2&lt;/td&gt;&lt;td&gt;#3&lt;/td&gt;&lt;td&gt;March&lt;/td&gt;&lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 3&lt;/td&gt;&lt;td&gt;#1&lt;/td&gt;&lt;td&gt;January&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 3&lt;/td&gt;&lt;td&gt;#2&lt;/td&gt;&lt;td&gt;April&lt;/td&gt;&lt;/tr&gt;<font></font>
        &lt;tr&gt;&lt;td&gt;Customer 3&lt;/td&gt;&lt;td&gt;#3&lt;/td&gt;&lt;td&gt;March&lt;/td&gt;&lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p>

<p><a href="http://jsfiddle.net/umRJr/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处查看示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它只能在更新的浏览器中使用，但这就是我当前应用程序所支持的功能，您可以对JavaScript等使用分组。主要是，这是一种方便的方式，可以直观地对行进行分组以使数据更具可读性。</font><font style="vertical-align: inherit;">当然还有其他用途，但就适用示例而言，这对我来说是最常见的一种。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猴子Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是。</font><font style="vertical-align: inherit;">从</font></font><a href="http://www.w3.org/TR/xhtml1/dtds.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DTD</font></font></a></p>

<pre><code>&lt;!ELEMENT table<font></font>
     (caption?, (col*|colgroup*), thead?, tfoot?, (tbody+|tr+))&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，它期望一个或多个。</font><font style="vertical-align: inherit;">然后继续说</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font><font style="vertical-align: inherit;">
  在表行组之间需要</font></font><a href="http://www.w3.org/TR/html401/struct/tables.html#h-11.3.1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，请使用多个正文部分</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门村村古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Martin Joiner的问题是由对</font></font><code>&lt;caption&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">的误解引起的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;caption&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签定义表格标题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;caption&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签必须是第一子</font></font><code>&lt;table&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个表格只能指定一个标题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请注意，</font></font><code>scope</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应将属性放置在</font></font><code>&lt;th&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素上而不是</font></font><code>&lt;tr&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写多头多表体表的正确方法如下所示：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table id="dinner_table"&gt;<font></font>
    &lt;caption&gt;This is the only correct place to put a caption.&lt;/caption&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr class="header"&gt;<font></font>
            &lt;th colspan="2" scope="col"&gt;First Half of Table (British Dinner)&lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;1&lt;/th&gt;<font></font>
            &lt;td&gt;Fish&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;2&lt;/th&gt;<font></font>
            &lt;td&gt;Chips&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;3&lt;/th&gt;<font></font>
            &lt;td&gt;Peas&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;4&lt;/th&gt;<font></font>
            &lt;td&gt;Gravy&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
    &lt;tbody&gt;<font></font>
        &lt;tr class="header"&gt;<font></font>
            &lt;th colspan="2" scope="col"&gt;Second Half of Table (Italian Dinner)&lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;5&lt;/th&gt;<font></font>
            &lt;td&gt;Pizza&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;6&lt;/th&gt;<font></font>
            &lt;td&gt;Salad&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;7&lt;/th&gt;<font></font>
            &lt;td&gt;Oil&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th scope="row"&gt;8&lt;/th&gt;<font></font>
            &lt;td&gt;Bread&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
    &lt;/tbody&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
