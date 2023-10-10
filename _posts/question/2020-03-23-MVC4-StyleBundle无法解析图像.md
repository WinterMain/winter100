---
layout: question
title:  MVC4 StyleBundle无法解析图像
date:   2020-03-23T13:22:32.000Z
description: 我的问题与此类似：  ASP.NET MVC 4缩小和背景图片除非我愿意，否则我会坚持使用MVC的捆绑软件。我脑部崩溃，试图弄清楚指定样式束（...
img: 
author: 斯丁前端
category: question
answer: 6
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题与此类似：</font></font></p>

<blockquote>
  <p><a href="https://stackoverflow.com/questions/9780099/asp-net-mvc-4-minification-background-images"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASP.NET MVC 4缩小和背景图片</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非我愿意，否则我会坚持使用MVC的捆绑软件。</font><font style="vertical-align: inherit;">我脑部崩溃，试图弄清楚指定样式束（例如独立的CSS和jQuery UI等图像集）的正确模式是什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个典型的MVC站点结构，</font></font><code>/Content/css/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中包含我的基本CSS，例如</font></font><code>styles.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在该css文件夹中，我还有子文件夹，例如</font></font><code>/jquery-ui</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含其CSS文件和一个</font></font><code>/images</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹的子文件夹。</font><font style="vertical-align: inherit;">jQuery UI CSS中的图像路径是相对于该文件夹的，我不想弄乱它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我了解，当我指定a时，</font></font><code>StyleBundle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要指定一个虚拟路径，该路径也与真实内容路径不匹配，因为（假设我忽略了通往Content的路由）IIS将尝试将该路径解析为物理文件。</font><font style="vertical-align: inherit;">所以我指定：</font></font></p>

<pre><code>bundles.Add(new StyleBundle("~/Content/styles/jquery-ui")<font></font>
       .Include("~/Content/css/jquery-ui/*.css"));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下方式呈现：</font></font></p>

<pre><code>@Styles.Render("~/Content/styles/jquery-ui")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以看到请求发送到：</font></font></p>

<pre><code>http://localhost/MySite/Content/styles/jquery-ui?v=nL_6HPFtzoqrts9nwrtjq0VQFYnhMjY5EopXsK8cxmg1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将返回正确的，缩小的CSS响应。</font><font style="vertical-align: inherit;">但是随后浏览器发送一个请求，要求一个相对链接的图像，如下所示：</font></font></p>

<pre><code>http://localhost/MySite/Content/styles/images/ui-bg_highlight-soft_100_eeeeee_1x100.png
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><code>404</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我URL的最后一部分</font></font><code>jquery-ui</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是无扩展名URL，这是我的包的处理程序，因此我可以看到为什么对图像的相对请求很简单</font></font><code>/styles/images/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的问题是</font><font style="vertical-align: inherit;">处理这种情况</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的正确方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><strong><font style="vertical-align: inherit;">什么</font></strong><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3063篇《MVC4 StyleBundle无法解析图像》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子L</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>CssRewriteUrlTransform</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了我的问题。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果使用后您的代码仍不加载图像</font></font><code>CssRewriteUrlTransform</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则将css文件名更改为：</font></font></p>

<pre><code>.Include("~/Content/jquery/jquery-ui-1.10.3.custom.css", new CssRewriteUrlTransform())
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至：</font></font></p>

<pre><code>.Include("~/Content/jquery/jquery-ui.css", new CssRewriteUrlTransform())
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某种程度上，。（点）无法在url中识别。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以简单地在虚拟捆绑包路径中添加另一级别的深度</font></font></p>

<pre><code>    //Two levels deep bundle path so that paths are maintained after minification<font></font>
    bundles.Add(new StyleBundle("~/Content/css/css").Include("~/Content/bootstrap/bootstrap.css", "~/Content/site.css"));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种技术含量极低的答案，有点像骇客，但它可以正常工作，不需要任何预处理。</font><font style="vertical-align: inherit;">考虑到其中一些答案的篇幅和复杂性，我更喜欢这样做。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过很少的调查，我得出以下结论：您有2个选择：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行转换。</font><font style="vertical-align: inherit;">为此非常有用的软件包：</font></font><a href="https://bundletransformer.codeplex.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://bundletransformer.codeplex.com/" rel="nofollow"><font style="vertical-align: inherit;">//bundletransformer.codeplex.com/，</font></a><font style="vertical-align: inherit;"> 
