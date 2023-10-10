---
layout: question
title:  如何将参数传递给setTimeout（）回调？
date:   2020-03-10T06:16:14.000Z
description: 我有一些如下的JavaScript代码：function statechangedPostQuestion(){  //alert("statec...
img: 
author: 白月光
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一些如下的JavaScript代码：</font></font></p>

<pre><code>function statechangedPostQuestion()<font></font>
{<font></font>
  //alert("statechangedPostQuestion");<font></font>
  if (xmlhttp.readyState==4)<font></font>
  {<font></font>
    var topicId = xmlhttp.responseText;<font></font>
    setTimeout("postinsql(topicId)",4000);<font></font>
  }<font></font>
}<font></font>
<font></font>
function postinsql(topicId)<font></font>
{<font></font>
  //alert(topicId);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到</font></font><code>topicId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font><font style="vertical-align: inherit;">的错误，</font><font style="vertical-align: inherit;">在使用该</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">之前，一切都在工作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望</font></font><code>postinsql(topicId)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一段时间后调用</font><font style="vertical-align: inherit;">我的</font><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第501篇《如何将参数传递给setTimeout（）回调？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天宝儿米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout是WHAT WG定义的DOM的一部分。</font></font></p>

<p><a href="https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您想要的方法是：</font></font></p>

<blockquote>
  <p><code>handle = self.setTimeout( handler [, timeout [, arguments... ] ] )</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安排超时时间，以在超时毫秒后运行处理程序。</font><font style="vertical-align: inherit;">任何参数都直接传递给处理程序。</font></font></p>
</blockquote>

<pre><code>setTimeout(postinsql, 4000, topicId);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，IE10支持额外的参数。</font><font style="vertical-align: inherit;">另外，您可以使用</font></font><code>setTimeout(postinsql.bind(null, topicId), 4000);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是传递额外的参数会更简单，这是可取的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">历史事实：在VBScript时代，在JScript中，setTimeout的第三个参数是语言，为字符串，默认为“ JScript”，但可以选择使用“ VBScript”。</font></font><a href="https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa741500(v%3Dvs.85)" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.microsoft.com/zh-cn/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa741500(v%3Dvs.85）</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想你要：</font></font></p>

<pre><code>setTimeout("postinsql(" + topicId + ")", 4000);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答问题，但使用带有2个参数的简单加法函数。</font></font></p>

<pre><code>var x = 3, y = 4;<font></font>
<font></font>
setTimeout(function(arg1, arg2) { <font></font>
      delayedSum(arg1, arg2);<font></font>
}(x, y), 1000);<font></font>
<font></font>
function delayedSum(param1, param2) {<font></font>
     alert(param1 + param2); // 7<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于所有浏览器（IE是一个奇怪的球）</font></font></p>

<pre><code>setTimeout( (function(x) {<font></font>
return function() {<font></font>
        postinsql(x);<font></font>
    };<font></font>
})(topicId) , 4000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Pro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，根据错误消息“ topicId”未定义的原因是，它在执行setTimeout时作为局部变量存在，但在延迟调用postinsql时不存在。</font><font style="vertical-align: inherit;">变量生存期尤其要注意，尤其是在尝试将“ this”作为对象引用传递时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听说您可以将topicId作为第三个参数传递给setTimeout函数。</font><font style="vertical-align: inherit;">没有给出太多细节，但是我获得了足够的信息来使它起作用，并且在Safari中很成功。</font><font style="vertical-align: inherit;">我不知道它们对“毫秒错误”的含义。</font><font style="vertical-align: inherit;">在这里查看：</font></font></p>

<p><a href="http://www.howtocreate.co.uk/tutorials/javascript/timers" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.howtocreate.co.uk/tutorials/javascript/timers</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，如果您需要将函数作为带有特定参数的回调传递，则可以使用高阶函数。</font><font style="vertical-align: inherit;">ES6非常优雅：</font></font></p>

<pre><code>const someFunction = (params) =&gt; () =&gt; {<font></font>
  //do whatever<font></font>
};<font></font>
<font></font>
setTimeout(someFunction(params), 1000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或如果</font></font><code>someFunction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是第一订单：</font></font></p>

<pre><code>setTimeout(() =&gt; someFunction(params), 1000); 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">谷若汐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换 </font></font></p>

<pre><code> setTimeout("postinsql(topicId)", 4000);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code> setTimeout("postinsql(" + topicId + ")", 4000);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更妙的是，用匿名函数替换字符串表达式</font></font></p>

<pre><code> setTimeout(function () { postinsql(topicId); }, 4000);
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Brownstone的注释不正确，这将按预期运行，如在Firebug控制台中运行该注释所示</font></font></p>

<pre><code>(function() {<font></font>
  function postinsql(id) {<font></font>
    console.log(id);<font></font>
  }<font></font>
  var topicId = 3<font></font>
  window.setTimeout("postinsql(" + topicId + ")",4000); // outputs 3 after 4 seconds<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，我与其他人保持一致，您应该避免将字符串传递给它，</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这将调用</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串，而是传递一个函数。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过以下方式将参数传递给setTimeout回调函数：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout（函数，毫秒，param1，param2，...）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p>

<pre><code>function myFunction() {<font></font>
  setTimeout(alertMsg, 3000, "Hello");<font></font>
}<font></font>
<font></font>
function alertMsg(message) {<font></font>
    alert(message)<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝镜风</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的答案：</font></font></p>

<pre><code>setTimeout((function(topicId) {<font></font>
  return function() {<font></font>
    postinsql(topicId);<font></font>
  };<font></font>
})(topicId), 4000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建的匿名函数将返回另一个匿名函数。</font><font style="vertical-align: inherit;">此函数可以访问最初传递的</font></font><code>topicId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不会出错。</font><font style="vertical-align: inherit;">立即调用第一个匿名函数，传入in </font></font><code>topicId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此在</font></font><code>topicId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用时可以通过闭包</font><font style="vertical-align: inherit;">访问延迟的已注册函数</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这基本上转换为：</font></font></p>

<pre><code>setTimeout(function() {<font></font>
  postinsql(topicId); // topicId inside higher scope (passed to returning function)<font></font>
}, 4000);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我看到了相同的答案，所以看看他。</font><font style="vertical-align: inherit;">但是我没有偷他的答案！</font><font style="vertical-align: inherit;">我忘了看。</font><font style="vertical-align: inherit;">阅读说明，看看是否有助于理解代码。</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持setTimeout中参数的最简单的跨浏览器解决方案：</font></font></p>

<pre><code>setTimeout(function() {<font></font>
    postinsql(topicId);<font></font>
}, 4000)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不介意不支持IE 9及更低版本：</font></font></p>

<pre><code>setTimeout(postinsql, 4000, topicId);
</code></pre>

<p><img src="https://i.stack.imgur.com/GhPoR.png" alt="setTimeout桌面浏览器兼容性"></p>

<p><img src="https://i.stack.imgur.com/VL5gE.png" alt="setTimeout移动浏览器兼容性"></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/WindowTimers/setTimeout</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道它已经很老了，但我想在此添加我的（首选）口味。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为实现此目的的一种很易读的方法是将传递</font></font><code>topicId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给一个函数，该函数进而使用参数在内部引用主题ID。</font><font style="vertical-align: inherit;">即使稍后将</font></font><code>topicId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在外部</font><font style="vertical-align: inherit;">更改此值也不会更改</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var topicId = xmlhttp.responseText;<font></font>
var fDelayed = function(tid) {<font></font>
  return function() {<font></font>
    postinsql(tid);<font></font>
  };<font></font>
}<font></font>
setTimeout(fDelayed(topicId),4000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或简称：</font></font></p>

<pre><code>var topicId = xmlhttp.responseText;<font></font>
setTimeout(function(tid) {<font></font>
  return function() { postinsql(tid); };<font></font>
}(topicId), 4000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇阿良Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些答案是正确的，但令人费解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年后，我再次回答这个问题，因为我仍然遇到过分复杂的代码来解决这个问题。</font><font style="vertical-align: inherit;">有一个优雅的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，在调用setTimeout时不要将字符串作为第一个参数传递，因为它有效地调用了对慢速“ eval”函数的调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么我们如何将参数传递给超时函数呢？</font><font style="vertical-align: inherit;">通过使用闭包：</font></font></p>

<pre><code>settopic=function(topicid){<font></font>
  setTimeout(function(){<font></font>
    //thanks to closure, topicid is visible here<font></font>
    postinsql(topicid);<font></font>
  },4000);<font></font>
}<font></font>
<font></font>
...<font></font>
if (xhr.readyState==4){<font></font>
  settopic(xhr.responseText);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人建议在调用超时函数时使用匿名函数：</font></font></p>

<pre><code>if (xhr.readyState==4){<font></font>
  setTimeout(function(){<font></font>
    settopic(xhr.responseText);<font></font>
  },4000);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法可行。</font><font style="vertical-align: inherit;">但是，在调用settopic的时间（即4秒钟后）时，XHR对象可能不相同。</font><font style="vertical-align: inherit;">因此，</font></font><a href="https://stackoverflow.com/questions/21212928/use-ajax-request-json-output-in-settimeout-function/21213598#21213598"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预先绑定变量</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很重要</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">霍布林已经对这个问题发表了评论，但它确实应该是一个答案！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>Function.prototype.bind()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是最干净，最灵活的方法（具有能够设置</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文</font><font style="vertical-align: inherit;">的额外好处</font><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>setTimeout(postinsql.bind(null, topicId), 4000);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请参见以下MDN链接：</font></font><br>
<a href="https://developer.mozilla.org/en/docs/DOM/window.setTimeout#highlighter_547041"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a>
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://developer.mozilla.org/en/docs/DOM/window.setTimeout#highlighter_547041"><font style="vertical-align: inherit;">//developer.mozilla.org/en/docs/DOM/window.setTimeout#highlighter_547041 </font></a></font><a href="https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Function/bind#With_setTimeout"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/Function / bind＃With_setTimeout</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端L</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个非常老的问题，已经有了“正确”的答案，但我想我想提到的是这里没有人提及的另一种方法。</font><font style="vertical-align: inherit;">这是从出色的</font></font><a href="http://underscorejs.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下划线</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font><font style="vertical-align: inherit;">复制并粘贴的</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>_.delay = function(func, wait) {<font></font>
  var args = slice.call(arguments, 2);<font></font>
  return setTimeout(function(){ return func.apply(null, args); }, wait);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将</font><font style="vertical-align: inherit;">任意数量的参数传递给</font><font style="vertical-align: inherit;">setTimeout调用的函数，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为附加的奖励（通常是奖励），调用setTimeout时，传递给函数的参数的值将被冻结，因此，如果它们改变了值在setTimeout（）被调用和它超时之间的某个时间点，好吧...这不再那么令人沮丧了：)</font></font></p>

<p><a href="http://jsfiddle.net/thedavidmeister/7t2bV/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在这里您可以了解我的意思。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过一些研究和测试，唯一正确的实现是：</font></font></p>

<pre><code>setTimeout(yourFunctionReference, 4000, param1, param2, paramN);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout会将所有其他参数传递给您的函数，以便可以在此处进行处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匿名函数可以用于非常基本的东西，但是在必须使用“ this”的对象实例中，没有办法使其起作用。</font><font style="vertical-align: inherit;">任何匿名函数都会将“ this”更改为指向窗口，因此您将丢失对象引用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代浏览器中，“ setTimeout”接收第三个参数，该参数在计时器结束时作为参数发送到内部函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var hello = "Hello World";<font></font>
setTimeout(alert, 1000, hello);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多细节：</font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setTimeout"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/WindowTimers.setTimeout</font></font></a></li>
<li><a href="http://arguments.callee.info/2008/11/10/passing-arguments-to-settimeout-and-setinterval/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://arguments.callee.info/2008/11/10/passing-arguments-to-settimeout-and-setinterval/</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>setTimeout(function() {<font></font>
    postinsql(topicId);<font></font>
}, 4000)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将匿名函数作为参数而不是字符串作为参数，后一种方法甚至不符合ECMAScript规范，但浏览器比较宽松。</font><font style="vertical-align: inherit;">这是正确的解决方案，在使用</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或时</font></font><code>setInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">永远不要依赖于将字符串作为“函数”进行传递</font><font style="vertical-align: inherit;">，因为它必须进行求值并且不正确，所以速度较慢。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Hobblin在</font><font style="vertical-align: inherit;">对问题的</font></font><a href="https://stackoverflow.com/questions/1190642/how-can-i-pass-a-parameter-to-a-settimeout-callback#comment8933108_1190642"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评论中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所说的那样</font><font style="vertical-align: inherit;">，现在您可以使用将参数传递给setTimeout内部的函数</font></font><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_objects/Function/bind" rel="noreferrer"><code>Function.prototype.bind()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></strong></p>

<pre><code>setTimeout(postinsql.bind(null, topicId), 4000);
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
