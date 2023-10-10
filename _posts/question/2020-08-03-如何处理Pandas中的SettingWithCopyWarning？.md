---
layout: question
title:  如何处理Pandas中的SettingWithCopyWarning？
date:   2020-08-03T06:13:35.000Z
description: 背景我刚刚将熊猫从0.11升级到0.13.0rc1。现在，该应用程序弹出许多新警告。其中之一是这样的：E \FinReporter\FM_EXT.py...
img: 
author: Itachi
category: question
answer: 2
tags: Python
topic: Python
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚将Pandas从0.11升级到0.13.0rc1。</font><font style="vertical-align: inherit;">现在，该应用程序弹出许多新警告。</font><font style="vertical-align: inherit;">其中之一是这样的：</font></font></p>
<pre class="lang-py prettyprint prettyprinted" style=""><code><span class="pln">E</span><span class="pun">:</span><span class="pln">\FinReporter\FM_EXT</span><span class="pun">.</span><span class="pln">py</span><span class="pun">:</span><span class="lit">449</span><span class="pun">:</span><span class="pln"> </span><span class="typ">SettingWithCopyWarning</span><span class="pun">:</span><span class="pln"> A value </span><span class="kwd">is</span><span class="pln"> trying to be set on a copy of a slice </span><span class="kwd">from</span><span class="pln"> a </span><span class="typ">DataFrame</span><span class="pun">.</span><span class="pln">
</span><span class="typ">Try</span><span class="pln"> using </span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[</span><span class="pln">row_index</span><span class="pun">,</span><span class="pln">col_indexer</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> value instead
  quote_df</span><span class="pun">[</span><span class="str">'TVol'</span><span class="pun">]</span><span class="pln">   </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'TVol'</span><span class="pun">]/</span><span class="pln">TVOL_SCALE</span></code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道到底是什么意思？</font><font style="vertical-align: inherit;">我需要改变什么吗？</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我坚持使用该如何警告</font></font><code>quote_df['TVol']   = quote_df['TVol']/TVOL_SCALE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生错误的功能</font></font></h2>
<pre class="lang-py prettyprint prettyprinted" style=""><code><span class="kwd">def</span><span class="pln"> _decode_stock_quote</span><span class="pun">(</span><span class="pln">list_of_150_stk_str</span><span class="pun">):</span><span class="pln">
    </span><span class="str">"""decode the webpage and return dataframe"""</span><span class="pln">

    </span><span class="kwd">from</span><span class="pln"> cStringIO </span><span class="kwd">import</span><span class="pln"> </span><span class="typ">StringIO</span><span class="pln">

    str_of_all </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pun">.</span><span class="pln">join</span><span class="pun">(</span><span class="pln">list_of_150_stk_str</span><span class="pun">)</span><span class="pln">

    quote_df </span><span class="pun">=</span><span class="pln"> pd</span><span class="pun">.</span><span class="pln">read_csv</span><span class="pun">(</span><span class="typ">StringIO</span><span class="pun">(</span><span class="pln">str_of_all</span><span class="pun">),</span><span class="pln"> sep</span><span class="pun">=</span><span class="str">','</span><span class="pun">,</span><span class="pln"> names</span><span class="pun">=</span><span class="pln">list</span><span class="pun">(</span><span class="str">'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg'</span><span class="pun">))</span><span class="pln"> </span><span class="com">#dtype={'A': object, 'B': object, 'C': np.float64}</span><span class="pln">
    quote_df</span><span class="pun">.</span><span class="pln">rename</span><span class="pun">(</span><span class="pln">columns</span><span class="pun">={</span><span class="str">'A'</span><span class="pun">:</span><span class="str">'STK'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'B'</span><span class="pun">:</span><span class="str">'TOpen'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'C'</span><span class="pun">:</span><span class="str">'TPCLOSE'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'D'</span><span class="pun">:</span><span class="str">'TPrice'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'E'</span><span class="pun">:</span><span class="str">'THigh'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'F'</span><span class="pun">:</span><span class="str">'TLow'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'I'</span><span class="pun">:</span><span class="str">'TVol'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'J'</span><span class="pun">:</span><span class="str">'TAmt'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'e'</span><span class="pun">:</span><span class="str">'TDate'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'f'</span><span class="pun">:</span><span class="str">'TTime'</span><span class="pun">},</span><span class="pln"> inplace</span><span class="pun">=</span><span class="kwd">True</span><span class="pun">)</span><span class="pln">
    quote_df </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">.</span><span class="pln">ix</span><span class="pun">[:,[</span><span class="lit">0</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">1</span><span class="pun">,</span><span class="lit">4</span><span class="pun">,</span><span class="lit">5</span><span class="pun">,</span><span class="lit">8</span><span class="pun">,</span><span class="lit">9</span><span class="pun">,</span><span class="lit">30</span><span class="pun">,</span><span class="lit">31</span><span class="pun">]]</span><span class="pln">
    quote_df</span><span class="pun">[</span><span class="str">'TClose'</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'TPrice'</span><span class="pun">]</span><span class="pln">
    quote_df</span><span class="pun">[</span><span class="str">'RT'</span><span class="pun">]</span><span class="pln">     </span><span class="pun">=</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="pun">(</span><span class="pln">quote_df</span><span class="pun">[</span><span class="str">'TPrice'</span><span class="pun">]/</span><span class="pln">quote_df</span><span class="pun">[</span><span class="str">'TPCLOSE'</span><span class="pun">]</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln">
    quote_df</span><span class="pun">[</span><span class="str">'TVol'</span><span class="pun">]</span><span class="pln">   </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'TVol'</span><span class="pun">]/</span><span class="pln">TVOL_SCALE
    quote_df</span><span class="pun">[</span><span class="str">'TAmt'</span><span class="pun">]</span><span class="pln">   </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'TAmt'</span><span class="pun">]/</span><span class="pln">TAMT_SCALE
    quote_df</span><span class="pun">[</span><span class="str">'STK_ID'</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'STK'</span><span class="pun">].</span><span class="pln">str</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">13</span><span class="pun">,</span><span class="lit">19</span><span class="pun">)</span><span class="pln">
    quote_df</span><span class="pun">[</span><span class="str">'STK_Name'</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'STK'</span><span class="pun">].</span><span class="pln">str</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">(</span><span class="lit">21</span><span class="pun">,</span><span class="lit">30</span><span class="pun">)#.</span><span class="pln">decode</span><span class="pun">(</span><span class="str">'gb2312'</span><span class="pun">)</span><span class="pln">
    quote_df</span><span class="pun">[</span><span class="str">'TDate'</span><span class="pun">]</span><span class="pln">  </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">.</span><span class="typ">TDate</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="kwd">lambda</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> x</span><span class="pun">[</span><span class="lit">0</span><span class="pun">:</span><span class="lit">4</span><span class="pun">]+</span><span class="pln">x</span><span class="pun">[</span><span class="lit">5</span><span class="pun">:</span><span class="lit">7</span><span class="pun">]+</span><span class="pln">x</span><span class="pun">[</span><span class="lit">8</span><span class="pun">:</span><span class="lit">10</span><span class="pun">])</span><span class="pln">
    
    </span><span class="kwd">return</span><span class="pln"> quote_df</span></code></pre>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多错误讯息</font></font></h2>
