---
layout: question
title:  HTML中id和name属性之间的区别
date:   2020-03-17T09:58:39.000Z
description: id和name属性有什么区别？它们似乎都具有提供标识符的相同目的。我想知道（特别是关于HTML表单）出于某种原因是否有必要或同时使用两者。...
img: 
author: Tony老丝
category: question
answer: 16
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性有什么</font><font style="vertical-align: inherit;">区别</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">它们似乎都具有提供标识符的相同目的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道（特别是关于HTML表单）出于某种原因是否有必要或同时使用两者。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1948篇《HTML中id和name属性之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>ID is used to uniquely identify an element. </p>

<p>Name is used in forms.Although you  submit a form,  if you dont give any name, nothing will will be submitted. Hence form elements need a name to get identified by form methods like "get or push".</p>

<p>And the ones only with name attribute will go out. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>There is no literal difference between an id and name.
name is identifier and is used in http request sent by browser to server as a variable name associated with data contained in  the value attribute of element.</p>

<p>The id  on the other hand is a unique identifier for browser, client side and JavaScript.Hence form needs an id while its elements need a name .
id is more specicifically used in adding attributes to unique elements.In DOM methods,Id is used in Javascript for referencing the specific element you wantyour action to take place on.For example:-</p>

<pre><code>&lt;html&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
&lt;h1 id="demo"&gt;&lt;/h1&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
document.getElementById("demo").innerHTML = "Hello World!";<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p>Same can be achieved by name attribute,but its preffered to use id in form and name for small form elements like the input tag or select tag.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小阿飞小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Based on personal experiences and according to the W3 Schools description for attributes: </p>

<p>ID is a Global Attribute and applies to virtually all elements in HTML. It is used to uniquely identify elements on the Web page, and its value is mostly accessed from the frontend (typically through JavaScript or jQuery).</p>

<p>name is an attribute that is useful to specific elements (such as form elements, etc) in HTML. Its value is mostly sent to the backend for processing. </p>

<p><a href="https://www.w3schools.com/tags/ref_attributes.asp" rel="nofollow noreferrer">https://www.w3schools.com/tags/ref_attributes.asp</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomLEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Below is an interesting use of the id attribute. It is used within the  tag and used to identify the form for  elements outside of the  boundaries so that they will be included with the other  fields within the form. </p>

<pre><code> &lt;form action="action_page.php" id="form1"&gt;<font></font>
 First name: &lt;input type="text" name="fname"&gt;&lt;br&gt;<font></font>
 &lt;input type="submit" value="Submit"&gt;<font></font>
 &lt;/form&gt;<font></font>
<font></font>
 &lt;p&gt;The "Last name" field below is outside the form element, but still part of the form.&lt;/p&gt;<font></font>
 Last name: &lt;input type="text" name="lname" form="form1"&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Gil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Id : 
1) It is used to identify the HTML element through the Document Object Model (via Javascript or styled with CSS). 
2) Id is expected to be unique within the page.</p>

<p>Name corresponds to the form element and identifies what is posted back to the server.
Example : </p>

<pre><code>&lt;form action="action_page.php" id="Myform"&gt;<font></font>
 First name: &lt;input type="text" name="FirstName"&gt;&lt;br&gt;<font></font>
 &lt;input type="submit" value="Submit"&gt;<font></font>
 &lt;/form&gt;<font></font>
<font></font>
 &lt;p&gt;The "Last name" field below is outside the form element, but still part of the form.&lt;/p&gt;<font></font>
 Last name: &lt;input type="text" name="LastName" form="Myform"&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Eva斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该链接具有相同基本问题的答案，但基本上，id用于脚本标识，名称用于服务器端。</font></font></p>

<p><a href="http://www.velocityreviews.com/forums/t115115-id-vs-name-attribute-for-html-controls.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.velocityreviews.com/forums/t115115-id-vs-name-attribute-for-html-controls.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>The ID of a form input element has nothing to do with the data contained within the element. IDs are for hooking the element with JavaScript and CSS. The name attribute, however, is used in the HTTP request sent by your browser to the server as a variable name associated with the data contained in the value attribute.</p>

