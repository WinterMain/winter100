---
layout: question
title:  将HTML + CSS转换为PDF \[关闭\]
date:   2020-03-13T09:24:08.000Z
description:                                                                          ...
img: 
author: 老丝阿飞
category: question
answer: 29
tags: php PHP
topic: PHP
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭。</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题是</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题外话</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b> <a href="/posts/391005/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使其</font><font style="vertical-align: inherit;">成为Stack Overflow </font></font><a href="/help/on-topic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2016-10-19 18：25：12Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个HTML（不是XHTML）文档，可以在Firefox 3和IE 7中很好地呈现。它使用相当基本的CSS对其进行样式设置，并在HTML中很好地呈现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在正在寻找一种将其转换为PDF的方法。</font><font style="vertical-align: inherit;">我试过了：</font></font></p>

<ul>
<li><a href="https://github.com/dompdf/dompdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOMPDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：表格有很大的问题。</font><font style="vertical-align: inherit;">我考虑了我的大型嵌套表并对其进行了帮助（在此之前，它只消耗了128M的内存然后就死了-这就是我对php.ini中的内存的限制），但是它使表完全混乱，并且似乎没有得到图片。</font><font style="vertical-align: inherit;">这些表只是基本的东西，带有一些边框样式，以便在各个点添加一些线；</font></font></li>
<li><a href="https://github.com/spipu/html2pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML2PDF和HTML2PS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：实际上，我很幸运。</font><font style="vertical-align: inherit;">它呈现了一些图像（所有图像都是Google Chart URL），并且表格格式要好得多，但是似乎存在一些我尚未发现的复杂性问题，并且一直死于未知的node_type（）错误。</font><font style="vertical-align: inherit;">不知道从这里去哪里；</font><font style="vertical-align: inherit;">和</font></font></li>
<li><a href="http://www.msweet.org/projects.php?Z1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Htmldoc</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这似乎在基本HTML上可以正常工作，但是几乎不支持CSS，因此您必须使用HTML进行所有操作（我没有意识到在Htmldoc-land还是2001年……），所以对我来说毫无用处。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了一个名为Html2Pdf Pilot的Windows应用程序，该应用程序实际上做得相当不错，但是我需要的东西至少要在Linux上运行，并且最好在Web服务器上通过PHP按需运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我缺少什么，或者如何解决此问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1481篇《将HTML + CSS转换为PDF \[关闭\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是</font></font><a href="http://code.google.com/p/flying-saucer/" rel="nofollow"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Java</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以完成以下任务：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">飞碟采用XML或XHTML并对其应用CSS 2.1兼容的样式表，以便呈现为PDF</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP</font></font></strong><font style="vertical-align: inherit;"></font><code>system()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似的调用</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">PHP中</font></strong><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尽管它要求</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的格式正确</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML到PDF的转换是否真的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用PHP在服务器端进行？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚遇到</font></font><a href="http://parall.ax/products/jspdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsPDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是使用HTML5 / JavaScript的客户端解决方案。</font><font style="vertical-align: inherit;">MIT许可的</font></font><a href="https://github.com/MrRio/jsPDF" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码也在GitHub上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网络API</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人总是在搜索此类内容，则有一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站，可让您将html代码和页面转换为pdf。</font><font style="vertical-align: inherit;">还有一个（很小）的api，可让您从网址获取pdf文件。</font></font></p>

<p><a href="http://simplehtmltopdf.com" rel="nofollow"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里检查</font></font></strong></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Harry</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试了许多不同的PHP库。</font><font style="vertical-align: inherit;">我尝试过的所有清单。</font><font style="vertical-align: inherit;">在我看来，</font></font><a href="http://www.tcpdf.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TCPDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库是最佳的性能/可用性折衷方案。</font><font style="vertical-align: inherit;">安装和使用非常简单，在中小型应用程序中也具有良好的性能。</font><font style="vertical-align: inherit;">如果您需要高性能和非常大的PDF文档，请使用</font></font><a href="http://framework.zend.com/manual/1.12/en/zend.pdf.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Zend_PDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块，但准备好进行编码！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗西门小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TCPDF可以正常工作，没有依赖关系，是免费的，并且不断地修正。</font><font style="vertical-align: inherit;">如果提供的HTML / CSS内容格式正确，则速度合理。</font><font style="vertical-align: inherit;">我通常会生成50-300 kB的HTML输入（包括CSS），并在1-3秒内获得10-15 PDF页面的PDF输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我强烈建议</font><font style="vertical-align: inherit;">在将任何内容发送到TCPDF之前，将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整洁的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库用作HTML漂亮的格式化程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Sam神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">精细渲染没有任何意义。</font><font style="vertical-align: inherit;">可以验证吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论输入有多糟糕，所有浏览器都将尽其所能在屏幕上显示某些内容。</font><font style="vertical-align: inherit;">当然，他们不会做同样的事情。</font><font style="vertical-align: inherit;">如果您想要与FireFox相同的渲染，则可以使用其渲染引擎。</font><font style="vertical-align: inherit;">有PDF生成器。</font><font style="vertical-align: inherit;">但是，这是一项艰巨的工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管已经提供了许多解决方案，但我还是建议以下两种：</font></font></p>

