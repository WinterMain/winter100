---
layout: question
title:  TDD的JavaScript单元测试工具
date:   2020-03-11T04:08:53.000Z
description:                                                                          ...
img: 
author: 蛋蛋猿
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我研究并考虑了许多JavaScript单元测试和测试工具，但一直无法找到合适的选项来保持与TDD的完全兼容。</font><font style="vertical-align: inherit;">那么，是否有一个完全符合TDD的JavaScript单元测试工具？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第642篇《TDD的JavaScript单元测试工具》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神无Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="http://mochikit.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MochiKit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个名为SimpleTest的测试框架，似乎很流行。</font><font style="vertical-align: inherit;">这是</font></font><a href="http://blog.leosoto.com/2008/10/interesting-open-source-surprises.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始作者</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://blog.leosoto.com/2008/10/interesting-open-source-surprises.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">博客文章</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOMandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你应该看看</font></font><a href="http://groups.google.com/group/envjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">env.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">如何使用env.js编写单元测试的示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://blog.pdark.de/2008/11/18/testing-the-impossible-javascript-in-a-web-page/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还对单元测试框架感兴趣，该框架是</font></font><a href="http://qooxdoo.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">qooxdoo的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一部分，</font><a href="http://qooxdoo.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;">qooxdoo</font></a><font style="vertical-align: inherit;">是类似于Dojo，ExtJS等的开源RIA框架，但具有相当全面的工具链。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试在线运行</font></font><a href="http://demo.qooxdoo.org/current/testrunner" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">testrunner</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">提示：点击左上角的灰色箭头（应该更加明显）。</font><font style="vertical-align: inherit;">这是一个运行选定测试的“播放”按钮。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查找有关可用于定义单元测试的JS类的更多信息，请参见在线</font></font><a href="http://demo.qooxdoo.org/current/apiviewer/#qx.dev.unit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API查看器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于自动UI测试（基于Selenium RC），请签出</font></font><a href="http://qooxdoo.org/contrib/project/simulator" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Simulator</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI也有一个</font></font><a href="http://yuilibrary.com/projects/yuitest/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试框架</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font><font style="vertical-align: inherit;">来自Yahoo!的</font></font><a href="http://www.yuiblog.com/blog/2010/11/29/video-yuiconf2010-yuitest/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视频</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">尽管有很多有关TDD的基础知识，但Theater是一个不错的介绍。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该框架是通用的，可以针对任何JavaScript或JS库运行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为专家，您可以“在实际的浏览器上运行”，但是根据我的经验，这是一个缺点，因为它运行缓慢。</font><font style="vertical-align: inherit;">但是，使之具有价值的是非浏览器替代品缺乏足够的JS仿真。</font><font style="vertical-align: inherit;">如果您的JS非常复杂，以至于仅在浏览器中进行测试就足够了，但是还可以考虑以下两个选项：</font></font></p>

<p><a href="http://htmlunit.sourceforge.net/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HtmlUnit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：“它具有相当好的JavaScript支持（正在不断改进），并且即使在非常复杂的AJAX库中也可以使用，可以根据要使用的配置来模拟Firefox或Internet Explorer。” </font><font style="vertical-align: inherit;">如果其仿真足以供您使用，那么它将比驱动浏览器快得多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，也许HtmlUnit具有足够好的JS支持，但是您不喜欢Java吗？</font><font style="vertical-align: inherit;">然后也许：</font></font></p>

<p><a href="http://celerity.rubyforge.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Celerity</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在由HtmlUnit支持的JRuby上运行的Watir API。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似</font></font></p>

<p><a href="http://code.google.com/p/schnell-jruby/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Schnell</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：HtmlUnit的另一个JRuby包装器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，如果HtmlUnit不够好，并且您必须驱动浏览器，则可以考虑使用</font></font><a href="http://justaddwater.dk/2007/11/20/how-to-run-javascript-from-watir-scripts/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Watir来驱动JS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Tony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我们将Qunit与Pavlov和JSTestDriver一起使用。</font><font style="vertical-align: inherit;">这种方法对我们很好。  </font></font></p>

