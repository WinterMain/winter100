---
layout: question
title:  Node.js本机Promise.all是并行还是顺序处理？
date:   2020-03-24T09:07:58.000Z
description: 我想澄清这一点，因为文档对此不太清楚。问题1：是Promise.all(iterable)按顺序还是并行处理所有承诺？或者，更具体地说，它相当于运行像...
img: 
author: 神乐小哥Near
category: question
answer: 11
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想澄清这一点，因为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此不太清楚。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题1：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>Promise.all(iterable)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按顺序还是并行处理所有承诺？</font><font style="vertical-align: inherit;">或者，更具体地说，它相当于运行像</font></font></p>

<pre><code>p1.then(p2).then(p3).then(p4).then(p5)....
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者是一些其他类型的算法的所有</font></font><code>p1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>p5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等是被称为在同一时间（并行）和结果尽快返回所有的决心（或一个不合格品）？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>Promise.all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并行运行，是否有方便的方法可以依次运行可迭代程序？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：我不想使用Q或Bluebird，而是要使用所有本机ES6规范。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3529篇《Node.js本机Promise.all是并行还是顺序处理？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Sam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过for循环来实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步函数返回承诺</font></font></p>

<pre><code>async function createClient(client) {<font></font>
    return await Client.create(client);<font></font>
}<font></font>
<font></font>
let clients = [client1, client2, client3];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您编写以下代码，则会并行创建客户端</font></font></p>

<pre><code>const createdClientsArray = yield Promise.all(clients.map((client) =&gt;<font></font>
    createClient(client);<font></font>
));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后并行创建所有客户端。</font><font style="vertical-align: inherit;">但是，如果要顺序创建客户端，则应使用for循环</font></font></p>

