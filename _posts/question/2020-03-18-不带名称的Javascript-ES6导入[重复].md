---
layout: question
title:  不带名称的Javascript ES6导入\[重复\]
date:   2020-03-18T11:16:21.000Z
description:                                                                          ...
img: 
author: Near神乐路易
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
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
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/38398311/import-module-just-to-run-it" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入模块只是为了运行它</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （2个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2017-02-15 14：27：14Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在运行Webpack，Babel和Vue.js，我想拆分输入文件。</font><font style="vertical-align: inherit;">目前，我有一个app.js文件，这是我的应用程序的起点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一些零碎的代码要放入一个</font></font><code>bootstrap.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，然后将其包含在我的主</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，我是否可以拥有一个干净的文件以Vue开头并在其中添加组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想放入</font></font><code>bootstrap.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中的</font><font style="vertical-align: inherit;">一些示例</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import messagesNL from './translations/nl';<font></font>
<font></font>
Vue.use(VeeValidate, {<font></font>
  locale: 'nl',<font></font>
  dictionary: {<font></font>
    nl: {<font></font>
      messages: messagesNL<font></font>
    }<font></font>
  }<font></font>
});<font></font>
<font></font>
window.Vue = Vue;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如此多的插件，全局配置等设置。我觉得这不是您的典型模块，并且我发现很难为此文件创建类似结构的模块，因此我基本上在</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">使用此模块</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import bootstrap from './bootstrap';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道这是否行得通，似乎只是整洁地导入了所有内容，而无需我完成</font></font><code>module exports {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我分配给该文件的bootstrap变量未使用，</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它仅用于要求文件，而我的IDE则将其“灰色”显示出来，让我知道它尚未使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否还有其他语法，这样我就不必为其指定名称了？</font><font style="vertical-align: inherit;">这种方法可以拆分文件吗，还是应该做其他事情？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尚未将其放入适当的模块中，因为那样它将拥有它自己的本地作用域，并且我不确定如何使用所有插件等来设置Vue。如果有人有更好的建议，我欢迎您使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2181篇《不带名称的Javascript ES6导入[重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
