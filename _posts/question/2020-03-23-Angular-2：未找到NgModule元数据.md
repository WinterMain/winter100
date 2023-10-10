---
layout: question
title:  Angular 2：未找到NgModule元数据
date:   2020-03-23T12:57:49.000Z
description: 我是Angular 2的新手，并尝试跟着发现的视频教程一起学习。尽管遵循了所有步骤，但是Angular仍然无法正常工作。我收到以下错误：compile...
img: 
author: 斯丁前端
category: question
answer: 20
tags: 角度 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Angular 2的新手，并尝试跟着发现的视频教程一起学习。</font><font style="vertical-align: inherit;">尽管遵循了所有步骤，但是Angular仍然无法正常工作。</font><font style="vertical-align: inherit;">我收到以下错误：</font></font></p>

<pre><code>compiler.umd.js:13854 Uncaught Error: No NgModule metadata found for 'App'.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且该组件完全不会加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的文件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json：</font></font></p>

<pre><code>{<font></font>
  "name": "retain",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "main": "index.js",<font></font>
  "scripts": {<font></font>
    "test": "webpack --config webpack.spec.ts --progress --color &amp;&amp; karma start",<font></font>
    "start": "webpack-dev-server --inline --colors --progress --display-error-details --display-cached --port 3000  --content-base src"<font></font>
  },<font></font>
  "author": "",<font></font>
  "license": "ISC",<font></font>
  "dependencies": {<font></font>
    "@angular/common": "2.0.0",<font></font>
    "@angular/compiler": "2.0.0",<font></font>
    "@angular/core": "2.0.0",<font></font>
    "@angular/forms": "2.0.0",<font></font>
    "@angular/http": "2.0.0",<font></font>
    "@angular/platform-browser": "2.0.0",<font></font>
    "@angular/platform-browser-dynamic": "2.0.0",<font></font>
    "@angular/router": "3.0.0",<font></font>
    "core-js": "2.4.1",<font></font>
    "lodash": "4.16.1",<font></font>
    "rxjs": "5.0.0-beta.12",<font></font>
    "zone.js": "0.6.25"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@types/core-js": "0.9.33",<font></font>
    "@types/lodash": "4.14.35",<font></font>
    "@types/node": "6.0.39",<font></font>
    "awesome-typescript-loader": "2.2.4",<font></font>
    "css-loader": "0.23.1",<font></font>
    "jasmine-core": "2.4.1",<font></font>
    "karma": "1.1.1",<font></font>
    "karma-chrome-launcher": "1.0.1",<font></font>
    "karma-jasmine": "1.0.2",<font></font>
    "karma-mocha-reporter": "2.0.4",<font></font>
    "raw-loader": "0.5.1",<font></font>
    "to-string-loader": "1.1.4",<font></font>
    "ts-helpers": "1.1.1",<font></font>
    "typescript": "2.0.2",<font></font>
    "webpack": "1.13.1",<font></font>
    "webpack-dev-server": "1.14.1"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;meta charset=UTF-8&gt;<font></font>
    &lt;title&gt;Retain&lt;/title&gt;<font></font>
    &lt;link rel="icon" href="data:;base64,iVBORw0KGgo="&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<font></font>
    &lt;link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css' rel='stylesheet' type='text/css'&gt;<font></font>
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css" type="text/css"&gt;<font></font>
    &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons"<font></font>
      rel="stylesheet"&gt;<font></font>
    &lt;link href="global.css" rel="stylesheet"&gt;<font></font>
    &lt;base href="/"&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
<font></font>
    &lt;app&gt;<font></font>
      ... before angular loads.<font></font>
    &lt;/app&gt;<font></font>
<font></font>
    &lt;script src="polyfills.bundle.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="vendor.bundle.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="main.bundle.js"&gt;&lt;/script&gt;<font></font>
<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.ts：</font></font></p>

<pre><code>import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';<font></font>
import { AppModule } from './app/app.module'; <font></font>
<font></font>
import { App } from './app/app';<font></font>
<font></font>
const platform = platformBrowserDynamic();<font></font>
platform.bootstrapModule(App);<font></font>
<font></font>
platformBrowserDynamic().bootstrapModule(AppModule);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程式：</font></font></p>

<pre><code>import { Component } from '@angular/core';<font></font>
import { NgModule }      from '@angular/core';<font></font>
<font></font>
@Component({<font></font>
  selector: 'app',<font></font>
  template: `<font></font>
    &lt;div&gt;<font></font>
      &lt;h3&gt;<font></font>
        Yo, world!<font></font>
      &lt;/h3&gt;<font></font>
    &lt;/div&gt;<font></font>
    `<font></font>
})<font></font>
<font></font>
export class App {}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.module.ts：</font></font></p>

<pre><code>import { NgModule } from '@angular/core'; <font></font>
import { BrowserModule } from '@angular/platform-browser'; <font></font>
import { App } from './app'; <font></font>
<font></font>
@NgModule({ <font></font>
  imports: [BrowserModule], <font></font>
  declarations: [App], <font></font>
  bootstrap: [App] <font></font>
}) <font></font>
<font></font>
export class AppModule{}; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢你的时间。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3029篇《Angular 2：未找到NgModule元数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ngcWebpack插件时，未指定mainPath或entryModule时出现此错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有其他效果，请尝试以下操作</font></font></p>

<pre><code>if (environment.production) {<font></font>
        // there is no need of this if block, angular internally creates following code structure when it sees --prod<font></font>
        // but at the time of writting this code, else block was not working in the production mode and NgModule metadata<font></font>
        // not found for AppModule error was coming at run time, added follow code to fix that, it can be removed probably <font></font>
        // when angular is upgraded to latest version or if it start working automatically. :)<font></font>
        // we could also avoid else block but building without --prod saves time in building app locally.<font></font>
        platformBrowser(extraProviders).bootstrapModuleFactory(&lt;any&gt;AppModuleNgFactory);<font></font>
    } else {<font></font>
        platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我在一个组件中定义了两个（私有）静态方法，并在同一组件中使用它们。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyNear米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Angular 8或Angular 9（像我以前一样）中遇到此问题，请执行以下操作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清除您的npm缓存</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装所有的node_modules</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的“包含”和“文件” tsconfig设置等</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且仍然有问题，并且您是“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">延迟加载模块”，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请</font></font><code>angularCompilerOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或中</font></font><code>tsconfig.app.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行</font><font style="vertical-align: inherit;">检查</font><font style="vertical-align: inherit;">，并确保将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ strictMetadataEmit”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">false</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或将其删除。</font></font></p>

<pre><code>"angularCompilerOptions": {<font></font>
    "preserveWhitespaces": false,<font></font>
    "strictInjectionParameters": true,<font></font>
    "fullTemplateTypeCheck": true,<font></font>
    "strictTemplates": true,<font></font>
    // "strictMetadataEmit": true &lt;-- remove this setting or set to false<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该设置是为了帮助不应创建内置延迟加载模块的库创建者。我以前（使用Angular 7）将所有“ strict”选项设置为true。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，并通过关闭编辑器（即</font></font><code>Visual Studio Code</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次启动，运行</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">运行）</font><font style="vertical-align: inherit;">解决了该问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误表明找不到模块所需的数据。</font><font style="vertical-align: inherit;">就我而言，我</font><font style="vertical-align: inherit;">在NgModule的开头</font><font style="vertical-align: inherit;">错过了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的NgModule定义：</font></font></p>

<pre><code> @NgModule ({ <font></font>
    ... <font></font>
 })<font></font>
 export class AppModule {<font></font>
<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的情况（错误的情况）：</font></font></p>

<pre><code>NgModule ({ // =&gt; this line must starts with @<font></font>
   ... <font></font>
})<font></font>
export class AppModule {<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现导致此问题的原因是，我已将Angular应用程序与node.js应用程序合并到同一源代码树中，并且在根目录中</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有：</font></font></p>

<p><code>"files": [
    "./node_modules/@types/node/index.d.ts"
  ]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其更改为 </font></font></p>

<p><code>"compilerOptions": {
  "types": ["node"]
 }</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，为了防止在角度应用中使用节点类型，请将其添加到</font></font><code>tsconfig.app.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><code>"compilerOptions": {
  "types": []
 }</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，</font></font><code>ng update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在整个宇宙崩溃之后</font><font style="vertical-align: inherit;">，我尝试使用我的angular 6项目进行升级</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用以下命令更新项目：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng update @ angular / cli</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng更新@ angular / core</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng更新@ angular / material</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我发现rxjs包有问题，我也运行了此命令。</font><font style="vertical-align: inherit;">-npm install-保存rxjs</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我得到了错误 </font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到NgModule元数据</font></font></strong></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过删除</font><font style="vertical-align: inherit;">项目根目录中的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹来</font><font style="vertical-align: inherit;">解决此问题</font><font style="vertical-align: inherit;">，然后运行：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样，一切正常。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilPro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在两次遇到此问题。</font><font style="vertical-align: inherit;">两次都是我如何实现延迟加载的问题。</font><font style="vertical-align: inherit;">在我的路由模块中，我的路由定义为：</font></font></p>

<pre><code>  {<font></font>
    path: "game",<font></font>
    loadChildren: () =&gt; import("./game/game.module").then(m =&gt; {m.GameModule})<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这是错误的。</font><font style="vertical-align: inherit;">在第二个=&gt;之后，您不需要大括号。</font><font style="vertical-align: inherit;">它应该看起来像这样：</font></font></p>

<pre><code>  {<font></font>
    path: "game",<font></font>
    loadChildren: () =&gt; import("./game/game.module").then(m =&gt; m.GameModule)<font></font>
 }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我从git仓库克隆时遇到了这个问题，当我创建一个新项目并从旧项目中重新插入src文件夹时，它已解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src文件夹是部署角度应用程序时唯一需要的文件夹，但是您必须使用此解决方案重新配置开发环境。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我终于找到了解决方案。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令删除webpack。</font></font></li>
</ol>

<pre class="lang-none prettyprint-override"><code>npm remove webpack
</code></pre>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令安装cli。</font></font></li>
</ol>

<pre class="lang-none prettyprint-override"><code>npm install --save-dev @angular/cli@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功测试应用程序后，它将起作用:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有，请按照以下步骤操作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除node_module文件夹。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令清除缓存。</font></font></li>
</ol>

<pre class="lang-none prettyprint-override"><code>npm cache clean --force
</code></pre>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令安装节点软件包。</font></font></li>
</ol>

<pre class="lang-none prettyprint-override"><code>npm install
</code></pre>

<ol start="4">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令安装angular @ cli。</font></font></li>
</ol>

<pre class="lang-none prettyprint-override"><code>npm install --save-dev @angular/cli@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果失败，请再次尝试步骤4。</font><font style="vertical-align: inherit;">会的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读以上所有答案后，我遇到了同样的问题，无法解决。</font><font style="vertical-align: inherit;">然后我注意到声明中的一个逗号引起了问题。</font><font style="vertical-align: inherit;">删除它，问题解决了。</font></font></p>

<pre><code>@NgModule({<font></font>
    imports: [<font></font>
        PagesRoutingModule,<font></font>
        ThemeModule,<font></font>
        DashboardModule,<font></font>
    ],<font></font>
    declarations: [<font></font>
        ...PAGES_COMPONENTS,<font></font>
        **,**<font></font>
    ],<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>main.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将同时引导AppModule </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> App。</font><font style="vertical-align: inherit;">它应该只是AppModule，然后引导该App。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将main.ts与文档进行比较，您会发现区别-只需从main.ts中删除所有对App的引用</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案较晚，但这可能会对某人有所帮助。</font><font style="vertical-align: inherit;">我遇到了同样的错误，尝试了前面提到的所有建议，将我的头撞在墙上，但没有任何效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过仔细观察，我在app.module.ts中注意到以下内容：</font></font></p>

<pre><code>imports: [<font></font>
  BrowserModule,<font></font>
  BrowserAnimationsModule,<font></font>
  FormsModule,<font></font>
  HttpClientModule,, // Redundant comma <font></font>
  CoreModule<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我又撞了一下头。</font><font style="vertical-align: inherit;">WebStorm额外的逗号非常纯净地显示为轻微警告，通过在Array中插入一个空插槽造成了严重破坏。</font><font style="vertical-align: inherit;">WATCHOUT FOT的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Arrays" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">省音</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">陷阱;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有更多原因导致此错误。</font><font style="vertical-align: inherit;">这意味着您的应用程序无法按预期构建。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查以下内容。</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查是否更改了node_modules版本，这是主要原因。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您从其他构建工具转移到webpack，例如从Systemjs转移到Webpack，如果您的某些依赖项本质上不是模块化的，那么您可能会收到此错误，也请进行检查。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查框架的过时功能，例如</font><font style="vertical-align: inherit;">
角度2中的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ HTTP_PROVIDERS”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后将其删除。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要升级，请确保遵循框架的当前语法，例如：</font><font style="vertical-align: inherit;">Angular2中的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法已更改。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查引导过程，并确保您正在加载正确的模块。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当手动重新安装angular / cli时，此问题才得到解决。</font><font style="vertical-align: inherit;">请遵循以下步骤。</font><font style="vertical-align: inherit;">（在Angular项目目录下运行all命令）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）使用以下命令删除webpack。</font></font></p>

<pre><code>npm remove webpack
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）使用以下命令安装cli。</font></font></p>

<pre><code>npm install --save-dev @angular/cli@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功测试应用程序后，它将起作用:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有，请按照以下步骤操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）删除node_module文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）使用以下命令清除缓存。</font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）使用以下命令安装节点软件包。</font></font></p>

<pre><code>npm install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）使用以下命令安装angular @ cli。</font></font></p>

<pre><code>npm install --save-dev @angular/cli@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果失败，请重试:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5）庆祝:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议重新启动应用程序。</font><font style="vertical-align: inherit;">大多数案例编辑器将无法检测到延迟加载的模块中的更改。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行之后，</font><font style="vertical-align: inherit;">尝试删除node_modules
 </font></font><code>rm -rf node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和package-lock.json </font><font style="vertical-align: inherit;">。</font></font><code>rm -rf package-lock.json</code><font style="vertical-align: inherit;"></font><code>npm install</code><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使我已将上述答案建议的所有内容都放在适当的位置，我仍然遇到此错误。</font></font><code>app.module.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需</font><font style="vertical-align: inherit;">对</font><font style="vertical-align: inherit;">文件进行</font><font style="vertical-align: inherit;">简单的编辑即可</font><font style="vertical-align: inherit;">（例如删除括号并放回去）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题出在您的</font></font><code>main.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中。</font></font></p>

<pre><code>const platform = platformBrowserDynamic();<font></font>
platform.bootstrapModule(App);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在尝试bootstrap </font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这不是一个真正的模块。</font><font style="vertical-align: inherit;">删除这两行并替换为以下行：</font></font></p>

<pre><code>platformBrowserDynamic().bootstrapModule(AppModule);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将解决您的错误。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
