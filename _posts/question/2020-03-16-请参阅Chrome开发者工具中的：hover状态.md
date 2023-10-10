---
layout: question
title:  请参阅Chrome开发者工具中的：hover状态
date:   2020-03-16T02:11:14.000Z
description: 我想看看 hover我在Chrome中徘徊的锚的样式。在Firebug中，有一个样式下拉列表，允许我为元素选择不同的状态。我似乎在Chrome中找不到任何...
img: 
author: L西里
category: question
answer: 10
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想看看</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Chrome中徘徊的锚</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">样式。</font><font style="vertical-align: inherit;">在Firebug中，有一个样式下拉列表，允许我为元素选择不同的状态。</font><font style="vertical-align: inherit;">我似乎在Chrome中找不到任何类似的东西。</font><font style="vertical-align: inherit;">我想念什么吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1675篇《请参阅Chrome开发者工具中的：hover状态》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我想调试引导工具提示。</font><font style="vertical-align: inherit;">但是以上方法对我不起作用。</font><font style="vertical-align: inherit;">我猜bootstrap是通过mouse in / out事件来实现的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，当我将鼠标悬停在按钮上时，它将在按钮下方生成一个兄弟html元素，因此我在“开发人员工具”窗口的“元素”标签中选择了按钮的父元素，将按钮悬停在“ Ctrl + C”上，然后我可以粘贴包含生成的代码的源代码。</font><font style="vertical-align: inherit;">最后找到生成的代码，然后通过“元素”选项卡中的“编辑为HTML”将其添加到源代码中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望它可以帮助别人。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以按照Babiker建议的以下步骤查看样式：“右键单击元素，但不要将鼠标指针移离元素，将其保持悬停状态。通过键盘选择检查元素，如向上箭头和然后按Enter键。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更改样式，请按照上述步骤操作，然后-通过按键盘上的ctrl + TAB键更改浏览器标签。</font><font style="vertical-align: inherit;">然后，在要调试的选项卡上单击返回。</font><font style="vertical-align: inherit;">悬停屏幕仍然存在。</font><font style="vertical-align: inherit;">现在，小心地将鼠标移至开发人员工具区域。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小A卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我所做的只是解决方法，但是它工作得很好，这就是我每次都这样做的方式。</font></font></p>

<p><a href="https://i.stack.imgur.com/u341A.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/u341A.png" alt="取消停放Chrome开发者工具"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，像这样继续：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，请确保Chrome开发者工具已停靠。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，只需将“开发工具”窗口的任何一侧移到悬停时要检查的元素的中间。 </font></font></li>
</ul>

<p><a href="https://i.stack.imgur.com/ZF6Ic.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/ZF6Ic.jpg" alt="将鼠标悬停在元素上"></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，将鼠标悬停在元素上，右键单击并检查元素，将鼠标移到“开发工具”窗口中，您将可以使用元素：将css悬停。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇JinJin</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><code>hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Chrome </font><font style="vertical-align: inherit;">调试菜单</font><font style="vertical-align: inherit;">状态，并且这样做是为了能够看到悬停状态代码：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Elements</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面板中单击，</font></font><code>Toggle Element state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后选择</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面板中，转到</font></font><code>Event Listeners Breakpoints</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右底部，然后选择</font></font><code>Mouse -&gt; mouseup</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在检查菜单，然后选择所需的框。</font><font style="vertical-align: inherit;">当您释放鼠标按钮时，它应该停止并在</font></font><code>Elements</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面板中</font><font style="vertical-align: inherit;">显示所选元素的悬停状态</font><font style="vertical-align: inherit;">（请</font><font style="vertical-align: inherit;">参见</font><font style="vertical-align: inherit;">本</font></font><code>Styles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome中</font><font style="vertical-align: inherit;">更改为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态非常容易，只需执行以下步骤：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面，然后选择检查</font></font></p>

<p><a href="https://i.stack.imgur.com/NFf9H.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/NFf9H.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）选择要在</font><strong><font style="vertical-align: inherit;">DOM中</font></strong><font style="vertical-align: inherit;">检查的元素</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><a href="https://i.stack.imgur.com/zNXE2.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/zNXE2.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）选择图钉图标   </font></font><a href="https://i.stack.imgur.com/f4wrf.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/f4wrf.png" alt="在此处输入图片说明"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  （切换元素状态）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）然后勾选</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/lLkqR.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/lLkqR.jpg" alt=""></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以</font><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">看到所选</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的悬停状态</font><font style="vertical-align: inherit;">！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您既可以看到伪类规则，也可以将它们强制应用于元素。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看“ </font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式”窗格中</font><font style="vertical-align: inherit;">的规则</font><font style="vertical-align: inherit;">，请单击右上角的小</font></font><code>:hov</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本。</font></font></p>

