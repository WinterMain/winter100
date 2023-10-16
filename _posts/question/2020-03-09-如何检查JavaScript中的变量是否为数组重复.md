---
layout: question
title:  如何检查JavaScript中的变量是否为数组？\[重复\]
date:   2020-03-09T11:47:09.000Z
description:                                                                          ...
img: 
author: 伽罗Mandy
category: question
answer: 13
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
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/4775722/how-to-check-if-an-object-is-an-array" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查对象是否为数组？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （48个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-04-01 20：08：21Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想检查一个变量在JavaScript中是数组还是单个值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了可能的解决方案...</font></font></p>

<pre><code>if (variable.constructor == Array)...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最好的方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第225篇《如何检查JavaScript中的变量是否为数组？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚想出的东西：</font></font></p>

<p><code>if (item.length)
    //This is an array
 else
    //not an array</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于.length属性专用于javascript中的数组，因此您可以简单地说</font></font></p>

<pre><code>obj.length === +obj.length // true if obj is an array
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscorejs和其他几个库使用了这个简短的技巧。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里猿LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经创建了这段代码，可以返回真实类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还不确定性能，但这是尝试正确识别typeof。</font></font></p>

<p><a href="https://github.com/valtido/better-typeOf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/valtido/better-typeOf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里也对此发表了一些博客</font></font><a href="http://www.jqui.net/jquery/better-typeof-than-the-javascript-native-typeof/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.jqui.net/jquery/better-typeof-than-the-javascript-native-typeof/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的工作原理类似于当前的typeof。</font></font></p>

<pre><code>var user = [1,2,3]<font></font>
typeOf(user); //[object Array]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它认为可能需要进行一些微调，并考虑到一些问题，我还没有遇到或对其进行适当的测试。</font><font style="vertical-align: inherit;">因此，无论是从性能角度还是错误地重新导入typeOf，都欢迎进一步改进。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些编码高尔夫的人来说，这是一个最少字符的不可靠测试：</font></font></p>

<pre><code>function isArray(a) {<font></font>
  return a.map;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在遍历/展平层次结构时通常使用以下方法：</font></font></p>

<pre><code>function golf(a) {<font></font>
  return a.map?[].concat.apply([],a.map(golf)):a;<font></font>
}<font></font>
<font></font>
input: [1,2,[3,4,[5],6],[7,[8,[9]]]]<font></font>
output: [1, 2, 3, 4, 5, 6, 7, 8, 9]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里宝儿Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://www.w3schools.com/js/js_arrays.asp" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3schools</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function isArray(myArray) {<font></font>
    return myArray.constructor.toString().indexOf("Array") &gt; -1;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用以下代码行：</font></font></p>

<pre><code>if (variable.push) {<font></font>
   // variable is array, since AMAIK only arrays have push() method.<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font><a href="https://github.com/miksago/Evan.js/blob/master/src/evan.js" rel="nofollow"><font style="vertical-align: inherit;">https://github.com/miksago/Evan.js/blob/master/src/evan.js</font></a><font style="vertical-align: inherit;">引用的代码</font></font><a href="https://github.com/miksago/Evan.js/blob/master/src/evan.js" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>  var isArray = Array.isArray || function(obj) {<font></font>
    return !!(obj &amp;&amp; obj.concat &amp;&amp; obj.unshift &amp;&amp; !obj.callee);};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Jim猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以为我会为可能已经在其脚本中使用Underscore.js库的用户添加另一个选项。</font><font style="vertical-align: inherit;">Underscore.js具有isArray（）函数（请参见</font></font><a href="http://underscorejs.org/#isArray" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://underscorejs.org/#isArray</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>_.isArray(object) 
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果object是Array，则返回true。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只处理EcmaScript 5及更高版本，则可以使用内置</font></font><code>Array.isArray</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font></p>

<pre><code>Array.isArray([])    // true<font></font>
Array.isArray("foo") // false<font></font>
Array.isArray({})    // false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Angular，则可以使用angular.isArray（）函数</font></font></p>

<pre><code>var myArray = [];<font></font>
angular.isArray(myArray); // returns true<font></font>
<font></font>
var myObj = {};<font></font>
angular.isArray(myObj); //returns false<font></font>
</code></pre>

<p><a href="http://docs.angularjs.org/api/ng/function/angular.isArray" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://docs.angularjs.org/api/ng/function/angular.isArray</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我发布此问题时，我使用的JQuery版本未包含</font></font><code>isArray</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">如果有的话，我可能会相信它是实现此特定类型检查的独立于浏览器的最佳方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于JQuery现在确实提供了此功能，所以我会一直使用它...</font></font></p>

<pre><code>$.isArray(obj);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（从1.6.2版开始）仍然可以通过以下形式对字符串进行比较来实现 </font></font></p>

<pre><code>toString.call(obj) === "[object Array]"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个古老的问题，但是遇到同样的问题，我找到了一个非常优雅的解决方案，我想与他人分享。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向Array添加原型可以使其非常简单</font></font></p>

<pre><code>Array.prototype.isArray = true;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，如果您有一个对象，则要测试以查看其是否为数组，只需检查新属性即可</font></font></p>

<pre><code>var box = doSomething();<font></font>
<font></font>
if (box.isArray) {<font></font>
    // do something<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isArray仅在其为数组时可用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到有人提到jQuery，但我不知道有一个</font></font><a href="http://api.jquery.com/jQuery.isArray/" rel="noreferrer"><code>isArray()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">事实证明，它是在1.3版中添加的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery按照Peter的建议实现了它：</font></font></p>

<pre><code>isArray: function( obj ) {<font></font>
    return toString.call(obj) === "[object Array]";<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经对jQuery充满信心（尤其是他们的跨浏览器兼容性技术），我将升级到1.3版并使用其功能（假设升级不会引起太多问题），或者直接在我的系统中使用此建议的方法码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常感谢您的建议。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
