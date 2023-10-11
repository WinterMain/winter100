---
layout: question
title:  package.json中的tilde（〜）和caret（^）有什么区别？
date:   2020-03-13T08:03:08.000Z
description: 我已经升级到最新的稳定后node和npm，我试过npm install moment --save。它将条目保存在package.json带有脱^字符号前...
img: 
author: 阿飞A
category: question
answer: 18
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经升级到最新的稳定后</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我试过</font></font><code>npm install moment --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将条目保存在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有脱</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字</font><font style="vertical-align: inherit;">符号</font><font style="vertical-align: inherit;">前缀的中。</font><font style="vertical-align: inherit;">以前，它是一个波浪号</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前缀。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要进行这些更改</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tilde </font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和caret有</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">区别</font><font style="vertical-align: inherit;">？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他相比有什么优势？</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1427篇《package.json中的tilde（〜）和caret（^）有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与此问题相关，您可以查看</font></font><a href="https://getcomposer.org/doc/articles/versions.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关版本的Composer文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但简而言之：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">波形版本范围（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">〜</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）-〜1.2.3等于&gt; = 1.2.3 &lt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.3.0</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脱字号版本范围（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）-〜1.2.3等于&gt; = 1.2.3 &lt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.0.0</font></font></strong></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tilde，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将获得补丁程序的自动更新，但次要和主要版本将不会更新。</font><font style="vertical-align: inherit;">但是，如果使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Caret</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则将获得补丁程序和次要版本，但不会获得主版本（重大更改）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tilde版本被认为是“更安全”的方法，但是，如果您使用可靠的依赖项（维护良好的库），则Caret版本不会有任何问题（因为较小的更改不应破坏更改）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能应该查看</font></font><a href="https://stackoverflow.com/questions/33052195/what-are-the-differences-between-composer-update-and-composer-install"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关stackosflow安装和composer更新之间的区别的stackoverflow帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">〜专用于次要版本^指定主要版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果软件包版本为4.5.2，则在更新〜4.5.2时将安装最新的4.5.x版本（MINOR VERSION）^ 4.5.2将安装最新的4.xx版本（MAJOR VERSION）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阳光乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克拉</font></font></strong> <code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括相同主要范围内比特定版本更大的所有物品。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代字号</font></font></strong> <code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在相同的次要范围内包含大于特定版本的所有内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，要指定可接受的最高版本范围为1.0.4，请使用以下语法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修补程序版本：1.0或1.0.x或〜1.0.4 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">次要版本：1或1.x或^ 1.0.4 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要版本：*或x</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关语义版本语法的更多信息，请参见</font></font><a href="https://semver.npmjs.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm semver计算器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://i.stack.imgur.com/7EyGM.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/7EyGM.png" alt="已发布软件包中的npm语义版本"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm文档中的更多内容</font></font><a href="https://docs.npmjs.com/about-semantic-versioning" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于语义版本控制</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本号采用的语法表示每个部分的含义不同。</font><font style="vertical-align: inherit;">语法分为三部分，用点分隔。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">major.minor.patch 1.0.2</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要，次要和补丁表示软件包的不同发行版。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm使用代字号（〜）和脱字符号（^）分别指定要使用的补丁程序和次要版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果看到〜1.0.2，则意味着安装版本1.0.2或最新的修补程序版本（例如1.0.4）。</font><font style="vertical-align: inherit;">如果看到^ 1.0.2，则表示安装版本1.0.2或最新的次要版本或修补程序版本（例如1.1.0）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提尔德（〜）</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要版本是固定的，次要版本是固定的，匹配任何内部版本号</font></font></p>
</blockquote>

<pre><code>"express": "~4.13.3" 
</code></pre>

<p><code>~4.13.3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示它将检查4.13.x，其中x是任何东西，而4.14.0    </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脱字号（^）</font></font></strong> </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要版本是固定的，匹配任何次要版本，匹配任何内部版本号</font></font></p>
</blockquote>

<pre><code>"supertest": "^3.0.0"
</code></pre>

