---
layout: question
title:  在React js中进行API调用的正确方法是什么？
date:   2020-03-11T15:11:18.000Z
description: 我最近从Angular转到了ReactJs。我正在使用jQuery进行API调用。我有一个API，可返回要打印在列表中的随机用户列表。我不确定如何编写...
img: 
author: 阳光Itachi
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近从Angular转到了ReactJs。</font><font style="vertical-align: inherit;">我正在使用jQuery进行API调用。</font><font style="vertical-align: inherit;">我有一个API，可返回要打印在列表中的随机用户列表。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定如何编写我的API调用。</font><font style="vertical-align: inherit;">最佳做法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了以下操作，但未得到任何输出。</font><font style="vertical-align: inherit;">如果需要，我愿意实现替代API库。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是我的代码：</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>import React from 'react';<font></font>
<font></font>
export default class UserList extends React.Component {    <font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.state = {<font></font>
      person: []<font></font>
    };<font></font>
  }<font></font>
<font></font>
  UserList(){<font></font>
    return $.getJSON('https://randomuser.me/api/')<font></font>
    .then(function(data) {<font></font>
      return data.results;<font></font>
    });<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    this.UserList().then(function(res){<font></font>
      this.state = {person: res};<font></font>
    });<font></font>
    return (<font></font>
      &lt;div id="layout-content" className="layout-content-wrapper"&gt;<font></font>
        &lt;div className="panel-list"&gt;<font></font>
          {this.state.person.map((item, i) =&gt;{<font></font>
            return(<font></font>
              &lt;h1&gt;{item.name.first}&lt;/h1&gt;<font></font>
              &lt;span&gt;{item.cell}, {item.email}&lt;/span&gt;<font></font>
            )<font></font>
          })}<font></font>
        &lt;div&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）您可以使用F </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">etch API</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从End Point获取数据：</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>Github</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为用户</font><font style="vertical-align: inherit;">获取所有</font><font style="vertical-align: inherit;">安息的</font><font style="vertical-align: inherit;">示例</font></font></p>

<pre><code>  /* Fetch GitHub Repos */<font></font>
  fetchData = () =&gt; {<font></font>
<font></font>
       //show progress bar<font></font>
      this.setState({ isLoading: true });<font></font>
<font></font>
      //fetch repos<font></font>
      fetch(`https://api.github.com/users/hiteshsahu/repos`)<font></font>
      .then(response =&gt; response.json())<font></font>
      .then(data =&gt; {<font></font>
        if (Array.isArray(data)) {<font></font>
          console.log(JSON.stringify(data));<font></font>
          this.setState({ repos: data ,<font></font>
                         isLoading: false});<font></font>
        } else {<font></font>
          this.setState({ repos: [],<font></font>
                          isLoading: false  <font></font>
                        });<font></font>
        }<font></font>
      });<font></font>
  };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）其他替代品是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Axios</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用axios，您可以省去将http请求的结果传递给.json（）方法的中间步骤。</font><font style="vertical-align: inherit;">Axios只是返回您期望的数据对象。</font></font></p>
</blockquote>

<pre><code>  import axios from "axios";<font></font>
<font></font>
 /* Fetch GitHub Repos */<font></font>
  fetchDataWithAxios = () =&gt; {<font></font>
<font></font>
     //show progress bar<font></font>
      this.setState({ isLoading: true });<font></font>
<font></font>
      // fetch repos with axios<font></font>
      axios<font></font>
          .get(`https://api.github.com/users/hiteshsahu/repos`)<font></font>
          .then(result =&gt; {<font></font>
            console.log(result);<font></font>
            this.setState({<font></font>
              repos: result.data,<font></font>
              isLoading: false<font></font>
            });<font></font>
          })<font></font>
          .catch(error =&gt;<font></font>
            this.setState({<font></font>
              error,<font></font>
              isLoading: false<font></font>
            })<font></font>
          );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以选择使用以下任何一种策略来获取数据 </font></font><code>componentDidMount</code></p>

<pre><code>class App extends React.Component {<font></font>
  state = {<font></font>
    repos: [],<font></font>
   isLoading: false<font></font>
  };<font></font>
<font></font>
  componentDidMount() {<font></font>
    this.fetchData ();<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时，您可以在加载数据时显示进度条</font></font></p>

<pre><code>   {this.state.isLoading &amp;&amp; &lt;LinearProgress /&gt;}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为外部API调用的最佳实践，是React Lifecycle方法</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentDidMount（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在执行API调用之后，您应该更新本地状态以触发新的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">render（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法调用，然后更新后的本地状态中的更改将应用于组件视图。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font><font style="vertical-align: inherit;">React中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部数据源调用的</font><font style="vertical-align: inherit;">另一种选择，</font><font style="vertical-align: inherit;">是指向类的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Constructor（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">构造函数是在初始化组件对象实例时执行的第一个方法。</font><font style="vertical-align: inherit;">您可以在</font></font><a href="https://reactjs.org/docs/higher-order-components.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高阶组件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文档示例中看到此方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不应</font><font style="vertical-align: inherit;">将方法</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentWillMount（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UNSAFE_componentWillMount（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于外部API调用，因为它们已被弃用。</font></font><a href="https://blog.northcoders.com/react-componentwillmount-to-be-deprecated" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会看到常见原因，为什么不赞成使用此方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，您绝</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能使用render（）方法或直接从render（）调用的方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为外部API调用的点。</font><font style="vertical-align: inherit;">如果这样做，您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序将被阻止</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font><font style="vertical-align: inherit;">在函数组件中</font></font><a href="http://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用钩子获取数据</font></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有api调用的完整示例：</font><a href="https://codesandbox.io/s/jvvkoo8pq3" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://codesandbox.io/s/jvvkoo8pq3" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codesandbox.io/s/jvvkoo8pq3</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个示例：</font><a href="https://jsfiddle.net/bradcypert/jhrt40yv/6/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/bradcypert/jhrt40yv/6/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/bradcypert/jhrt40yv/6/</font></font></a></p>

<pre><code>const Repos = ({user}) =&gt; {<font></font>
  const [repos, setRepos] = React.useState([]);<font></font>
<font></font>
  React.useEffect(() =&gt; {<font></font>
    const fetchData = async () =&gt; {<font></font>
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);<font></font>
        setRepos(response.data);<font></font>
    }<font></font>
<font></font>
    fetchData();<font></font>
  }, []);<font></font>
<font></font>
  return (<font></font>
  &lt;div&gt;<font></font>
    {repos.map(repo =&gt;<font></font>
      &lt;div key={repo.id}&gt;{repo.name}&lt;/div&gt;<font></font>
    )}<font></font>
  &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
ReactDOM.render(&lt;Repos user="bradcypert" /&gt;, document.querySelector("#app"))<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天AGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在此处添加当前</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是现在放置api调用的地方。</font><font style="vertical-align: inherit;">参见</font></font><a href="https://btholt.github.io/complete-intro-to-react-v5/effects" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://btholt.github.io/complete-intro-to-react-v5/effects</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种干净的方法是</font><font style="vertical-align: inherit;">使用</font><strong><font style="vertical-align: inherit;">try / catch函数</font></strong><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentDidMount</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部进行异步API调用</font><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用API时，我们会收到响应。</font><font style="vertical-align: inherit;">然后，我们对其应用JSON方法，以将响应转换为JavaScript对象。</font><font style="vertical-align: inherit;">然后，我们从该响应对象中仅获取其子对象“ results”（data.results）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我们将状态为“ userList”的数组定义为一个空数组。</font><font style="vertical-align: inherit;">一旦我们进行API调用并从该API接收数据，我们就会使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将“结果”分配给userList </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在render函数内部，我们告诉userList将来自状态。</font><font style="vertical-align: inherit;">由于userList是对象数组，我们通过它映射，以显示每个对象“用户”的图片，名称和电话号码。</font><font style="vertical-align: inherit;">要检索此信息，我们使用点符号（例如user.phone）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：根据您的API，您的响应可能看起来有所不同。</font><font style="vertical-align: inherit;">Console.log整个“响应”，以查看您需要从中获取哪些变量，然后在setState中分配它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UserList.js</font></font></p>

<pre><code>import React, { Component } from "react";<font></font>
<font></font>
export default class UserList extends Component {<font></font>
   state = {<font></font>
      userList: [], // list is empty in the beginning<font></font>
      error: false<font></font>
   };<font></font>
<font></font>
   componentDidMount() {<font></font>
       this.getUserList(); // function call<font></font>
   }<font></font>
<font></font>
   getUserList = async () =&gt; {<font></font>
       try { //try to get data<font></font>
           const response = await fetch("https://randomuser.me/api/");<font></font>
           if (response.ok) { // ckeck if status code is 200<font></font>
               const data = await response.json();<font></font>
               this.setState({ userList: data.results});<font></font>
           } else { this.setState({ error: true }) }<font></font>
       } catch (e) { //code will jump here if there is a network problem<font></font>
   this.setState({ error: true });<font></font>
  }<font></font>
};<font></font>
<font></font>
  render() {<font></font>
  const { userList, error } = this.state<font></font>
      return (<font></font>
          &lt;div&gt;<font></font>
            {userList.length &gt; 0 &amp;&amp; userList.map(user =&gt; (<font></font>
              &lt;div key={user}&gt;<font></font>
                  &lt;img src={user.picture.medium} alt="user"/&gt;<font></font>
                  &lt;div&gt;<font></font>
                      &lt;div&gt;{user.name.first}{user.name.last}&lt;/div&gt;<font></font>
                      &lt;div&gt;{user.phone}&lt;/div&gt;<font></font>
                      &lt;div&gt;{user.email}&lt;/div&gt;<font></font>
                  &lt;/div&gt;<font></font>
              &lt;/div&gt;<font></font>
            ))}<font></font>
            {error &amp;&amp; &lt;div&gt;Sorry, can not display the data&lt;/div&gt;}<font></font>
          &lt;/div&gt;<font></font>
      )<font></font>
}}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望您看看redux
 </font></font><a href="http://redux.js.org/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://redux.js.org/index.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们具有处理异步调用（即API调用）的定义非常明确的方式，并且我建议使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fetch</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> npm包，</font><font style="vertical-align: inherit;">而不是使用jQuery进行API调用，</font><font style="vertical-align: inherit;">现代浏览器目前支持</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fetch</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但也可以使用shim服务器端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有另一个令人惊奇的软件包</font></font><strong><a href="https://github.com/visionmedia/superagent" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">superagent</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在发出API请求时它有很多选择，而且非常易于使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React v16</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中的</font><font style="vertical-align: inherit;">这一部分</font><font style="vertical-align: inherit;">将回答您的问题，请继续阅读有关componentDidMount（）的内容：</font></font></p>

<blockquote>
  <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentDidMount（）</font></font></h3>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂载组件后立即调用componentDidMount（）。</font><font style="vertical-align: inherit;">需要DOM节点的初始化应在此处进行。</font><font style="vertical-align: inherit;">如果需要从远程端点加载数据，这是实例化网络请求的好地方。</font><font style="vertical-align: inherit;">此方法是设置任何订阅的好地方。</font><font style="vertical-align: inherit;">如果这样做，请不要忘记取消订阅componentWillUnmount（）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">componentDidMount</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被认为是进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">api调用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，访问节点</font><font style="vertical-align: inherit;">的最佳位置和周期，这</font><font style="vertical-align: inherit;">意味着此时可以安全地进行调用，更新视图或在文档准备就绪时执行任何操作（如果您愿意）使用jQuery，它应该以某种方式提醒您document.ready（）函数，在这里您可以确保一切准备就绪，可以在代码中进行任何操作...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染函数应该是纯函数，这意味着它仅使用状态和道具进行渲染，从不尝试在渲染中修改状态，这通常会导致难看的错误并显着降低性能。</font><font style="vertical-align: inherit;">如果您分开数据获取并在React App中提出问题，这也是一个好点。</font><font style="vertical-align: inherit;">我建议您阅读这篇文章，它很好地解释了这个想法。</font></font><a href="https://medium.com/@learnreact/container-components-c0e67432e005#.sfydn87nm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@learnreact/container-components-c0e67432e005#.sfydn87nm</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要查看</font></font><a href="https://facebook.github.io/flux/docs/overview.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flux体系结构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我也建议您检查</font></font><a href="http://redux.js.org/docs/basics/UsageWithReact.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-Redux的实现</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将您的api调用放入您的操作中。</font><font style="vertical-align: inherit;">这比将它们全部放入组件中要干净得多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作是一种帮助程序方法，您可以调用这些方法来更改应用程序状态或进行api调用。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
