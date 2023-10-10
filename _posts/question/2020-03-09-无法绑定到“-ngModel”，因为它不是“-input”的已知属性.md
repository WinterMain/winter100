---
layout: question
title:  无法绑定到“ ngModel”，因为它不是“ input”的已知属性
date:   2020-03-09T13:55:50.000Z
description: 即使未显示组件，启动我的Angular应用程序时也会出现以下错误。我必须将注释掉，<input>这样我的应用才能正常工作。    zone.js ...
img: 
author: HarryNear
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使未显示组件，启动我的Angular应用程序时也会出现以下错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须将注释掉，</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样我的应用才能正常工作。</font></font></p>

<pre><code>    zone.js:461 Unhandled Promise rejection: Template parse errors:<font></font>
    Can't bind to 'ngModel' since it isn't a known property of 'input'. ("<font></font>
        &lt;div&gt;<font></font>
            &lt;label&gt;Created:&lt;/label&gt;<font></font>
            &lt;input  type="text" [ERROR -&gt;][(ngModel)]="test" placeholder="foo" /&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;"): InterventionDetails@4:28 ; Zone: &lt;root&gt; ; Task: Promise.then ; Value: <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在查看Hero插件，但与我的代码没有任何区别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是组件文件：</font></font></p>

<pre><code>    import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';<font></font>
    import { Intervention } from '../../model/intervention';<font></font>
<font></font>
    @Component({<font></font>
        selector: 'intervention-details',<font></font>
        templateUrl: 'app/intervention/details/intervention.details.html',<font></font>
        styleUrls: ['app/intervention/details/intervention.details.css']<font></font>
    })<font></font>
<font></font>
    export class InterventionDetails<font></font>
    {<font></font>
        @Input() intervention: Intervention;<font></font>
<font></font>
        public test : string = "toto";<font></font>
    }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第292篇《无法绑定到“ ngModel”，因为它不是“ input”的已知属性》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For any version from Angular 2, you need to import FormsModule in your app.module.ts file and it will fix the issue.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I upgraded from RC1 to RC5 and received this error. </p>

<p>I completed my migration (introducing a new <code>app.module.ts</code> file, changing <code>package.json</code> to include new versions and missing modules, and finally changing my <code>main.ts</code> to boot accordingly, based on the <a href="https://angular.io/docs/ts/latest/quickstart.html" rel="noreferrer">Angular2 quick start example</a>). </p>

<p>I did an <code>npm update</code> and then an <code>npm outdated</code> to confirm the versions installed were correct, still no luck.</p>

<p>I ended up completely wiping the <code>node_modules</code> folder and reinstalling with <code>npm install</code> - Voila! Problem solved.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This is for the folks who use plain JavaScript instead of Type Script. In addition to referencing the forms script file on top of the page like below</p>

<pre><code>&lt;script src="node_modules/@angular/forms/bundles/forms.umd.js"&gt;&lt;/script&gt;
</code></pre>

<p>you should also tell the the module loader to load the <code>ng.forms.FormsModule</code>. After making the changes my <code>imports</code> property of <code>NgModule</code> method looked like below</p>

<p><code>imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],</code></p>

<p>Happy coding!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，当您尝试使用另一个模块中未共享的模块中的组件时，会出现此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，您有2个模块，分别具有module1.componentA.component.ts和module2.componentC.component.ts，并尝试在module2内部的模板（例如</font></font><code>&lt;module1-componentA [someInputVariableInModule1]="variableFromHTTPRequestInModule2"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中</font><font style="vertical-align: inherit;">使用来自module1.componentA.component.ts的选择器</font><font style="vertical-align: inherit;">，它将抛出即使在module1.componentA中有someInputVariableInModule1在module1.componentA.component.ts中不可用的错误</font></font><code>@Input() someInputVariableInModule1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果发生这种情况，您希望共享module1.componentA以在其他模块中进行访问。</font><font style="vertical-align: inherit;">因此，如果您在sharedModule中共享module1.componentA，则module1.componentA将在其他模块中使用（在module1之外），并且每个导入sharedModule的模块都将能够在其模板中访问选择器，并注入</font></font><code>@Input()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明的变量。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngModel</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自FormsModule。在某些情况下，您会收到此类错误：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有将FormsModule导入到声明了组件的模块（使用ngModel的组件）的import数组中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您已将FormsModule导入一个模块，该模块是另一模块的继承。</font><font style="vertical-align: inherit;">在这种情况下，您有两个选择：

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让FormsModule从两个模块（模块1和模块2）导入到导入数组中。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，导入模块不会提供对其导入模块的访问。（导入不会被继承）</font></font></strong> </li>
</ul></li>
</ol>

