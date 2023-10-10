---
layout: question
title:  如何设置HTML <select>元素的默认值？
date:   2020-03-13T12:53:08.000Z
description: 我认为"value"在以下<select>元素上添加属性集会导致默认情况下选中<option>包含我的提供的内容"value"：<select n...
img: 
author: MandyL
category: question
answer: 19
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><code>"value"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">集会导致</font><font style="vertical-align: inherit;">默认情况下选中</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含我的提供的内容</font></font><code>"value"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select name="hall" id="hall" value="3"&gt;<font></font>
  &lt;option&gt;1&lt;/option&gt;<font></font>
  &lt;option&gt;2&lt;/option&gt;<font></font>
  &lt;option&gt;3&lt;/option&gt;<font></font>
  &lt;option&gt;4&lt;/option&gt;<font></font>
  &lt;option&gt;5&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这没有按我预期的那样工作。</font><font style="vertical-align: inherit;">如何设置</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认选择的元素？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置selected =“ selected”，其中选项值为3</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请看下面的例子</font></font></p>

<pre><code>&lt;option selected="selected" value="3" &gt;3&lt;/option&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样尝试</font></font></p>

<pre><code>  &lt;select name="hall" id="hall"&gt;<font></font>
      &lt;option&gt;1&lt;/option&gt;<font></font>
      &lt;option&gt;2&lt;/option&gt;<font></font>
      &lt;option selected="selected"&gt;3&lt;/option&gt;<font></font>
      &lt;option&gt;4&lt;/option&gt;<font></font>
      &lt;option&gt;5&lt;/option&gt;<font></font>
    &lt;/select&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Angular并通过设置默认选项</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML模板</font></font></strong></p>

<pre><code>&lt;select #selectConnection [(ngModel)]="selectedVal" class="form-control  col-sm-6 "  max-width="100px"   title="Select" <font></font>
      data-size="10"&gt; <font></font>
        &lt;option  &gt;test1&lt;/option&gt;<font></font>
        &lt;option &gt;test2&lt;/option&gt;      <font></font>
      &lt;/select&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本：</font></font></strong></p>

<pre><code>sselectedVal:any="test1";
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要在特定选项上放置属性“ selected”，而不是直接选择元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是具有不同值的相同和多个工作示例的摘录。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>   Select Option 3 :- <font></font>
   &lt;select name="hall" id="hall"&gt;<font></font>
    &lt;option&gt;1&lt;/option&gt;<font></font>
    &lt;option&gt;2&lt;/option&gt;<font></font>
    &lt;option selected="selected"&gt;3&lt;/option&gt;<font></font>
    &lt;option&gt;4&lt;/option&gt;<font></font>
    &lt;option&gt;5&lt;/option&gt;<font></font>
   &lt;/select&gt;<font></font>
   <font></font>
   &lt;br/&gt;<font></font>
   &lt;br/&gt;<font></font>
   &lt;br/&gt;<font></font>
   Select Option 5 :- <font></font>
   &lt;select name="hall" id="hall"&gt;<font></font>
    &lt;option&gt;1&lt;/option&gt;<font></font>
    &lt;option&gt;2&lt;/option&gt;<font></font>
    &lt;option&gt;3&lt;/option&gt;<font></font>
    &lt;option&gt;4&lt;/option&gt;<font></font>
    &lt;option selected="selected"&gt;5&lt;/option&gt;<font></font>
   &lt;/select&gt;<font></font>
   <font></font>
    &lt;br/&gt;<font></font>
   &lt;br/&gt;<font></font>
   &lt;br/&gt;<font></font>
   Select Option 2 :- <font></font>
   &lt;select name="hall" id="hall"&gt;<font></font>
    &lt;option&gt;1&lt;/option&gt;<font></font>
    &lt;option selected="selected"&gt;2&lt;/option&gt;<font></font>
    &lt;option&gt;3&lt;/option&gt;<font></font>
    &lt;option&gt;4&lt;/option&gt;<font></font>
    &lt;option&gt;5&lt;/option&gt;<font></font>
   &lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞羽</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是将第一个选择选项值设置为默认值，然后使用HTML5的新“隐藏”功能将该值隐藏在下拉列表中。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>   &lt;select name="" id=""&gt;<font></font>
     &lt;option hidden value="default"&gt;Select An Option&lt;/option&gt;<font></font>
     &lt;option value="1"&gt;One&lt;/option&gt;<font></font>
     &lt;option value="2"&gt;Two&lt;/option&gt;<font></font>
     &lt;option value="3"&gt;Three&lt;/option&gt;<font></font>
     &lt;option value="4"&gt;Four&lt;/option&gt;<font></font>
   &lt;/select&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码使用PHP设置HTML select元素的默认值。  </font></font></p>

