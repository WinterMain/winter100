---
layout: question
title:  如何在Amazon Linux上安装Node.JS
date:   2020-03-20T05:53:15.000Z
description: 我看过有关使用yum安装依赖项，然后从源代码安装Node.JS和NPM的文章。虽然这样做确实可行，但我觉得Node.JS和NPM都应该放在某个公共仓库中。...
img: 
author: 十三逆天
category: question
answer: 12
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看过有关使用yum安装依赖项，然后从源代码安装Node.JS和NPM的文章。</font><font style="vertical-align: inherit;">虽然这样做确实可行，但我觉得Node.JS和NPM都应该放在某个公共仓库中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在AWS Amazon Linux上的一个命令中安装Node.JS和NPM？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2498篇《如何在Amazon Linux上安装Node.JS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的过程（遵循</font></font><a href="http://iconof.com/blog/how-to-install-setup-node-js-on-amazon-aws-ec2-complete-guide/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当古老的说明并进行了一些更新）：  </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查git是否已安装</font></font><code>git --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或通过以下方式安装：</font></font><br>
<code>sudo yum install git</code>  </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装gcc和openssl：</font></font><br>
<code>sudo yum install gcc-c++ make</code><br>
<code>sudo yum install openssl-devel</code> </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将git repo克隆到一个名为</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您可以稍后删除）的目录中：</font></font><br>
<code>git clone https://github.com/nodejs/node.git</code>  </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="https://github.com/nodejs/node/releases" rel="noreferrer"><font style="vertical-align: inherit;">https://github.com/nodejs/node/releases上</font></a><font style="vertical-align: inherit;">确定所需的节点版本</font></font><a href="https://github.com/nodejs/node/releases" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到刚刚创建的节点目录并安装节点</font></font><br>
<code>cd node</code><br>
<code>git checkout v6.1.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-将所需的版本放在</font></font><code>v</code><br>
<code>./configure</code><br>
<code>make</code><br>
<code>sudo make install</code>  </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试该节点安装/使用工作要么</font></font><code>node --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或简单地</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（经由出口节点</font></font><code>process.exit()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>^C</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">X 2或</font></font><code>^C</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><code>exit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查npm版本：</font></font><code>npm --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并根据需要更新</font></font><code>sudo npm install -g npm</code>  </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可选：使用以下命令删除</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font></font><code>rm -r node</code></li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">笔记：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案无效，因为</font></font><code>sudo yum install nodejs --enablerepo=epel-testing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回了错误：</font></font><code>No package nodejs available.</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
... and </font></font><code>sudo yum install nodejs --enablerepo=epel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即不带</font></font><code>-testing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）仅给出了非常旧的版本。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经安装了旧版本的节点，则可以使用以下命令将其删除：</font></font><br>
<code>sudo npm uninstall npm -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   ...因为npm可以自行卸载</font></font><br>
<code>sudo yum erase nodejs</code><br>
<code>sudo rm -f /usr/local/bin/node</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
（</font></font><code>sudo yum rm nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在接受的答案中，该</font></font><code>rm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令无效，</font><font style="vertical-align: inherit;">因为</font><font style="vertical-align: inherit;">不是有效的yum命令，请参见</font></font><code>yum --help</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过</font></font><code>git clone git://github.com/nodejs/node.git</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font><font style="vertical-align: inherit;">克隆节点存储库，</font></font><code>git clone https://github.com/nodejs/node.git</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您可能会遇到各种错误（请参阅</font></font><a href="https://gist.github.com/grawity/4392747" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经有</font></font><code>/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前安装</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">目录，请在使用git clone命令之前将其删除（否则会发生冲突）：</font></font><br>
<code>rm -r node</code>  </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在使用任何</font></font><code>sudo npm...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令时</font><font style="vertical-align: inherit;">都遇到麻烦</font><font style="vertical-align: inherit;">-例如</font></font><code>sudo: npm: command not found</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或在没有sudo的情况下安装节点软件包有权限问题，请编辑</font></font><code>sudo nano /etc/sudoers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并添加</font></font><code>:/usr/local/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到该行的末尾，以</font></font><code>Defaults secure_path = /sbin:/bin:/usr/sbin:/usr/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其读取</font></font><code>Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin</code></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像其他人一样，被接受的答案也给了我一个过时的版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是另一种效果很好的方法：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>$ curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -<font></font>
$ yum -y install nodejs<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将12.x替换为另一个版本，例如10.x，8.x等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="https://github.com/nodesource/distributions/tree/master/rpm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeSource Github页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上查看所有可用版本</font><font style="vertical-align: inherit;">，并根据需要从那里拉出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您可能需要</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据环境</font><font style="vertical-align: inherit;">运行使用</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些希望在Ansible中运行被接受的答案而无需进一步搜索的人，我将任务发布在此处，以方便和将来参考。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案建议：</font><a href="https://stackoverflow.com/a/35165401/78935"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://stackoverflow.com/a/35165401/78935"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/35165401/78935</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效任务</font></font></p>

