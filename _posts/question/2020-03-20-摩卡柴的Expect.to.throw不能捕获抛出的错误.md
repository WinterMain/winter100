---
layout: question
title:  摩卡/柴的Expect.to.throw不能捕获抛出的错误
date:   2020-03-20T05:48:54.000Z
description: 我在让Chai的expect.to.thrownode.js应用程序进行测试时遇到问题。测试会不断导致抛出的错误，但是如果我将测试用例包装在try和cat...
img: 
author: 神无Jim小哥
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在让Chai的</font></font><code>expect.to.throw</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js应用程序进行测试时</font><font style="vertical-align: inherit;">遇到问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">测试会不断导致抛出的错误，但是如果我将测试用例包装在try和catch中并断言所捕获的错误，它将起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">难道</font></font><code>expect.to.throw</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不喜欢的工作，我认为它应该还是什么？</font></font></p>

<pre><code>it('should throw an error if you try to get an undefined property', function (done) {<font></font>
  var params = { a: 'test', b: 'test', c: 'test' };<font></font>
  var model = new TestModel(MOCK_REQUEST, params);<font></font>
<font></font>
  // neither of these work<font></font>
  expect(model.get('z')).to.throw('Property does not exist in model schema.');<font></font>
  expect(model.get('z')).to.throw(new Error('Property does not exist in model schema.'));<font></font>
<font></font>
  // this works<font></font>
  try { <font></font>
    model.get('z'); <font></font>
  }<font></font>
  catch(err) {<font></font>
    expect(err).to.eql(new Error('Property does not exist in model schema.'));<font></font>
  }<font></font>
<font></font>
  done();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">失败：</font></font></p>

<pre class="lang-none prettyprint-override"><code>19 passing (25ms)<font></font>
  1 failing<font></font>
<font></font>
  1) Model Base should throw an error if you try to get an undefined property:<font></font>
     Error: Property does not exist in model schema.<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2494篇《摩卡/柴的Expect.to.throw不能捕获抛出的错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LPro</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="http://www.chaijs.com/api/bdd/#method_throw" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doc中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">...;）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您依赖</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于此</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">.throw</font></strong><font style="vertical-align: inherit;">调用函数时丢失的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有办法知道这应该是什么</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用以下选项之一：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法或函数调用</font><strong><font style="vertical-align: inherit;">包装</font></strong><font style="vertical-align: inherit;">在另一个函数中</font></font></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文</font></font></p>

<pre><code>// wrap the method or function call inside of another function<font></font>
expect(function () { cat.meow(); }).to.throw();  // Function expression<font></font>
expect(() =&gt; cat.meow()).to.throw();             // ES6 arrow function<font></font>
<font></font>
// bind the context<font></font>
expect(cat.meow.bind(cat)).to.throw();           // Bind<font></font>
</code></pre></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
