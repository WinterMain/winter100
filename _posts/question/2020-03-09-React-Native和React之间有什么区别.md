---
layout: question
title:  React Native和React之间有什么区别？
date:   2020-03-09T14:35:59.000Z
description: 我已经出于好奇而开始学习React，并且想知道React和React Native之间的区别-尽管使用Google找不到满意的答案。React和React...
img: 
author: 神乐Near
category: question
answer: 25
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经</font><font style="vertical-align: inherit;">出于好奇而</font><font style="vertical-align: inherit;">开始学习</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且想知道React和React Native之间的区别-尽管使用Google找不到满意的答案。</font><font style="vertical-align: inherit;">React和React Native似乎具有相同的格式。</font><font style="vertical-align: inherit;">它们的语法完全不同吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第312篇《React Native和React之间有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>React Native</strong></p>

<ul>
<li><p>It is a framework for building native applications using JavaScript.</p></li>
<li><p>It compiles to native app components, which makes it possible for you
to build native mobile applications.</p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需检修您的旧应用程序。</font><font style="vertical-align: inherit;">您所要做的就是将React Native UI组件添加到现有应用程序的代码中，而无需重写。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React JS</font></font></strong> </p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它支持前端Web并在服务器上运行，以构建用户界面和Web应用程序。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还允许我们创建可重用的UI组件。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在React JS中重用代码组件，从而节省大量时间。</font></font></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/j3TPA.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/j3TPA.png" alt="React vs React Native"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactJS</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React用于创建网站，Web应用程序，SPA等。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React是用于创建UI层次结构的Javascript库。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它负责呈现UI组件，被视为MVC框架的V部分。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于虚拟DOM仅刷新页面的一部分，因此React的虚拟DOM比常规的完全刷新模型要快，从而减少了页面刷新时间。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React使用组件作为UI的基本单位，可以重复使用这节省了编码时间。</font><font style="vertical-align: inherit;">简单易学。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应本机</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native是一个用于创建跨平台本机应用程序的框架。</font><font style="vertical-align: inherit;">这意味着您可以创建本机应用程序，并且同一应用程序将在Android和ios上运行。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React native具有ReactJS的所有优点</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React native允许开发人员以网络风格的方式创建本地应用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前端开发人员可以轻松地成为移动开发人员。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reactjs使用react-dom而不是浏览器dom，而react native使用虚拟dom，但是两者使用相同的语法，即如果可以使用reactjs，则可以使用react native。因为在reactjs中使用的大多数库都可以在react native中使用像您的反应导航和它们共有的其他常见库。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near理查德路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Some differences are as follows:<br>
<strong>1-</strong> React-Native is a framework which used to create Mobile Apps, where ReactJS is a javascript library you can use for your website.<br>
<strong>2-</strong> React-Native doesn’t use HTML to render the app while React uses.<br>
<strong>3-</strong> React-Native used for developing only Mobile App while React use for website and Mobile.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -React JS是前端javascript库，它是大型库而不是框架</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它遵循基于组件的方法，该方法有助于构建</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
可重用的UI组件

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它用于开发复杂的交互式Web和移动UI</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使仅在2015年才开源，它还是支持它的最大社区之一。</font></font></li>
</ul></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactNative</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -React Native是一个开源移动应用程序框架。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGO西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://reactjs.org/tutorial/tutorial.html" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REACT</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Javascript库，用于构建诸如Facebook之类的大型/小型界面Web应用程序。</font></font></p>

