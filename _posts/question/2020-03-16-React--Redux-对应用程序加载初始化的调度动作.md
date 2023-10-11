---
layout: question
title:  React / Redux-对应用程序加载/初始化的调度动作
date:   2020-03-16T07:22:04.000Z
description: 我有来自服务器的令牌身份验证，因此在最初加载我的Redux应用程序时，我需要向该服务器发出请求，以检查用户是否已通过身份验证，如果是，我应该获得令牌。...
img: 
author: 凯泡芙A
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有来自服务器的令牌身份验证，因此在最初加载我的Redux应用程序时，我需要向该服务器发出请求，以检查用户是否已通过身份验证，如果是，我应该获得令牌。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现不建议使用Redux核心INIT操作，因此如何在呈现应用程序之前调度操作？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1791篇《React / Redux-对应用程序加载/初始化的调度动作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearGilSam</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用redux-thunk从应用程序init的API端点获取用户下的帐户，并且它是异步的，因此数据在我的应用程序渲染后传入，并且上面的大多数解决方案对我来说并不奇怪，有些是折旧。</font><font style="vertical-align: inherit;">因此我查看了componentDidUpdate（）。</font><font style="vertical-align: inherit;">因此，基本上在APP初始化上，我必须具有API的帐户列表，并且我的redux存储帐户将为null或[]。</font><font style="vertical-align: inherit;">此后求助于此。</font></font></p>

