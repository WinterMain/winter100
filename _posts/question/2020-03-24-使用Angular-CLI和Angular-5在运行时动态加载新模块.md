---
layout: question
title:  使用Angular CLI和Angular 5在运行时动态加载新模块
date:   2020-03-24T07:43:16.000Z
description: 目前，我正在研究一个托管在客户端服务器上的项目。对于新的“模块”，无意重新编译整个应用程序。也就是说，客户端希望在运行时更新路由器/延​​迟加载的模块。我...
img: 
author: 卡卡西Pro小卤蛋
category: question
answer: 4
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在研究一个托管在客户端服务器上的项目。</font><font style="vertical-align: inherit;">对于新的“模块”，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无意重新编译</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整个应用程序。</font><font style="vertical-align: inherit;">也就是说，客户端希望</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行时更新路由器/延​​迟加载的模块</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经尝试了几种方法，但是无法正常工作。</font><font style="vertical-align: inherit;">我想知道你们中的任何人知道我仍然可以尝试还是错过了什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到的一件事是，在构建应用程序时，默认情况下，我尝试使用angular cli尝试的大多数资源都由webpack捆绑为单独的块。</font><font style="vertical-align: inherit;">这似乎很合理，因为它利用了webpack代码拆分。</font><font style="vertical-align: inherit;">但是，如果在编译时尚不知道该模块（但是已编译的模块存储在服务器上的某个位置），该怎么办？</font><font style="vertical-align: inherit;">绑定不起作用，因为它找不到要导入的模块。</font><font style="vertical-align: inherit;">使用SystemJS可以在系统上找到时加载UMD模块，但也可以通过webpack捆绑到单独的块中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试过的一些资源；</font></font></p>

<ul>
<li><a href="https://github.com/dianadujing/dynamic-remote-component-loader" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态远程组件加载器</font></font></a></li>
<li><a href="https://github.com/Toxicable/module-loading" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块加载</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/42953858/loading-modules-from-different-server-at-runtime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行时从其他服务器加载模块</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/45503497/how-to-load-dynamic-external-components-into-angular-application"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将动态外部组件加载到Angular应用程序中</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/41438198/implementing-a-plugin-architecture-plugin-system-pluggable-framework-in-angu"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 2、4、5、6中实现插件架构/插件系统/可插入框架</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/48590455/angular-5-load-modules-that-are-not-known-at-compile-time-dynamically-at-run"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular 5-在运行时动态加载模块（在编译时未知）</font></font></a></li>
<li><a href="https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他一些与此主题相关的信息。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试并实现了一些代码，但目前无法运行；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用普通的module.ts文件扩展路由器</font></font></p>

<pre><code>  this.router.config.push({<font></font>
    path: "external",<font></font>
    loadChildren: () =&gt;<font></font>
      System.import("./module/external.module").then(<font></font>
        module =&gt; module["ExternalModule"],<font></font>
        () =&gt; {<font></font>
          throw { loadChunkError: true };<font></font>
        }<font></font>
      )<font></font>
  });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UMD捆绑包的普通SystemJS导入</font></font></p>

