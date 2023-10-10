---
layout: post
title:  Ace Editor一款比较好用的展示代码组件
date:   2021-09-06T10:03:13.000Z
description: 最近在做项目需要展示代码片段，我们做的这个项目和eth区块浏览器的项目很像，之前也有用过一些代码展示的三方组件，但感觉会有点臃肿，看了etherscan上发现，...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1630922187403.png
author: Winter
category: blog
answer: 0
tags: 每天学一点
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>最近在做项目需要展示代码片段，我们做的这个项目和eth区块浏览器的项目很像，之前也有用过一些代码展示的三方组件，但感觉会有点臃肿，看了<a href="https://etherscan.io/">etherscan</a>上发现，还是它用的比较清爽也满足开发的需求。</p><p>&nbsp;</p><p>先上图先给大家看看：</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/1/images/1630922187403.png"></figure><p>看了<a href="https://etherscan.io/">etherscan</a>源码，发现他们用的是Ace editor。去看了源码后果断的就用起来了。</p><p>&nbsp;</p><h2>Ace官方文档：<a href="https://ace.c9.io/#nav=about&amp;api=ace">https://ace.c9.io/#nav=about&amp;api=ace</a></h2><p>Ace常用配置：<a href="https://github.com/ajaxorg/ace/wiki/Configuring-Ace">https://github.com/ajaxorg/ace/wiki/Configuring-Ace</a></p><p>&nbsp;</p><p>然后我用VUE封装了一个：</p><pre><code class="language-plaintext">npm install vue2-ace-editor --save</code></pre><p>&nbsp;</p><p>组件代码</p><pre><code class="language-plaintext">&lt;template&gt;
  &lt;editor
    v-model="content"
    class="rounded-5 c-ace-editor" :lang="currentLang" :options="options"
    @init="editorInit"&gt;&lt;/editor&gt;
&lt;/template&gt;

&lt;script&gt;

export default {
  components: {
    editor: require('vue2-ace-editor'),
  },
  props: {
    lang: {
      type: String,
      default: 'javascript',
    },
    value: {
      type: String,
      default: '',
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      content: this.value,
      isReadOnly: this.readOnly,
      currentLang: this.lang,
    };
  },
  computed: {
    options() {
      return {
        showFoldWidgets: true,
        showPrintMargin: false,
        foldStyle: 'markbegin',
        readOnly: this.isReadOnly,
      };
    },
  },
  watch: {
    value(val) {
      this.content = val;
    },
    readOnly(val) {
      this.isReadOnly = val;
    },
    lang(val) {
      this.currentLang = val;
    },
  },
  mounted() {

  },
  methods: {
    editorInit(editor) {
      require('brace/ext/language_tools'); // language extension prerequsite...
      require('brace/mode/javascript'); // language
      require('brace/mode/csharp'); // solidity和c#很像，etherscan用的也是这个模式
      require('brace/mode/json'); // language
      require('brace/theme/chrome');
      require('brace/snippets/javascript'); // snippet

      window.editor = editor;
    },
  },
};
&lt;/script&gt;</code></pre><p>&nbsp;</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
