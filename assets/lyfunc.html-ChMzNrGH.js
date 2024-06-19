import{_ as s,r as t,o,c as i,b as n,d as e,a as l,e as c}from"./app-BuVAt--V.js";const p={},r=c(`<h2 id="轻雪函数" tabindex="-1"><a class="header-anchor" href="#轻雪函数"><span><strong>轻雪函数</strong></span></a></h2><p>轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction.</p><h3 id="函数文件" tabindex="-1"><a class="header-anchor" href="#函数文件"><span><strong>函数文件</strong></span></a></h3><p>函数文件放在资源包的<code>functions</code>目录下，文件名以<code>.mcfunction</code> <code>.lyfunction</code> <code>.lyf</code>结尾，例如<code>test.mcfunction</code>，文件内容为一系列的命令，每行一个命令，支持单行注释<code>#</code>(编辑时的语法高亮可采取<code>shell</code>格式)，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在发信器输出&quot;hello world&quot;</span>
cmd <span class="token builtin class-name">echo</span> hello world

<span class="token comment"># 如果你想同时输出多行内容可以尝试换行符(Python格式)</span>
cmd <span class="token builtin class-name">echo</span> hello world<span class="token punctuation">\\</span>nLiteyuki bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也支持句末注释，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>cmd <span class="token builtin class-name">echo</span> hello world <span class="token comment"># 输出&quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="命令文档" tabindex="-1"><a class="header-anchor" href="#命令文档"><span><strong>命令文档</strong></span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>var <span class="token operator">&lt;</span>var1<span class="token operator">=</span>value<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token punctuation">[</span>var2<span class="token operator">=</span>value2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.  <span class="token comment"># 定义变量</span>
cmd <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>  <span class="token comment"># 在设备上执行命令</span>
api <span class="token operator">&lt;</span>api_name<span class="token operator">&gt;</span> <span class="token punctuation">[</span>var<span class="token operator">=</span>value<span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 调用Bot API</span>
<span class="token keyword">function</span> <span class="token operator">&lt;</span>func_name<span class="token operator">&gt;</span> <span class="token comment"># 调用函数，可递归</span>
<span class="token function">sleep</span> <span class="token operator">&lt;</span>time<span class="token operator">&gt;</span>  <span class="token comment"># 异步等待，单位s</span>
<span class="token function">nohup</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>  <span class="token comment"># 使用新的task执行命令，即不等待</span>
end <span class="token comment"># 结束函数关键字，包括子task</span>
await <span class="token comment"># 等待所有异步任务结束，若函数中启动了其他task，需要在最后调用，否则task对象会被销毁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span><strong>示例</strong></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 疯狂戳好友</span>
<span class="token comment"># 使用 /function poke user_id=123456 执行</span>
<span class="token comment"># 每隔0.2s戳两次，无限戳，会触发最大递归深度限制</span>
<span class="token comment"># 若要戳20s后停止，则需要删除await，添加sleep 20和end</span>
api friend_poke <span class="token assign-left variable">user_id</span><span class="token operator">=</span>user_id
api friend_poke <span class="token assign-left variable">user_id</span><span class="token operator">=</span>user_id
<span class="token function">sleep</span> <span class="token number">0.2</span>
<span class="token function">nohup</span> <span class="token keyword">function</span> poke
await
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span><strong>API</strong></span></a></h3><p>理论上所有基于onebotv11的api都可调用，不同Adapter api也有差别.</p>`,13),d={href:"https://283375.github.io/onebot_v11_vitepress/api/index.html",target:"_blank",rel:"noopener noreferrer"},u=n("h3",{id:"结束关键字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#结束关键字"},[n("span",null,[n("strong",null,"结束关键字")])])],-1),m=n("p",null,'由于LiteyukiBot基于异步运行, 所以在编写lyfunction时也要注意异步的调用，避免出现"单线程走到底"的情况是效率提升的关键.',-1),h=n("p",null,[n("code",null,"await"),e(" 异步任务结束关键字，用于结束当前已完成function的执行")],-1),v=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"但若出现非单function的情况，有一个task任务没有完成而await被执行了，那么当前所有函数包的task都会被截停销毁")],-1);function k(f,g){const a=t("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[n("a",d,[e("Onebot v11 API文档"),l(a)])]),u,m,h,v])}const _=s(p,[["render",k],["__file","lyfunc.html.vue"]]),y=JSON.parse('{"path":"/usage/lyfunc.html","title":"轻雪函数","lang":"zh-CN","frontmatter":{"title":"轻雪函数","icon":"code","order":4,"category":"使用指南","tag":["配置"],"description":"轻雪函数 轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction. 函数文件 函数文件放在资源包的functions目录下，文件名以.mcfunction .lyfunction .lyf结尾，例如test.mcfunction，文件内容为一系列的...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/usage/lyfunc.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"轻雪函数"}],["meta",{"property":"og:description","content":"轻雪函数 轻雪函数 Liteyuki Function 是轻雪的一个功能，它允许你在轻雪中运行一些自定义的由数据驱动的命令，类似于Minecraft的mcfunction. 函数文件 函数文件放在资源包的functions目录下，文件名以.mcfunction .lyfunction .lyf结尾，例如test.mcfunction，文件内容为一系列的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T04:48:44.000Z"}],["meta",{"property":"article:author","content":"远野千束"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:modified_time","content":"2024-06-19T04:48:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"轻雪函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-19T04:48:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"远野千束\\",\\"url\\":\\"https://snowykami.me\\"}]}"]]},"headers":[{"level":2,"title":"轻雪函数","slug":"轻雪函数","link":"#轻雪函数","children":[{"level":3,"title":"函数文件","slug":"函数文件","link":"#函数文件","children":[]},{"level":3,"title":"命令文档","slug":"命令文档","link":"#命令文档","children":[]},{"level":3,"title":"API","slug":"api","link":"#api","children":[]},{"level":3,"title":"结束关键字","slug":"结束关键字","link":"#结束关键字","children":[]}]}],"git":{"createdTime":1718772524000,"updatedTime":1718772524000,"contributors":[{"name":"Nanaloveyuki","email":"miaomiao_159@outlook.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"usage/lyfunc.md","localizedDate":"2024年6月19日","autoDesc":true}');export{_ as comp,y as data};
