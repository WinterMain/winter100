---
layout: question
title:  visible：hidden和display：none有什么区别？
date:   2020-03-13T12:33:43.000Z
description: CSS规则visibility hidden以及display none两者均导致该元素不可见。这些是同义词吗？...
img: 
author: 小次郎
category: question
answer: 17
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS规则</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者均导致该元素不可见。</font><font style="vertical-align: inherit;">这些是同义词吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1559篇《visible：hidden和display：none有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有很多详细的答案，但是我认为我应该添加它来解决可访问性，因为这会产生影响。</font></font></p>

<p><code>display: none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>visibility: hidden;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并非所有屏幕阅读器软件读取。</font><font style="vertical-align: inherit;">请记住，视障用户会遇到什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该问题还询问同义词。</font></font><code>text-indent: -9999px;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">彼此大致相等。</font><font style="vertical-align: inherit;">与的重要区别</font></font><code>text-indent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在于，屏幕阅读器通常会读取它。</font><font style="vertical-align: inherit;">由于用户仍然可以跳至链接，因此可能会带来不好的体验。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了实现可访问性，我今天所使用的是多种样式组合，以在屏幕阅读器可见的同时隐藏元素。</font></font></p>

<pre><code>{<font></font>
  clip: rect(1px, 1px, 1px, 1px);<font></font>
  clip-path: inset(50%);<font></font>
  height: 1px;<font></font>
  width: 1px;<font></font>
  margin: -1px;<font></font>
  overflow: hidden;<font></font>
  padding: 0;<font></font>
  position: absolute;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个很好的做法是创建一个“跳至内容”链接，以链接到内容主体的锚点。</font><font style="vertical-align: inherit;">视障用户可能不想在每个页面上都收听完整的导航树。</font><font style="vertical-align: inherit;">使链接在视觉上隐藏。</font><font style="vertical-align: inherit;">用户只需点击选项卡即可访问链接。</font></font></p>

<p>For more on accessibility and hidden content, see:</p>

<ul>
<li><a href="https://webaim.org/techniques/css/invisiblecontent/" rel="nofollow noreferrer">https://webaim.org/techniques/css/invisiblecontent/</a></li>
<li><a href="https://webaim.org/techniques/skipnav/" rel="nofollow noreferrer">https://webaim.org/techniques/skipnav/</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小胖米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将元素保留在页面中并占用该空间，但不会显示给用户。</font></font></p>

<p><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在页面中将不可用，并且不占用任何空间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可见性属性设置为</font></font><code>"hidden"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即使内容不可见，浏览器仍会在页面上留出空间。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是，当我们将对象设置为时</font></font><code>"display:none"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，浏览器不会在页面上为其内容分配空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;div style="display:none"&gt;<font></font>
Content not display on screen and even space not taken.<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div style="visibility:hidden"&gt;<font></font>
Content not display on screen but it will take space on screen.<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><a href="http://www.shubelal.com/devquery.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看详情</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>display:none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既不会显示元素，也不会在页面上为元素分配空间，而</font></font><code>visibility:hidden;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会在页面上显示元素，但会在页面上分配空间。</font><font style="vertical-align: inherit;">在两种情况下，我们都可以访问DOM中的元素。</font><font style="vertical-align: inherit;">为了更好地理解它，请查看以下代码：
 </font></font><a href="https://jsfiddle.net/pritam1605/vp7uuukt/2/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">display：none vs visible：hidden</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一凯Gil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个不同之处是，它</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在非常古老的浏览器中运行，而</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能：</font></font></p>

<p><a href="https://www.w3schools.com/cssref/pr_class_visibility.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/cssref/pr_class_visibility.asp</font></font></a></p>

<p><a href="https://www.w3schools.com/cssref/pr_class_display.asp" rel="nofollow noreferrer">https://www.w3schools.com/cssref/pr_class_display.asp</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙古一神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>display: none; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在页面上将不可用，并且不占用任何空间。 </font></font><br></p>

<pre><code>visibility: hidden; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它隐藏了一个元素，但仍会占用与以前相同的空间。</font><font style="vertical-align: inherit;">元素将被隐藏，但仍然会影响布局。</font></font></p>

<p><code>visibility: hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留空间，</font></font><code>display: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不保留空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不显示任何示例：</font><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_display_none" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_display_none" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/css/tryit.asp?filename=trycss_display_none</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏的可见性示例：</font><a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/cssref/tryit.asp？filename = trycss_visibility</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了所有其他答案之外，IE8还有一个重要区别：如果使用</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试获取元素的宽度或高度，则IE8返回0（而其他浏览器将返回实际大小）。</font><font style="vertical-align: inherit;">IE8仅针对会返回正确的宽度或高度</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留空间；</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将隐藏元素并折叠占用的空间，而</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将隐藏元素并保留元素的空间。</font><font style="vertical-align: inherit;">display：none也不会影响IE和Safari较旧版本中javascript的某些属性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象仍占用垂直高度在页面上。</font><font style="vertical-align: inherit;">随着</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它被完全删除。</font><font style="vertical-align: inherit;">如果您在图片下方有文字，并且这样做了</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该文字将向上移动以填充图片所在的空间。</font><font style="vertical-align: inherit;">如果您进行可见性：隐藏，则文本将保留在同一位置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>display: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 从页面中完全删除该元素，并且该页面的构建就好像该元素根本不存在。  </font></font></p>

<p><code>Visibility: hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 即使您无法再看到它，也会在文档流中留下空间。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能会或可能不会有很大的不同，具体取决于您在做什么。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在子节点方面有很大的不同。</font><font style="vertical-align: inherit;">例如：如果您有一个父div和一个嵌套的子div。</font><font style="vertical-align: inherit;">因此，如果您这样写：</font></font></p>

<pre><code>&lt;div id="parent" style="display:none;"&gt;<font></font>
    &lt;div id="child" style="display:block;"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，所有div都不可见。</font><font style="vertical-align: inherit;">但是，如果您这样写：</font></font></p>

<pre><code>&lt;div id="parent" style="visibility:hidden;"&gt;<font></font>
     &lt;div id="child" style="visibility:visible;"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，子div将可见，而父div将不显示。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们不是同义词。</font></font></strong></p>

<p><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 从页面的常规流程中删除该元素，从而允许其他元素填充。</font></font></p>

<p><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将元素留在页面的正常流程中，使其仍占据空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想象一下，您在游乐园中排队，而排队中的某人变得粗暴到安全都将他们从排队中拔出。</font><font style="vertical-align: inherit;">然后，排队的每个人都会向前移动一个位置，以填补现在空的位置。</font><font style="vertical-align: inherit;">这就像</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与之类似的情况则与此相反，但是您前面的某人戴上了隐形斗篷。</font><font style="vertical-align: inherit;">在查看线条时，看起来好像有一个空白空间，但是由于有人仍在，所以人们无法真正填充该空白空间。</font><font style="vertical-align: inherit;">这就像</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的是，尽管没有要求，但还有第三种方法可以使对象完全透明。</font><font style="vertical-align: inherit;">考虑：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>1st &lt;a href="http://example.com" style="display: none;"&gt;unseen&lt;/a&gt; link.&lt;br /&gt;<font></font>
2nd &lt;a href="http://example.com" style="visibility: hidden;"&gt;unseen&lt;/a&gt; link.&lt;br /&gt;<font></font>
3rd &lt;a href="http://example.com" style="opacity: 0;"&gt;unseen&lt;/a&gt; link.</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您将获得：</font></font></p>

<pre><code>1st link.<font></font>
2nd        link.<font></font>
3rd        link.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经指出1和2之间的差异（即2仍然占用空间）。</font><font style="vertical-align: inherit;">但是，2和3之间是有区别的。在第3种情况下，当鼠标悬停在链接上时，鼠标仍然会切换到手形，并且用户仍然可以单击该链接，并且Javascript事件仍会在该链接上触发。</font><font style="vertical-align: inherit;">这通常</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您想要的行为。</font><font style="vertical-align: inherit;">选择文本时的行为也可能因浏览器而异。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示相关标签根本不会出现在页面上（尽管您仍然可以通过dom与之交互）。</font><font style="vertical-align: inherit;">其他标签之间将没有分配空间。  </font></font></p>

<p><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示与不同</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该标记不可见，但在页面上为其分配了空间。</font><font style="vertical-align: inherit;">标签已呈现，只是在页面上看不到。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>test | &lt;span style="[style-tag-value]"&gt;Appropriate style in this tag&lt;/span&gt; | test
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font><code>[style-tag-value]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>test |   | test
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font><code>[style-tag-value]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>test | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | test
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 从布局流程中删除元素。</font></font></p>

<p><code>visibility:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 隐藏它，但留下空间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们不是同义词- </font></font><code>display: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从页面流中删除元素，而页面的其余部分就好像不在那里一样。</font></font></p>

<p><code>visibility: hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 从视图中隐藏元素，但不隐藏页面流，从而在页面上留出空间。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
