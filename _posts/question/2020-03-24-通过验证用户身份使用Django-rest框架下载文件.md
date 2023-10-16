---
layout: question
title:  通过验证用户身份使用Django rest框架下载文件
date:   2020-03-24T03:23:08.000Z
description: 我正在使用Django作为后端的项目中工作。我正在使用Django rest框架，并且有一个API可以下载文件。\`detail_route(metho...
img: 
author: 卡卡西Near
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Django作为后端的项目中工作。</font><font style="vertical-align: inherit;">我正在使用Django rest框架，并且有一个API可以下载文件。</font></font></p>

<pre><code>@detail_route(methods=['GET'], permission_classes=[IsAuthenticated])<font></font>
def test(self, request, pk=None):<font></font>
    try:<font></font>
        ticket = Ticket.objects.get(id=pk, user=request.user)<font></font>
        file_path = ticket.qrcode_file.path<font></font>
        if os.path.exists(file_path):<font></font>
            with open(file_path, 'rb') as fh:<font></font>
                response = HttpResponse(fh.read(), content_type="image/jpeg")<font></font>
                name = "%s %s %s %s.jpg" % (ticket.show.title, datetime.strftime(ticket.show.date_time,<font></font>
                                                                                       "%H_%M_%p"),<font></font>
                                            datetime.strftime(ticket.show.date_time, "%d %B %Y"), ticket.id)<font></font>
                response['Content-Disposition'] = "attachment; filename=%s" % name.replace(" ", "_")<font></font>
                return response<font></font>
        return Response({'error': 'Ticket doest not belong to requested user.'}, status=status.HTTP_403_FORBIDDEN)<font></font>
    except Ticket.DoesNotExist as e:<font></font>
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在前端，我正在使用Nuxtjs（用于vuejs的ssr）。</font><font style="vertical-align: inherit;">这是一小段代码，用户可以通过单击目标空白的链接来下载文件：</font></font></p>

<pre><code>&lt;a class="downloadBtn" target="_blank" :href="`${baseURL}/payments/api/tickets/${ticket.id}/download_ticket/`"&gt;Download e-ticket&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该Web应用程序在Nuxtjs服务器（localhost：3000）上运行，而Django服务器在localhost：8000上运行，仅使用API​​通过auth令牌在Nuxtjs和Django之间进行通信。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我单击下载链接时，它将打开一个新选项卡，并从该新选项卡发出请求，该请求中未传递任何令牌。</font><font style="vertical-align: inherit;">而且，由于django视图无法下载票证，</font></font><code>permission_classes=[IsAuthenticated]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此无法像</font></font><code>request.user</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匿名</font><font style="vertical-align: inherit;">身份一样对我进行身份验证</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过检查请求的用户是否是票证的所有者，还有其他方法可以使我下载文件吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3309篇《通过验证用户身份使用Django rest框架下载文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
