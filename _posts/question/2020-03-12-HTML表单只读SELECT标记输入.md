---
layout: question
title:  HTML表单只读SELECT标记/输入
date:   2020-03-12T04:34:38.000Z
description: 根据HTML规范，selectHTML中的标记没有readonly属性，只有disabled属性。因此，如果要阻止用户更改下拉菜单，则必须使用disabl...
img: 
author: 番长GreenL
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据HTML规范，</font></font><code>select</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标记没有</font></font><code>readonly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，只有</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">因此，如果要阻止用户更改下拉菜单，则必须使用</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的问题是禁用的HTML表单输入不会包含在POST / GET数据中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模拟</font><font style="vertical-align: inherit;">标签</font></font><code>readonly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>select</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并仍然获取POST数据</font><font style="vertical-align: inherit;">的最佳方法是什么</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE中，我可以通过双击来击败onfocus =&gt; onblur方法。</font><font style="vertical-align: inherit;">但是记住该值，然后在onchange事件中将其还原似乎可以解决该问题。</font></font></p>

<pre><code>&lt;select onfocus="this.oldvalue=this.value;this.blur();" onchange="this.value=this.oldvalue;"&gt;<font></font>
....<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用javascript变量在没有expando属性的情况下进行类似的操作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择下拉列表自出生以来是只读的，并且根本不需要更改，那么也许应该改用另一个控件？</font><font style="vertical-align: inherit;">就像一个简单的</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（加上隐藏的表单字段）还是一个</font></font><code>&lt;input type="text"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补充：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果下拉列表并非始终都是只读的，并且使用JavaScript启用/禁用它，那么这仍然是解决方案-只需即时修改DOM。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Green古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html解决方案：</font></font></p>

<blockquote>
  <p><code>&lt;select onfocus="this.blur();"&gt;</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的：</font></font></p>

<blockquote>
  <p><code>selectElement.addEventListener("focus", selectElement.blur, true);</code>
  <code>selectElement.attachEvent("focus", selectElement.blur); //thanks, IE</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去除：</font></font></p>

<blockquote>
  <p><code>selectElement.removeEventListener("focus", selectElement.blur, true);</code>
  <code>selectElement.detachEvent("focus", selectElement.blur); //thanks, IE</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：添加了删除方法</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了当前选择的选项之外，您还可以禁用所有选项，而不是选择本身。</font><font style="vertical-align: inherit;">这样会显示一个有效的下拉菜单，但是只有要传递的选项才是有效的选择。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;select id="case_reason" name="case_reason" disabled="disabled"&gt;
</code></pre>

<p><code>disabled="disabled" -&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将从数据库中获取您的价值，并在表单中显示它。
</font></font><code>readonly="readonly" -&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在选择框中更改您的值，但是您的值无法保存在数据库中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循Grant Wagners的建议；</font><font style="vertical-align: inherit;">这是一个使用处理程序函数（而不是直接的onXXX属性）执行的jQuery代码段：</font></font></p>

