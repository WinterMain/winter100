---
layout: question
title:  在.NET中将HTML转换为PDF
date:   2020-03-22T12:17:45.000Z
description: 我想通过将HTML内容传递给函数来生成PDF。我已经为此使用了iTextSharp，但是当它遇到表格并且布局变得凌乱时，它的表现并不理想。有没有更好的...
img: 
author: 卡卡西
category: question
answer: 27
tags: C＃ HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想通过将HTML内容传递给函数来生成PDF。</font><font style="vertical-align: inherit;">我已经为此使用了iTextSharp，但是当它遇到表格并且布局变得凌乱时，它的表现并不理想。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更好的办法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2570篇《在.NET中将HTML转换为PDF》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan凯</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，使用这项技术。</font></font></p>

<ul>
<li><a href="http://code.google.com/p/flying-saucer/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">飞碟项目</font></font></a></li>
<li><a href="http://www.ikvm.net" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IKVM</font></font></a></li>
<li><a href="http://sourceforge.net/projects/stub/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存根</font></font></a></li>
<li><a href="http://boo.codehaus.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">o</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src可以从</font></font><a href="http://www.h-a-i.net/mietc/stub-pdf.zip" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载，</font><font style="vertical-align: inherit;">需要</font></font><a href="http://nant.sourceforge.net/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nant</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://www.winnovative-software.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Winnovative HTML到PDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换器，您可以在一行中转换HTML字符串</font></font></p>

<pre><code>byte[] outPdfBuffer = htmlToPdfConverter.ConvertHtml(htmlString, baseUrl);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本URL用于解析HTML字符串中相对URL引用的图像。</font><font style="vertical-align: inherit;">另外，您可以在HTML中使用完整的URL或使用src =“ data：image / png”嵌入图像作为图像标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了回答有关Winnovative转换器的“ fubaar”用户评论，必须进行更正。</font><font style="vertical-align: inherit;">该转换器不使用IE作为渲染引擎。</font><font style="vertical-align: inherit;">它实际上不依赖于任何已安装的软件，并且呈现与WebKit引擎兼容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，似乎最好的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .NET解决方案是</font></font><a href="https://github.com/tuespetre/TuesPechkin" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TuesPechkin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，它是</font></font><a href="https://github.com/wkhtmltopdf/wkhtmltopdf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wkhtmltopdf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机库</font><font style="vertical-align: inherit;">的包装</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我已经使用单线程版本将数千个HTML字符串转换为PDF文件，并且看起来效果很好。</font><font style="vertical-align: inherit;">它应该也可以在多线程环境（例如IIS）中工作，但是我还没有进行测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，由于我想使用最新版本的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wkhtmltopdf</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在撰写本文时为0.12.5），因此我从官方网站下载了DLL，将其复制到我的项目根目录，将copy设置为output，然后将库初始化为所以：</font></font></p>

<pre><code>var dllDir = AppDomain.CurrentDomain.BaseDirectory;<font></font>
Converter = new StandardConverter(new PdfToolset(new StaticDeployment(dllDir)));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码将</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全查找</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> “ wkhtmltox.dll”，因此请不要重命名该文件。</font><font style="vertical-align: inherit;">我使用了DLL的64位版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保阅读多线程环境的说明，因为每个应用程序生命周期只需初始化一次，因此您需要将其放在单个实例中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用此</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDF Duo .Net</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换组件，</font><font style="vertical-align: inherit;">无需使用其他dll即可</font><font style="vertical-align: inherit;">将</font></font><a href="http://www.duodimension.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML从ASP.NET</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font><font style="vertical-align: inherit;">转换</font><a href="http://www.duodimension.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;">为PDF</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以传递HTML字符串或文件，或流以生成PDF。</font><font style="vertical-align: inherit;">使用下面的代码（示例C＃）：</font></font></p>

