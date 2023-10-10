---
layout: question
title:  如何使用webpack和Vue.js \`正确导入外部SCSS？
date:   2020-03-19T06:43:57.000Z
description: 就像在Material Component Web的示例中一样，我希望能够这样从我的设备导入SCSS node_modules：\`import '\`m...
img: 
author: 猴子宝儿Harry
category: question
answer: 0
tags: 上海社会科学院 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像在Material Component Web的示例中一样，我希望能够这样从我的设备导入SCSS </font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>@import '@material/elevation/mdc-elevation';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，尝试运行webpack构建时，我收到此错误消息：</font></font></p>

<pre><code>File to import not found or unreadable: @material/elevation/mdc-elevation.
</code></pre>

<p><code>@import './~/@material/elevation/mdc-elevation.scss';</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 也不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很确定问题出在我的webpack配置中，但是我不知道在哪里。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使它起作用，</font><font style="vertical-align: inherit;">他们在</font></font><a href="https://github.com/material-components/material-components-web" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Material Components Web</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/material-components/material-components-web/tree/master/framework-examples/vue" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中做了什么？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要，</font><font style="vertical-align: inherit;">这是我的</font></font><a href="https://hastebin.com/omosazecay" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-debug.log</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是对应的Git存储库：</font></font><a href="https://github.com/sk22/spg-tinf-sem03/tree/master/proj01" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sk22 / spg-tinf-sem03 / proj01</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我希望能够导入</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">scss</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，而不是已编译的CSS。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
