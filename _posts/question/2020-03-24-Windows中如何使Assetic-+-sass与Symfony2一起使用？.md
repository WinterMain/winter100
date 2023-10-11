---
layout: question
title:  Windows中如何使Assetic + sass与Symfony2一起使用？
date:   2020-03-24T07:31:54.000Z
description: 我试图让Assetic在Symfony 2.0.11中运行，以便将sass用于css文件。我已经在这个问题上摆弄了好几个小时，从我收集到的信息来看，当...
img: 
author: Tom凯
category: question
answer: 0
tags: 窗户 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图让Assetic在Symfony 2.0.11中运行，以便将sass用于css文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在这个问题上摆弄了好几个小时，从我收集到的信息来看，当前的资产版本（1.0.2）搞砸了，无法在Windows中工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图将github上的assetic和asseticBundle更新到最新的Master版本，但是那些需要Symfony 2.1，这带来了很多变化并且不向后兼容（更不用说它也没有正式发布），所以这不是一个选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇</font></font><a href="https://stackoverflow.com/questions/8195114/symfony2-assetics-yui-compressor-on-windows-path-syntax"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于Windows的symfony2 assetics yui压缩程序（路径语法）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了一些很好的信息，但是不幸的是，它建议对资产库进行的更改不足以使其在我的环境中正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还在</font></font><a href="https://github.com/kriswallsmith/assetic/commit/5621cd449b0d85316e5872d672e7e900edc2246c" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/kriswallsmith/assetic/commit/5621cd449b0d85316e5872d672e7e900edc2246c</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><a href="https://github.com/kriswallsmith/assetic/issues/25" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://github.com/kriswallsmith/assetic/issues/25中</font></a><font style="vertical-align: inherit;">找到了一些有趣的地方</font></font><a href="https://github.com/kriswallsmith/assetic/issues/25" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，我所知道的是，我需要更改vendor / assetic / src / Assetic / Util / ProcessBuilder.php，可能需要更改软件包中的其他文件，并可能需要在config.yml文件中添加一些信息（似乎添加了java或sass的路径可能会有帮助）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要的是一个能够获得有效配置的人，可以向我指出我所缺少的内容，或者理想情况下，使该死的东西起作用所需的步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人完成任务吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_____更新：还在挖掘中，距离现在只有3天了：/</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新元素： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1 / php5.3.8可能存在proc_open和数据大于2048字节（根据</font></font><a href="https://bugs.php.net/bug.php?id=60120" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://bugs.php.net/bug.php?id=60120的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
问题），当从git存储库获取symfony时，此问题可能会产生影响（</font></font><a href="https://github.com/symfony/symfony/issues/3216" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https： //github.com/symfony/symfony/issues/3216</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">发出“ git config --global core.autocrlf输入”并从git中重新获取所有内容，使我可以使用php5.3.10而不会崩溃。</font></font></p>

<p>2/ <a href="https://github.com/kriswallsmith/assetic/commit/5621cd449b0d85316e5872d672e7e900edc2246c" rel="nofollow noreferrer">https://github.com/kriswallsmith/assetic/commit/5621cd449b0d85316e5872d672e7e900edc2246c</a> looks like a decent basis. 
I've maded some minor modifications on the paths in Process.php (cf <a href="https://github.com/kriswallsmith/assetic/issues/92" rel="nofollow noreferrer">https://github.com/kriswallsmith/assetic/issues/92</a> ) but I'm not really sure that is relevant.
Anyhow, the command line I get from Assetic at this point works in a shell and outputs the expected css.</p>

<p>3/ sass.bat (located in Ruby193\bin) needs to have absolute path to ruby.exe in order to go a bit further (I learnt that the hard way, you only see the error message if you var_dump and kill the script at the right place!)</p>

