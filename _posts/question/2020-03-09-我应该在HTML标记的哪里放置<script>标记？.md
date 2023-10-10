---
layout: question
title:  我应该在HTML标记的哪里放置<script>标记？
date:   2020-03-09T12:52:59.000Z
description: 将JavaScript嵌入HTML文档中时，在哪里放置<script>标签和包含的JavaScript 的正确位置？我似乎记得您不应该将它们放在本<hea...
img: 
author: 达蒙神奇
category: question
answer: 20
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将JavaScript嵌入HTML文档中时，在哪里放置</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签和包含的JavaScript </font><font style="vertical-align: inherit;">的正确位置</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我似乎记得您不应该将它们放在本</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节中，但是放在</font><font style="vertical-align: inherit;">本</font><font style="vertical-align: inherit;">节的开头也</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很不好，因为必须在完全呈现页面（或类似的东西）之前解析JavaScript。</font><font style="vertical-align: inherit;">这似乎将</font><font style="vertical-align: inherit;">本</font><font style="vertical-align: inherit;">节</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">末尾</font></font></em><font style="vertical-align: inherit;"></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">的逻辑位置</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，在这里</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">把正确的地方</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（此问题引用了</font></font><a href="https://stackoverflow.com/questions/436154/why-does-the-call-to-this-jquery-function-fail-in-firefox"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在</font><a href="https://stackoverflow.com/questions/436154/why-does-the-call-to-this-jquery-function-fail-in-firefox"><font style="vertical-align: inherit;">该问题</font></a><font style="vertical-align: inherit;">中建议将JavaScript函数调用从</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">移动</font><font style="vertical-align: inherit;">到</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。我专门使用jQuery，但更通用的答案也是合适的。）</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第262篇《我应该在HTML标记的哪里放置<script>标记？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木何鱼</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将脚本放在需要的地方，一个脚本并不比另一种方法更好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面是线性加载的，“自上而下”，因此，如果将脚本放在头部，可以确保它在所有内容之前都开始加载，现在，如果将其放入与代码混合的正文中，则可能导致页面加载难看。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">识别好习惯并不取决于在哪里。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了支持您，我将提及以下内容：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以放置​​：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 并且页面将线性加载</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 页面与其他内容异步加载</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 该页面的内容将在加载完成之前和之后加载</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的做法是，什么时候实施？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我能有所帮助，任何事情都可以回答我这个问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>JavaScript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">的最佳位置是</font><font style="vertical-align: inherit;">在标记后的文档代码末尾编写代码以加载文档，然后执行js代码。</font><font style="vertical-align: inherit;">如果你写</font></font><code>JQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码写</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
<font></font>
//your code here...<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，将脚本包含在HTML之后更有意义。</font><font style="vertical-align: inherit;">因为大多数时候我需要在执行脚本之前先加载Dom。</font><font style="vertical-align: inherit;">我可以将其放在head标签中，但我不喜欢所有文档加载侦听器的开销。</font><font style="vertical-align: inherit;">我希望我的代码简短，甜美并且易于阅读。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我听说在head标签之外添加脚本时，Safari的旧版本有些古怪，但我说谁在乎。</font><font style="vertical-align: inherit;">我不知道有人在用那种废话。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便问好问题。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了防止和UI阻塞，在body标记之前结束。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML文档的末尾</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在执行时不会影响将HTML文档加载到浏览器中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这取决于网页的执行情况。</font><font style="vertical-align: inherit;">如果要显示的页面在未先加载JavaScript的情况下无法正确显示，则应首先包含JavaScript文件。</font><font style="vertical-align: inherit;">但是，如果您无需先下载JavaScript文件就可以显示/呈现网页，则应将JavaScript代码放在页面底部。</font><font style="vertical-align: inherit;">因为它将模拟快速的页面加载，并且从用户的角度来看，似乎该页面的加载速度更快。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将大多数</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用放在的末尾</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果页面上有使用外部脚本的活动组件，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
则它们的依赖项（js文件）应该在此之前（最好在head标签中）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本阻止DOM加载，直到它被加载并执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将脚本放在</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有DOM </font><font style="vertical-align: inherit;">的末尾，则</font><font style="vertical-align: inherit;">有机会加载和呈现（页面将“显示”得更快）。</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将有权访问所有这些DOM元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，将其放置在</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始或</font><font style="vertical-align: inherit;">之后的位置</font><font style="vertical-align: inherit;">将执行脚本（那里仍然没有DOM元素）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将包括jQuery，这意味着您可以将其放置在任意位置并使用</font></font><a href="https://learn.jquery.com/using-jquery-core/document-ready/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.ready（）</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您仍然非常关心IE &lt;10的支持和性能，最好始终将脚本标记设置为HTML正文的最后一个标记。</font><font style="vertical-align: inherit;">这样，您可以确定其余的DOM已加载，并且不会阻塞和渲染。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不再关心IE &lt;10，则可能希望将脚本放在文档的开头，并</font></font><code>defer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来确保</font><font style="vertical-align: inherit;">脚本</font><font style="vertical-align: inherit;">仅在DOM被加载后才能运行（</font></font><code>&lt;script type="text/javascript" src="path/to/script1.js" defer&gt;&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">如果您仍然希望代码在IE &lt;10中运行，请不要忘记将代码</font></font><code>window.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">均匀</font><font style="vertical-align: inherit;">地包装</font><font style="vertical-align: inherit;">！</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Tony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后要包含脚本的地方主要用于首先显示网站内容/样式的地方。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括头中的脚本的脚本会尽早加载这些脚本，并且可以在加载整个网站之前使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果最后输入了脚本，则只有在加载了整个样式和设计之后才能进行验证，这对于快速响应的网站是不赞赏的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取决于脚本及其用法，最好的方式（就页面加载和渲染时间而言）可能是不使用常规的&lt;script&gt;标签本身，而是动态地异步触发脚本的加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些不同的技术，但是最直接的方法是在触发window.onload事件时使用document.createElement（“ script”）。</font><font style="vertical-align: inherit;">然后，当页面本身已呈现时，将首先加载脚本，因此不会影响用户必须等待页面出现的时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自然，这要求脚本本身不需要呈现页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请参阅</font><font style="vertical-align: inherit;">Steve Souders（YSlow的创建者，但现在在Google上）</font><font style="vertical-align: inherit;">发布的</font></font><a href="http://www.stevesouders.com/blog/2008/12/27/coupling-async-scripts/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">耦合异步脚本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取决于，如果要加载的脚本对于页面的样式设置/使用页面中的操作（例如单击按钮）是必需的，则最好将其放在顶部。</font><font style="vertical-align: inherit;">如果您的样式是100％CSS，并且按钮操作具有所有后备选项，则可以将其放在底部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或最好的事情（如果这不是问题）是您可以创建一个模式加载框，将您的JavaScript放在页面底部，并在加载脚本的最后一行时使其消失。</font><font style="vertical-align: inherit;">这样，您可以避免用户在加载脚本之前在页面中使用操作。</font><font style="vertical-align: inherit;">并且避免样式不当。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常规的（被广泛接受的）答案是“最底层的”，因为这样，在任何内容开始执行之前，整个DOM都将被加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于各种原因，有一些持不同政见者从可用的实践开始，故意从页面onload事件开始执行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script src="myjs.js"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本标记应始终在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主体关闭</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件的</font><strong><font style="vertical-align: inherit;">底部</font></strong><font style="vertical-align: inherit;">之前使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么您可以在加载</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">之前先查看页面的内容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要，请检查此内容：</font><a href="http://stevesouders.com/hpws/rule-js-bottom.php" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://stevesouders.com/hpws/rule-js-bottom.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stevesouders.com/hpws/rule-js-bottom.php</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML不会验证脚本是否位于head元素之外的任何其他位置。</font></font></del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 事实证明它可以无处不在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用jQuery之类的方法推迟执行，因此放置位置无关紧要（解析期间对性能的影响很小）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2019年的现代方法是使用ES6模块类型脚本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;script type="module" src="..."&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，模块是异步加载和延迟的。</font><font style="vertical-align: inherit;">也就是说，您可以将它们放置在任何位置，它们将并行加载并在页面加载完成时执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处描述了脚本和模块之间的区别：</font></font></p>

