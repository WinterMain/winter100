---
layout: question
title:  如何通过Chrome中的代码设置JavaScript断点？
date:   2020-03-11T07:16:36.000Z
description: 我想强制Chrome调试器通过代码或使用某种注释标签（例如）来中断一行代码console.break()。...
img: 
author: MandyItachi
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想强制Chrome调试器</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过代码</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用某种注释标签（例如）</font><font style="vertical-align: inherit;">来中断一行</font><em><font style="vertical-align: inherit;">代码</font></em></font><code>console.break()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第726篇《如何通过Chrome中的代码设置JavaScript断点？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaEva斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多方法可以调试JavaScript代码。</font><font style="vertical-align: inherit;">以下两种方法被广泛用于通过代码调试JavaScript</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器控制台打印出来的值。</font><font style="vertical-align: inherit;">（这将帮助您了解代码某些点的值）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试器关键字。</font><font style="vertical-align: inherit;">添加</font></font><code>debugger;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到要调试的位置，然后打开浏览器的开发人员控制台并导航到“源”选项卡。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"></font><a href="https://www.w3schools.com/js/js_debugging.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3School</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="https://www.w3schools.com/js/js_debugging.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此链接</font></a><font style="vertical-align: inherit;">中提供了更多调试JavaScript代码的工具和方式</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以设置</font></font><code>debug(functionName)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试功能。</font></font></p>

<p><a href="https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#function" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#function</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO阿飞</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断点</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断点将停止执行，并让您检查JavaScript值。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查值之后，您可以继续执行代码（通常使用播放按钮）。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试器：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试器；</font><font style="vertical-align: inherit;">停止执行JavaScript，并调用调试功能。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">debugger语句暂停执行，但不会关闭任何文件或清除任何变量。</font></font></p>
</blockquote>

<pre><code>Example:-<font></font>
function checkBuggyStuff() {<font></font>
  debugger; // do buggy stuff to examine.<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是可能的，并且有很多原因您可能想要这样做。</font><font style="vertical-align: inherit;">例如，调试接近页面加载开始时的javascript无限循环，这会阻止chrome开发人员工具集（或firebug）正确加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见第2节  </font></font></p>

<p><a href="http://www.laurencegellert.com/2012/05/the-three-ways-of-setting-breakpoints-in-javascript/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.laurencegellert.com/2012/05/the-three-ways-of-setting-breakpoints-in-javascript/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或仅在所需的测试点在代码中添加包含调试器一词的行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用</font></font><code>debug(function)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以中断</font></font><code>function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被调用的时间。</font></font></p>

<p><a href="https://developers.google.com/web/tools/chrome-devtools/debug/command-line/command-line-reference?hl=en#debugfunction" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行API参考：调试</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>debugger;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果开发者控制台已打开，则执行将中断。</font><font style="vertical-align: inherit;">它也可以在萤火虫中使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><code>debugger</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是EcmaScript的保留关键字，自ES5起提供了可选的语义</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其结果是，它不仅可以在Chrome中使用，但也Firefox和Node.js的</font></font><a href="https://stackoverflow.com/a/4703227/895245"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>node debug myscript.js</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-12.15" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准说</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">句法</font></font></p>

<pre><code>DebuggerStatement :<font></font>
    debugger ;<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语义学</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评估DebuggerStatement生产可能会允许实现在调试器下运行时导致断点。</font><font style="vertical-align: inherit;">如果调试器不存在或未处于活动状态，则此语句无效。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生产DebuggerStatement：调试器; </font><font style="vertical-align: inherit;">评估如下：</font></font></p>
  
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果实现定义的调试工具可用并已启用，则
  
  </font></font><ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行实现定义的调试操作。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令result为实现定义的完成值。</font></font></li>
  </ol></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他
  
  </font></font><ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令结果为（正常，空，空）。</font></font></li>
  </ol></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回结果。</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6中没有更改。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人已经说过的那样，</font></font><code>debugger;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是要走的路。</font><font style="vertical-align: inherit;">我编写了一个小脚本，可以在浏览器中的命令行中使用该小脚本，以在函数调用之前立即设置和删除断点：</font><a href="http://andrijac.github.io/blog/2014/01/31/javascript-breakpoint/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : 
 </font></font><a href="http://andrijac.github.io/blog/2014/01/31/javascript-breakpoint/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//andrijac.github.io/blog/2014/01/31/javascript-breakpoint/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天斯丁前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“脚本”选项卡上，转到代码所在的位置。</font><font style="vertical-align: inherit;">在行号的左侧，单击。</font><font style="vertical-align: inherit;">这将设置一个断点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕截图：</font></font></p>

<p><img src="https://i.imgur.com/duwP8.png" alt="chrome中的断点屏幕截图"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您将能够在右侧选项卡中跟踪断点（如屏幕截图所示）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置按钮点击监听器，然后调用 </font></font><code>debugger;</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<pre><code>$("#myBtn").click(function() {<font></font>
 debugger;   <font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></strong></p>

<p><a href="http://jsfiddle.net/hBCH5/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/hBCH5/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript调试资源</font></font></strong></p>

<ul>
<li><a href="http://www.laurencegellert.com/2012/05/the-three-ways-of-setting-breakpoints-in-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.laurencegellert.com/2012/05/the-three-ways-of-setting-breakpoints-in-javascript/</font></font></a></li>
<li><a href="http://berzniz.com/post/78260747646/5-javascript-debugging-tips-youll-start-using-today" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://berzniz.com/post/78260747646/5-javascript-debugging-tips-youll-start-using-today</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
