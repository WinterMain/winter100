---
layout: question
title:  Visual Studio代码断点出现在错误的位置
date:   2020-03-12T09:40:52.000Z
description: 在我的Vue + Vuex项目中，我正在尝试使用Visual Studio Code进行调试。我可以使用Chrome调试工具正确启动调试器，也可以使用映射...
img: 
author: JimLEYSam
category: question
answer: 1
tags: 调试 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Vue + Vuex项目中，我正在尝试使用Visual Studio Code进行调试。</font><font style="vertical-align: inherit;">我可以使用Chrome调试工具正确启动调试器，也可以使用映射正确启动调试器，但是当我尝试在我的.js或.vue文件中放置断点时，VS Code似乎将断点放置在错误的位置。</font><font style="vertical-align: inherit;">例如，在这里我尝试在第40行的一个getter中放置一个断点，但是在15行之后它最终结束了：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/11536/images/thumbnails/1584006052150.gif" data-src="https://www.samyoc.com//uploads/users/11536/images/1584006052150.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/ifFuq.gif" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是VS Code中的错误，还是其他问题？</font><font style="vertical-align: inherit;">有关如何解决的任何建议？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他行上的其他断点与以后的行上具有相同的行为，但是我无法检测到模式。</font><font style="vertical-align: inherit;">它在.js和.vue文件中都发生，并且在对象声明和根级传统函数定义中都发生。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用VS Code 1.24.0。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1235篇《Visual Studio代码断点出现在错误的位置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许编辑器和调试器对“ newline”的解释不同。</font><font style="vertical-align: inherit;">检查代码是否使用\ r或\ r \ n并将其更改为另一个。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
