(self.webpackChunksalesforce_code_guide=self.webpackChunksalesforce_code_guide||[]).push([[105],{799:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-836ccaf0",path:"/code-style/apex/",title:"Apex Code Style Guide",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Prefer readable variable names",slug:"prefer-readable-variable-names",children:[]},{level:2,title:"Prefer readable method names",slug:"prefer-readable-method-names",children:[]},{level:2,title:"Prefer literal values over constants",slug:"prefer-literal-values-over-constants",children:[]},{level:2,title:"Prefer early returns over else blocks",slug:"prefer-early-returns-over-else-blocks",children:[]},{level:2,title:"Prefer methods without unexpected side effects",slug:"prefer-methods-without-unexpected-side-effects",children:[]}],filePathRelative:"code-style/apex/README.md",git:{}}},784:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(252).uE)('<h1 id="apex-code-style-guide"><a class="header-anchor" href="#apex-code-style-guide">#</a> Apex Code Style Guide</h1><p>This document explains some code style guidelines to make Apex code more readable and easier to understand.</p><h2 id="prefer-readable-variable-names"><a class="header-anchor" href="#prefer-readable-variable-names">#</a> Prefer readable variable names</h2><p>Coming soon</p><h2 id="prefer-readable-method-names"><a class="header-anchor" href="#prefer-readable-method-names">#</a> Prefer readable method names</h2><p>Coming soon</p><h2 id="prefer-literal-values-over-constants"><a class="header-anchor" href="#prefer-literal-values-over-constants">#</a> Prefer literal values over constants</h2><p>Coming soon</p><h2 id="prefer-early-returns-over-else-blocks"><a class="header-anchor" href="#prefer-early-returns-over-else-blocks">#</a> Prefer early returns over else blocks</h2><p>Coming soon</p><h2 id="prefer-methods-without-unexpected-side-effects"><a class="header-anchor" href="#prefer-methods-without-unexpected-side-effects">#</a> Prefer methods without unexpected side effects</h2><blockquote><p>Methods without unexpected side effects make it easier to understand how the software works.</p></blockquote><div class="custom-container danger"><p class="custom-container-title">BAD</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token keyword">class</span> <span class="token class-name">AccountProvider</span> <span class="token punctuation">{</span>\n  <span class="token class-name">Account</span> <span class="token function">getDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> Id<span class="token punctuation">,</span> Name <span class="token keyword">FROM</span> Account <span class="token keyword">WHERE</span> Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Account</span> defaultAccount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">insert</span> defaultAccount<span class="token punctuation">;</span>\n      <span class="token keyword">return</span> defaultAccount<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Due to the prefix <code>get</code> in the method name it is unexpected that it performs a DML operation to insert a new Account record.</p></div><div class="custom-container tip"><p class="custom-container-title">BETTER</p><div class="language-apex ext-apex line-numbers-mode"><pre class="language-apex"><code><span class="token keyword">class</span> <span class="token class-name">AccountProvider</span> <span class="token punctuation">{</span>\n  <span class="token class-name">Account</span> <span class="token function">getDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token sql language-sql"><span class="token punctuation">[</span><span class="token keyword">SELECT</span> Id<span class="token punctuation">,</span> Name <span class="token keyword">FROM</span> Account <span class="token keyword">WHERE</span> Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">]</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token class-name">Account</span> <span class="token function">createDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Account</span> defaultAccount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">insert</span> defaultAccount<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> defaultAccount<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token class-name">Account</span> <span class="token function">ensureDefaultAccountExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">getDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">createDefaultAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>With the method name <code>ensureDefaultAccountExists</code> it is more obvious that a DML operation may be carried out.</p></div><p>Writing resilient code is definitely important. Unfortunately, some developers tend to implement measures for resilience as hidden side effects in methods where other developers do not expect them. This can make it hard to understand why the software behaves in a certain way or even introduce errors because developers were not aware of the side effects of a particular method.</p><p>It is recommended to keep methods clean of side effects which are not suggested by the method name. It makes the code more robust and easier to understand.</p>',16),t={render:function(n,s){return e}}}}]);