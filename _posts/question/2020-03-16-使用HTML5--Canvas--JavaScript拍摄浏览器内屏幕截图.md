---
layout: question
title:  使用HTML5 / Canvas / JavaScript拍摄浏览器内屏幕截图
date:   2020-03-16T06:35:45.000Z
description: 使用Google的“报告错误”或“反馈工具”，您可以选择浏览器窗口的区域来创建屏幕截图，并在屏幕上提交有关错误的反馈。Jason Small的屏幕截...
img: 
author: 伽罗卡卡西
category: question
answer: 2
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Google的“报告错误”或“反馈工具”，您可以选择浏览器窗口的区域来创建屏幕截图，并在屏幕上提交有关错误的反馈。</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/18200/images/thumbnails/1584340545788.png" data-src="https://www.samyoc.com//uploads/users/18200/images/1584340545788.png" alt="Google反馈工具截图">
<sub><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jason Small的屏幕截图，张贴在一个</font></font><a href="https://stackoverflow.com/questions/6608327/google-style-send-feedback"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复的问题中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em> </sub></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们是如何做到的？</font><font style="vertical-align: inherit;">Google的JavaScript反馈API已从</font></font><a href="https://ssl.gstatic.com/feedback/api.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载</font><font style="vertical-align: inherit;">，</font></font><a href="http://www.google.com/tools/feedback/intl/en/learnmore.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们对反馈模块的概述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将演示屏幕截图功能。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaAPro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的网络应用现在可以使用</font></font><code>getUserMedia()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下命令</font><font style="vertical-align: inherit;">获取客户端整个桌面的“本地”屏幕截图</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下这个例子： </font></font></p>

<p><a href="https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端（现在必须）必须使用chrome，并且需要在chrome：// flags下启用屏幕捕获支持。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript可以读取DOM并使用来相当准确地表示该DOM </font></font><code>canvas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我一直在研究将HTML转换为画布图像的脚本。</font><font style="vertical-align: inherit;">今天决定将其实现为发送您所描述的反馈。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该脚本允许您创建反馈表单，其中包括在客户端浏览器上创建的屏幕截图以及表单。</font><font style="vertical-align: inherit;">屏幕截图基于DOM，因此可能无法真实表示100％的准确度，因为它无法生成实际的屏幕截图，而是根据页面上的可用信息构建屏幕截图。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要服务器提供任何渲染</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为整个图像都是在客户端的浏览器上创建的。</font><font style="vertical-align: inherit;">HTML2Canvas脚本本身仍处于试验性状态，因为它无法解析我想要的几乎所有CSS3属性，即使有可用的代理，它也不支持加载CORS图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然与浏览器的兼容性非常有限（不是因为无法支持更多功能，只是没有时间使其更受跨浏览器支持）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请在此处查看示例：</font></font></p>

<p><a href="http://hertzen.com/experiments/jsfeedback/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://hertzen.com/experiments/jsfeedback/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
html2canvas脚本现在可以</font></font><a href="https://github.com/niklasvh/html2canvas" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独使用，</font><a href="https://github.com/niklasvh/html2canvas" rel="noreferrer"><font style="vertical-align: inherit;">在此处</font></a><font style="vertical-align: inherit;">可以使用</font><font style="vertical-align: inherit;">一些</font></font><a href="http://html2canvas.hertzen.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
另一个证实Google使用了非常相似的方法（实际上，根据文档，唯一的主要区别是它们的遍历/绘制异步方法）可以在Google反馈小组的Elliott Sprehn的演示文稿中找到：
 </font></font><a href="http://www.elliottsprehn.com/preso/fluentconf/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http： //www.elliottsprehn.com/preso/fluentconf/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
