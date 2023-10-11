---
layout: question
title:  使用Jest和Webpack别名进行测试
date:   2020-03-24T09:23:56.000Z
description: 我希望能够在使用笑话时使用webpack别名来解析导入，并且最好参考webpack.aliases以避免重复。开玩笑的conf：  "jest" ...
img: 
author: DavaidTony宝儿
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够在使用笑话时使用webpack别名来解析导入，并且最好参考</font></font><code>webpack.aliases</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以避免重复。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开玩笑的conf：</font></font></p>

<pre><code>  "jest": {<font></font>
    "modulePaths": ["src"],<font></font>
    "moduleDirectories": ["node_modules"],<font></font>
    "moduleNameMapper": {<font></font>
      "^@shared$": "&lt;rootDir&gt;/shared/",<font></font>
      "^@components$": "&lt;rootDir&gt;/shared/components/"<font></font>
    }<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack别名：</font></font></p>

<pre><code>exports.aliases = {<font></font>
    '@shared': path.resolve(paths.APP_DIR, 'shared'),<font></font>
    '@components': path.resolve(paths.APP_DIR, 'shared/components'),<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进口：</font></font></p>

<pre><code>import Ordinal from '@shared/utils/Ordinal.jsx';<font></font>
import Avatar from '@components/common/Avatar.jsx';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致了问题，因此将其删除（使用别名和导入）时，可以找到</font></font><code>shared</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font><code>components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然无法解决。</font></font></p>

<pre><code> FAIL  src/shared/components/test/Test.spec.jsx<font></font>
  ● Test suite failed to run<font></font>
<font></font>
    Cannot find module '@shared/utils/Ordinal.jsx' from 'Test.jsx'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用</font></font><a href="https://github.com/mwolson/jest-webpack-alias" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jest-webpack-alias</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/tleunen/babel-plugin-module-resolver" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-module-resolver</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://facebook.github.io/jest/docs/webpack.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jest / Webpack docs</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3554篇《使用Jest和Webpack别名进行测试》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FWIW，尝试切换别名顺序，保持更具体的向上和不具体的向下，例如 </font></font></p>

<pre><code>"moduleNameMapper": {<font></font>
  "^@components$": "&lt;rootDir&gt;/shared/components/",<font></font>
  "^@shared$": "&lt;rootDir&gt;/shared/"<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我在再次阅读之前遇到了相同的问题，因此这次要更仔细地阅读文档。</font><font style="vertical-align: inherit;">正确的配置应为：</font></font></p>

<pre><code>  "jest": {<font></font>
    "moduleNameMapper": {<font></font>
      "^@shared(.*)$": "&lt;rootDir&gt;/shared$1",<font></font>
      "^@components(.*)$": "&lt;rootDir&gt;/shared/components$1"<font></font>
    }<font></font>
  },<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
