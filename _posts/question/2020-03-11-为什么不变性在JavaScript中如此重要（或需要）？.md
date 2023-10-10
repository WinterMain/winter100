---
layout: question
title:  为什么不变性在JavaScript中如此重要（或需要）？
date:   2020-03-11T02:56:05.000Z
description: 我目前正在研究React JS和React Native框架。在阅读关于Facebook的Flux和Redux实现的文章时，我遇到了Immutabilit...
img: 
author: 米亚Eva
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在研究</font></font><a href="http://github.com/facebook/react" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React JS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/facebook/react-native" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">框架。</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">阅读关于Facebook的Flux和Redux实现的文章时，我</font><font style="vertical-align: inherit;">遇到了Immutability或</font></font><a href="https://github.com/facebook/immutable-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Immutable-JS库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，为什么不变性如此重要？</font><font style="vertical-align: inherit;">突变对象有什么问题？</font><font style="vertical-align: inherit;">它不是使事情变得简单吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">举个例子，让我们考虑一个简单的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新闻阅读器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序，其打开屏幕是新闻标题的列表视图。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我设置说</font><strong><font style="vertical-align: inherit;">最初</font></strong><font style="vertical-align: inherit;">具有值</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的对象数组，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将无法对其进行操作。</font><font style="vertical-align: inherit;">这就是不变性原则的意思，对吗？</font><font style="vertical-align: inherit;">（如果我错了，请纠正我。）但是，如果我有一个新的News对象必须更新怎么办？</font><font style="vertical-align: inherit;">在通常情况下，我可以将对象添加到数组中。</font><font style="vertical-align: inherit;">在这种情况下我该如何实现？</font><font style="vertical-align: inherit;">删除商店并重新创建？</font><font style="vertical-align: inherit;">是不是将对象添加到数组中的开销较小？</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第569篇《为什么不变性在JavaScript中如此重要（或需要）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为赞成不可变对象的主要原因是保持对象的状态有效。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们有一个名为的对象</font></font><code>arr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当所有项目均为相同字母时，此对象有效。</font></font></p>

<pre><code>// this function will change the letter in all the array<font></font>
function fillWithZ(arr) {<font></font>
    for (var i = 0; i &lt; arr.length; ++i) {<font></font>
        if (i === 4) // rare condition<font></font>
            return arr; // some error here<font></font>
<font></font>
        arr[i] = "Z";<font></font>
    }<font></font>
<font></font>
    return arr;<font></font>
}<font></font>
<font></font>
console.log(fillWithZ(["A","A","A"])) // ok, valid state<font></font>
console.log(fillWithZ(["A","A","A","A","A","A"])) // bad, invalid state<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>arr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成为一个不变的对象，那么我们将确保arr始终处于有效状态。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为可变（或不可变）状态创建了一个与框架无关的开源（MIT）库，它可以替换所有这些不可变的存储，例如lib（redux，vuex等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可变状态对我来说是丑陋的，因为要做的工作太多（用于简单的读/写操作的动作很多），代码的可读性差且大型数据集的性能不可接受（整个组件都重新呈现：/）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/neuronetio/deep-state-observer" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">deep-state-observer，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只能使用点表示法更新一个节点并使用通配符。</font><font style="vertical-align: inherit;">我还可以创建状态历史记录（撤消/重做/时间旅行），仅保留已更改的具体值</font></font><code>{path:value}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=减少内存使用量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/neuronetio/deep-state-observer" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深度状态观察器，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以微调事物，并且可以精确控制组件的行为，因此可以大大提高性能。</font><font style="vertical-align: inherit;">代码更具可读性，并且重构更加容易-只需搜索并替换路径字符串（无需更改代码/逻辑）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Java不变性的另一个好处是，它减少了时间耦合，这通常对设计具有实质性的好处。</font><font style="vertical-align: inherit;">考虑对象的接口有两种方法：</font></font></p>

<pre><code>class Foo {<font></font>
<font></font>
      baz() {<font></font>
          // .... <font></font>
      }<font></font>
<font></font>
      bar() {<font></font>
          // ....<font></font>
      }<font></font>
<font></font>
}<font></font>
<font></font>
const f = new Foo();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，可能需要进行调用</font></font><code>baz()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才能使对象处于有效状态，才能使调用</font></font><code>bar()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常工作。</font><font style="vertical-align: inherit;">但是你怎么知道的呢？</font></font></p>

<pre><code>f.baz();<font></font>
f.bar(); // this is ok<font></font>
<font></font>
f.bar();<font></font>
f.baz(); // this blows up<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了弄清楚这一点，您需要仔细检查类的内部，因为从检查公共接口并不能立即看出来。</font><font style="vertical-align: inherit;">在具有大量可变状态和类的大型代码库中，此问题可能会爆炸。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>Foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不变的，那么这不再是问题。</font><font style="vertical-align: inherit;">可以安全地假定我们可以调用</font></font><code>baz</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以任何顺序</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">，因为类的内部状态无法更改。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>Why is immutability so important(or needed) in JavaScript?</p>
</blockquote>