<p><a href="http://qunitjs.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">QUnit</font></font></a> </p>

<p><a href="http://www.elijahmanor.com/bdd-style-qunit-testing-asp-net-mvcs-jquery-validation/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴甫洛夫</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://github.com/mmonteleone/pavlov" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源</font></font></a></p>

<p><a href="http://slmoloch.blogspot.com/2009/08/how-to-run-jstestdriver-with-visual_02.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsTestDriver</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://code.google.com/p/js-test-driver/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">google-js-test：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google发布的JavaScript测试框架：</font><a href="https://github.com/google/gjstest" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="https://github.com/google/gjstest" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/google/gjstest</font></font></a></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常快速的测试启动和执行时间，而无需运行浏览器。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在通过和未通过测试的情况下，输出均清晰，可读。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><a href="https://github.com/google/gjstest/wiki/Frequently-asked-questions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于浏览器的测试运行</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时JS改变，可以简单地被刷新。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="http://code.google.com/p/googletest/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Test</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> for C ++ </font><font style="vertical-align: inherit;">类似的样式和语义</font><font style="vertical-align: inherit;">。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个内置的模拟框架，它需要最少的样板代码（例如no
   </font></font><code>$tearDown</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>$verifyAll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），并具有基于</font></font><a href="http://code.google.com/p/googlemock/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google C ++ Mocking Framework的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式和语义</font><font style="vertical-align: inherit;">。</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前没有适用于Windows的二进制文件</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴斯特</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有</font><font style="vertical-align: inherit;">测试驱动Javascript开发和Sinon框架的作者Christian Johansen的</font></font><a href="http://busterjs.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BusterJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从站点：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Buster.JS是一个新的JavaScript测试框架。</font><font style="vertical-align: inherit;">它通过自动化实际浏览器（例如JsTestDriver）中的测试运行以及Node.js测试来进行浏览器测试。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wikipedia条目的JavaScript部分，</font></font><a href="http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单元测试框架</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表，提供了可用选项的列表。</font><font style="vertical-align: inherit;">它指示它们是在客户端，服务器端还是两者都起作用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><a href="https://github.com/mmanela/chutzpah" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chutzpah-JavaScript测试运行程序</font></font></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个名为Chutzpah的开源项目，该项目是JavaScript单元测试的测试运行器。</font><font style="vertical-align: inherit;">Chutzpah使您能够从命令行和Visual Studio内部运行JavaScript单元测试。</font><font style="vertical-align: inherit;">它还支持在TeamCity连续集成服务器中运行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一NearEva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下</font></font><a href="http://www.dojotoolkit.org/reference-guide/util/doh.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo对象线束（DOH）单元测试框架</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是JavaScript单元测试的几乎与框架无关的工具，并且没有任何Dojo依赖项。</font><font style="vertical-align: inherit;">在</font></font><a href="http://www.ibm.com/developerworks/web/library/wa-aj-doh/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Dojo Objective Harness对Web 2.0应用程序进行单元测试时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对此有很好的描述</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要自动化UI测试（许多开发人员的</font></font><a href="http://dojotoolkit.org/2008/08/11/doh-robot-automating-web-ui-unit-tests-real-user-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苦恼</font></font></a> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），请查看</font><a href="http://dojotoolkit.org/2008/08/11/doh-robot-automating-web-ui-unit-tests-real-user-events" rel="noreferrer"><font style="vertical-align: inherit;">doh.robot </font></a></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（临时向下更新：其他链接</font></font><a href="http://dojotoolkit.org/reference-guide/util/dohrobot.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dojotoolkit.org/reference-guide/util/dohrobot.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://blog.dojotoolkit.org/2008/10/31/doh-robot-part-2-automating-acceptance-tests-and-user-stories" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dijit .robotx </font></font></a> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（暂时关闭）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">后者专为验收测试而设计。</font><font style="vertical-align: inherit;">更新：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文章解释了如何使用它们，如何模拟用户使用鼠标和/或键盘与UI交互以及如何记录测试会话，以便您以后可以自动“播放”它。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