<pre><code>class SwitchAccount extends Component {<font></font>
<font></font>
    constructor(props) {<font></font>
        super(props);<font></font>
<font></font>
        this.Format_Account_List = this.Format_Account_List.bind(this); //function to format list for html form drop down<font></font>
<font></font>
        //Local state<font></font>
        this.state = {<font></font>
                formattedUserAccounts : [],  //Accounts list with html formatting for drop down<font></font>
                selectedUserAccount: [] //selected account by user<font></font>
<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
<font></font>
<font></font>
    //Check if accounts has been updated by redux thunk and update state<font></font>
    componentDidUpdate(prevProps) {<font></font>
<font></font>
        if (prevProps.accounts !== this.props.accounts) {<font></font>
            this.Format_Account_List(this.props.accounts);<font></font>
        }<font></font>
     }<font></font>
<font></font>
<font></font>
     //take the JSON data and work with it :-)   <font></font>
     Format_Account_List(json_data){<font></font>
<font></font>
        let a_users_list = []; //create user array<font></font>
        for(let i = 0; i &lt; json_data.length; i++) {<font></font>
<font></font>
            let data = JSON.parse(json_data[i]);<font></font>
            let s_username = &lt;option key={i} value={data.s_username}&gt;{data.s_username}&lt;/option&gt;;<font></font>
            a_users_list.push(s_username); //object<font></font>
        }<font></font>
<font></font>
        this.setState({formattedUserAccounts: a_users_list}); //state for drop down list (html formatted)<font></font>
<font></font>
    }<font></font>
<font></font>
     changeAccount() {<font></font>
<font></font>
         //do some account change checks here<font></font>
      }<font></font>
<font></font>
      render() {<font></font>
<font></font>
<font></font>
        return (<font></font>
             &lt;Form &gt;<font></font>
                &lt;Form.Group &gt;<font></font>
                    &lt;Form.Control onChange={e =&gt; this.setState( {selectedUserAccount : e.target.value})} as="select"&gt;<font></font>
                        {this.state.formattedUserAccounts}<font></font>
                    &lt;/Form.Control&gt;<font></font>
                &lt;/Form.Group&gt;<font></font>
                &lt;Button variant="info" size="lg" onClick={this.changeAccount} block&gt;Select&lt;/Button&gt;<font></font>
            &lt;/Form&gt;<font></font>
          );<font></font>
<font></font>
<font></font>
         }    <font></font>
 }<font></font>
<font></font>
 const mapStateToProps = state =&gt; ({<font></font>
      accounts: state.accountSelection.accounts, //accounts from redux store<font></font>
 });<font></font>
<font></font>
<font></font>
  export default connect(mapStateToProps)(SwitchAccount);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对为此提出的任何解决方案都不满意，然后想到我正在考虑需要呈现的类。</font><font style="vertical-align: inherit;">如果我刚刚创建了一个用于启动的类，然后将其推送到</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中并仅</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示加载屏幕呢？</font></font></p>

<pre><code>&lt;Provider store={store}&gt;<font></font>
  &lt;Startup&gt;<font></font>
    &lt;Router&gt;<font></font>
      &lt;Switch&gt;<font></font>
        &lt;Route exact path='/' component={Homepage} /&gt;<font></font>
      &lt;/Switch&gt;<font></font>
    &lt;/Router&gt;<font></font>
  &lt;/Startup&gt;<font></font>
&lt;/Provider&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后有这样的事情：</font></font></p>

<pre><code>class Startup extends Component {<font></font>
  static propTypes = {<font></font>
    connection: PropTypes.object<font></font>
  }<font></font>
  componentDidMount() {<font></font>
    this.props.actions.initialiseConnection();<font></font>
  }<font></font>
  render() {<font></font>
    return this.props.connection<font></font>
      ? this.props.children<font></font>
      : (&lt;p&gt;Loading...&lt;/p&gt;);<font></font>
  }<font></font>
}<font></font>
<font></font>
function mapStateToProps(state) {<font></font>
  return {<font></font>
    connection: state.connection<font></font>
  };<font></font>
}<font></font>
<font></font>
function mapDispatchToProps(dispatch) {<font></font>
  return {<font></font>
    actions: bindActionCreators(Actions, dispatch)<font></font>
  };<font></font>
}<font></font>
<font></font>
export default connect(<font></font>
  mapStateToProps,<font></font>
  mapDispatchToProps<font></font>
)(Startup);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后编写一些redux操作来异步初始化您的应用程序。</font><font style="vertical-align: inherit;">工作请客。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Root </font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中</font><font style="vertical-align: inherit;">分派操作，</font><font style="vertical-align: inherit;">并且可以在</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中验证身份验证状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>class App extends Component {<font></font>
  componentDidMount() {<font></font>
    this.props.getAuth()<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return this.props.isReady<font></font>
      ? &lt;div&gt; ready &lt;/div&gt;<font></font>
      : &lt;div&gt;not ready&lt;/div&gt;<font></font>
  }<font></font>
}<font></font>
<font></font>
const mapStateToProps = (state) =&gt; ({<font></font>
  isReady: state.isReady,<font></font>
})<font></font>
<font></font>
const mapDispatchToProps = {<font></font>
  getAuth,<font></font>
}<font></font>
<font></font>
export default connect(mapStateToProps, mapDispatchToProps)(App)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：此答案适用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router 3</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用react-router </font></font><a href="https://github.com/reactjs/react-router/blob/master/docs/API.md#onenternextstate-replace-callback" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onEnter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font><font style="vertical-align: inherit;">解决了这个问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是代码的样子：</font></font></p>

<pre class="lang-js prettyprint-override"><code>// this function is called only once, before application initially starts to render react-route and any of its related DOM elements<font></font>
// it can be used to add init config settings to the application<font></font>
function onAppInit(dispatch) {<font></font>
  return (nextState, replace, callback) =&gt; {<font></font>
    dispatch(performTokenRequest())<font></font>
      .then(() =&gt; {<font></font>
        // callback is like a "next" function, app initialization is stopped until it is called.<font></font>
        callback();<font></font>
      });<font></font>
  };<font></font>
}<font></font>
<font></font>
const App = () =&gt; (<font></font>
  &lt;Provider store={store}&gt;<font></font>
    &lt;IntlProvider locale={language} messages={messages}&gt;<font></font>
      &lt;div&gt;<font></font>
        &lt;Router history={history}&gt;<font></font>
          &lt;Route path="/" component={MainLayout} onEnter={onAppInit(store.dispatch)}&gt;<font></font>
            &lt;IndexRoute component={HomePage} /&gt;<font></font>
            &lt;Route path="about" component={AboutPage} /&gt;<font></font>
          &lt;/Route&gt;<font></font>
        &lt;/Router&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/IntlProvider&gt;<font></font>
  &lt;/Provider&gt;<font></font>
);<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
