---
layout: question
title:  在 react-native中如何隐藏键盘？
date:   2018-10-24T09:37:00.000Z
description: 如果我点击文本输入，我希望能够点击其他地方以便再次解除键盘（尽管不是返回键）。在我阅读的所有教程和博客文章中，我都没有找到关于这一点的最细微的信息。 这个基本的...
img: 
author: 奔跑的小象
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>如果我点击文本输入，我希望能够点击其他地方以便再次解除键盘（尽管不是返回键）。在我阅读的所有教程和博客文章中，我都没有找到关于这一点的最细微的信息。 这个基本的例子对我来说仍然不适用于模拟器中的react-native 0.4.2。无法在我的iPhone上试用它。</p>

<pre>
<code>&lt;View style={styles.container}&gt;
    &lt;Text style={styles.welcome}&gt;
      Welcome to React Native!
    &lt;/Text&gt;
    &lt;Text style={styles.instructions}&gt;
      To get started, edit index.ios.js
    &lt;/Text&gt;
    &lt;Text style={styles.instructions}&gt;
      Press Cmd+R to reload,{&#39;\n&#39;}
      Cmd+D or shake for dev menu
    &lt;/Text&gt;
    &lt;TextInput
      style={{height: 40, borderColor: &#39;gray&#39;, borderWidth: 1}}
      onEndEditing={this.clearFocus}
    /&gt;
  &lt;/View&gt;</code></pre>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第81篇《在 react-native中如何隐藏键盘？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">奔跑的小象</span>
            <span class="discuss-time">2018.10.24</span>
          </div>
          <div class="discuss-comment"><div class="answercell post-layout--right">
    <div class="post-text" itemprop="text">
<p>The problem with keyboard not dismissing gets more severe if you have <code>keyboardType='numeric'</code>, as there is no way to dismiss it.</p>

<p>Replacing View with ScrollView is not a correct solution, as if you have multiple <code>textInput</code>s or <code>button</code>s, tapping on them while the keyboard is up will only dismiss the keyboard.</p>

<p>Correct way is to encapsulate View with <code>TouchableWithoutFeedback</code> and calling <code>Keyboard.dismiss()</code></p>

<p>EDIT: You can now use <code>ScrollView</code> with <code>keyboardShouldPersistTaps='handled'</code> to only dismiss the keyboard when the tap is not handled by the children (ie. tapping on other textInputs or buttons)</p>

<p>If you have</p>



<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">View</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln">flex</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">}}&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">TextInput</span><span class="pln"> keyboardType</span><span class="pun">=</span><span class="str">'numeric'</span><span class="pun">/&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">View</span><span class="pun">&gt;</span></code></pre>

<p>Change it to</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">ScrollView</span><span class="pln"> contentContainerStyle</span><span class="pun">={{</span><span class="pln">flexGrow</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">}}</span><span class="pln">
  keyboardShouldPersistTaps</span><span class="pun">=</span><span class="str">'handled'</span><span class="pln">
</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="typ">TextInput</span><span class="pln"> keyboardType</span><span class="pun">=</span><span class="str">'numeric'</span><span class="pun">/&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">ScrollView</span><span class="pun">&gt;</span></code></pre>

<p>or</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="typ">Keyboard</span><span class="pun">}</span><span class="pln"> from </span><span class="str">'react-native'</span><span class="pln">

</span><span class="pun">&lt;</span><span class="typ">TouchableWithoutFeedback</span><span class="pln"> onPress</span><span class="pun">={</span><span class="typ">Keyboard</span><span class="pun">.</span><span class="pln">dismiss</span><span class="pun">}</span><span class="pln"> accessible</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">View</span><span class="pln"> style</span><span class="pun">={{</span><span class="pln">flex</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">}}&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">TextInput</span><span class="pln"> keyboardType</span><span class="pun">=</span><span class="str">'numeric'</span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">View</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">TouchableWithoutFeedback</span><span class="pun">&gt;</span></code></pre>

<p>EDIT: You can also create a Higher Order Component to dismiss the keyboard.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> from </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">TouchableWithoutFeedback</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Keyboard</span><span class="pun">,</span><span class="pln"> </span><span class="typ">View</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> from </span><span class="str">'react-native'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> </span><span class="typ">DismissKeyboardHOC</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="typ">Comp</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">({</span><span class="pln"> children</span><span class="pun">,</span><span class="pln"> </span><span class="pun">...</span><span class="pln">props </span><span class="pun">})</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">TouchableWithoutFeedback</span><span class="pln"> onPress</span><span class="pun">={</span><span class="typ">Keyboard</span><span class="pun">.</span><span class="pln">dismiss</span><span class="pun">}</span><span class="pln"> accessible</span><span class="pun">={</span><span class="kwd">false</span><span class="pun">}&gt;</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="typ">Comp</span><span class="pln"> </span><span class="pun">{...</span><span class="pln">props</span><span class="pun">}&gt;</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">children</span><span class="pun">}</span><span class="pln">
      </span><span class="pun">&lt;/</span><span class="typ">Comp</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">TouchableWithoutFeedback</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">);</span><span class="pln">
</span><span class="pun">};</span><span class="pln">
</span><span class="kwd">const</span><span class="pln"> </span><span class="typ">DismissKeyboardView</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ">DismissKeyboardHOC</span><span class="pun">(</span><span class="typ">View</span><span class="pun">)</span></code></pre>

<p>Simply use it like this</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">...</span><span class="pln">
render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">DismissKeyboardView</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">TextInput</span><span class="pln"> keyboardType</span><span class="pun">=</span><span class="str">'numeric'</span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">DismissKeyboardView</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p>NOTE: the <code>accessible={false}</code> is required to make the input form continue to be accessible through VoiceOver. Visually impaired people will thank you!</p>
    </div>
    <div class="grid mb0 fw-wrap ai-start jc-end gs8 gsy">
    <div class="grid--cell mr16" style="flex: 1 1 100px;">
                    </div>
    
            


    <div class="post-signature grid--cell fl0">


    </div>
    </div>
</div></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
