---
layout: question
title:  Google Chrome表单自动填充及其黄色背景
date:   2020-03-24T09:45:15.000Z
description: 我对Google Chrome浏览器及其表单自动填充功能存在设计问题。如果Chrome记住了一些登录名/密码，它将背景色更改为黄色。以下是一些屏幕截图...
img: 
author: 小宇宙
category: question
answer: 17
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对Google Chrome浏览器及其表单自动填充功能存在设计问题。</font><font style="vertical-align: inherit;">如果Chrome记住了一些登录名/密码，它将背景色更改为黄色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些屏幕截图：</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/24035/images/thumbnails/1585043115566.png" data-src="https://www.samyoc.com//uploads/users/24035/images/1585043115566.png" alt="替代文字">
<img src="https://www.samyoc.com//uploads/users/24035/images/thumbnails/1585043115568.png" data-src="https://www.samyoc.com//uploads/users/24035/images/1585043115568.png" alt="替代文字"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何删除该背景或仅禁用此自动填充？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiTonyJinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;input type="text" name="foo" autocomplete="off" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相似问题：</font></font><a href="https://stackoverflow.com/questions/2530/how-do-you-disable-browser-autocomplete-on-web-form-field-input-tag"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚发现自己有同样的问题。</font><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>form :focus {<font></font>
  outline: none;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony十三Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在应用CSS之前避免黄色闪烁，请对那个坏男孩打一下过渡，如下所示： </font></font></p>

<pre><code>input:-webkit-autofill {<font></font>
    -webkit-box-shadow: 0 0 0 1000px white inset !important;<font></font>
    transition: background-color 10s ease-in-out 0s;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>autocomplete="off"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会削减它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输入类型属性更改为</font></font><code>type="search"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Google不会将自动填充应用于具有搜索类型的输入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以节省您一些时间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">票价namrouti</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案是正确的。</font><font style="vertical-align: inherit;">但是，当</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择输入</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，背景仍然变为黄色</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">添加</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复问题。</font><font style="vertical-align: inherit;">如果您还想要</font></font><code>textarea</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>select</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有相同的行为，只需添加</font></font><code>textarea:-webkit-autofill, select:-webkit-autofill</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅输入</font></font></strong></p>

<pre><code>input:-webkit-autofill {<font></font>
    background-color: rgb(250, 255, 189) !important;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入，选择，文本区域</font></font></strong></p>

<pre><code>input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {<font></font>
    background-color: rgb(250, 255, 189) !important;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有一个解决方案对我有用，用户名和密码输入仍在填充并且背景为黄色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我问自己：“ Chrome如何确定在给定页面上应自动填充的内容？”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“它会查找输入ID，输入名称吗？表单ID？表单动作？”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过对用户名和密码输入的实验，只有两种发现导致Chrome无法找到应自动填充的字段的方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）将密码输入置于文本输入之前。</font><font style="vertical-align: inherit;">2）给他们相同的名称和ID ...或不给名称和ID。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面加载后，可以使用javascript更改页面上输入的顺序，也可以动态为其指定名称和ID。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且Chrome不知道是什么原因...自动完成功能不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">疯狂破解，我知道。</font><font style="vertical-align: inherit;">但这对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome 34.0.1847.116，OSX 10.7.5</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的标签中，只需插入这一小段代码。 </font></font></p>

<pre><code>autocomplete="off"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，请勿将其放在用户名/电子邮件/ idname字段中，因为如果您仍在使用自动完成功能，它将在此字段中禁用它。</font><font style="vertical-align: inherit;">但是我找到了解决方法，只需将代码放在密码输入标签中，因为无论如何您永远不会自动完成密码。</font><font style="vertical-align: inherit;">此修复程序应该删除电子邮件/用户名字段上的颜色强制和行事自动完成功能，并使您避免使用Jquery或javascript之类的笨拙的骇客。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想完全摆脱它，我已经调整了前面的答案中的代码，因此它也适用于悬停，活动和集中注意力：</font></font></p>

<pre><code>input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:active, input:-webkit-autofill:focus {<font></font>
    -webkit-box-shadow: 0 0 0 1000px white inset;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝L</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个</font></font></p>

<pre><code>input:-webkit-autofill { -webkit-box-shadow: 0 0 0px 1000px white inset !important; }<font></font>
input:focus:-webkit-autofill { -webkit-box-shadow: 0 0 0px 1000px white inset !important; }<font></font>
/* You can use color:#color to change the color */<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这帮助了我，仅CSS版本。</font></font></p>

<p><code>input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">白色</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以是任何你想要的颜色。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案的组合对我有用 </font></font></p>

<pre><code>&lt;style&gt;<font></font>
    input:-webkit-autofill,<font></font>
    input:-webkit-autofill:hover,<font></font>
    input:-webkit-autofill:focus,<font></font>
    input:-webkit-autofill:active {<font></font>
        -webkit-box-shadow: 0 0 0px 1000px #373e4a inset !important;<font></font>
           -webkit-text-fill-color: white !important;<font></font>
   }<font></font>
&lt;/style&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点黑，但对我来说很完美</font></font></p>

<pre><code>input:-webkit-autofill {<font></font>
    -webkit-box-shadow: 0 0 0px 1000px white inset;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作，只需要更改css。</font></font></p>

<pre><code>input:-webkit-autofill {<font></font>
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset!important;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将任何颜色代替</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#ffffff</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你们想要透明的输入字段，则可以使用过渡和过渡延迟。 </font></font></p>

<pre><code>input:-webkit-autofill,<font></font>
input:-webkit-autofill:hover,<font></font>
input:-webkit-autofill:focus,<font></font>
input:-webkit-autofill:active {<font></font>
    -webkit-transition-delay: 9999s;<font></font>
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox中，您可以使用autocomplete =“ off / on”属性禁用表单上的所有自动完成功能。</font><font style="vertical-align: inherit;">同样，可以使用相同的属性设置各个项目的自动完成功能。</font></font></p>

<pre><code>&lt;form autocomplete="off" method=".." action=".."&gt;  <font></font>
&lt;input type="text" name="textboxname" autocomplete="off"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Chrome浏览器中对其进行测试，因为它应该可以正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下CSS删除了黄色背景色，并将其替换为您选择的背景色。</font><font style="vertical-align: inherit;">它不会禁用自动填充，并且不需要jQuery或Javascript黑客。</font></font></p>

<pre><code>input:-webkit-autofill {<font></font>
    -webkit-box-shadow:0 0 0 50px white inset; /* Change the color to your own background color */<font></font>
    -webkit-text-fill-color: #333;<font></font>
}<font></font>
input:-webkit-autofill:focus {<font></font>
    -webkit-box-shadow: /*your box-shadow*/,0 0 0 50px white inset;<font></font>
    -webkit-text-fill-color: #333;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制的解决方案来自：
 </font></font><a href="https://stackoverflow.com/questions/2338102/override-browser-form-filling-and-input-highlighting-with-html-css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">覆盖浏览器表单填充并使用HTML / CSS突出显示输入</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将“白色”更改为所需的任何颜色。</font></font></p>

<pre><code>input:-webkit-autofill {<font></font>
    -webkit-box-shadow: 0 0 0 1000px white inset !important;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
