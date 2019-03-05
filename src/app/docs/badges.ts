
import { Component } from '@angular/core';

@Component({
  template: `
  
  
  
  
  <p>A badge overlays a count of items on another component, such as a menu or label.</p>
<ol>
<li>Badges (Color Options)</li>
</ol>
<p><span class="badge">1</span>
<span class="badge badge-purple">15</span>
<span class="badge badge-blue">2</span>
<span class="badge badge-orange">3</span>
<span class="badge badge-light-blue">12</span>
<span class="badge badge-1">90</span>
<span class="badge badge-2">51</span>
<span class="badge badge-3">25</span>
<span class="badge badge-4">32</span>
<span class="badge badge-5">57</span></p>
<pre><code class="language-html">&lt;span class=&quot;badge&quot;&gt;1&lt;/span&gt;
&lt;span class=&quot;badge badge-purple&quot;&gt;15&lt;/span&gt;
&lt;span class=&quot;badge badge-blue&quot;&gt;2&lt;/span&gt;
&lt;span class=&quot;badge badge-orange&quot;&gt;3&lt;/span&gt;
&lt;span class=&quot;badge badge-light-blue&quot;&gt;12&lt;/span&gt;
&lt;span class=&quot;badge badge-1&quot;&gt;90&lt;/span&gt;
&lt;span class=&quot;badge badge-2&quot;&gt;51&lt;/span&gt;
&lt;span class=&quot;badge badge-3&quot;&gt;25&lt;/span&gt;
&lt;span class=&quot;badge badge-4&quot;&gt;32&lt;/span&gt;
&lt;span class=&quot;badge badge-5&quot;&gt;57&lt;/span&gt;</code></pre>
<ol start="2">
<li>Status Badges</li>
</ol>
<p><span class="badge badge-info">2</span>
<span class="badge badge-success">3</span>
<span class="badge badge-warning">12</span>
<span class="badge badge-danger">15</span></p>
<pre><code class="language-html">&lt;span class=&quot;badge badge-info&quot;&gt;2&lt;/span&gt;
&lt;span class=&quot;badge badge-success&quot;&gt;3&lt;/span&gt;
&lt;span class=&quot;badge badge-warning&quot;&gt;12&lt;/span&gt;
&lt;span class=&quot;badge badge-danger&quot;&gt;15&lt;/span&gt;</code></pre>

  
  <h2 id="style">Style</h2>
<p>Badges have a colorful, bold, and filled style that makes them stand out when appearing within or next to another component.</p>
<h3 id="overall-style">Overall Style</h3>
<p>Badges have a more rounded border radius, similar to labels, to distinguish them from primary buttons.</p>
<p>Badges are also small enough to fit next to or within another element.</p>
<h3 id="color">Color</h3>
<p>You can use different colors in badges.</p>
<p>Stoplight colors are reserved to display a sense of urgency or indicate state.</p>
<h3 id="typography">Typography</h3>
<p>Use integers within badges. If you’re attempting to use text, consider using a label instead.</p>
<h2 id="over-99">Over 99</h2>
<p>If a badge needs to display a number above 99, use “99+” instead of the number unless the number is important to the user’s objectives and you are certain there is room in the design to accommodate it.</p>

  `
})
export class BadgesComponent {}
  