<p><a href="https://stackoverflow.com/a/53821485/731548"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/53821485/731548</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与脚本相比，模块的执行描述如下：</font></font></p>

<p><a href="https://developers.google.com/web/fundamentals/primers/modules#defer" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developers.google.com/web/fundamentals/primers/modules#defer</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持如下所示：</font></font></p>

<p><a href="https://caniuse.com/#feat=es6-module" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://caniuse.com/#feat=es6-module</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是JQuery，则将javascript放在最合适的位置，并用于</font></font><code>$(document).ready()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保在执行任何功能之前正确加载了所有内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带说明：我喜欢本</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节</font><font style="vertical-align: inherit;">中的所有脚本标签，</font><font style="vertical-align: inherit;">因为这似乎是最干净的地方。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由Yahoo!提倡的标准建议。</font><font style="vertical-align: inherit;">卓越的性能团队将</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签放在文档主体的末尾，以免它们阻碍页面的呈现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如</font></font><a href="https://stackoverflow.com/a/435295/578288"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关Google Analytics（分析）JavaScript文件的加载时间的</font><a href="https://stackoverflow.com/a/435295/578288"><font style="vertical-align: inherit;">答案</font></a><font style="vertical-align: inherit;">所述，有些新方法可以提供更好的性能</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Steve Souders（客户端性能专家）提供了</font><font style="vertical-align: inherit;">一些</font></font><a href="http://stevesouders.com/docs/googleio-20080529.ppt" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很棒的幻灯片</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">这些</font><a href="http://stevesouders.com/docs/googleio-20080529.ppt" rel="noreferrer"><font style="vertical-align: inherit;">幻灯片</font></a><font style="vertical-align: inherit;">涉及：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并行加载外部JavaScript文件的不同技术</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们对加载时间和页面呈现的影响</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器显示什么样的“进行中”指示（例如状态栏中的“正在加载”，沙漏鼠标光标）。</font></font></li>
  </ul>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上所述，在结束标签前</font></font></p>

