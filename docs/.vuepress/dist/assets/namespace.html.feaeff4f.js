import{_ as s,c as n}from"./app.b0e3c1fe.js";const a={},e=n(`<h1 id="\u540D\u79F0\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u540D\u79F0\u7A7A\u95F4" aria-hidden="true">#</a> \u540D\u79F0\u7A7A\u95F4</h1><p><code>voerkai18n </code>\u7684\u540D\u79F0\u7A7A\u95F4\u662F\u4E3A\u4E86\u89E3\u51B3\u5F53\u6E90\u7801\u6587\u4EF6\u975E\u5E38\u591A\u65F6\uFF0C\u901A\u8FC7\u540D\u79F0\u7A7A\u95F4\u5BF9\u7FFB\u8BD1\u5185\u5BB9\u8FDB\u884C\u5206\u7C7B\u7FFB\u8BD1\u7684\u3002</p><p>\u5047\u8BBE\u4E00\u4E2A\u5927\u578B\u9879\u76EE\uFF0C\u5176\u4E2D\u6E90\u4EE3\u7801\u6587\u4EF6\u6709\u4E0A\u5343\u4E2A\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>voerkai18n extract</code>\u4F1A\u626B\u63CF\u6240\u6709\u6E90\u7801\u6587\u4EF6\u5C06\u9700\u8981\u7FFB\u8BD1\u7684\u6587\u672C\u63D0\u53D6\u5230<code>languages/translates/default.json</code>\u6587\u4EF6\u4E2D\u3002\u7531\u4E8E\u6587\u4EF6\u592A\u591A\u4F1A\u5BFC\u81F4\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u5185\u5BB9\u592A\u591A\u5BFC\u81F4<code>default.json</code>\u6587\u4EF6\u592A\u5927\uFF0C\u6709\u5229\u4E8E\u7BA1\u7406</li><li>\u6709\u4E9B\u7FFB\u8BD1\u5F80\u5F80\u9700\u8981\u8054\u7CFB\u4E0A\u4E0B\u6587\u624D\u53EF\u4EE5\u4F5C\u51FA\u66F4\u51C6\u786E\u7684\u7FFB\u8BD1\uFF0C\u6CA1\u6709\u9002\u5F53\u5206\u7C7B\uFF0C\u4E0D\u5BB9\u6613\u8054\u7CFB\u4E0A\u4E0B\u6587\u3002</li></ul><p>\u56E0\u6B64\uFF0C\u5F15\u5165<code>\u540D\u79F0\u7A7A\u95F4</code>\u5C31\u662F\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u6B64\u95EE\u9898\u3002</p><p>\u914D\u7F6E\u540D\u79F0\u7A7A\u95F4\uFF0C\u9700\u8981\u914D\u7F6E<code>languages/settings.json</code>\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5DE5\u7A0B\u76EE\u5F55\uFF1Ad:/code/myapp</span>
<span class="token comment">// languages/settings.json</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaces</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//&quot;\u540D\u79F0&quot;:&quot;\u76F8\u5BF9\u8DEF\u5F84&quot;\uFF0C</span>
        <span class="token literal-property property">\u201Croutes\u201D</span><span class="token operator">:</span>\u201Croutes\u201D<span class="token punctuation">,</span>
        <span class="token string-property property">&quot;auth&quot;</span><span class="token operator">:</span><span class="token string">&quot;core/auth&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;admin&quot;</span><span class="token operator">:</span><span class="token string">&quot;views/admin&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4EE5\u4E0A\u4F8B\u5B50\u4EE3\u8868\uFF1A</p><ul><li>\u5C06<code>d:\\code\\myapp\\routes</code>\u4E2D\u626B\u63CF\u5230\u7684\u6587\u672C\u63D0\u53D6\u5230<code>routes.json</code>\u4E2D\u3002</li><li>\u5C06<code>d:\\code\\myapp\\auth</code>\u4E2D\u626B\u63CF\u5230\u7684\u6587\u672C\u63D0\u53D6\u5230<code>auth.json</code>\u4E2D\u3002</li><li>\u5C06<code>d:\\code\\myapp\\views/admin</code>\u4E2D\u626B\u63CF\u5230\u7684\u6587\u672C\u63D0\u53D6\u5230<code>admin.json</code>\u4E2D\u3002</li></ul><p>\u6700\u7EC8\u5728<code> languages/translates</code>\u4E2D\u4F1A\u5305\u62EC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>languages
  <span class="token operator">|</span>-- translates
      <span class="token operator">|</span>-- default.json
      <span class="token operator">|</span>-- routes.sjon
      <span class="token operator">|</span>-- auth.json
      <span class="token operator">|</span>-- admin.json      
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7136\u540E\uFF0C<code>voerkai18n compile</code>\u5728\u7F16\u8BD1\u65F6\u4F1A\u81EA\u52A8\u5408\u5E76\u8FD9\u4E9B\u6587\u4EF6\uFF0C\u540E\u7EED\u5C31\u4E0D\u518D\u9700\u8981\u540D\u79F0\u7A7A\u95F4\u7684\u6982\u5FF5\u4E86\u3002</p><p><code>\u540D\u79F0\u7A7A\u95F4</code>\u4EC5\u4EC5\u662F\u4E3A\u4E86\u89E3\u51B3\u5F53\u7FFB\u8BD1\u5185\u5BB9\u592A\u591A\u65F6\u7684\u5206\u7C7B\u95EE\u9898\u3002</p>`,13);function p(o,t){return e}var c=s(a,[["render",p],["__file","namespace.html.vue"]]);export{c as default};