<ol>
<li><a href="http://www.htm2pdf.co.uk" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTM2PDF-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了将HTML转换为PDF的API，还提供了PHP SDK，这使得在PHP中实现起来非常容易。</font><font style="vertical-align: inherit;">它提供了在欧洲，亚洲和美国的服务器位置选择</font></font></li>
<li><a href="http://pdfmyurl.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDFmyURL-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了一个API，该URL也可以将URL和HTML转换为PDF，其功能与HTM2PDF大致相同，但是可以在负载平衡的环境下工作，并且已经使用了更长的时间</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个API与前面提到的所有解决方案的不同之处在于-除了使用CSS和JavaScript将HTML转换为PDF外，它还提供PDF权限管理，水印和加密。</font><font style="vertical-align: inherit;">因此，对于那些想要踏踏实实地工作的人来说，这是一个一体化的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我为Kaiomi（一家同时经营这两个网站的公司）工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙神无伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我开发了一个公共API，用于从网页构建PDF文件。</font><font style="vertical-align: inherit;">它有一个很好的PHP客户端类，使其非常易于使用。</font><font style="vertical-align: inherit;">它使用wkhtmltopdf将PDF呈现在云中。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML不需要任何特殊的东西。</font><font style="vertical-align: inherit;">在images / css / js链接中不需要绝对URL。</font><font style="vertical-align: inherit;">也可以在本地主机（开发计算机）上工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，该服务在4个Azure区域具有终结点：美国东部，美国西部，欧盟北部，东南亚。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于它使用专有协议将网页内容发送到API以转换为PDF，因此速度很快。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是可靠的，因为所有端点都是负载平衡的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费帐户可用于测试或低使用率。</font><font style="vertical-align: inherit;">网站上的详细信息：</font></font></p>

<p><a href="https://rotativahq.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://rotativahq.com</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您可以在将文件交给转换器之前尝试使用Tidy。</font><font style="vertical-align: inherit;">如果某个渲染器在某些HTML问题（例如未关闭的标签）上感到窒息，则可能会有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green猿古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议按此顺序使用TCPDF或DOMPDF。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不认为php类是用CSS渲染xHtml页面的最佳选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的CSS规则出台后会发生什么？</font><font style="vertical-align: inherit;">（很快的CSS 3.0 ...）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，呈现html页面的最佳方法是浏览器。</font><font style="vertical-align: inherit;">Firefox 3.0可以本机以pdf格式“打印”，因此必须开发一个扩展（命令行打印）来使用它。</font></font><a href="http://torisugari.googlepages.com/commandlineprint2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里您会找到它。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，还是有很多problmes runninr火狐</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一个PDF转换...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我认为wkhtmltopdf是最好的（野生动物园浏览器使用的），速度快，速度快，很棒。</font><font style="vertical-align: inherit;">是的，还有开源... 
 </font></font><a href="http://code.google.com/p/wkhtmltopdf/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看吧</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一NearEva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你有机会到命令行很可能使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PhantomJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><code>PDF</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从一个</font></font><code>URL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（远程或本地）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它确实运行良好，并且是免费的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下</font><font style="vertical-align: inherit;">为这个确切问题制作的</font></font><a href="https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就成本而言，在许多情况下使用Web服务（API）可能是更明智的方法。</font><font style="vertical-align: inherit;">此外，通过外包此流程，您可以减轻自己的基础架构/后端负担，并且-如果您使用的是信誉良好的服务-确保与调整Web标准，正常运行时间，较短的处理时间和快速的内容交付兼容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经对当前市场上的大多数Web服务进行了一些研究，请在下面找到我认为值得在此线程上提及的API，这些API以价格/价值比为基础进行排序。</font><font style="vertical-align: inherit;">它们都提供了预先编写的PHP类和包。</font></font></p>

<ol>
<li><a href="https://pdflayer.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pdflayer.com-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">费用：$-质量：☆☆☆☆</font></font></li>
<li><a href="http://docraptor.com">docraptor.com</a> - Cost: $$$ - Quality: ☆☆☆☆☆</li>
<li><a href="http://pdfcrowd.com">pdfcrowd.com</a> - Cost: $$ - Quality: ☆☆☆</li>
</ol>

