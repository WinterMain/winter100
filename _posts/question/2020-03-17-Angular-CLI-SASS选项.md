---
layout: question
title:  Angular CLI SASS选项
date:   2020-03-17T09:08:18.000Z
description: 我是Angular的新手，我来自Ember社区。尝试使用基于Ember-CLI的新Angular-CLI。我需要知道在新的Angular项目中处理SA...
img: 
author: 理查德Itachi
category: question
answer: 10
tags: 角 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Angular的新手，我来自Ember社区。</font><font style="vertical-align: inherit;">尝试使用基于Ember-CLI的新Angular-CLI。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要知道在新的Angular项目中处理SASS的最佳方法。</font><font style="vertical-align: inherit;">我尝试使用该存储</font></font><a href="https://github.com/aexmachina/ember-cli-sass" rel="noreferrer"><code>ember-cli-sass</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库来查看它是否可以正常运行，因为Angular-CLI的许多核心组件都运行于Ember-CLI模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有用，但还是不确定我是否配置错误。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在新的Angular项目中组织样式的最佳方法是什么？</font><font style="vertical-align: inherit;">最好将sass文件放在与组件相同的文件夹中。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1。</font><font style="vertical-align: inherit;">使用npm安装bulma软件包</font></font></p>

<pre><code>npm install --save bulma
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步。</font><font style="vertical-align: inherit;">打开angular.json并更新以下代码</font></font></p>

<pre><code>...<font></font>
 "styles": [<font></font>
 "node_modules/bulma/css/bulma.css",<font></font>
 "src/styles.scss"<font></font>
 ],<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而已。</font></font></p>

<p>To easily expose Bulma’s tools, add stylePreprocessorOptions to angular.json.</p>

<pre><code>...<font></font>
 "styles": [<font></font>
 "src/styles.scss",<font></font>
 "node_modules/bulma/css/bulma.css"<font></font>
  ],<font></font>
 "stylePreprocessorOptions": {<font></font>
 "includePaths": [<font></font>
    "node_modules",<font></font>
    "node_modules/bulma/sass/utilities"<font></font>
 ]<font></font>
},<font></font>
...<font></font>
</code></pre>

<p><a href="https://blog.jcarlson.io/bulma-angular-6/" rel="nofollow noreferrer">BULMA + ANGULAR 6</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小哥L</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用此命令更新项目以使用sass </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng set defaults.styleExt scss</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是得到这个 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议使用get / set，而推荐使用config命令。</font></font></p>
</blockquote>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角CLI：6.0.7</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点：8.9.0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作系统：Linux x64</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角度：6.0.3</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我删除了我的项目（因为我才刚刚开始并且在我的项目中没有代码），并使用最初设置的sass创建了一个新项目。 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng new my-sassy-app --style = scss</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果有人可以共享更新现有项目的方式，我将不胜感激，因为那样很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2019年3月10日，安瓜尔放弃了对sass的支持。</font><font style="vertical-align: inherit;">无论您</font></font><code>--style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行时使用</font><font style="vertical-align: inherit;">什么选项</font></font><code>ng new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，总会</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成文件。</font><font style="vertical-align: inherit;">可耻的是，没有任何解释就放弃了无礼的支持。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular-CLI是推荐的方法，并且是Angular 2+社区中的标准方法。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用SCSS创建一个新项目</font></font></strong></p>

<p><code>ng new My-New-Project --style=sass</code>
<br>
<br></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换现有项目（CLI低于v6）</font></font></strong></p>

<p><code>ng set defaults.styleExt scss</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（必须使用这种方法手动重命名所有.css文件，不要忘记在组件文件中重命名）</font></font></p>

<p><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换现有项目（CLI大于v6）</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有CSS文件重命名为SCSS并更新引用它们的组件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下内容添加到angular.json的“示意图”键（通常是第11行）：</font></font></li>
</ol>

<p><code>"@schematics/angular:component": {
      "styleext": "sass"
    }</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里凯</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其设置为全局默认值</font></font></p>

