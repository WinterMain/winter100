---
layout: question
title:  如何从命令行运行TypeScript文件？
date:   2020-03-24T02:52:32.000Z
description: 我很难找到答案。使用普通的Node.JS，您可以使用node path/to/file.js，CoffeeScript coffee hello.coff...
img: 
author: Stafan
category: question
answer: 9
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很难找到答案。</font><font style="vertical-align: inherit;">使用普通的Node.JS，您可以使用</font></font><code>node path/to/file.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，CoffeeScript </font></font><code>coffee hello.coffee</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和ES6具有的</font><font style="vertical-align: inherit;">任何js文件</font></font><code>babel-node hello.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如何使用Typescript进行相同操作？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的项目有一个</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供Webpack / ts-loader使用的工具，用于为浏览器构建一个不错的小捆绑包。</font><font style="vertical-align: inherit;">不过，在此之前，我需要从控制台运行一个构建步骤，该步骤将使用</font></font><code>.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目中</font><font style="vertical-align: inherit;">使用的一些</font><font style="vertical-align: inherit;">文件来生成模式，但是我似乎无法在不编译的情况下运行单个Typescript文件整个项目。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Tony</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从节点命令行轻松执行此操作。</font><font style="vertical-align: inherit;">首先，如下创建一个文件Greeter.ts。</font></font></p>

<pre><code>class Greeter {<font></font>
  greeting : string;<font></font>
  constructor(message : string) {<font></font>
    this.greeting = message;<font></font>
  }<font></font>
<font></font>
  greet() {<font></font>
    return "Hello, " + this.greeting;<font></font>
  }<font></font>
}<font></font>
<font></font>
let greeter = new Greeter("world");<font></font>
console.log(greeter.greet());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，使用命令编译以上文件，该命令</font></font><code>tsc Greeter.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将在同一目录中创建文件Greeter.js。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以运行</font></font><code>node Greeter.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输出</font><font style="vertical-align: inherit;">的命令</font></font><code>Hello, world</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一像我这样的人疯了，只想像.js脚本一样运行 TypeScript脚本，可以尝试一下。</font><font style="vertical-align: inherit;">我编写了一个hacky脚本，该脚本似乎使用node执行.ts脚本。</font></font></p>

<pre><code>#!/usr/bin/env bash<font></font>
<font></font>
NODEPATH="$HOME/.nvm/versions/node/v8.11.3/bin" # set path to your node/tsc<font></font>
<font></font>
export TSC="$NODEPATH/tsc"<font></font>
export NODE="$NODEPATH/node"<font></font>
<font></font>
TSCFILE=$1 # only parameter is the name of the ts file you created.<font></font>
<font></font>
function show_usage() {<font></font>
    echo "ts2node [ts file]"<font></font>
    exit 0<font></font>
}<font></font>
<font></font>
if [ "$TSCFILE" == "" ]<font></font>
then<font></font>
    show_usage;<font></font>
fi<font></font>
<font></font>
JSFILE="$(echo $TSCFILE|cut -d"." -f 1).js"<font></font>
<font></font>
$TSC $TSCFILE &amp;&amp; $NODE $JSFILE<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以执行此操作或编写自己的操作，但实际上，它会创建.js文件，然后使用node来运行它，如下所示：</font></font></p>

<pre><code># tsrun myscript.ts
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单。</font><font style="vertical-align: inherit;">只要确保您的脚本只有一个“”即可。</font><font style="vertical-align: inherit;">否则，您将需要以不同于我所展示的方式更改JSFILE。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该问题发布于2015年。在2018年，node可以识别</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.ts</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，运行</font></font><strong><code>node file.ts</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也将运行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给自己写一个简单的bash包装器可能会有所帮助。</font></font></p>

<pre><code>#!/bin/bash<font></font>
npx tsc $1 &amp;&amp; node ${1%%.ts}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加到上面的@Aamod答案中，如果要使用一个命令行来编译和运行代码，则可以使用以下命令：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视窗：</font></font></p>

<pre><code>tsc main.ts | node main.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Linux / macOS：</font></font></p>

<pre><code>tsc main.ts &amp;&amp; node main.js
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是有用的信息-这是最新的TypeScript / JavaScript运行时</font></font><a href="https://github.com/denoland/deno" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deno</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是由节点Ryan Dahl的创建者创建的，基于他可能会重新开始时会做的不同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有以下步骤 </font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您需要安装 TypeScript</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install -g TypeScript</font></font></strong></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.创建一个文件helloworld.ts</font></font></p>

<pre><code>function hello(person){<font></font>
 return "Hello, " + person;<font></font>
}<font></font>
let user = "Aamod Tiwari";<font></font>
const result = hello(user);<font></font>
console.log("Result",result)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.打开命令提示符，然后键入以下命令</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tsc helloworld.ts</font></font></strong></p>

<ol start="4">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次运行命令</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点helloworld.js</font></font></strong></p>

<ol start="5">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果将显示在控制台上 </font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下命令并全局安装所需的软件包：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npm install -g ts-node<font></font>
npm install -g typescript<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在运行以下命令来执行 TypeScript文件：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>ts-node typescript-file.ts
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何用Typescript做同样的事情</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将</font></font><code>tsc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用表模式下运行</font></font><code>tsc -w -p .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它会产生</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现场的时尚你的文件，这样你就可以运行</font></font><code>node foo.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像正常</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TS节点</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有ts-node：</font></font><a href="https://github.com/TypeStrong/ts-node"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/TypeStrong/ts-node"><font style="vertical-align: inherit;">//github.com/TypeStrong/ts-node</font></a><font style="vertical-align: inherit;">会为您做所有这一切🌹</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
