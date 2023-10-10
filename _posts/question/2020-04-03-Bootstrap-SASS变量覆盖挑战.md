---
layout: question
title:  Bootstrap SASS变量覆盖挑战
date:   2020-04-03T02:46:47.000Z
description: 编辑：这个问题被标记为重复这一个，但看到接近这个答案的末尾增编，看看这个问题不问，什么回答不回答。我正在使用使用Bootstrap 3的Web应用程序...
img: 
author: DavaidTony宝儿
category: question
answer: 4
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题被标记为重复</font></font><a href="https://stackoverflow.com/questions/17089717/how-to-overwrite-scss-variables-when-compiling-to-css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这一个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但看到接近这个答案的末尾增编，看看这个问题不问，什么回答不回答。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用使用Bootstrap 3的Web应用程序。我有一个基本的3层覆盖架构，其中1）Bootstrap的_variables.scss包含核心变量，2）_app-variables.scss包含覆盖Bootstrap的基本应用程序变量_variables.scss和3）_client-variables.scss包含覆盖_app-variables.scss的特定于客户端的自定义项。</font><font style="vertical-align: inherit;">＃2或＃3（或两者）可以是空白文件。</font><font style="vertical-align: inherit;">因此，这是优先顺序：</font></font></p>

<pre><code>_variables.scss // Bootstrap's core<font></font>
_app-variables.scss // App base<font></font>
_client-variables.scss // Client-specific<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理论上很简单，但是由于我将其称为“变量依赖项”而出现了问题-变量定义为其他变量。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>$brand: blue;<font></font>
$text: $brand;<font></font>
</code></pre>

<p>Now, let's say the above variables are defined in _variables.scss. Then let's say in _app-variables.scss, I override only the $brand variable to make it red: <code>$brand: red</code>. Since SASS interprets the code line by line sequentially, it will first set $brand to blue, then it will set $text to blue (because $brand is blue at that point), and finally it will set $brand to red. So the end result is that changing $brand afterwards does not affect any variables that were based on the old value of $brand:</p>

<pre><code>_variables.scss<font></font>
---------------------<font></font>
$brand: blue;<font></font>
$text: $brand; // $text = blue<font></font>
.<font></font>
.<font></font>
.<font></font>
<font></font>
_app-variables.scss<font></font>
---------------------<font></font>
$brand: red; // this does not affect $text, b/c $text was already set to blue above.<font></font>
</code></pre>

<p>But obviously that's not what I want - I want my change of $brand to affect everything that depends on it. In order to properly override variables, I'm currently just making a full copy of _variables.scss into _app-variables.scss, and then making modifications within _app-variables from that point. And similarly I'm making a full copy of _app-variables.scss into _client-variables.scss and then making modifications within _client-variables.scss at that point. Obviously this is less than ideal (understatement) from a maintenance point of view - everytime I make a modification to _variables.scss (in the case of a Bootstrap upgrade) or _app-variables.scss, I have to manual trickle the changes down the file override stack. And plus I'm having to redeclare a ton of variables that I may not even be overriding.</p>