<pre><code>const createdClientsArray = [];<font></font>
for(let i = 0; i &lt; clients.length; i++) {<font></font>
    const createdClient = yield createClient(clients[i]);<font></font>
    createdClientsArray.push(createdClient);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后按顺序创建所有客户端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快乐的编码:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直使用for来解决顺序承诺。</font><font style="vertical-align: inherit;">我不确定这是否对您有帮助，但这就是我一直在做的事情。</font></font></p>

<pre><code>async function run() {<font></font>
    for (let val of arr) {<font></font>
        const res = await someQuery(val)<font></font>
        console.log(val)<font></font>
    }<font></font>
}<font></font>
<font></font>
run().then().catch()<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">平行</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看这个例子</font></font></p>

<pre><code>const resolveAfterTimeout = async i =&gt; {<font></font>
  return new Promise(resolve =&gt; {<font></font>
    console.log("CALLED");<font></font>
    setTimeout(() =&gt; {<font></font>
      resolve("RESOLVED", i);<font></font>
    }, 5000);<font></font>
  });<font></font>
};<font></font>
<font></font>
const call = async () =&gt; {<font></font>
  const res = await Promise.all([<font></font>
    resolveAfterTimeout(1),<font></font>
    resolveAfterTimeout(2),<font></font>
    resolveAfterTimeout(3),<font></font>
    resolveAfterTimeout(4),<font></font>
    resolveAfterTimeout(5),<font></font>
    resolveAfterTimeout(6)<font></font>
  ]);<font></font>
  console.log({ res });<font></font>
};<font></font>
<font></font>
call();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过运行代码，它将为所有六个promise控制台“ CALLED”，并且在解决它们后，它将在超时后同时对每6个响应进行控制台</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p>NodeJS does not run promises in parallel, it runs them concurrently since it’s a single threaded event loop architecture. There is a possibility to run things in parallel by creating  a new child process to take advantage of the multiple core CPU.</p>

<p><a href="https://bytearcher.com/articles/parallel-vs-concurrent/" rel="nofollow noreferrer">Parallel Vs Concurent</a></p>

<p>In fact, what <code>Promise.all</code> does is, stacking the promises function in the appropriate queue (see event loop architecture) running them concurrently (call P1, P2,...) then waiting for each result, then resolving the Promise.all with all the promises results. 
Promise.all will fail at the first promise which fail, unless you have manage the rejection yourself.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并行和并发之间的主要区别是，第一个将在完全相同的时间在单独的进程中运行不同的计算，并且它们将在此处进行节奏，而另一个将在不等待上一个的情况下依次执行不同的计算无需彼此依赖即可同时完成和进行计算。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，要回答您的问题，</font></font><code>Promise.all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会并行或顺序执行</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">而不会并行执行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Jim</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">async await</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以很容易地依次执行一个promise数组：</font></font></p>

<pre><code>let a = [promise1, promise2, promise3];<font></font>
<font></font>
async function func() {<font></font>
  for(let i=0; i&lt;a.length; i++){<font></font>
    await a[i]();<font></font>
  }  <font></font>
}<font></font>
<font></font>
func();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注：在上面的实现，如果承诺被拒绝，其余的将不会是executed.If要执行所有的承诺，那么你的包裹</font></font><code>await a[i]();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">里面</font></font><code>try catch</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Harry米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了详细说明@Bergi的答案（这很简洁，但是很难理解；）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码将运行数组中的每个项目，并在末尾添加下一个“ then链”。</font></font></p>

<pre><code>function eachorder(prev,order) {<font></font>
        return prev.then(function() {<font></font>
          return get_order(order)<font></font>
            .then(check_order)<font></font>
            .then(update_order);<font></font>
        });<font></font>
    }<font></font>
orderArray.reduce(eachorder,Promise.resolve());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这是有道理的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bergi的答案帮助我使调用同步化。我在下面添加了一个示例，其中我们在调用前一个函数之后调用了每个函数。</font></font></p>

<pre><code>function func1 (param1) {<font></font>
    console.log("function1 : " + param1);<font></font>
}<font></font>
function func2 () {<font></font>
    console.log("function2");<font></font>
}<font></font>
function func3 (param2, param3) {<font></font>
    console.log("function3 : " + param2 + ", " + param3);<font></font>
}<font></font>
<font></font>
function func4 (param4) {<font></font>
    console.log("function4 : " + param4);<font></font>
}<font></font>
param4 = "Kate";<font></font>
<font></font>
//adding 3 functions to array<font></font>
<font></font>
a=[<font></font>
    ()=&gt;func1("Hi"),<font></font>
    ()=&gt;func2(),<font></font>
    ()=&gt;func3("Lindsay",param4)<font></font>
  ];<font></font>
<font></font>
//adding 4th function<font></font>
<font></font>
a.push(()=&gt;func4("dad"));<font></font>
<font></font>
//below does func1().then(func2).then(func3).then(func4)<font></font>
<font></font>
a.reduce((p, fn) =&gt; p.then(fn), Promise.resolve());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在平行下</font></font></h2>

<pre><code>await Promise.all(items.map(async item =&gt; { await fetchItem(item) }))
</code></pre>

<p>Advantages: Faster. All iterations will be executed even if one fails.</p>

<h2>In sequence</h2>

<pre><code>for (let i = 0; i &lt; items.length; i++) {<font></font>
    await fetchItem(items[i])<font></font>
}<font></font>
</code></pre>

<p>Advantages: Variables in the loop can be shared by each iteration. Behaves like normal imperative synchronous code.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用递归函数使用异步函数顺序处理可迭代对象。</font><font style="vertical-align: inherit;">例如，给定一个</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用异步函数处理</font><font style="vertical-align: inherit;">的数组</font></font><code>someAsyncFunction()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var a = [1, 2, 3, 4, 5, 6]<font></font>
<font></font>
function someAsyncFunction(n) {<font></font>
  return new Promise((resolve, reject) =&gt; {<font></font>
    setTimeout(() =&gt; {<font></font>
      console.log("someAsyncFunction: ", n)<font></font>
      resolve(n)<font></font>
    }, Math.random() * 1500)<font></font>
  })<font></font>
}<font></font>
<font></font>
//You can run each array sequentially with: <font></font>
<font></font>
function sequential(arr, index = 0) {<font></font>
  if (index &gt;= arr.length) return Promise.resolve()<font></font>
  return someAsyncFunction(arr[index])<font></font>
    .then(r =&gt; {<font></font>
      console.log("got value: ", r)<font></font>
      return sequential(arr, index + 1)<font></font>
    })<font></font>
}<font></font>
<font></font>
sequential(a).then(() =&gt; console.log("done"))</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在</font></font><code>Promise.all(iterable)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行的所有承诺？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，诺言不能“被执行”。</font><font style="vertical-align: inherit;">它们在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时就开始执行任务</font><font style="vertical-align: inherit;">-它们仅代表结果-并且</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在并行执行所有操作之前甚至将其传递给它们</font></font><code>Promise.all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>Promise.all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只会</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等待</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多个承诺。</font><font style="vertical-align: inherit;">它不在乎它们以什么顺序解析，也不管计算是否并行运行。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有一种方便的方法来依次运行迭代？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经有了承诺，那么您将无能为力，但是</font></font><code>Promise.all([p1, p2, p3, …])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（没有顺序的概念）。</font><font style="vertical-align: inherit;">但是，如果您确实具有可迭代的异步函数，则实际上可以按顺序运行它们。</font><font style="vertical-align: inherit;">基本上你需要从</font></font></p>

<pre><code>[fn1, fn2, fn3, …]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>fn1().then(fn2).then(fn3).then(…)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的方法是使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noreferrer"><code>Array::reduce</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>iterable.reduce((p, fn) =&gt; p.then(fn), Promise.resolve())
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Green</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bergis的答案使用Array.reduce使我走上了正确的轨道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，要使函数真正返回我的诺言，一个接一个地执行，我必须添加一些嵌套。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的实际用例是由于下游限制而需要依次传输的一系列文件...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我最后得到的。</font></font></p>

<pre><code>getAllFiles().then( (files) =&gt; {<font></font>
    return files.reduce((p, theFile) =&gt; {<font></font>
        return p.then(() =&gt; {<font></font>
            return transferFile(theFile); //function returns a promise<font></font>
        });<font></font>
    }, Promise.resolve()).then(()=&gt;{<font></font>
        console.log("All files transferred");<font></font>
    });<font></font>
}).catch((error)=&gt;{<font></font>
    console.log(error);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如先前的答案所示，请使用：</font></font></p>

<pre><code>getAllFiles().then( (files) =&gt; {<font></font>
    return files.reduce((p, theFile) =&gt; {<font></font>
        return p.then(transferFile(theFile));<font></font>
    }, Promise.resolve()).then(()=&gt;{<font></font>
        console.log("All files transferred");<font></font>
    });<font></font>
}).catch((error)=&gt;{<font></font>
    console.log(error);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始另一个文件传输之前没有等待传输完成，甚至在开始第一个文件传输之前就出现了“已传输所有文件”文本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道我做错了什么，但想分享对我有用的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：自从我写了这篇文章以来，我现在了解了为什么第一个版本不起作用。</font><font style="vertical-align: inherit;">then（）期望一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个promise。</font><font style="vertical-align: inherit;">因此，您应该传递不带括号的函数名称！</font><font style="vertical-align: inherit;">现在，我的函数需要一个参数，因此我需要将一个不带参数的匿名函数包装起来！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