<pre><code>var readonlySelect = function(selector, makeReadonly) {<font></font>
<font></font>
    $(selector).filter("select").each(function(i){<font></font>
        var select = $(this);<font></font>
<font></font>
        //remove any existing readonly handler<font></font>
        if(this.readonlyFn) select.unbind("change", this.readonlyFn);<font></font>
        if(this.readonlyIndex) this.readonlyIndex = null;<font></font>
<font></font>
        if(makeReadonly) {<font></font>
            this.readonlyIndex = this.selectedIndex;<font></font>
            this.readonlyFn = function(){<font></font>
                this.selectedIndex = this.readonlyIndex;<font></font>
            };<font></font>
            select.bind("change", this.readonlyFn);<font></font>
        }<font></font>
    });<font></font>
<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tabindex解决方案。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于选择，但也适用于文本输入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用.disabled类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.disabled {<font></font>
    pointer-events:none; /* No cursor */<font></font>
    background-color: #eee; /* Gray background */<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS：</font></font></p>

<pre><code>$(".disabled").attr("tabindex", "-1");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;select class="disabled"&gt;<font></font>
    &lt;option value="0"&gt;0&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;input type="text" class="disabled" /&gt;<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：使用Internet Explorer，您还需要以下JS：</font></font></p>

<pre><code>$(document).on("mousedown", ".disabled", function (e) {<font></font>
    e.preventDefault();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomDavaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这为时已晚，但是可以使用简单的CSS来完成：</font></font></p>

<pre><code>select[readonly] option, select[readonly] optgroup {<font></font>
    display: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当选择处于</font></font><code>readonly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态时，</font><font style="vertical-align: inherit;">样式将隐藏所有选项和组</font><font style="vertical-align: inherit;">，因此用户无法更改其选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需JavaScript技巧。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最简单，最好的解决方案。</font><font style="vertical-align: inherit;">您将在选择的内容上设置一个readolny attr或任何其他attr，例如data-readonly，然后执行以下操作</font></font></p>

<pre><code>$("select[readonly]").live("focus mousedown mouseup click",function(e){<font></font>
    e.preventDefault();<font></font>
    e.stopPropagation();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了禁用不应选择的选项外，我还想使它们从列表中消失，但仍可以启用它们，以备以后使用：</font></font></p>

<pre><code>$("select[readonly]").find("option:not(:selected)").hide().attr("disabled",true);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将找到具有只读属性的所有选择元素，然后在那些未选择的选择内找到所有选项，然后将其隐藏并禁用它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于性能原因，将jquery查询分成2个很重要，因为jquery从右到左读取它们，代码如下： </font></font></p>

<pre><code>$("select[readonly] option:not(:selected)")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将首先在文档中找到所有未选择的选项，然后使用只读属性过滤select内的所有未选择选项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的CSS解决方案：</font></font></p>

<pre><code>select[readonly]{<font></font>
    background: #eee;<font></font>
    cursor:no-drop;<font></font>
}<font></font>
<font></font>
select[readonly] option{<font></font>
    display:none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样会导致“选择”显示为灰色，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
并</font><font style="vertical-align: inherit;">在鼠标悬停时显示漂亮的“禁用”光标，</font><font style="vertical-align: inherit;">并且在选择时，选项列表为“空”，因此您无法更改其值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更简单：将style属性添加到您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">select</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签中：</font></font></p>

<pre><code>style="pointer-events: none;"
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个更现代的选项（不是双关语）是禁用select元素（而不是所选元素）的所有选项。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，这是HTML 4.0功能，即6,7,8 beta 1似乎不尊重这一点。</font></font></p>

<p><a href="http://www.gtalbot.org/BrowserBugsSection/MSIE7Bugs/OptionDisabledSupport.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.gtalbot.org/BrowserBugsSection/MSIE7Bugs/OptionDisabledSupport.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我发现的最佳解决方案：</font></font></p>

<pre><code>$("#YourSELECTIdHere option:not(:selected)").prop("disabled", true);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有其他未选中的选项，同时保持选中的选项处于启用状态。</font><font style="vertical-align: inherit;">这样做，选定的选项会将其纳入回发数据中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;select id="countries" onfocus="this.defaultIndex=this.selectedIndex;" onchange="this.selectedIndex=this.defaultIndex;"&gt;<font></font>
&lt;option value="1"&gt;Country1&lt;/option&gt;<font></font>
&lt;option value="2"&gt;Country2&lt;/option&gt;<font></font>
&lt;option value="3"&gt;Country3&lt;/option&gt;<font></font>
&lt;option value="4"&gt;Country4&lt;/option&gt;<font></font>
&lt;option value="5"&gt;Country5&lt;/option&gt;<font></font>
&lt;option value="6"&gt;Country6&lt;/option&gt;<font></font>
&lt;option value="7" selected="selected"&gt;Country7&lt;/option&gt;<font></font>
&lt;option value="8"&gt;Country8&lt;/option&gt;<font></font>
&lt;option value="9"&gt;Country9&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过测试，并可以在IE 6、7和8b2，Firefox 2和3，Opera 9.62，适用于Windows的Safari 3.2.1和Google Chrome中运行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们也可以用这个 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用除选定选项之外的所有选项：</font></font></p>

<pre><code>&lt;select&gt;<font></font>
    &lt;option disabled&gt;1&lt;/option&gt;<font></font>
    &lt;option selected&gt;2&lt;/option&gt;<font></font>
    &lt;option disabled&gt;3&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，下拉列表仍然有效（并提交其值），但用户无法选择其他值。</font></font></p>

<p><a href="http://jsfiddle.net/ret7mhfa/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
