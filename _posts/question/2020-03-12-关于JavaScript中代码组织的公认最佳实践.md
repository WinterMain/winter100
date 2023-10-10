---
layout: question
title:  关于JavaScript中代码组织的公认最佳实践
date:   2020-03-12T06:47:41.000Z
description:                                                                          ...
img: 
author: 泡芙阿飞斯丁
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于观点的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，以便通过</font></font><a href="/posts/247209/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以事实和引用的形式回答</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2014-12-23 00：42：24Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着jQuery之类的JavaScript框架使客户端Web应用程序变得更丰富，更实用，我开始注意到一个问题...</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您如何将其组织起来？</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有处理程序放在一个位置并为所有事件编写函数？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建函数/类来包装所有功能？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写得像疯了似的，只是希望它能达到最佳效果？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放弃并获得新的职业？</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我提到了jQuery，但实际上实际上是任何JavaScript代码。</font><font style="vertical-align: inherit;">我发现随着线的堆积开始，管理脚本文件或查找所需内容变得越来越困难。</font><font style="vertical-align: inherit;">我发现的最大问题可能是做同一件事的方法太多，很难知道哪种是当前公认的最佳实践。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于保持</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件与应用程序其余部分一样整洁</font><font style="vertical-align: inherit;">的最佳方法，是否有任何一般性建议</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">还是这仅仅是IDE的问题？</font><font style="vertical-align: inherit;">有更好的选择吗？</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的目的是更多关于代码组织而不是文件组织。</font><font style="vertical-align: inherit;">有一些非常好的合并文件或拆分内容的示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：组织实际代码的当前公认的最佳实践方法是什么？</font><font style="vertical-align: inherit;">与页面元素进行交互并创建互不冲突的可重用代码的方式，甚至是推荐的方式？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人列出了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称空间</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一个好主意。</font><font style="vertical-align: inherit;">还有哪些其他方式，更具体地说是处理页面上的元素并使代码井井有条和整洁？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1019篇《关于JavaScript中代码组织的公认最佳实践》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长斯丁Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">延迟加载您需要的代码。</font><font style="vertical-align: inherit;">Google使用其</font><a href="http://code.google.com/apis/ajax/documentation/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">google.loader</font></a><font style="vertical-align: inherit;">执行类似的操作</font></font><a href="http://code.google.com/apis/ajax/documentation/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有提及服务器端语言是什么。</font><font style="vertical-align: inherit;">或者，更重要的是，您在服务器端使用什么框架（如果有）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IME，我将事情组织在服务器端，然后全部放到网页上。</font><font style="vertical-align: inherit;">该框架的任务不仅是组织每个页面必须加载的JS，而且还组织与生成的标记一起使用的JS片段。</font><font style="vertical-align: inherit;">通常您不希望发出这样的片段不止一次-这就是为什么将它们抽象到该代码的框架中以解决该问题的原因。</font><font style="vertical-align: inherit;">:-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于必须发出自己的JS的结束页，我通常会发现所生成的标记中包含逻辑结构。</font><font style="vertical-align: inherit;">这样的本地化JS通常可以在这种结构的开始和/或结束处进行组装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这些都不会让您免于编写有效的JavaScript！</font><font style="vertical-align: inherit;">:-)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的问题是去年年底困扰我的一个问题。</font><font style="vertical-align: inherit;">区别在于-将代码交给从未听说过私有和公共方法的新开发人员。</font><font style="vertical-align: inherit;">我必须构建一些简单的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终结果是一个很小的框架（大约1KB），该框架将对象文字转换为jQuery。</font><font style="vertical-align: inherit;">语法在视觉上更易于扫描，如果您的js变得非常大，则可以编写可重用的查询来查找诸如使用的选择器，加载的文件，相关函数等内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里发布一个小框架是不切实际的，因此我写了一个</font></font><a href="http://a-laughlin.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://a-laughlin.com" rel="nofollow"><font style="vertical-align: inherit;">博客文章</font></a><font style="vertical-align: inherit;">（我的第一个。那是一次冒险！）。</font><font style="vertical-align: inherit;">欢迎您来看看。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这里有几分钟要检查的其他所有人，我非常感谢您的反馈！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议使用FireFox，因为它支持对象查询示例的toSource（）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚当</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimProL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于JavaScript组织，一直在使用以下内容</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您所有JavaScript的文件夹</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面级javascript获取与页面名称相同的自己的文件。</font><font style="vertical-align: inherit;">ProductDetail.aspx将是ProductDetail.js</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在库文件的javascript文件夹中，我有一个lib文件夹 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将相关的库函数放在要在整个应用程序中使用的lib文件夹中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ajax是我移出javascript文件夹并获得其自己的文件夹的唯一javascript。</font><font style="vertical-align: inherit;">然后我添加两个子文件夹客户端和服务器</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端文件夹获取所有.js文件，而服务器文件夹获取所有服务器端文件。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在用这个小东西。</font><font style="vertical-align: inherit;">它为JS和HTML模板提供了“ include”指令。</font><font style="vertical-align: inherit;">它彻底消除了混乱。</font></font></p>