<p>Immutability can be tracked in different contexts, but most important would be to track it against the application state and against the application UI.</p>

<p>I will consider the JavaScript Redux pattern as very trendy and modern approach and because you mentioned that. </p>

<p>For the UI we need to make it <strong>predictable</strong>. 
It will be predictable if <code>UI = f(application state)</code>.</p>

<p>Applications (in JavaScript) do change the state via actions implemented using the <strong>reducer function</strong>.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reducer函数仅获取动作和旧状态并返回新状态，从而保持旧状态不变。</font></font></p>

<pre><code>new state  = r(current state, action)
</code></pre>

<p><a href="https://i.stack.imgur.com/RMMb2.png" rel="noreferrer"><img src="https://i.stack.imgur.com/RMMb2.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好处是：由于所有状态对象均已保存，因此您可以遍历状态，并且自 </font></font><code>UI = f(state)</code></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以轻松地撤消/重做。</font></font></h3>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">碰巧创建所有这些状态仍然可以提高内存效率，与Git的类比很棒，并且在Linux OS中，我们使用符号链接（基于inode）也有类似的类比。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管其他答案很好，但是要解决有关实际用例的问题（来自其他答案的注释），请让我们离开正在运行的代码一分钟，然后在您的鼻子底下看看无处不在的答案：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">git</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果每次您推送一个提交都</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">覆盖</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了存储库中的数据，</font><font style="vertical-align: inherit;">将会发生什么</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我们讨论不可变集合面临的问题之一：内存膨胀。</font><font style="vertical-align: inherit;">Git足够聪明，它不仅可以在每次更改时简单地创建文件的新副本，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可以跟踪差异</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我对git的内部运作了解不多，但我只能假设它使用与您所引用的库类似的策略：结构共享。</font><font style="vertical-align: inherit;">在后台，库使用</font></font><a href="https://en.wikipedia.org/wiki/Trie" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">try</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或其他树来仅跟踪不同的节点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种策略对于内存中的数据结构也相当有效，因为有</font></font><a href="https://rads.stackoverflow.com/amzn/click/com/0521663504" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">众所周知的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对数时间里的树运算算法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个用例：假设您要在Web应用程序上使用撤消按钮。</font><font style="vertical-align: inherit;">使用数据的不可变表示形式，实现这种过程相对简单。</font><font style="vertical-align: inherit;">但是，如果您依赖突变，则意味着您必须担心缓存世界状况并进行原子更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，要为运行时性能和学习曲线的不变性付出代价。</font><font style="vertical-align: inherit;">但是任何有经验的程序员都会告诉您，调试时间比代码编写时间大一个数量级。</font><font style="vertical-align: inherit;">用户不必忍受的与状态相关的错误，可能会大大抵消对运行时性能的轻微影响。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，为什么不变性如此重要？</font><font style="vertical-align: inherit;">突变对象有什么问题？</font><font style="vertical-align: inherit;">它不是使事情变得简单吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，事实恰恰相反：可变性使事情变得更复杂，至少从长远来看。</font><font style="vertical-align: inherit;">是的，它使您的初始编码更加容易，因为您可以随心所欲地进行更改，但是当程序变大时，这将成为一个问题–如果更改了值，什么更改了？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使所有内容不变时，这意味着数据再也不会因意外而更改。</font><font style="vertical-align: inherit;">您肯定知道，如果将值传递给函数，则无法在该函数中对其进行更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之：如果您使用不可变的值，则很容易就可以对您的代码进行推理：每个人都会获得数据的唯一*副本，因此它无法处理并破坏代码的其他部分。</font><font style="vertical-align: inherit;">想象一下，这使在多线程环境中工作变得容易得多！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意1：根据您所做的操作，不变性可能会带来性能损失，但是Immutable.js之类的东西会尽可能地优化。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注2：在不太确定的情况下，您不确定Immutable.js和ES6的</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">含义完全不同。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在通常情况下，我可以将对象添加到数组中。</font><font style="vertical-align: inherit;">在这种情况下我该如何实现？</font><font style="vertical-align: inherit;">删除商店并重新创建？</font><font style="vertical-align: inherit;">是不是将对象添加到数组中的开销较小？</font><font style="vertical-align: inherit;">PS：如果该示例不是解释不变性的正确方法，请让我知道什么是正确的实际示例。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您的新闻示例非常好，您的推理也完全正确：您不能只修改现有列表，因此需要创建一个新列表：</font></font></p>

<pre><code>var originalItems = Immutable.List.of(1, 2, 3);<font></font>
var newItems = originalItems.push(4, 5, 6);<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