<pre><code>System.import("./external/bundles/external.umd.js").then(modules =&gt; {<font></font>
  console.log(modules);<font></font>
  this.compiler.compileModuleAndAllComponentsAsync(modules['External'])<font></font>
    .then(compiled =&gt; {<font></font>
      const m = compiled.ngModuleFactory.create(this.injector);<font></font>
      const factory = compiled.componentFactories[0];<font></font>
      const cmp = factory.create(this.injector, [], null, m);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入外部模块，不适用于Webpack（Afaik）</font></font></p>

<pre><code>const url = 'https://gist.githubusercontent.com/dianadujing/a7bbbf191349182e1d459286dba0282f/raw/c23281f8c5fabb10ab9d144489316919e4233d11/app.module.ts';<font></font>
const importer = (url:any) =&gt; Observable.fromPromise(System.import(url));<font></font>
console.log('importer:', importer);<font></font>
importer(url)<font></font>
  .subscribe((modules) =&gt; {<font></font>
    console.log('modules:', modules, modules['AppModule']);<font></font>
    this.cfr = this.compiler<font></font>
      .compileModuleAndAllComponentsSync(modules['AppModule']);<font></font>
    console.log(this.cfr,',', this.cfr.componentFactories[0]);<font></font>
    this.external.createComponent(this.cfr.componentFactories[0], 0);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用SystemJsNgModuleLoader</font></font></p>

<pre><code>this.loader.load('app/lazy/lazy.module#LazyModule')<font></font>
  .then((moduleFactory: NgModuleFactory&lt;any&gt;) =&gt; {<font></font>
    console.log(moduleFactory);<font></font>
    const entryComponent = (&lt;any&gt;moduleFactory.moduleType).entry;<font></font>
    const moduleRef = moduleFactory.create(this.injector);<font></font>
<font></font>
    const compFactory = moduleRef.componentFactoryResolver<font></font>
      .resolveComponentFactory(entryComponent);<font></font>
  });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试加载由汇总制作的模块</font></font></p>

<pre><code>this.http.get(`./myplugin/${metadataFileName}`)<font></font>
  .map(res =&gt; res.json())<font></font>
  .map((metadata: PluginMetadata) =&gt; {<font></font>
<font></font>
    // create the element to load in the module and factories<font></font>
    const script = document.createElement('script');<font></font>
    script.src = `./myplugin/${factoryFileName}`;<font></font>
<font></font>
    script.onload = () =&gt; {<font></font>
      //rollup builds the bundle so it's attached to the window <font></font>
      //object when loaded in<font></font>
      const moduleFactory: NgModuleFactory&lt;any&gt; = <font></font>
        window[metadata.name][metadata.moduleName + factorySuffix];<font></font>
      const moduleRef = moduleFactory.create(this.injector);<font></font>
<font></font>
      //use the entry point token to grab the component type that <font></font>
      //we should be rendering<font></font>
      const compType = moduleRef.injector.get(pluginEntryPointToken);<font></font>
      const compFactory = moduleRef.componentFactoryResolver<font></font>
        .resolveComponentFactory(compType); <font></font>
// Works perfectly in debug, but when building for production it<font></font>
// returns an error 'cannot find name Component of undefined' <font></font>
// Not getting it to work with the router module.<font></font>
    }<font></font>
<font></font>
    document.head.appendChild(script);<font></font>
<font></font>
  }).subscribe();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SystemJsNgModuleLoader的示例仅在应用程序的RouterModule中已将模块作为“惰性”路由提供时才起作用（使用webpack构建时将其转换为大块）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里和那里的StackOverflow上找到了很多有关此主题的讨论，并且提供了动态加载模块/组件的解决方案（如果事先知道的话）看起来真的很不错。</font><font style="vertical-align: inherit;">但没有一个适合我们的项目用例。</font><font style="vertical-align: inherit;">请让我知道我仍然可以尝试或尝试的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我发现；</font></font><a href="https://github.com/kirjs/angular-dynamic-module-loading" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/kirjs/angular-dynamic-module-loading，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后尝试一下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：我创建了一个存储库，并带有使用SystemJS（和Angular 6）动态加载模块的示例；</font></font><a href="https://github.com/lmeijdam/angular-umd-dynamic-example" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/lmeijdam/angular-umd-dynamic-example</font></font></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3461篇《使用Angular CLI和Angular 5在运行时动态加载新模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryNear</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信，如果您使用webpack构建和运行主应用程序，则可以使用SystemJS来加载UMD捆绑包。</font><font style="vertical-align: inherit;">我使用了使用ng-packagr构建动态插件/附加模块的UMD捆绑包的解决方案。</font><font style="vertical-align: inherit;">这个github演示了描述的过程：</font><a href="https://github.com/nmarra/dynamic-module-loading" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/nmarra/dynamic-module-loading" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/nmarra/dynamic-module-loading</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidJim</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了</font><font style="vertical-align: inherit;">具有Angular 6的库支持</font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/kirjs/angular-dynamic-module-loading" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/kirjs/angular-dynamic-module-loading</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案来创建我在Github上共享的应用程序。</font><font style="vertical-align: inherit;">根据公司政策，它需要脱机。</font><font style="vertical-align: inherit;">关于示例项目源的讨论一结束，我将在Github上分享它！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：可以找到回购; </font></font><a href="https://github.com/lmeijdam/angular-umd-dynamic-example" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/lmeijdam/angular-umd-dynamic-example</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以通过在路由器中将它们称为模块来延迟加载模块。</font><font style="vertical-align: inherit;">这是一个示例</font></font><a href="https://github.com/start-angular/SB-Admin-BS4-Angular-6" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/start-angular/SB-Admin-BS4-Angular-6</font></font></a></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先将要使用的所有组件耦合到一个模块中</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，在路由器中引用该模块，Angular会将您的模块延迟加载到视图中。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用angular 6库完成此操作，然后汇总即可。</font><font style="vertical-align: inherit;">我刚刚进行了试验，可以与主应用程序共享独立的角度AOT模块，而无需最后重建。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在将角度库设置</font></font><code>angularCompilerOptions.skipTemplateCodegen</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为false并在构建库之后，您将获得模块工厂。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，使用如下汇总构建一个umd模块： 
</font></font><code>rollup dist/plugin/esm2015/lib/plugin.module.ngfactory.js --file src/assets/plugin.module.umd.js --format umd --name plugin</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主应用程序中加载文本源umd包并与模块上下文进行评估</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以从导出对象访问ModuleFactory</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font><a href="https://github.com/iwnow/angular-plugin-example" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/iwnow/angular-plugin-example</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以找到如何使用独立构建和AOT开发插件</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
