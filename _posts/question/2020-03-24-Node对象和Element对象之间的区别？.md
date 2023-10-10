---
layout: question
title:  Node对象和Element对象之间的区别？
date:   2020-03-24T08:38:13.000Z
description: 我对Node对象和Element对象完全感到困惑。document.getElementById()返回Element对象，同时document.get...
img: 
author: Harry乐
category: question
answer: 5
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对Node对象和Element对象完全感到困惑。
</font></font><code>document.getElementById()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回Element对象，同时</font></font><code>document.getElementsByClassName()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
返回NodeList对象（元素或节点的集合？）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果div是元素对象，那么div节点对象呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是节点对象？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档对象，元素对象和文本对象也是节点对象吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据David Flanagan的书“文档对象，其元素对象和文本对象都是Node对象”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，一个对象如何能够继承Element对象以及Node对象的属性/方法呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是的话，我猜想节点类和元素类在原型原型树中是相关的。</font></font></p>

<pre><code> &lt;div id="test"&gt;<font></font>
           &lt;p class="para"&gt; 123 &lt;/p&gt;<font></font>
           &lt;p class="para"&gt; abc &lt;/p&gt;<font></font>
 &lt;/div&gt;<font></font>
 &lt;p id="id_para"&gt; next &lt;/p&gt;<font></font>
<font></font>
document.documentElement.toString();    // [object HTMLHtmlElement]<font></font>
<font></font>
var div = document.getElementById("test");<font></font>
div.toString();                         // [object HTMLDivElement]                       <font></font>
<font></font>
var p1 = document.getElementById("id_para");<font></font>
p1.toString();                          // [object HTMLParagraphElement]<font></font>
<font></font>
var p2 = document.getElementsByClassName("para");<font></font>
p2.toString();                          //[object HTMLCollection]<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3518篇《Node对象和Element对象之间的区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是实现一个树状结构，所以它的方法是</font></font><code>firstChild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>lastChild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>childNodes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等，这更是一个类的一个通用的树结构。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，一些</font></font><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象也是</font></font><code>Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。  </font></font><code>Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继承自</font></font><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font><code>Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">object实际上代表HTML文件中由标记指定的对象</font></font><code>&lt;div id="content"&gt;&lt;/div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">的</font></font><code>Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类中定义的属性和诸如方法</font></font><code>attributes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>innerHTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>clientWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>blur()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>focus()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是文本节点，而不是</font></font><code>Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">每个</font></font><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象都有一个</font></font><code>nodeType</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">属性指示HTML文档的节点类型：</font></font></p>

<pre><code>1: Element node<font></font>
3: Text node<font></font>
8: Comment node<font></font>
9: the top level node, which is document<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以在控制台中看到一些示例：</font></font></p>

<pre><code>&gt; document instanceof Node<font></font>
  true<font></font>
<font></font>
&gt; document instanceof Element<font></font>
  false<font></font>
<font></font>
&gt; document.firstChild<font></font>
  &lt;html&gt;...&lt;/html&gt;<font></font>
<font></font>
&gt; document.firstChild instanceof Node<font></font>
  true<font></font>
<font></font>
&gt; document.firstChild instanceof Element<font></font>
  true<font></font>
<font></font>
&gt; document.firstChild.firstChild.nextElementSibling<font></font>
  &lt;body&gt;...&lt;/body&gt;<font></font>
<font></font>
&gt; document.firstChild.firstChild.nextElementSibling === document.body<font></font>
  true<font></font>
<font></font>
&gt; document.firstChild.firstChild.nextSibling<font></font>
  #text<font></font>
<font></font>
&gt; document.firstChild.firstChild.nextSibling instanceof Node<font></font>
  true<font></font>
<font></font>
&gt; document.firstChild.firstChild.nextSibling instanceof Element<font></font>
  false<font></font>
<font></font>
&gt; Element.prototype.__proto__ === Node.prototype<font></font>
  true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上方的最后一行显示</font></font><code>Element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继承自</font></font><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（由于，该行将无法在IE </font></font><code>__proto__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中使用。需要使用Chrome，Firefox或Safari）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一下，该</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是节点树的顶部，并且</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个</font></font><code>Document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，并且也</font></font><code>Document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继承自</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">对象</font></font><code>Node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&gt; Document.prototype.__proto__ === Node.prototype<font></font>
  true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是有关Node和Element类的一些文档：</font></font><br>