<pre><code>&lt;select name="hall" id="hall"&gt;<font></font>
&lt;?php<font></font>
    $default = 3;<font></font>
    $nr = 1;<font></font>
    while($nr &lt; 10){<font></font>
        if($nr == $default){<font></font>
            echo "&lt;option selected=\"selected\"&gt;". $nr ."&lt;/option&gt;";<font></font>
        }<font></font>
        else{<font></font>
            echo "&lt;option&gt;". $nr ."&lt;/option&gt;";<font></font>
        }<font></font>
        $nr++;<font></font>
    }<font></font>
?&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签的value属性缺失，因此不会如您所希望的那样显示。</font><font style="vertical-align: inherit;">默认情况下，如果在标签上设置了value属性，则第一个选项在下拉页面加载时显示...。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></p>

<pre><code>&lt;option value="someValue" selected&gt;Some Value&lt;/option&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替，</font></font></p>

<pre><code>&lt;option value="someValue" selected = "selected"&gt;Some Value&lt;/option&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都是正确的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个例子; </font><font style="vertical-align: inherit;">使用JavaScript设置选定的选项。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您可以使用此示例将值数组循环到下拉组件中）</font></font></em></p>

<p><code>&lt;select id="yourDropDownElementId"&gt;&lt;select/&gt;</code></p>

<pre><code>// Get the select element<font></font>
var select = document.getElementById("yourDropDownElementId");<font></font>
// Create a new option element<font></font>
var el = document.createElement("option");<font></font>
// Add our value to the option<font></font>
el.textContent = "Example Value";<font></font>
el.value = "Example Value";<font></font>
// Set the option to selected<font></font>
el.selected = true;<font></font>
// Add the new option element to the select element<font></font>
select.appendChild(el);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选定的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性是一个布尔属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果存在，它指定页面加载时应预先选择一个选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预先选择的选项将首先显示在下拉列表中。</font></font></p>

<pre><code>&lt;select&gt;<font></font>
  &lt;option value="volvo"&gt;Volvo&lt;/option&gt;<font></font>
 &lt;option value="saab"&gt;Saab&lt;/option&gt;<font></font>
 &lt;option value="vw"&gt;VW&lt;/option&gt;<font></font>
 &lt;option value="audi" selected&gt;Audi&lt;/option&gt; <font></font>
&lt;/select&gt; <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font></font><a href="https://stackoverflow.com/users/1446845/nobita"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nobita</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案</font><font style="vertical-align: inherit;">的改进</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您也可以通过隐藏元素“在此处选择”来改善下拉列表的视觉效果。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select&gt;<font></font>
  &lt;option selected disabled hidden&gt;Choose here&lt;/option&gt;<font></font>
  &lt;option value="1"&gt;One&lt;/option&gt;<font></font>
  &lt;option value="2"&gt;Two&lt;/option&gt;<font></font>
  &lt;option value="3"&gt;Three&lt;/option&gt;<font></font>
  &lt;option value="4"&gt;Four&lt;/option&gt;<font></font>
  &lt;option value="5"&gt;Five&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最好的方法是：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;select&gt;<font></font>
   &lt;option value="" selected="selected" hidden="hidden"&gt;Choose here&lt;/option&gt;<font></font>
   &lt;option value="1"&gt;One&lt;/option&gt;<font></font>
   &lt;option value="2"&gt;Two&lt;/option&gt;<font></font>
   &lt;option value="3"&gt;Three&lt;/option&gt;<font></font>
   &lt;option value="4"&gt;Four&lt;/option&gt;<font></font>
   &lt;option value="5"&gt;Five&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不禁用？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您将Disabled属性与</font></font><code>&lt;button type="reset"&gt;Reset&lt;/button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">value </font><font style="vertical-align: inherit;">一起使用时</font><font style="vertical-align: inherit;">，不会重置为原始占位符。</font><font style="vertical-align: inherit;">而是浏览器选择第一个未禁用的选项，这可能会导致用户错误。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认空值</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个生产表单都有验证，那么空值应该不是问题。</font><font style="vertical-align: inherit;">这样，我们可能有不需要的空选择。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML语法属性</font></font></strong></p>

