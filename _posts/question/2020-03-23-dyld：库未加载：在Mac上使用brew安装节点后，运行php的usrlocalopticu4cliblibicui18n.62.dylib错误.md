---
layout: question
title:  dyld：库未加载：在Mac上使用brew安装节点后，运行php的/usr/local/opt/icu4c/lib/libicui18n.62.dylib错误
date:   2020-03-23T03:34:35.000Z
description: 我使用自制软件（Mojave）安装了节点，之后php停止工作，如果尝试运行，则会出现php -v此错误：php -vdyld  Library no...
img: 
author: 神无
category: question
answer: 18
tags: PHP Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用自制软件（Mojave）安装了节点，之后php停止工作，如果尝试运行，则会出现</font></font><code>php -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误：</font></font></p>

<pre><code>php -v<font></font>
dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.62.dylib<font></font>
  Referenced from: /usr/local/bin/php<font></font>
  Reason: image not found<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试同时卸载节点和icu4c，但问题仍然存在</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装php 7.3之后也遇到了此错误。</font><font style="vertical-align: inherit;">我已经解决了升级我的旧php版本（5.6和7.0，不是来自官方仓库）的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">维护人员已针对当前的icu4c编译了新的php版本。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，PHP 7从0.31升至0.33，问题得以解决。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><a href="https://medium.com/@mahcloud/mac-brew-node-10-upgrade-55d3e910eebb" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关注了这篇文章</font><font style="vertical-align: inherit;">，这似乎是我缺少的难题：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>brew uninstall node@8</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了降级，我不得不从源代码重新编译（MacOS Mojave）</font></font></p>

<pre><code>$ wget https://ssl.icu-project.org/files/icu4c/62.1/icu4c-62_1-src.tgz<font></font>
$ tar xvfz icu4c-62_1-src.tgz<font></font>
$ cd icu/sources<font></font>
$ ./configure<font></font>
$ make<font></font>
$ make install<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其安装旧版本的</font></font><code>icu4c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（预编译的）php可以链接</font><font style="vertical-align: inherit;">的旧版本，</font><font style="vertical-align: inherit;">不如重新编译旧版本的php以链接到更新的库，这更好。</font></font></p>

<pre><code>brew uninstall php@7.2<font></font>
brew install --build-from-source php@7.2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将构建php并将其链接到更新的库。</font><font style="vertical-align: inherit;">我发现</font></font><code>reinstall</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作还不够。</font><font style="vertical-align: inherit;">当目标文件夹已经存在时，新安装将停止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也</font></font><code>brew link --force php@7.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我的环境而努力。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，</font></font><code>brew reinstall nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题已解决-我的问题是运行Elixir / Phoenix，而不是特定于PHP，我认为这是由引起的</font></font><code>brew install postgres</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是重新安装并没有帮助。</font><font style="vertical-align: inherit;">我从</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">中得到它</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Leland的答案对我有用，但是我必须将步骤4和6更改为：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）git checkout -B icu4c-62.1 575eb4b</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6）brew重新安装Formula / icu4c.rb</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Sam</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了问题，因为我的PHP（7.3）版本期望的是icu4c 63，而brew仅安装64。</font></font></p>

<p><a href="https://stackoverflow.com/a/55828190/2000947"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/55828190/2000947</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助我安装了63。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯A</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好像是不可能的链接</font></font><code>icu4c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>brew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新的OS X更新后。</font><font style="vertical-align: inherit;">这使事情变得更有趣。</font><font style="vertical-align: inherit;">我发现对我有用的唯一解决方案：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>icu4c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">62.1 </font><font style="vertical-align: inherit;">下载并编译</font><font style="vertical-align: inherit;">为</font></font><code>/usr/local/icu4c/62.1</code></li>
</ol>

<pre><code>mkdir ~/sources<font></font>
cd ~/sources<font></font>
wget http://download.icu-project.org/files/icu4c/62.1/icu4c-62_1-src.tgz<font></font>
tar xvzf icu4c-62_1-src.tgz<font></font>
cd icu/source/<font></font>
<font></font>
sudo mkdir /usr/local/icu4c/62.1<font></font>
./configure --prefix=/usr/local/icu4c/62.1<font></font>
make<font></font>
sudo make install<font></font>
</code></pre>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接库：</font></font></li>
</ol>

