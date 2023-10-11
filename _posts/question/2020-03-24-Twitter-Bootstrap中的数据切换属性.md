---
layout: question
title:  Twitter Bootstrap中的数据切换属性
date:   2020-03-24T10:52:23.000Z
description: data-toggleTwitter Bootstrap 中的属性有什么作用？我在Bootstrap API中找不到答案。在链接之前，我也看到过类似的...
img: 
author: TonyDavaid
category: question
answer: 9
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>data-toggle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Bootstrap </font><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">属性有</font><font style="vertical-align: inherit;">什么作用</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我在Bootstrap API中找不到答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://stackoverflow.com/questions/10481684/where-does-data-toggle-attribute-of-bootstrap-framework-come-from"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前，我也看到过类似的问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但这并没有太大帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3689篇《Twitter Bootstrap中的数据切换属性》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="http://getbootstrap.com/javascript/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以找到有关</font></font><code>data-toggle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以分配的</font><font style="vertical-align: inherit;">值的更多示例</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需访问该页面，然后</font></font><code>CTRL+F</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索</font></font><code>data-toggle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是Bootstrap定义的HTML5数据属性。</font><font style="vertical-align: inherit;">它将按钮绑定到事件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅猿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap利用HTML5标准以便在javascript中轻松访问DOM元素属性。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据-*</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">形成称为自定义数据属性的一类属性，这些属性允许专有信息在HTML及其可以由脚本使用的DOM表示形式之间交换。</font><font style="vertical-align: inherit;">所有此类自定义数据都可以通过设置属性的元素的HTMLElement接口获得。</font><font style="vertical-align: inherit;">HTMLElement.dataset属性提供对它们的访问。</font></font></p>
</blockquote>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-data-*" rel="nofollow" title="参考"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设您正在创建一个Web应用程序以列出和显示配方。</font><font style="vertical-align: inherit;">您可能希望客户在选择要打开的食谱之前能够对列表进行排序，显示食谱的功能等。</font><font style="vertical-align: inherit;">为此，您需要在食谱的列表元素内关联诸如烹饪时间，主要原料，进餐位置等内容。</font></font></p>

<pre><code>&lt;li&gt;&lt;a href="recipe1.html"&gt;Borscht&lt;/a&gt;&lt;/li&gt;<font></font>
&lt;li&gt;&lt;a href="recipe2.html"&gt;Chocolate Mousse&lt;/a&gt;&lt;/li&gt;<font></font>
&lt;li&gt;&lt;a href="recipe3.html"&gt;Almond Radiccio Salad&lt;/a&gt;&lt;/li&gt;<font></font>
&lt;li&gt;&lt;a href="recipe4.html"&gt;Deviled Eggs&lt;/a&gt;&lt;/li&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使该信息进入页面，您可以做很多不同的事情。</font><font style="vertical-align: inherit;">您可以为每个LI元素添加注释，可以为列表项添加rel属性，还可以根据时间，进餐和配料（即）将所有食谱放在单独的文件夹中。</font><font style="vertical-align: inherit;">大多数开发人员采用的解决方案是使用类属性来存储有关当前元素的信息。</font><font style="vertical-align: inherit;">这有几个优点：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在一个元素上存储多个类 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类名可以是人类可读的 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript（className）访问类很容易 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类与其所在的元素相关联</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是此方法有一些主要缺点：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须记住课程的内容。</font><font style="vertical-align: inherit;">如果您忘记了或新的开发人员接管了项目，则可能会删除或更改这些类，而不会意识到这会影响应用程序的运行方式。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类也用于CSS样式，您可能会错误地将CSS类与数据类重复，最终在您的实时页面上出现奇怪的样式。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加多个数据元素更加困难。</font><font style="vertical-align: inherit;">如果您有多个数据元素，则需要使用JavaScript以某种方式通过类的名称或类列表中的位置来访问它们。</font><font style="vertical-align: inherit;">但是很容易搞砸。</font></font></li>
</ul>

<p>All the other methods I suggested had these problems as well as others. But since it was the only way to quickly and easily include data, that’s what we did.
HTML5 Data Attributes to the Rescue</p>

<p>HTML5 added a new type of attribute to any element—the custom data element (data-*). These are custom (denoted by the *) attributes that you can add to your HTML elements to define any type of data you want. They consist of two parts:</p>

<p>Attribute Name
This is the name of the attribute. It must be at least one lowercase character and have the prefix data-. For example: data-main-ingredient, data-cooking-time, data-meal. This is the name of your data.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他任何HTML属性一样，您可以将数据本身包含在用等号分隔的引号中。</font><font style="vertical-align: inherit;">该数据可以是网页上有效的任何字符串。</font><font style="vertical-align: inherit;">例如：data-main-ingredient =“ chocolate”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以将这些数据属性应用于所需的任何HTML元素。</font><font style="vertical-align: inherit;">例如，您可以在上面的示例列表中定义信息：</font></font></p>