<p><a href="https://i.stack.imgur.com/NwulC.png" rel="noreferrer"><img src="https://i.stack.imgur.com/NwulC.png" alt="切换元素状态"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要强制某个元素进入</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态，请右键单击它。</font></font></p>

<p><a href="https://i.stack.imgur.com/XzMCB.png" rel="noreferrer"><img src="https://i.stack.imgur.com/XzMCB.png" alt="力元素状态"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对其他提示</font></font><a href="https://developers.google.com/chrome-developer-tools/docs/shortcuts#elements-panel" rel="noreferrer" title="元素面板"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素面板</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://developers.google.com/chrome-developer-tools/docs/shortcuts" rel="noreferrer" title="Chrome开发者工具快捷键"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome开发者工具的快捷方式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为没有办法做到这一点。</font><font style="vertical-align: inherit;">我提交</font></font><strong><a href="http://code.google.com/p/chromium/issues/detail?id=67871" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了功能请求</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果有办法，Google的开发人员会指出这一点，然后我将编辑我的答案。</font><font style="vertical-align: inherit;">如果没有，我们将不得不拭目以待。</font><font style="vertical-align: inherit;">（您可以为该问题加注星标以进行投票）</font></font></p>

<hr>

<blockquote>
  <p><a href="http://code.google.com/p/chromium/issues/detail?id=67871#c1" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome项目成员的注释1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在10.0.620.0中，“样式”面板显示所选元素的：hover样式，但不显示：active。</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（截至本文发布）当前的</font></font><a href="http://www.google.com/chrome?platform=win" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">稳定频道</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本为8.0.552.224。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">使用</font><a href="http://www.google.com/intl/en/landing/chrome/beta/" rel="nofollow"><font style="vertical-align: inherit;">Beta通道</font></a><font style="vertical-align: inherit;">或</font><a href="http://www.google.com/chrome/eula.html?extra=devchannel" rel="nofollow"><font style="vertical-align: inherit;">Dev通道</font></a><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">Google Chrome的</font></font><a href="http://www.google.com/chrome?platform=win" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">稳定通道</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">（请参阅</font><a href="http://www.chromium.org/getting-involved/dev-channel" rel="nofollow"><font style="vertical-align: inherit;">Early Access Release Channels</font></a><font style="vertical-align: inherit;">）。</font></font><a href="http://www.google.com/intl/en/landing/chrome/beta/" rel="nofollow"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="http://www.google.com/chrome/eula.html?extra=devchannel" rel="nofollow"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="http://www.chromium.org/getting-involved/dev-channel" rel="nofollow"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以安装</font></font><a href="http://tools.google.com/dlpage/chromesxs" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">chrome</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://tools.google.com/dlpage/chromesxs" rel="nofollow"><font style="vertical-align: inherit;">辅助安装，该安装比Dev通道更新得多</font></a><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... Canary版本的更新频率甚至高于Dev通道，并且在发布之前未经测试。</font><font style="vertical-align: inherit;">由于Canary版本有时可能无法使用，因此无法将其设置为您的默认浏览器，并可能安装在上述Google Chrome浏览器的任何其他渠道之外。</font><font style="vertical-align: inherit;">...</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天GO</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p></p><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：此答案是在错误修复之前，请参阅tnothcutt的答案。</font></font></h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有点棘手，但是这里是：</font></font><p></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击元素，但不要将鼠标指针从该元素移开，保持其悬停状态。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过键盘选择检查元素，如向上箭头所示，然后按Enter键。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“匹配CSS规则”下的开发人员工具中，您应该能够看到：hover。</font></font></li>
</ul>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：我在您的一个问题标签上尝试过此操作。</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙老丝Jim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有帮助，在最新版本的Chrome（47.0.2526.106）中，这似乎更容易：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查元素，然后单击左侧装订线中的三个白点：</font></font><br>
<a href="https://i.stack.imgur.com/0bZyw.png" rel="noreferrer"><img src="https://i.stack.imgur.com/0bZyw.png" alt="单击三个白点"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从此下拉菜单中选择所需的元素状态：</font></font><br>
<a href="https://i.stack.imgur.com/kqBfs.png" rel="noreferrer"><img src="https://i.stack.imgur.com/kqBfs.png" alt="这个下拉菜单"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过多种方式</font><font style="vertical-align: inherit;">在Chrome开发者工具中</font><font style="vertical-align: inherit;">查看“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬浮状态”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法01</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/CL151.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/CL151.gif" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法02</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/804Ob.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/804Ob.gif" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Firefox默认开发人员费用</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/YUsgZ.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/YUsgZ.gif" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与萤火虫</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/laET3.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/laET3.gif" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