<p>For instance:</p>

<pre><code>&lt;form&gt;<font></font>
    &lt;input type="text" name="user" value="bob"&gt;<font></font>
    &lt;input type="password" name="password" value="abcd1234"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>When the form is submitted, the form data will be included in the HTTP header like this:</p>

<p><strong>If you add an ID attribute, it will not change anything in the HTTP header. It will just make it easier to hook it with CSS and JavaScript.</strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于链接目标已弃用，在HTML5中无效。</font><font style="vertical-align: inherit;">它至少在最新的Firefox（v13）中不再起作用。</font><font style="vertical-align: inherit;">更改</font></font><code>&lt;a name="hello"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>&lt;a id="hello"&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标不需要是</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，可以是</font></font><code>&lt;p id="hello"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt;或</font></font><code>&lt;h2 id="hello"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等，这通常是更干净的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他帖子所明确指出的那样，</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表格仍在使用（需要）。</font><font style="vertical-align: inherit;">它也仍在META标签中使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom理查德逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;form action="demo_form.asp"&gt;<font></font>
&lt;label for="male"&gt;Male&lt;/label&gt;<font></font>
&lt;input type="radio" name="sex" id="male" value="male"&gt;&lt;br&gt;<font></font>
&lt;label for="female"&gt;Female&lt;/label&gt;<font></font>
&lt;input type="radio" name="sex" id="female" value="female"&gt;&lt;br&gt;<font></font>
&lt;input type="submit" value="Submit"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Generally, it is assumed that <strong>name is always superseded by id</strong>. This is true, to some extent, but not for <strong>form fields and frame names</strong>, practically speaking. For example, with form elements the <code>name</code> attribute is used to determine the <strong>name-value pairs to be sent to a server-side program</strong> and should not be eliminated. <code>Browsers do not use id in that manner</code>. To be on the safe side, you could use name and id attributes on form elements. So, we would write the following:</p>

<pre><code>&lt;form id="myForm" name="myForm"&gt;<font></font>
     &lt;input type="text" id="userName" name="userName" /&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>To ensure compatibility, having matching name and id attribute values when both are defined is a good idea. However, be careful—some tags, <strong>particularly radio buttons, must have nonunique name values, but require unique id values.</strong> Once again, this should reference that id is not simply a replacement for name; they are different in purpose. Furthermore, do not discount the old-style approach, a deep look at modern libraries shows such syntax style used for performance and ease purposes at times. Your goal should always be in favor of compatibility.</p>

