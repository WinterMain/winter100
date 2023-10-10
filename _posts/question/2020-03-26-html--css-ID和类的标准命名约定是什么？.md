---
layout: question
title:  html / css ID和类的标准命名约定是什么？
date:   2020-03-26T08:14:15.000Z
description: 它是否取决于您使用的平台，还是大多数开发人员建议/遵循的通用约定？有几种选择：id="someIdentifier"' -看起来与javascr...
img: 
author: 小小
category: question
answer: 6
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是否取决于您使用的平台，还是大多数开发人员建议/遵循的通用约定？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几种选择：</font></font></p>

<ol>
<li><code>id="someIdentifier"'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -看起来与javascript代码非常一致。 </font></font></li>
<li><code>id="some-identifier"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -看起来更像html5类属性和html中的其他内容。</font></font></li>
<li><code>id="some_identifier"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -看起来与ruby代码非常一致，并且仍然是Javascript中的有效标识符</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在想上面的＃1和＃3最有意义，因为它们在Javascript中的表现更好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有正确的答案吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这取决于平台。</font><font style="vertical-align: inherit;">在.Net MVC中进行开发时，我使用引导程序样式的小写字母和连字符作为类名，但是对于ID，我使用PascalCase。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的原因是我的视图得到了强类型视图模型的支持。</font><font style="vertical-align: inherit;">C＃模型的属性是Pascal情况。</font><font style="vertical-align: inherit;">为了使用MVC进行模型绑定，有意义的是，绑定到模型的HTML元素的名称与pascal情况下的视图模型属性一致。</font><font style="vertical-align: inherit;">为简单起见，我的ID与元素名称使用相同的命名约定，除了单选按钮和复选框外，它们对于命名输入组中的每个元素都需要唯一的ID。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil前端</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚开始学习XML。</font><font style="vertical-align: inherit;">下划线版本帮助我将与XML相关的所有内容（DOM，XSD等）与Java，JavaScript（驼峰式案例）之类的编程语言区分开。</font><font style="vertical-align: inherit;">我同意您的看法，使用编程语言允许的标识符看起来更好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：可能不相关，但是这里是有关命名XML元素的规则和建议的链接，我在命名ID时要遵循这些规则（“ XML命名规则”和“最佳命名做法”部分）。</font></font></p>

<p><a href="http://www.w3schools.com/xml/xml_elements.asp" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/xml/xml_elements.asp</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于HTML和CSS，没有约定的命名约定。</font><font style="vertical-align: inherit;">但是您可以围绕对象设计构建术语。</font><font style="vertical-align: inherit;">更具体地说，我称之为所有权和关系。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有权</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述对象的关键字可以用连字符分隔。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新右转车</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述对象的关键字也可以分为四类（应从左到右排序）：对象，对象描述符，动作和动作描述符。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">汽车-一个名词，一个</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  新</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">-一个形容词，以及一个更详细地描述对象的对象描述符</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -动词和属于该对象</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  的动作-​​形容词和一个动作描述符动作更详细  </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：动词（动作）应处于过去时态（转动，完成，奔跑等）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关系</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象还可以具有父级和子级之类的关系。</font><font style="vertical-align: inherit;">Action和Action-Descriptor属于父对象，但不属于子对象。</font><font style="vertical-align: inherit;">对于对象之间的关系，可以使用下划线。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">汽车新向右转左车轮向左转</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右转新车（遵循所有权规则）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向左转左（遵循所有权规则）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">car-new-turned-right_wheel-left-turned-left（遵循关系规则）</font></font></li>
  </ul>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后说明：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为CSS不区分大小写，所以最好用小写（或大写）写所有名称；</font><font style="vertical-align: inherit;">避免使用驼峰式或帕斯卡式大小写，因为它们可能导致名称不明确。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道何时使用类以及何时使用id。</font><font style="vertical-align: inherit;">这不仅仅是在网页上使用过一次ID。</font><font style="vertical-align: inherit;">大多数时候，您想使用类而不是ID。</font><font style="vertical-align: inherit;">Web组件（按钮，表单，面板等）应始终使用类。</font><font style="vertical-align: inherit;">ID很容易导致命名冲突，因此应谨慎使用命名空间来标记您的标记。</font><font style="vertical-align: inherit;">以上所有权和关系的概念适用于命名类和ID，并且将帮助您避免命名冲突。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不喜欢我的CSS命名约定，那么还有其他几种：结构性命名约定，演示性命名约定，语义命名约定，BEM命名约定，OCSS命名约定等。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多人更喜欢CSS ID和类名中的连字符的另一个原因是功能。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><kbd>option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>left</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><kbd>right</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">在Windows上为</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>left</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><kbd>right</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">Windows）上的</font><font style="vertical-align: inherit;">键盘快捷方式</font><font style="vertical-align: inherit;">逐字遍历代码，将光标停在每个破折号处，使您可以使用键盘快捷方式精确遍历id或类名。</font><font style="vertical-align: inherit;">下划线和camelCase不会被检测到，并且光标将在其上漂移，就好像它们都是一个单词一样。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tl; dr;</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有一个真正的答案。</font><font style="vertical-align: inherit;">您可以选择其中的一种，也可以根据需要使用的对象来创建自己的标准，具体取决于与谁一起工作。</font><font style="vertical-align: inherit;">而且它100％取决于平台。</font></font></p>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始帖子</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅需考虑另一种替代标准：</font></font></p>