<pre class="lang-py prettyprint prettyprinted" style=""><code><span class="pln">E</span><span class="pun">:</span><span class="pln">\FinReporter\FM_EXT</span><span class="pun">.</span><span class="pln">py</span><span class="pun">:</span><span class="lit">449</span><span class="pun">:</span><span class="pln"> </span><span class="typ">SettingWithCopyWarning</span><span class="pun">:</span><span class="pln"> A value </span><span class="kwd">is</span><span class="pln"> trying to be set on a copy of a slice </span><span class="kwd">from</span><span class="pln"> a </span><span class="typ">DataFrame</span><span class="pun">.</span><span class="pln">
</span><span class="typ">Try</span><span class="pln"> using </span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[</span><span class="pln">row_index</span><span class="pun">,</span><span class="pln">col_indexer</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> value instead
  quote_df</span><span class="pun">[</span><span class="str">'TVol'</span><span class="pun">]</span><span class="pln">   </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'TVol'</span><span class="pun">]/</span><span class="pln">TVOL_SCALE
E</span><span class="pun">:</span><span class="pln">\FinReporter\FM_EXT</span><span class="pun">.</span><span class="pln">py</span><span class="pun">:</span><span class="lit">450</span><span class="pun">:</span><span class="pln"> </span><span class="typ">SettingWithCopyWarning</span><span class="pun">:</span><span class="pln"> A value </span><span class="kwd">is</span><span class="pln"> trying to be set on a copy of a slice </span><span class="kwd">from</span><span class="pln"> a </span><span class="typ">DataFrame</span><span class="pun">.</span><span class="pln">
</span><span class="typ">Try</span><span class="pln"> using </span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[</span><span class="pln">row_index</span><span class="pun">,</span><span class="pln">col_indexer</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> value instead
  quote_df</span><span class="pun">[</span><span class="str">'TAmt'</span><span class="pun">]</span><span class="pln">   </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">[</span><span class="str">'TAmt'</span><span class="pun">]/</span><span class="pln">TAMT_SCALE
E</span><span class="pun">:</span><span class="pln">\FinReporter\FM_EXT</span><span class="pun">.</span><span class="pln">py</span><span class="pun">:</span><span class="lit">453</span><span class="pun">:</span><span class="pln"> </span><span class="typ">SettingWithCopyWarning</span><span class="pun">:</span><span class="pln"> A value </span><span class="kwd">is</span><span class="pln"> trying to be set on a copy of a slice </span><span class="kwd">from</span><span class="pln"> a </span><span class="typ">DataFrame</span><span class="pun">.</span><span class="pln">
</span><span class="typ">Try</span><span class="pln"> using </span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[</span><span class="pln">row_index</span><span class="pun">,</span><span class="pln">col_indexer</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> value instead
  quote_df</span><span class="pun">[</span><span class="str">'TDate'</span><span class="pun">]</span><span class="pln">  </span><span class="pun">=</span><span class="pln"> quote_df</span><span class="pun">.</span><span class="typ">TDate</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="kwd">lambda</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> x</span><span class="pun">[</span><span class="lit">0</span><span class="pun">:</span><span class="lit">4</span><span class="pun">]+</span><span class="pln">x</span><span class="pun">[</span><span class="lit">5</span><span class="pun">:</span><span class="lit">7</span><span class="pun">]+</span><span class="pln">x</span><span class="pun">[</span><span class="lit">8</span><span class="pun">:</span><span class="lit">10</span><span class="pun">])</span></code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一柳叶风吹</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，此问题发生在下面的&gt; simplified &lt;示例中。</font><font style="vertical-align: inherit;">而且我也能够解决它（希望有一个正确的解决方案）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有警告的旧代码：</font></font></p>

<pre class="lang-py prettyprint prettyprinted" style=""><code><span class="kwd">def</span><span class="pln"> update_old_dataframe</span><span class="pun">(</span><span class="pln">old_dataframe</span><span class="pun">,</span><span class="pln"> new_dataframe</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> new_index</span><span class="pun">,</span><span class="pln"> new_row </span><span class="kwd">in</span><span class="pln"> new_dataframe</span><span class="pun">.</span><span class="pln">iterrorws</span><span class="pun">():</span><span class="pln">
        old_dataframe</span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[</span><span class="pln">new_index</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> update_row</span><span class="pun">(</span><span class="pln">old_dataframe</span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[</span><span class="pln">new_index</span><span class="pun">],</span><span class="pln"> new_row</span><span class="pun">)</span><span class="pln">

</span><span class="kwd">def</span><span class="pln"> update_row</span><span class="pun">(</span><span class="pln">old_row</span><span class="pun">,</span><span class="pln"> new_row</span><span class="pun">):</span><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> field </span><span class="kwd">in</span><span class="pln"> </span><span class="pun">[</span><span class="pln">list_of_columns</span><span class="pun">]:</span><span class="pln">
        </span><span class="com"># line with warning because of chain indexing old_dataframe[new_index][field]</span><span class="pln">
        old_row</span><span class="pun">[</span><span class="pln">field</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> new_row</span><span class="pun">[</span><span class="pln">field</span><span class="pun">]</span><span class="pln">  
    </span><span class="kwd">return</span><span class="pln"> old_row</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这打印了该行的警告 </font></font><code>old_row[field] = new_row[field]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于update_row方法中的行实际上是type </font></font><code>Series</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此我将行替换为：</font></font></p>

<pre class="lang-py prettyprint prettyprinted" style=""><code><span class="pln">old_row</span><span class="pun">.</span><span class="pln">at</span><span class="pun">[</span><span class="pln">field</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> new_row</span><span class="pun">.</span><span class="pln">at</span><span class="pun">[</span><span class="pln">field</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即</font><font style="vertical-align: inherit;">用于访问/查找的</font></font><a href="https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.at.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></a><font style="vertical-align: inherit;"></font><code>Series</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">即使两种方法都可以正常工作并且结果是相同的，但是通过这种方式，我不必禁用警告（=将其保留在其他地方的其他链索引问题中）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这可以帮助某人。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.08.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个话题确实让Pandas感到困惑。</font><font style="vertical-align: inherit;">幸运的是，它有一个相对简单的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于，并不总是清楚数据过滤操作（例如loc）是否返回DataFrame的副本或视图。</font><font style="vertical-align: inherit;">因此，这种过滤后的DataFrame的进一步使用可能会造成混淆。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个简单的解决方案是（除非您需要处理非常大的数据集）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当需要更新任何值时，请始终确保在分配之前隐式复制DataFrame。</font></font></p>

<pre class="lang-py prettyprint prettyprinted" style=""><code><span class="pln">df  </span><span class="com"># Some DataFrame</span><span class="pln">
df </span><span class="pun">=</span><span class="pln"> df</span><span class="pun">.</span><span class="pln">loc</span><span class="pun">[:,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">:</span><span class="lit">2</span><span class="pun">]</span><span class="pln">  </span><span class="com"># Some filtering (unsure whether a view or copy is returned)</span><span class="pln">
df </span><span class="pun">=</span><span class="pln"> df</span><span class="pun">.</span><span class="pln">copy</span><span class="pun">()</span><span class="pln">  </span><span class="com"># Ensuring a copy is made</span><span class="pln">
df</span><span class="pun">[</span><span class="pln">df</span><span class="pun">[</span><span class="str">"Name"</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="str">"John"</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Johny"</span><span class="pln">  </span><span class="com"># Assignment can be done now (no warning)</span><span class="pln">
</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
