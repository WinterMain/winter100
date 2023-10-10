---
layout: question
title:  有没有一种方法可以使npm install（命令）在代理后面工作？
date:   2020-03-20T02:28:40.000Z
description: 了解.npmrc文件中的代理变量，但是它不起作用。尝试避免手动下载所有必需的软件包并进行安装。...
img: 
author: L西里
category: question
answer: 21
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解</font></font><code>.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">的代理变量，</font><font style="vertical-align: inherit;">但是它不起作用。</font><font style="vertical-align: inherit;">尝试避免手动下载所有必需的软件包并进行安装。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西里</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Just open the new terminal and type <code>npm config edit</code> and <code>npm config -g edit</code>. Reset to defaults. After that close terminal, open the new one and type <code>npm --without-ssl --insecure --proxy http://username:password@proxy:8080 install &lt;package&gt;</code> if you need globally just add <code>-g</code>. </p>

<p>It worked for me, hope it`ll work for you :)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Jim</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>when I give without http/http prefix in the proxy settings npm failed even when the proxy host and port were right values. It worked only after adding the protocol prefix. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>In my case, I forgot to set the "http://" in my config files (can be found in C: \Users \ [USERNAME] \ .npmrc) proxy adresses. So instead of having</p>

<pre><code>proxy=http://[IPADDRESS]:[PORTNUMBER]<font></font>
https-proxy=http://[IPADDRESS]:[PORTNUMBER]<font></font>
</code></pre>

<p>I had</p>

<pre><code>proxy=[IPADDRESS]:[PORTNUMBER]<font></font>
https-proxy=[IPADDRESS]:[PORTNUMBER]<font></font>
</code></pre>

<p>Which of course did not work, but the error messages didnt help much either...</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>A lot of applications (e.g. npm) can use proxy setting from user environment variables. </p>

<p>You can just add to your environment following variables <strong>HTTP_PROXY</strong> and <strong>HTTPS_PROXY</strong> that will have the same value for each one</p>

<p><a href="http://user:password@proxyAddress:proxyPort" rel="nofollow noreferrer">http://user:password@proxyAddress:proxyPort</a></p>

<p>For example if you have Windows you can add proxy as follow:</p>

<p><a href="https://i.stack.imgur.com/lYk1X.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/lYk1X.png" alt="How it looks on Windows"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小宇宙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Use below command at cmd or GIT Bash or other prompt</p>

<p>$ npm config set proxy "<a href="http://192.168.1.101:4128" rel="noreferrer">http://192.168.1.101:4128</a>"</p>

<p>$ npm config set https-proxy "<a href="http://192.168.1.101:4128" rel="noreferrer">http://192.168.1.101:4128</a>"</p>

<p>where 192.168.1.101 is proxy ip and 4128 is port. change according to your proxy settings. its works for me.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY乐猴子</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>For me even though python etc will all work though our corporate proxy npm would not.</p>

<p>I tried </p>

<p><code>npm config set proxy http://proxyccc.xxx.ca:8080
npm config set https-proxy https://proxyccc.xxx.ca:8080
npm config set registry http://registry.npmjs.org/</code></p>

<p>as instructed but kept getting the same error.</p>

<p>It was only when I <strong>removed</strong>
<code>https-proxy https://proxyccc.xxx.ca:8080</code>
from the .npmrc file 
that 
npm install electron --save-dev worked</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Tony阿飞</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Try to find .npmrc in C:\Users\.npmrc</p>

<p>then open (notepad), write, and save inside : </p>

<pre><code>proxy=http://&lt;username&gt;:&lt;pass&gt;@&lt;proxyhost&gt;:&lt;port&gt;
</code></pre>

<p>PS : remove "&lt;" and "&gt;" please !!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅猪猪</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>This worked for me.
Set the http and https proxy.</p>

<ul>
<li>npm config set proxy <a href="http://proxy.company.com:8080" rel="noreferrer">http://proxy.company.com:8080</a></li>
<li>npm config set https-proxy <a href="http://proxy.company.com:8080" rel="noreferrer">http://proxy.company.com:8080</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><pre><code>npm config set proxy &lt;http://...&gt;:&lt;port_number&gt;<font></font>
npm config set registry http://registry.npmjs.org/<font></font>
</code></pre>

<p>This solved my problem.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阿飞</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Though i set proxy with config, problem was not solved but after 
This one worked for me:</p>

<blockquote>
  <p>npm --https-proxy <a href="http://XX.AA.AA.BB:8080" rel="noreferrer">http://XX.AA.AA.BB:8080</a> install cordova-plugins</p>
  
  <p>npm --proxy <a href="http://XX.AA.AA.BB:8080" rel="noreferrer">http://XX.AA.AA.BB:8080</a> install </p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小卤蛋</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p>Finally i have managed to solve this problem being behinde proxy with AD authentication. I had to execute: </p>

<pre><code>npm config set proxy http://domain%5Cuser:password@proxy:port/<font></font>
npm config set https-proxy http://domain%5Cuser:password@proxy:port/<font></font>
</code></pre>

<p>It is very important to URL encode any special chars like backshlash or # 
In my case i had to encode</p>

<ol>
<li><code>backshlash</code> with %5C so <code>domain\user will</code> be <code>domain%5Cuser</code></li>
<li><code>#</code> sign with <code>%23%0A</code> so password like <code>Password#2</code> will be <code>Password%23%0A2</code></li>
</ol>

<p>I have also added following settings:</p>

<pre><code>npm config set strict-ssl false<font></font>
npm config set registry http://registry.npmjs.org/<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇猴子米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><code>vim ~/.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的Linux机器中并添加以下内容。</font><font style="vertical-align: inherit;">不要忘记添加</font></font><code>registry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件，因为在很多情况下这会导致故障。</font></font></p>

<pre><code>proxy=http://&lt;proxy-url&gt;:&lt;port&gt;<font></font>
https-proxy=https://&lt;proxy-url&gt;:&lt;port&gt;<font></font>
registry=http://registry.npmjs.org/<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy前端斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用-    </font></font></p>

<pre><code>npm config set proxy http://proxy.company.com:8080<font></font>
npm config set https-proxy http://proxy.company.com:8080<font></font>
npm set strict-ssl=false<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><pre class="lang-none prettyprint-override"><code>$ npm config set proxy http://login:pass@host:port<font></font>
$ npm config set https-proxy http://login:pass@host:port<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在Windows中对我有效：</font></font></p>

<pre><code>npm config set proxy http://domain%5Cuser:pass@host:port
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不在任何域中，请使用：</font></font></p>

<pre><code>npm config set proxy http://user:pass@host:port
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的密码包含特殊字符，例如</font></font><code>"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等，通过他们的URL编码值替换它们。</font><font style="vertical-align: inherit;">例如</font></font><code>"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>%22</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>@</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>%40</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>%3A</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>%5C</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于角色</font></font><code>\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Stafan</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要设置http代理，请</font><font style="vertical-align: inherit;">设置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-g</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志：</font></font></p>

<p><code>sudo npm config set proxy http://proxy_host:port -g
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于https代理，再次确保</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-g</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志：</font></font></p>

<p><code>sudo npm config set https-proxy http://proxy_host:port -g
</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Sam</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管已经有了很多好的建议，但对于我的环境（Windows 7，使用PowerShell）和最新可用的node.js版本（v8.1.2），上述所有方法均无效，除非我遵循</font></font><a href="https://github.com/npm/npm/issues/9401#issuecomment-233606470" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">brunowego</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，请使用以下命令检查设置：</font></font></p>

<pre><code>npm config list
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代理背后的设置：</font></font></p>

<pre><code>npm config set registry http://registry.npmjs.org/<font></font>
npm config set http-proxy http://username:password@ip:port<font></font>
npm config set https-proxy http://username:password@ip:port<font></font>
npm config set proxy http://username:password@ip:port<font></font>
npm set strict-ssl false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以节省时间给某人</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪乐理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否尝试过命令行选项而不是</font></font><code>.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为有些事情</font></font><code>npm --proxy http://proxy-server:8080/ install {package-name}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还看到了以下内容：
</font></font><code>npm config set proxy http://proxy-server:8080/</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如有疑问，请像我一样尝试所有这些命令：</font></font></p>

<pre class="lang-none prettyprint-override"><code>npm config set registry http://registry.npmjs.org/<font></font>
npm config set proxy http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
npm config set https-proxy http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
npm config set strict-ssl false<font></font>
set HTTPS_PROXY=http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
set HTTP_PROXY=http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
export HTTPS_PROXY=http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
export HTTP_PROXY=http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
export http_proxy=http://myusername:mypassword@proxy.us.somecompany:8080<font></font>
<font></font>
npm --proxy http://myusername:mypassword@proxy.us.somecompany:8080 \<font></font>
--without-ssl --insecure -g install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=======</font></font></p>

<h1><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将设置放进去</font></font><code>~/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样您就不必在每次打开新的终端窗口时都担心设置！</font></font></p>

<p>If your company is like mine, I have to change my password pretty often. So I added the following into my ~/.bashrc or ~/.bash_profile so that whenever I open a terminal, I know my npm is up to date!</p>

<ol>
<li><p>Simply paste the following code at the bottom of your <code>~/.bashrc</code> file:</p>

<pre><code>######################<font></font>
# User Variables (Edit These!)<font></font>
######################<font></font>
username="myusername"<font></font>
password="mypassword"<font></font>
proxy="mycompany:8080"<font></font>
<font></font>
######################<font></font>
# Environement Variables<font></font>
# (npm does use these variables, and they are vital to lots of applications)<font></font>
######################<font></font>
export HTTPS_PROXY="http://$username:$password@$proxy"<font></font>
export HTTP_PROXY="http://$username:$password@$proxy"<font></font>
export http_proxy="http://$username:$password@$proxy"<font></font>
export https_proxy="http://$username:$password@$proxy"<font></font>
export all_proxy="http://$username:$password@$proxy"<font></font>
export ftp_proxy="http://$username:$password@$proxy"<font></font>
export dns_proxy="http://$username:$password@$proxy"<font></font>
export rsync_proxy="http://$username:$password@$proxy"<font></font>
export no_proxy="127.0.0.10/8, localhost, 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16"<font></font>
<font></font>
######################<font></font>
# npm Settings<font></font>
######################<font></font>
npm config set registry http://registry.npmjs.org/<font></font>
npm config set proxy "http://$username:$password@$proxy"<font></font>
npm config set https-proxy "http://$username:$password@$proxy"<font></font>
npm config set strict-ssl false<font></font>
echo "registry=http://registry.npmjs.org/" &gt; ~/.npmrc<font></font>
echo "proxy=http://$username:$password@$proxy" &gt;&gt; ~/.npmrc<font></font>
echo "strict-ssl=false" &gt;&gt; ~/.npmrc<font></font>
echo "http-proxy=http://$username:$password@$proxy" &gt;&gt; ~/.npmrc<font></font>
echo "http_proxy=http://$username:$password@$proxy" &gt;&gt; ~/.npmrc<font></font>
echo "https_proxy=http://$username:$password@$proxy" &gt;&gt; ~/.npmrc<font></font>
echo "https-proxy=http://$username:$password@$proxy" &gt;&gt; ~/.npmrc<font></font>
<font></font>
######################<font></font>
# WGET SETTINGS<font></font>
# (Bonus Settings! Not required for npm to work, but needed for lots of other programs)<font></font>
######################<font></font>
echo "https_proxy = http://$username:$password@$proxy/" &gt; ~/.wgetrc<font></font>
echo "http_proxy = http://$username:$password@$proxy/" &gt;&gt; ~/.wgetrc<font></font>
echo "ftp_proxy = http://$username:$password@$proxy/" &gt;&gt; ~/.wgetrc<font></font>
echo "use_proxy = on" &gt;&gt; ~/.wgetrc<font></font>
<font></font>
######################<font></font>
# CURL SETTINGS<font></font>
# (Bonus Settings! Not required for npm to work, but needed for lots of other programs)<font></font>
######################<font></font>
echo "proxy=http://$username:$password@$proxy" &gt; ~/.curlrc<font></font>
</code></pre></li>
<li><p>Then edit the "username", "password", and "proxy" fields in the code you pasted.</p></li>
<li><p>Open a new terminal</p></li>
<li><p>Check your settings by running <code>npm config list</code> and <code>cat ~/.npmrc</code></p></li>
<li><p>Try to install your module using </p>

<ul>
<li><code>npm install __</code>, or </li>
<li><code>npm --without-ssl --insecure install __</code>, or </li>
<li>override your proxy settings by using <code>npm --without-ssl --insecure --proxy http://username:password@proxy:8080 install __</code>. </li>
<li>If you want the module to be available globally, add option <code>-g</code></li>
</ul></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设定</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代理</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>HTTP</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-none prettyprint-override"><code>npm config set proxy http://proxy_host:port
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>HTTPS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有一个，请使用https代理地址</font></font></p>

<pre><code>npm config set https-proxy https://proxy.company.com:8080
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则重用http代理地址</font></font></p>

<pre><code>npm config set https-proxy http://proxy.company.com:8080
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：https-proxy没有</font></font><code>https</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为协议，而是</font></font><code>http</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这样解决了这个问题：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行以下命令：</font></font></p>

<pre class="lang-none prettyprint-override"><code>npm config set strict-ssl false
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将npm设置为使用http而不是https运行：</font></font></p>

<pre class="lang-none prettyprint-override"><code>npm config set registry "http://registry.npmjs.org/"
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我使用以下语法安装软件包：</font></font></p>

<pre class="lang-none prettyprint-override"><code>npm --proxy http://username:password@cacheaddress.com.br:80 install packagename
</code></pre></li>
</ol>

<p><em><font style="vertical-align: inherit;"></font><code>username:password</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果代理不需要您进行身份验证，请</font><font style="vertical-align: inherit;">跳过该</font><font style="vertical-align: inherit;">部分</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我的一个朋友刚刚指出的是，你可以通过设置让NPM背后的代理工作</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BOTH</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HTTP_PROXY和HTTPS_PROXY环境变量，然后正常发出命令   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">故宫安装快车</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT2：正如@BStruthers所评论的那样，请记住，如果包含@，则不能正确地解析包含“ @”的密码，如果将@整个密码放在引号中</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
