---
layout: question
title:  在React中动态渲染外部HTML / React组件
date:   2020-03-20T06:15:03.000Z
description: 是否可以从外部来源获取HTML / JSX内容并在React中动态呈现它？在我们的例子中，我们想从Wordpress API中获取内容，并在客户端和服务器...
img: 
author: 猴子村村
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以从外部来源获取HTML / JSX内容并在React中动态呈现它？</font><font style="vertical-align: inherit;">在我们的例子中，我们想从Wordpress API中获取内容，并在客户端和服务器上都进行渲染（我们正在使用NextJS）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，Wordpress API返回一个JSON响应，其中包含一个content属性，该属性是一串HTML / JSX。</font><font style="vertical-align: inherit;">内容看起来像这样。</font></font></p>

<pre><code>{<font></font>
    content: "&lt;div&gt;&lt;Slider imageCount="5" galleryID="1"&gt;&lt;/Slider&gt;&lt;span&gt;This is an image gallery&lt;/span&gt;&lt;/div&gt;"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如您所见，它将是HTML和React组件/ JSX的混合体，以字符串形式表示</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用Axios进行调用以获取内容（使用NextJS的getInitialProps（）方法在服务器和客户端上），然后我需要呈现它，但是我是新手，所以我可以看到几个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）在React中，JSX是在构建时而不是运行时编译的，我看不出如何解决这个问题（例如，在Angular中使用$ compile服务会很容易）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）由于我们不知道Wordpress的内容将使用哪些组件，因此我们必须在页面顶部导入其中的每个组件，其中的内容可能包括组件，也可能包括组件，谁知道？。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我认为这是不可能的，这意味着我们不得不重新考虑使用React，但是我真的希望有人能够回答。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助将不胜感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2530篇《在React中动态渲染外部HTML / React组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以参考以下链接</font></font></p>

<p><a href="https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于React Components部分，您可以使用渲染静态HTML标记字符串 </font></font></p>

<p><a href="https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup</font></font></a></p>

<p>But be sure that the html you get is from an authentic source and will not contain any malicious scripts</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样在React中动态地渲染外部HTML / React组件，就像这样 </font></font><code>,
content: `&lt;div&gt;${&lt;Slider imageCount="5" galleryID="1"&gt;&lt;/Slider&gt;}&lt;span&gt;This is an image gallery&lt;/span&gt;&lt;/div&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以这些符号结尾。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的问题！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该尝试</font></font><a href="https://github.com/TroyAlford/react-jsx-parser" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-jsx-parser</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我认为这可以解决您的问题。</font><font style="vertical-align: inherit;">不知道它如何与Next JS一起使用-我对Next JS没有任何经验。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看此沙箱： </font></font><a href="https://codesandbox.io/s/24r1ypp00p" rel="noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="编辑24r1ypp00p"></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您对所有捆绑在一起的组件都是正确的。</font><font style="vertical-align: inherit;">有一个解决方法。</font><font style="vertical-align: inherit;">:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看此沙箱： </font></font><a href="https://codesandbox.io/s/24r1ypp00p" rel="noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="编辑24r1ypp00p"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个</font></font><code>dynamicComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期望导入承诺并返回一个组件的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更改了在中导入A，B和C组件的方式</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样，每个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入的组件都会获得一个单独的捆绑包，并且仅在需要时才请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该可以解决您的第二个问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
