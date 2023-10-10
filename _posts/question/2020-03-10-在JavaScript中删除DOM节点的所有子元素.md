---
layout: question
title:  在JavaScript中删除DOM节点的所有子元素
date:   2020-03-10T04:19:26.000Z
description: 我将如何删除JavaScript中DOM节点的所有子元素？说我有以下（丑陋的）HTML：<p id="foo">    <span>hello<...
img: 
author: 小小TomNear
category: question
answer: 22
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将如何删除JavaScript中DOM节点的所有子元素？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我有以下（丑陋的）HTML：</font></font></p>

<pre><code>&lt;p id="foo"&gt;<font></font>
    &lt;span&gt;hello&lt;/span&gt;<font></font>
    &lt;div&gt;world&lt;/div&gt;<font></font>
&lt;/p&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我抓住了我想要的节点，如下所示：</font></font></p>

<pre><code>var myNode = document.getElementById("foo");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎么能去掉的孩子</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这样正好</font></font><code>&lt;p id="foo"&gt;&lt;/p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还剩下什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以做：</font></font></p>

<pre><code>myNode.childNodes = new Array();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是我应该使用某种组合</font></font><code>removeElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望答案直接是DOM；</font><font style="vertical-align: inherit;">如果您还提供jQuery答案以及仅DOM答案，则需要加分。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第472篇《在JavaScript中删除DOM节点的所有子元素》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>with jQuery :</p>

<pre><code>$("#foo").find("*").remove();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GOItachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>This is a pure javascript i am not using jQuery but works in all browser even IE and it is verry simple to understand</p>

<pre><code>   &lt;div id="my_div"&gt;<font></font>
    &lt;p&gt;Paragraph one&lt;/p&gt;<font></font>
    &lt;p&gt;Paragraph two&lt;/p&gt;<font></font>
    &lt;p&gt;Paragraph three&lt;/p&gt;<font></font>
   &lt;/div&gt;<font></font>
   &lt;button id ="my_button&gt;Remove nodes ?&lt;/button&gt;<font></font>
