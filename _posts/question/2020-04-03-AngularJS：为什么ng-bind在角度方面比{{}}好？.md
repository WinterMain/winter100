---
layout: question
title:  AngularJS：为什么ng-bind在角度方面比{{}}好？
date:   2020-04-03T03:18:26.000Z
description: 我参加了一次有角度的演讲，会议中提到的一位参加者ng-bind胜于{{}}束缚。原因之一是ng-bind将变量放在监视列表中，并且仅当发生模型更改时，...
img: 
author: Stafan
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我参加了一次有角度的演讲，会议中提到的一位参加者</font></font><code>ng-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">胜于</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">束缚。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因之一是</font></font><code>ng-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将变量放在监视列表中，并且仅当发生模型更改时，才将数据推送到视图中查看；另一方面，</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次都会对表达式进行插值（我想这是角周期）并推送值，即使值更改与否。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也有人说，如果屏幕上没有太多数据，则可以使用</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且性能问题将不可见。</font><font style="vertical-align: inherit;">有人可以帮我阐明一下这个问题吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3958篇《AngularJS：为什么ng-bind在角度方面比{{}}好？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙西门</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以参考此站点，它将向您解释哪种方法更好，据我所知{{}}，它比ng-bind慢。</font></font></p>

<p><a href="http://corpus.hubwiz.com/2/angularjs/16125872.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://corpus.hubwiz.com/2/angularjs/16125872.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
引用此站点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也有问题。当您尝试使用角度</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">滤镜</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">限制</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或其他功能时，如果使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会遇到问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是在其他情况下，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UX</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方面</font><font style="vertical-align: inherit;">更好。</font><font style="vertical-align: inherit;">当用户打开页面时，他/她将看到（10ms-100ms）打印符号（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{...}}</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），这就是ng-bind更好的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{}}中存在一些闪烁的问题，例如刷新页面后会看到一小段时间的垃圾邮件，因此我们应该使用ng-bind而不是表达式进行数据描述。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/02neu.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/02neu.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ng-Bind之所以更好的原因是， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您的页面未加载或互联网速度缓慢或网站加载了一半时，您会看到这些类型的问题</font></font><i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（检查带有已读标记的屏幕快照）</font></font></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将在完全奇怪的屏幕上触发。</font><font style="vertical-align: inherit;">为了避免这种情况，我们应该使用Ng-bind</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为使用</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角度编译器会同时考虑文本节点及其父节点，因为可能会合并两个</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点。</font><font style="vertical-align: inherit;">因此，还有其他链接程序会增加加载时间。</font><font style="vertical-align: inherit;">当然，对于少数这种情况，差异并不重要，但是在大量项目的中继器中使用它时，会在较慢的运行时环境中产生影响。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><code>ng-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 胜过 </font></font><code>{{...}}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，您可以这样做：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  Hello, {{variable}}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着将</font></font><strong><code>Hello, {{variable}}</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包围</font><font style="vertical-align: inherit;">其中的整个文本</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其存储在内存中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，如果您执行以下操作：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  Hello, &lt;span ng-bind="variable"&gt;&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅该值的值将存储在内存中，而angular将注册仅包含变量的监视程序（监视表达式）。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，double-curly语法更自然易读，并且需要更少的键入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种情况都产生相同的输出，但是..如果选择继续使用</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则用户有可能会看到几毫秒的时间，</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后才能通过角度渲染模板。</font><font style="vertical-align: inherit;">因此，如果您发现有任何</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的用法</font></font><code>ng-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样非常重要的是，只有在角度应用程序的index.html中，您才能取消渲染</font></font><code>{{}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果使用指令，则使用模板，那么就没有机会看到它，因为angular首先渲染模板，然后将其附加到DOM。     </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您没有使用</font></font><code>ng-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则类似以下内容：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  Hello, {{user.name}}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会</font></font><code>Hello, {{user.name}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>user.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决之前（在加载数据</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">一秒钟</font><font style="vertical-align: inherit;">的实际</font><font style="vertical-align: inherit;">值</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以做这样的事情</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  Hello, &lt;span ng-bind="user.name"&gt;&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这对您来说是个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个解决方案是使用</font></font><a href="https://docs.angularjs.org/api/ng/directive/ngCloak" rel="nofollow noreferrer"><code>ng-cloak</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><code>{{...}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是指双向数据绑定。</font><font style="vertical-align: inherit;">但是，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是用于单向数据绑定的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将减少您页面中观察者的数量。</font><font style="vertical-align: inherit;">因此</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将比快</font></font><code>{{...}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，如果您只想显示一个值及其更新，并且不想将其更改从UI反映回控制器，请使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng-bind</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将提高页面性能并减少页面加载时间。</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  Hello, &lt;span ng-bind="variable"&gt;&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
