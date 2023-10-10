---
layout: question
title:  Nuxt + Vuetify。如何应用主题颜色
date:   2020-03-23T06:45:50.000Z
description: 我正在使用Nuxt.js + Vuetify.js项目 看文件assets/style/app.styl我们有// Import and defi...
img: 
author: 西里神奇
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Nuxt.js + Vuetify.js项目 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看文件</font></font><code>assets/style/app.styl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有</font></font></p>

<pre><code>// Import and define Vuetify color theme<font></font>
// https://vuetifyjs.com/en/style/colors<font></font>
@require '~vuetify/src/stylus/settings/_colors'<font></font>
$theme := {<font></font>
  primary:     $blue.darken-2<font></font>
  accent:      $blue.accent-2<font></font>
  secondary:   $grey.lighten-1<font></font>
  info:        $blue.lighten-1<font></font>
  warning:     $amber.darken-2<font></font>
  error:       $red.accent-4<font></font>
  success:     $green.lighten-2<font></font>
}<font></font>
<font></font>
// Import Vuetify styling<font></font>
@require '~vuetify/src/stylus/main'<font></font>
<font></font>
.page<font></font>
  @extend .fade-transition<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，更改这些主题颜色不会导致任何更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法如何解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案很简单。</font></font></p>

<p>Two files govern this - <strong><code>nuxt.config.js</code></strong> and <strong><code>node_modules/vuetify/es5/colors.js</code></strong>.</p>

<p>You need to open <strong>nuxt.config.js</strong>, and head over to the <code>vuetify</code> property. The <code>themes</code> property under the <code>vuetify: {...}</code> section lets you map the class names to configured color variables.</p>

<p>Further, to change the values of the colour variables, modify the file <strong>node_modules/vuetify/es5/colors.js</strong>. Here, you define any colors you need to whatever hex color code you want.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