<a href="https://developer.mozilla.org/en-US/docs/DOM/Node" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://developer.mozilla.org/en-US/docs/DOM/Node" rel="noreferrer"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/DOM/Node </font></a></font><br>
<a href="https://developer.mozilla.org/en-US/docs/DOM/Element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/DOM/Element</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是DOM层次结构中任何类型的对象的通用名称。</font><font style="vertical-align: inherit;">甲</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是一个内置的DOM元素如</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>document.body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也可能是在HTML中指定的HTML标签，例如</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或它可能是由系统创建的用于保存的文本块另一个元件内的文本节点。</font><font style="vertical-align: inherit;">因此，简而言之，a </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是任何DOM对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">An </font></font><code>element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种特定的类型，</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为还有许多其他类型的节点（文本节点，注释节点，文档节点等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM由节点层次结构组成，其中每个节点可以具有父节点，子节点列表以及nextSibling和previousSibling。</font><font style="vertical-align: inherit;">该结构形成树状层次结构。</font><font style="vertical-align: inherit;">该</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点将具有其子节点列表（该</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点和该</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点）。</font><font style="vertical-align: inherit;">该</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点将具有其子节点列表（HTML页面中的顶级元素）等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，a </font></font><code>nodeList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个类似数组的列表</font></font><code>nodes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素是一种特定类型的节点，可以在HTML中使用HTML标签直接指定该元素，并且可以具有诸如</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">属性</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可以有孩子等。还有其他类型的节点，例如注释节点，文本节点等，具有不同的特征。</font><font style="vertical-align: inherit;">每个节点都有一个</font></font><code>.nodeType</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告其节点类型的</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以在此处看到各种类型的节点（</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图表</font><font style="vertical-align: inherit;">）：</font></font></p>

<p><img src="https://i.stack.imgur.com/wjsyB.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会看到一种</font></font><code>ELEMENT_NODE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种特定类型的节点，其</font></font><code>nodeType</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性值为</font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><code>document.getElementById("test")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能返回一个节点，并且保证它是一个元素（特定类型的节点）。</font><font style="vertical-align: inherit;">因此，它仅返回元素而不是列表。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>document.getElementsByClassName("para")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以返回多个对象，因此设计人员选择返回a，</font></font><code>nodeList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这是他们为多个节点列表创建的数据类型。</font><font style="vertical-align: inherit;">由于这些元素只能是元素（通常只有元素具有类名），因此从技术上讲</font></font><code>nodeList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中只有类型元素的节点，设计者可以制作一个名为的不同名称的集合</font></font><code>elementList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但他们选择仅使用一种类型集合中是否仅包含元素。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   HTML5定义了</font></font><code>HTMLCollection</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个HTML元素列表（不是任何节点，只有Elements）。</font><font style="vertical-align: inherit;">HTML5中的许多属性或方法现在都返回</font></font><code>HTMLCollection</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尽管它在接口上与a非常相似</font></font><code>nodeList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但现在有所区别，因为它仅包含Elements，而不包含任何类型的节点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">a </font></font><code>nodeList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和an </font><font style="vertical-align: inherit;">之间的区别</font></font><code>HTMLCollection</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对使用方式的影响很小（据我所知），但是HTML5的设计者已经做出了区分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，该</font></font><code>element.children</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性返回实时HTMLCollection。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p>Node is used to represent tags in general. Divided to 3 types: </p>

<p>Attribute Note: is node which inside its has attributes. 
Exp: <code>&lt;p id=”123”&gt;&lt;/p&gt;</code></p>

<p>Text Node: is node which between the opening and closing its have contian text content.
Exp: <code>&lt;p&gt;Hello&lt;/p&gt;</code></p>

<p>Element Node : is node which inside its has other tags.
Exp: <code>&lt;p&gt;&lt;b&gt;&lt;/b&gt;&lt;/p&gt;</code></p>

<p>Each node may be types simultaneously, not necessarily only of a single type.</p>

<p>Element is simply a element node.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应对所有DOM困境的最佳信息来源</font></font></p>

<p><a href="http://www.w3.org/TR/dom/#nodes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/TR/dom/#nodes</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“实现Document，DocumentFragment，DocumentType，Element，Text，ProcessingInstruction或Comment接口（简称为节点）的对象将参与到树中。”</font></font></p>

<p><a href="http://www.w3.org/TR/dom/#element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/TR/dom/#element</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“元素节点简称为元素。”</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点：</font><a href="http://www.w3schools.com/js/js_htmldom_nodes.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.w3schools.com/js/js_htmldom_nodes.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/js/js_htmldom_nodes.asp</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node对象代表文档树中的单个节点。</font><font style="vertical-align: inherit;">节点可以是元素节点，属性节点，文本节点或“节点类型”一章中说明的任何其他节点类型。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素：</font><a href="http://www.w3schools.com/js/js_htmldom_elements.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.w3schools.com/js/js_htmldom_elements.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/js/js_htmldom_elements.asp</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Element对象表示XML文档中的元素。</font><font style="vertical-align: inherit;">元素可以包含属性，其他元素或文本。</font><font style="vertical-align: inherit;">如果元素包含文本，则文本在文本节点中表示。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复：</font></font></strong> </p>

<ul>
<li><a href="https://stackoverflow.com/questions/132564/whats-the-difference-between-an-element-and-a-node-in-xml"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XML中的元素和节点之间有什么区别？</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/2190863/what-is-the-difference-between-a-node-and-an-element-in-xml"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么节点和元素在XML中不同？</font><font style="vertical-align: inherit;">有什么根据？</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
