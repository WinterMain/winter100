---
layout: question
title:  浏览器列表：caniuse-lite已过时。请运行下一个命令\`npm update caniuse-lite browserslist\`。
date:   2020-03-19T01:47:23.000Z
description: 最近，当我编译我的scss文件时，出现错误。错误消息显示：  浏览器列表：caniuse-lite已过时。请运行下一个命令npm update ca...
img: 
author: 神奇村村
category: question
answer: 11
tags: npm CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，当我编译我的scss文件时，出现错误。</font><font style="vertical-align: inherit;">错误消息显示：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器列表：caniuse-lite已过时。</font><font style="vertical-align: inherit;">请运行下一个命令</font></font><code>npm update caniuse-lite browserslist</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，如消息所述，我跑了，</font></font><code>npm update caniuse-lite browserslist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但没有解决问题。</font><font style="vertical-align: inherit;">我删除了整个nod-modules目录，然后再次安装，还更新了整个文件夹，</font></font><code>npm update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但没有一个解决问题。</font><font style="vertical-align: inherit;">我还重新安装了autoprefixer和browserslist，但没有一个解决了该问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我删除  </font></font></p>

<pre><code>"options": {<font></font>
      "autoPrefix": "&gt; 1%"<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从我的角度来看</font></font><code>compilerconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一切正常，这意味着可能与autoprefixer有关。</font><font style="vertical-align: inherit;">另外，我手动将软件包版本更改为最新版本，</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后重新安装，但没有运气。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2224篇《浏览器列表：caniuse-lite已过时。请运行下一个命令`npm update caniuse-lite browserslist`。》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Gil</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定我的问题在哪里，但是我相信这是因为我同时使用了npm和Yarn中的全局包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我卸载了所有npm全局软件包，然后再次使用yarn命令时，问题就消失了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看已安装的全局软件包...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于npm：</font></font></p>

<pre><code>npm ls -g --depth=0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于纱线：</font></font></p>

<pre><code>yarn global list
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我使用以下命令卸载了在npm列表中看到的每个软件包：</font></font></p>

<pre><code>npm uninstall -g &lt;package-name&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端小胖JinJin</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了同样的问题</font></font></p>

<p><code>npm i autoprefixer@latest</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">自动添加需求依赖项，</font><font style="vertical-align: inherit;">如下所示：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>"autoprefixer": "^9.6.5",
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package-lock.json</font></font></strong></p>

<pre><code>"@angular-devkit/build-angular": {<font></font>
<font></font>
...<font></font>
<font></font>
"dependencies": {<font></font>
    "autoprefixer": {<font></font>
      "version": "9.4.6",<font></font>
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.4.6.tgz",<font></font>
      "integrity": "sha512-Yp51mevbOEdxDUy5WjiKtpQaecqYq9OqZSL04rSoCiry7Tc5I9FEyo3bfxiTJc1DfHeKwSFCUYbBAiOQ2VGfiw==",<font></font>
      "dev": true,<font></font>
      "requires": {<font></font>
        "browserslist": "^4.4.1",<font></font>
        "caniuse-lite": "^1.0.30000929",<font></font>
        "normalize-range": "^0.1.2",<font></font>
        "num2fraction": "^1.2.2",<font></font>
        "postcss": "^7.0.13",<font></font>
        "postcss-value-parser": "^3.3.1"<font></font>
      }<font></font>
    },<font></font>
<font></font>
...<font></font>
<font></font>
  }<font></font>
<font></font>
...<font></font>
<font></font>
"autoprefixer": {<font></font>
    "version": "9.6.5",<font></font>
    "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-9.6.5.tgz",<font></font>
    "integrity": "sha512-rGd50YV8LgwFQ2WQp4XzOTG69u1qQsXn0amww7tjqV5jJuNazgFKYEVItEBngyyvVITKOg20zr2V+9VsrXJQ2g==",<font></font>
    "requires": {<font></font>
      "browserslist": "^4.7.0",<font></font>
      "caniuse-lite": "^1.0.30000999",<font></font>
      "chalk": "^2.4.2",<font></font>
      "normalize-range": "^0.1.2",<font></font>
      "num2fraction": "^1.2.2",<font></font>
      "postcss": "^7.0.18",<font></font>
      "postcss-value-parser": "^4.0.2"<font></font>
    },<font></font>
<font></font>
...<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Green</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确实将节点版本从12降级到10</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发生此错误是因为我使用的是节点版本12。当我降级到版本10.16.5时，此错误停止。</font><font style="vertical-align: inherit;">此错误发生在我的本地环境中，但是在生产和暂存中却没有发生。</font><font style="vertical-align: inherit;">在prod和暂存节点中，版本为10.x，因此我只需执行此操作，而无需更新package.json中的任何软件包。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小胖</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这很好...</font></font></p>

<p><code>sudo npm i -g browserslist caniuse-lite</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我删除了</font></font><code>caniuse-lite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>browserslist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹从</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，键入以下命令以安装软件包。 </font></font></p>

<pre><code>npm i -g browserslist caniuse-lite --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作正常。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><code>npm --depth 9999 update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我解决了这个问题-显然是因为</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坚持使用过时的版本。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如斯科特·库尔（Scott Kuhl）的回答中提到的那样，</font><a href="https://github.com/madskristensen/WebCompiler/issues/413" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https：//github.com/madskristensen/WebCompiler/issues/413中</font></a><font style="vertical-align: inherit;">提到了此问题
</font></font><a href="https://github.com/madskristensen/WebCompiler/issues/413" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，运行该命令</font></font><code>npm i caniuse-lite- browserslist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一天只能工作约1/2天，然后再成为问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帖子中提到的以下解决方案效果更好。</font><font style="vertical-align: inherit;">这将更新node.js文件，以便</font><font style="vertical-align: inherit;">在返回这些错误时</font><font style="vertical-align: inherit;">使用</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>console.warn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以手动更新位于C：\ Users \ [用户名] \ AppData \ Local \ Temp \ WebCompiler [VersionNumber] \ node_modules \ browserslist的文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，为自动完成，请通过以下方式将以下内容添加到您的.csproj文件中：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击项目文件，然后选择“卸载项目”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑.csproj文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下内容粘贴到项目文件中。</font><font style="vertical-align: inherit;">我将其粘贴到文件末尾，</font></font><code>&lt;/Project&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结束标记之前和导入构建Web编译器软件包之前。</font></font></li>
</ol>

<pre><code>    &lt;ItemGroup&gt;<font></font>
        &lt;PackageReference Include="MSBuildTasks" Version="1.5.0.235"&gt;<font></font>
            &lt;PrivateAssets&gt;all&lt;/PrivateAssets&gt;<font></font>
            &lt;IncludeAssets&gt;runtime; build; native; contentfiles; analyzers&lt;/IncludeAssets&gt;<font></font>
        &lt;/PackageReference&gt;<font></font>
    &lt;/ItemGroup&gt;<font></font>
    &lt;PropertyGroup&gt;<font></font>
        &lt;TempFolder&gt;$([System.IO.Path]::GetTempPath())&lt;/TempFolder&gt;<font></font>
    &lt;/PropertyGroup&gt;<font></font>
    &lt;ItemGroup&gt;<font></font>
        &lt;BrowsersListNodeJsFiles Include="$(TempFolder)\WebCompiler*\node_modules\browserslist\node.js" /&gt;<font></font>
    &lt;/ItemGroup&gt;<font></font>
    &lt;Target Name="BrowsersListWarningsAsInfo" BeforeTargets="WebCompile"&gt;<font></font>
        &lt;FileUpdate Files="@(BrowsersListNodeJsFiles)"<font></font>
                    Regex="console.warn"<font></font>
                    ReplacementText="console.log" /&gt;<font></font>
    &lt;/Target&gt;<font></font>
<font></font>
</code></pre>

<ol start="4">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将项目重新加载到解决方案中。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi蛋蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/a/55283201/37796"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上答案的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继续</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与@MehrdadBabaki具有相同的“插件错误”。</font><font style="vertical-align: inherit;">我卸载了Web编译器，删除了上面提到的AppData WebCompiler文件夹，然后重新打开VS2019并重新安装了Web编译器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我再次转到WebCompiler文件夹，</font></font><code>npm i autoprefixer@latest</code> <code>npm i caniuse-lite@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行</font></font><code>npm i caniuse-lite browserslist@latest</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小哥</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现了一条捷径，而不是经历了一步</font></font><code>vs code appData/webCompiler</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我将此</font><font style="vertical-align: inherit;">快捷方式</font><font style="vertical-align: inherit;">添加为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此cmd的</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目依赖项</font></font><code>npm i caniuse-lite browserslist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是您可以全局安装它，以避免将其添加到每个项目中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装后，您可以将其从项目中删除</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并执行</font></font><code>npm i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Tony</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Angular开发人员</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我回答得很晚，但是我习惯检查每个使用的库的更新日志，并且在检查Angular CLI的发行说明时发现，他们昨天（2020年1月9日）发布了一个新补丁。解决此问题。</font></font></p>

<p><a href="https://github.com/angular/angular-cli/releases/tag/v8.3.22" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular/angular-cli/releases/tag/v8.3.22</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当您运行时</font></font><code>ng update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您应该获取以下内容的更新</font></font><code>@angular/cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/04jD6.png" rel="noreferrer"><img src="https://i.stack.imgur.com/04jD6.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>ng update @angular/cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将解决此警告。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙JinJin路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来您正在使用Visual Studio的Web编译器扩展。</font><font style="vertical-align: inherit;">此处有一个未解决的问题：</font><a href="https://github.com/madskristensen/WebCompiler/issues/413" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/madskristensen/WebCompiler/issues/413" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/madskristensen/WebCompiler/issues/413</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该问题中发布了一种解决方法：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭Visual Studio</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前往</font></font><code>C:\Users\USERNAME\AppData\Local\Temp\WebCompilerX.X.X</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（X是WebCompiler的版本）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">删除以下文件</font><font style="vertical-align: inherit;">夹：</font></font><code>caniuse-lite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>browserslist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
打开CMD（在里面</font></font><code>C:\Users\USERNAME\AppData\Local\Temp\WebCompilerX.X.X</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并运行：</font></font><code>npm i caniuse-lite browserslist</code></li>
</ol></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
