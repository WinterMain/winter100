---
layout: question
title:  Sass-loader要求node-sass> = 4（即使存在）
date:   2020-03-24T11:12:00.000Z
description: 我执行了对angular 6的更新。在ng serve -o期间，我收到sass-loader期望node-sass的错误。运行ng serve -o之后...
img: 
author: 村村番长
category: question
answer: 7
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我执行了对angular 6的更新。在ng serve -o期间，我收到sass-loader期望node-sass的错误。</font><font style="vertical-align: inherit;">运行ng serve -o之后，我收到：</font></font></p>

<pre><code>ERROR in ./src/sass/styles.scss (./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/sass/styles.scss)<font></font>
    Module build failed: Error: `sass-loader` requires `node-sass` &gt;=4. Please install a compatible version.<font></font>
    at Object.sassLoader (node_modules\sass-loader\lib\loader.js:31:19)<font></font>
ERROR in ./src/app/app.component.scss<font></font>
Module build failed: Error: `sass-loader` requires `node-sass` &gt;=4. Please install a compatible version.<font></font>
    at Object.sassLoader (node_modules\sass-loader\lib\loader.js:31:19)<font></font>
ERROR in x.component.scss<font></font>
Module build failed: Error: `sass-loader` requires `node-sass` &gt;=4. Please install a compatible version.<font></font>
    at Object.sassLoader (\node_modules\sass-loader\lib\loader.js:31:19)<font></font>
ERROR in x.component.scss<font></font>
Module build failed: Error: `sass-loader` requires `node-sass` &gt;=4. Please install a compatible version.<font></font>
    at Object.sassLoader (loader.js:31:19)<font></font>
ERROR in .x.component.scss<font></font>
Module build failed: Error: `sass-loader` requires `node-sass` &gt;=4. Please install a compatible version.<font></font>
    at Object.sassLoader (node_modules\sass-loader\lib\loader.js:31:19)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，我检查了所有内容（我认为），但不知道发生了什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Package.Json：</font></font></p>

<pre><code>"devDependencies": {<font></font>
"@angular-devkit/build-angular": "~0.6.0",<font></font>
"@angular/cli": "6.0.0",<font></font>
"@angular/compiler-cli": "6.0.0",<font></font>
"@angular/language-service": "6.0.0",<font></font>
"@types/jasmine": "~2.8.3",<font></font>
"@types/jasminewd2": "~2.0.2",<font></font>
"@types/node": "~6.0.106",<font></font>
"codelyzer": "^4.0.1",<font></font>
"jasmine-core": "~2.8.0",<font></font>
"jasmine-spec-reporter": "~4.2.1",<font></font>
"karma": "~2.0.0",<font></font>
"karma-chrome-launcher": "~2.2.0",<font></font>
"karma-html-detailed-reporter": "^1.1.21",<font></font>
"karma-jasmine": "~1.1.0",<font></font>
"karma-jasmine-html-reporter": "^0.2.2",<font></font>
"karma-phantomjs-launcher": "^1.0.4",<font></font>
"karma-teamcity-reporter": "^1.1.0",<font></font>
"phantomjs-prebuilt": "^2.1.16",<font></font>
"protractor": "~5.1.2",<font></font>
"node-sass": "^4.9.0",<font></font>
"sass-loader": "^7.0.1",<font></font>
"ts-node": "~4.1.0",<font></font>
"tslint": "~5.9.1",<font></font>
"typescript": "2.7.2"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dir -l node_modules说：</font></font></p>

<pre><code>...<font></font>
05/07/2018  08:53 AM    &lt;DIR&gt;          node-sass<font></font>
...<font></font>
05/07/2018  08:53 AM    &lt;DIR&gt;          sass-loader<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我执行了：</font></font></p>

<pre><code>npm rebuild node-sass 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二方法：我删除了本地节点模块以及％User％\ AppData \ Roaming \ npm-cache。</font><font style="vertical-align: inherit;">然后我删除了锁定文件并执行了npm</font></font></p>

<pre><code>npm cache clear --force<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是仍然没有成功。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想念什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3713篇《Sass-loader要求node-sass> = 4（即使存在）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下步骤解决了这个问题</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>node-saas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font></font><code>\Users\&lt;user_id&gt;\AppData\Roaming\npm-cache</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>node-saas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font></font><code>&lt;application_folder&gt;/node_modules</code></li>
<li><font style="vertical-align: inherit;"></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">运行</font></font><code>&lt;application_folder&gt;</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下步骤解决了此问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开 </font></font><code>package.json</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加您要安装的版本</font></font><code>node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font><code>"node-sass": "^4.12.0"</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令行界面（CLI）中运行安装命令： </font></font><code>npm install node-sass</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该问题将得到解决。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>npm rebuild --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阿斯洛帮助</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下问题，可以通过以下步骤解决：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>node_module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹并运行</font></font><code>rm -rf node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm install</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件将使用新的依赖项版本自动更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需运行此代码...</font></font></p>

<pre><code>npm install --save node-sass
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决您的问题，请运行以下命令</font></font></p>

<p><code>npm install --unsafe-perm</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用</font></font></p>

<pre><code>npm install node-sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目文件夹中，对于项目而言，因为在全局安装（带有</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项）无法解决问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