<p><a href="https://facebook.github.io/react-native/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REACT NATIVE</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Javascript框架，用于在Android，IOS和Windows Phone上开发本机移动应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者均由Facebook开源。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总结：React.js用于Web开发，而React-Native用于移动应用程序开发</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我所了解的差异： </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们具有不同的html标签：React Native用于处理文本，而不是在React中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native使用的是Touchable组件，而不是常规的按钮元素。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native具有用于呈现列表的ScrollView和FlatList组件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native使用AsyncStorage，而React使用本地存储。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Native路由器中，它作为堆栈起作用，而在React中，我们使用Route组件进行映射导航。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi泡芙Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，ReactJS是父库，它根据主机环境（浏览器，移动设备，服务器，桌面等）返回要渲染的内容。</font><font style="vertical-align: inherit;">除了渲染外，它还提供其他方法，例如生命周期挂钩等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中，它使用另一个库react-dom来呈现DOM元素。</font><font style="vertical-align: inherit;">在移动设备中，它使用React-Native组件来呈现特定于平台的（IOS和Android）本地UI组件。</font><font style="vertical-align: inherit;">所以，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react + react-dom =网站开发</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应+本机=移动发展  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript库</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于构建Web界面。</font><font style="vertical-align: inherit;">您将需要像webpack这样的捆绑器，并尝试安装构建网站所需的模块。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript框架</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它包含编写多平台应用程序（如iOS或Android）所需的一切。</font><font style="vertical-align: inherit;">您需要安装xcode和android studio才能构建和部署您的应用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与ReactJS不同，React-Native不使用HTML，而是可以在ios和android上使用的相似组件来构建应用。</font><font style="vertical-align: inherit;">这些组件使用真正的本机组件来构建ios和android应用。</font><font style="vertical-align: inherit;">因此，与其他Hybrid开发平台不同，React-Native应用程序具有真实感。</font><font style="vertical-align: inherit;">组件还可以提高代码的可重用性，因为您无需在ios和android上再次创建相同的用户界面。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Js正在使用HTML Dom。</font><font style="vertical-align: inherit;">但是React native正在使用移动（iOS / android）本机ui组件进行操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一JinJin伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于组件生命周期以及所有其他方面，它几乎是相同的。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别主要是所使用的JSX标记。</font><font style="vertical-align: inherit;">React使用类似于html的脚本。</font><font style="vertical-align: inherit;">另一个是标记，react-native使用该标记显示视图。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native适用于移动应用程序，而React适用于网站（前端）。</font><font style="vertical-align: inherit;">两者都是Facebook发明的框架。</font><font style="vertical-align: inherit;">React Native是一个跨平台开发框架，意味着可以为IOS和Android编写几乎相同的代码，并且可以正常工作。</font><font style="vertical-align: inherit;">我个人对React Native的了解更多，因此我将在此保留它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Js是一个Javascript库，您可以在其中使用React开发和运行更快的Web应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native允许您仅使用JavaScript来构建移动应用程序，它用于移动应用程序开发。</font><font style="vertical-align: inherit;">更多信息在这里</font></font><a href="https://facebook.github.io/react-native/docs/getting-started.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://facebook.github.io/react-native/docs/getting-started.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React DOM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的基础抽象</font><font style="vertical-align: inherit;">，因此，如果要使用React Native，则还需要React ...与Web相同，但是要使用React Native，则需要React DOM。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于React是基本的抽象，因此一般语法和工作流程是相同的，但是您将使用的组件是非常不同的，因此您将需要学习这些差异，这与React内联，即所谓的moto，即“在任何地方学习一次写入”，因为您知道React（基础抽象）后，您可以简单地了解平台之间的差异，而无需学习其他编程语言，语法和工作流程。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-Native是一个框架，其中ReactJS是可用于您的网站的javascript库。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-native提供默认的核心组件（图像，文本），其中React提供了许多组件并使它们协同工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC64421792</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactJS是一个核心框架，旨在构建基于反应式模式隔离的组件，您可以将其视为MVC中的V，尽管我想指出react确实带来了不同的感受，特别是如果您对反应性概念不太熟悉的话。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactNative是另一层，旨在为Android和iOS平台提供一组通用的组件。</font><font style="vertical-align: inherit;">因此，代码看起来与ReactJS基本相同，因为它是ReactJS，但它是在移动平台中本地加载的。</font><font style="vertical-align: inherit;">您还可以根据操作系统在Java / Objective-C / Swift中桥接更复杂和平台相关的API，并在React中使用它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidAPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React是用于构建用户界面的声明性，高效且灵活的JavaScript库。您的组件会告诉React您要呈现的内容–然后，当数据更改时，React会高效地更新和呈现正确的组件。</font><font style="vertical-align: inherit;">在这里，ShoppingList是一个React组件类或React组件类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native应用程序是一个真正的移动应用程序。</font><font style="vertical-align: inherit;">使用React Native，您无需构建“移动Web应用程序”，“ HTML5应用程序”或“混合应用程序”。</font><font style="vertical-align: inherit;">您构建的真实移动应用程序与使用Objective-C或Java构建的应用程序没有区别。</font><font style="vertical-align: inherit;">React Native使用与常规iOS和Android应用程序相同的基本UI构建块。</font></font></p>

