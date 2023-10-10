---
layout: post
title:  VUE CLI VUE脚手架
date:   2018-11-14T09:29:21.000Z
description: VUE上手是非常快的，而且做项目也是非常的快。得益于VUE兼有各大框架的优点，和独有的创新，那么它也有许多脚手架开源，用的最多的还是VUE CLI这份文档是对应...
img: https://www.samyoc.com/uploads/users/97/images/thumbnails/1542292674704.png
author: 谷若汐
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>VUE上手是非常快的，而且做项目也是非常的快。得益于VUE兼有各大框架的优点，和独有的创新，那么它也有许多脚手架开源，用的最多的还是VUE CLI。</p>

<p>这份文档是对应&nbsp;<code>@vue/cli</code>&nbsp;<strong>3.x</strong>&nbsp;版本的。老版本的&nbsp;<code>vue-cli</code>&nbsp;文档请移步<a href="https://github.com/vuejs/vue-cli/tree/v2#vue-cli--" rel="noopener noreferrer" target="_blank">这里</a>。</p>

<p>Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：</p>

<ul>
	<li>通过&nbsp;<code>@vue/cli</code>&nbsp;搭建交互式的项目脚手架。</li>
	<li>通过&nbsp;<code>@vue/cli</code>&nbsp;+&nbsp;<code>@vue/cli-service-global</code>&nbsp;快速开始零配置原型开发。</li>
	<li>一个运行时依赖 (<code>@vue/cli-service</code>)，该依赖：
	<ul>
		<li>可升级；</li>
		<li>基于 webpack 构建，并带有合理的默认配置；</li>
		<li>可以通过项目内的配置文件进行配置；</li>
		<li>可以通过插件进行扩展。</li>
	</ul>
	</li>
	<li>一个丰富的官方插件集合，集成了前端生态中最好的工具。</li>
	<li>一套完全图形化的创建和管理 Vue.js 项目的用户界面。</li>
</ul>

<p>Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。</p>

<h2><a href="https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6">#</a>该系统的组件</h2>

<p>Vue CLI 有几个独立的部分&mdash;&mdash;如果你看到了我们的<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue" rel="noopener noreferrer" target="_blank">源代码</a>，你会发现这个仓库里同时管理了多个单独发布的包。</p>

<h3><a href="https://cli.vuejs.org/zh/guide/#cli">#</a>CLI</h3>

<p>CLI (<code>@vue/cli</code>) 是一个全局安装的 npm 包，提供了终端里的&nbsp;<code>vue</code>&nbsp;命令。它可以通过&nbsp;<code>vue create</code>&nbsp;快速创建一个新项目的脚手架，或者直接通过&nbsp;<code>vue serve</code>&nbsp;构建新想法的原型。你也可以通过&nbsp;<code>vue ui</code>&nbsp;通过一套图形化界面管理你的所有项目。我们会在接下来的指南中逐章节深入介绍。</p>

<h3><a href="https://cli.vuejs.org/zh/guide/#cli-%E6%9C%8D%E5%8A%A1">#</a>CLI 服务</h3>

<p>CLI 服务 (<code>@vue/cli-service</code>) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个&nbsp;<code>@vue/cli</code>&nbsp;创建的项目中。</p>

<p>CLI 服务是构建于&nbsp;<a href="http://webpack.js.org/" rel="noopener noreferrer" target="_blank">webpack</a>&nbsp;和&nbsp;<a href="https://github.com/webpack/webpack-dev-server" rel="noopener noreferrer" target="_blank">webpack-dev-server</a>&nbsp;之上的。它包含了：</p>

<ul>
	<li>加载其它 CLI 插件的核心服务；</li>
	<li>一个针对绝大部分应用优化过的内部的 webpack 配置；</li>
	<li>项目内部的&nbsp;<code>vue-cli-service</code>&nbsp;命令，提供&nbsp;<code>serve</code>、<code>build</code>&nbsp;和&nbsp;<code>inspect</code>&nbsp;命令。</li>
</ul>

<p>如果你熟悉&nbsp;<a href="https://github.com/facebookincubator/create-react-app" rel="noopener noreferrer" target="_blank">create-react-app</a>&nbsp;的话，<code>@vue/cli-service</code>&nbsp;实际上大致等价于&nbsp;<code>react-scripts</code>，尽管功能集合不一样。</p>

<p><a href="https://cli.vuejs.org/zh/guide/cli-service.html">CLI 服务</a>章节涵盖了它的具体用法。</p>

<h3><a href="https://cli.vuejs.org/zh/guide/#cli-%E6%8F%92%E4%BB%B6">#</a>CLI 插件</h3>

<p>CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以&nbsp;<code>@vue/cli-plugin-</code>&nbsp;(内建插件) 或&nbsp;<code>vue-cli-plugin-</code>(社区插件) 开头，非常容易使用。</p>

<p>当你在项目内部运行&nbsp;<code>vue-cli-service</code>&nbsp;命令时，它会自动解析并加载&nbsp;<code>package.json</code>&nbsp;中列出的所有 CLI 插件。</p>

<p>插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的 preset。我们会在<a href="https://cli.vuejs.org/zh/guide/plugins-and-presets.html">插件和 preset</a>&nbsp;章节进行深入讨论。</p>
</div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