<pre><code>&lt;li data-main-ingredient="beets" data-cooking-time="1 hour" data-meal="dinner"&gt;&lt;a href="recipe1.html"&gt;Borscht&lt;/a&gt;&lt;/li&gt;<font></font>
&lt;li data-main-ingredient="chocolate" data-cooking-time="30 minutes" data-meal="dessert"&gt;&lt;a href="recipe2.html"&gt;Chocolate Mousse&lt;/a&gt;&lt;/li&gt;<font></font>
&lt;li data-main-ingredient="radiccio" data-cooking-time="20 minutes" data-meal="dinner"&gt;&lt;a href="recipe1.html"&gt;Almond Radiccio Salad&lt;/a&gt;&lt;/li&gt;<font></font>
&lt;li data-main-ingredient="eggs" data-cooking-time="15 minutes" data-meal="appetizer"&gt;&lt;a href="recipe1.html"&gt;Deviled Eggs&lt;/a&gt;&lt;/li&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中获得该信息后，就可以使用JavaScript进行访问，并根据该数据来操作页面。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何以开头的</font></font><code>data-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性都是用于某些特定目的的自定义属性的前缀（该目的取决于应用程序）。</font><font style="vertical-align: inherit;">它被作为一种语义上的补救措施，用于人们</font></font><code>rel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于原始目的以外的目的而</font><font style="vertical-align: inherit;">大量使用</font><font style="vertical-align: inherit;">和其他属性（</font></font><code>rel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常用于保存诸如高级工具提示之类的数据）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就Bootstrap而言，我不熟悉其内部工作原理，但从名称来看，我猜想这是一个钩子，可以切换可见性或它所附加元素的模式（例如可折叠</font></font><a href="http://octopress.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Octopress.org上的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">侧边栏</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><a href="http://html5doctor.com/html5-custom-data-attributes/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html5doctor在data- attribute上有一篇不错的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="http://jquery.malsup.com/cycle2/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2周期是广泛使用data-attribute的另一个示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://getbootstrap.com/javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导文档：</font></font></a></p>

<pre><code>&lt;!--Activate a modal without writing JavaScript. Set data-toggle="modal" on a <font></font>
controller element, like a button, along with a data-target="#foo" or href="#foo" <font></font>
to target a specific modal to toggle.--&gt;<font></font>
<font></font>
&lt;button type="button" data-toggle="modal" data-target="#myModal"&gt;Launch modal&lt;/button&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此数据属性的存在告诉Bootstrap在用户交互时在另一个元素的可视状态或逻辑状态之间切换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它用于显示模式，选项卡内容，工具提示和弹出菜单，以及设置切换按钮的按下状态。</font><font style="vertical-align: inherit;">没有清晰的文档，它有多种用法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出了这么多答案，但是并没有达到目的。</font><font style="vertical-align: inherit;">让我们解决这个问题。</font></font></p>

<p><a href="http://www.w3schools.com/bootstrap/bootstrap_ref_js_collapse.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/bootstrap/bootstrap_ref_js_collapse.asp </font></font></a>
<br><br><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至此</font></font></b></p>

<ol>
<li><font style="vertical-align: inherit;"></font><code>data-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5解析器不会解析</font><font style="vertical-align: inherit;">任何以开头的属性</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap使用该</font></font><code>data-toggle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性创建折叠功能。</font></font></li>
</ol>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用方法</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：只需2个步骤</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>class="collapse"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>#A</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要折叠</font><font style="vertical-align: inherit;">的元素</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>data-target="#A"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>data-toggle="collapse"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目的：</font><font style="vertical-align: inherit;">如果使用Bootstrap，</font><font style="vertical-align: inherit;">该</font></font><code>data-toggle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性允许我们创建一个控件来折叠/展开</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（块）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个HTML5数据属性，可自动将元素连接到其所属的小部件类型。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例子：</font></font></p>

<pre><code>data-toggle="modal"<font></font>
data-toggle="collapse"<font></font>
data-toggle="dropdown"<font></font>
data-toggle="tab"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历</font></font><a href="http://getbootstrap.com/javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并搜索data-toggle，您将在代码示例中看到它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个工作示例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/&gt;<font></font>
<font></font>
&lt;div class="dropdown"&gt;<font></font>
  &lt;a class="dropdown-toggle" data-toggle="dropdown" href="#"&gt;Dropdown trigger&lt;/a&gt;<font></font>
  &lt;ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"&gt;<font></font>
    &lt;li&gt;&lt;a href="#"&gt;Item&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