<p><code>^3.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示它将检查3.xx，其中x为任意值</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，这不是一个答案，但似乎被忽略了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克拉范围的说明：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见：</font><a href="https://github.com/npm/node-semver#caret-ranges-123-025-004" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/npm/node-semver#caret-ranges-123-025-004" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/npm/node-semver#caret-ranges-123-025-004</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许所做的更改不会修改[major，minor，patch]元组中最左边的非零数字。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着</font></font><code>^10.2.3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配</font></font><code>10.2.3 &lt;= v &lt; 20.0.0</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为那不是他们的意思。</font><font style="vertical-align: inherit;">从11.xx到19.xx引入版本将破坏您的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为他们的意思是</font></font><code>left most non-zero number field</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">SemVer中没有要求数字字段为一位的任何内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">semver分为3个主要部分，各部分用点分隔。</font></font></p>

<pre><code>major.minor.patch<font></font>
1.0.0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些不同的主要，次要和补丁用于标识不同的发行版。</font><font style="vertical-align: inherit;">浪潮（〜）和脱字号（^）用于标识在软件包版本控制中使用的次要版本和修补程序版本。</font></font></p>

<pre><code>~1.0.1<font></font>
 Install 1.0.1 or **latest patch versions** such as 1.0.2 ,1.0.5<font></font>
^1.0.1<font></font>
 Install 1.0.1 or **latest patch and minor versions** such as 1.0.2 ,1.1.0 ,1.1.1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一班班轮说明</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准版本控制系统是major.minor.build（例如2.4.1）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm根据这些字符检查并修复特定软件包的版本</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">〜</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：主要版本已固定，次要版本已固定，可匹配任何内部版本号</font></font></p>
</blockquote>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：〜2.4.1表示它将检查2.4.x，其中x为任意值</font></font></em></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：主要版本是固定的，匹配任何次要版本，匹配任何内部版本号</font></font></p>
</blockquote>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：^ 2.4.1表示它将检查2.xx，其中x为任意值</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帽子匹配可能会被认为“已损坏”，因为它不会更新</font></font><code>^0.1.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>0.2.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当该软件出现时，使用</font></font><code>0.x.y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本和帽子匹配将只匹配最后一个变化的数字（</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">这是有目的的。</font><font style="vertical-align: inherit;">原因是，随着软件的发展，API迅速变化：有一天，您拥有了这些方法，而有一天，您拥有了这些方法，而旧的方法就不复存在了。</font><font style="vertical-align: inherit;">如果您不想破坏已经在使用您的库的人的代码，则可以增加主要版本：例如</font></font><code>1.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>2.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>3.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，等到您的软件最终100％完成并具有完整功能时，它就会像版本一样</font></font><code>11.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看起来似乎没有什么意义，实际上看起来很混乱。</font><font style="vertical-align: inherit;">另一方面，如果您使用</font></font><code>0.1.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt;</font></font><code>0.2.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>0.3.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本，然后在软件最终100％完成并具有完整功能时将其发布为版本</font></font><code>1.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这表示“此版本是一项长期服务，您可以在生产中继续使用该版本的库代码，而作者不会在明天或下个月更改所有内容，也不会放弃该程序包”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则是：</font></font><code>0.x.y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的软件尚未成熟时</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">版本控制，并在公共API更改时以中间数字递增的方式发布版本（因此人们</font></font><code>^0.1.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会获得</font></font><code>0.2.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新，也不会破坏其代码）。</font><font style="vertical-align: inherit;">然后，当软件成熟时，</font></font><code>1.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次公共API更改</font><font style="vertical-align: inherit;">时将其释放</font><font style="vertical-align: inherit;">并在最左位递增（因此，人们</font></font><code>^1.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会获得</font></font><code>2.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新，并且不会破坏其代码）。</font></font></p>

