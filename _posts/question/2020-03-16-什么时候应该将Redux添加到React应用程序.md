---
layout: question
title:  什么时候应该将Redux添加到React应用程序？
date:   2020-03-16T07:19:10.000Z
description: 我目前正在学习React，并且试图找出如何将其与Redux一起用于构建移动应用程序。我对两者如何关联/一起使用感到困惑。例如，我在React https ...
img: 
author: 乐米亚
category: question
answer: 5
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在学习React，并且试图找出如何将其与Redux一起用于构建移动应用程序。</font><font style="vertical-align: inherit;">我对两者如何关联/一起使用感到困惑。</font><font style="vertical-align: inherit;">例如，我在React </font></font><a href="https://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成了本教程</font><font style="vertical-align: inherit;">，但现在我想尝试在该应用中添加一些reducers / action，我不确定这些内容将与我已经完成的工作联系在一起。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1788篇《什么时候应该将Redux添加到React应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小小</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们编写应用程序时，我们需要管理应用程序的状态。</font><font style="vertical-align: inherit;">如果需要在组件之间共享状态，React可以在组件内部本地管理状态，我们可以使用prop或回调。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是随着应用程序的增长，管理状态和状态转换变得很困难，为了调试应用程序，需要正确跟踪状态和状态转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux是JavaScript应用程序的可预测状态容器，用于管理状态和状态转换，并经常与React，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下图可以解释redux的概念。</font></font></p>

<p><a href="https://i.stack.imgur.com/oh5SB.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/oh5SB.png" alt="Redux"></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户与组件进行交互时用户触发一个动作，并调度一个动作来存储时，存储中的化简器将接受该动作并更新应用程序的状态，并在存储中进行更新时将其存储在应用程序范围的不可变全局变量中订阅该状态的相应视图组件将得到更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于状态是全局管理的，因此可以更轻松地进行维护。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无西里</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/VdfpQ.gif" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/VdfpQ.gif" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是redux的工作方式。</font><font style="vertical-align: inherit;">从任何组件或视图调度动作。</font><font style="vertical-align: inherit;">动作必须具有“类型”属性，并且可以是保存发生的动作信息的任何属性。</font><font style="vertical-align: inherit;">实际传递的数据可能与不同的reducer有关，因此同一对象将传递给不同的reducer。</font><font style="vertical-align: inherit;">每个reducer提取/贡献其状态部分/贡献。</font><font style="vertical-align: inherit;">然后合并输出并形成新状态，并通知必须为状态更改事件订阅的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，棕色具有所有3个分量RGB。</font><font style="vertical-align: inherit;">每个还原剂都接收相同的棕色，并且将其对颜色的贡献分开。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Eva</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现，添加到Redux的应用程序/堆栈理想的路径是要等到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你/应用/团队都感到痛苦，它解决了。</font><font style="vertical-align: inherit;">一旦开始看到</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由多个层次的组件建立和传递的</font><font style="vertical-align: inherit;">漫长链条，</font><font style="vertical-align: inherit;">或者发现您正在编排复杂的状态操作/读取，这可能表明您的应用可能会受益于Redux等的引入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您使用已经使用“ just React”构建的应用程序，并查看Redux可能如何适合其中。</font><font style="vertical-align: inherit;">看看您是否可以一次抽出一个状态或一组“动作”来优雅地介绍它。</font><font style="vertical-align: inherit;">对其进行重构，而不必大为改写您的应用程序。</font><font style="vertical-align: inherit;">如果您仍然看不到它可以在何处增加价值，那么这可能表明您的应用程序不够大或不够复杂，无法在React之上使用Redux之类的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您还没有看过它，Dan（上面回答）会提供一个很棒的短片系列，从根本上讲解Redux。</font><font style="vertical-align: inherit;">我强烈建议您花一些时间吸收其中的一些内容：</font><a href="https://egghead.io/series/getting-started-with-redux"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://egghead.io/series/getting-started-with-redux"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//egghead.io/series/getting-started-with-redux</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux也有一些很棒的文档。</font><font style="vertical-align: inherit;">尤其要解释很多“为什么”，例如</font></font><a href="http://redux.js.org/docs/introduction/ThreePrinciples.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://redux.js.org/docs/introduction/ThreePrinciples.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用过Redux并亲自发现它很麻烦之后，我发现将对象作为道具传递给我的组件是一种更容易维护状态的方法。</font><font style="vertical-align: inherit;">更不用说这是对函数的引用以调用其他组件的简单方法。</font><font style="vertical-align: inherit;">它可以解决在React中组件之间传递消息的许多麻烦问题，因此这是一对二的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React是一个UI框架，负责响应“真理源”（通常被描述为某个组件“拥有”的状态）来更新UI。</font></font><a href="https://facebook.github.io/react/docs/thinking-in-react.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的</font><a href="https://facebook.github.io/react/docs/thinking-in-react.html" rel="noreferrer"><font style="vertical-align: inherit;">思考</font></a><font style="vertical-align: inherit;">很好地描述了React状态所有权的概念，我强烈建议您仔细研究一下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当状态是分层的并且或多或少与组件结构匹配时，此状态所有权模型可以很好地工作。</font><font style="vertical-align: inherit;">这样，状态就可以“分散”到许多组件中，并且该应用程序易于理解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，有时应用程序的较远部分希望能够访问相同的状态，例如，如果您缓存获取的数据并希望同时在各处一致地更新它。</font><font style="vertical-align: inherit;">在这种情况下，如果您遵循React模型，您将在组件树的顶部得到一堆非常大的组件，这些组件将无数个prop向下传递给一些不使用它们的中间组件，只是为了到达一些实际上关心该数据的叶子组件。</font></font></p>

<p>When you find yourself in this situation, you <em>can</em> (but don’t have to) use Redux to “extract” this state management logic from the top-level components into separate functions called “reducers”, and “connect” the leaf components that care about that state directly to it instead of passing the props through the whole app. If you don’t have this problem yet, you probably don’t need Redux.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，请注意，Redux并不是解决此问题的最终解决方案。</font><font style="vertical-align: inherit;">还有许多其他方法可以在React组件之外管理您的本地状态-例如，一些不喜欢Redux的人对</font></font><a href="https://github.com/mobxjs/mobx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MobX</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感到</font><a href="https://github.com/mobxjs/mobx" rel="noreferrer"><font style="vertical-align: inherit;">满意</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我建议您首先对React状态模型有一个深刻的了解，然后独立评估不同的解决方案，并与它们一起构建小型应用程序，以了解它们的优缺点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（此答案的灵感来自于Pete Hunt的</font></font><a href="https://github.com/petehunt/react-howto#learning-flux" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南，我建议您也阅读它。）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