<font></font>
   document.getElementById("my_button").addEventListener("click",function(){<font></font>
<font></font>
  let parent_node =document.getElemetById("my_div"); //Div which contains paagraphs<font></font>
<font></font>
  //Let find numbers of child inside the div then remove all<font></font>
  for(var i =0; i &lt; parent_node.childNodes.length; i++) {<font></font>
     //To avoid a problem which may happen if there is no childNodes[i] <font></font>
     try{<font></font>
       if(parent_node.childNodes[i]){<font></font>
         parent_node.removeChild(parent_node.childNodes[i]);<font></font>
       }<font></font>
     }catch(e){<font></font>
     }<font></font>
  }<font></font>
<font></font>
})<font></font>
<font></font>
or you may simpli do this which is a quick way to do<font></font>
<font></font>
document.getElementById("my_button").addEventListener("click",function(){<font></font>
<font></font>
 let parent_node =document.getElemetById("my_div");<font></font>
 parent_node.innerHTML ="";<font></font>
<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>If you want to put something back into that <code>div</code>, the <code>innerHTML</code> is probably better.</p>

<p>My example:</p>

<pre><code>&lt;ul&gt;&lt;div id="result"&gt;&lt;/div&gt;&lt;/ul&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  function displayHTML(result){<font></font>
    var movieLink = document.createElement("li");<font></font>
    var t = document.createTextNode(result.Title);<font></font>
    movieLink.appendChild(t);<font></font>
    outputDiv.appendChild(movieLink);<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>If I use the <code>.firstChild</code> or <code>.lastChild</code> method the <code>displayHTML()</code> function doesnt work afterwards, but no problem with the <code>.innerHTML</code> method.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙伽罗Tom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>simple and fast using for loop!!</p>

<pre><code>var myNode = document.getElementById("foo");<font></font>
<font></font>
    for(var i = myNode.childNodes.length - 1; i &gt;= 0; --i) {<font></font>
      myNode.removeChild(myNode.childNodes[i]);<font></font>
    }<font></font>
</code></pre>

<p>this will not work in <code>&lt;span&gt;</code> tag!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>The easiest way:</p>

<pre><code>let container = document.getElementById("containerId");<font></font>
container.innerHTML = "";<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云伽罗伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>simply only IE:</p>

<pre><code>parentElement.removeNode(true);
</code></pre>

<p><code>true</code> - means to do deep removal - which means that all child are also removed</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Other ways in jQuery</p>

<pre><code>var foo = $("#foo");<font></font>
foo.children().remove();<font></font>
or<font></font>
$("*", foo ).remove();<font></font>
or<font></font>
foo.html("");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Functional only approach:</p>

<pre><code>const domChildren = (el) =&gt; Array.from(el.childNodes)<font></font>
const domRemove = (el) =&gt; el.parentNode.removeChild(el)<font></font>
const domEmpty = (el) =&gt; domChildren(el).map(domRemove)<font></font>
</code></pre>

<p>"childNodes" in domChildren will give a nodeList of the immediate children elements, which is empty when none are found. In order to map over the nodeList, domChildren converts it to array. domEmpty maps a function domRemove over all elements which removes it.</p>

<p>Example usage:</p>

<pre><code>domEmpty(document.body)
</code></pre>

<p>removes all children from the body element.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚看到有人在另一个地方提到这个问题，以为我会添加一个我还没有看到的方法：</font></font></p>

<pre><code>function clear(el) {<font></font>
    el.parentNode.replaceChild(el.cloneNode(false), el);<font></font>
}<font></font>
<font></font>
var myNode = document.getElementById("foo");<font></font>
clear(myNode);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">clear函数采用元素并使用父节点将其自身替换为没有子元素的副本。</font><font style="vertical-align: inherit;">如果元素稀疏，则性能提升不多，但是当元素具有一堆节点时，可以实现性能提升。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我们不遵循这里最简单的方法“删除”却在里面循环了。</font></font></p>

<pre><code>const foo = document.querySelector(".foo");<font></font>
while (foo.firstChild) {<font></font>
  foo.firstChild.remove();     <font></font>
}<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择父div</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在While循环内使用“删除”方法消除第一个子元素，直到没有剩余子元素为止。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心小哥</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，JavaScript使用数组来引用DOM节点列表。</font><font style="vertical-align: inherit;">因此，如果您有兴趣通过HTMLElements数组进行此操作，它将很好地工作。</font><font style="vertical-align: inherit;">另外，值得注意的是，因为我使用的是数组引用而不是JavaScript原型，所以它可以在包括IE在内的任何浏览器中使用。</font></font></p>

<pre><code>while(nodeArray.length !== 0) {<font></font>
  nodeArray[0].parentNode.removeChild(nodeArray[0]);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用范围循环对我来说是最自然的：</font></font></p>

<pre><code>for (var child of node.childNodes) {<font></font>
    child.remove();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我在Chrome和Firefox中的测量，它慢了1.3倍。</font><font style="vertical-align: inherit;">在正常情况下，这可能无关紧要。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到人们在做：</font></font></p>

<pre><code>while (el.firstNode) {<font></font>
    el.removeChild(el.firstNode);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后有人说使用</font></font><code>el.lastNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更快</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我认为这是最快的：</font></font></p>

<pre><code>var children = el.childNodes;<font></font>
for (var i=children.length - 1; i&gt;-1; i--) {<font></font>
    el.removeNode(children[i]);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你怎么看？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ps：这个话题对我来说是个救命稻草。</font><font style="vertical-align: inherit;">我的Firefox插件被拒绝，因为我使用了innerHTML。</font><font style="vertical-align: inherit;">长期以来一直是习惯。</font><font style="vertical-align: inherit;">那我就这样 </font><font style="vertical-align: inherit;">我实际上注意到了速度差异。</font><font style="vertical-align: inherit;">在加载时，innerhtml花费了一段时间进行更新，但是通过addElement立即进行！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过Java脚本删除节点的子节点的最简单方法</font></font></p>

<pre><code>var myNode = document.getElementById("foo");<font></font>
while(myNode.hasChildNodes())<font></font>
{<font></font>
   myNode.removeChild(myNode.lastChild);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">innerText是赢家！</font></font><a href="http://jsperf.com/innerhtml-vs-removechild/133" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/innerhtml-vs-removechild/133</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在所有先前的测试中，父节点的内部dom在第一次迭代时都被删除，然后将innerHTML或removeChild应用于空div。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>var empty_element = function (element) {<font></font>
<font></font>
    var node = element;<font></font>
<font></font>
    while (element.hasChildNodes()) {              // selected elem has children<font></font>
<font></font>
        if (node.hasChildNodes()) {                // current node has children<font></font>
            node = node.lastChild;                 // set current node to child<font></font>
        }<font></font>
        else {                                     // last child found<font></font>
            console.log(node.nodeName);<font></font>
            node = node.parentNode;                // set node to parent<font></font>
            node.removeChild(node.lastChild);      // remove last node<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将删除元素内的所有节点。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Stafan</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种选择可以实现：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的 （）：</font></font></p>

<pre><code>while (node.lastChild) {<font></font>
  node.removeChild(node.lastChild);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代方案（较慢）：</font></font></p>

<pre><code>while (node.firstChild) {<font></font>
  node.removeChild(node.firstChild);<font></font>
}<font></font>
<font></font>
while (node.hasChildNodes()) {<font></font>
  node.removeChild(node.lastChild);<font></font>
}<font></font>
</code></pre>

<p><a href="https://jsperf.com/remove-all-children-from-dom-element/1" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有建议选项的基准</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProItachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我通常的工作：</font></font></p>

<pre><code>HTMLElement.prototype.empty = function() {<font></font>
    while (this.firstChild) {<font></font>
        this.removeChild(this.firstChild);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">瞧，稍后您可以使用以下命令清空任何dom元素：</font></font></p>

<pre><code>anyDom.empty()
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>element.textContent = '';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像innerText一样，标准除外。</font><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">比</font></font><a href="http://jsperf.com/so-remove-children"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">慢</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font><code>removeChild()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但使用起来更容易，并且如果您没有太多要删除的内容，则不会对性能造成太大影响。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearPro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只想让节点没有子节点，也可以像这样复制它：</font></font></p>

<pre><code>var dupNode = document.getElementById("foo").cloneNode(false);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取决于您要实现的目标。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的...</font></font></p>

<pre><code>var removeChilds = function (node) {<font></font>
    var last;<font></font>
    while (last = node.lastChild) node.removeChild(last);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢Andrey </font></font><a href="http://jsperf.com/innerhtml-vs-removechild/15" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lushnikov提供的jsperf.com链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（很酷的网站！）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：显然，Chrome在firstChild和lastChild之间没有性能差异。</font><font style="vertical-align: inherit;">最佳答案显示了一个很好的性能解决方案。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用现代Javascript，搭配</font></font><code>remove</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></h1>

<pre><code>const parent = document.getElementById("foo");<font></font>
while (parent.firstChild) {<font></font>
    parent.firstChild.remove();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在ES5中写入删除节点的新方法。</font><font style="vertical-align: inherit;">这是香草JS，读</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得多</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">漂亮比以前的版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数用户应该拥有现代的浏览器，或者您可以根据需要向下转换。</font></font></p>

<p><a href="https://caniuse.com/#feat=childnode-remove" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -2019年12月95％</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