<pre><code>&lt;div id="id_name" class="class-name"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的脚本中：</font></font></p>

<pre><code>var variableName = $("#id_name .class-name");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这仅对变量，id和类分别使用camelCase，under_score和连字符。</font><font style="vertical-align: inherit;">我已经在几个不同的网站上阅读了有关此标准的信息。</font><font style="vertical-align: inherit;">尽管在css / jquery选择器中有点多余，但是冗余使捕获错误更容易。</font><font style="vertical-align: inherit;">例如：如果您看到</font></font><code>.unknown_name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>#unknownName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS文件中，则知道需要弄清楚实际指的是什么。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（连字符称为“ kebab-case”，下划线称为“ snake_case”，然后您具有“ TitleCase”，“ pascalCase”）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人不喜欢连字符。</font><font style="vertical-align: inherit;">我最初将其发布为一种选择（因为规则很简单）。</font><font style="vertical-align: inherit;">但是，连字符使选择快捷键非常困难（</font><font style="vertical-align: inherit;">在vsCode中</font><font style="vertical-align: inherit;">双击，</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><kbd>option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>left</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><kbd>right</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><kbd>cmd</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>D</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。此外，类名和文件名是连字符起作用的唯一位置，因为它们几乎总是在引号或CSS中，等等。但是捷径的事情仍然适用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了变量，类名和ID，您还希望查看文件名约定。</font><font style="vertical-align: inherit;">和Git分支。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我办公室的编码小组实际上在一两个月前开会，讨论我们如何命名事物。</font><font style="vertical-align: inherit;">对于git分支，我们无法在321-the_issue_description或321_the-issue-description之间进行选择。</font><font style="vertical-align: inherit;">（我想要321_theIssueDescription，但我的同事不喜欢这样。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个示例，以演示如何使用其他人的标准...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js确实有一个标准。</font><font style="vertical-align: inherit;">实际上，他们对其中的几个项目有两个替代标准。</font><font style="vertical-align: inherit;">我不喜欢两个版本的文件名。</font><font style="vertical-align: inherit;">他们推荐</font></font><code>"/path/kebab-case.vue"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>"/path/TitleCase.Vue"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">前者很难重命名，除非您专门尝试重命名其中的一部分。</font><font style="vertical-align: inherit;">后者不利于跨平台兼容性。</font><font style="vertical-align: inherit;">我希望</font></font><code>"/path/snake_case.vue"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，在与其他人或现有项目一起工作时，务必遵循已经制定的任何标准。</font><font style="vertical-align: inherit;">因此，即使我完全抱怨它，我还是使用kebab-case作为Vue中的文件名。</font><font style="vertical-align: inherit;">因为不遵循，则意味着更改了vue-cli设置的许多文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谷歌有css＆html样式指南，建议始终使用连字符：</font></font><a href="https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Name_Delimiters" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Name_Delimiters" rel="noreferrer"><font style="vertical-align: inherit;">//google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Name_Delimiters</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
