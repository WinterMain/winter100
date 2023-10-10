---
layout: question
title:  在Javascript中将对象承诺转换为字符串
date:   2020-03-23T07:51:08.000Z
description: 我正在使用React，Next.Js，semantic-ui-react和Solidity。我的目标是打印出用户地址（从MetaMask）和Project...
img: 
author: JinJin
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React，Next.Js，semantic-ui-react和Solidity。</font><font style="vertical-align: inherit;">我的目标是打印出用户地址（从MetaMask）和ProjectTitle（由用户设置）作为语义UI反应卡的元信息。</font><font style="vertical-align: inherit;">可以打印出“页眉”中的地址，但是我无法将ProjectTitle打印为“元”。</font><font style="vertical-align: inherit;">标题应该是一个字符串，但是我收到一个对象承诺。  </font></font></p>

<pre><code>static async getInitialProps() {<font></font>
    const projects = await factory.methods.getDeployedProjects().call();<font></font>
    return {<font></font>
        projects<font></font>
    };<font></font>
}<font></font>
<font></font>
async getProjectTitle(address) {<font></font>
    let title;<font></font>
    try {<font></font>
        title = await factory.methods.projectTitle(address).call();<font></font>
    } catch (err) {<font></font>
        console.log('err');<font></font>
    }<font></font>
    return title;<font></font>
}<font></font>
<font></font>
renderProjects() {<font></font>
    const items = this.props.projects.map(address =&gt; {<font></font>
        return {<font></font>
            header: address,<font></font>
            color: 'green',<font></font>
            description: (<font></font>
                &lt;Link route={`/projects/${address}`}&gt;<font></font>
                    &lt;a&gt;View Project&lt;/a&gt;<font></font>
                &lt;/Link&gt;<font></font>
            ),<font></font>
            **meta: this.getProjectTitle(address)**,<font></font>
            fluid: true,<font></font>
            style: { overflowWrap: 'break-word' }<font></font>
        };<font></font>
    }, );<font></font>
    return &lt;Card.Group items={items} /&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">团结合同的一部分：</font></font></p>

<pre><code>address[] public deployedProjects;<font></font>
mapping(address =&gt; string) public projectTitle;<font></font>
<font></font>
function createProject(string startup, string title, string deadline, string description, uint wage) public {<font></font>
    address newProject = new Project(startup, title, deadline, description, wage, msg.sender);<font></font>
    projectTitle[newProject] = title;<font></font>
    deployedProjects.push(newProject);<font></font>
}<font></font>
<font></font>
function getDeployedProjects() public view returns (address[]) {<font></font>
    return (<font></font>
        deployedProjects<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本框架来自Stephen Grider的Udemy课程“以太坊和团结：完整的开发人员指南”。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2948篇《在Javascript中将对象承诺转换为字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有直接的方法将对象承诺转换为字符串。</font><font style="vertical-align: inherit;">继续处理的唯一方法是调用一个</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数或使用</font></font><code>.then()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个回调函数。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
