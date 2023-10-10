---
layout: post
title:  react-i18loader
date:   2019-04-09T16:16:58.000Z
description: react-i18loaderreact-i18loader 是一个专门为React和React的相关框架（比如NextJS）定制的一个多语言国际化用于 we...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1554829307483.jpg
author: Winter
category: blog
answer: 1
tags: 工具
topic: 工具
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><strong>react-i18loader</strong></h2><p>react-i18loader 是一个专门为React和React的相关框架（比如NextJS）定制的一个多语言国际化用于&nbsp;webpack 的loader插件&nbsp;</p><h2>它有什么好处?</h2><blockquote><p>1. 你可以在页面中任意的写你的中文</p><p>2. loader会自动提取你的中文并生成JSON翻译文件</p><p>3. 你只需要修改JSON翻译文件中其他的语言值，就可以实现多语言国际化功能&nbsp;</p></blockquote><h2>它是怎么工作的?</h2><ol><li>提取你需要翻译的语言.</li><li>在该文件的同级目录下生成一个相同名称的JSON文件.</li><li>loader会自动的让你的组件或页面引用这个文件.</li><li>你需要改变你的组件或页面中对应的语言值<strong>$lang</strong>来改变多语言.</li></ol><h2>使用</h2><h2>一、简单使用</h2><h3>安装</h3><p>首先使用如下命令安装:&nbsp;</p><pre><code class="language-plaintext"> npm install react-i18loader --save-dev </code></pre><h3>配置 webpack</h3><pre><code class="language-plaintext">{
    test: /\.(js|jsx)$/, // this loader will generate *.lang.json beside *.jsx files
    exclude: [
        /(node_modules)|(\.next)/,
    ],
    use: {
        loader: "react-i18loader",
        options: {
            // The folder where store the language json file.
            // If storePath value is null or empty, the language json file would store corresponding to target js/jsx file
            storePath: "locales",
            languages: ["zh_Hans_CN", "zh_Hant_HK", "en_US"], // The langauages that you App supported
        }
    }
}</code></pre><h3>在你的组件或页面中放置标签&nbsp;<code>@i18n("Page_Or_Component_Name")</code>&nbsp;</h3><p>请看以下例子</p><p>组件：hello.js</p><pre><code class="language-plaintext">import React, { Component } from "react";