<pre><code>Given a version number MAJOR.MINOR.PATCH, increment the:<font></font>
<font></font>
MAJOR version when you make incompatible API changes,<font></font>
MINOR version when you add functionality in a backwards-compatible manner, and<font></font>
PATCH version when you make backwards-compatible bug fixes.<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿LEY理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能已经在package.json中看到了波浪号（〜）和插入号（^）。</font><font style="vertical-align: inherit;">它们之间有什么区别？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您执行npm install moment --save时，它将条目插入到带有packaget（^）前缀的package.json中。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代字号（〜）</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用最简单的术语来说，代字号（〜）匹配最新的次要版本（中间数字）。</font><font style="vertical-align: inherit;">〜1.2.3将与所有1.2.x版本匹配，但会错过1.3.0。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尖号（^）</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，插入符号（^）更宽松。</font><font style="vertical-align: inherit;">它将把您更新到最新的主要版本（第一个数字）。</font><font style="vertical-align: inherit;">^ 1.2.3将与任何1.xx版本（包括1.3.0）匹配，但将在2.0.0版本上生效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://medium.com/@Hardy2151/caret-and-tilde-in-package-json-57f1cbbe347b" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://medium.com/@Hardy2151/caret-and-tilde-in-package-json-57f1cbbe347b" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/@Hardy2151/caret-and-tilde-in-package-json-57f1cbbe347b</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tilde〜</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配次要版本，如果您安装了具有1.4.2的软件包，并且在安装后，如果在package.json中将其用作〜1.4.2，则还可以使用版本1.4.3和1.4.4，然后npm install在升级后的项目中将在项目中安装1.4.4。</font><font style="vertical-align: inherit;">但是该软件包有1.5.0可用，因此〜不会安装。</font><font style="vertical-align: inherit;">它称为次要版本。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插入符^</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配主要版本，如果在项目中安装了1.4.2软件包，并且在发布1.5.0版本之后，则^将安装主要版本。</font><font style="vertical-align: inherit;">如果您具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^ 1.4.2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则将不允许安装2.1.0 </font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定版本，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想在每次安装时都更改软件包的版本，则使用不带任何特殊字符的固定版本，例如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ 1.4.2”</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新版本*</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要安装最新版本，请仅在软件包名称前使用*。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">〜蒂尔德：</font></font></strong></p>

<ul>
<li><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">冻结</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要和次要数字。</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您准备接受依赖项中的错误修复但不希望任何潜在的不兼容更改时，可以使用它。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代字号与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新的次要版本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（中间编号）</font><font style="vertical-align: inherit;">匹配</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">〜1.2.3将与所有1.2.x版本匹配，但将错过1.3.0。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tilde（〜）为您提供错误修复版本</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^脱字号：</font></font></strong></p>

<ul>
<li><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 仅冻结主号码。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您密切关注依赖关系并准备好快速更改代码时（如果次要版本不兼容），可以使用它。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将把您更新到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新的主要版本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（第一个数字）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^ 1.2.3将与任何1.xx版本（包括1.3.0）匹配，但将在2.0.0版本上生效。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脱字号（^）也为您提供了向后兼容的新功能。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：合理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接近</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>   ~1.1.5: 1.1.0 &lt;= accepted &lt; 1.2.0
</code></pre>

<p><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>   ^1.1.5: 1.1.5 &lt;= accepted &lt; 2.0.0<font></font>
<font></font>
   ^0.1.3: 0.1.3 &lt;= accepted &lt; 0.2.0<font></font>
<font></font>
   ^0.0.4: 0.0.4 &lt;= accepted &lt; 0.1.0<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是1. [any]。[any]（最新的次要版本）</font></font><br>