<pre><code>string file_html = @"K:\hdoc.html";   <font></font>
string file_pdf = @"K:\new.pdf";   <font></font>
try   <font></font>
{   <font></font>
    DuoDimension.HtmlToPdf conv = new DuoDimension.HtmlToPdf();   <font></font>
    conv.OpenHTML(file_html);   <font></font>
    conv.SavePDF(file_pdf);   <font></font>
    textBox4.Text = "C# Example: Converting succeeded";   <font></font>
}   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在以下位置找到Info + C＃/ VB示例：</font><a href="http://www.duodimension.com/html_pdf_asp.net/component_html_pdf.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.duodimension.com/html_pdf_asp.net/component_html_pdf.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.duodimension.com/html_pdf_asp.net/component_html_pdf.aspx</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Near番长</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为HiQPdf软件的代表，我相信最好的解决方案是</font></font><a href="http://www.hiqpdf.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HiQPdf HTML到.NET的PDF到PDF转换器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它包含市场上最先进的HTML5，CSS3，SVG和JavaScript渲染引擎。</font><font style="vertical-align: inherit;">还有一个</font></font><a href="http://www.hiqpdf.com/free-html-to-pdf-converter.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费版本的HTML to PDF库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以使用它免费生成多达3个PDF页面。</font><font style="vertical-align: inherit;">从HTML页面生成PDF作为byte []的最小C＃代码是：</font></font></p>

<pre><code>HtmlToPdf htmlToPdfConverter = new HtmlToPdf();<font></font>
<font></font>
// set PDF page size, orientation and margins<font></font>
htmlToPdfConverter.Document.PageSize = PdfPageSize.A4;<font></font>
htmlToPdfConverter.Document.PageOrientation = PdfPageOrientation.Portrait;<font></font>
htmlToPdfConverter.Document.Margins = new PdfMargins(0);<font></font>
<font></font>
// convert HTML to PDF <font></font>
byte[] pdfBuffer = htmlToPdfConverter.ConvertUrlToMemory(url);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="https://hiqpdf.codeplex.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HiQPdf HTML to PDF Converter示例库中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有关ASP.NET和MVC的更详细的示例</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阿飞Itachi</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><font style="vertical-align: inherit;">pruiz的wkhtmltopdf.dll </font></font><a href="https://github.com/pruiz/WkHtmlToXSharp" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的包装器</font></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有</font><font style="vertical-align: inherit;">Codaxy的wkhtmltopdf.exe </font></font><a href="https://github.com/codaxy/wkhtmltopdf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的包装器</font></font></a><font style="vertical-align: inherit;"></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
 -也在</font></font><a href="http://nuget.org/packages/Codaxy.WkHtmlToPdf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuget上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费的库</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，非常容易工作：</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OpenHtmlToPdf</font></font></em></strong></p>

<pre><code>string timeStampForPdfName = DateTime.Now.ToString("yyMMddHHmmssff");<font></font>
<font></font>
string serverPath = System.Web.Hosting.HostingEnvironment.MapPath("~/FolderName");<font></font>
string pdfSavePath = Path.Combine(@serverPath, "FileName" + timeStampForPdfName + ".FileExtension");<font></font>
<font></font>
<font></font>
//OpenHtmlToPdf Library used for Performing PDF Conversion<font></font>
var pdf = Pdf.From(HTML_String).Content();<font></font>
<font></font>
//FOr writing to file from a ByteArray<font></font>
 File.WriteAllBytes(pdfSavePath, pdf.ToArray()); // Requires System.Linq<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOItachi老丝</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现并用于生成javascript和样式的PDF（呈现视图或html页面）的PDF的最佳工具是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">phantomJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用在示例文件夹的exe根目录中找到的rasterize.js函数下载.exe文件，并将其放入解决方案中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它甚至允许您以任何代码下载文件而无需打开该文件，并且还允许在应用样式和特殊jquery时下载文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码生成PDF文件：</font></font></p>

