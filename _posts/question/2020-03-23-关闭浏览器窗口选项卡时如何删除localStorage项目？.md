---
layout: question
title:  关闭浏览器窗口/选项卡时如何删除localStorage项目？
date:   2020-03-23T03:29:38.000Z
description: 我的情况：具有键+值的localStorage应该在关闭浏览器而不是单个选项卡时删除。请查看我的代码是否正确以及可以改进的地方：//create ...
img: 
author: LLEY
category: question
answer: 6
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的情况：具有键+值的localStorage应该在关闭浏览器而不是单个选项卡时删除。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请查看我的代码是否正确以及可以改进的地方：</font></font></p>

<pre><code>//create localStorage key + value if not exist<font></font>
if(localStorage){<font></font>
   localStorage.myPageDataArr={"name"=&gt;"Dan","lastname"=&gt;"Bonny"}; <font></font>
}<font></font>
<font></font>
//when browser closed - psedocode<font></font>
$(window).unload(function(){<font></font>
  localStorage.myPageDataArr=undefined;<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2730篇《关闭浏览器窗口/选项卡时如何删除localStorage项目？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用sessionStorage</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sessionStorage对象与localStorage对象相同，只不过它仅存储一个会话的数据。</font><font style="vertical-align: inherit;">当用户关闭浏览器窗口时，数据将被删除。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的示例计算用户在当前会话中单击按钮的次数：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></p>

<pre><code>if (sessionStorage.clickcount) {<font></font>
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;<font></font>
} else {<font></font>
    sessionStorage.clickcount = 1;<font></font>
}<font></font>
document.getElementById("result").innerHTML = "You have clicked the button " +<font></font>
sessionStorage.clickcount + " time(s) in this session.";<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个非常特定的用例中，使用sessionStorage代替localStorage的任何建议都没有真正的帮助。</font><font style="vertical-align: inherit;">用例就像在打开至少一个选项卡时存储内容一样简单，但是如果关闭最后一个选项卡，该用例将无效。</font><font style="vertical-align: inherit;">如果您需要跨表和窗口保存值，那么除非您像我尝试过的那样使监听程序复杂化，否则sessionStorage不会对您有所帮助。</font><font style="vertical-align: inherit;">同时，localStorage对此非常适合，但是它做得“很好”，因为即使重新启动浏览器，您的数据也会在那里等待。</font><font style="vertical-align: inherit;">我最终使用了可同时利用两者的自定义代码和逻辑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我宁愿解释然后给出代码。</font><font style="vertical-align: inherit;">首先将所需的内容存储在localStorage中，然后在localStorage中创建一个计数器，该计数器将包含您已打开的选项卡的数量。</font><font style="vertical-align: inherit;">每次页面加载时都会增加，每次页面卸载时都会减少。</font><font style="vertical-align: inherit;">您可以在此处选择要使用的事件，建议使用“加载”和“卸载”。</font><font style="vertical-align: inherit;">卸载时，您需要执行计数器要为0时要执行的清理任务，这意味着您要关闭最后一个选项卡。</font><font style="vertical-align: inherit;">棘手的部分到了：我还没有找到一种可靠的通用方法来判断页面内部页面重新加载或导航与选项卡关闭之间的区别。</font><font style="vertical-align: inherit;">因此，如果您存储的数据不是您可以检查的第一个标签后可以在加载时重建的数据，</font><font style="vertical-align: inherit;">那么您将无法在每次刷新时将其删除。</font><font style="vertical-align: inherit;">相反，您需要在每次加载前将标志存储在sessionStorage中，然后再增加选项卡计数器。</font><font style="vertical-align: inherit;">在存储此值之前，您可以检查它是否已经有一个值，如果没有，这意味着您是第一次加载到该会话中，这意味着您可以在加载时进行清理未设置值且计数器为0。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>beforeunload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用原始JavaScript，您可以执行以下操作：</font></font></p>

<pre><code>window.onbeforeunload = function() {<font></font>
  localStorage.removeItem(key);<font></font>
  return '';<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在关闭浏览器窗口/选项卡之前删除键，并提示您确认关闭窗口/选项卡的操作。</font><font style="vertical-align: inherit;">希望能解决您的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：该</font></font><code>onbeforeunload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法应返回一个字符串。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在浏览器关闭时删除密钥，则应改用sessionStorage。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用 </font></font></p>

<pre><code>$(window).unload(function(){<font></font>
  localStorage.clear();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对你有用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该这样，而不是使用delete运算符：</font></font></p>

<pre><code>localStorage.removeItem(key);
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
