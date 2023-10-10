---
layout: question
title:  NUXT引入tailwindcss报错Error  Expected an opening square bracket.
date:   2021-01-28T08:48:24.000Z
description: 在nuxt项目中引入tailwindcss后，build正式包时报错ERROR in ./assets/scss/tailwind.scssModule b...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>在nuxt项目中引入tailwindcss后，build正式包时报错</p><pre><code class="language-plaintext">ERROR in ./assets/scss/tailwind.scss
Module build failed (from ./node_modules/extract-css-chunks-webpack-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):
Error: Expected an opening square bracket.
    at /Users/yld/Documents/work/git/viawallet_developer_frontend/assets/scss/tailwind.scss:1:37
    at Root._error (/Users/yld/Documents/work/git/viawallet_developer_frontend/node_modules/postcss-minify-selectors/node_modules/postcss-selector-parser/dist/parser.js:137:24)
    at Root.error (/Users/yld/Documents/work/git/viawallet_developer_frontend/node_modules/postcss-minify-selectors/node_modules/postcss-selector-parser/dist/selectors/root.js:43:25)
    at Parser.error (/Users/yld/Documents/work/git/viawallet_developer_frontend/node_modules/postcss-minify-selectors/node_modules/postcss-selector-parser/dist/parser.js:392:25)
    at Parser.expected (/Users/yld/Documents/work/git/viawallet_developer_frontend/node_modules/postcss-minify-selectors/node_modules/postcss-selector-parser/dist/parser.js:685:25)</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2021.01.28</span>
          </div>
          <div class="discuss-comment"><p>在你的<strong>nuxt.config.js</strong>配置禁用<i><strong>focus-within-pseudo-class</strong></i>功能就可以解决这个问题</p><pre><code class="language-javascript">build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      }
    }
  }</code></pre><p>&nbsp;</p><p>相关问题还可访问<a href="https://github.com/nuxt-community/tailwindcss-module/issues/79#issuecomment-609693459">https://github.com/nuxt-community/tailwindcss-module/issues/79#issuecomment-609693459</a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