<p>I found out that LESS has what they call "lazy loading" (<a href="http://lesscss.org/features/#variables-feature-lazy-loading" rel="noreferrer">http://lesscss.org/features/#variables-feature-lazy-loading</a>), where the last definition of a variable is used everywhere, even before the last definition. I believe this would solve my problem. But does anyone know a proper variable-override solution using SASS?</p>

<p><strong>ADDENDUM:</strong><br>
Here's one technique I've already thought through: include the files in reverse order, using <code>!default</code> for all variables (this technique was also suggested in the answer to <a href="https://stackoverflow.com/questions/17089717/how-to-overwrite-scss-variables-when-compiling-to-css">this question</a>). So here's how this would play out:</p>

<pre><code>_app-variables.scss<font></font>
---------------------<font></font>
$brand: red !default; // $brand is set to red here, overriding _variables.scss's blue.<font></font>
.<font></font>
.<font></font>
.<font></font>
<font></font>
<font></font>
_variables.scss<font></font>
---------------------<font></font>
$brand: blue !default; // brand already set in _app-variables.scss, so not overridden here.<font></font>
$text: $brand !default; // $text = red (desired behavior)<font></font>
</code></pre>

<p>So that solution is <strong><em>almost</em></strong> perfect. <strong><em>However</em></strong>, now in my override files, I don't have access to variables defined in Bootstrap's _variables.scss, which I would need if I wanted to define my variable overrides (or my own additional custom variables) using other Bootstrap variables. For example, I might want to do: <code>$custom-var: $grid-gutter-width / 2;</code></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3914篇《Bootstrap SASS变量覆盖挑战》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 4的alpha 6中，可以按照mryarbles描述的方式在_custom.scss中覆盖_variables.scss中的所有变量。</font><font style="vertical-align: inherit;">但是，重写不会级联到其他元素，因为包含顺序为：</font></font></p>

<pre><code>@import "variables";<font></font>
@import "mixins";<font></font>
@import "custom";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我将其更改为</font></font></p>

<pre><code>@import "custom";<font></font>
@import "variables";<font></font>
@import "mixins";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它按预期工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>_custom.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BS4 </font></font><a href="https://github.com/twbs/bootstrap/commit/aa8c456a16b83ed041709b45b068788ec2d4d0d4" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dev</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分支中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">已被删除。</font><font style="vertical-align: inherit;">尝试使用以下顺序对您的进口商品重新排序：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设定</font></font></strong></p>

<pre><code>@import "client-variables";<font></font>
@import "app-variables";<font></font>
@import "boostrap";<font></font>
@import "app-mixins";<font></font>
@import "client-mixins";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保将boostrap变量文件的内容复制</font></font><code>_variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>app-variables</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>client-variables</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将！default保留在每个变量旁边，以允许进一步覆盖。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有引导变量均以声明</font></font><code>!default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从Sass </font></font><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Variable_Defaults___default" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果尚未分配变量，则可以通过在值的末尾添加！default标志来分配它们。</font><font style="vertical-align: inherit;">这意味着，如果变量已被分配给它，则不会被重新分配，但是如果它还没有值，它将被赋予一个值。</font></font></p>
</blockquote>

<ul>
<li>Bootstrap will respect all variables already defined on top making the <code>app_variables</code> with higher priority and <code>client_variables</code> with highest priority.</li>
<li>You need to copy all the variable declarations from bootstrap <code>_variables</code> into <code>app-variables</code> and <code>client-variables</code> so you can have a custom variable as you wanted. (Disadvantage is that it is harder to maintain on every bootstrap update)</li>
<li>All variables are now available in your <code>app-mixins</code> and <code>client-mixins</code></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Bootstrap 4或bootstrap-sass，所有变量都在_variables.scss中使用！default标志进行设置。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果在包含引导程序的_variables.scss之前设置了变量，则在包含该变量时，将忽略_variables.scss中的值。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的Sass入口文件可能看起来像这样...</font></font></p>

<p><code>
    @import "bootstrap-overrides";
    @import "bootstrap/scss/bootstrap-flex";
    @import "mixins/module";
</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p>Solved, but I don’t know from which version this works. I <em>believe</em> the solution could have always been available. Tested on:</p>

<pre><code>&gt; sassc --version<font></font>
<font></font>
sassc: 3.2.1<font></font>
libsass: 3.2.5<font></font>
sass2scss: 1.0.3<font></font>
</code></pre>

<p>We are going to use a simplified environment, so filenames do not match with Bootstrap’s.</p>

<hr>

<h2>Challenge</h2>

<p>Given a framework we do not control (for example installed only on the Continuous Integration environment and not available in our machines) that expresses SCSS variables in the following manner:</p>

<pre><code>// bootstrap/_variables.scss<font></font>
<font></font>
$brand-primary: #f00 !default;<font></font>
$brand-warning: #f50 !default;<font></font>
<font></font>
$link-color: $brand-primary !default;<font></font>
</code></pre>

<p>And given a file in that same framework that uses the variables:</p>

<pre><code>// bootstrap/main.scss<font></font>
<font></font>
a:link, a:visited {<font></font>
  color: $link-color;<font></font>
}<font></font>
</code></pre>

<p>The challenge is:</p>

<blockquote>
  <p>Include the framework in your own application’s SCSS in such a way that</p>
  
  <ol>
  <li>variables’ dependencies <strong>in the framework</strong> are preserved and honors;</li>
  <li>you can depend in on the default values but still be able to change the results on the framework dependencies.</li>
  </ol>
</blockquote>

<p>More precisely:</p>

<blockquote>
  <p>Include the framework in your application’s SCSS in such a way that <code>$brand-color</code> will always be the inverse of <code>$brand-warning</code>, whatever its value is in the framework.</p>
</blockquote>

<h2>Solution</h2>

<p>The main file would look like this:</p>

<pre><code>// application.scss<font></font>
<font></font>
@import "variables";<font></font>
@import "bootstrap/variables";<font></font>
@import "bootstrap/main";<font></font>
</code></pre>

<p>And your variables file would look like this:</p>

<pre><code>// _variables.scss<font></font>
<font></font>
%scope {<font></font>
  @import "bootstrap/variables";<font></font>
<font></font>
  $brand-primary: invert($brand-warning) !global;<font></font>
}<font></font>
</code></pre>

<h3>Results:</h3>

<pre><code>&gt; sassc main.scss<font></font>
<font></font>
a {<font></font>
  color: blue; }<font></font>
</code></pre>

<h2>Explanation</h2>

<p>The <code>%scope</code> part is not something magic of SCSS, it’s simply a hidden class with the name <code>scope</code>, available exclusively for later extensions with <code>@extend</code>. We are using it just to create a variable scope (hence the name).</p>

<p>Inside the scope we <code>@import</code> the framework’s variables. Because at this moment there’s no value for each variable every variable is created and assigned its <code>!default</code> value.</p>

<p><strong>But here’s the gimmick.</strong> The variables <strong>are not <em>global</em>, but <em>local</em></strong>. We can access them but they are not going to pollute the global scope, the one that will be later used to derive variables inside the framework.</p>

<p>In fact, when we want to define our variables, we want them global, and indeed we use the <code>!global</code> keyword to signal SCSS to store them in the global scope.</p>

<hr>

<h2>Caveats</h2>

<p>There’s one major caveat: <strong>you cannot use your own variables while you define them</strong>.</p>

<p>That means that in this file</p>

<pre><code>%scope {<font></font>
  @import "bootstrap/variables";<font></font>
<font></font>
  $brand-primary: black !global;<font></font>
<font></font>
  @debug $brand-primary;<font></font>
}<font></font>
</code></pre>

<p>The <code>@debug</code> statement will print <strong>the default value</strong> defined in <em>bootstrap/_variables.scss</em>, not <code>black</code>.</p>

<h3>Solution</h3>

<p>Split variables in two parts:</p>

<pre><code>%scope {<font></font>
  @import "bootstrap/variables";<font></font>
<font></font>
  $brand-primary: black !global;<font></font>
<font></font>
  @debug $brand-primary;<font></font>
}<font></font>
<font></font>
@debug $brand-primary;<font></font>
</code></pre>

<p>The second <code>@debug</code> will indeed correctly print <code>black</code>.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