<p><code>selected="selected"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法是与XHTML和HTML 5兼容的唯一方法。这是正确的XML语法，一些编辑者对此可能感到满意。</font><font style="vertical-align: inherit;">它向后兼容。</font><font style="vertical-align: inherit;">我对此没有强烈的感觉，但是如果您需要提及以上参数，则应遵循完整的语法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有反应，则可以将其</font></font><code>defaultValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作属性，而不是</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在select标签中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三米亚阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢这样：</font></font></p>

<pre><code>&lt;select&gt;<font></font>
   &lt;option selected hidden&gt;Choose here&lt;/option&gt;<font></font>
   &lt;option value="1"&gt;One&lt;/option&gt;<font></font>
   &lt;option value="2"&gt;Two&lt;/option&gt;<font></font>
   &lt;option value="3"&gt;Three&lt;/option&gt;<font></font>
   &lt;option value="4"&gt;Four&lt;/option&gt;<font></font>
   &lt;option value="5"&gt;Five&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择一个选项后，“选择此处”消失。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的例子：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select name="hall" id="hall"&gt; <font></font>
  &lt;option&gt; <font></font>
    1 <font></font>
  &lt;/option&gt; <font></font>
  &lt;option&gt; <font></font>
    2 <font></font>
  &lt;/option&gt; <font></font>
  &lt;option selected&gt; <font></font>
    3 <font></font>
  &lt;/option&gt; <font></font>
  &lt;option&gt; <font></font>
    4 <font></font>
  &lt;/option&gt; <font></font>
  &lt;option&gt; <font></font>
    5 <font></font>
  &lt;/option&gt; <font></font>
&lt;/select&gt; </code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样做：</font></font></p>

<pre><code>&lt;select name="hall" id="hall"&gt;<font></font>
    &lt;option&gt; 1 &lt;/option&gt;<font></font>
    &lt;option&gt; 2 &lt;/option&gt;<font></font>
    &lt;option selected&gt; 3 &lt;/option&gt;<font></font>
    &lt;option&gt; 4 &lt;/option&gt;<font></font>
    &lt;option&gt; 5 &lt;/option&gt;<font></font>
&lt;/select&gt; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在选项标签内提供“ selected”关键字，默认情况下您希望该关键字显示在下拉列表中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您也可以为选项标签提供属性，即 </font></font></p>

<pre><code>&lt;option selected="selected"&gt;3&lt;/option&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva蛋蛋番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>selected="selected"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要设为默认选项的选项。</font></font></p>

<pre><code>&lt;option selected="selected"&gt;<font></font>
3<font></font>
&lt;/option&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望使用默认文本作为一种占位符/提示，但不认为是有效值（例如“在此完成”，“选择您的国家/地区”等），则可以执行以下操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;select&gt;<font></font>
  &lt;option value="" selected disabled hidden&gt;Choose here&lt;/option&gt;<font></font>
  &lt;option value="1"&gt;One&lt;/option&gt;<font></font>
  &lt;option value="2"&gt;Two&lt;/option&gt;<font></font>
  &lt;option value="3"&gt;Three&lt;/option&gt;<font></font>
  &lt;option value="4"&gt;Four&lt;/option&gt;<font></font>
  &lt;option value="5"&gt;Five&lt;/option&gt;<font></font>
&lt;/select&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了这个问题，但是被接受并被高度评价的答案对我来说不起作用。</font><font style="vertical-align: inherit;">事实证明，如果您使用的是React，则设置</font></font><code>selected</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，您必须</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">标记中</font><font style="vertical-align: inherit;">设置一个值，</font><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>&lt;select value="B"&gt;<font></font>
  &lt;option value="A"&gt;Apple&lt;/option&gt;<font></font>
  &lt;option value="B"&gt;Banana&lt;/option&gt;<font></font>
  &lt;option value="C"&gt;Cranberry&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="http://facebook.github.io/react/docs/forms.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React页面上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关为什么的更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
