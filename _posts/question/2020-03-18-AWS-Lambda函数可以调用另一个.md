---
layout: question
title:  AWS Lambda函数可以调用另一个
date:   2020-03-18T10:14:42.000Z
description: 我有2个Lambda函数-一个产生报价，另一个将报价变成订单。我希望Order lambda函数调用Quote函数来重新生成报价，而不是仅仅从不受信任的客...
img: 
author: 神奇神奇Near
category: question
answer: 10
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有2个Lambda函数-一个产生报价，另一个将报价变成订单。</font><font style="vertical-align: inherit;">我希望Order lambda函数调用Quote函数来重新生成报价，而不是仅仅从不受信任的客户端接收报价。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我到处都可以想到的地方-但是看不到如何链接或调用函数...肯定存在！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2138篇《AWS Lambda函数可以调用另一个》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他人指出要使用SQS和步进功能。</font><font style="vertical-align: inherit;">但是这两种解决方案都增加了额外的成本。</font><font style="vertical-align: inherit;">据说步函数状态转换非常昂贵。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AWS lambda提供了一些重试逻辑。</font><font style="vertical-align: inherit;">尝试3次的地方。</font><font style="vertical-align: inherit;">我不确定使用API​​触发它是否仍然有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种回旋解决方案，但是</font><font style="vertical-align: inherit;">当我需要链接它们时，我</font><font style="vertical-align: inherit;">只是</font><font style="vertical-align: inherit;">为我的lambda函数</font><font style="vertical-align: inherit;">调用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API端点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使您可以在编码时决定是否希望它们异步。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想设置POST请求，则可以只设置一个简单的GET请求，其中包含几个查询字符串参数，或者根本不设置两个查询字符串参数，以方便事件传递。 </font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-编辑-</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font><a href="https://docs.aws.amazon.com/apigateway/api-reference/making-http-requests/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://docs.aws.amazon.com/apigateway/api-reference/making-http-requests/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.aws.amazon.com/apigateway/api-reference/making-http-requests/</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和：</font><a href="http://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.aws.amazon.com/lambda/latest/dg/with-on-demand-https-example.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥TomA</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在java中，我们可以执行以下操作：</font></font></p>

<pre><code>AWSLambdaAsync awsLambdaAsync = AWSLambdaAsyncClientBuilder.standard().withRegion("us-east-1").build();<font></font>
<font></font>
InvokeRequest invokeRequest = new InvokeRequest();<font></font>
invokeRequest.withFunctionName("youLambdaFunctionNameToCall").withPayload(payload);<font></font>
<font></font>
InvokeResult invokeResult = awsLambdaAsync.invoke(invokeRequest); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，有效负载是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串化的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> java对象，需要将它作为Json对象传递给另一个lambda，以防您需要将某些信息从调用lambda传递给被调用的lambda。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Near小宇宙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过直接调用lambda函数（至少通过Java）</font></font><code>AWSLambdaClient</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为AWS的博客中描述</font></font><a href="https://java.awsblog.com/post/Tx2J2LPKTTVU93H/Invoking-AWS-Lambda-Functions-from-Java" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但是我实现的Lambda函数将在DynamoDB中插入一个条目，因此我的解决方案使用DynamoDB触发器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我让数据库为表中的每个插入/更新调用Lambda函数，因此这将两个Lambda函数的实现分开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档在这里：</font><a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个指导性的演练：</font><a href="https://aws.amazon.com/blogs/aws/dynamodb-update-triggers-streams-lambda-cross-region-replication-app/" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://aws.amazon.com/blogs/aws/dynamodb-update-triggers-streams-lambda-cross-region-replication-app/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//aws.amazon.com/blogs/aws/dynamodb-update-triggers-streams-lambda-cross-region-replication-app/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也许可以使用Async.js Waterfall功能-有关示例，请参阅本文档第3步中大代码块的底部： </font></font></p>

<p><a href="https://aws.amazon.com/blogs/compute/better-together-amazon-ecs-and-aws-lambda/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://aws.amazon.com/blogs/compute/better-together-amazon-ecs-and-aws-lambda/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚马逊于2016年在AWS lambda中引入了步骤功能。我认为，现在使用步骤功能更为方便，因为它非常容易使用。</font><font style="vertical-align: inherit;">您可以使用以下两个lambda函数构建状态机：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生报价</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">把报价变成订单</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以按照以下步骤轻松地做到这一点： </font></font><br></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您可以使第一个状态产生一个报价，而另一个状态变成顺序</font></font></em></p>

<pre><code>{<font></font>
  Comment: "Produce a quote and turns into an order",<font></font>
  StartAt: "ProduceQuote",<font></font>
  States: {<font></font>
    ProduceQuote: {<font></font>
      "Type": Task,<font></font>
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:ProduceQuote",<font></font>
      "next": TurnsToOrder<font></font>
    }<font></font>
    TurnsToOrder: {<font></font>
      Type: Task,<font></font>
      Resource: "arn:aws:lambda:us-east-1:123456789012:function:ProduceQuote",<font></font>
      end: true<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Steps函数使编写多个lambda函数并依次或并行运行变得非常容易。</font><font style="vertical-align: inherit;">您可以在此处获取有关lambda步骤功能的更多信息：
 </font></font><a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤功能</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小哥</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该将您的</font></font><code>Lambda functions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">via链接起来</font></font><code>SNS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这种方法以最小的工作量提供了良好的性能，延迟和可伸缩性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的第一个</font></font><code>Lambda</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向您发布消息，</font></font><code>SNS Topic</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个</font></font><code>Lambda</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已订阅该主题。</font><font style="vertical-align: inherit;">一旦消息到达主题，就将</font></font><code>Lambda</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消息作为输入参数来执行</font><font style="vertical-align: inherit;">秒</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="http://docs.aws.amazon.com/sns/latest/dg/sns-lambda.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Amazon SNS通知调用Lambda函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用此方法</font></font><a href="http://docs.aws.amazon.com/lambda/latest/dg/with-sns-example.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过SNS调用跨帐户Lambda函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从提出此问题以来，Amazon已发布了Step Functions（</font></font><a href="https://aws.amazon.com/step-functions/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://aws.amazon.com/step-functions/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AWS Lambda背后的核心原则之一是，您可以将更多精力放在业务逻辑上，而将精力放在将它们联系在一起的应用程序逻辑上。</font><font style="vertical-align: inherit;">逐步函数使您能够协调函数之间的复杂交互，而无需编写代码来完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在考虑淘汰SNS，直到在</font></font><a href="http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lambda客户端文档（Java版）中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到了这一点</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于访问AWS Lambda的客户端。</font><font style="vertical-align: inherit;">使用此客户端进行的所有服务调用都处于阻塞状态，直到该服务调用完成才返回。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此SNS具有明显的优势：它是异步的。</font><font style="vertical-align: inherit;">您的lambda不会等待后续的lambda完成。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
