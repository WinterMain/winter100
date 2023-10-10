---
layout: question
title:  如何从Compass生成的Sprite图像文件名中删除哈希？
date:   2020-03-27T12:08:16.000Z
description: 指南针使用chunky_png渲染精灵。它将哈希添加到文件的末尾以强制缓存下载新的图像精灵。有没有办法关闭此缓存关闭？...
img: 
author: 十三西门
category: question
answer: 3
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南针使用chunky_png渲染精灵。</font><font style="vertical-align: inherit;">它将哈希添加到文件的末尾以强制缓存下载新的图像精灵。</font><font style="vertical-align: inherit;">有没有办法关闭此缓存关闭？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3797篇《如何从Compass生成的Sprite图像文件名中删除哈希？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一个</font></font><a href="https://stackoverflow.com/a/16478392/277937"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的问题中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以找到更好的解决方案</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好是因为：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本在生成Sprite之前更改名称，而不是之后更改。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于第1点，因此几乎不需要更改</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动生成的文件。</font><font style="vertical-align: inherit;">它从一开始就使用正确的名称生成。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公认的解决方案</font></font><code>cp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用哈希值来生成（复制）生成的sprite，并将其作为副本留在文件系统/存储库中，这是非常糟糕的。</font><font style="vertical-align: inherit;">此外，它仍然被本地仓库所更改，因此您提交了两个相同的文件。</font><font style="vertical-align: inherit;">解决方案可以</font></font><code>mv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改生成的哈希文件名称以清除其中一个，但在这种情况下，每次在</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">使用它时都会生成子画面，</font><font style="vertical-align: inherit;">因此更糟。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><a href="http://compass-style.org/help/tutorials/configuration-reference/" rel="noreferrer"><font style="vertical-align: inherit;">按照其配置参考中的说明在</font></a></font><code>asset_cache_buster :none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> config.rb中进行</font><font style="vertical-align: inherit;">设置</font></font><a href="http://compass-style.org/help/tutorials/configuration-reference/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神无</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尚未使用Sprite进行测试，但是可用于</font></font><code>replace-text-with-dimensions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config.rb：</font></font></p>

<pre><code># disable asset cache buster<font></font>
asset_cache_buster do |http_path, real_path|<font></font>
  nil<font></font>
end<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在发现</font></font><a href="https://gist.github.com/784033" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该罗盘的配置文件在caring.com</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