<pre><code>tasks:<font></font>
  - name: Setting up the NodeJS yum repository<font></font>
    shell: curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -<font></font>
    args:<font></font>
      warn: no<font></font>
  # ...<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过将安装的软件包重新安装到当前版本来更新/安装节点，这可以在进行更新的同时避免很多错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是由nvm使用以下命令完成的。</font><font style="vertical-align: inherit;">在这里，我将节点版本更新为8，并将所有可用的软件包也重新安装到v8！</font></font></p>

<pre><code>nvm i v8 --reinstall-packages-from=default
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它也适用于AWS Linux实例。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如官方文档中所述，只需简单的2个步骤即可- </font></font></p>

<pre><code>curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -<font></font>
sudo apt-get install -y nodejs<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三老丝</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我安装了Node.js 6.x，并想安装Node.js8.x。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的命令（来自</font></font><a href="https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nodejs的站点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，还有一些额外的步骤来处理yum缓存的数据）：</font></font></p>

<ol>
<li><code>sudo yum remove nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：卸载Node.js 6.x（我不知道这是否必要）</font></font></li>
<li><code>curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -</code> </li>
<li><code>sudo yum clean all</code></li>
<li><code>sudo yum makecache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：重新生成元数据缓存（文档中没有此内容，但是yum一直尝试安装Node.jx 6.x，但未成功，直到我发出了最后两个命令）</font></font></li>
<li><code>sudo yum install nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：安装Node.js 8.x</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是（以root用户身份执行这些操作）</font></font></p>

<pre><code>sudo su root<font></font>
cd /etc<font></font>
mkdir node<font></font>
yum install wget<font></font>
wget https://nodejs.org/dist/v9.0.0/node-v9.0.0-linux-x64.tar.gz<font></font>
tar -xvf node-v9.0.0-linux-x64.tar.gz<font></font>
cd node-v9.0.0-linux-x64/bin<font></font>
./node -v<font></font>
ln -s /etc/node-v9.0.0-linux-x64/bin/node node<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/uLwoq.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/uLwoq.jpg" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Sam</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于v4 LTS版本，请使用：</font></font></p>

<pre><code>curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -<font></font>
yum -y install nodejs<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Node.js v6，请使用：</font></font></p>

<pre><code>curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -<font></font>
yum -y install nodejs<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试在Amazon Linux上安装本机插件时，我也遇到了一些问题。</font><font style="vertical-align: inherit;">如果要执行此操作，还应该安装构建工具：</font></font></p>

<pre><code>yum install gcc-c++ make
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><code>sudo yum install nodejs npm --enablerepo=epel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于</font></font><code>Amazon Linux AMI</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
</font></font><code>
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs
</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
适用于RedHat。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanDavaidSam</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迷迷糊糊地发现，后来很难再次发现。</font><font style="vertical-align: inherit;">后代放在这里：</font></font></p>

<pre><code>sudo yum install nodejs npm --enablerepo=epel
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑3：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2016年7月起，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再适用于nodejs 4（和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都不适用）。</font><font style="vertical-align: inherit;">这个答案（</font></font><a href="https://stackoverflow.com/a/35165401/78935"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/35165401/78935</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）提供了一个真正的单线。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑1：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在寻找nodejs 4，请尝试EPEL测试库：</font></font></p>

<pre><code>sudo yum install nodejs --enablerepo=epel-testing
</code></pre>

<p><strong>EDIT 2:</strong> To upgrade from nodejs 0.12 installed through the EPEL repo using the command above, to nodejs 4 from the EPEL testing repo, please follow these steps:</p>

<pre><code>sudo yum rm nodejs<font></font>
sudo rm -f /usr/local/bin/node<font></font>
sudo yum install nodejs --enablerepo=epel-testing<font></font>
</code></pre>

<p>The newer packages put the node binaries in <code>/usr/bin</code>, instead of <code>/usr/local/bin</code>.</p>

<p><em>And some background:</em></p>

<p>The option <code>--enablerepo=epel</code> causes <code>yum</code> to search for the packages in the EPEL repository.</p>

<blockquote>
  <p>EPEL (Extra Packages for Enterprise Linux) is open source and free community based repository project from Fedora team which provides 100% high quality add-on software packages for Linux distribution including RHEL (Red Hat Enterprise Linux), CentOS, and Scientific Linux. Epel project is not a part of RHEL/Cent OS but it is designed for major Linux distributions by providing lots of open source packages like networking, sys admin, programming, monitoring and so on. Most of the epel packages are maintained by Fedora repo.</p>
  
  <p><em>Via <a href="http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/" rel="noreferrer">http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/</a></em></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎没有人提到这一点。</font><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Amazon Linux 2上</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，加载EPEL的官方方法是：</font></font></p>

<ul>
<li><code>sudo amazon-linux-extras install epel</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...那么您可以：</font></font></p>

<ul>
<li><p><code>sudo yum install nodejs</code> </p>

<p>&nbsp;</p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-linux-ami-basics.html#extras-library" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加程序库（Amazon Linux 2）</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用NVM轻松安装...</font></font></p>

<pre><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash<font></font>
nvm install node<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
