---
layout: question
title:  如何在JavaScript中实现堆栈和队列？
date:   2020-03-11T04:08:07.000Z
description: 在JavaScript中实现堆栈和队列的最佳方法是什么？我正在寻找shunting-yard算法，并且我将需要这些数据结构。...
img: 
author: 达蒙逆天Pro
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中实现堆栈和队列的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找shunting-yard算法，并且我将需要这些数据结构。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第641篇《如何在JavaScript中实现堆栈和队列？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Construct a Queue using two Stacks.</p>

<blockquote>
  <p>O(1) for both enqueue and dequeue operations.</p>
</blockquote>

<pre class="lang-js prettyprint-override"><code>class Queue {<font></font>
  constructor() {<font></font>
    this.s1 = []; // in<font></font>
    this.s2 = []; // out<font></font>
  }<font></font>
<font></font>
  enqueue(val) {<font></font>
    this.s1.push(val);<font></font>
  }<font></font>
<font></font>
  dequeue() {<font></font>
    if (this.s2.length === 0) {<font></font>
      this._move();<font></font>
    }<font></font>
<font></font>
    return this.s2.pop(); // return undefined if empty<font></font>
  }<font></font>
<font></font>
  _move() {<font></font>
    while (this.s1.length) {<font></font>
      this.s2.push(this.s1.pop());<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here is my Implementation of Stacks.</p>

<pre><code>function Stack() {<font></font>
this.dataStore = [];<font></font>
this.top = 0;<font></font>
this.push = push;<font></font>
this.pop = pop;<font></font>
this.peek = peek;<font></font>
this.clear = clear;<font></font>
this.length = length;<font></font>
}<font></font>
function push(element) {<font></font>
this.dataStore[this.top++] = element;<font></font>
}<font></font>
function peek() {<font></font>
return this.dataStore[this.top-1];<font></font>
}<font></font>
function pop() {<font></font>
return this.dataStore[--this.top];<font></font>
}<font></font>
function clear() {<font></font>
this.top = 0;<font></font>
}<font></font>
function length() {<font></font>
return this.top;<font></font>
}<font></font>
<font></font>
var s = new Stack();<font></font>
s.push("David");<font></font>
s.push("Raymond");<font></font>
s.push("Bryan");<font></font>
console.log("length: " + s.length());<font></font>
console.log(s.peek());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>  var x = 10; <font></font>
  var y = 11; <font></font>
  var Queue = new Array();<font></font>
  Queue.unshift(x);<font></font>
  Queue.unshift(y);<font></font>
<font></font>
  console.log(Queue)<font></font>
  // Output [11, 10]<font></font>
<font></font>
  Queue.pop()<font></font>
  console.log(Queue)<font></font>
  // Output [11]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>The regular Array structure in Javascript is a Stack (first in, last out) and can also be used as a Queue (first in, first out) depending on the calls you make.</p>

<p>Check this link to see how to make an Array act like a Queue:</p>

<p><a href="https://web.archive.org/web/20120411144152/http://javascript.about.com/library/blqueue.htm" rel="nofollow noreferrer">Queues</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>No Array(s)   </p>

<pre><code>//Javascript stack linked list data structure (no array)<font></font>
<font></font>
function node(value, noderef) {<font></font>
    this.value = value;<font></font>
    this.next = noderef;<font></font>
}<font></font>
function stack() {<font></font>
    this.push = function (value) {<font></font>
        this.next = this.first;<font></font>
        this.first = new node(value, this.next);<font></font>
    }<font></font>
    this.pop = function () {<font></font>
        var popvalue = this.first.value;<font></font>
        this.first = this.first.next;<font></font>
        return popvalue;<font></font>
    }<font></font>
    this.hasnext = function () {<font></font>
        return this.next != undefined;<font></font>
    }<font></font>
    this.isempty = function () {<font></font>
        return this.first == undefined;<font></font>
    }<font></font>
<font></font>
}<font></font>
<font></font>
//Javascript stack linked list data structure (no array)<font></font>
function node(value, noderef) {<font></font>
    this.value = value;<font></font>
    this.next = undefined;<font></font>
}<font></font>
function queue() {<font></font>
    this.enqueue = function (value) {<font></font>
        this.oldlast = this.last;<font></font>
        this.last = new node(value);<font></font>
        if (this.isempty())<font></font>
            this.first = this.last;<font></font>
        else <font></font>
           this.oldlast.next = this.last;<font></font>
    }<font></font>
    this.dequeue = function () {<font></font>
        var queuvalue = this.first.value;<font></font>
        this.first = this.first.next;<font></font>
        return queuvalue;<font></font>
    }<font></font>
    this.hasnext = function () {<font></font>
        return this.first.next != undefined;<font></font>
    }<font></font>
    this.isempty = function () {<font></font>
        return this.first == undefined;<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you understand stacks with push() and pop() functions, then queue is just to make one of these operations in the oposite sense. Oposite of push() is unshift() and oposite of pop() es shift().
Then:</p>

<pre><code>//classic stack<font></font>
var stack = [];<font></font>
stack.push("first"); // push inserts at the end<font></font>
stack.push("second");<font></font>
stack.push("last");<font></font>
stack.pop(); //pop takes the "last" element<font></font>
<font></font>
//One way to implement queue is to insert elements in the oposite sense than a stack<font></font>
var queue = [];<font></font>
queue.unshift("first"); //unshift inserts at the beginning<font></font>
queue.unshift("second");<font></font>
queue.unshift("last");<font></font>
queue.pop(); //"first"<font></font>
<font></font>
//other way to do queues is to take the elements in the oposite sense than stack<font></font>
var queue = [];<font></font>
queue.push("first"); //push, as in the stack inserts at the end<font></font>
queue.push("second");<font></font>
queue.push("last");<font></font>
queue.shift(); //but shift takes the "first" element<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here is the linked list version of a queue that also includes the last node, as suggested by @perkins and as is most appropriate.</p>

<pre><code>// QUEUE Object Definition<font></font>
<font></font>
var Queue = function() {<font></font>
  this.first = null;<font></font>
  this.last = null;<font></font>
  this.size = 0;<font></font>
};<font></font>
<font></font>
var Node = function(data) {<font></font>
  this.data = data;<font></font>
  this.next = null;<font></font>
};<font></font>
<font></font>
Queue.prototype.enqueue = function(data) {<font></font>
  var node = new Node(data);<font></font>
<font></font>
  if (!this.first){ // for empty list first and last are the same<font></font>
    this.first = node;<font></font>
    this.last = node;<font></font>
  } else { // otherwise we stick it on the end<font></font>
    this.last.next=node;<font></font>
    this.last=node;<font></font>
  }<font></font>
<font></font>
  this.size += 1;<font></font>
  return node;<font></font>
};<font></font>
<font></font>
Queue.prototype.dequeue = function() {<font></font>
  if (!this.first) //check for empty list<font></font>
    return null;<font></font>
<font></font>
  temp = this.first; // grab top of list<font></font>
  if (this.first==this.last) {<font></font>
    this.last=null;  // when we need to pop the last one<font></font>
  }<font></font>
  this.first = this.first.next; // move top of list down<font></font>
  this.size -= 1;<font></font>
  return temp;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here is a fairly simple queue implementation with two aims:</p>

<ul>
<li>Unlike array.shift(), you know this dequeue method takes constant time (O(1)).</li>
<li>To improve speed, this approach uses many fewer allocations than the linked-list approach.</li>
</ul>

<p>The stack implementation shares the second aim only.</p>

<pre><code>// Queue<font></font>
function Queue() {<font></font>
        this.q = new Array(5);<font></font>
        this.first = 0;<font></font>
        this.size = 0;<font></font>
}<font></font>
Queue.prototype.enqueue = function(a) {<font></font>
        var other;<font></font>
        if (this.size == this.q.length) {<font></font>
                other = new Array(this.size*2);<font></font>
                for (var i = 0; i &lt; this.size; i++) {<font></font>
                        other[i] = this.q[(this.first+i)%this.size];<font></font>
                }<font></font>
                this.first = 0;<font></font>
                this.q = other;<font></font>
        }<font></font>
        this.q[(this.first+this.size)%this.q.length] = a;<font></font>
        this.size++;<font></font>
};<font></font>
Queue.prototype.dequeue = function() {<font></font>
        if (this.size == 0) return undefined;<font></font>
        this.size--;<font></font>
        var ret = this.q[this.first];<font></font>
        this.first = (this.first+1)%this.q.length;<font></font>
        return ret;<font></font>
};<font></font>
Queue.prototype.peek = function() { return this.size &gt; 0 ? this.q[this.first] : undefined; };<font></font>
Queue.prototype.isEmpty = function() { return this.size == 0; };<font></font>
<font></font>
// Stack<font></font>
function Stack() {<font></font>
        this.s = new Array(5);<font></font>
        this.size = 0;<font></font>
}<font></font>
Stack.prototype.push = function(a) {<font></font>
        var other;<font></font>
    if (this.size == this.s.length) {<font></font>
            other = new Array(this.s.length*2);<font></font>
            for (var i = 0; i &lt; this.s.length; i++) other[i] = this.s[i];<font></font>
            this.s = other;<font></font>
    }<font></font>
    this.s[this.size++] = a;<font></font>
};<font></font>
Stack.prototype.pop = function() {<font></font>
        if (this.size == 0) return undefined;<font></font>
        return this.s[--this.size];<font></font>
};<font></font>
Stack.prototype.peek = function() { return this.size &gt; 0 ? this.s[this.size-1] : undefined; };<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinEva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，您可以使用两个数组来实现队列数据结构。</font></font></p>

<pre><code>var temp_stack = new Array();<font></font>
var stack = new Array();<font></font>
<font></font>
temp_stack.push(1);<font></font>
temp_stack.push(2);<font></font>
temp_stack.push(3);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我现在弹出元素，则输出将为3,2,1。</font><font style="vertical-align: inherit;">但是我们需要FIFO结构，因此您可以执行以下操作。</font></font></p>

<pre><code>stack.push(temp_stack.pop());<font></font>
stack.push(temp_stack.pop());<font></font>
stack.push(temp_stack.pop());<font></font>
<font></font>
stack.pop(); //Pop out 1<font></font>
stack.pop(); //Pop out 2<font></font>
stack.pop(); //Pop out 3<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长十三小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>/*------------------------------------------------------------------ <font></font>
 Defining Stack Operations using Closures in Javascript, privacy and<font></font>
 state of stack operations are maintained<font></font>
<font></font>
 @author:Arijt Basu<font></font>
 Log: Sun Dec 27, 2015, 3:25PM<font></font>
 ------------------------------------------------------------------- <font></font>
 */<font></font>
var stackControl = true;<font></font>
var stack = (function(array) {<font></font>
        array = [];<font></font>
        //--Define the max size of the stack<font></font>
        var MAX_SIZE = 5;<font></font>
<font></font>
        function isEmpty() {<font></font>
            if (array.length &lt; 1) console.log("Stack is empty");<font></font>
        };<font></font>
        isEmpty();<font></font>
<font></font>
        return {<font></font>
<font></font>
            push: function(ele) {<font></font>
                if (array.length &lt; MAX_SIZE) {<font></font>
                    array.push(ele)<font></font>
                    return array;<font></font>
                } else {<font></font>
                    console.log("Stack Overflow")<font></font>
                }<font></font>
            },<font></font>
            pop: function() {<font></font>
                if (array.length &gt; 1) {<font></font>
                    array.pop();<font></font>
                    return array;<font></font>
                } else {<font></font>
                    console.log("Stack Underflow");<font></font>
                }<font></font>
            }<font></font>
<font></font>
        }<font></font>
    })()<font></font>
    // var list = 5;<font></font>
    // console.log(stack(list))<font></font>
if (stackControl) {<font></font>
    console.log(stack.pop());<font></font>
    console.log(stack.push(3));<font></font>
    console.log(stack.push(2));<font></font>
    console.log(stack.pop());<font></font>
    console.log(stack.push(1));<font></font>
    console.log(stack.pop());<font></font>
    console.log(stack.push(38));<font></font>
    console.log(stack.push(22));<font></font>
    console.log(stack.pop());<font></font>
    console.log(stack.pop());<font></font>
    console.log(stack.push(6));<font></font>
    console.log(stack.pop());<font></font>
}<font></font>
//End of STACK Logic<font></font>
<font></font>
/* Defining Queue operations*/<font></font>
<font></font>
var queue = (function(array) {<font></font>
    array = [];<font></font>
    var reversearray;<font></font>
    //--Define the max size of the stack<font></font>
    var MAX_SIZE = 5;<font></font>
<font></font>
    function isEmpty() {<font></font>
        if (array.length &lt; 1) console.log("Queue is empty");<font></font>
    };<font></font>
    isEmpty();<font></font>
<font></font>
    return {<font></font>
        insert: function(ele) {<font></font>
            if (array.length &lt; MAX_SIZE) {<font></font>
                array.push(ele)<font></font>
                reversearray = array.reverse();<font></font>
                return reversearray;<font></font>
            } else {<font></font>
                console.log("Queue Overflow")<font></font>
            }<font></font>
        },<font></font>
        delete: function() {<font></font>
            if (array.length &gt; 1) {<font></font>
                //reversearray = array.reverse();<font></font>
                array.pop();<font></font>
                return array;<font></font>
            } else {<font></font>
                console.log("Queue Underflow");<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
<font></font>
<font></font>
})()<font></font>
<font></font>
console.log(queue.insert(5))<font></font>
console.log(queue.insert(3))<font></font>
console.log(queue.delete(3))<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以根据此概念使用自己的自定义类，这里是您可以用来完成工作的代码段</font></font></p>

<pre><code>/*<font></font>
*   Stack implementation in JavaScript<font></font>
*/<font></font>
<font></font>
<font></font>
<font></font>
function Stack() {<font></font>
  this.top = null;<font></font>
  this.count = 0;<font></font>
<font></font>
  this.getCount = function() {<font></font>
    return this.count;<font></font>
  }<font></font>
<font></font>
  this.getTop = function() {<font></font>
    return this.top;<font></font>
  }<font></font>
<font></font>
  this.push = function(data) {<font></font>
    var node = {<font></font>
      data: data,<font></font>
      next: null<font></font>
    }<font></font>
<font></font>
    node.next = this.top;<font></font>
    this.top = node;<font></font>
<font></font>
    this.count++;<font></font>
  }<font></font>
<font></font>
  this.peek = function() {<font></font>
    if (this.top === null) {<font></font>
      return null;<font></font>
    } else {<font></font>
      return this.top.data;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  this.pop = function() {<font></font>
    if (this.top === null) {<font></font>
      return null;<font></font>
    } else {<font></font>
      var out = this.top;<font></font>
      this.top = this.top.next;<font></font>
      if (this.count &gt; 0) {<font></font>
        this.count--;<font></font>
      }<font></font>
<font></font>
      return out.data;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  this.displayAll = function() {<font></font>
    if (this.top === null) {<font></font>
      return null;<font></font>
    } else {<font></font>
      var arr = new Array();<font></font>
<font></font>
      var current = this.top;<font></font>
      //console.log(current);<font></font>
      for (var i = 0; i &lt; this.count; i++) {<font></font>
        arr[i] = current.data;<font></font>
        current = current.next;<font></font>
      }<font></font>
<font></font>
      return arr;<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用您的控制台进行检查，并逐行尝试这些方法。</font></font></p>

<pre><code>&gt;&gt; var st = new Stack();<font></font>
<font></font>
&gt;&gt; st.push("BP");<font></font>
<font></font>
&gt;&gt; st.push("NK");<font></font>
<font></font>
&gt;&gt; st.getTop();<font></font>
<font></font>
&gt;&gt; st.getCount();<font></font>
<font></font>
&gt;&gt; st.displayAll();<font></font>
<font></font>
&gt;&gt; st.pop();<font></font>
<font></font>
&gt;&gt; st.displayAll();<font></font>
<font></font>
&gt;&gt; st.getTop();<font></font>
<font></font>
&gt;&gt; st.peek();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript数组shift（）速度很慢，尤其是在包含许多元素时。</font><font style="vertical-align: inherit;">我知道两种实现摊销O（1）复杂度的队列的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先是使用循环缓冲区和表加倍。</font><font style="vertical-align: inherit;">我以前已经实现了。</font><font style="vertical-align: inherit;">您可以在这里查看我的源代码 
 </font></font><a href="https://github.com/kevyuu/rapid-queue" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/kevyuu/rapid-queue</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种方法是使用两个堆栈。</font><font style="vertical-align: inherit;">这是两个堆栈队列的代码</font></font></p>

<pre><code>function createDoubleStackQueue() {<font></font>
var that = {};<font></font>
var pushContainer = [];<font></font>
var popContainer = [];<font></font>
<font></font>
function moveElementToPopContainer() {<font></font>
    while (pushContainer.length !==0 ) {<font></font>
        var element = pushContainer.pop();<font></font>
        popContainer.push(element);<font></font>
    }<font></font>
}<font></font>
<font></font>
that.push = function(element) {<font></font>
    pushContainer.push(element);<font></font>
};<font></font>
<font></font>
that.shift = function() {<font></font>
    if (popContainer.length === 0) {<font></font>
        moveElementToPopContainer();<font></font>
    }<font></font>
    if (popContainer.length === 0) {<font></font>
        return null;<font></font>
    } else {<font></font>
        return popContainer.pop();<font></font>
    }<font></font>
};<font></font>
<font></font>
that.front = function() {<font></font>
    if (popContainer.length === 0) {<font></font>
        moveElementToPopContainer();<font></font>
    }<font></font>
    if (popContainer.length === 0) {<font></font>
        return null;<font></font>
    }<font></font>
    return popContainer[popContainer.length - 1];<font></font>
};<font></font>
<font></font>
that.length = function() {<font></font>
    return pushContainer.length + popContainer.length;<font></font>
};<font></font>
<font></font>
that.isEmpty = function() {<font></font>
    return (pushContainer.length + popContainer.length) === 0;<font></font>
};<font></font>
<font></font>
return that;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用jsPerf进行的性能比较</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CircularQueue.shift（）与Array.shift（）</font></font></p>

<p><a href="http://jsperf.com/rapidqueue-shift-vs-array-shift" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/rapidqueue-shift-vs-array-shift</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，使用大型数据集，速度明显加快</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的实现</font></font><kbd>Stack</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><kbd>Queue</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><kbd>Linked List</kbd></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// Linked List<font></font>
function Node(data) {<font></font>
  this.data = data;<font></font>
  this.next = null;<font></font>
}<font></font>
<font></font>
// Stack implemented using LinkedList<font></font>
function Stack() {<font></font>
  this.top = null;<font></font>
}<font></font>
<font></font>
Stack.prototype.push = function(data) {<font></font>
  var newNode = new Node(data);<font></font>
<font></font>
  newNode.next = this.top; //Special attention<font></font>
  this.top = newNode;<font></font>
}<font></font>
<font></font>
Stack.prototype.pop = function() {<font></font>
  if (this.top !== null) {<font></font>
    var topItem = this.top.data;<font></font>
    this.top = this.top.next;<font></font>
    return topItem;<font></font>
  }<font></font>
  return null;<font></font>
}<font></font>
<font></font>
Stack.prototype.print = function() {<font></font>
  var curr = this.top;<font></font>
  while (curr) {<font></font>
    console.log(curr.data);<font></font>
    curr = curr.next;<font></font>
  }<font></font>
}<font></font>
<font></font>
// var stack = new Stack();<font></font>
// stack.push(3);<font></font>
// stack.push(5);<font></font>
// stack.push(7);<font></font>
// stack.print();<font></font>
<font></font>
// Queue implemented using LinkedList<font></font>
function Queue() {<font></font>
  this.head = null;<font></font>
  this.tail = null;<font></font>
}<font></font>
<font></font>
Queue.prototype.enqueue = function(data) {<font></font>
  var newNode = new Node(data);<font></font>
<font></font>
  if (this.head === null) {<font></font>
    this.head = newNode;<font></font>
    this.tail = newNode;<font></font>
  } else {<font></font>
    this.tail.next = newNode;<font></font>
    this.tail = newNode;<font></font>
  }<font></font>
}<font></font>
<font></font>
Queue.prototype.dequeue = function() {<font></font>
  var newNode;<font></font>
  if (this.head !== null) {<font></font>
    newNode = this.head.data;<font></font>
    this.head = this.head.next;<font></font>
  }<font></font>
  return newNode;<font></font>
}<font></font>
<font></font>
Queue.prototype.print = function() {<font></font>
  var curr = this.head;<font></font>
  while (curr) {<font></font>
    console.log(curr.data);<font></font>
    curr = curr.next;<font></font>
  }<font></font>
}<font></font>
<font></font>
var queue = new Queue();<font></font>
queue.enqueue(3);<font></font>
queue.enqueue(5);<font></font>
queue.enqueue(7);<font></font>
queue.print();<font></font>
queue.dequeue();<font></font>
queue.dequeue();<font></font>
queue.print();</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要创建自己的数据结构，则可以构建自己的数据结构：</font></font></p>

<pre><code>var Stack = function(){<font></font>
  this.top = null;<font></font>
  this.size = 0;<font></font>
};<font></font>
<font></font>
var Node = function(data){<font></font>
  this.data = data;<font></font>
  this.previous = null;<font></font>
};<font></font>
<font></font>
Stack.prototype.push = function(data) {<font></font>
  var node = new Node(data);<font></font>
<font></font>
  node.previous = this.top;<font></font>
  this.top = node;<font></font>
  this.size += 1;<font></font>
  return this.top;<font></font>
};<font></font>
<font></font>
Stack.prototype.pop = function() {<font></font>
  temp = this.top;<font></font>
  this.top = this.top.previous;<font></font>
  this.size -= 1;<font></font>
  return temp;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于队列：</font></font></p>

<pre><code>var Queue = function() {<font></font>
  this.first = null;<font></font>
  this.size = 0;<font></font>
};<font></font>
<font></font>
var Node = function(data) {<font></font>
  this.data = data;<font></font>
  this.next = null;<font></font>
};<font></font>
<font></font>
Queue.prototype.enqueue = function(data) {<font></font>
  var node = new Node(data);<font></font>
<font></font>
  if (!this.first){<font></font>
    this.first = node;<font></font>
  } else {<font></font>
    n = this.first;<font></font>
    while (n.next) {<font></font>
      n = n.next;<font></font>
    }<font></font>
    n.next = node;<font></font>
  }<font></font>
<font></font>
  this.size += 1;<font></font>
  return node;<font></font>
};<font></font>
<font></font>
Queue.prototype.dequeue = function() {<font></font>
  temp = this.first;<font></font>
  this.first = this.first.next;<font></font>
  this.size -= 1;<font></font>
  return temp;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyItachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆：</font></font></p>

<pre><code>var stack = [];<font></font>
<font></font>
//put value on top of stack<font></font>
stack.push(1);<font></font>
<font></font>
//remove value from top of stack<font></font>
var value = stack.pop();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">队列：</font></font></p>

<pre><code>var queue = [];<font></font>
<font></font>
//put value on end of queue<font></font>
queue.push(1);<font></font>
<font></font>
//Take first value from queue<font></font>
var value = queue.shift();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript具有push和pop方法，可对普通Javascript数组对象进行操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于队列，请看这里：</font></font></p>

<p><a href="http://safalra.com/web-design/javascript/queues/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://safalra.com/web-design/javascript/queues/</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用数组对象的push和shift方法或unshift和pop方法在JavaScript中实现队列。</font><font style="vertical-align: inherit;">尽管这是实现队列的一种简单方法，但对于大型队列而言效率非常低-因为这些方法在数组上运行，所以shift和unshift方法每次调用时都会移动数组中的每个元素。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Queue.js是JavaScript的一种简单高效的队列实现，其出队功能以固定的固定时间运行。</font><font style="vertical-align: inherit;">结果，对于更大的队列，它可能比使用数组快得多。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var stack = [];<font></font>
stack.push(2);       // stack is now [2]<font></font>
stack.push(5);       // stack is now [2, 5]<font></font>
var i = stack.pop(); // stack is now [2]<font></font>
alert(i);            // displays 5<font></font>
<font></font>
var queue = [];<font></font>
queue.push(2);         // queue is now [2]<font></font>
queue.push(5);         // queue is now [2, 5]<font></font>
var i = queue.shift(); // queue is now [5]<font></font>
alert(i);              // displays 2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘自“ </font></font><a href="http://codetunnel.com/9-javascript-tips-you-may-not-know" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能不知道的9条JavaScript技巧</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
