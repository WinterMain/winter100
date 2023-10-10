---
layout: question
title:  Haskell对Node.js的响应是什么？
date:   2020-03-23T03:43:34.000Z
description: 我相信Erlang社区不会羡慕Node.js，因为它本身就进行非阻塞I / O，并具有将部署轻松扩展到一个以上处理器（Node.js甚至没有内置的功能）的...
img: 
author: 小胖猪猪
category: question
answer: 7
tags: 多线程 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信Erlang社区不会羡慕Node.js，因为它本身就进行非阻塞I / O，并具有将部署轻松扩展到一个以上处理器（Node.js甚至没有内置的功能）的方法。</font><font style="vertical-align: inherit;">有关更多详细信息，请访问</font></font><a href="http://journal.dedasys.com/2010/04/29/erlang-vs-node-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://journal.dedasys.com/2010/04/29/erlang-vs-node-js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/questions/3011317/node-js-or-erlang"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js或Erlang</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哈斯克尔呢？</font><font style="vertical-align: inherit;">Haskell是否可以提供Node.js的某些好处，即一种避免使用I / O而不使用多线程编程的干净解决方案？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js有很多吸引人的地方</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件：无线程操作，程序员仅提供回调（如Snap框架中一样）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调保证在单个线程中运行：不可能出现竞争条件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">漂亮又简单的UNIX友好API。</font><font style="vertical-align: inherit;">奖励：出色的HTTP支持。</font><font style="vertical-align: inherit;">DNS也可用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，每个I / O都是异步的。</font><font style="vertical-align: inherit;">这样可以更轻松地避免锁定。</font><font style="vertical-align: inherit;">但是，回调中过多的CPU处理会影响其他连接（在这种情况下，任务应拆分为较小的子任务并重新计划）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端和服务器端使用相同的语言。</font><font style="vertical-align: inherit;">（但是，我认为这一点没有太大价值。jQuery和Node.js共享事件编程模型，但其余部分却大不相同。我只是看不到如何在服务器端和客户端之间共享代码。在实践中很有用。）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些都包装在一个产品中。</font></font></li>
</ol></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像</font></font><a href="http://nikhilm.github.io/uvbook/introduction.html#background" rel="nofollow" title="nodejs删除了libev"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodejs删除了libev一样</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
，</font></font><a href="http://snapframework.com/faq#where-did-the-libev-backend-go" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Snap Haskell Web框架也删除了libev</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Pro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人认为Node.js和带有回调的编程是不必要的低级和有点不自然的事情。</font><font style="vertical-align: inherit;">当良好的运行时（例如GHC中找到的运行时）可以为您处理回调并且效率很高时，为什么要使用回调进行编程？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时，GHC运行时有了很大的改进：它现在具有一个称为</font></font><a href="http://haskell.cs.yale.edu/wp-content/uploads/2013/08/hask035-voellmy.pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MIO</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的“新的新IO管理器” </font><font style="vertical-align: inherit;">，我相信“ M”代表多核。</font><font style="vertical-align: inherit;">它建立在现有IO管理器的基础上，其主要目标是克服导致4个以上内核性能下降的原因。</font><font style="vertical-align: inherit;">本文提供的性能数字令人印象深刻。</font><font style="vertical-align: inherit;">见自己：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Mio，Haskell中的实际HTTP服务器可扩展到20个CPU内核，与使用以前版本的GHC的相同服务器相比，可将峰值性能提高到6.5倍。</font><font style="vertical-align: inherit;">Haskell服务器的延迟也得到了改善：在中等负载下，与以前版本的GHC相比，预期响应时间减少了5.7倍</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们还表明，借助Mio，McNettle（用Haskell编写的SDN控制器）可以有效地扩展到40多个内核，在一台计算机上每秒可处理超过2000万个新请求，从而成为所有现有SDN控制器中最快的。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mio已将其纳入GHC 7.8.1版本。</font><font style="vertical-align: inherit;">我个人认为这是Haskell性能上的重要一步。</font><font style="vertical-align: inherit;">比较以前的GHC版本和7.8.1编译的现有Web应用程序性能将非常有趣。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我不认为您认为node.js做正确的事情公开了所有这些回调。</font><font style="vertical-align: inherit;">您最终以CPS（连续传递样式）编写程序，我认为完成该转换应该是编译器的工作。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件：无线程操作，程序员仅提供回调（如Snap框架中一样）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，考虑到这一点，您可以根据需要使用异步样式进行编写，但是这样做会错过以高效的同步样式进行编写的功能，每个请求只有一个线程。</font><font style="vertical-align: inherit;">Haskell在同步代码方面效率极高，尤其是与其他语言相比时。</font><font style="vertical-align: inherit;">这是所有的事件。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调保证在单个线程中运行：不可能出现竞争条件。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您仍然可以在node.js中有一个竞争条件，但这更加困难。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个请求都在其自己的线程中。</font><font style="vertical-align: inherit;">当编写必须与其他线程进行通信的代码时，由于haskell的并发原语，使其变得线程安全非常简单。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">漂亮又简单的UNIX友好API。</font><font style="vertical-align: inherit;">奖励：出色的HTTP支持。</font><font style="vertical-align: inherit;">DNS也可用。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看黑客，自己看看。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，每个I / O都是异步的（尽管有时可能很烦人）。</font><font style="vertical-align: inherit;">这样可以更轻松地避免锁定。</font><font style="vertical-align: inherit;">但是，回调中过多的CPU处理会影响其他连接（在这种情况下，任务应拆分为较小的子任务并重新计划）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有此类问题，ghc会将您的工作分配到实际的OS线程中。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端和服务器端使用相同的语言。</font><font style="vertical-align: inherit;">（但是，我认为这一点没有太大价值。JQuery和Node.js共享事件编程模型，但是其余的却大不相同。我只是看不到如何在服务器端和客户端之间共享代码。在实践中很有用。）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Haskell不可能在这里赢球...对吗？</font><font style="vertical-align: inherit;">再想一想，</font></font><a href="http://www.haskell.org/haskellwiki/Haskell_in_web_browser" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.haskell.org/haskellwiki/Haskell_in_web_browser</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些都包装在一个产品中。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载ghc，启动cabal。</font><font style="vertical-align: inherit;">有一个程序包可以满足您的所有需求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Eva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，因此，在观看了</font><font style="vertical-align: inherit;">@gawi指向我</font><font style="vertical-align: inherit;">的一些</font></font><a href="http://www.youtube.com/watch?v=F6k8lTrAE2g" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js演示文稿</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，我可以说出更多有关Haskell与node.js进行比较的信息。</font><font style="vertical-align: inherit;">在演示中，Ryan描述了Green Threads的一些好处，但是接着说，他并不认为缺少线程抽象并不是一个缺点。</font><font style="vertical-align: inherit;">我不同意他的立场，尤其是在Haskell的情况下：我认为线程提供的抽象对于使服务器代码更容易正确使用和更健壮至关重要。</font><font style="vertical-align: inherit;">尤其是：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个连接使用一个线程可使您编写表示与单个客户端进行通信的代码，而不是编写同时处理</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端的</font><font style="vertical-align: inherit;">代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可以这样想：一台处理带有线程的多个客户端的服务器看起来与处理一个客户端的服务器几乎相同；</font><font style="vertical-align: inherit;">主要区别在于</font></font><code>fork</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前者中</font><font style="vertical-align: inherit;">有</font><font style="vertical-align: inherit;">某个地方。</font><font style="vertical-align: inherit;">如果您要实现的协议非常复杂，则同时管理多个客户端的状态机将变得非常棘手，而线程使您仅可以编写与单个客户端的通信脚本。</font><font style="vertical-align: inherit;">该代码更容易正确使用，也易于理解和维护。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个OS线程上的回调是协作式多任务处理，与抢先式多任务处理相反，后者是线程获得的。</font><font style="vertical-align: inherit;">协作式多任务处理的主要缺点在于，程序员负责确保没有饥饿。</font><font style="vertical-align: inherit;">它失去了模块性：在一个地方犯错误，并且会破坏整个系统。</font><font style="vertical-align: inherit;">这确实是您不需要担心的事情，而抢占是简单的解决方案。</font><font style="vertical-align: inherit;">而且，回调之间的通信是不可能的（这将导致死锁）。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Haskell中并发并不困难，因为大多数代码是纯净的，因此在构造上也是线程安全的。</font><font style="vertical-align: inherit;">有简单的通信原语。</font><font style="vertical-align: inherit;">与使用无限制副作用的语言相比，在Haskell中并发地射击自己要困难得多。</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题非常荒谬，因为1）Haskell已经以更好的方式解决了这个问题，并且2）Erlang的方式大致相同。</font><font style="vertical-align: inherit;">这是针对节点的基准测试：</font><a href="http://www.yesodweb.com/blog/2011/03/preliminary-warp-cross-language-benchmarks" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.yesodweb.com/blog/2011/03/preliminary-warp-cross-language-benchmarks" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.yesodweb.com/blog/2011/03/preliminary-warp-cross-language-benchmarks</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为Haskell提供4个内核，它可以在一个应用程序中每秒执行10万个（简单）请求。</font><font style="vertical-align: inherit;">Node不能做那么多，也不能跨内核扩展单个应用程序。</font><font style="vertical-align: inherit;">而且您无需采取任何措施来获得此收益，因为Haskell运行时是非阻塞的。</font><font style="vertical-align: inherit;">Erlang是运行时内置的非阻塞IO的唯一其他（相对通用）语言。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恕我直言，事件是好的，但通过回调进行编程不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使Web应用程序的编码和调试特别特殊的大多数问题都来自使它们具有可伸缩性和灵活性的原因。</font><font style="vertical-align: inherit;">最重要的是HTTP的无状态性质。</font><font style="vertical-align: inherit;">这增强了可导航性，但是在IO元素（在这种情况下为Web服务器）调用应用程序代码中的不同处理程序时，会带来控制反转。</font><font style="vertical-align: inherit;">此事件模型（或更准确地说是回调模型）是一场噩梦，因为回调不共享变量范围，并且导航的直观视图也丢失了。</font><font style="vertical-align: inherit;">防止用户来回导航时所有可能的状态更改以及其他问题非常困难。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说问题类似于事件模型可以正常工作的GUI编程，但是GUI没有导航和后退按钮。</font><font style="vertical-align: inherit;">这增加了Web应用程序中可能的状态转换。</font><font style="vertical-align: inherit;">尝试解决这些问题的结果是，结构复杂的重型框架具有大量无处不在的魔术标识符，而没有质疑问题的根源：回调模型及其固有的缺乏可变范围共享的特性，并且没有排序，因此序列必须通过链接标识符来构造。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在基于顺序的框架，例如ocsigen（ocaml）海边（smalltalk）WASH（已停产，Haskell）和mflow（Haskell），这些框架在维持可导航性和REST功能的同时解决了状态管理问题。</font><font style="vertical-align: inherit;">在这些框架中，程序员可以将导航表示为命令式命令，其中程序在单个线程中发送页面并等待响应，变量在范围内，后退按钮自动工作。</font><font style="vertical-align: inherit;">这样就固有地产生了更短，更安全，更具可读性的代码，其中程序员清楚地看到了导航。</font><font style="vertical-align: inherit;">（警告：我是mflow的开发人员）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>Can Haskell provide some of the benefits of Node.js, namely a clean solution to avoid blocking I/O without having recourse to multi-thread programming?</p>
</blockquote>