@i18n("Hello")
export default class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const msg = "我是简体";
    return &lt;div&gt;
      &lt;p&gt;你好，欢迎使用react-i18loader，发现代码之美&lt;/p&gt;
      &lt;p&gt;{msg}&lt;/p&gt;
    &lt;/div&gt;
  }
}</code></pre><ul><li>你需要改变props中的$lang的值来切换语言，就像下面例子，点击了不同的按钮，改变了组件Hello里$lang的值，从而实现了语言的切换</li></ul><p>页面：index.js</p><pre><code class="language-plaintext">import React, { Component } from "react";
import Hello from "../components/hello";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "zh_Hans_CN"
    };
  }

  changeLang(lang) {
    this.setState({lang});
  }

  render() {
    return &lt;div&gt;
      &lt;button onClick={this.changeLang.bind(this, "zh_Hans_CN")}&gt;简体中文&lt;/button&gt; 
      &lt;button onClick={this.changeLang.bind(this, "zh_Hant_HK")}&gt;繁體中文&lt;/button&gt;
      &lt;button onClick={this.changeLang.bind(this, "en_US")}&gt;English&lt;/button&gt;
      &lt;Hello $lang={this.state.lang}/&gt;
    &lt;/div&gt;
  }
}</code></pre><p>&nbsp;</p><p>注意事项</p><p>1. js语法中可以写任意的中文字符串，字符串仅支持单引号和双引号</p><p>2. jsx语法中</p><p><strong>以下几种情况需注意，loader不支持也不处理以下情况</strong></p><p>(1).&nbsp;&lt;p&gt;你好{this.calMethodl()}&lt;/p&gt;, &nbsp;不支持与表达式一起，引起的后果是将会提取“你好{this.calMethodl()}”作为翻译源</p><p>(2).&nbsp;中文和元素标签不在同一行</p><pre><code class="language-plaintext"> &lt;p&gt;   你好 &lt;/p&gt;</code></pre><p>(3). &lt;p text="你好"&gt;&lt;/p&gt;，props直接设置的文本不支持，<strong>可以改成&lt;p text={"你好"}&gt;&lt;/p&gt;</strong></p><p>&nbsp;</p><h2>二、高级使用</h2><h3>配置 webpack 实现更多定制化功能</h3><pre><code class="language-javascript">{
    // this loader will generate *.lang.json beside *.jsx files
    test: /\.(js|jsx)$/,
    exclude: [
        /(node_modules)|(\.next)/,
    ],
    use: {
        loader: "react-i18loader",
        options: {
            // The folder where store the language json file.
            // If storePath value is null or empty, the language json file would store corresponding to target js/jsx file
            storePath: "locales",

            // Required fields.
            // The langauages that you App supported
            languages: ["zh_Hans_CN", "zh_Hant_HK", "en_US"],


            // Optional fields.
            // The target component object where the loader will put a filed "$lang" in.
            method: "props", // It could be these three values: props, state, func 
            // The content to be translated. And the content must accord with this RegEx, default value is Chinese Simplified
            regText: "[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u2018\u2019\u201c\u201d\uff08\uff09\u3001\uff1f\uff01\ufe15\u300a\u300b]+",
        }
    }
}</code></pre><p><code>1. options中的</code>属性&nbsp;<code><strong>languages</strong></code></p><p>它是一个数组，里面放了你需要将你的页面翻译成目标语言的语言标识，你可以添加任意的语言，比如日语（Ja_JP）等等，名字可以任意取，只要满足你的需求即可。</p><p><code>2. options中的</code>属性&nbsp;<code><strong>regText</strong></code></p><p>它的值是一段正则表达式字符串，根据这个正则字符串，loader可以提取出匹配的文本作为翻译的源头。</p><p>比如你如果想提取出中文，你需要这样设置，那么你就可以在页面中直接写中文，loader会自动帮你提取出来：</p><pre><code class="language-plaintext"> regText: "[\u4e00-\u9fa5\u3002\uff1b\uff0c\uff1a\u2018\u2019\u201c\u201d\uff08\uff09\u3001\uff1f\uff01\ufe15\u300a\u300b]+" </code></pre><p>利用这个正则字符串，你可以实现提取任意的语言。</p><p><code>3. options中的</code>属性&nbsp;<code><strong>method</strong></code>&nbsp;</p><p><code>method属性只能是以下这三个值</code>: <strong>props</strong>, <strong>state</strong>, <strong>func</strong>.它的默认值是&nbsp;<code><strong>props</strong></code>.</p><figure class="table"><table><thead><tr><th>value</th><th>description</th></tr></thead><tbody><tr><td>props</td><td>loader将会添加一个属性$lang至对应的React组件的Props中，你需要更改props.$lang来切换多语言，详情请看set_lang_via_props例子。</td></tr><tr><td>state</td><td>loader将会添加一个属性$lang至对应的React组件的state中，你需要更改state.$lang来切换多语言，详情请看set_lang_via_state例子。</td></tr><tr><td>func</td><td>你需要添加一个方法$getLang() {return XXX; // The language code like 'zh_Hans_CN'&nbsp;}到你的React组件中。&nbsp;详情请看set_lang_via_func例子。</td></tr></tbody></table></figure></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第118篇《react-i18loader》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2019.04.25</span>
          </div>
          <div class="discuss-comment"><p>react-i18loader 运用案例，请访问：<a href="http://doc.samyoc.com" target="_blank">在线API文档 http://doc.samyoc.com</a></p>
</div>
        </div>
        
        <div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment"><p><a href="http://doc.samyoc.com">在线API文档 http://doc.samyoc.com &nbsp;</a>已经和主站整合，请访问https://www.samyoc.com 查看react-i18loader 运用案例</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2020.04.16</span>
            </div>
          </div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