<p><a href="https://i.stack.imgur.com/Qyvtf.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Qyvtf.png" alt="在此处输入图片说明"></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Form1中将FormsModule声明为导入和导出数组，然后在model2中也可以看到它</font></font></li>
</ul>

<p><a href="https://i.stack.imgur.com/SxbQp.png" rel="noreferrer"><img src="https://i.stack.imgur.com/SxbQp.png" alt="在此处输入图片说明"></a></p>

<ol start="3">
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在某些版本中，我遇到了这个问题）您已经正确导入了FormsModule，但是问题出在输入HTML标记上。</font><font style="vertical-align: inherit;">您必须为输入添加名称标签属性，并且[（ngModel）]中的对象绑定名称必须与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性中</font><font style="vertical-align: inherit;">的名称相同</font></font></p>

<p><a href="https://i.stack.imgur.com/yUee7.png" rel="noreferrer"><img src="https://i.stack.imgur.com/yUee7.png" alt="在此处输入图片说明"></a></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin西门神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果正确导入FormsModule后仍然出现错误，则请在终端或Windows控制台中检入，因为您的项目未编译（由于另一个错误，可能是任何错误），并且您的解决方案未反映在浏览器中！ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我的控制台出现以下不相关的错误：类型“ ApiService”上不存在属性“ retrieveGithubUser”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题是关于Angular 2的，但我使用的是Angular 4，但这些答案都无济于事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 4中，语法必须为 </font></font></p>

<pre><code>[(ngModel)]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin凯梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在应用可接受的解决方案后仍然有人遇到错误，则可能是因为您要在输入标记中使用ngModel属性的组件具有单独的模块文件。</font><font style="vertical-align: inherit;">在这种情况下，也应在组件的module.ts文件中应用可接受的解决方案。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你需要使用</font></font><code>[(ngModel)]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一你需要导入</font></font><code>FormsModule</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>app.module.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后在进口的列表中添加。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.module.ts</font></font></em> </p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进口 </font></font><code>import {FormsModule} from "@angular/forms";</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加进口 
</font></font><code>imports: [
BrowserModule,
FormsModule
],</code></li>
</ol>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.component.ts</font></font></em></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font><code>&lt;input type="text" [(ngModel)]="name" &gt;</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着 </font></font><code>&lt;h1&gt;your name is: {{name}} &lt;/h1&gt;</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L木嘢</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在要使用[[ngModel）]的那些模块中导入FormsModule</font></font></p>

<p><a href="https://i.stack.imgur.com/Ulpi6.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Ulpi6.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天A前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的解决方案：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   在app.module.ts中</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子1</font></font></strong></p>

<pre><code>import {FormsModule} from "@angular/forms";  <font></font>
// add in imports <font></font>
<font></font>
imports: [<font></font>
 BrowserModule,<font></font>
 FormsModule<font></font>
 ],<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子2</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用[（ngModel）]，则必须在app.module.ts中导入FormsModule</font></font></p>
</blockquote>

<pre><code>import { FormsModule  } from "@angular/forms";     <font></font>
@NgModule({<font></font>
  declarations: [<font></font>
    AppComponent, videoComponent, tagDirective, <font></font>
  ],<font></font>
  imports: [<font></font>
    BrowserModule,  FormsModule<font></font>
<font></font>
  ],<font></font>
  providers: [ApiServices],<font></font>
  bootstrap: [AppComponent]<font></font>
})<font></font>
export class AppModule { }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了能够对表单输入使用双向数据绑定，您需要将</font></font><code>FormsModule</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包</font><font style="vertical-align: inherit;">导入</font></font><code>Angular</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块中。</font><font style="vertical-align: inherit;">有关更多信息，请参见</font><a href="https://angular.io/docs/ts/latest/tutorial/toh-pt1.html#!#two-way-binding"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">的</font></font><code>Angular 2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方教程</font><font style="vertical-align: inherit;">和</font><a href="https://angular.io/docs/ts/latest/guide/forms.html"><font style="vertical-align: inherit;">表单</font></a><font style="vertical-align: inherit;">的官方文档。</font></font><a href="https://angular.io/docs/ts/latest/tutorial/toh-pt1.html#!#two-way-binding"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://angular.io/docs/ts/latest/guide/forms.html"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