<p><a href="https://github.com/gaperton/include.js/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/gaperton/include.js/</font></font></a></p>

<pre><code>$.include({<font></font>
    html: "my_template.html" // include template from file...<font></font>
})<font></font>
.define( function( _ ){ // define module...<font></font>
    _.exports = function widget( $this, a_data, a_events ){ // exporting function...<font></font>
        _.html.renderTo( $this, a_data ); // which expands template inside of $this.<font></font>
<font></font>
        $this.find( "#ok").click( a_events.on_click ); // throw event up to the caller...<font></font>
        $this.find( "#refresh").click( function(){<font></font>
            widget( $this, a_data, a_events ); // ...and update ourself. Yep, in that easy way.<font></font>
        });<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几天前，37Signals的家伙</font></font><a href="http://github.com/37signals/wysihat/tree/master" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布了一个RTE控件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font><font style="vertical-align: inherit;">有所不同</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">他们创建了一个库，该库使用某种预处理程序命令捆绑javascript文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从分离我的JS文件以来，我一直在使用它，然后最后将它们合并为一个。</font><font style="vertical-align: inherit;">这样，我就可以分离出问题，最后只有一个文件通过管道（压缩后，不少）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在模板中，检查您是否处于开发模式，并包括单独的文件，如果在生产中，则包括最后一个文件（您必须自己“构建”）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://alexsexton.com/?p=51" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用继承模式来组织大型jQuery应用程序。</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo的包管理</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>dojo.require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>dojo.provide</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）和类系统（</font></font><code>dojo.declare</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还允许简单的多重继承）将我的所有类/小组件模块化到单独的文件中。</font><font style="vertical-align: inherit;">这不仅可以使您的代码井井有条，而且还可以让您轻松/及时地加载类/小部件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的上一个项目-Viajeros.com中，我结合了多种技术。</font><font style="vertical-align: inherit;">我不知道如何组织网络应用程序-Viajeros是一个为旅行者提供了明确定义区域的社交网站，因此很容易将每个区域的代码分开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我根据站点部分使用名称空间模拟和模块的延迟加载。</font><font style="vertical-align: inherit;">在每次加载页面时，我都声明一个“ vjr”对象，并始终向其加载一组通用函数（vjr.base.js）。</font><font style="vertical-align: inherit;">然后，每个HTML页面都通过一个简单的决定来决定需要哪些模块：</font></font></p>

<pre><code>vjr.Required = ["vjr.gallery", "vjr.comments", "vjr.favorites"];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vjr.base.js从服务器获取每个压缩文件并执行它们。</font></font></p>

<pre><code>vjr.include(vjr.Required);<font></font>
vjr.include = function(moduleList) {<font></font>
  if (!moduleList) return false;<font></font>
  for (var i = 0; i &lt; moduleList.length; i++) {<font></font>
    if (moduleList[i]) {<font></font>
      $.ajax({<font></font>
        type: "GET", url: vjr.module2fileName(moduleList[i]), dataType: "script"<font></font>
      });<font></font>
    }<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个“模块”都具有以下结构：</font></font></p>

<pre><code>vjr.comments = {}<font></font>
<font></font>
vjr.comments.submitComment = function() { // do stuff }<font></font>
vjr.comments.validateComment = function() { // do stuff }<font></font>
<font></font>
// Handlers<font></font>
vjr.comments.setUpUI = function() {<font></font>
    // Assign handlers to screen elements<font></font>
}<font></font>
<font></font>
vjr.comments.init = function () {<font></font>
  // initialize stuff<font></font>
    vjr.comments.setUpUI();<font></font>
}<font></font>
<font></font>
$(document).ready(vjr.comments.init);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于我对Javascript的了解有限，我知道必须有更好的方法来管理它，但是到目前为止，它对我们来说非常有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶没有人提到MVC框架。</font><font style="vertical-align: inherit;">我一直在使用</font></font><a href="http://documentcloud.github.com/backbone/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我的代码进行模块化和解耦，这是非常宝贵的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些框架很多，其中大多数也很小。</font><font style="vertical-align: inherit;">我个人的观点是，如果您不只是为华丽的UI内容编写几行jQuery，或者想要一个丰富的Ajax应用程序，那么MVC框架将使您的生活变得更加轻松。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚ItachiL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为我真正不需要在屏幕上实例化多次的每件事创建单例，为其他所有事项创建类。</font><font style="vertical-align: inherit;">所有这些都放在同一文件的同一名称空间中。</font><font style="vertical-align: inherit;">一切都已注释，并使用UML状态图进行设计。</font><font style="vertical-align: inherit;">JavaScript代码不含html，因此没有内联JavaScript，我倾向于使用jquery来最大程度地减少跨浏览器问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的老板仍在谈论编写模块化代码（C语言）的时代，并抱怨如今的代码多么糟糕！</font><font style="vertical-align: inherit;">据说程序员可以在任何框架中编写汇编。</font><font style="vertical-align: inherit;">总有一种克服代码组织的策略。</font><font style="vertical-align: inherit;">基本的问题是那些将Java脚本视为玩具并且从不尝试学习的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我使用适当的init_screen（）在UI主题或应用程序屏幕的基础上编写js文件。</font><font style="vertical-align: inherit;">使用正确的ID命名约定，我确保在根元素级别上没有名称空间冲突。</font><font style="vertical-align: inherit;">在不显眼的window.load（）中，我根据顶层ID捆绑事物。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我严格使用Java脚本闭包和模式来隐藏所有私有方法。</font><font style="vertical-align: inherit;">完成此操作后，再也不会遇到属性/函数定义/变量定义冲突的问题。</font><font style="vertical-align: inherit;">但是，与团队合作时，通常很难执行相同的严格要求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="http://www.javascriptmvc.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavasciptMVC</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以 ：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的代码分为模型，视图和控制器层。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有代码压缩到一个生产文件中</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动生成代码</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建并运行单元测试</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有更多...</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最棒的是，它使用jQuery，因此您也可以利用其他jQuery插件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo从第一天开始就有模块系统。</font><font style="vertical-align: inherit;">实际上，它被认为是Dojo的基石，Dojo将所有这些粘合在一起：</font></font></p>

<ul>
<li><a href="http://docs.dojocampus.org/dojo/require" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dojo.require —官方文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><a href="http://dojocampus.org/content/2008/06/03/understanding-dojodeclare-dojorequire-and-dojoprovide/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解dojo.declare，dojo.require和dojo.provide</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><a href="http://dev.opera.com/articles/view/introducing-the-dojo-toolkit/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介绍Dojo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用模块Dojo可实现以下目标：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo代码和自定义代码（</font></font><code>dojo.declare()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的</font><font style="vertical-align: inherit;">命名空间</font><font style="vertical-align: inherit;">-不会污染全局空间，不会与其他库共存，并且不会与用户的非Dojo感知代码共存。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按名称（</font></font><code>dojo.require()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">同步或异步加载模块</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过分析模块依赖关系来创建单个文件或一组相互依赖的文件（所谓的图层）以仅包含您的Web应用程序需要的内容，从而进行自定义构建。</font><font style="vertical-align: inherit;">定制构建还可以包括Dojo模块和客户提供的模块。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于CDN的透明访问Dojo和用户代码。</font><font style="vertical-align: inherit;">AOL和Google都以这种方式携带Dojo，但是一些客户也为他们的自定义Web应用程序这样做。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green猿古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上一份工作中，我</font><font style="vertical-align: inherit;">能够成功地将</font></font><a href="http://yuiblog.com/blog/2007/06/12/module-pattern/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript模块模式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用于Ext JS应用程序。</font><font style="vertical-align: inherit;">它提供了一种创建精美封装代码的简单方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三斯丁Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循良好的OO设计原则和设计模式对使代码易于维护和理解大有帮助。</font><font style="vertical-align: inherit;">但是我最近发现的最好的事情之一就是信号和广告位，也就是发布/订阅。</font><font style="vertical-align: inherit;">看一下</font></font><a href="http://markdotmeyer.blogspot.com/2008/09/jquery-publish-subscribe.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://markdotmeyer.blogspot.com/2008/09/jquery-publish-subscribe.html，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
了解一个简单的jQuery实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个想法已在其他用于GUI开发的语言中很好地使用。</font><font style="vertical-align: inherit;">当代码中某处发生重大事件时，您将发布一个全局综合事件，其他对象中的其他方法可能会订阅该事件。</font><font style="vertical-align: inherit;">这样可以很好地分离物体。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为Dojo（和Prototype？）具有此技术的内置版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅</font></font><a href="https://stackoverflow.com/questions/312895/signals-and-slots"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是信号和插槽？</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码组织要求采用约定和文档标准：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
1.物理文件的命名空间代码；</font></font><br></p>

<pre><code>Exc = {};
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.在这些名称空间javascript中对类进行分组；</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
3.设置用于表示现实世界对象的原型或相关函数或类；</font></font><br></p>

<pre><code>Exc = {};<font></font>
Exc.ui = {};<font></font>
Exc.ui.maskedInput = function (mask) {<font></font>
    this.mask = mask;<font></font>
    ...<font></font>
};<font></font>
Exc.ui.domTips = function (dom, tips) {<font></font>
    this.dom = gift;<font></font>
    this.tips = tips;<font></font>
    ...<font></font>
};<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
4.设置约定以改进代码。</font><font style="vertical-align: inherit;">例如，将其所有内部功能或方法分组在对象类型的class属性中。</font></font></p>

<pre><code>Exc.ui.domTips = function (dom, tips) {<font></font>
    this.dom = gift;<font></font>
    this.tips = tips;<font></font>
    this.internal = {<font></font>
        widthEstimates: function (tips) {<font></font>
            ...<font></font>
        }<font></font>
        formatTips: function () {<font></font>
            ...<font></font>
        }<font></font>
    };<font></font>
    ...<font></font>
};<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5.创建名称空间，类，方法和变量的文档。</font><font style="vertical-align: inherit;">必要时还讨论一些代码（一些FI和Fors，它们通常实现代码的重要逻辑）。</font></font></p>

<pre><code>/**<font></font>
  * Namespace &lt;i&gt; Example &lt;/i&gt; created to group other namespaces of the "Example".  <font></font>
  */<font></font>
Exc = {};<font></font>
/**<font></font>
  * Namespace &lt;i&gt; ui &lt;/i&gt; created with the aim of grouping namespaces user interface.<font></font>
  */<font></font>
Exc.ui = {};<font></font>
<font></font>
/**<font></font>
  * Class &lt;i&gt; maskdInput &lt;/i&gt; used to add an input HTML formatting capabilities and validation of data and information.<font></font>
  * @ Param {String} mask - mask validation of input data.<font></font>
  */<font></font>
Exc.ui.maskedInput = function (mask) {<font></font>
    this.mask = mask;<font></font>
    ...<font></font>
};<font></font>
<font></font>
/**<font></font>
  * Class &lt;i&gt; domTips &lt;/i&gt; used to add an HTML element the ability to present tips and information about its function or rule input etc..<font></font>
  * @ Param {String} id - id of the HTML element.<font></font>
  * @ Param {String} tips - tips on the element that will appear when the mouse is over the element whose identifier is id &lt;i&gt; &lt;/i&gt;.<font></font>
  */<font></font>
  Exc.ui.domTips = function (id, tips) {<font></font>
    this.domID = id;<font></font>
    this.tips = tips;<font></font>
    ...<font></font>
};<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这些只是一些技巧，但这对组织代码有很大帮助。</font><font style="vertical-align: inherit;">记住，您必须有纪律才能成功！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将脚本分解为单独的文件进行开发，然后创建一个“发行”版本，在其中将它们全部塞入并运行</font></font><a href="http://developer.yahoo.com/yui/compressor/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI Compressor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似的东西。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果javascript内置了命名空间，那就更好了，但是我发现组织Dustin Diaz这样的</font></font><a href="http://www.dustindiaz.com/namespace-your-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事情</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有很大帮助。</font></font></p>

<pre><code>var DED = (function() {<font></font>
<font></font>
    var private_var;<font></font>
<font></font>
    function private_method()<font></font>
    {<font></font>
        // do stuff here<font></font>
    }<font></font>
<font></font>
    return {<font></font>
        method_1 : function()<font></font>
            {<font></font>
                // do stuff here<font></font>
            },<font></font>
        method_2 : function()<font></font>
            {<font></font>
                // do stuff here<font></font>
            }<font></font>
    };<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将不同的“命名空间”（有时将各个类）放在单独的文件中。</font><font style="vertical-align: inherit;">通常，我从一个文件开始，随着类或命名空间变得足够大以保证它，我将其分离到自己的文件中。</font><font style="vertical-align: inherit;">使用工具组合所有文件进行生产也是一个好主意。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
