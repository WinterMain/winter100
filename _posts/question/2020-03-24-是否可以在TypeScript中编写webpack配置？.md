---
layout: question
title:  是否可以在TypeScript中编写webpack配置？
date:   2020-03-24T06:23:52.000Z
description: 我在搜索时看到有webpack的类型。看来我可以用TypeScript写webpack.config.js吗？但是我该怎么办呢？...
img: 
author: LGil
category: question
answer: 2
tags: TypeScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在搜索时看到有webpack的类型。</font><font style="vertical-align: inherit;">看来我可以用TypeScript写webpack.config.js吗？</font><font style="vertical-align: inherit;">但是我该怎么办呢？</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/6912/images/thumbnails/1585031031339.png" data-src="https://www.samyoc.com//uploads/users/6912/images/1585031031339.png" rel="noreferrer"><img src="https://i.stack.imgur.com/GEsxc.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3367篇《是否可以在TypeScript中编写webpack配置？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamPro</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一篇博客文章</font></font><a href="https://rehansaeed.com/writing-your-webpack-configuration-in-typescript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用TypeScript编写Webpack配置”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取全部详细信息，这是TLDR：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案对我不起作用，我还发现该</font></font><code>ts-node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项不支持ES6导入语句。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的最简单的方法是简单地运行TypeScript </font></font><code>tsc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工具将TypeScript转换为JavaScript，然后</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">照常</font><font style="vertical-align: inherit;">运行该</font><font style="vertical-align: inherit;">工具：</font></font></p>

<pre><code>tsc --lib es6 webpack.config.ts<font></font>
webpack --config webpack.config.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他答案一样，这具有不需要安装任何依赖项的附加优点。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奖金最高提示</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack类型是Webpack 1和2语法的混合。</font><font style="vertical-align: inherit;">您可以使用TypeScript来确保仅使用Webpack 2语法，并从Webpack 1语法中删除所有类型。</font><font style="vertical-align: inherit;">我通过创建一些扩展Webpack类型的新类型来做到这一点：</font></font></p>

<pre><code>// webpack.common.ts<font></font>
import * as webpack from "webpack";<font></font>
<font></font>
export type INewLoader = string | webpack.NewLoader;<font></font>
export interface INewUseRule extends webpack.NewUseRule {<font></font>
  use: INewLoader[];<font></font>
}<font></font>
export interface INewLoaderRule extends webpack.NewLoaderRule {<font></font>
  loader: INewLoader;<font></font>
}<font></font>
export type INewRule = INewLoaderRule | INewUseRule |<font></font>
    webpack.RulesRule | webpack.OneOfRule;<font></font>
export interface INewModule extends webpack.NewModule {<font></font>
  rules: INewRule[];<font></font>
}<font></font>
export interface INewConfiguration extends webpack.Configuration {<font></font>
  module?: INewModule;<font></font>
}<font></font>
export interface IArguments {<font></font>
  prod: boolean;<font></font>
}<font></font>
export type INewConfigurationBuilder = (env: IArguments) =&gt; INewConfiguration;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以在Webpack配置中使用以下类型：</font></font></p>

<pre><code>import * as path from "path";<font></font>
import * as webpack from "webpack";<font></font>
import { INewConfiguration, INewConfigurationBuilder } from "./webpack.common";<font></font>
<font></font>
const configuration: INewConfiguration = {<font></font>
  // ...<font></font>
};<font></font>
export default configuration;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您可以像这样将参数传递到您的webpack配置文件：</font></font></p>

<pre><code>import * as path from "path";<font></font>
import * as webpack from "webpack";<font></font>
import { IArguments, INewConfiguration, INewConfigurationBuilder } from "./webpack.common";<font></font>
<font></font>
const configurationBuilder: INewConfigurationBuilder = <font></font>
  (env: IArguments): INewConfiguration =&gt; {<font></font>
    const isDevBuild = !(env &amp;&amp; env.prod);<font></font>
    const configuration: INewConfiguration = {<font></font>
      // ...<font></font>
    };<font></font>
    return configuration;<font></font>
  };<font></font>
export default configurationBuilder;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样将参数传递给webpack：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack --env.prod</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在webpack源代码中找不到任何线索，您可以将</font></font><code>webpack.config.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件直接用作项目的配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，由于TypeScript只是Javascript的超集，因此您始终可以使用TypeScript编写您的脚本</font></font><code>webpack.config.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其转换为有效的Javascript </font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