<p><a href="https://medium.com/@alexmngn/from-reactjs-to-react-native-what-are-the-main-differences-between-both-d6e8e88ebf24" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西里Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要是用JavaScript开发的，这意味着您需要入门的大多数代码都可以在平台之间共享。</font><font style="vertical-align: inherit;">React Native将使用本机组件进行渲染。</font><font style="vertical-align: inherit;">React Native应用程序是使用它所针对的平台，iOS的Objective-C或Swift，Android的Java等语言开发的。所编写的代码在各个平台之间不共享，并且它们的行为也有所不同。</font><font style="vertical-align: inherit;">他们可以不受限制地直接访问平台提供的所有功能。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Facebook开发的用于构建用户界面的开源JavaScript库。</font><font style="vertical-align: inherit;">它用于处理Web和移动应用程序的视图层。</font><font style="vertical-align: inherit;">ReactJS过去是用来创建可重用的UI组件的，它是当前it领域中最受欢迎的JavaScript库之一，它拥有强大的基础和庞大的社区，如果您学习ReactJS，则需要具备JavaScript，HTML5和CSS的知识。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单来说，React和React native遵循相同的设计原则，但在设计用户界面时除外。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React native有一组单独的标签来定义移动用户界面，但是都使用JSX来定义组件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种系统的主要目的都是开发可重用的UI组件，并通过其组成减少开发工作量。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正确计划和构建代码，则可以对移动设备和Web使用相同的业务逻辑</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，它是构建移动和Web用户界面的出色库。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，相似之处：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> React和React Native（RN）均旨在创建灵活的用户界面。</font><font style="vertical-align: inherit;">这些框架有很多好处，但是最根本的收获是它们是用于UI开发的。</font><font style="vertical-align: inherit;">在React之后的几年，Facebook开发了RN。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
Facebook设计该框架的方式几乎就像在HTML / XML内编写JavaScript，这就是为什么标记称为“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSX</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”（JavaScript XML）的原因，并且类似于类似HTML的标记，例如</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">React的标志是大写字母标签，它表示定制组件，例如</font></font><code>&lt;MyFancyNavbar /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也存在于RN中。</font><font style="vertical-align: inherit;">但是，React使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">DOM用于HTML，因此React用于Web开发。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
RN不使用HTML，因此不用于Web开发。</font><font style="vertical-align: inherit;">它用于...几乎所有其他用途！</font><font style="vertical-align: inherit;">移动开发（iOS和Android），智能设备（例如手表，电视），增强现实等。由于RN没有与之交互的DOM，因此它使用自己的React，而不是使用相同类型的HTML标签。标签，然后将其编译成其他语言。</font><font style="vertical-align: inherit;">例如，</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RN开发人员使用RN的内置标签</font><font style="vertical-align: inherit;">代替</font><font style="vertical-align: inherit;">标签，该</font></font><code>&lt;View&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">内置于</font><font style="vertical-align: inherit;">引擎盖下的其他本机代码中（例如，</font></font><code>android.view</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Android和</font></font><code>UIView</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iOS上）。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之：它们非常相似（用于UI开发），但是用于不同的媒介。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿宁嘢</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-Native是用于开发Android和iOS应用程序的框架，该框架共享Java代码的80％-90％。 </font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.js是用于开发Web应用程序的父Javascript库。 </font></font></p>