<p>Yes, in fact events and threads are unified in Haskell. </p>

<ul>
<li>You can program in explicit lightweight threads (e.g. millions of threads on a single laptop).</li>
<li>Or; you can program in an async event-driven style, based on scalable event notification.</li>
</ul>

<p>Threads are actually <a href="http://research.google.com/pubs/archive/36841.pdf" rel="noreferrer">implemented in terms of events</a>, and run across multiple cores, with seamless thread migration, with documented performance, and applications.</p>

<p>E.g. for</p>

<ul>
<li>massively <a href="http://www.galois.com/blog/2010/06/14/orc-in-haskell-now-on-hackage/" rel="noreferrer">concurrent job orchestration</a></li>
<li>concurrent collections <a href="http://software.intel.com/en-us/blogs/2010/06/24/haskell-cnc-new-paper-available-tests-on-32-and-48-cores/" rel="noreferrer">scaling on 32 or 48 cores</a></li>
<li>tool support for profiling and debugging <a href="http://research.microsoft.com/en-us/projects/threadscope/" rel="noreferrer">multi-threaded/multi-event programs</a>.</li>
<li>high performance <a href="http://snapframework.com" rel="noreferrer">event-driven web servers</a>.</li>
<li>interesting users: <a href="http://www.starling-software.com/misc/icfp-2009-cjs.pdf" rel="noreferrer">such as high-frequency trading</a>.</li>
</ul>

<p><em>Concurrent collections nbody on 32 cores</em></p>

<p><img src="https://i.stack.imgur.com/kUfr9.jpg" alt="替代文字"></p>

<p>In Haskell you have both events and threads, and as it is all events under the hood.</p>

<p><a href="http://research.google.com/pubs/archive/36841.pdf" rel="noreferrer">Read the paper</a> describing the implementation.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