<pre><code>ln -s /usr/local/icu4c/62.1/lib/*.dylib /usr/local/include/
</code></pre>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>DYLD_LIBRARY_PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></li>
</ol>

<pre><code>export DYLD_LIBRARY_PATH=/usr/local/include
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公正</font></font><code>brew remove php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>brew install php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有工作，也没有</font></font><code>brew reinstall php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我的解决方案是：</font></font></p>

<pre><code>brew remove php<font></font>
cd /usr/local/Cellar<font></font>
rm -rf php/<font></font>
brew install php<font></font>
brew doctor<font></font>
brew cleanup<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font><code>php -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给我：</font></font></p>

<pre><code>PHP 7.3.2 (cli) (built: Feb 14 2019 10:08:45) ( NTS )
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>brew update &amp;&amp; brew upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 为我工作</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我解决了：</font></font></p>

<pre><code>brew upgrade node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在MacOS Mojave上，唯一可以解决的方法是 </font></font><code>brew upgrade</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这将升级您的PHP版本。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是有同样的问题。</font><font style="vertical-align: inherit;">升级Homebrew然后进行清理对​​我有用。</font><font style="vertical-align: inherit;">由于软件包版本不匹配，此错误可能对我显示。</font><font style="vertical-align: inherit;">上面的解决方案都不能解决我的错误，但是运行以下自制程序命令可以解决。</font></font></p>

<pre><code>brew upgrade
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这将升级您的所有冲煮包装。</font><font style="vertical-align: inherit;">如果只想升级特定的软件包，请确保特定。</font></font></p>
</blockquote>

<pre><code>brew upgrade // for upgrading all packages -- this is the command I used<font></font>
<font></font>
brew upgrade {package} // for upgrading a specific package<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着</font></font></p>

<pre><code>brew cleanup
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗路易Tom</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看看是否看到相同的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这样，请升级您的节点版本</font></font><code>brew upgrade npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>==&gt; Upgrading 1 outdated package, with result:<font></font>
npm 8.1.2 -&gt; 10.3.0<font></font>
==&gt; Upgrading npm<font></font>
==&gt; Installing dependencies for node: icu4c<font></font>
==&gt; Installing node dependency: icu4c<font></font>
</code></pre>

<p><a href="https://github.com/facebook/react-native/issues/18760#issuecomment-394041484" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">学分</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来，我像@Grey Black一样，必须实际安装icu4c的v62.1。</font><font style="vertical-align: inherit;">没有其他工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><code>brew switch icu4c 62.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当您以前安装62.1时才有效。</font><font style="vertical-align: inherit;">如果没有，则涉及更多的腿部工作。</font><font style="vertical-align: inherit;">Homebrew </font></font><a href="https://stackoverflow.com/q/3987683/3072442"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使得安装</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前版本的公式</font><a href="https://stackoverflow.com/q/3987683/3072442"><font style="vertical-align: inherit;">变得不容易</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的操作方式：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们首先需要对Homebrew存储库进行深度克隆。</font><font style="vertical-align: inherit;">可能还要等一下：</font></font><code>git -C $(brew --repo homebrew/core) fetch --unshallow</code></li>
<li><code>brew log icu4c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟踪引用62.1的提交；</font></font><a href="https://github.com/Homebrew/homebrew-core/commit/575eb4b" rel="nofollow noreferrer"><code>575eb4b</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝招。</font></font></li>
<li><code>cd $(brew --repo homebrew/core)</code></li>
<li><code>git checkout 575eb4b -- Formula/icu4c.rb</code></li>
<li><code>brew uninstall  --ignore-dependencies icu4c</code></li>
<li><code>brew install icu4c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您现在应该具有正确版本的依赖项！</font><font style="vertical-align: inherit;">现在只是...</font></font></li>
<li><code>git reset &amp;&amp; git checkout .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 清理修改后的配方。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这是因为将icu4c升级到了版本63，但我在本地安装的postgres映像仍引用了icu4c 62.1。</font><font style="vertical-align: inherit;">因此，我不得不更改使用的icu4c版本：</font></font></p>

<pre><code> brew info icu4c<font></font>
 brew switch icu4c &lt;version&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所返回的安装版本</font><font style="vertical-align: inherit;">在哪里？</font></font><code>info</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级</font></font><code>macOS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到version </font><font style="vertical-align: inherit;">后，我遇到了同样的问题</font></font><code>10.13.6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我无法运行</font></font><code>composer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令。</font><font style="vertical-align: inherit;">经过一段时间的研究并尝试了各种在线发布的解决方案，然后重新安装php </font></font><code>homebrew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>brew reinstall php@7.1</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Ryan的评论于3月14日添加</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过运行</font></font><code>php -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取</font><font style="vertical-align: inherit;">当前正在使用的版本，</font><font style="vertical-align: inherit;">并获取正确的公式（可以在此处找到：</font></font><a href="https://formulae.brew.sh/formula/php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://formulae.brew.sh/formula/php" rel="noreferrer"><font style="vertical-align: inherit;">//formulae.brew.sh/formula/php</font></a><font style="vertical-align: inherit;">）以替换</font></font><code>@7.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的命令。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，令我惊讶的是该解决方案尚未提出，我觉得这是最简单的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去GitHub上，找到的版本匹配的brewfile的版本</font></font><code>icu4c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你需要和获取文件的原始版本（按照上面的链接，点击</font></font><code>View File</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>Raw</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后只需从该URL重新安装brew。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，version </font></font><code>62.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>brew reinstall https://raw.githubusercontent.com/Homebrew/homebrew-core/575eb4bbef683551e19f329f60456b13a558132f/Formula/icu4c.rb
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