<p><a href="http://developer.yahoo.com/performance/rules.html#js_bottom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://developer.yahoo.com/performance/rules.html#js_bottom</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将脚本放在最下面</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本引起的问题是它们阻止并行下载。</font><font style="vertical-align: inherit;">HTTP / 1.1规范建议浏览器每个主机名并行下载最多两个组件。</font><font style="vertical-align: inherit;">如果您从多个主机名提供图像，则可以并行进行两次以上的下载。</font><font style="vertical-align: inherit;">但是，在下载脚本时，即使使用不同的主机名，浏览器也不会启动任何其他下载。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非阻塞脚本标签可以放置在几乎任何地方：</font></font></p>

<pre><code>&lt;script src="script.js" async&gt;&lt;/script&gt;<font></font>
&lt;script src="script.js" defer&gt;&lt;/script&gt;<font></font>
&lt;script src="script.js" async defer&gt;&lt;/script&gt;<font></font>
</code></pre>

<ul>
<li><a href="http://www.w3.org/TR/html5/scripting-1.html#attr-script-async"><strong><code>async</code></strong></a> script will be executed asynchronously as soon as it is available</li>
<li><a href="http://www.w3.org/TR/html5/scripting-1.html#attr-script-defer"><strong><code>defer</code></strong></a> script is executed when the document has finished parsing</li>
<li><strong><code>async defer</code></strong> script falls back to the defer behavior if async is not supported</li>
</ul>

<p>Such scripts will be executed asynchronously/after document ready, which means you cannot do this:</p>

<pre><code>&lt;script src="jquery.js" async&gt;&lt;/script&gt;<font></font>
&lt;script&gt;jQuery(something);&lt;/script&gt;<font></font>
&lt;!--<font></font>
  * might throw "jQuery is not defined" error<font></font>
  * defer will not work either<font></font>
--&gt;<font></font>
</code></pre>

<p>Or this:</p>

<pre><code>&lt;script src="document.write(something).js" async&gt;&lt;/script&gt;<font></font>
&lt;!--<font></font>
  * might issue "cannot write into document from an asynchronous script" warning<font></font>
  * defer will not work either<font></font>
--&gt;<font></font>
</code></pre>

<p>Or this:</p>

<pre><code>&lt;script src="jquery.js" async&gt;&lt;/script&gt;<font></font>
&lt;script src="jQuery(something).js" async&gt;&lt;/script&gt;<font></font>
&lt;!--<font></font>
  * might throw "jQuery is not defined" error (no guarantee which script runs first)<font></font>
  * defer will work in sane browsers<font></font>
--&gt;<font></font>
</code></pre>

<p>Or this:</p>

<pre><code>&lt;script src="document.getElementById(header).js" async&gt;&lt;/script&gt;<font></font>
&lt;div id="header"&gt;&lt;/div&gt;<font></font>
&lt;!--<font></font>
  * might not locate #header (script could fire before parser looks at the next line)<font></font>
  * defer will work in sane browsers<font></font>
--&gt;<font></font>
</code></pre>

<p>Having said that, asynchronous scripts offer these advantages:</p>

<ul>
<li><strong>Parallel download of resources</strong>:<br>
Browser can download stylesheets, images and other scripts in parallel without waiting for a script to download and execute.</li>
<li><strong>Source order independence</strong>:<br>
You can place the scripts inside head or body without worrying about blocking (useful if you are using a CMS). Execution order still matters though.</li>
</ul>

<p>It is possible to circumvent the execution order issues by using external scripts that support callbacks. Many third party JavaScript APIs now support non-blocking execution. Here is an example of <a href="http://salman-w.blogspot.com/2014/05/google-maps-asynchronous-loading.html">loading the Google Maps API asynchronously</a>.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