<p><code>ng set defaults.styleExt=scss --global</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下内容应在有角度的CLI 6项目中起作用。</font><font style="vertical-align: inherit;">即，如果您得到：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议使用get / set，而推荐使用config命令。</font></font></p>
</blockquote>

<pre><code>npm install node-sass --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您更改了项目名称</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>ng config projects.YourPorjectName.schematics.@schematics/angular:component.styleext sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取默认项目名称，请使用：</font></font></p>

<pre><code>ng config defaultProject
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如果您已将项目从&lt;6迁移到角度6，则很有可能不会出现配置。</font><font style="vertical-align: inherit;">在这种情况下，您可能会得到：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效的JSON字符：0时为“ s”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将需要</font><font style="vertical-align: inherit;">手动编辑</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将希望它看起来像这样（注意styleex属性）：</font></font></p>

<pre><code>...<font></font>
"projects": {<font></font>
    "Sassy": {<font></font>
      "root": "",<font></font>
      "sourceRoot": "src",<font></font>
      "projectType": "application",<font></font>
      "prefix": "app",<font></font>
      "schematics": {<font></font>
        "@schematics/angular:component": {<font></font>
          "styleext": "scss"<font></font>
        }<font></font>
      }<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，似乎是一个过于复杂的架构。</font><font style="vertical-align: inherit;">¯_（ツ）_ /¯</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您必须将所有的CSS / less文件更改为scss，并更新组件等中的任何引用，但是您应该一切顺利。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪猿小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用angular cli创建项目时，请尝试以下操作：</font></font></p>

<pre><code>ng new My_New_Project --style=sass 
</code></pre>

<p>This generating all your components with predifined sass files.</p>

<p>If you want scss syntax create your project with :</p>

<pre><code>ng new My_New_Project --style=scss
</code></pre>

<p>If you are changing your existing style in your project</p>

<pre><code>ng set defaults.styleExt scss
</code></pre>

<p>Cli handles the rest of it.</p>

<p>For Latest Versions</p>

<p>For Angular 6 to set new style on existing project with CLI:</p>

<pre><code>ng config schematics.@schematics/angular:component.styleext scss
</code></pre>

<p>Or Directly into angular.json:</p>

<pre><code>"schematics": {<font></font>
      "@schematics/angular:component": {<font></font>
      "styleext": "scss"<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从官方github回购这里引用- </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，要使用一个只需安装 </font></font></p>
  
  <p><code>npm install node-sass</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将项目中的.css文件重命名为.scss或.sass。</font><font style="vertical-align: inherit;">它们将自动编译。</font><font style="vertical-align: inherit;">Angular2App的options参数具有sassCompiler，lessCompiler，stylusCompiler和CompassCompiler选项，这些选项直接传递给各自的CSS预处理器。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看这里</font></font></p>

<ul>
<li><a href="https://github.com/angular/angular-cli/wiki/stories-css-preprocessors" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular/angular-cli/wiki/stories-css-preprocessors</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimEva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">告诉angular-cli默认始终使用scss</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免</font></font><code>--style scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次生成项目都</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">，最好使用以下命令全局调整angular-cli的默认配置：</font></font></p>

<pre><code>ng set --global defaults.styleExt scss
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
请注意，某些版本的angular-cli包含一个读取上述全局标志的错误（</font></font><a href="https://github.com/angular/angular-cli/issues/5009" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">如果您的版本包含此错误，请使用以下命令生成项目：</font></font></p>

<pre><code>ng new some_project_name --style=scss
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Davaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像Mertcan所说的那样，使用scss的最佳方法是使用该选项创建项目：</font></font></p>

<pre><code>ng new My_New_Project --style=scss 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular-cli还添加了一个选项，可以在使用以下命令创建项目后更改默认的css预处理器：</font></font></p>

<pre><code>ng set defaults.styleExt scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，您可以在这里查看其文档：</font></font></p>

<p><a href="https://github.com/angular/angular-cli" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular/angular-cli</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