<pre><code>public ActionResult DownloadHighChartHtml()<font></font>
{<font></font>
    string serverPath = Server.MapPath("~/phantomjs/");<font></font>
    string filename = DateTime.Now.ToString("ddMMyyyy_hhmmss") + ".pdf";<font></font>
    string Url = "http://wwwabc.com";<font></font>
<font></font>
    new Thread(new ParameterizedThreadStart(x =&gt;<font></font>
    {<font></font>
        ExecuteCommand(string.Format("cd {0} &amp; E: &amp; phantomjs rasterize.js {1} {2} \"A4\"", serverPath, Url, filename));<font></font>
                           //E: is the drive for server.mappath<font></font>
    })).Start();<font></font>
<font></font>
    var filePath = Path.Combine(Server.MapPath("~/phantomjs/"), filename);<font></font>
<font></font>
    var stream = new MemoryStream();<font></font>
    byte[] bytes = DoWhile(filePath);<font></font>
<font></font>
    Response.ContentType = "application/pdf";<font></font>
    Response.AddHeader("content-disposition", "attachment;filename=Image.pdf");<font></font>
    Response.OutputStream.Write(bytes, 0, bytes.Length);<font></font>
    Response.End();<font></font>
    return RedirectToAction("HighChart");<font></font>
}<font></font>
<font></font>
<font></font>
<font></font>
private void ExecuteCommand(string Command)<font></font>
{<font></font>
    try<font></font>
    {<font></font>
        ProcessStartInfo ProcessInfo;<font></font>
        Process Process;<font></font>
<font></font>
        ProcessInfo = new ProcessStartInfo("cmd.exe", "/K " + Command);<font></font>
<font></font>
        ProcessInfo.CreateNoWindow = true;<font></font>
        ProcessInfo.UseShellExecute = false;<font></font>
<font></font>
        Process = Process.Start(ProcessInfo);<font></font>
    }<font></font>
    catch { }<font></font>
}<font></font>
<font></font>
<font></font>
private byte[] DoWhile(string filePath)<font></font>
{<font></font>
    byte[] bytes = new byte[0];<font></font>
    bool fail = true;<font></font>
<font></font>
    while (fail)<font></font>
    {<font></font>
        try<font></font>
        {<font></font>
            using (FileStream file = new FileStream(filePath, FileMode.Open, FileAccess.Read))<font></font>
            {<font></font>
                bytes = new byte[file.Length];<font></font>
                file.Read(bytes, 0, (int)file.Length);<font></font>
            }<font></font>
<font></font>
            fail = false;<font></font>
        }<font></font>
        catch<font></font>
        {<font></font>
            Thread.Sleep(1000);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    System.IO.File.Delete(filePath);<font></font>
    return bytes;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要以pdf格式完美呈现html，则需要使用商业库。</font></font></p>

<p><a href="http://www.html-to-pdf.net/" rel="nofollow" title="NET到HTML的HTML"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExpertPdf HTML到Pdf转换器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常易于使用，并且支持最新的html5 / css3。</font><font style="vertical-align: inherit;">您可以将整个网址转换为pdf：</font></font></p>

<pre><code>using ExpertPdf.HtmlToPdf; <font></font>
byte[] pdfBytes = new PdfConverter().GetPdfBytesFromUrl(url);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或html字符串：</font></font></p>

<pre><code>using ExpertPdf.HtmlToPdf; <font></font>
byte[] pdfBytes = new PdfConverter().GetPdfBytesFromHtmlString(html, baseUrl);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以选择将生成的pdf文档直接保存到磁盘上的文件流中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Rotativa软件包的作者。</font><font style="vertical-align: inherit;">它允许直接从剃刀视图创建PDF文件：</font></font></p>

<p><a href="https://www.nuget.org/packages/Rotativa/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/Rotativa/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用起来很简单，并且可以完全控制布局，因为可以将剃刀视图与来自Model和ViewBag容器的数据一起使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Azure上开发了SaaS版本。</font><font style="vertical-align: inherit;">它使从WebApi或任何.Net应用程序，服务，Azure网站，Azure Webjob（无论运行什么.Net）中使用它变得更加容易。</font></font></p>

<p><a href="http://www.rotativahq.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.rotativahq.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费帐户可用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不久前我也在寻找这个。</font><font style="vertical-align: inherit;">我遇到了HTMLDOC </font></font><a href="http://www.easysw.com/htmldoc/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.easysw.com/htmldoc/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一个免费的开源命令行应用程序，它以HTML文件作为参数，并从中弹出PDF。</font><font style="vertical-align: inherit;">对于我的辅助项目，它对我来说效果很好，但这完全取决于您的实际需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该公司出售已编译的二进制文件，但您可以从源代码中免费下载和编译并免费使用。</font><font style="vertical-align: inherit;">我设法编译了一个最新的修订版（适用于1.9版），我打算在几天内为其发布一个二进制安装程序，因此，如果您有兴趣，我可以在发布它后立即提供一个链接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑（2014年2月25日）：似乎文档和网站已移至</font></font><a href="http://www.msweet.org/projects.php?Z1" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.msweet.org/projects.php?Z1</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现以下库在将html转换为pdf时更有效。</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuget</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://www.nuget.org/packages/Select.HtmlToPdf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font><strong><font style="vertical-align: inherit;">//www.nuget.org/packages/Select.HtmlToPdf/</font></strong></font><a href="https://www.nuget.org/packages/Select.HtmlToPdf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.sautinsoft.com/products/convert-html-pdf-and-tiff-pdf-asp.net/html-to-pdf-jpeg-tiff-gif-to-pdf-asp.net.php" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDF Vision</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好。</font><font style="vertical-align: inherit;">但是，您必须具有“完全信任”才能使用它。</font><font style="vertical-align: inherit;">我已经通过电子邮件发送了询问，为什么我的HTML不能在服务器上进行转换，但是在localhost上运行良好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Mandy</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是使用iTextSharp（iTextSharp + itextsharp.xmlworker）将html + css转换为PDF的示例   </font></font></p>

<pre><code>using iTextSharp.text;<font></font>
using iTextSharp.text.pdf;<font></font>
using iTextSharp.tool.xml;<font></font>
<font></font>
<font></font>
byte[] pdf; // result will be here<font></font>
<font></font>
var cssText = File.ReadAllText(MapPath("~/css/test.css"));<font></font>
var html = File.ReadAllText(MapPath("~/css/test.html"));<font></font>
<font></font>
using (var memoryStream = new MemoryStream())<font></font>
{<font></font>
        var document = new Document(PageSize.A4, 50, 50, 60, 60);<font></font>
        var writer = PdfWriter.GetInstance(document, memoryStream);<font></font>
        document.Open();<font></font>
<font></font>
        using (var cssMemoryStream = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(cssText)))<font></font>
        {<font></font>
            using (var htmlMemoryStream = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(html)))<font></font>
            {<font></font>
                XMLWorkerHelper.GetInstance().ParseXHtml(writer, document, htmlMemoryStream, cssMemoryStream);<font></font>
            }<font></font>
        }<font></font>
<font></font>
        document.Close();<font></font>
<font></font>
        pdf = memoryStream.ToArray();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于您有任何其他要求。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个真正简单但不容易部署的解决方案是使用WebBrowser控件加载HTML，然后使用Print方法打印到本地安装的PDF打印机。</font><font style="vertical-align: inherit;">有几种免费的PDF打印机可用，并且WebBrowser控件是.Net框架的一部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：如果您的HTML是XHTML，则可以使用</font></font><a href="https://sourceforge.net/projects/pdfizer/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDFizer</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来完成这项工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOL</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从无头模式使用Google Chrome打印到pdf功能。</font><font style="vertical-align: inherit;">我发现这是最简单但最可靠的方法。</font></font></p>

<pre><code>var url = "https://stackoverflow.com/questions/564650/convert-html-to-pdf-in-net";<font></font>
var chromePath = @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe";<font></font>
var output = Path.Combine(Environment.CurrentDirectory, "printout.pdf");<font></font>
using (var p = new Process())<font></font>
    {<font></font>
        p.StartInfo.FileName = chromePath;<font></font>
        p.StartInfo.Arguments = $"--headless --disable-gpu --print-to-pdf={output} {url}";<font></font>
        p.Start();<font></font>
        p.WaitForExit();<font></font>
    }<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018年更新，让我们使用标准的HTML + CSS = PDF公式！</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于HTML到PDF的需求有个好消息。</font><font style="vertical-align: inherit;">如</font></font><a href="https://stackoverflow.com/a/21345708/287948"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该答案所示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C标准</font></font><a href="https://www.w3.org/TR/css-break-3/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css-break-3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将解决问题</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ……这是一个候选建议，计划在经过测试后在2017年或2018年转变为最终建议。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为非标准的解决方案，有一些针对C＃的插件，如</font></font><a href="https://print-css.rocks" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">print-css.rocks所示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Sam</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个新的基于Web的文档生成应用程序</font></font><a href="http://www.docraptor.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DocRaptor.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">似乎易于使用，并且有一个免费选项。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了ExpertPDF </font></font><a href="http://www.html-to-pdf.net"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Html到Pdf转换器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">做一个体面的工作。</font><font style="vertical-align: inherit;">不幸的是，它不是免费的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您真的不需要真正的.Net PDF库，则有许多</font></font><a href="http://www.google.com/search?q=free+HTML+to+PDF+Converter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费的HTML到PDF工具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中许多都可以从命令行运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种解决方案是选择其中一个，然后用C＃编写一个薄包装纸。</font><font style="vertical-align: inherit;">例如，如</font></font><a href="http://www.codeproject.com/KB/aspnet/HTML2PDF.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本教程中所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.syncfusion.com/products/file-formats/pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本PDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于</font></font><a href="https://www.syncfusion.com/pdf-framework/net/html-to-pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将HTML转换为PDF</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="http://asp.syncfusion.com/demos/web/pdf/htmltopdf.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C＃示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">链接到此处的示例是基于ASP.NET的，但是可以从Windows Forms，WPF，ASP.NET Webforms和ASP.NET MVC中使用该库。</font><font style="vertical-align: inherit;">该库提供使用不同HTML呈现引擎的选项：Internet Explorer（默认）和WebKit（最佳输出）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有资格，则可以</font><font style="vertical-align: inherit;">通过</font></font><a href="http://www.syncfusion.com/products/communitylicense" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区许可</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计划</font><font style="vertical-align: inherit;">免费获得整套控件（也包括商业应用程序）</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">社区许可证是完整的产品，没有任何限制或水印。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我为Syncfusion工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi阿飞</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上次更新时间：2020年3月</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我汇总的.NET中HTML到PDF转换的选项列表（有些是免费的，有些是付费的）</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GemBox.Document</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/GemBox.Document/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/GemBox.Document/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费（最多20个段落）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">680美元-https: </font></font><a href="https://www.gemboxsoftware.com/document/pricelist" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.gemboxsoftware.com/document/pricelist</font></font></a></li>
<li><a href="https://www.gemboxsoftware.com/document/examples/c-sharp-convert-word-html-to-pdf/304" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.gemboxsoftware.com/document/examples/c-sharp-convert-word-html-to-pdf/304</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDF变形记.Net</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/sautinsoft.pdfmetamorphosis/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/sautinsoft.pdfmetamorphosis/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 439-$ 1439- </font></font><a href="https://www.sautinsoft.com/products/pdf-metamorphosis/order.php" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.sautinsoft.com/products/pdf-metamorphosis/order.php</font></font></a></li>
<li><a href="https://www.sautinsoft.com/products/pdf-metamorphosis/convert-html-to-pdf-dotnet-csharp.php" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.sautinsoft.com/products/pdf-metamorphosis/convert-html-to-pdf-dotnet-csharp.php</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HtmlRenderer.PdfSharp</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/HtmlRenderer.PdfSharp/1.5.1-beta1" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/HtmlRenderer.PdfSharp/1.5.1-beta1</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BSD-UNSPECIFIED许可证</font></font></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">up</font></font></p>

<ul>
<li><a href="https://www.puppeteersharp.com/examples/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.puppeteersharp.com/examples/index.html</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">麻省理工学院执照</font></font></li>
<li><a href="https://github.com/kblok/puppeteer-sharp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/kblok/puppeteer-sharp</font></font></a> </li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环氧乙烷</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/EO.Pdf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/EO.Pdf/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 749- </font><a href="https://www.essentialobjects.com/Purchase.aspx?f=3" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https:</font></a><font style="vertical-align: inherit;"> //www.essentialobjects.com/Purchase.aspx </font><a href="https://www.essentialobjects.com/Purchase.aspx?f=3" rel="nofollow noreferrer"><font style="vertical-align: inherit;">?</font></a><font style="vertical-align: inherit;"> f </font></font><a href="https://www.essentialobjects.com/Purchase.aspx?f=3" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=3</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WnvHtmlToPdf_x64</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/WnvHtmlToPdf_x64/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/WnvHtmlToPdf_x64/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1200美元-http: </font></font><a href="http://www.winnovative-software.com/Buy.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.winnovative-software.com/Buy.aspx</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示-http: </font></font><a href="http://www.winnovative-software.com/demo/default.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.winnovative-software.com/demo/default.aspx</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铁Pdf</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/IronPdf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/IronPdf/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 399-$ 1599- </font></font><a href="https://ironpdf.com/licensing/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ironpdf.com/licensing/</font></font></a></li>
<li><a href="https://ironpdf.com/examples/using-html-to-create-a-pdf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://ironpdf.com/examples/using-html-to-create-a-pdf/</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尖顶PDF</font></font></p>

<ul>
<li><a href="https://www.nuget.org/packages/Spire.PDF/" rel="nofollow noreferrer">https://www.nuget.org/packages/Spire.PDF/</a></li>
<li>$ 599 - <a href="https://www.e-iceblue.com/Buy/Spire.PDF.html" rel="nofollow noreferrer">https://www.e-iceblue.com/Buy/Spire.PDF.html</a></li>
<li><a href="https://www.e-iceblue.com/Tutorials/Spire.PDF/Spire.PDF-Program-Guide/Convert-HTML-to-PDF-Customize-HTML-to-PDF-Conversion-by-Yourself.html" rel="nofollow noreferrer">https://www.e-iceblue.com/Tutorials/Spire.PDF/Spire.PDF-Program-Guide/Convert-HTML-to-PDF-Customize-HTML-to-PDF-Conversion-by-Yourself.html</a></li>
</ul></li>
<li><p>Free Spire.PDF for .NET (Community Version)</p>

<ul>
<li><a href="https://www.e-iceblue.com/Introduce/free-pdf-component.html#.Xm4FfqgzZPZ" rel="nofollow noreferrer">https://www.e-iceblue.com/Introduce/free-pdf-component.html#.Xm4FfqgzZPZ</a></li>
<li><a href="https://www.nuget.org/packages/FreeSpire.PDF/2.9.37" rel="nofollow noreferrer">https://www.nuget.org/packages/FreeSpire.PDF/2.9.37</a></li>
<li>Upto 10 pages</li>
</ul></li>
<li><p>Aspose.Html</p>

<ul>
<li><a href="https://www.nuget.org/packages/Aspose.Html/" rel="nofollow noreferrer">https://www.nuget.org/packages/Aspose.Html/</a></li>
<li>$ 599 - <a href="https://purchase.aspose.com/pricing" rel="nofollow noreferrer">https://purchase.aspose.com/pricing</a></li>
<li><a href="https://docs.aspose.com/display/htmlnet/HTML+to+PDF+Conversion" rel="nofollow noreferrer">https://docs.aspose.com/display/htmlnet/HTML+to+PDF+Conversion</a></li>
</ul></li>
<li><p>EvoPDF</p>

<ul>
<li><a href="https://www.nuget.org/packages/EvoPDF/" rel="nofollow noreferrer">https://www.nuget.org/packages/EvoPDF/</a></li>
<li>$ 450 - $ 1200 - <a href="http://www.evopdf.com/buy.aspx" rel="nofollow noreferrer">http://www.evopdf.com/buy.aspx</a> </li>
</ul></li>
<li><p>ExpertPdfHtmlToPdf </p>

<ul>
<li><a href="https://www.nuget.org/packages/ExpertPdfHtmlToPdf/" rel="nofollow noreferrer">https://www.nuget.org/packages/ExpertPdfHtmlToPdf/</a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 550-$ 1200- </font></font><a href="https://www.html-to-pdf.net/Pricing.aspx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.html-to-pdf.net/Pricing.aspx</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">邮编 </font></font></p>

<ul>
<li><a href="https://zetpdf.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://zetpdf.com</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">249美元-https: </font></font><a href="https://zetpdf.com/pricing/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//zetpdf.com/pricing/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不是众所周知的或受支持的库</font></font><a href="https://stackoverflow.com/questions/52080208/zetpdf-does-anyone-know-the-background-of-this-product"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-ZetPDF-有人知道该产品的背景吗？</font></font></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDFtron </font></font></p>

<ul>
<li><a href="https://www.pdftron.com/documentation/samples/cs/HTML2PDFTes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.pdftron.com/documentation/samples/cs/HTML2PDFTes</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 4000 /年</font></font></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WkHtmlToXSharp</font></font></p>

<ul>
<li><a href="https://github.com/pruiz/WkHtmlToXSharp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/pruiz/WkHtmlToXSharp</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自由</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并发转换被实现为处理队列</font></font></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择PDF </font></font></p>

<ul>
<li><a href="https://selectpdf.com/pdf-library-for-net/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://selectpdf.com/pdf-library-for-net/</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费（最多5页）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 499-1个开发人员，1个部署计算机</font></font><a href="https://selectpdf.com/pricing/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://selectpdf.com/pricing/</font></font></a></li>
<li><a href="https://www.nuget.org/packages/Select.HtmlToPdf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/Select.HtmlToPdf/</font></font></a></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果以上选项均无济于事，您可以随时搜索NuGet软件包 
 </font></font><a href="https://www.nuget.org/packages?q=html+pdf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages?q=html+pdf</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.winnovative-software.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Winnovative</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了一个支持HTML输入的.Net PDF库。</font><font style="vertical-align: inherit;">他们提供无限的</font></font><a href="http://www.winnovative-software.com/download.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费试用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">根据您希望如何部署项目，这可能就足够了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数HTML到PDF转换器都依靠IE来进行HTML解析和渲染。</font><font style="vertical-align: inherit;">当用户更新其IE时，这可能会中断。</font></font><a href="http://www.essentialobjects.com/Products/EOPdf/Default.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不依赖IE的一种。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码是这样的：</font></font></p>

<pre><code>EO.Pdf.HtmlToPdf.ConvertHtml(htmlText, pdfFileName);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像许多其他转换器一样，您可以传递文本，文件名或网址。</font><font style="vertical-align: inherit;">结果可以保存到文件或流中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我强烈建议</font></font><a href="http://www.nrecosite.com/doc/NReco.PdfGenerator/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NReco</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认真对待。</font><font style="vertical-align: inherit;">它具有免费和付费版本，非常值得。</font><font style="vertical-align: inherit;">它在后台使用wkhtmtopdf，但是您只需要一个程序集。</font><font style="vertical-align: inherit;">太棒了</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用示例：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><a href="https://www.nuget.org/packages/NReco.PdfGenerator/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NuGet</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var htmlContent = String.Format("&lt;body&gt;Hello world: {0}&lt;/body&gt;", DateTime.Now);<font></font>
var pdfBytes = (new NReco.PdfGenerator.HtmlToPdfConverter()).GeneratePdf(htmlContent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我不是开发人员，只是该项目的支持者:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近进行了关于HTML到PDF转换的PoC，并希望分享我的结果。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我最喜欢的是</font></font><a href="https://github.com/vilppu/OpenHtmlToPdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OpenHtmlToPdf</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该工具的优点：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的HTML兼容性（例如，这是我的示例中唯一的工具，当一个表跨越多个页面时，它可以正确地重复表头）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">流利的API</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费和开源（</font></font><a href="https://creativecommons.org/licenses/by/3.0/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Creative Commons Attribution 3.0许可证</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可通过NuGet获得</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他测试工具：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExpertPDF（</font></font><a href="http://www.html-to-pdf.net/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.html-to-pdf.net/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IronPDF（</font></font><a href="http://ironpdf.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ironpdf.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iTextSharp（</font></font><a href="https://sourceforge.net/projects/itextsharp/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://sourceforge.net/projects/itextsharp/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于.NET的NReco PDF Creator（</font></font><a href="http://www.nrecosite.com/pdf_generator_net.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.nrecosite.com/pdf_generator_net.aspx</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDF Sharp的HTML渲染器（</font></font><a href="https://www.nuget.org/packages/HtmlRenderer.PdfSharp/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.nuget.org/packages/HtmlRenderer.PdfSharp/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SelectPDF社区版（</font></font><a href="http://selectpdf.com/community-edition/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://selectpdf.com/community-edition/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我推荐在</font></font><a href="https://www.puppeteersharp.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wkhtmltopdf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上使用PupeteerSharp。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><a href="http://wkhtmltopdf.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wkhtmtopdf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是到目前为止我发现的最好的工具。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于.NET，您可以使用此</font></font><a href="https://github.com/codaxy/wkhtmltopdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松调用wkhtmtopdf命令行实用程序。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
