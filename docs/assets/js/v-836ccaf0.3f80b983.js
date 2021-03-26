(self.webpackChunksalesforce_code_guide=self.webpackChunksalesforce_code_guide||[]).push([[105],{799:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-836ccaf0",path:"/code-style/apex/",title:"Apex Code Style Guide",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Prefer readable variable names",slug:"prefer-readable-variable-names",children:[]},{level:2,title:"Prefer readable method names",slug:"prefer-readable-method-names",children:[]},{level:2,title:"Prefer literal values over constants",slug:"prefer-literal-values-over-constants",children:[]},{level:2,title:"Prefer early returns over else blocks",slug:"prefer-early-returns-over-else-blocks",children:[]},{level:2,title:"Prefer methods without unexpected side effects",slug:"prefer-methods-without-unexpected-side-effects",children:[]},{level:2,title:"Prefer complete assertions in unit tests",slug:"prefer-complete-assertions-in-unit-tests",children:[]}],filePathRelative:"code-style/apex/README.md",git:{updatedTime:1616683976e3,contributors:[{name:"Georg Wittberger",email:"georg.wittberger@gmail.com",commits:1}]}}},974:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>t});const e=(0,a(252).uE)('<h1 id="apex-code-style-guide"><a class="header-anchor" href="#apex-code-style-guide">#</a> Apex Code Style Guide</h1><p>This document explains some code style guidelines to make Apex code more readable and easier to understand.</p><h2 id="prefer-readable-variable-names"><a class="header-anchor" href="#prefer-readable-variable-names">#</a> Prefer readable variable names</h2><blockquote><p>Readable variable names make it easier to understand which data the variable refers to.</p></blockquote><div class="custom-container danger"><p class="custom-container-title">BAD</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token class-name">Contact</span> c <span class="token operator">=</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> FirstName<span class="token punctuation">,</span> LastName <span class="token keyword">FROM</span> Contact <span class="token keyword">WHERE</span> Id <span class="token operator">=</span> :contactId<span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n<span class="token keyword">String</span> fn <span class="token operator">=</span> c<span class="token punctuation">.</span>FirstName<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">BETTER</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token class-name">Contact</span> theContact <span class="token operator">=</span> <span class="token sql language-sql"><span class="token punctuation">[</span>\n  <span class="token keyword">SELECT</span> FirstName<span class="token punctuation">,</span> LastName <span class="token keyword">FROM</span> Contact <span class="token keyword">WHERE</span> Id <span class="token operator">=</span> :contactId\n<span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n<span class="token keyword">String</span> firstName <span class="token operator">=</span> theContact<span class="token punctuation">.</span>FirstName<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><p>Variables with just a few letters make it hard for other developers to figure out what the code does, especially which data is involved.</p><p>It is recommended to use readable, semantic names for variables. This way it is much easier to understand which data is processed by the code.</p><p>Be careful with variable names matching SObject names or other types. It can lead to weird errors.</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token class-name">Id</span> id <span class="token operator">=</span> theContact<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>\n<span class="token class-name">Id</span> otherId <span class="token operator">=</span> Id<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Error because type Id is shadowed by variable</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="prefer-readable-method-names"><a class="header-anchor" href="#prefer-readable-method-names">#</a> Prefer readable method names</h2><blockquote><p>Readable method names make it easier to understand the purpose and side effects of the methods.</p></blockquote><div class="custom-container danger"><p class="custom-container-title">BAD</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountProvider</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">List</span><span class="token punctuation">&lt;</span>Account<span class="token punctuation">&gt;</span></span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">Set</span><span class="token punctuation">&lt;</span><span class="token keyword">String</span><span class="token punctuation">&gt;</span></span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> Id<span class="token punctuation">,</span> Name <span class="token keyword">FROM</span> Account <span class="token keyword">WHERE</span> Name <span class="token operator">IN</span> :names<span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountProcessor</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">List</span><span class="token punctuation">&lt;</span>Account<span class="token punctuation">&gt;</span></span> accounts<span class="token punctuation">,</span> <span class="token keyword">Integer</span> numberOfEmployees<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Account</span> account <span class="token operator">:</span> accounts<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      account<span class="token punctuation">.</span>NumberOfEmployees <span class="token operator">=</span> numberOfEmployees<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">update</span> accounts<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">BETTER</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountProvider</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">List</span><span class="token punctuation">&lt;</span>Account<span class="token punctuation">&gt;</span></span> <span class="token function">getAccountsByName</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">Set</span><span class="token punctuation">&lt;</span><span class="token keyword">String</span><span class="token punctuation">&gt;</span></span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> Id<span class="token punctuation">,</span> Name <span class="token keyword">FROM</span> Account <span class="token keyword">WHERE</span> Name <span class="token operator">IN</span> :names<span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountProcessor</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateNumberOfEmployees</span><span class="token punctuation">(</span>\n    <span class="token class-name"><span class="token keyword">List</span><span class="token punctuation">&lt;</span>Account<span class="token punctuation">&gt;</span></span> accounts<span class="token punctuation">,</span> <span class="token keyword">Integer</span> numberOfEmployees\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Account</span> account <span class="token operator">:</span> accounts<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      account<span class="token punctuation">.</span>NumberOfEmployees <span class="token operator">=</span> numberOfEmployees<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">update</span> accounts<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div><p>Very short method names cannot properly express the purpose or the intended side effects. This makes it hard to understand the effects of higher-level code which invokes such methods.</p><p>It is recommended to use readable method names which express what the encapsulated logic does (not how it does that). This makes higher-level code much more understandable which helps avoid errors caused by misunderstanding.</p><h2 id="prefer-literal-values-over-constants"><a class="header-anchor" href="#prefer-literal-values-over-constants">#</a> Prefer literal values over constants</h2><p>Coming soon</p><h2 id="prefer-early-returns-over-else-blocks"><a class="header-anchor" href="#prefer-early-returns-over-else-blocks">#</a> Prefer early returns over else blocks</h2><p>Coming soon</p><h2 id="prefer-methods-without-unexpected-side-effects"><a class="header-anchor" href="#prefer-methods-without-unexpected-side-effects">#</a> Prefer methods without unexpected side effects</h2><blockquote><p>Methods without unexpected side effects make it easier to understand how the software works.</p></blockquote><div class="custom-container danger"><p class="custom-container-title">BAD</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountProvider</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token class-name">Account</span> <span class="token function">getDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> Id<span class="token punctuation">,</span> Name <span class="token keyword">FROM</span> Account <span class="token keyword">WHERE</span> Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Account</span> defaultAccount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">insert</span> defaultAccount<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> defaultAccount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Due to the prefix <code>get</code> in the method name it is unexpected that it performs a DML operation to insert a new Account record.</p></div><div class="custom-container tip"><p class="custom-container-title">BETTER</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountProvider</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token class-name">Account</span> <span class="token function">getDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> Id<span class="token punctuation">,</span> Name <span class="token keyword">FROM</span> Account <span class="token keyword">WHERE</span> Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token class-name">Account</span> <span class="token function">createDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Account</span> defaultAccount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">insert</span> defaultAccount<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> defaultAccount<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">public</span> <span class="token class-name">Account</span> <span class="token function">ensureDefaultAccountExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">getDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">createDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>With the method name <code>ensureDefaultAccountExists</code> it is more obvious that a DML operation may be carried out.</p></div><p>Writing resilient code is definitely important. Unfortunately, some developers tend to implement measures for resilience as hidden side effects in methods where other developers do not expect them. This can make it hard to understand why the software behaves in a certain way or even introduce errors because developers were not aware of the side effects of a particular method.</p><p>It is recommended to keep methods clean of side effects which are not suggested by the method name. It makes the code more robust and easier to understand.</p><h2 id="prefer-complete-assertions-in-unit-tests"><a class="header-anchor" href="#prefer-complete-assertions-in-unit-tests">#</a> Prefer complete assertions in unit tests</h2><p>Coming soon</p>',28),t={render:function(s,n){return e}}}}]);