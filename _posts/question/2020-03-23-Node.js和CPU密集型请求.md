---
layout: question
title:  Node.js和CPU密集型请求
date:   2020-03-23T06:22:58.000Z
description: 我已经开始修改Node.js HTTP服务器，并且真的很想编写服务器端Javascript，但是有些事情使我无法开始在Web应用程序中使用Node.js。...
img: 
author: 乐
category: question
answer: 5
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经开始修改Node.js HTTP服务器，并且真的很想编写服务器端Javascript，但是有些事情使我无法开始在Web应用程序中使用Node.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我了解整个异步I / O概念，但我对程序代码占用大量CPU资源的极端情况（如图像处理或对大型数据集进行排序）感到有些担忧。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我了解，对于简单的网页请求（例如查看用户列表或查看博客帖子），服务器将非常快。</font><font style="vertical-align: inherit;">但是，如果我想编写非常占用CPU的代码（例如在管理后端），以生成图形或调整成千上万张图像的大小，则请求将非常缓慢（几秒钟）。</font><font style="vertical-align: inherit;">由于此代码不是异步的，因此在那几秒钟内到达服务器的每个请求都将被阻止，直到我的慢请求完成为止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种建议是使用Web Workers执行CPU密集型任务。</font><font style="vertical-align: inherit;">但是，恐怕网络工作者会很难编写干净的代码，因为它可以通过包含一个单独的JS文件来工作。</font><font style="vertical-align: inherit;">如果CPU密集型代码位于对象的方法中怎么办？</font><font style="vertical-align: inherit;">为每个CPU密集型方法编写JS文件实在是太糟了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个建议是产生一个子进程，但这会使代码的可维护性降低。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议可以克服这个（公认的）障碍？</font><font style="vertical-align: inherit;">在确保CPU重任务异步执行的同时，如何使用Node.js编写干净的面向对象的代码？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2824篇《Node.js和CPU密集型请求》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>child_process</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种解决方案。</font><font style="vertical-align: inherit;">但是与Go相比，产生的每个子进程可能会消耗大量内存</font></font><code>goroutines</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用基于队列的解决方案，例如</font></font><a href="https://github.com/Automattic/kue" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">kue</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用几种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如@Tim所述，您可以创建一个异步任务，该任务位于主服务逻辑之外或与之并行。</font><font style="vertical-align: inherit;">取决于您的确切要求，但是即使</font></font><a href="https://en.wikipedia.org/wiki/Cron" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cron</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以充当排队机制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebWorkers可以为您的异步进程工作，但是node.js当前不支持它们。</font><font style="vertical-align: inherit;">有几个提供支持的扩展，例如：</font><a href="http://github.com/cramforce/node-worker" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://github.com/cramforce/node-worker" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/cramforce/node-worker</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您仍然可以通过标准的“需要”机制重用模块和代码。</font><font style="vertical-align: inherit;">您只需要确保向工作人员的初始调度传递了处理结果所需的所有信息。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不希望CPU密集型代码执行异步，而是希望它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并行</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您需要从处理HTTP请求的线程中删除处理工作。</font><font style="vertical-align: inherit;">这是解决此问题的唯一方法。</font><font style="vertical-align: inherit;">使用NodeJS，答案就是</font></font><a href="https://nodejs.org/api/cluster.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集群模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于产生繁重的子进程。</font><font style="vertical-align: inherit;">（AFAIK Node没有线程/共享内存的任何概念；它是进程或什么都没有）。</font><font style="vertical-align: inherit;">对于如何构造应用程序，您有两个选择。</font><font style="vertical-align: inherit;">通过生成8个HTTP服务器并在子进程上同步处理计算密集型任务，可以获得80/20解决方案。</font><font style="vertical-align: inherit;">这样做很简单。</font><font style="vertical-align: inherit;">您可能需要一个小时来阅读该链接。</font><font style="vertical-align: inherit;">实际上，如果仅撕掉该链接顶部的示例代码，您将获得95％的访问权限。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造此任务的另一种方法是设置作业队列并通过该队列发送大型计算任务。</font><font style="vertical-align: inherit;">请注意，作业队列的IPC有很多开销，因此仅当任务明显大于开销时，这才有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令我惊讶的是，这些其他答案都没有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提到</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集群。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景：异步代码是暂停直到其他</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地方</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生</font><em><font style="vertical-align: inherit;">什么</font></em><font style="vertical-align: inherit;">的代码，这时代码醒来并继续执行。</font><font style="vertical-align: inherit;">I / O是一种很常见的情况，必须在其他地方发生缓慢的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果由</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的处理器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来负责工作，</font><font style="vertical-align: inherit;">那么异步代码就没有用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">“计算密集型”任务就是这种情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，异步代码似乎很合适，但实际上它很常见。</font><font style="vertical-align: inherit;">它恰好对计算密集型任务没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，等待I / O是Web服务器中经常发生的一种模式。</font><font style="vertical-align: inherit;">连接到您的服务器的每个客户端都有一个套接字。</font><font style="vertical-align: inherit;">大多数时候，插座是空的。</font><font style="vertical-align: inherit;">在套接字接收到一些数据之前，您不需要执行任何操作，此时您要处理请求。</font><font style="vertical-align: inherit;">在后台，像Node这样的HTTP服务器正在使用事件库（libev）来跟踪数千个打开的套接字。</font><font style="vertical-align: inherit;">操作系统通知libev，然后在其中一个套接字获取数据时，libev通知NodeJS，然后NodeJS在事件队列中放置一个事件，此时您的http代码启动，并依次处理事件。</font><font style="vertical-align: inherit;">在套接字具有一些数据之前，事件不会进入队列，因此事件永远不会在数据上等待-它已经在等待数据了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当瓶颈正在等待一堆几乎是空的套接字连接并且您不想为每个空闲连接使用整个线程或进程并且您不想轮询250k时，基于事件的单线程Web服务器就成为一种范式套接字以查找下一个包含数据的套接字。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对Web服务器定义的误解-它仅应用于与客户端“交谈”。</font><font style="vertical-align: inherit;">重负载任务应委托给独立程序（当然也可以用JS编写）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可能会说它很脏，但是我向您保证，调整图像大小的Web服务器进程会更糟（即使可以说Apache，但它不会阻止其他查询）。</font><font style="vertical-align: inherit;">不过，您可以使用公共库来避免代码冗余。    </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我想出了一个比喻；</font><font style="vertical-align: inherit;">Web应用程序应作为餐厅。</font><font style="vertical-align: inherit;">您有服务员（Web服务器）和厨师（工人）。</font><font style="vertical-align: inherit;">服务员与客户保持联系，并执行简单的任务，例如提供菜单或解释某些菜是否素食。</font><font style="vertical-align: inherit;">另一方面，他们将较艰巨的任务委托给厨房。</font><font style="vertical-align: inherit;">因为服务员只做简单的事情，所以他们会迅速做出反应，而厨师则可以专心工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的Node.js将是一个单一但非常有才华的服务员，它可以一次处理许多请求，而Apache将是一群笨拙的服务员，每个服务员仅处理一个请求。</font><font style="vertical-align: inherit;">如果这个Node.js服务员开始做饭，那将是一场灾难。</font><font style="vertical-align: inherit;">尽管如此，烹饪还可能耗尽甚至大量的Apache服务员，更不用说厨房的混乱和响应能力的逐步下降。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要的是一个任务队列！</font><font style="vertical-align: inherit;">将长时间运行的任务移出Web服务器是一件好事。</font><font style="vertical-align: inherit;">将每个任务保存在“单独的” js文件中可促进模块化和代码重用。</font><font style="vertical-align: inherit;">它迫使您考虑如何以某种方式构造您的程序，从长远来看，它将使调试和维护变得更加容易。</font><font style="vertical-align: inherit;">任务队列的另一个好处是可以用不同的语言编写工作人员。</font><font style="vertical-align: inherit;">只需弹出一个任务，执行工作，然后将响应写回即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样的东西</font></font><a href="https://github.com/resque/resque" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/resque/resque</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是github上的一篇文章，介绍了他们为什么建立它</font></font><a href="http://github.com/blog/542-introducing-resque" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://github.com/blog/542-introducing-resque</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