<p><strong>Quality:</strong></p>

<p>Having the high-quality engine <code>PrinceXML</code> as a backbone, <a href="http://docraptor.com">DocRaptor</a> clearly offers the best PDF quality,  returning highly polished and well converted PDF documents. However, the <a href="https://pdflayer.com">pdflayer API</a> service gets pretty close here. <a href="http://pdfcrowd.com">Pdfcrowd</a> does not necessarily score with quality, but with processing speed. </p>

<p><strong>Cost:</strong></p>

<p><strong>pdflayer.com</strong> - As indicated above, the most cost-effective option here is pdflayer.com, offering an entirely free subscription plan for 100 monthly PDFs and premium subscriptions ranging between $9.99-$119.99. <em>The price for 10,000 monthly PDF documents is $39.99.</em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docraptor.com-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供7天的免费试用期。</font><font style="vertical-align: inherit;">高级订阅计划的价格从15美元到2250美元不等。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每月10,000个PDF文档的价格约为$ 300.00。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pdfcrowd.com-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费</font><font style="vertical-align: inherit;">提供</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一次</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 100个PDF </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">高级订阅计划的价格从$ 9- $ 89不等。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每月10,000个PDF文档的价格约为$ 49.00。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用了所有这三个函数，而本文旨在帮助任何人决定而不必为所有这些函数付费。</font><font style="vertical-align: inherit;">编写本文并不是为了支持任何一种产品，我与任何一种产品都不隶属。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经很老了，但是还没有人提到</font></font><a href="http://cutycapt.sourceforge.net/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CutyCapt，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我会:)</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卡蒂·卡普特</font></font></strong></p>

<blockquote>
  <p><a href="http://cutycapt.sourceforge.net/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CutyCapt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个小型的跨平台命令行实用程序，用于将WebKit的网页呈现捕获为各种矢量和位图格式，包括SVG，PDF，PS，PNG，JPEG，TIFF，GIF和BMP</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西里神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">达里尔·海因（Darryl Hein）在上面提到的</font></font><a href="http://www.tecnick.com/public/code/cp_dpage.php?aiocp_dp=tcpdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TCPDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是一个好主意。</font><font style="vertical-align: inherit;">Nicola Asuni的代码非常方便且强大。</font><font style="vertical-align: inherit;">唯一的杀手是，如果您计划将PDF文件与生成的PDF合并，则不具备这些功能。</font><font style="vertical-align: inherit;">您将必须创建PDF，然后使用Sid Steward（www.pdflabs.com/tools/pdftk-the-pdf-toolkit/）的PDFTK将其合并。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">江山如画</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试获取最新的每晚</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dompdf</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本-我使用的是较旧的版本，这是非常糟糕的资源消耗，并且花了很多时间才能呈现我的pdf。</font><font style="vertical-align: inherit;">从</font></font><a href="http://eclecticgeek.com/dompdf/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抢了一个晚上</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成PDF只花了几秒钟的时间，并且与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PrinceXML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Docraptor</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样好呈现</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">自从我上次使用它以来，</font><font style="vertical-align: inherit;">似乎他们已经认真优化了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dompdf</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于Zend的devzone的教程，内容涉及从php生成pdf（</font></font><a href="http://devzone.zend.com/article/1254-PDF-Generation-Using-Only-PHP---Part-1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第1 </font></font></a><font style="vertical-align: inherit;"></font><a href="http://devzone.zend.com/article/1255-PDF-Generation-Using-Only-PHP---Part-2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><a href="http://devzone.zend.com/article/1255-PDF-Generation-Using-Only-PHP---Part-2" rel="noreferrer"><font style="vertical-align: inherit;">第2部分</font></a><font style="vertical-align: inherit;">），而没有任何外部库。</font><font style="vertical-align: inherit;">我从未实现过这种解决方案，但是由于它都是php，因此您可能会发现它更易于实现和调试。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML2PDF和html2ps的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初在开幕帖子中提到的在谈论2009年的包装这个</font></font><a href="http://tufat.com/html2ps-and-html2pdf/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环节</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是有更好的</font></font><a href="http://html2pdf.fr/en/default" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML2PDF</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它基于TCPDF，尽管部分使用法语。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使表的页眉或页脚在页面上重复，并具有页码和总页数。</font><font style="vertical-align: inherit;">查看</font></font><a href="http://html2pdf.fr/en/example" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经使用了三年多，并推荐它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，如果您想找到一个完美的XHTML + CSS到PDF转换器库，那就算了。</font><font style="vertical-align: inherit;">这是不可能的。</font><font style="vertical-align: inherit;">因为就像找到一个完美的浏览器（XHTML + CSS渲染引擎）一样。</font><font style="vertical-align: inherit;">我们有一个吗？</font><font style="vertical-align: inherit;">IE或FF？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在DOMPDF方面取得了一些成功。</font><font style="vertical-align: inherit;">事实是，您必须修改HTML + CSS代码以配合该库的工作方式。</font><font style="vertical-align: inherit;">除此之外，我还有不错的成绩。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">见下文：</font></font></p>

