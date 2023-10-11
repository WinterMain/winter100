---
layout: question
title:  SASS和Zurb Foundation-令人困惑的安装说明
date:   2020-03-24T06:13:01.000Z
description: 我决定使用Foundation4的Sass版本，因为现在几乎不可能有效地编辑CSS。我按照此处的说明进行操作：http   //foundation....
img: 
author: Gil
category: question
answer: 1
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我决定使用Foundation4的Sass版本，因为现在几乎不可能有效地编辑CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我按照此处的说明进行操作：</font><a href="http://foundation.zurb.com/docs/sass.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://foundation.zurb.com/docs/sass.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//foundation.zurb.com/docs/sass.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些建议我先安装gem（没问题），然后再安装罗盘，然后创建一个项目，这是我在wwwroot中所做的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止一切都很好。</font><font style="vertical-align: inherit;">然后它继续建议我“从Github下载文件（抓住scss /和js /目录）并将它们放入您的项目目录中”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，为什么要以自行车上的一条鱼为名，当命令行的上一步（包括create -r zurb-foundation -using foundation）在我的根目录中创建一个文件夹时，说明会建议我这样做项目-尽管命名不同-是否包含相似的文件（如果不相同）？</font><font style="vertical-align: inherit;">已经存在一个带有“基础”和“供应商”子文件夹的“ javascripts”文件夹，其中包含基本上相同的文件-尽管其中一些文件的大小不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想念什么吗？</font><font style="vertical-align: inherit;">包含的“ index.html”文件引用了“ javascripts”文件夹，所以为什么要包含github中的“ js”？</font><font style="vertical-align: inherit;">当您刚接触该技术时，这非常令人困惑！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照安装说明进行操作后，我现在有了“ foundation.scss”和“ app.scss”文件，它们似乎与一个文件（app.scss）大致相同，因此注释了很多。</font><font style="vertical-align: inherit;">我要使用哪一个？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，这些说明基本上已经过时了。</font><font style="vertical-align: inherit;">看来我不需要来自github的“ js”，但我确实需要“ scss”。</font><font style="vertical-align: inherit;">此scss文件夹的内容看起来像需要进入在创建项目时创建的“ sass”文件夹，并且可以删除“ foundation.scss”文件，因为“ app.scss”是该文件的副本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道基本的“ app.scss”文件从哪里希望到“ @import foundation”，因为在项目的安装/创建过程中没有创建“ foundation”文件夹。</font><font style="vertical-align: inherit;">也许我错过了一些东西，但这一切都很混乱。</font><font style="vertical-align: inherit;">有人可以澄清一下我需要做什么以及可以删除/忽略什么吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3353篇《SASS和Zurb Foundation-令人困惑的安装说明》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有像@jhauraw那样熟练，我确实注意到了其他事情。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过Compass应用程序安装了FOundation。</font><font style="vertical-align: inherit;">作为Compass的新手，我也一直在寻找包含所有各种Foundation SCSS文件的“基础”文件夹。</font><font style="vertical-align: inherit;">当我查看存在的_settings.scss文件时，似乎所有内容都被注释掉了。</font><font style="vertical-align: inherit;">我所了解的（仍然是Compass的新手）是，“基础”文件位于Compass的资源库中。</font><font style="vertical-align: inherit;">需要时，这些文件在生成CSS文件时导入。</font><font style="vertical-align: inherit;">带有所有注释掉字段的_settings.scss文件是替代文件。</font><font style="vertical-align: inherit;">因此，如果删除特定变量或混合的注释，它将覆盖Compass库中隐藏的原始注释。</font><font style="vertical-align: inherit;">编译后的CSS似乎包含了所有需要的东西。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
