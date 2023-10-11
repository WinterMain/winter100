---
layout: question
title:  使用jQuery将表单数据转换为JavaScript对象
date:   2020-03-09T12:25:18.000Z
description: 如何将表单的所有元素转换为JavaScript对象？ 我希望有一些方法可以自动从表单中构建JavaScript对象，而不必遍历每个元素。我不想要由返回...
img: 
author: GO小胖GO
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将表单的所有元素转换为JavaScript对象？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望有一些方法可以自动从表单中构建JavaScript对象，而不必遍历每个元素。</font><font style="vertical-align: inherit;">我不想要由返回的字符串，</font></font><code>$('#formid').serialize();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不希望由返回的映射</font></font><code>$('#formid').serializeArray();</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第244篇《使用jQuery将表单数据转换为JavaScript对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>const formData = new FormData(form);<font></font>
<font></font>
let formDataJSON = {};<font></font>
<font></font>
for (const [key, value] of formData.entries()) {<font></font>
<font></font>
    formDataJSON[key] = value;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我自己将表单编码为多维JavaScript对象，以在生产中使用它。</font><font style="vertical-align: inherit;">结果是</font></font><a href="https://github.com/serbanghita/formToObject.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/serbanghita/formToObject.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">布雷西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢这种方法，因为：您不必重复两个集合，如果需要，可以使用除“名称”和“值”之外的其他东西，并且可以在将值存储到对象中之前清理它们（例如，如果您有不想存储的默认值）。</font></font></p>

<pre><code>$.formObject = function($o) {<font></font>
    var o = {},<font></font>
        real_value = function($field) {<font></font>
            var val = $field.val() || "";<font></font>
<font></font>
            // additional cleaning here, if needed<font></font>
<font></font>
            return val;<font></font>
        };<font></font>
<font></font>
    if (typeof o != "object") {<font></font>
        $o = $(o);<font></font>
    }<font></font>
<font></font>
    $(":input[name]", $o).each(function(i, field) {<font></font>
        var $field = $(field),<font></font>
            name = $field.attr("name"),<font></font>
            value = real_value($field);<font></font>
<font></font>
        if (o[name]) {<font></font>
            if (!$.isArray(o[name])) {<font></font>
                o[name] = [o[name]];<font></font>
            }<font></font>
<font></font>
            o[name].push(value);<font></font>
        }<font></font>
<font></font>
        else {<font></font>
            o[name] = value;<font></font>
        }<font></font>
    });<font></font>
<font></font>
    return o;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样使用：</font></font></p>

<pre><code>var obj = $.formObject($("#someForm"));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在Firefox中测试过。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现所选解决方案有问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用具有基于数组名称的表单时，jQuery serializeArray（）函数实际上消失了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个PHP框架，该框架使用基于数组的字段名来允许将同一表单在多个视图中多次放置到同一页面上。</font><font style="vertical-align: inherit;">将添加，编辑和删除都放在同一页面上而不会与表单模型冲突会很方便。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我想对表格进行序列化，而不必删除绝对的基本功能，因此我决定编写自己的seralizeArray（）：</font></font></p>

<pre><code>        var $vals = {};<font></font>
<font></font>
        $("#video_edit_form input").each(function(i){<font></font>
            var name = $(this).attr("name").replace(/editSingleForm\[/i, '');<font></font>
<font></font>
            name = name.replace(/\]/i, '');<font></font>
<font></font>
            switch($(this).attr("type")){<font></font>
                case "text":<font></font>
                    $vals[name] = $(this).val();<font></font>
                    break;<font></font>
                case "checkbox":<font></font>
                    if($(this).attr("checked")){<font></font>
                        $vals[name] = $(this).val();<font></font>
                    }<font></font>
                    break;<font></font>
                case "radio":<font></font>
                    if($(this).attr("checked")){<font></font>
                        $vals[name] = $(this).val();<font></font>
                    }<font></font>
                    break;<font></font>
                default:<font></font>
                    break;<font></font>
            }<font></font>
        });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意：这也可以在表单commit（）之外使用，因此，如果在其余代码中发生错误，则如果您将链接放置在“保存更改”按钮上，则表单将不会提交。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，永远不要仅使用此函数来验证表单，以收集要发送到服务器端的数据以进行验证。</font><font style="vertical-align: inherit;">使用此类弱且大量分配的代码将导致</font></font><a href="http://en.wikipedia.org/wiki/Cross-site_scripting" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙米亚猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于jQuery，有一个插件可以做到这一点</font></font><em><a href="https://github.com/marioizquierdo/jquery.serializeJSON" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jquery.serializeJSON</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我现在已经在一些项目上成功使用了它。</font><font style="vertical-align: inherit;">它像一种魅力。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无JimEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery/8407771#8407771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">maček的解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我对其进行了修改，使其可以与ASP.NET MVC以相同形式处理其嵌套/复杂对象的方式一起使用。</font><font style="vertical-align: inherit;">您要做的就是将验证部分修改为：</font></font></p>

<pre><code>"validate": /^[a-zA-Z][a-zA-Z0-9_]*((?:\[(?:\d*|[a-zA-Z0-9_]+)\])*(?:\.)[a-zA-Z][a-zA-Z0-9_]*)*$/,
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将匹配并正确映射具有以下名称的元素：</font></font></p>

<pre><code>&lt;input type="text" name="zooName" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>&lt;input type="text" name="zooAnimals[0].name" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这个问题的最简单，最准确的方法是使用</font></font><a href="http://benalman.com/projects/jquery-bbq-plugin/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">烧烤插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或这</font></font><a href="https://github.com/chrissrogers/jquery-deparam" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（大约是0.5K字节大小）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它也适用于多维数组。</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$.fn.serializeObject = function()<font></font>
{<font></font>
	return $.deparam(this.serialize());<font></font>
};</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现Tobias Cohen的代码有问题（我没有足够的要点直接对其进行评论），否则对我有用。</font><font style="vertical-align: inherit;">如果您有两个具有相同名称的选择选项，且都具有value =“”，则原始代码将产生“ name”：“”而不是“ name”：[“”，“”]</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为可以通过在第一个if条件上添加“ || o [this.name] ==”来解决此问题：</font></font></p>

<pre><code>$.fn.serializeObject = function()<font></font>
{<font></font>
    var o = {};<font></font>
    var a = this.serializeArray();<font></font>
    $.each(a, function() {<font></font>
        if (o[this.name] || o[this.name] == '') {<font></font>
            if (!o[this.name].push) {<font></font>
                o[this.name] = [o[this.name]];<font></font>
            }<font></font>
            o[this.name].push(this.value || '');<font></font>
        } else {<font></font>
            o[this.name] = this.value || '';<font></font>
        }<font></font>
    });<font></font>
    return o;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里最简单。</font><font style="vertical-align: inherit;">我已经用一个简单的字符串替换了一个正则表达式，到目前为止，它们的作用就像是一种魅力。</font><font style="vertical-align: inherit;">我不是正则表达式专家，但我敢打赌，您甚至可以填充非常复杂的对象。</font></font></p>

<pre><code>var values = $(this).serialize(),<font></font>
attributes = {};<font></font>
<font></font>
values.replace(/([^&amp;]+)=([^&amp;]*)/g, function (match, name, value) {<font></font>
    attributes[name] = value;<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<pre><code>function form_to_json (selector) {<font></font>
  var ary = $(selector).serializeArray();<font></font>
  var obj = {};<font></font>
  for (var a = 0; a &lt; ary.length; a++) obj[ary[a].name] = ary[a].value;<font></font>
  return obj;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre><code>{"myfield": "myfield value", "passwordfield": "mypasswordvalue"}
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样做：</font></font></p>

<pre><code>var frm = $(document.myform);<font></font>
var data = JSON.stringify(frm.serializeArray());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><em><a href="http://www.json.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我知道这已经得到了很高的评价，但是</font><font style="vertical-align: inherit;">最近</font></font><a href="https://stackoverflow.com/questions/3277655/how-to-convert-jquery-serialize-data-to-json-object/3277710#3277710"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">又提出了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个</font><a href="https://stackoverflow.com/questions/3277655/how-to-convert-jquery-serialize-data-to-json-object/3277710#3277710"><font style="vertical-align: inherit;">类似的问题</font></a><font style="vertical-align: inherit;">，我也直接针对这个问题。</font><font style="vertical-align: inherit;">我也想提供我的解决方案，因为它比公认的解决方案具有优势：您可以包含禁用的表单元素（这有时很重要，具体取决于您的UI的功能）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我对</font></font><a href="https://stackoverflow.com/questions/3277655/how-to-convert-jquery-serialize-data-to-json-object/3277710#3277710"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个SO问题的回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初，我们使用的是jQuery </font></font><code>serializeArray()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，但是其中不包括被禁用的表单元素。</font><font style="vertical-align: inherit;">我们通常会禁用与页面上其他源“同步”的表单元素，但是我们仍然需要将数据包含在序列化对象中。</font><font style="vertical-align: inherit;">所以，</font></font><code>serializeArray()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的。</font><font style="vertical-align: inherit;">我们使用</font></font><code>:input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器来获取给定容器中的所有输入元素（已启用和已禁用），然后</font></font><code>$.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建我们的对象。</font></font></p>

<pre><code>var inputs = $("#container :input");<font></font>
var obj = $.map(inputs, function(n, i)<font></font>
{<font></font>
    var o = {};<font></font>
    o[n.name] = $(n).val();<font></font>
    return o;<font></font>
});<font></font>
console.log(obj);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，要使此功能起作用，您的每个输入都需要一个</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，该属性将成为结果对象的属性的名称。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，这与我们使用的内容略有不同。</font><font style="vertical-align: inherit;">我们需要创建一个结构为.NET IDictionary的对象，因此我们使用了以下方法：（如果有用，请在此处提供）</font></font></p>

<pre><code>var obj = $.map(inputs, function(n, i)<font></font>
{<font></font>
    return { Key: n.name, Value: $(n).val() };<font></font>
});<font></font>
console.log(obj);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢这两种解决方案，因为它们是</font></font><code>$.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数的</font><font style="vertical-align: inherit;">简单用法</font><font style="vertical-align: inherit;">，并且您可以完全控制选择器（因此，最终将哪些元素包括在结果对象中）。</font><font style="vertical-align: inherit;">另外，不需要额外的插件。</font><font style="vertical-align: inherit;">普通的旧jQuery。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tobias Cohen解决方案的固定版本。</font><font style="vertical-align: inherit;">此代码可以正确处理诸如</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和的</font><font style="vertical-align: inherit;">虚假值</font></font><code>''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>jQuery.fn.serializeObject = function() {<font></font>
  var arrayData, objectData;<font></font>
  arrayData = this.serializeArray();<font></font>
  objectData = {};<font></font>
<font></font>
  $.each(arrayData, function() {<font></font>
    var value;<font></font>
<font></font>
    if (this.value != null) {<font></font>
      value = this.value;<font></font>
    } else {<font></font>
      value = '';<font></font>
    }<font></font>
<font></font>
    if (objectData[this.name] != null) {<font></font>
      if (!objectData[this.name].push) {<font></font>
        objectData[this.name] = [objectData[this.name]];<font></font>
      }<font></font>
<font></font>
      objectData[this.name].push(value);<font></font>
    } else {<font></font>
      objectData[this.name] = value;<font></font>
    }<font></font>
  });<font></font>
<font></font>
  return objectData;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个CoffeeScript版本，以方便您进行编码：</font></font></p>

<pre><code>jQuery.fn.serializeObject = -&gt;<font></font>
  arrayData = @serializeArray()<font></font>
  objectData = {}<font></font>
<font></font>
  $.each arrayData, -&gt;<font></font>
    if @value?<font></font>
      value = @value<font></font>
    else<font></font>
      value = ''<font></font>
<font></font>
    if objectData[@name]?<font></font>
      unless objectData[@name].push<font></font>
        objectData[@name] = [objectData[@name]]<font></font>
<font></font>
      objectData[@name].push value<font></font>
    else<font></font>
      objectData[@name] = value<font></font>
<font></font>
  return objectData<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么问题： </font></font></p>

<pre><code>var data = {};<font></font>
$(".form-selector").serializeArray().map(function(x){data[x.name] = x.value;}); <font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
