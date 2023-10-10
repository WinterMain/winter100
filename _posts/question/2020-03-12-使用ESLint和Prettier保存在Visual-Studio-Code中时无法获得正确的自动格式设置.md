---
layout: question
title:  使用ESLint和Prettier保存在Visual Studio Code中时无法获得正确的自动格式设置
date:   2020-03-12T06:44:43.000Z
description: 在使用ESLint和Prettier的Visual Studio Code中处理.vue文件时，似乎我无法获得vue / max-attributes-p...
img: 
author: 启人
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用ESLint和Prettier的Visual Studio Code中处理.vue文件时，似乎我无法获得vue / max-attributes-per-line自动正确修复。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，将vue / max-attributes-per-line设置为“ off”，并且我尝试手动添加换行符，它将其校正为始终使每个元素都在一行上，无论它是81、120 ，200个或更多字符宽。  </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何找出是什么迫使我的标记元素恰好位于一行上？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用带有Prettier 1.14.2的ESLint版本5.1.0和Visual Studio Code（不带Prettier扩展名）。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是.vue文件中的示例-无论何时做什么，我都不能多行进行   </font></font><code>'vue/max-attributes-per-line': 'off'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每次保存时，它都会迫使长行标记全部放在一行上。</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;font-awesome-icon v-if="statusOptions.icon" :icon="statusOptions.icon" :spin="statusOptions.isIconSpin" :class="['saving-indicator', 'pl-1', 'pt-1', statusOptions.iconClasses]" /&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我设置</font></font><code>'vue/max-attributes-per-line': 2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它的格式像这样，只有一个换行符（这也是很错误的）。</font></font></p>

<pre><code>      &lt;font-awesome-icon v-if="statusOptions.icon" <font></font>
:icon="statusOptions.icon" :spin="statusOptions.isIconSpin" :class="['saving-indicator', 'pl-1', 'pt-1', statusOptions.iconClasses]" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我尝试手动重新格式化，则保存后它将恢复为上述格式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，当我按Ctrl + S时，它似乎重新格式化了两次：首先将其重新格式化以将所有内容放在一行上，然后半秒后重新格式化上面的结果。  </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><strong><font style="vertical-align: inherit;">想法</font></strong><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">是什么原因导致这种怪异-是否正在运行多个重新格式化程序？</font><font style="vertical-align: inherit;">我如何确定第一个是禁用它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS Code工作空间设置：</font></font></p>

<pre><code>{<font></font>
  "editor.formatOnType": false,<font></font>
  "editor.formatOnPaste": false,<font></font>
  "editor.formatOnSave": true,<font></font>
  "[javascript]": {<font></font>
    "editor.tabSize": 2<font></font>
  },<font></font>
  "[vue]": {<font></font>
    "editor.tabSize": 2<font></font>
  },<font></font>
  "[csharp]": {<font></font>
    "editor.tabSize": 4<font></font>
  },<font></font>
  "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,<font></font>
  "javascript.referencesCodeLens.enabled": true,<font></font>
  "vetur.validation.script": false,<font></font>
  "vetur.validation.template": false,<font></font>
  "eslint.autoFixOnSave": true,<font></font>
  "eslint.alwaysShowStatus": true,<font></font>
  "eslint.options": {<font></font>
    "extensions": [<font></font>
      ".html",<font></font>
      ".js",<font></font>
      ".vue",<font></font>
      ".jsx"<font></font>
    ]<font></font>
  },<font></font>
  "eslint.validate": [<font></font>
    {<font></font>
      "language": "html",<font></font>
      "autoFix": true<font></font>
    },<font></font>
    {<font></font>
      "language": "vue",<font></font>
      "autoFix": true<font></font>
    },<font></font>
    "vue-html",<font></font>
    {<font></font>
      "language": "javascript",<font></font>
      "autoFix": true<font></font>
    },<font></font>
    {<font></font>
      "language": "javascriptreact",<font></font>
      "autoFix": true<font></font>
    }<font></font>
  ],<font></font>
  "editor.rulers": [<font></font>
    80,<font></font>
    100<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.eslintrc.js： </font></font></p>

<pre><code>module.exports = {<font></font>
  parserOptions: {<font></font>
    parser: 'babel-eslint'<font></font>
  },<font></font>
  env: {<font></font>
    browser: true,<font></font>
    node: true,<font></font>
    jest: true<font></font>
  },<font></font>
  globals: {<font></font>
    expect: true<font></font>
  },<font></font>
  extends: [<font></font>
    'prettier',<font></font>
    'plugin:vue/recommended',        // /base, /essential, /strongly-recommended, /recommended<font></font>
    'plugin:prettier/recommended',   // turns off all ESLINT rules that are unnecessary due to Prettier or might conflict with Prettier. <font></font>
    'eslint:recommended'<font></font>
  ],<font></font>
  plugins: ['vue', 'prettier'],<font></font>
  rules: {<font></font>
    'vue/max-attributes-per-line': 'off',<font></font>
    'prettier/prettier': [            // customizing prettier rules (not many of them are customizable)<font></font>
      'error',<font></font>
      {<font></font>
        singleQuote: true,<font></font>
        semi: false,<font></font>
        tabWidth: 2<font></font>
      },<font></font>
    ],<font></font>
    'no-console': 'off'<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>Without changing any settings, <code>ESLint --fix</code> does indeed format properly--breaking all my .vue template elements into many lines properly. <strong>So any ideas how I whip VS Code into shape?</strong> The above settings didn't help, but I am at a loss how as to even know what is interfering. Any ideas?</p>

<p>To emphasize, when I save in VS Code, a long HTML element will collapse to one line then break to two lines a half-second later, all from one save operation. I'm expecting it instead to break it up into many lines. It would be okay if it took several saves, but instead the first save shows this behavior as well as every subsequent save.</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在努力解决类似的问题。</font><font style="vertical-align: inherit;">我尝试了上述解决方案，但不幸的是，该方法对我没有用。</font><font style="vertical-align: inherit;">我正在使用eslint和Vetur，没有安装漂亮的插件，而是通过eslint配置了它，并启用了“ eslint.autoFixOnSave”：true。</font><font style="vertical-align: inherit;">通过删除settings.json中的以下配置，我终于在保存时获得了正确的自动格式设置。</font><font style="vertical-align: inherit;">不知道为什么，但是它对我有用。</font></font></p>

<pre><code>  "eslint.options": {<font></font>
    "extensions": [".html", ".js", ".vue", ".jsx"]<font></font>
  },<font></font>
  "eslint.validate": [{<font></font>
      "language": "html",<font></font>
      "autoFix": true<font></font>
    },<font></font>
    {<font></font>
      "language": "vue",<font></font>
      "autoFix": true<font></font>
    },<font></font>
    {<font></font>
      "language": "javascript",<font></font>
      "autoFix": true<font></font>
    },<font></font>
    {<font></font>
      "language": "javascriptreact",<font></font>
      "autoFix": true<font></font>
    }<font></font>
  ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我收到与此相关的其他问题，将会更新此答案。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
