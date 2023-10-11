---
layout: question
title:  在Python中从字符串中剥离HTML
date:   2020-04-03T02:24:12.000Z
description: from mechanize import Browserbr = Browser()br.open('http //somewebpage')ht...
img: 
author: 番长樱梅
category: question
answer: 9
tags: python HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>from mechanize import Browser<font></font>
br = Browser()<font></font>
br.open('http://somewebpage')<font></font>
html = br.response().readlines()<font></font>
for line in html:<font></font>
  print line<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当在HTML文件中打印一行时，我试图找到一种仅显示每个HTML元素的内容而不显示格式本身的方法。</font><font style="vertical-align: inherit;">如果找到</font></font><code>'&lt;a href="whatever.com"&gt;some text&lt;/a&gt;'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将仅打印“某些文本”，</font></font><code>'&lt;b&gt;hello&lt;/b&gt;'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印“ hello”，等等。如何去做呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3884篇《在Python中从字符串中剥离HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数情况下，使用BeautifulSoup，html2text或@Eloff中的代码，它仍然保留一些html元素，javascript代码...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以结合使用这些库并删除markdown格式（Python 3）：</font></font></p>

<pre><code>import re<font></font>
import html2text<font></font>
from bs4 import BeautifulSoup<font></font>
def html2Text(html):<font></font>
    def removeMarkdown(text):<font></font>
        for current in ["^[ #*]{2,30}", "^[ ]{0,30}\d\\\.", "^[ ]{0,30}\d\."]:<font></font>
            markdown = re.compile(current, flags=re.MULTILINE)<font></font>
            text = markdown.sub(" ", text)<font></font>
        return text<font></font>
    def removeAngular(text):<font></font>
        angular = re.compile("[{][|].{2,40}[|][}]|[{][*].{2,40}[*][}]|[{][{].{2,40}[}][}]|\[\[.{2,40}\]\]")<font></font>
        text = angular.sub(" ", text)<font></font>
        return text<font></font>
    h = html2text.HTML2Text()<font></font>
    h.images_to_alt = True<font></font>
    h.ignore_links = True<font></font>
    h.ignore_emphasis = False<font></font>
    h.skip_internal_links = True<font></font>
    text = h.handle(html)<font></font>
    soup = BeautifulSoup(text, "html.parser")<font></font>
    text = soup.text<font></font>
    text = removeAngular(text)<font></font>
    text = removeMarkdown(text)<font></font>
    return text<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它对我来说效果很好，但是可以增强，当然...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于一个项目，我需要剥离HTML，同时剥离CSS和js。</font><font style="vertical-align: inherit;">因此，我对Eloffs回答做了一个变体：</font></font></p>

<pre><code>class MLStripper(HTMLParser):<font></font>
    def __init__(self):<font></font>
        self.reset()<font></font>
        self.strict = False<font></font>
        self.convert_charrefs= True<font></font>
        self.fed = []<font></font>
        self.css = False<font></font>
    def handle_starttag(self, tag, attrs):<font></font>
        if tag == "style" or tag=="script":<font></font>
            self.css = True<font></font>
    def handle_endtag(self, tag):<font></font>
        if tag=="style" or tag=="script":<font></font>
            self.css=False<font></font>
    def handle_data(self, d):<font></font>
        if not self.css:<font></font>
            self.fed.append(d)<font></font>
    def get_data(self):<font></font>
        return ''.join(self.fed)<font></font>
<font></font>
def strip_tags(html):<font></font>
    s = MLStripper()<font></font>
    s.feed(html)<font></font>
    return s.get_data()<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种与当前接受的答案（</font></font><a href="https://stackoverflow.com/a/925630/95989"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/925630/95989</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">类似的解决方案</font><font style="vertical-align: inherit;">，除了它</font></font><code>HTMLParser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">使用内部</font><font style="vertical-align: inherit;">类（即没有子类），从而使其简洁得多：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">def strip_html（文字）：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    零件= []                                                                      </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    解析器= HTMLParser（）                                                           </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    parser.handle_data = parts.append                                               </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    parser.feed（文本）                                                               </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    返回''.join（parts）</font></font><font></font>
</pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以编写自己的函数：</font></font></p>

<pre><code>def StripTags(text):<font></font>
     finished = 0<font></font>
     while not finished:<font></font>
         finished = 1<font></font>
         start = text.find("&lt;")<font></font>
         if start &gt;= 0:<font></font>
             stop = text[start:].find("&gt;")<font></font>
             if stop &gt;= 0:<font></font>
                 text = text[:start] + text[start+stop+1:]<font></font>
                 finished = 0<font></font>
     return text<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经成功地将Eloff的答案用于Python 3.1 [非常感谢！]。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我升级到Python 3.2.3，并遇到错误。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://stackoverflow.com/questions/11061058/using-htmlparser-in-python-3-2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢响应者Thomas K </font><font style="vertical-align: inherit;">提供的解决方案</font><font style="vertical-align: inherit;">是将</font></font><code>super().__init__()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码</font><font style="vertical-align: inherit;">插入</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>def __init__(self):<font></font>
    self.reset()<font></font>
    self.fed = []<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使它看起来像这样：</font></font></p>

<pre><code>def __init__(self):<font></font>
    super().__init__()<font></font>
    self.reset()<font></font>
    self.fed = []<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...，它将适用于Python 3.2.3。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次感谢Thomas K的修复以及上面提供的Eloff原始代码！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用其他HTML解析器（</font></font><a href="http://codespeak.net/lxml/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如lxml</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://www.crummy.com/software/BeautifulSoup/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Beautiful Soup</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），该</font><font style="vertical-align: inherit;">解析器</font><font style="vertical-align: inherit;">提供仅提取文本的功能。</font><font style="vertical-align: inherit;">或者，您可以在行字符串上运行正则表达式以去除标记。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://docs.python.org/howto/regex" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Python文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我对python 3的解决方案。</font></font></p>

<pre><code>import html<font></font>
import re<font></font>
<font></font>
def html_to_txt(html_text):<font></font>
    ## unescape html<font></font>
    txt = html.unescape(html_text)<font></font>
    tags = re.findall("&lt;[^&gt;]+&gt;",txt)<font></font>
    print("found tags: ")<font></font>
    print(tags)<font></font>
    for tag in tags:<font></font>
        txt=txt.replace(tag,'')<font></font>
    return txt<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不知道它是否完美，但是解决了我的用例，看起来很简单。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Beautiful Soup包会立即为您执行此操作。 </font></font></p>

<pre><code>from bs4 import BeautifulSoup<font></font>
<font></font>
soup = BeautifulSoup(html)<font></font>
text = soup.get_text()<font></font>
print(text)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要剥离所有HTML标记，我发现的最简单方法是使用BeautifulSoup：</font></font></p>

<pre><code>from bs4 import BeautifulSoup  # Or from BeautifulSoup import BeautifulSoup<font></font>
<font></font>
def stripHtmlTags(htmlTxt):<font></font>
    if htmlTxt is None:<font></font>
            return None<font></font>
        else:<font></font>
            return ''.join(BeautifulSoup(htmlTxt).findAll(text=True)) <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了接受的答案的代码，但得到的是“ RuntimeError：超出最大递归深度”，上述代码块未发生这种情况。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