您需要对每个有问题的包进行以下转换：</font></font></p>

<pre><code>BundleResolver.Current = new CustomBundleResolver();<font></font>
var cssTransformer = new StyleTransformer();<font></font>
standardCssBundle.Transforms.Add(cssTransformer);<font></font>
bundles.Add(standardCssBundle);<font></font>
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：使用此解决方案，您可以根据需要命名捆绑软件=&gt;可以将CSS文件从不同目录组合到一个捆绑软件中。</font><font style="vertical-align: inherit;">缺点：您需要转换每个有问题的包</font></font></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用相同的相对根作为捆绑包的名称，例如css文件所在的位置。</font><font style="vertical-align: inherit;">优点：无需改造。</font><font style="vertical-align: inherit;">缺点：在将来自不同目录的css工作表组合到一个包中时，存在局限性。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个选择是使用IIS URL重写模块将虚拟包映像文件夹映射到物理映像文件夹。</font><font style="vertical-align: inherit;">下面是一个重写规则的示例，可以将其用于名为“〜/ bundles / yourpage / styles”的包-请注意，正则表达式与字母数字字符以及连字符，下划线和句点匹配，这在图像文件名中很常见。</font></font></p>

<pre><code>&lt;rewrite&gt;<font></font>
  &lt;rules&gt;<font></font>
    &lt;rule name="Bundle Images"&gt;<font></font>
      &lt;match url="^bundles/yourpage/images/([a-zA-Z0-9\-_.]+)" /&gt;<font></font>
      &lt;action type="Rewrite" url="Content/css/jquery-ui/images/{R:1}" /&gt;<font></font>
    &lt;/rule&gt;<font></font>
  &lt;/rules&gt;<font></font>
&lt;/rewrite&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法会产生一些额外的开销，但可以让您更好地控制捆绑软件名称，还可以减少一页上可能需要引用的捆绑软件数量。</font><font style="vertical-align: inherit;">当然，如果必须引用多个包含相对图像路径引用的第三方css文件，则仍然无法创建多个捆绑包。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Eva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现如果您引用</font></font><code>*.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并且关联</font></font><code>*.min.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件位于同一文件夹中</font><font style="vertical-align: inherit;">，则CssRewriteUrlTransform无法运行</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，请删除</font></font><code>*.min.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件或直接在包中引用它：</font></font></p>

<pre><code>bundles.Add(new Bundle("~/bundles/bootstrap")<font></font>
    .Include("~/Libs/bootstrap3/css/bootstrap.min.css", new CssRewriteUrlTransform()));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您的URL将正确转换并且图像应正确解析。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://forums.asp.net/t/1774324.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MVC4 CSS捆绑和图片参考</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的该线程</font><font style="vertical-align: inherit;">，如果将捆绑定义为：</font></font></p>

<pre><code>bundles.Add(new StyleBundle("~/Content/css/jquery-ui/bundle")<font></font>
                   .Include("~/Content/css/jquery-ui/*.css"));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在与构成包的源文件相同的路径上定义包，则相对映像路径仍将起作用。</font><font style="vertical-align: inherit;">捆绑软件路径的最后一部分实际上是</font></font><code>file name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该特定捆绑软件的（即，</font></font><code>/bundle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以是您喜欢的任何名称）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当您将同一文件夹中的CSS捆绑在一起时才有效（从捆绑的角度来看，我认为这很有意义）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据@Hao Kung的以下评论，现在也可以通过应用</font></font><code>CssRewriteUrlTransformation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://web.archive.org/web/20140331115330/http://aspnetoptimization.codeplex.com/workitem/30" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定时更改CSS文件的相对URL引用）来实现</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我尚未确认有关重写虚拟目录中绝对路径问题的注释，因此可能不适用于所有人（？）。</font></font></em></p>

<pre><code>bundles.Add(new StyleBundle("~/Content/css/jquery-ui/bundle")<font></font>
                   .Include("~/Content/css/jquery-ui/*.css",<font></font>
                    new CssRewriteUrlTransform()));<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
