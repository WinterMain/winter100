---
layout: question
title:  严重错误：CALL_AND_RETRY_LAST分配失败-内存不足
date:   2020-03-24T01:50:46.000Z
description: 节点版本为 v0.11.13崩溃期间的内存使用情况sudo top未超出3%产生此错误的代码：var request = require('r...
img: 
author: 伽罗Gil
category: question
answer: 13
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点版本为 </font></font><code>v0.11.13</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">崩溃期间的内存使用情况</font></font><code>sudo top</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未超出</font></font><code>3%</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生此错误的代码：</font></font></p>

<pre><code>var request = require('request')<font></font>
var nodedump = require('nodedump')<font></font>
<font></font>
request.get("http://pubapi.cryptsy.com/api.php?method=marketdatav2",function(err,res)<font></font>
{<font></font>
    var data<font></font>
    console.log( "Data received." );<font></font>
    data = JSON.parse(res.body)<font></font>
    console.log( "Data parsed."   );<font></font>
    data = nodedump.dump(data)<font></font>
    console.log( "Data dumped."   ); <font></font>
    console.log( data )<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查是否存在递归堆栈大小问题，我使用--stack-size = 60000参数运行了下一个代码</font></font></p>

<pre><code>var depth = 0;<font></font>
<font></font>
(function recurse() {<font></font>
    // log at every 500 calls<font></font>
    (++depth % 500) || console.log(depth);<font></font>
    recurse();<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并得到了</font></font></p>

<pre><code>264500 <font></font>
Segmentation fault<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我运行了发生致命错误的代码：CALL_AND_RETRY_LAST分配失败-使用相同的--stack-size = 60000参数处理内存不足，并且没有得到</font></font><code>Segmentation fault</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我得出结论</font></font><code>CALL_AND_RETRY_LAST</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与递归堆栈大小没有共同之处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何解决这个问题？</font><font style="vertical-align: inherit;">我相信我的计算机上有足够的可用内存来成功完成此任务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于stackoverflow也有类似的问题，但是这些问题都不是</font></font><code>CALL_AND_RETRY_LAST</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建单独问题的原因。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3177篇《严重错误：CALL_AND_RETRY_LAST分配失败-内存不足》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种替代解决方案是禁用AOT编译器：</font></font></p>

<pre><code>ng build --prod --aot false
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows Machine中运行以下命令 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置NODE_OPTIONS =-max_old_space_size = 4096</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当分配给执行的所需内存小于正在运行的进程所需的内存时，会发生此错误。</font><font style="vertical-align: inherit;">默认情况下，节点内存大小为512 mb，要增加此大小，您需要输入以下命令：</font></font></p>

<pre><code>node --max-old-space-size= &lt;NewSize&gt; &lt;fileName&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小胖小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了几天时间解决这个问题....直到发现某个文件中我要导入一个静态文件，即一个内置文件。</font><font style="vertical-align: inherit;">它使构建永无止境。</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>import PropTypes from "../static/build/prop-types"; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复到真正的源可以解决所有问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分享我的解决方案。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在创建本地反应包时遇到了这个问题。</font><font style="vertical-align: inherit;">我尝试过但不起作用的事情：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">越来越</font></font><code>node --max_old_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令人着迷的</font><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">，这对我来说在本地有效，但在詹金斯身上却失败了，我仍然不确定詹金斯出了什么问题</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提到了一些将节点版本降级到6.9.1的地方，这对我也不起作用。</font><font style="vertical-align: inherit;">我只想把它放在这里，因为它可能对您有用。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的东西：我正在代码中导入一个很大的文件。</font><font style="vertical-align: inherit;">我解决该问题的方法是将其包括在</font></font><code>ignore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表中</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>{<font></font>
    "presets": ["react-native"],<font></font>
    "plugins": ["transform-inline-environment-variables"],<font></font>
    "ignore": ["*.json","filepathToIgnore.ext"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件实际上并不需要转译，将其添加到忽略列表确实有帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install -g increase-memory-limit
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加内存限制</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到％appdata％-&gt; npm文件夹或 </font></font><code>C:\Users\{user_name}\AppData\Roaming\npm</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您喜欢的编辑器中打开ng.cmd</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>--max_old_space_size=8192</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>IF</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ELSE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font><font style="vertical-align: inherit;">，更改后的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng.cmd</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件如下所示：</font></font></p>

<pre><code>@IF EXIST "%~dp0\node.exe" (<font></font>
  "%~dp0\node.exe" "--max_old_space_size=8192" "%~dp0\node_modules\@angular\cli\bin\ng" %*<font></font>
) ELSE (<font></font>
  @SETLOCAL<font></font>
  @SET PATHEXT=%PATHEXT:;.JS;=;%<font></font>
  node "--max_old_space_size=8192" "%~dp0\node_modules\@angular\cli\bin\ng" %*<font></font>
)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾在离子领域遇到此问题，并尝试了许多解决方案，但通过运行此解决方案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于MAC：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
node --max-old-space-size = 4096 / usr / local / bin / ionic cordova build android --prod</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
node --max-old-space-size = 4096 / Users / {您的用户} / AppData / Roaming / npm / node_modules / ionic / bin / ionic cordova构建Windows --prod</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>increase-memory-limit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在已弃用</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">模块。</font><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">2017年8月发布</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js v8.0开始</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我们现在可以使用</font></font><code>NODE_OPTIONS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">env变量来设置</font></font><code>max_old_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局</font><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>export NODE_OPTIONS=--max_old_space_size=4096
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考网址：</font><a href="https://github.com/endel/increase-memory-limit" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/endel/increase-memory-limit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/endel/increase-memory-limit</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这</font></font><code>max_new_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是节点4.1.1中的选项，</font></font><code>max_old_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅靠它并不能解决我的问题。</font><font style="vertical-align: inherit;">我在我的shebang中添加了以下内容，并且这些方法的组合似乎有效：</font></font></p>

<pre><code>#!/usr/bin/env node --max_old_space_size=4096 --optimize_for_size --max_executable_size=4096 --stack_size=4096
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[编辑]：4096 === 4GB内存，如果您的设备内存不足，则可能需要选择较小的容量。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[更新]：运行grunt时还发现了此错误，该错误以前是这样运行的：</font></font></p>

<pre><code>./node_modules/.bin/grunt
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将命令更新为以下命令后，它不再出现内存错误：</font></font></p>

<pre><code>node --max_old_space_size=2048 ./node_modules/.bin/grunt 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>$ sudo npm i -g increase-memory-limit
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从项目的根目录运行：</font></font></p>

<pre><code>$ increase-memory-limit
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此工具将在node_modules / .bin / *文件内的所有节点调用中附加--max-old-space-size = 4096。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js版本&gt; = 8-停用通知</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从NodeJs V8.0.0开始，可以使用option </font></font><code>--max-old-space-size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="https://nodejs.org/api/cli.html#cli_node_options_options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NODE_OPTIONS =选项...</font></font></a></p>

<pre><code>$ export NODE_OPTIONS=--max_old_space_size=4096
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：请参阅注释中有关此警告可能如何影响电子应用程序的警告。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2017年8月发布的v8.0开始，NODE_OPTIONS环境变量公开了此配置（请参阅</font></font><a href="https://medium.com/the-node-js-collection/node-options-has-landed-in-8-x-5fba57af703d" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NODE_OPTIONS已进入8.x！</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">根据该文章，仅允许</font></font><a href="https://github.com/nodejs/node/blob/1f9b1aa011988537caf67685c1c9239de9ad4d57/src/node.cc#L3738-L3767" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在源中列入白名单的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">（注意：不是最新链接！），其中包括</font></font><code>"--max_old_space_size"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请注意，本文的标题似乎有点误导-似乎已经存在NODE_OPTIONS，但我不确定它是否公开了此选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我输入</font></font><code>.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><br>
<code>export NODE_OPTIONS=--max_old_space_size=4096</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，您需要通过使用option增加内存限制来运行应用程序</font></font><code>--max_old_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">默认情况下，Node.js的内存限制为512 mb。</font></font></p>

<pre><code>node --max_old_space_size=2000  server.js 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您查看源代码：</font></font><a href="https://github.com/v8/v8-git-mirror/blob/master/src/heap/heap-inl.h" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github / v8</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，似乎您尝试保留一个很大的对象。根据我的经验，如果您尝试解析一个巨大的JSON对象，则会发生这种情况，但是当我尝试使用JSON和node0.11.13，一切正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要更多</font></font><code>--stack-size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您需要更多的内存：</font></font><code>--max_new_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或</font></font><code>--max_old_space_size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我唯一能给您的提示是尝试另一个JSON解析器和/或尝试将输入格式更改为JSON行而不是仅JSON。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
