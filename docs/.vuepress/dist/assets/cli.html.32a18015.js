import{_ as n,c as s}from"./app.b0e3c1fe.js";const a={},e=s(`<h1 id="\u547D\u4EE4\u884C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u5DE5\u5177" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u5DE5\u5177</h1><p><code>@voerkai18n/cli</code>\u547D\u4EE4\u884C\u5DE5\u5177\u7528\u6765\u5B9E\u73B0\u5DE5\u7A0B\u521D\u59CB\u5316\u3001\u626B\u63CF\u63D0\u53D6\u6587\u672C\u3001\u81EA\u52A8\u7FFB\u8BD1\u548C\u7F16\u8BD1\u8BED\u8A00\u7B49\u529F\u80FD\u3002</p><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u5EFA\u8BAE\u5C06<code>@voerkai18n/cli</code>\u547D\u4EE4\u884C\u5DE5\u5177\u5B89\u88C5\u5728\u5168\u5C40</p></div><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5168\u5C40\u5B89\u88C5<code>@voerkai18n/cli</code>\u5DE5\u5177\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&gt;</span> npm install <span class="token operator">-</span>g @voerkai18n<span class="token operator">/</span>cli
<span class="token operator">&gt;</span> yarn global add @voerkai18n<span class="token operator">/</span>cli
<span class="token operator">&gt;</span> pnpm add <span class="token operator">-</span>g @voerkai18n<span class="token operator">/</span>cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u6267\u884C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&gt;</span> voerkai18n init
<span class="token operator">&gt;</span> voerkai18n extract
<span class="token operator">&gt;</span> voerkai18n compile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u6CA1\u6709\u5168\u5C40\u5B89\u88C5\uFF0C\u5219\u9700\u8981\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&gt;</span> yarn voerkai18n init
<span class="token operator">&gt;</span> yarn voerkai18n extract
<span class="token operator">&gt;</span> yarn voerkai18n compile
<span class="token operator">--</span><span class="token operator">-</span>
<span class="token operator">&gt;</span> pnpm voerkai18n init
<span class="token operator">&gt;</span> pnpm voerkai18n extract
<span class="token operator">&gt;</span> pnpm voerkai18n compile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u521D\u59CB\u5316-init" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-init" aria-hidden="true">#</a> \u521D\u59CB\u5316 - init</h2><p>\u7528\u4E8E\u5728\u6307\u5B9A\u9879\u76EE\u521B\u5EFA<code>voerkai18n</code>\u56FD\u9645\u5316\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> voerkai18n init --help
\u521D\u59CB\u5316\u9879\u76EE\u56FD\u9645\u5316\u914D\u7F6E
Arguments:
  location                           \u5DE5\u7A0B\u9879\u76EE\u6240\u5728\u76EE\u5F55
Options:
  -D, --debug                        \u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F
  -r, --reset                        \u91CD\u65B0\u751F\u6210\u5F53\u524D\u9879\u76EE\u7684\u8BED\u8A00\u914D\u7F6E
  -lngs, --languages <span class="token operator">&lt;</span>languages<span class="token punctuation">..</span>.<span class="token operator">&gt;</span>  \u652F\u6301\u7684\u8BED\u8A00\u5217\u8868 <span class="token punctuation">(</span>default: <span class="token punctuation">[</span><span class="token string">&quot;zh&quot;</span>,<span class="token string">&quot;en&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  -d, --defaultLanguage              \u9ED8\u8BA4\u8BED\u8A00
  -a, --activeLanguage               \u6FC0\u6D3B\u8BED\u8A00
  -h, --help                         display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</strong></p><p>\u9996\u5148\u9700\u8981\u5728\u5DE5\u7A0B\u6587\u4EF6\u4E0B\u8FD0\u884C<code>voerkai18n init</code>\u547D\u4EE4\u5BF9\u5F53\u524D\u5DE5\u7A0B\u8FDB\u884C\u521D\u59CB\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//- \`lngs\`\u53C2\u6570\u7528\u6765\u6307\u5B9A\u62DF\u652F\u6301\u7684\u8BED\u8A00\u540D\u79F0\u5217\u8868</span>
<span class="token operator">&gt;</span> voerkai18n init <span class="token punctuation">.</span> <span class="token operator">-</span>lngs zh en jp de <span class="token operator">-</span>d zh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD0\u884C<code>voerkai18n init</code>\u547D\u4EE4\u540E\uFF0C\u4F1A\u5728\u5F53\u524D\u5DE5\u7A0B\u4E2D\u521B\u5EFA\u76F8\u5E94\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myapp
  <span class="token operator">|</span><span class="token operator">--</span> languages 
    <span class="token operator">|</span><span class="token operator">--</span> settings<span class="token punctuation">.</span>json               <span class="token comment">// \u8BED\u8A00\u914D\u7F6E\u6587\u4EF6</span>
  <span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
  <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>settings.json</code>\u6587\u4EF6\u5F88\u7B80\u5355\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u914D\u7F6E\u8981\u652F\u6301\u7684\u8BED\u8A00\u7B49\u57FA\u672C\u4FE1\u606F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62DF\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868</span>
    <span class="token string-property property">&quot;languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u6587&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u82F1\u6587&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u9ED8\u8BA4\u8BED\u8A00\uFF0C\u5373\u51C6\u5907\u5728\u6E90\u7801\u4E2D\u5199\u7684\u8BED\u8A00\uFF0C\u4E00\u822C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E2D\u6587</span>
    <span class="token string-property property">&quot;defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6FC0\u6D3B\u8BED\u8A00\uFF0C\u5373\u9ED8\u8BA4\u8981\u542F\u7528\u7684\u8BED\u8A00\uFF0C\u4E00\u822C\u7B49\u4E8EdefaultLanguage</span>
    <span class="token string-property property">&quot;activeLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7FFB\u8BD1\u540D\u79F0\u7A7A\u95F4\u5B9A\u4E49\uFF0C\u8BE6\u89C1\u540E\u7EED\u4ECB\u7ECD\u3002</span>
    <span class="token string-property property">&quot;namespaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>\u8BF4\u660E\uFF1A</strong></p><ul><li><p>\u60A8\u4E5F\u53EF\u4EE5\u624B\u52A8\u81EA\u884C\u521B\u5EFA<code>languages/settings.json</code>\u6587\u4EF6\u3002\u8FD9\u6837\u5C31\u4E0D\u9700\u8FD0\u884C<code>voerkai18n init</code>\u547D\u4EE4\u4E86\u3002</p></li><li><p>\u5982\u679C\u4F60\u7684\u6E90\u7801\u653E\u5728<code>src</code>\u6587\u4EF6\u5939\uFF0C\u5219<code>init</code>\u547D\u4EE4\u4F1A\u81EA\u52A8\u5728\u5728<code>src</code>\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA<code>languages</code>\u6587\u4EF6\u5939\u3002</p></li><li><p><code>voerkai18n init</code>\u662F\u53EF\u9009\u7684\uFF0C\u76F4\u63A5\u4F7F\u7528<code>extract</code>\u65F6\u4E5F\u4F1A\u81EA\u52A8\u521B\u5EFA\u76F8\u5E94\u7684\u6587\u4EF6\u3002</p></li><li><p><code>-m</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u751F\u6210\u7684<code>settings.json</code>\u7684\u6A21\u5757\u7C7B\u578B\uFF1A</p><ul><li>\u5F53<code>-m=auto</code>\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8BFB\u53D6\u524D\u5DE5\u7A0B<code>package.json</code>\u4E2D\u7684<code>type</code>\u5B57\u6BB5</li><li>\u5F53<code>-m=esm</code>\u65F6\uFF0C\u4F1A\u751F\u6210<code>ESM</code>\u6A21\u5757\u7C7B\u578B\u7684<code>settings.json</code>\u3002</li><li>\u5F53<code>-m=cjs</code>\u65F6\uFF0C\u4F1A\u751F\u6210<code>commonjs</code>\u6A21\u5757\u7C7B\u578B\u7684<code>settings.json</code>\u3002</li></ul></li><li><p><code>location</code>\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5219\u91C7\u7528\u5F53\u524D\u76EE\u5F55\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5C06<code>languages</code>\u5B89\u88C5\u5728<code>src/languages</code>\u4E0B\uFF0C\u5219\u53EF\u4EE5\u6307\u5B9A<code>voerkai18n init ./src</code></p></li></ul><h2 id="\u63D0\u53D6\u6587\u672C-extract" tabindex="-1"><a class="header-anchor" href="#\u63D0\u53D6\u6587\u672C-extract" aria-hidden="true">#</a> \u63D0\u53D6\u6587\u672C - extract</h2><p>\u626B\u63CF\u63D0\u53D6\u5F53\u524D\u9879\u76EE\u4E2D\u7684\u6240\u6709\u6E90\u7801\uFF0C\u63D0\u53D6\u51FA\u6240\u6709\u9700\u8981\u7FFB\u8BD1\u7684\u6587\u672C\u5185\u5BB9\u5E76\u4FDD\u5B58\u5728\u5230<code>&lt;\u5DE5\u7A0B\u6E90\u7801\u76EE\u5F55&gt;/languages/translates/*.json</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> voerkai18n extract --help
\u626B\u63CF\u5E76\u63D0\u53D6\u6240\u6709\u5F85\u7FFB\u8BD1\u7684\u5B57\u7B26\u4E32\u5230<span class="token operator">&lt;</span>languages/translates<span class="token operator">&gt;</span>\u6587\u4EF6\u5939\u4E2D

Arguments:
  location                     \u5DE5\u7A0B\u9879\u76EE\u6240\u5728\u76EE\u5F55 <span class="token punctuation">(</span>default: <span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>

Options:
  -D, --debug                  \u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F
  -lngs, --languages           \u652F\u6301\u7684\u8BED\u8A00
  -d, --defaultLanguage  \u9ED8\u8BA4\u8BED\u8A00
  -a, --activeLanguage    \u6FC0\u6D3B\u8BED\u8A00
  -ns, --namespaces            \u7FFB\u8BD1\u540D\u79F0\u7A7A\u95F4
  -e, --exclude <span class="token operator">&lt;</span>folders<span class="token operator">&gt;</span>      \u6392\u9664\u8981\u626B\u63CF\u7684\u6587\u4EF6\u5939\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694
  -u, --updateMode             \u672C\u6B21\u63D0\u53D6\u5185\u5BB9\u4E0E\u5DF2\u5B58\u5728\u5185\u5BB9\u7684\u6570\u636E\u5408\u5E76\u7B56\u7565,\u9ED8\u8BA4\u53D6\u503Csync<span class="token operator">=</span>\u540C\u6B65,overwrite<span class="token operator">=</span>\u8986\u76D6,merge<span class="token operator">=</span>\u5408\u5E76
  -f, --filetypes              \u8981\u626B\u63CF\u7684\u6587\u4EF6\u7C7B\u578B
  -h, --help                   display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>\u8BF4\u660E\uFF1A</strong></p><ul><li>\u542F\u7528<code>-d</code>\u53C2\u6570\u65F6\u4F1A\u8F93\u51FA\u63D0\u53D6\u8FC7\u7A0B\uFF0C\u663E\u793A\u4ECE\u54EA\u4E9B\u6587\u4EF6\u63D0\u53D6\u4E86\u51E0\u6761\u4FE1\u606F\u3002</li><li>\u5982\u679C\u5DF2\u624B\u52A8\u521B\u5EFA\u6216\u901A\u8FC7<code>init</code>\u547D\u4EE4\u521B\u5EFA\u4E86<code>languages/settings.json</code>\u6587\u4EF6\uFF0C\u5219\u53EF\u4EE5\u4E0D\u6307\u5B9A<code>-ns</code>\uFF0C<code>-lngs</code>\uFF0C<code>-d</code>\uFF0C<code>-a</code>\u53C2\u6570\u3002<code>extract</code>\u4F1A\u4F18\u5148\u4F7F\u7528<code>languages/settings.json</code>\u6587\u4EF6\u4E2D\u7684\u53C2\u6570\u6765\u8FDB\u884C\u63D0\u53D6\u3002</li><li><code>-u</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u5982\u4F55\u5C06\u63D0\u53D6\u7684\u6587\u672C\u4E0E\u73B0\u5B58\u7684\u6587\u4EF6\u8FDB\u884C\u5408\u5E76\u3002\u56E0\u4E3A\u5728\u56FD\u9645\u5316\u6D41\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9762\u4E34\u6E90\u4EE3\u7801\u53D8\u66F4\u65F6\u9700\u8981\u66F4\u65B0\u7FFB\u8BD1\u7684\u95EE\u9898\u3002\u652F\u6301\u4E09\u79CD\u5408\u5E76\u7B56\u7565\u3002 <ul><li><strong>sync</strong>\uFF1A\u540C\u6B65\uFF08\u9ED8\u8BA4\u503C\uFF09,\u4E24\u8005\u81EA\u52A8\u5408\u5E76\uFF0C\u5E76\u4E14\u4F1A\u5220\u9664\u5728\u6E90\u7801\u6587\u4EF6\u4E2D\u4E0D\u5B58\u5728\u7684\u6587\u672C\u3002\u5982\u679C\u67D0\u4E2A\u7FFB\u8BD1\u5DF2\u7ECF\u7FFB\u8BD1\u4E86\u4E00\u534A\u4E5F\u4F1A\u4FDD\u7559\u3002\u6B64\u503C\u9002\u7528\u4E8E\u5927\u90E8\u60C5\u51B5\uFF0C\u63A8\u8350\u3002</li><li><strong>overwrite</strong>\uFF1A\u8986\u76D6\u73B0\u5B58\u7684\u7FFB\u8BD1\u5185\u5BB9\u3002\u8FD9\u4F1A\u5BFC\u81F4\u5DF2\u7ECF\u8FDB\u884C\u4E86\u4E00\u534A\u7684\u7FFB\u8BD1\u6570\u636E\u4E22\u5931\uFF0C<strong>\u614E\u7528</strong>\u3002</li><li><strong>merge</strong>\uFF1A\u5408\u5E76\uFF0C\u4E0Esync\u7684\u5DEE\u522B\u5728\u4E8E\u4E0D\u4F1A\u5220\u9664\u6E90\u7801\u4E2D\u5DF2\u4E0D\u5B58\u5728\u7684\u6587\u672C\u3002</li></ul></li><li><code>-e</code>\u53C2\u6570\u7528\u6765\u6392\u9664\u626B\u63CF\u7684\u6587\u4EF6\u5939\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u5206\u9694\u3002\u5185\u90E8\u91C7\u7528<code>gulp.src</code>\u6765\u8FDB\u884C\u6587\u4EF6\u63D0\u53D6\uFF0C\u8BF7\u53C2\u6570\u3002\u5982 <code>-e !libs,core/**/*</code>\u3002\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u6392\u9664<code>node_modules</code>\u6587\u4EF6\u5939</li><li><code>-f</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u8981\u626B\u63CF\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u9ED8\u8BA4<code>js,jsx,ts,tsx,vue,html</code></li><li><code>extract</code>\u662F\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u65B9\u5F0F\u8FDB\u884C\u5339\u914D\u7684\uFF0C\u800C\u4E0D\u662F\u50CF<code>i18n-next</code>\u91C7\u7528\u57FA\u4E8E<code>AST</code>\u89E3\u6790\u3002</li></ul><blockquote><p><strong>\u91CD\u70B9\uFF1A</strong></p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>voerkai18n extract</code>\u53EF\u4EE5\u5B89\u5168\u5730\u53CD\u590D\u591A\u6B21\u6267\u884C\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u5DF2\u7ECF\u7FFB\u8BD1\u4E00\u534A\u7684\u5185\u5BB9\u4E22\u5931\u3002</p><p>\u5982\u679C\u60F3\u6DFB\u52A0\u65B0\u7684\u8BED\u8A00\u652F\u6301\uFF0C\u4E5F<code>voerkai18n extract</code>\u4E5F\u53EF\u4EE5\u5982\u9884\u671F\u7684\u6B63\u5E38\u5DE5\u4F5C\u3002</p></blockquote><h2 id="\u81EA\u52A8\u7FFB\u8BD1-translate" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u7FFB\u8BD1-translate" aria-hidden="true">#</a> \u81EA\u52A8\u7FFB\u8BD1 - translate</h2><p>\u5728\u5DE5\u7A0B\u6587\u4EF6\u5939\u4E0B\u6267\u884C<code>voerkai18n translate</code>\u547D\u4EE4\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u8BFB\u53D6<code>languages/settings.json</code>\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u8C03\u7528\u5728\u7EBF\u7FFB\u8BD1\u670D\u52A1\uFF08\u5982\u767E\u5EA6\u5728\u7EBF\u7FFB\u8BD1\uFF09\u5BF9\u63D0\u53D6\u7684\u6587\u672C(<code>languages/translates/*.json</code>)\u8FDB\u884C\u81EA\u52A8\u7FFB\u8BD1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: voerkai18n translate <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>location<span class="token punctuation">]</span>

\u8C03\u7528\u5728\u7EBF\u7FFB\u8BD1\u670D\u52A1\u5546\u7684API\u7FFB\u8BD1\u8BD1\u6307\u5B9A\u9879\u76EE\u7684\u8BED\u8A00\u5305,\u5982\u4F7F\u7528\u767E\u5EA6\u4E91\u7FFB\u8BD1\u670D\u52A1

Arguments:
  location                        \u5DE5\u7A0B\u9879\u76EE\u6240\u5728\u76EE\u5F55

Options:
  -p, --provider <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>          \u5728\u7EBF\u7FFB\u8BD1\u670D\u52A1\u63D0\u4F9B\u8005\u540D\u79F0\u6216\u7FFB\u8BD1\u811A\u672C\u6587\u4EF6 <span class="token punctuation">(</span>default: <span class="token string">&quot;baidu&quot;</span><span class="token punctuation">)</span>
  -m, --max-package-size <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>  \u5C06\u591A\u4E2A\u6587\u672C\u5408\u5E76\u63D0\u4EA4\u7684\u6700\u5927\u5305\u5B57\u8282\u6570 <span class="token punctuation">(</span>default: <span class="token number">3000</span><span class="token punctuation">)</span>
  --appkey <span class="token punctuation">[</span>key<span class="token punctuation">]</span>                  API\u5BC6\u94A5
  --appid <span class="token punctuation">[</span>id<span class="token punctuation">]</span>                    API ID
  --no-backup                     \u5907\u4EFD\u539F\u59CB\u6587\u4EF6
  --mode                          \u7FFB\u8BD1\u6A21\u5F0F\uFF0C\u53D6\u503Cauto<span class="token operator">=</span>\u4EC5\u7FFB\u8BD1\u672A\u7FFB\u8BD1\u7684,full<span class="token operator">=</span>\u5168\u90E8\u7FFB\u8BD1
  -q, --qps <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>               \u7FFB\u8BD1\u901F\u5EA6\u9650\u5236,\u5373\u6BCF\u79D2\u53EF\u8C03\u7528\u7684API\u6B21\u6570 <span class="token punctuation">(</span>default: <span class="token number">1</span><span class="token punctuation">)</span>
  -h, --help                      \u663E\u793A\u5E2E\u52A9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><p>\u5185\u7F6E\u652F\u6301\u8C03\u7528\u767E\u5EA6\u7684\u5728\u7EBF\u7FFB\u8BD1\u670D\u52A1\uFF0C\u60A8\u9700\u8981\u767E\u5EA6\u7684\u7F51\u7AD9\u4E0A(http://api.fanyi.baidu.com/)\u7533\u8BF7\u5F00\u901A\u670D\u52A1\uFF0C\u5F00\u901A\u540E\u53EF\u4EE5\u5F97\u5230<code>appid</code>\u548C<code>appkey</code>\uFF08\u5BC6\u94A5\uFF09\u3002</p></li><li><p><code>--provider</code>\u7528\u6765\u6307\u5B9A\u5728\u7EBF\u7FFB\u8BD1\u670D\u52A1\u63D0\u4F9B\u8005\uFF0C\u5185\u7F6E\u652F\u6301\u7684\u662F\u767E\u5EA6\u5728\u7EBF\u7FFB\u8BD1\u3002\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2Ajs\u811A\u672C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// youdao.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> appkey<span class="token punctuation">,</span>appid <span class="token punctuation">}</span> <span class="token operator">=</span> options
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">translate</span><span class="token operator">:</span><span class="token keyword">async</span> <span class="token punctuation">(</span>texts<span class="token punctuation">,</span>from<span class="token punctuation">,</span>to<span class="token punctuation">)</span><span class="token punctuation">{</span>
        	<span class="token comment">// texts\u662F\u4E00\u4E2AArray</span>
        	<span class="token comment">// from,to\u4EE3\u8868\u8981\u4ECE\u54EA\u4E00\u79CD\u8BED\u8A00\u7FFB\u8BD1\u5230\u4F55\u79CD\u8BED\u8A00</span>
        	<span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        	<span class="token comment">// \u5728\u6B64\u5BF9texts\u5185\u5BB9\u8C03\u7528\u5728\u7EBF\u7FFB\u8BD1API</span>
	        <span class="token comment">// \u7FFB\u8BD1\u7ED3\u679C\u5E94\u8BE5\u8FD4\u56DE\u4E0Etexts\u5BF9\u5E94\u7684\u6570\u7EC4</span>
            <span class="token comment">// \u5982\u679C\u51FA\u9519\u5219\u5E94\u8BE5throw new Error()</span>
        	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
	    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p><code>qps</code>\u7528\u6765\u6307\u5B9A\u8C03\u7528\u5728\u7EBF\u7FFB\u8BD1API\u7684\u901F\u5EA6\uFF0C\u9ED8\u8BA4\u662F1\uFF0C\u4EE3\u8868\u6BCF\u79D2\u8C03\u7528\u4E00\u6B21\uFF1B\u6B64\u53C2\u6570\u7684\u5F15\u5165\u662F\u8003\u8651\u5230\u6709\u4E9B\u7FFB\u8BD1\u5E73\u53F0\u7684\u514D\u8D39API\u6709QPS\u9650\u5236\u3002\u6BD4\u5982\u767E\u5EA6\u5728\u7EBF\u7FFB\u8BD1\u514D\u8D39\u7248\u672C\u9650\u5236<code>QPS</code>\u5C31\u662F1\uFF0C\u5373\u6BCF\u79D2\u53EA\u80FD\u8C03\u7528\u4E00\u6B21\u3002\u5982\u679C\u60A8\u8D2D\u4E70\u4E86\u670D\u52A1\uFF0C\u5219\u53EF\u4EE5\u5C06<code>QPS</code>\u8C03\u9AD8\u3002</p></li><li><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u6B21\u8FD0\u884C\u65F6\u5747\u4F1A\u5907\u4EFD\u539F\u59CB\u7684\u7FFB\u8BD1\u6587\u4EF6\u81F3<code>languages/translates/backup</code>\uFF0C<code>--no-backup</code>\u53EF\u4EE5\u7981\u6B62\u5907\u4EFD\u3002</p></li><li><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>voerkai18n translate</code>\u4F1A\u5728\u6BCF\u6B21\u8FD0\u884C\u65F6\u8DF3\u8FC7\u5DF2\u7ECF\u7FFB\u8BD1\u8FC7\u7684\u5185\u5BB9\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u7559\u7FFB\u8BD1\u6210\u679C\u3002\u6B64\u7279\u6027\u5728\u60A8\u5BF9\u81EA\u52A8\u7FFB\u8BD1\u7684\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u540E\uFF0C\u518D\u591A\u6B21\u8FD0\u884C<code>voerkai18n translate</code>\u547D\u4EE4\u65F6\u5747\u80FD\u4FDD\u7559\u7FFB\u8BD1\u5185\u5BB9\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u60A8\u4FEE\u6539\u8C03\u6574\u8FC7\u7684\u5185\u5BB9\u4E22\u5931\u3002<code>--mode full</code>\u53C2\u6570\u53EF\u4EE5\u5B8C\u5168\u8986\u76D6\u7FFB\u8BD1\uFF0C\u8BF7\u614E\u7528\u3002</p></li><li><p>\u4E3A\u4E86\u63D0\u9AD8\u5728\u7EBF\u7FFB\u8BD1\u7684\u901F\u5EA6\uFF0C<code>voerkai18n translate</code>\u5E76\u4E0D\u662F\u4E00\u6761\u6587\u672C\u8C03\u7528\u4E00\u6B21API\uFF0C\u800C\u662F\u5C06\u591A\u6761\u6587\u672C\u5408\u5E76\u8D77\u6765\u8FDB\u884C\u8C03\u7528\uFF0C\u4F46\u662F\u5355\u6B21\u8C03\u7528\u4E5F\u662F\u6709\u6570\u636E\u5305\u5927\u5C0F\u7684\u9650\u5236\u7684\uFF0C<code>--max-package-size</code>\u53C2\u6570\u7528\u6765\u6307\u5B9A\u6570\u636E\u5305\u7684\u6700\u5927\u503C\u3002\u6BD4\u5982\u767E\u5EA6\u5EFA\u8BAE\uFF0C\u4E3A\u4FDD\u8BC1\u7FFB\u8BD1\u8D28\u91CF\uFF0C\u8BF7\u5C06\u5355\u6B21\u8BF7\u6C42\u957F\u5EA6\u63A7\u5236\u5728 6000 bytes\u4EE5\u5185\uFF08\u6C49\u5B57\u7EA6\u4E3A\u8F93\u5165\u53C2\u6570 2000 \u4E2A\uFF09\u3002</p></li><li><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u81EA\u52A8\u7FFB\u8BD1\u867D\u7136\u51C6\u786E\u6027\u8FD8\u4E0D\u9519\uFF0C\u771F\u5B9E\u573A\u666F\u8FD8\u662F\u9700\u8981\u8FDB\u884C\u624B\u5DE5\u8C03\u6574\u7684\uFF0C\u7279\u522B\u662F\u81EA\u52A8\u7FFB\u8BD1\u4E00\u822C\u4E0D\u80FD\u8BC6\u522B\u63D2\u503C\u53D8\u91CF\u3002</p></li></ul><h2 id="\u7F16\u8BD1-compile" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1-compile" aria-hidden="true">#</a> \u7F16\u8BD1 - compile</h2><p>\u7F16\u8BD1\u5F53\u524D\u5DE5\u7A0B\u7684\u8BED\u8A00\u5305\uFF0C\u7F16\u8BD1\u7ED3\u679C\u8F93\u51FA\u5728.<code>/langauges</code>\u6587\u4EF6\u5939\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: voerkai18n compile <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>location<span class="token punctuation">]</span>

\u7F16\u8BD1\u6307\u5B9A\u9879\u76EE\u7684\u8BED\u8A00\u5305

Arguments:
  location                  \u5DE5\u7A0B\u9879\u76EE\u6240\u5728\u76EE\u5F55 <span class="token punctuation">(</span>default: <span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>

Options:
  -D, --debug               \u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F
  -m, --moduleType <span class="token punctuation">[</span>types<span class="token punctuation">]</span>  \u8F93\u51FA\u6A21\u5757\u7C7B\u578B,\u53D6\u503Cauto,esm,cjs <span class="token punctuation">(</span>default: <span class="token string">&quot;esm&quot;</span><span class="token punctuation">)</span>
  --no-inline-runtime       \u4E0D\u5D4C\u5165\u8FD0\u884C\u65F6\u6E90\u7801
  -h, --help                display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>voerkai18n compile</code>\u6267\u884C\u540E\u4F1A\u5728<code>langauges</code>\u6587\u4EF6\u5939\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>myapp
  <span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span> langauges
    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js              <span class="token comment">// \u5F53\u524D\u4F5C\u7528\u57DF\u7684\u6E90\u7801</span>
    <span class="token operator">|</span><span class="token operator">--</span> idMap<span class="token punctuation">.</span>js              <span class="token comment">// \u7FFB\u8BD1\u6587\u672C\u4E0Eid\u7684\u6620\u5C04\u6587\u4EF6</span>
    <span class="token operator">|</span><span class="token operator">--</span> formatters<span class="token punctuation">.</span>js         <span class="token comment">// \u81EA\u5B9A\u4E49\u683C\u5F0F\u5316\u5668</span>
    <span class="token operator">|</span><span class="token operator">--</span> zh<span class="token punctuation">.</span>js                 <span class="token comment">// \u4E2D\u6587\u8BED\u8A00\u5305</span>
    <span class="token operator">|</span><span class="token operator">--</span> en<span class="token punctuation">.</span>js       	      <span class="token comment">// \u82F1\u6587\u8BED\u8A00\u5305 </span>
    <span class="token operator">|</span><span class="token operator">--</span> xx<span class="token punctuation">.</span>js           	  <span class="token comment">// \u5176\u4ED6\u8BED\u8A00\u5305</span>
    <span class="token operator">|</span><span class="token operator">--</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>\u8BF4\u660E\uFF1A</strong></p><ul><li>\u5728\u5F53\u524D\u5DE5\u7A0B\u76EE\u5F55\u4E0B\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u6307\u5B9A\u53C2\u6570\u5C31\u53EF\u4EE5\u53CD\u590D\u591A\u6B21\u8FDB\u884C\u7F16\u8BD1\u3002</li><li>\u60A8\u6BCF\u6B21\u4FEE\u6539\u4E86\u6E90\u7801\u5E76<code>extract</code>\u540E\uFF0C\u5747\u5E94\u8BE5\u518D\u6B21\u8FD0\u884C<code>compile</code>\u547D\u4EE4\u3002</li><li>\u5982\u679C\u60A8\u4FEE\u6539\u4E86<code>formatters.js</code>\uFF0C\u6267\u884C<code>compile</code>\u547D\u4EE4\u4E0D\u4F1A\u91CD\u65B0\u751F\u6210\u548C\u4FEE\u6539\u8BE5\u6587\u4EF6\u3002</li><li><code>--no-inline-runtime </code>\u53C2\u6570\u7528\u6765\u6307\u793A\u5982\u4F55\u5F15\u7528\u8FD0\u884C\u65F6\u3002\u9ED8\u8BA4\u4F1A\u5C06\u8FD0\u884C\u65F6\u4EE3\u7801\u751F\u6210\u4FDD\u5B58\u5728<code>languages/runtime.js</code>\uFF0C\u5E94\u7528\u4EE5\u6E90\u7801\u5F62\u5F0F\u5F15\u7528\u3002\u5F53\u542F\u7528<code>--no-inline-runtime </code>\u53C2\u6570\u65F6\u4F1A\u91C7\u7528<code>require(&quot;@voerkai18n/runtime&quot;)</code>\u7684\u65B9\u5F0F\u3002</li></ul>`,39);function p(o,t){return e}var l=n(a,[["render",p],["__file","cli.html.vue"]]);export{l as default};