<code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是1.2。[any]（最新的补丁）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个伟大的读取是</font></font><a href="http://blog.npmjs.org/post/98131109725/npm-2-0-0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个博客帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上semver如何适用于NPM </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
和他们在做什么，使之匹配</font></font><a href="http://semver.org/spec/v2.0.0.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的semver标准</font></font></a><br>
<a href="http://blog.npmjs.org/post/98131109725/npm-2-0-0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.npmjs.org/post/98131109725/npm-2-0-0</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm允许安装比指定版本更新的软件包。</font><font style="vertical-align: inherit;">使用代字号（</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）可提供错误修复版本，而插入符号（</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）也可提供向后兼容的新功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是旧版本通常不会收到太多的错误修复，因此npm使用caret（</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）作为默认值</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><img src="https://bytearcher.com/articles/semver-explained-why-theres-a-caret-in-my-package-json/promopics/1-table-semver-plain.png" alt="semver表"></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据：</font></font><a href="http://bytearcher.com/articles/semver-explained-why-theres-a-caret-in-my-package-json/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ Semver解释了-为什么我的package.json中有插入符号（^）？” </font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，规则适用于1.0.0以上的版本，并非每个项目都遵循语义版本。</font><font style="vertical-align: inherit;">对于版本0.xx，插入记号仅允许</font><font style="vertical-align: inherit;">更新</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补丁</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即，其行为与代字号相同。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“范围”</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是概念的直观说明：</font></font></p>

<blockquote>
  <p><img src="https://bytearcher.com/goodies/semantic-versioning-cheatsheet/wheelbarrel-with-tilde-caret-white-bg-w1000.jpg" alt="semver图"></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><a href="http://bytearcher.com/goodies/semantic-versioning-cheatsheet/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“语义版本备忘单”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修正主要和次要数字。</font><font style="vertical-align: inherit;">当您准备接受依赖项中的错误修复但不希望任何潜在的不兼容更改时，可以使用它。</font></font></p>

<p><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅固定主号码。</font><font style="vertical-align: inherit;">当您密切关注依赖关系并准备好快速更改代码时（如果次要版本不兼容），可以使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此之外，</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><a href="https://stackoverflow.com/questions/22270244/install-grunt-phonegap-error-no-compatible-version-found-urijs1-12-0#comment33861904_22270244"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由旧版本的NPM，并应谨慎使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这</font></font><code>^</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个很好的默认值，但不是完美的。</font><font style="vertical-align: inherit;">我建议仔细选择和配置对您最有用的semver运算符。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>See the <a href="https://docs.npmjs.com/files/package.json" rel="noreferrer">NPM docs</a> and <a href="https://docs.npmjs.com/misc/semver" rel="noreferrer">semver docs</a></p>

<p>~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. <code>~1.2.3</code> will use releases from 1.2.3 to &lt;1.3.0.</p>

<p>^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. <code>^2.3.4</code> will use releases from 2.3.4 to &lt;3.0.0.</p>

<p>See Comments below.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还想添加官方的npmjs文档，其中描述了所有针对版本特定性的方法，包括问题中提到的方法- </font></font></p>

<p><a href="https://docs.npmjs.com/files/package.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/files/package.json</font></font></a></p>

<p><a href="https://docs.npmjs.com/misc/semver#x-ranges-12x-1x-12-" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/misc/semver#x-ranges-12x-1x-12-</font></font></a></p>

<ul>
<li><code>~version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“大约等同于版本”，请参见</font></font><a href="https://docs.npmjs.com/misc/semver#tilde-ranges-123-12-1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm semver-Tilde Ranges</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><a href="http://semver.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">semver（7）</font></font></a></li>
<li><code>^version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“与版本兼容”请参阅</font></font><a href="https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm semver-插入符号范围</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://semver.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">semver（7）</font></font></a></li>
<li><code>version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 必须完全匹配版本</font></font></li>
<li><code>&gt;version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 必须大于版本</font></font></li>
<li><code>&gt;=version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 等等</font></font></li>
<li><code>&lt;version</code></li>
<li><code>&lt;=version</code></li>
<li><code>1.2.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 1.2.0、1.2.1等，但不是1.3.0</font></font></li>
<li><code>http://sometarballurl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （这可能是将在本地下载并安装的tarball的URL</font></font></li>
<li><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 匹配任何版本</font></font></li>
<li><code>latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 获取最新版本</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的列表并不详尽。</font><font style="vertical-align: inherit;">其他版本说明符包括GitHub网址和GitHub用户仓库，本地路径以及带有特定npm标签的软件包</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
