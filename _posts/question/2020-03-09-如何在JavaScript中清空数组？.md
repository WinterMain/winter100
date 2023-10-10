---
layout: question
title:  如何在JavaScript中清空数组？
date:   2020-03-09T10:18:25.000Z
description:                                                                          ...
img: 
author: 樱Mandy
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以清空数组</font></font><code>.remove()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如， </font></font></p>

<pre><code>A = [1,2,3,4];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何清空？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要清空Angular 2+ FormArray，请在下面使用。 </font></font></p>

<pre><code>public emptyFormArray(formArray:FormArray) {<font></font>
    for (let i = formArray.controls.length - 1; i &gt;= 0; i--) {<font></font>
        formArray.removeAt(i);<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶还没有人建议这样做：</font></font></p>

<pre class="lang-js prettyprint-override"><code>let xs = [1,2,3,4];<font></font>
for (let i in xs)<font></font>
    delete xs[i];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将产生与其他解决方案完全不同的状态的数组。</font><font style="vertical-align: inherit;">从某种意义上说，该数组已被“清空”：</font></font></p>

<pre><code>xs<font></font>
=&gt; Array [ &lt;4 empty slots&gt; ]<font></font>
<font></font>
[...xs]<font></font>
=&gt; Array [ undefined, undefined, undefined, undefined ]<font></font>
<font></font>
xs.length<font></font>
=&gt; 4<font></font>
<font></font>
xs[0]<font></font>
=&gt; ReferenceError: reference to undefined property xs[0]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>[,,,,]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">生成等效数组</font></font><code>Array(4)</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用常量，则别无选择：</font></font></p>

<pre><code>const numbers = [1, 2, 3]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能重新分配：</font></font></p>

<pre><code>numbers = []
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只能截断：</font></font></p>

<pre><code>numbers.length = 0
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用 </font></font></p>

<pre><code>a = []; 
</code></pre>

<p>Then you are assigning new array reference to a, if reference in a is already assigned to any other variable, then it will not empty that array too and hence garbage collector will not collect that memory.</p>

<p>For ex. </p>

<pre><code>var a=[1,2,3];<font></font>
var b=a;<font></font>
a=[];<font></font>
console.log(b);// It will print [1,2,3];<font></font>
</code></pre>

<p>or</p>

<pre><code>a.length = 0;
</code></pre>

<p>When we specify <code>a.length</code>, we are just resetting boundaries of the array and memory for rest array elements will be connected by garbage collector. </p>

<p>Instead of these two solutions are better.</p>

<pre><code>a.splice(0,a.length)
</code></pre>

<p>and</p>

<pre><code>while(a.length &gt; 0) {<font></font>
    a.pop();<font></font>
}<font></font>
</code></pre>

<p>As per previous answer by kenshou.html, second method is faster.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://stackoverflow.com/users/2039571/jan"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jan</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的初始建议</font><font style="vertical-align: inherit;">的修改版本</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var originalLength = A.length;<font></font>
for (var i = originalLength; i &gt; 0; i--) {<font></font>
     A.pop();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>Array.prototype.clear = function() {<font></font>
    this.length = 0;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并称之为： </font></font><code>array.clear();</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>A.splice(0);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是在我正在处理的某些代码上执行过此操作。</font><font style="vertical-align: inherit;">它清除了数组。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您对内存分配感兴趣，则可以使用类似</font></font><a href="http://jsfiddle.net/k9KGU/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">东西</font><font style="vertical-align: inherit;">和chrome dev工具的“时间轴”标签</font><font style="vertical-align: inherit;">来比较每种方法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您将需要使用底部的垃圾桶图标“清除”阵列后强制进行垃圾收集。</font><font style="vertical-align: inherit;">这应该为您选择的浏览器提供更明确的答案。</font><font style="vertical-align: inherit;">这里有很多答案很老，我不会依赖它们，而是像上面@tanguy_k的答案一样进行测试。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（有关上述标签的介绍，您可以在</font></font><a href="http://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处查看</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Stackoverflow迫使我复制jsfiddle，因此它是：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;script&gt;<font></font>
var size = 1000*100<font></font>
window.onload = function() {<font></font>
  document.getElementById("quantifier").value = size<font></font>
}<font></font>
<font></font>
function scaffold()<font></font>
{<font></font>
  console.log("processing Scaffold...");<font></font>
  a = new Array<font></font>
}<font></font>
function start()<font></font>
{<font></font>
  size = document.getElementById("quantifier").value<font></font>
  console.log("Starting... quantifier is " + size);<font></font>
  console.log("starting test")<font></font>
  for (i=0; i&lt;size; i++){<font></font>
    a[i]="something"<font></font>
  }<font></font>
  console.log("done...")<font></font>
}<font></font>
<font></font>
function tearDown()<font></font>
{<font></font>
  console.log("processing teardown");<font></font>
  a.length=0<font></font>
}<font></font>
<font></font>
&lt;/script&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;span style="color:green;"&gt;Quantifier:&lt;/span&gt;<font></font>
    &lt;input id="quantifier" style="color:green;" type="text"&gt;&lt;/input&gt;<font></font>
    &lt;button onclick="scaffold()"&gt;Scaffold&lt;/button&gt;<font></font>
    &lt;button onclick="start()"&gt;Start&lt;/button&gt;<font></font>
    &lt;button onclick="tearDown()"&gt;Clean&lt;/button&gt;<font></font>
    &lt;br/&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该注意，这可能取决于数组元素的类型，因为javascript与其他基本类型不同，其管理字符串的方式更不用说对象数组了。</font><font style="vertical-align: inherit;">类型可能会影响发生的情况。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于while的信息存在很多困惑和错误信息；在答案和评论中都出现流行/移位表现。</font><font style="vertical-align: inherit;">while / pop解决方案具有（预期的）</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最差的性能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，对于循环运行该代码段的每个样本，安装程序仅运行一次。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var arr = [];<font></font>
<font></font>
for (var i = 0; i &lt; 100; i++) { <font></font>
    arr.push(Math.random()); <font></font>
}<font></font>
<font></font>
for (var j = 0; j &lt; 1000; j++) {<font></font>
    while (arr.length &gt; 0) {<font></font>
        arr.pop(); // this executes 100 times, not 100000<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个可以正常运行的新测试：</font></font></p>

<p><a href="http://jsperf.com/empty-javascript-array-redux"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/empty-javascript-array-redux</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使在此版本的测试中，您实际上也看不到真正的区别，因为克隆阵列会占用大部分测试时间。</font><font style="vertical-align: inherit;">它仍然显示这</font></font><code>splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是清除阵列的最快方法（没有</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑，因为虽然这是最快的，但实际上并未清除现有阵列）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其添加到JavaScript文件中，以“清除”数组：</font></font></p>

<pre><code>Array.prototype.clear = function() {<font></font>
    this.splice(0, this.length);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以像这样使用它：</font></font></p>

<pre><code>var list = [1, 2, 3];<font></font>
list.clear();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您想确保自己不破坏某些东西：</font></font></p>

<pre><code>if (!Array.prototype.clear) {<font></font>
    Array.prototype.clear = function() {<font></font>
       this.splice(0, this.length);<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多人认为您不应该修改本机对象（例如Array），我倾向于同意。</font><font style="vertical-align: inherit;">在决定如何处理时，请谨慎使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能测试：</font></font></p>

<p><a href="http://jsperf.com/array-clear-methods/3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/array-clear-methods/3</font></font></a></p>

<pre><code>a = []; // 37% slower<font></font>
a.length = 0; // 89% slower<font></font>
a.splice(0, a.length)  // 97% slower<font></font>
while (a.length &gt; 0) {<font></font>
    a.pop();<font></font>
} // Fastest<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，至少有2739票赞成的答案具有误导性和错误性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是：“如何清空现有阵列？” </font><font style="vertical-align: inherit;">例如</font></font><code>A = [1,2,3,4]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说“ </font></font><code>A = []</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是答案”是无知的，而且绝对不正确。</font></font><code>[] == []</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为这两个数组是两个单独的，独立的对象，它们具有自己的两个标识，在数字世界中占据了自己的空间，每个空间都是自己的。</font></font></p></li>
</ol>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您的母亲要您清空垃圾桶。 </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不会带来新的功能，就好像您已经完成了要求的操作一样。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，您清空垃圾箱。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不要用新的空罐替换装满的罐，也不要从装满的罐中取标签“ A”并将其粘贴到新的罐上。 </font></font><code>A = [1,2,3,4]; A = [];</code></li>
</ul>

<p>Emptying an array object is the easiest thing ever:</p>

<pre><code>A.length = 0;
</code></pre>

<p>This way, the can under "A" is not only empty, but also as clean as new!</p>

<hr>

<ol start="2">
<li><p>Furthermore, you are not required to remove the trash by hand until the can is empty! You were asked to empty the existing one, completely, in one turn, not to pick up the trash until the can gets empty, as in:</p>

<pre><code>while(A.length &gt; 0) {<font></font>
    A.pop();<font></font>
}<font></font>
</code></pre></li>
<li><p>Nor, to put your left hand at the bottom of the trash, holding it with your right at the top to be able to pull its content out as in:</p>

<pre><code>A.splice(0, A.length);
</code></pre></li>
</ol>

<p>No, you were asked to empty it:</p>

<pre><code>A.length = 0;
</code></pre>

<p>This is the only code that correctly empties the contents of a given JavaScript array.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨浏览器更友好，更优化的解决方案将是使用该</font></font><code>splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法清空数组A的内容，如下所示：</font></font></p>

<p><code>A.splice(0, A.length);</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要保留原始数组，因为还有其他引用也需要更新，则可以通过将其长度设置为零来清除它而无需创建新数组：</font></font></p>

<pre><code>A.length = 0;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