<p>Now, things seem a bit better, but still not working with sass (I think it'd work fine with some other filters)
I managed to isolate the issue in Process.php (around line 172) at "$data = fread($pipe, 8192);" : The second time the script passes at this place, with $pipe pointing to the second resource, it never returns... and php gets stuck and has really hard times coming out (I need to kill/restart wamp at least two times to be able to make another test)</p>

<p>I'm really not familiar with proc_open and streams, and I have difficulties understanding what the code is trying to do in there...</p>

<p>I hope this can help the next one trying to have things work, and eventually help my case too.
Still looking for some support on the matter!</p>

<p>_____Update:</p>

<p>Further testing made me realize that I could have "php app/console assetic:dump" work when the sass file was small enough. It seems to me that the actual css rules (excluding variable definitions and mixins) need to me smaller than 4096 bytes with php5.3.10, even less with php 5.3.8. 
That is pointing to the proc_open bug described in <a href="https://bugs.php.net/bug.php?id=60120" rel="nofollow noreferrer">https://bugs.php.net/bug.php?id=60120</a> and <a href="https://bugs.php.net/bug.php?id=51800" rel="nofollow noreferrer">https://bugs.php.net/bug.php?id=51800</a></p>

<p>_____Update:</p>

<p>I tried to install php5.4 to check if it was fixing the issue.
It took me some time to realize the reason this version was not working on my computer is because there is no x64 build yet.
I then installed the 32bits version of wamp, and got php5.4 working with it easily.
End result : proc_open still hangs :(
I'm beginning to be out of ideas here...</p>

<hr>

<h2>Walkthrough:</h2>

<p>So, eventually I got this to work, and thought I'd try to sum the most important steps up for later viewers :</p>

<h3>1. Have Ruby 1.9.3 and compass 0.12 installed</h3>

<p>check <a href="http://rubyinstaller.org/downloads/" rel="nofollow noreferrer">http://rubyinstaller.org/downloads/</a></p>

<p>Update compass to 0.12 with </p>

<pre><code>"gem update --system"
</code></pre>

<p>and then </p>

<pre><code>"gem install compass"
</code></pre>

<h3>2. Alter compiler.rb in compass</h3>

<p>Go to Ruby193\lib\ruby\gems\1.9.1\gems\compass-0.12.0\lib\compass 
in line 10, replace </p>

<pre><code>self.from, self.to = File.expand_path(from), to
</code></pre>

<p>with</p>

<pre><code>self.from, self.to = from.gsub('./', ''), to
</code></pre>

<p>/!\ with some setup, it may be the other way around, but with the setup I'm trying to describe, it goes this way.</p>

<h3>3. point Assetic to the latest version that works with symfony 2.0.11</h3>

<p>edit the deps file like such :</p>

<pre><code>[assetic]<font></font>
    git=http://github.com/kriswallsmith/assetic.git<font></font>
    ;version=v1.0.2<font></font>
    version=ac71449e46bed22c276da26bf54ab2f733b3801d<font></font>
[AsseticBundle]<font></font>
    git=http://github.com/symfony/AsseticBundle.git<font></font>
    target=/bundles/Symfony/Bundle/AsseticBundle<font></font>
    ;version=v1.0.1<font></font>
    version=da4a46ce37557dcf3068b8493b12bdbbe47455e2<font></font>
</code></pre>

<p>/!\ you'll need to remove the references to a specific version in the deps.lock file too !</p>

<p>and issue a "php bin/vendors install". </p>

<h3>4. Change your config.yml</h3>

<p>here's what mine looks like now :</p>

<pre><code># Assetic Configuration<font></font>
assetic:<font></font>
    debug:          %kernel.debug%<font></font>
    use_controller: false<font></font>
    # java: /usr/bin/java<font></font>
    filters:<font></font>
        compass:<font></font>
            bin: e:\outils\Ruby193\bin\compass.bat<font></font>
</code></pre>

<h3>5. Use absolute path in compass.bat/sass.bat</h3>

<p>Go to your Ruby193\bin directory and edit compass.bat to set an absolute path to ruby.exe (do the same with sass.bat while you're at it)</p>

<h3>6. Change the call in template</h3>

<p>Here's what mine looks like now :</p>

<pre><code>{ % stylesheets filter='compass' output='css/*.css'<font></font>
        '@LndBimBundle/Resources/public/css/main.scss'<font></font>
    %}<font></font>
        &lt;link href="{{ asset_url }}" type="text/css" rel="stylesheet" /&gt;<font></font>
    { % endstylesheets %}<font></font>
</code></pre>

<h3>Testing :</h3>

<p>For testing, you can use</p>

<pre><code>php app/console assetic:dump --verbose --no-debug
</code></pre>

<p>That way if you get into an endless loop as I did, you can just ctrl+C, which makes testing way more efficient than in a browser</p>

<p>/!\ You absolutely need to use --no-debug, or you'll end up with a bunch of unwanted lines in your css that look like :</p>

<pre><code>@media -sass-debug-info{filename{font-family:file\:\/\/C\:\/Users\/Mattso\/AppData\/Local\/Temp\/ass9DBF\.tmp\.scss}line{font-family:\0000359}}
</code></pre>

<p>You can use </p>

<pre><code>die($this-&gt;commandline);
</code></pre>

<p>in the run method of</p>

<pre><code>vendor\assetic\src\Assetic\Util\Process.php
</code></pre>

<p>to show you the current command line, and test it.</p>

<p>Mine currently looks like this :</p>

<pre><code>cmd /V:ON /E:ON /C ""e:\outils\Ruby193\bin\compass.bat" "compile" "C:\Users\Mattso\AppData\Local\Temp" "--config" "C:\Users\Mattso\AppData\Local\Temp\ass59BB.tmp" "--sass-dir" "" "--css-dir" "" "C:\Users\Mattso\AppData\Local\Temp\ass59BC.tmp.scss""
</code></pre>

<p>Then you just need to type "php app/console assetic:dump --no-debug" in your cli to create the css files in web\css and refresh your site's page. Et... voila! (hopefully!)</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您可能已经注意到，我使用的是CompassFilter而不是SassFilter。</font><font style="vertical-align: inherit;">那是因为它做同样的事情（甚至更多），并且实际上可以做到我们对它的期望。</font><font style="vertical-align: inherit;">如果有人可以找到如何修复SassFilter的方法，那就太好了。</font><font style="vertical-align: inherit;">同时，我已经花了太多时间在此上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这种疯狂，我已经拉了好几天了，希望这篇文章对其他人的心理健康有所帮助；）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3448篇《Windows中如何使Assetic + sass与Symfony2一起使用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