<p><a href="http://www.nutquote.com/quote/William_Shakespeare/1/simple" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始HTML</font></font></a></p>

<p><a href="http://www.converthub.com/htmltopdf.php?html=http://www.nutquote.com/quote/William_Shakespeare/1/simple" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将HTML转换为PDF</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经提到过了，但是我只是想确认一下mpdf是那里最简单，最强大和最免费的HTML到pdf转换器。</font><font style="vertical-align: inherit;">天空真的是极限。</font><font style="vertical-align: inherit;">您甚至可以生成动态的，用户生成的数据pdf。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，一个客户想要一个CMS系统，以便他可以更新他在俱乐部播放的音乐的曲目列表。</font><font style="vertical-align: inherit;">那没问题，但是他还希望用户能够下载播放列表的.pdf，因此该可下载的pdf也必须由cms更新。</font><font style="vertical-align: inherit;">多亏了mpdf，有了一些简单的循环和散布的变量，我才能做到这一点。</font><font style="vertical-align: inherit;">我原本以为要花上几周的时间花了我几分钟。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很棒的</font></font><a href="http://www.smaizys.com/php/mpdf-html-to-pdf-introduction/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助我入门。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="http://www.fpdf.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fpdf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用PHP生成PDF文件。</font><font style="vertical-align: inherit;">到目前为止，对我来说，生成简单的输出效果很好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用</font></font><strong><a href="http://docraptor.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DocRaptor</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>PrinceXML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作“引擎”）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好消息！</font></font><a href="https://github.com/knplabs/snappy"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快活</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Snappy是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常简单的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开源PHP5库，允许从url或html页面生成缩略图，快照或PDF。</font><font style="vertical-align: inherit;">而且...它使用了</font><font style="vertical-align: inherit;">基于Webkit </font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出色</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><strong><a href="http://code.google.com/p/wkhtmltopdf/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wkhtmltopdf</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请享用！</font><font style="vertical-align: inherit;">^ _ ^</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一看</font></font><a href="http://wkhtmltopdf.org/" rel="noreferrer"><code>wkhtmltopdf</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它是开源的，基于webkit且免费。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们</font></font><a href="http://beebole.com/blog/general/convert-html-to-pdf-with-full-css-support-an-opensource-alternative-based-on-webkit/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写了一个小教程</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑（2017）：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果今天要建造一些东西，我不会再走那条路了。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是会改用</font></font><a href="http://pdfkit.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://pdfkit.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
可能会剥离其所有的nodejs依赖关系，以在浏览器中运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签出</font></font><a href="https://tcpdf.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TCPDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它具有一些HTML到PDF功能，可能足以满足您的需求。</font><font style="vertical-align: inherit;">它也是免费的！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鸣人</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了突兀，我尝试了DOMPDF，它工作得很好。</font><font style="vertical-align: inherit;">我使用过</font></font><code>DIV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他块级元素来放置所有内容，我严格将其保留为CSS 2.1，并且播放效果非常好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过一番调查和一般的梳理，该解决方案似乎是</font></font><a href="http://html2pdf.fr/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML2PDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font><a href="https://github.com/dompdf/dompdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOMPDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在表格，边框，甚至是相当复杂的布局方面做</font></font><a href="http://www.easysw.com/htmldoc/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得很</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">糟糕，而</font><a href="http://www.easysw.com/htmldoc/" rel="noreferrer"><font style="vertical-align: inherit;">htmldoc</font></a><font style="vertical-align: inherit;">似乎相当健壮，但几乎完全不了解CSS，并且我不想再为该程序做无CSS的HTML布局。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML2PDF看起来是最有前途的，但是我仍然遇到关于node_type的空引用参数的奇怪错误。</font><font style="vertical-align: inherit;">我终于找到了解决方案。</font><font style="vertical-align: inherit;">基本上，PHP 5.1.x可以在任何大小的字符串上使用正则表达式替换（preg_replace_ *）正常工作。</font><font style="vertical-align: inherit;">PHP 5.2.1引入了名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pcre.backtrack_limit</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的php.ini配置指令</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">此配置参数的作用是限制匹配的字符串长度。</font><font style="vertical-align: inherit;">我不知道为什么要介绍这个。</font><font style="vertical-align: inherit;">默认值选择为100,000。</font><font style="vertical-align: inherit;">为什么价值这么低？</font><font style="vertical-align: inherit;">再次，不知道。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="http://bugs.php.net/bug.php?id=40846" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><a href="http://bugs.php.net/bug.php?id=40846" rel="noreferrer"><font style="vertical-align: inherit;">针对PHP 5.2.1提出了</font></a><font style="vertical-align: inherit;">一个</font><a href="http://bugs.php.net/bug.php?id=40846" rel="noreferrer"><font style="vertical-align: inherit;">错误，</font></a><font style="vertical-align: inherit;">该</font><a href="http://bugs.php.net/bug.php?id=40846" rel="noreferrer"><font style="vertical-align: inherit;">错误</font></a><font style="vertical-align: inherit;">仍将在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两年后</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开放</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令人震惊的是，当超出限制时，替换只是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默默地失败了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">至少如果引发并记录了错误，您将对发生的情况，原因以及为解决此问题而需要进行的更改有所说明。</font><font style="vertical-align: inherit;">但不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我有一个70k的HTML文件可以转换为PDF。</font><font style="vertical-align: inherit;">它需要以下php.ini设置：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pcre.backtrack_limit = 2000000; </font><font style="vertical-align: inherit;">＃可能超出了我的需求，但是可以</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">memory_limit = 1024M; </font><font style="vertical-align: inherit;">是的，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一千兆字节</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">和</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">max_execution_time = 600; </font><font style="vertical-align: inherit;">＃是，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">10分钟</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，精明的读者可能已经注意到我的HTML文件小于100k。</font><font style="vertical-align: inherit;">我能猜出为什么会遇到这个问题的唯一原因是html2pdf在此过程中进行了向xhtml的转换。</font><font style="vertical-align: inherit;">也许这把我接了过来（尽管近50％的膨胀似乎很奇怪）。</font><font style="vertical-align: inherit;">无论如何，以上都是可行的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，html2pdf是一个资源消耗。</font><font style="vertical-align: inherit;">我的70k文件大约需要5分钟，并且至少需要500-600M的RAM才能创建35页的PDF文件。</font><font style="vertical-align: inherit;">不幸的是，到目前为止，下载速度不够快（到目前为止），并且内存使用率使内存使用率处于1000到1的顺序（70k文件的RAM为600M），这是非常荒谬的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这是我想出的最好的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Why don’t you try <a href="http://www.mpdf1.com/" rel="noreferrer">mPDF version 2.0</a>? I used it for creating PDF a document. It works fine.</p>

