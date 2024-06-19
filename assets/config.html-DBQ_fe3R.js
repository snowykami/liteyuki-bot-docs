import{_ as s,r as t,o,c,b as n,d as a,a as l,e as p}from"./app-BuVAt--V.js";const i={},r=p(`<p>首次运行后生成<code>config.yml</code>，你可以修改配置项后重启轻雪，绝大多数情况下，你只需要修改<code>superusers</code>和<code>nickname</code>字段即可</p><h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项"><span><strong>基础配置项</strong></span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">command_start</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token comment"># 指令前缀，若没有&quot;&quot;空命令头，请开启alconna_use_command_start保证alconna解析正常</span>
<span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1 <span class="token comment"># 监听地址，默认为本机，若要接收外部请求请填写0.0.0.0</span>
<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">20216</span> <span class="token comment"># 绑定端口</span>
<span class="token key atrule">nickname</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;liteyuki&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># 机器人昵称列表</span>
<span class="token key atrule">superusers</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;1919810&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># 超级用户列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span><strong>其他配置</strong></span></a></h2><p>以下为默认值，如需自定义请手动添加</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">onebot_access_token</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span> <span class="token comment"># 访问令牌，对公开放时建议设置</span>
<span class="token key atrule">default_language</span><span class="token punctuation">:</span> <span class="token string">&quot;zh-CN&quot;</span> <span class="token comment"># 默认语言</span>
<span class="token key atrule">alconna_auto_completion</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># alconna是否自动补全指令，默认false，建议开启</span>
<span class="token comment"># 开发者选项</span>
<span class="token key atrule">allow_update</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否允许更新</span>
<span class="token key atrule">log_level</span><span class="token punctuation">:</span> <span class="token string">&quot;INFO&quot;</span> <span class="token comment"># 日志等级</span>
<span class="token key atrule">log_icon</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否显示日志等级图标（某些控制台字体不可用）</span>
<span class="token key atrule">auto_report</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否自动上报问题给轻雪服务器</span>
<span class="token key atrule">auto_update</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否自动更新轻雪，每天4点检查更新</span>
<span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># 轻雪调试，开启会自动重载Bot或者资源，其他插件自带的调试功能也将开启</span>
<span class="token key atrule">safe_mode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 安全模式，开启后将不会加载任何第三方插件</span>
<span class="token comment"># 其他Nonebot插件的配置项</span>
<span class="token key atrule">custom_config_1</span><span class="token punctuation">:</span> <span class="token string">&quot;custom_value1&quot;</span>
<span class="token key atrule">custom_config_2</span><span class="token punctuation">:</span> <span class="token string">&quot;custom_value2&quot;</span>
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果要使用dotenv配置文件，请自行创建<code>.env.{ENVIRONMENT}</code>，并在<code>config.yml</code>中添加<code>environment:{ENVIRONMENT}</code>字段</p></div><h2 id="onebot实现端配置" tabindex="-1"><a class="header-anchor" href="#onebot实现端配置"><span><strong>OneBot实现端配置</strong></span></a></h2><p>生产环境中推荐反向WebSocket 不同的实现端给出的字段可能不同，但是基本上都是一样的，这里给出一个参考值</p><table><thead><tr><th>字段</th><th>参考值</th><th>说明</th></tr></thead><tbody><tr><td>协议</td><td>反向WebSocket</td><td>推荐使用反向ws协议进行通信，即轻雪作为服务端</td></tr><tr><td>地址</td><td>ws://127.0.0.1:20216/onebot/v11/ws</td><td>地址取决于配置文件，本机默认为<code>127.0.0.1:20216</code></td></tr><tr><td>AccessToken</td><td><code>&quot;&quot;</code></td><td>如果你给轻雪配置了<code>AccessToken</code>，请在此填写相同的值</td></tr></tbody></table><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span><strong>其他</strong></span></a></h2>`,11),u={href:"https://onebot.adapters.nonebot.dev/",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"轻雪不局限于OneBot适配器，你可以使用NoneBot2支持的任何适配器",-1);function m(k,v){const e=t("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[a("要使用其他通信方式请访问"),n("a",u,[a("OneBot Adapter"),l(e)]),a("获取详细信息")]),d])])}const h=s(i,[["render",m],["__file","config.html.vue"]]),y=JSON.parse('{"path":"/deployment/config.html","title":"配置","lang":"zh-CN","frontmatter":{"title":"配置","icon":"cog","order":2,"category":"使用指南","tag":["配置","部署"],"description":"首次运行后生成config.yml，你可以修改配置项后重启轻雪，绝大多数情况下，你只需要修改superusers和nickname字段即可 基础配置项 其他配置 以下为默认值，如需自定义请手动添加 提示 如果要使用dotenv配置文件，请自行创建.env.{ENVIRONMENT}，并在config.yml中添加environment:{ENVIRON...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/deployment/config.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"首次运行后生成config.yml，你可以修改配置项后重启轻雪，绝大多数情况下，你只需要修改superusers和nickname字段即可 基础配置项 其他配置 以下为默认值，如需自定义请手动添加 提示 如果要使用dotenv配置文件，请自行创建.env.{ENVIRONMENT}，并在config.yml中添加environment:{ENVIRON..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T04:48:44.000Z"}],["meta",{"property":"article:author","content":"远野千束"}],["meta",{"property":"article:tag","content":"配置"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:modified_time","content":"2024-06-19T04:48:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-19T04:48:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"远野千束\\",\\"url\\":\\"https://snowykami.me\\"}]}"]]},"headers":[{"level":2,"title":"基础配置项","slug":"基础配置项","link":"#基础配置项","children":[]},{"level":2,"title":"其他配置","slug":"其他配置","link":"#其他配置","children":[]},{"level":2,"title":"OneBot实现端配置","slug":"onebot实现端配置","link":"#onebot实现端配置","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1718772524000,"updatedTime":1718772524000,"contributors":[{"name":"Nanaloveyuki","email":"miaomiao_159@outlook.com","commits":1}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"deployment/config.md","localizedDate":"2024年6月19日","autoDesc":true}');export{h as comp,y as data};
