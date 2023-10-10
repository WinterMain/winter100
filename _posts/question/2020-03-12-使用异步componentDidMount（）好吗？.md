---
layout: question
title:  使用异步componentDidMount（）好吗？
date:   2020-03-12T02:23:51.000Z
description: componentDidMount()在React Native中用作异步函数是一种好习惯还是应该避免呢？我需要从AsyncStorage安装组件时获...
img: 
author: 达蒙LEY
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Native中用作异步函数</font><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">一种好习惯还是应该避免呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要从</font></font><code>AsyncStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装组件时</font><font style="vertical-align: inherit;">获取一些信息</font><font style="vertical-align: inherit;">，但是我知道使之成为可能的唯一方法是使</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数异步。</font></font></p>

<pre><code>async componentDidMount() {<font></font>
    let auth = await this.getAuth();<font></font>
    if (auth) <font></font>
        this.checkAuth(auth);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有什么问题吗，还有其他解决方案吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ComponentDidMount中进行异步加载，</font><font style="vertical-align: inherit;">因为React从传统的生命周期方法（componentWillMount，componentWillReceiveProps，componentWillUpdate）转移到了Async Rendering。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇博客文章对解释为什么这样做安全并且在ComponentDidMount中提供异步加载示例非常有帮助： </font></font></p>

<p><a href="https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙阿飞斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢用这样的东西</font></font></p>

<pre><code>componentDidMount(){<font></font>
   const result = makeResquest()<font></font>
}<font></font>
async makeRequest(){<font></font>
   const res = await fetch(url);<font></font>
   const data = await res.json();<font></font>
   return data<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码很好，对我来说也很容易理解。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://medium.com/front-end-hacking/async-await-with-react-lifecycle-methods-802e7760d802" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dale Jefferson的这篇文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中显示了一个异步</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例，并且看起来也非常不错。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是有些人会说，阅读代码的人可能会认为React会使用返回的诺言做某事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对此代码的解释以及是否是一个好的实践都是非常个人的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要其他解决方案，则可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">promises</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>componentDidMount() {<font></font>
    fetch(this.getAuth())<font></font>
      .then(auth =&gt; {<font></font>
          if (auth) this.checkAuth(auth)<font></font>
      })<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我的构建：React 16，Webpack 4，Babel 7）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Babel 7时，您会发现：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此模式...</font></font></p>

<pre><code>async componentDidMount() {<font></font>
    try {<font></font>
        const res = await fetch(config.discover.url);<font></font>
        const data = await res.json();<font></font>
        console.log(data);<font></font>
    } catch(e) {<font></font>
        console.error(e);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将遇到以下错误...</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的ReferenceError：未定义regeneratorRuntime</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您将需要安装</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-transform-runtime</font></font></em></p>

<p><a href="https://babeljs.io/docs/en/babel-plugin-transform-runtime.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://babeljs.io/docs/en/babel-plugin-transform-runtime.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果由于某种原因您不希望安装上述软件包（babel-plugin-transform-runtime），那么您将希望遵循Promise模式...</font></font></p>

<pre><code>componentDidMount() {<font></font>
    fetch(config.discover.url)<font></font>
    .then(res =&gt; res.json())<font></font>
    .then(data =&gt; {<font></font>
        console.log(data);<font></font>
    })<font></font>
    .catch(err =&gt; console.error(err));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为只要您知道自己在做什么就可以。</font><font style="vertical-align: inherit;">但这可能会造成混淆，因为</font></font><code>async componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行并且卸载了组件</font><font style="vertical-align: inherit;">之后仍可以运行</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还想在内部启动同步和异步任务</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是异步的，则必须将所有同步代码放在first之前</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于某人来说，在第一个代码之前</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同步运行</font><font style="vertical-align: inherit;">的代码可能并不明显</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，我可能会保持</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同步，但是让它调用sync和async方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论选择</font></font><code>async componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs同步</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><code>async</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，都必须确保清除在卸载组件时可能仍在运行的所有侦听器或异步方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font><font style="vertical-align: inherit;">使用</font></font><code>async</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字时，文档会这样说：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以立即在componentDidMount（）中调用setState（）。</font><font style="vertical-align: inherit;">它会触发额外的渲染，但是会在浏览器更新屏幕之前发生。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用</font></font><code>async componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则将失去此功能：浏览器更新屏幕后，将进行另一个渲染。</font><font style="vertical-align: inherit;">但是imo，如果您正在考虑使用异步操作（例如获取数据），则无法避免浏览器将屏幕更新两次。</font><font style="vertical-align: inherit;">在另一个世界中，无法在浏览器更新屏幕之前暂停componentDidMount</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