<p>Meanwhile mPDF is at version 5.7 and it is actively maintained, in contrast to HTML2PS/HTML2PDF</p>

<p>But keep in mind, that the documentation can really be hard to handle. For example, take a look at this page: <a href="https://mpdf.github.io/" rel="noreferrer">https://mpdf.github.io/</a>. </p>

<p>Very basic tasks around html to pdf, can be done with this library, but more complex tasks will take some time reading and "understanding" the documentation. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要提示：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
请注意，此答案写于2009年，可能不是当今2019年最具成本效益的解决方案。如今，在线替代方案要比那时更好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下一些在线服务：</font></font></p>

<ul>
<li><a href="https://pdfshift.io" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDFShift</font></font></a></li>
<li><a href="https://restpack.io/html2pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">休息包</font></font></a></li>
<li><a href="https://pdflayer.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDF层</font></font></a></li>
<li><a href="https://docraptor.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DocRaptor</font></font></a></li>
<li><a href="https://htmlpdfapi.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTMLPDFA​​PI</font></font></a></li>
<li><a href="https://www.html2pdfrocket.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML转PDF火箭</font></font></a></li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看</font></font><a href="http://princexml.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PrinceXML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它不是免费的，但它绝对是最好的HTML / CSS到PDF转换器（但是，您的编程也可能不是免费的，因此，如果它为您节省了10个小时的工作时间，则您可以在家中免费使用（因为您还需要考虑到替代解决方案将需要您使用正确的软件来设置专用服务器）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哦，是的，我是否提到这是第一个（可能也是唯一）具有完整</font></font><a href="http://princexml.com/samples/acid2/acid2.pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ACID2的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HTML2PDF解决方案</font><font style="vertical-align: inherit;">？</font></font></p>

<p><a href="http://princexml.com/samples/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PrinceXML示例</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