<ol start="2">
<li><p>While you use tags like <code>&lt;View&gt;</code>, <code>&lt;Text&gt;</code> very frequently in React-Native, React.js uses web html tags like <code>&lt;div&gt;</code> <code>&lt;h1&gt;</code> <code>&lt;h2&gt;</code>, which are only synonyms in dictionary of web/mobile developments.</p></li>
<li><p>For React.js you need DOM for path rendering of html tags, while for mobile application: React-Native uses AppRegistry to register your app.</p></li>
</ol>

<p>I hope this is an easy explanation for quick differences/similarities in React.js and React-Native.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://github.com/facebook/react" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Facebook，他们发明了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此JavaScript可以使用虚拟DOM模型更快地操纵网站DOM。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="https://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React虚拟域模型</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相比，DOM完全刷新要慢一些，</font><a href="https://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode"><font style="vertical-align: inherit;">React虚拟域模型</font></a><font style="vertical-align: inherit;">仅刷新页面的一部分（阅读：部分刷新）。</font></font></p>

<p>As you may understand from this <a href="https://www.youtube.com/watch?v=oWPoW0gIzvs" rel="noreferrer">video</a>, Facebook did not invent React because they understood immediately that the partial refresh would be faster than the conventional one. Originally they needed a way to reduce Facebook application re-build time and luckily this brought the partial DOM refresh to life.</p>

<p><a href="https://github.com/facebook/react-native" rel="noreferrer"><strong>React native</strong></a> is just a consequence of React. It is a platform to build native apps using JavaScript.</p>

<p>Prior to <strong>React native</strong> you needed to know Java for Android or Objective-C for iPhone and iPad to create native apps.</p>

<p>With React Native it is possible to mimic the behavior of the native app in JavaScript and at the end, you will get platform specific code as the output. You may even mix the <strong>native code</strong> with the JavaScript if you need to optimize your application further.</p>

<p>As Olivia Bishop said in the <a href="https://www.youtube.com/watch?v=oWPoW0gIzvs" rel="noreferrer">video</a>, 85% of the <strong>React native</strong> code base can be shared among platforms. These would be the components applications typically use and the common logic. </p>

<p>15% of the code is platform specific. The platform-specific JavaScript is what gives the platform flavor ( and makes the difference in the experience ). </p>

<p>The cool thing is this platform specific code — is already written, so you just need to use it.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactJS是用于构建UI组件层次结构的框架。</font><font style="vertical-align: inherit;">每个组件都有状态和道具。</font><font style="vertical-align: inherit;">数据通过道具从顶层流向底层组件。</font><font style="vertical-align: inherit;">使用事件处理程序在顶级组件中更新状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React native使用React框架为移动应用程序构建组件。</font><font style="vertical-align: inherit;">React native提供了适用于iOS和Android平台的一组基本组件。</font><font style="vertical-align: inherit;">React Native中的一些组件是Navigator，TabBar，Text，TextInput，View，ScrollView。</font><font style="vertical-align: inherit;">这些组件在内部使用本机iOS UIKit和Android UI组件。</font><font style="vertical-align: inherit;">React native还允许使用NativeModules，在JavaScript中可以使用用iOS的ObjectiveC和Android的Java编写的代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://facebook.github.io/react/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个JavaScript库，它支持前端Web并在服务器上运行，用于构建用户界面和Web应用程序。</font></font></p>

<p><a href="https://facebook.github.io/react-native/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个可编译为本机应用程序组件的移动框架，允许您使用JavaScript构建适用于不同平台（iOS，Android和Windows Mobile）的本机移动应用程序，从而允许您使用ReactJS来构建组件，并在罩。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者均由Facebook开源。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
