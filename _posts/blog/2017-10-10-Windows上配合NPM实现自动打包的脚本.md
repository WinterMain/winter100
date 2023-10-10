---
layout: post
title:  Windows上配合NPM实现自动打包的脚本
date:   2017-10-10T02:55:39.000Z
description: 自动化是快速提高团队效率的一个趋势，在未实现自动化打包部署之前，为提高效率我们也应当尽可能的实现脚本打包，减少错误。Windows上打包和Mac上有些不同，Wi...
img: 
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>自动化是快速提高团队效率的一个趋势，在未实现自动化打包部署之前，为提高效率我们也应当尽可能的实现脚本打包，减少错误。</p>

<p>Windows上打包和Mac上有些不同，Windows系统在没有装任何工具的情况下，我们就得借助Windows上的脚本规范来写一些打包脚本了，Mac使用sh即shell，而Windows使用bat。</p>

<p>以下是第一份脚本，我在此命名为build.bat</p>

<pre>
<em><strong>build.bat</strong></em>
<code>
@echo off 

echo This file should only modified by Notepad and saved as type ANSI or the Chinese characters would not be shown correctly!!!
echo 本文件只可以用文本文件编辑并以ANSI类型保存，否则中文字符将无法正常显示！！！

echo STEP-1: 编译React模块
echo STEP-2: 安装依赖模块...

call cnpm install

echo STEP-3: 编译打包

call npm run build

echo STEP-4: 生成版本信息文件 version.txt
echo {&quot;version&quot;:&quot;1.0.0.%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%&quot;,&quot;codeVersion&quot;:&quot;&quot;} &gt; build/version.txt

set zipName=H5V1.0.0_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%.zip
set src=%cd%\build
set fileName=%cd%\%zipName%
echo STEP-8: 压缩生成包 %zipName%
cscript ./zip.vbs %src% %fileName% 

echo STEP-9: 打包完成！！！

pause
</code>
</pre>

<p>在<em><strong>build.bat</strong></em>文件中使用了<code>cscript ./zip.vbs</code>，这是一段VB的脚本，主要作用是将选定的文件夹压缩成zip文件。</p>

<pre>
<code><em><strong>zip.vbs
</strong></em>
Set objArgs = WScript.Arguments
zip objArgs(0), objArgs(1)

Sub zip(ByVal mySourceDir, ByVal myZipFile)
&nbsp; &nbsp; Set fso = CreateObject(&quot;Scripting.FileSystemObject&quot;)
&nbsp; &nbsp; If fso.GetExtensionName(myZipFile) &lt;&gt; &quot;zip&quot; Then
&nbsp; &nbsp; &nbsp; &nbsp; Exit Sub
&nbsp; &nbsp; ElseIf fso.FolderExists(mySourceDir) Then
&nbsp; &nbsp; &nbsp; &nbsp; FType = &quot;Folder&quot;
&nbsp; &nbsp; ElseIf fso.FileExists(mySourceDir) Then
&nbsp; &nbsp; &nbsp; &nbsp; FType = &quot;File&quot;
&nbsp; &nbsp; &nbsp; &nbsp; FileName = fso.GetFileName(mySourceDir)
&nbsp; &nbsp; &nbsp; &nbsp; FolderPath = Left(mySourceDir, Len(mySourceDir) - Len(FileName))
&nbsp; &nbsp; Else
&nbsp; &nbsp; &nbsp; &nbsp; Exit Sub
&nbsp; &nbsp; End If
&nbsp; &nbsp; Set f = fso.CreateTextFile(myZipFile, True)
&nbsp; &nbsp; &nbsp; &nbsp; f.Write &quot;PK&quot; &amp; Chr(5) &amp; Chr(6) &amp; String(18, Chr(0))
&nbsp; &nbsp; &nbsp; &nbsp; f.Close
&nbsp; &nbsp; Set objShell = CreateObject(&quot;Shell.Application&quot;)
&nbsp; &nbsp; Select Case Ftype
&nbsp; &nbsp; &nbsp; &nbsp; Case &quot;Folder&quot;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Set objSource = objShell.NameSpace(mySourceDir)
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Set objFolderItem = objSource.Items()
&nbsp; &nbsp; &nbsp; &nbsp; Case &quot;File&quot;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Set objSource = objShell.NameSpace(FolderPath)
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Set objFolderItem = objSource.ParseName(FileName)
&nbsp; &nbsp; End Select
&nbsp; &nbsp; Set objTarget = objShell.NameSpace(myZipFile)
&nbsp; &nbsp; intOptions = 256
&nbsp; &nbsp; objTarget.CopyHere objFolderItem, intOptions
&nbsp; &nbsp; Do
&nbsp; &nbsp; &nbsp; &nbsp; WScript.Sleep 1000
&nbsp; &nbsp; Loop Until objTarget.Items.Count &gt; 0
End Sub</code>
<code>
</code></pre>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第22篇《Windows上配合NPM实现自动打包的脚本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