<p>Now in most elements, the name attribute has been deprecated in favor of the more ubiquitous id attribute. However, in some cases, particularly form fields (<code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;textarea&gt;</code>), the name attribute lives on because it continues to be required to set the name-value pair for form submission. Also, we find that some elements, notably frames and links, may continue to use the name attribute because it is often useful for retrieving these elements by name.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">id和name之间有明显的区别。</font><font style="vertical-align: inherit;">通常，当名称继续出现时，我们可以将值设置为相同。</font><font style="vertical-align: inherit;">但是，id必须是唯一的，在某些情况下，名称应该不是唯一的-想想单选按钮。</font><font style="vertical-align: inherit;">令人遗憾的是，虽然id值的唯一性虽然受到标记验证的约束，但并没有达到应有的一致性。</font><font style="vertical-align: inherit;">浏览器中的CSS实现将为共享ID值的对象设置样式；</font><font style="vertical-align: inherit;">因此，直到运行时，我们才可能捕获可能影响JavaScript的标记或样式错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘自JavaScript- </font></font><code>The Complete Reference by Thomas-Powell</code> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearAStafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我考虑和使用它的方式很简单：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">id</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于CSS和JavaScript / jQuery（在页面中必须是唯一的）</font></font></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTML提交表单时，</font><strong><font style="vertical-align: inherit;">名称</font></strong><font style="vertical-align: inherit;">用于PHP中的表单处理（在表单中必须唯一-在某种程度上，请参见</font><font style="vertical-align: inherit;">下面的</font></font><a href="https://stackoverflow.com/users/3748030"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Paul</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的评论）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝路易神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID标签-CSS使用的ID标签，定义</font><font style="vertical-align: inherit;">div，span或其他元素</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例。</font><font style="vertical-align: inherit;">出现在Javascript DOM模型中，使您可以通过各种函数调用来访问它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段的名称标签-每个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称标签都是唯一的</font><font style="vertical-align: inherit;">-除非您要传递给PHP /服务器端处理的数组。</font><font style="vertical-align: inherit;">您可以按名称通过Javascript访问它，但我认为它不会作为DOM中的节点出现，或者可能会受到一些限制（例如，如果我没记错的话，则不能使用.innerHTML）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这个</font></font><a href="http://mindprod.com/jgloss/htmlforms.html#IDVSNAME" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://mindprod.com/jgloss/htmlforms.html#IDVSNAME</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么不同？</font><font style="vertical-align: inherit;">简短的答案是，请同时使用两者，不要担心。</font><font style="vertical-align: inherit;">但是，如果您想了解这种愚蠢的做法，请参考以下内容：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">id =用作这样的目标：</font></font><code>&lt;some-element id="XXX"&gt;&lt;/some-element&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这样的链接：</font></font><code>&lt;a href="#XXX"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您单击表单中的“提交”时，name =还用于标记通过HTTP（超文本传输​​协议）GET或POST发送到服务器的消息中的字段。</font></font></p>
  
  <p>id= labels the fields for use by JavaScript and Java DOM (Document Object Model).
  The names in name= must be unique within a form. The names in id= must be unique within the entire document.</p>
  
  <p>Sometimes the the name= and id= names will differ, because the server is expecting the same name from various forms in the same document or various radio buttons in the same form as in the example above. The id= must be unique; the name= must not be.</p>
  
  <p>JavaScript needed unique names, but there were too many documents already out here without unique name= names, so the W3 people invented the id tag that was required to be unique. Unfortunately older browsers did not understand it. So you need both naming schemes in your forms.</p>
</blockquote>

<p>NOTE: attribute "name" for some tags like <code>&lt;a&gt;</code> is not supported in HTML5.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenStafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简短的摘要：</font></font></h1>

<ul>
<li><p><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档对象模型</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（通过JavaScript或CSS样式）</font><strong><font style="vertical-align: inherit;">识别HTML元素</font></strong><font style="vertical-align: inherit;">。</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面内应该是唯一的。</font></font></p></li>
<li><p><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对应于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">form</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，并</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标识发布回服务器的内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOJinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性用于表单控件（例如</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因为这是</font><font style="vertical-align: inherit;">表单提交时在</font></font><code>POST</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>GET</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用中</font><font style="vertical-align: inherit;">使用的标识符</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当您需要使用CSS，JavaScript或</font></font><a href="http://en.wikipedia.org/wiki/Fragment_identifier" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段标识符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来寻址特定的HTML元素时，请</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也可以通过名称查找元素，但是</font><font style="vertical-align: inherit;">通过ID </font><font style="vertical-align: inherit;">查找元素</font></font><a href="https://stackoverflow.com/questions/6351570/what-is-the-difference-between-javascripts-getelementbyid-and-getelementsbyna"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更简单，更可靠</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Itachi</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在表单提交中发送数据时使用</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">不同的控件反应不同。</font><font style="vertical-align: inherit;">例如，您可能有几个单选按钮，它们具有不同的</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，但属性相同</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">提交后，响应中只有一个值-您选择的单选按钮。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，这还不止于此，但是它一定会让您思考正确的方向。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
