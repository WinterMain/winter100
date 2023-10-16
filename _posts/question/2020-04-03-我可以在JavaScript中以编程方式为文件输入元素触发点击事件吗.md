---
layout: question
title:  我可以在JavaScript中以编程方式为文件输入元素触发“点击”事件吗？
date:   2020-04-03T03:56:51.000Z
description: 我想以<input type="file">编程方式在标签上触发click事件。仅仅调用click（）似乎没有任何作用，或者至少它没有弹出文件选择对话...
img: 
author: LGil
category: question
answer: 11
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想以</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编程方式</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">上触发click事件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅仅调用click（）似乎没有任何作用，或者至少它没有弹出文件选择对话框。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在尝试使用侦听器捕获事件并重定向事件，但是我无法像某些人单击它那样使它真正执行事件。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3997篇《我可以在JavaScript中以编程方式为文件输入元素触发“点击”事件吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对某人有帮助-我花了2个小时将自己的头撞在上面：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE8或IE9中，如果您以任何方式触发使用javascript打开文件输入（相信我，我已经尝试了所有方法），它不会让您使用javascript提交表单，只会无声地失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过常规的提交按钮提交表单可能有效，但可以调用form.submit（）;。</font><font style="vertical-align: inherit;">将无声地失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不得不求助于我的选择文件按钮覆盖一个有效的透明文件输入。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现如果input（file）在表单之外，则触发click事件将调用文件对话框。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，这在Firefox 4中将成为可能，但需要注意的是，它被视为弹出窗口，因此只要有弹出窗口便会被阻止。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我之前对此进行了研究，因为我想创建一个自定义按钮，该按钮将打开文件对话框并立即开始上传。</font><font style="vertical-align: inherit;">我只是注意到一些可能使之成为可能的东西-当您单击上载的任何位置时，Firefox似乎都会打开对话框。</font><font style="vertical-align: inherit;">因此，可以执行以下操作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个文件上传和一个单独的元素，其中包含要用作按钮的图像</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">排列它们以使其重叠，并使文件元素背景和边界透明，因此按钮是唯一可见的</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击按钮/文件输入时，添加JavaScript以使IE打开对话框</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择文件后，使用onchange事件提交表单</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这只是理论上的，因为我已经使用了另一种方法来解决该问题，但它可能会起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有多种方法可以将事件重定向到控件，但不能期望自己能够轻松地将事件触发给控件，因为出于（良好）安全原因，浏览器将尝试阻止事件。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只需要在用户单击某些内容时显示文件对话框，就可以说，是因为您想要更好看的文件上传按钮，那么您可能想看看</font></font><a href="http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shaun Inman提出了什么</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经能够通过创造性地将焦点移入和移出按键，按键和按键事件之间的控件来实现键盘触发。</font><font style="vertical-align: inherit;">YMMV。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的真诚建议是，不要管它，因为这是浏览器不兼容之痛的世界。</font><font style="vertical-align: inherit;">较小的浏览器更新也可能会在没有任何警告的情况下阻止欺骗，并且您可能必须不断重新发明hack才能使其正常运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码对我有用。</font><font style="vertical-align: inherit;">这是您要做什么？</font></font></p>

<pre><code>&lt;input type="file" style="position:absolute;left:-999px;" id="fileinput" /&gt;<font></font>
&lt;button  id="addfiles" &gt;Add files&lt;/button&gt;<font></font>
<font></font>
&lt;script language="javascript" type="text/javascript"&gt;<font></font>
   $("#addfiles").click(function(){<font></font>
      $("#fileinput").click();<font></font>
   });<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这已经很老了，所有这些解决方案都是围绕具有实际价值的浏览器安全预防措施进行的。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是说，到目前为止，fileInput.click（）在当前的Chrome（36.0.1985.125 m）和当前的Firefox ESR（24.7.0）中均可运行，但在当前的IE（11.0.9600.17207）中则无效。</font><font style="vertical-align: inherit;">在按钮顶部覆盖不透明度为0的文件字段是可行的，但是我希望将link元素用作可见触发器，并且在所有浏览器中悬停下划线都不太起作用。</font><font style="vertical-align: inherit;">它闪烁然后消失，可能是浏览器在思考是否确实应用了悬停样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我确实找到了在所有这些浏览器中都可以使用的解决方案。</font><font style="vertical-align: inherit;">我不会声称已经测试了每种浏览器的每个版本，也不知道它将永远持续工作，但是现在看来可以满足我的需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很简单：将文件输入字段置于屏幕外（位置：绝对；顶部：-5000px），在其周围放置标签元素，然后触发对标签的单击，而不是文件字段本身。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，链接确实需要编写脚本才能调用标签的click方法，它不会自动执行此操作，就像单击标签元素内的文本时一样。</font><font style="vertical-align: inherit;">显然，link元素捕获了单击，并且没有将其传递到标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，由于该字段不在屏幕上，因此这不提供显示当前所选文件的方法。</font><font style="vertical-align: inherit;">我想在选择文件后立即提交，所以这对我来说不是问题，但是如果您的情况有所不同，则需要采取一些不同的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望该</font></font><code>click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法在Chrome，Firefox等上运行，请对输入文件应用以下样式。</font><font style="vertical-align: inherit;">它会被完全隐藏，就像您做一个</font></font><code>display: none;</code></p>

<pre><code>#fileInput {<font></font>
    visibility: hidden;<font></font>
    position: absolute;<font></font>
    top: 0;<font></font>
    left: -5000px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就这么简单，我测试了它的工作原理！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid卡卡西</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用标签标签，这样您就可以隐藏输入，并使其通过相关标签
 </font></font><a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Label" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/fr/docs/Web/HTML/Element/Label</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试以下解决方案：</font><a href="http://code.google.com/p/upload-at-click/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.google.com/p/upload-at-click/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.google.com/p/upload-at-click/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我整天都在寻找解决方案。</font><font style="vertical-align: inherit;">这些是我得出的结论：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于安全原因，Opera和Firefox不允许触发文件输入。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一方便的替代方法是创建一个“隐藏”文件输入（使用不透明度，而不是“隐藏”或“显示：无”！），然后在其下方创建按钮。</font><font style="vertical-align: inherit;">通过这种方式可以看到按钮，但是在用户单击时实际上会激活文件输入。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助！</font><font style="vertical-align: inherit;">:)</font></font></p>

<pre><code>&lt;div style="display: block; width: 100px; height: 20px; overflow: hidden;"&gt;<font></font>
&lt;button style="width: 110px; height: 30px; position: relative; top: -5px; left: -5px;"&gt;&lt;a href="javascript: void(0)"&gt;Upload File&lt;/a&gt;&lt;/button&gt;<font></font>
&lt;input type="file" id="upload_input" name="upload" style="font-size: 50px; width: 120px; opacity: 0; filter:alpha(opacity=0);  position: relative; top: -40px;; left: -20px" /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
