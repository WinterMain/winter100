---
layout: question
title:  指南针和Sass的Shopify主题
date:   2020-03-23T03:46:38.000Z
description: 有没有人有使用Compass和Sass开发Shopify主题的工作流程？我真的很亲近，我只需要弄清楚如何不在CSS液体标签上制作Sass barf。这...
img: 
author: 村村
category: question
answer: 4
tags: SASS CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有人有使用Compass和Sass开发Shopify主题的工作流程？</font><font style="vertical-align: inherit;">我真的很亲近，我只需要弄清楚如何不在CSS液体标签上制作Sass barf。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我得到的：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中的sass / compass项目（例如：“ / newwebsite /”）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含我的Shopify主题的子目录（“ / newwebsite / newwebsite-theme /”）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南针config.rb，将css，_dir images_dir和javascripts_dir都指向它们的资产文件夹（“ / newwebsite / newwebsite-theme / assets /”）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南针手表</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">shopify_theme gem也可以监视，将主题文件上传到shopify（https://github.com/Shopify/shopify_theme）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑Sass插值（请参阅下面的分析器）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑指南针回调以重命名为.css.liquid</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：需要使用Shopify的液体模板标签时使用罗盘桶，例如背景图片-例如背景：url（“ {{” splash-1.jpg“ | asset_url}}”）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道如何指示Compass / Sass将液体模板标记吐入CSS中？</font><font style="vertical-align: inherit;">如果有，我将拥有扎实的工作流程，可以在本地编辑Sass，然后在shopify商店中立即实现更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：通过使用下面的Hopper的答案为Sass中的Liquid标签，并将Compass输出的.css文件重命名为.css.liquid，我现在有了一个即时工作流，可以使用Compass和Sass设计Shopify主题！</font><font style="vertical-align: inherit;">这是config.rb中的Compass回调的代码：</font></font></p>

<pre><code>on_stylesheet_saved do |filename|<font></font>
  s = filename + ".liquid"<font></font>
  puts "copying to: " + s<font></font>
  FileUtils.cp(filename, s)<font></font>
  puts "removing: " + filename<font></font>
end<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无耻的插头...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为@nick在正确的轨道上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在发送给Shopify之前编译scss更好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于其他找到此答案的人，我认为Quickshot是您正在寻找的工具。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您仍然需要对资产网址进行插值，但是quickshot将自动重新编译您的scss并将结果上传到shopify一步。</font><font style="vertical-align: inherit;">这也使您能够</font></font><code>@include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在scss文件中使用。</font></font></p>

<p><a href="http://quickshot.io/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://quickshot.io/</font></font></a></p>

<p><a href="https://github.com/internalfx/quickshot" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/internalfx/quickshot</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这部分地对我有用，但是我发现Shopify Theme应用程序很多时候不想上载我编辑的.css.liquid文件，因为显然它不认识该文件已被编辑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我解决的是在我的config.rb中使用以下代码，而不是上面问题中的代码：</font></font></p>

<pre><code>on_stylesheet_saved do |filename|<font></font>
  move_to = filename + ".liquid"<font></font>
  puts "Moving from #{filename} to #{move_to}"<font></font>
  FileUtils.mv(filename, move_to)<font></font>
end<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一篇文章，描述了我用来使Compass和Sass与Shopify一起良好工作的方法。</font><font style="vertical-align: inherit;">这与DOMUSNETWORK的答案相同。</font><font style="vertical-align: inherit;">我会详细介绍文件结构。</font></font></p>

<p><a href="http://www.mealeydev.com/blog/shopify-and-sass/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.mealeydev.com/blog/shopify-and-sass/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现保存后删除原始输出文件很有用，因此资产目录中没有多余的非流动文件。 </font></font></p>

<pre><code>on_stylesheet_saved do |filename|<font></font>
  s = filename + ".liquid"<font></font>
  puts "copying to: " + s<font></font>
  FileUtils.cp(filename, s)<font></font>
  puts "removing: " + filename<font></font>
  FileUtils.remove_file(filename)<font></font>
end<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
