import{_ as a,r as s,o as l,c as o,b as e,a as i,w as c,d as t,e as d}from"./app-BuVAt--V.js";const r={},u=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介"},[e("span",null,"简介")])],-1),p=e("p",null,"资源包,亦可根据用途称为主题包、字体包、语言包等，它允许你一定程度上自定义轻雪的外观,并且不用修改源代码",-1),m=e("li",null,[t("资源包的制作很简单，如果你接触过"),e("code",null,"Minecraft"),t("的资源包，那么你能够很快就上手，仅需按照原有路径进行文件替换即可，讲起打包成一个新的资源包。")],-1),h=e("li",null,[t("部分内容制作需要一点点前端基础,例如"),e("code",null,"html"),t("，"),e("code",null,"css")],-1),v=e("li",null,[t("轻雪原版资源包请查看"),e("code",null,"LiteyukiBot/liteyuki/resources"),t("，可以在此基础上进行修改")],-1),_=e("li",null,"欢迎各位投稿资源包到轻雪资源商店",-1),k=d(`<p>请注意，主题包中的html渲染使用Js来规定数据的渲染位置，请确保您所编写的html代码能被Bot解析，否则会导致渲染失败或渲染结果不理想/异常/错位等无法预料的事情发生。推荐在编写html时同时更改对应Js代码，以避免出现无法预料的问题。</p><hr><h2 id="加载资源包" tabindex="-1"><a class="header-anchor" href="#加载资源包"><span>加载资源包</span></a></h2><ul><li>资源包通常是以<code>.zip</code>格式压缩的，只需要将其解压到根目录<code>resources</code>目录下即可，注意不要嵌套文件夹,正常的路径应该是这样的</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>main.py
resources
└─resource_pack_1
    ├─metadata.yml
    ├─templates
    └───<span class="token punctuation">..</span>.
└─resource_pack_2
    ├─metadata.yml
    └─<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>你自己制作的资源包也应该遵循这个规则,并且应该在<code>metadata.yml</code>中填写一些信息</li><li>若没有<code>metadata.yml</code>文件，则该文件夹不会被识别为资源包</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;资源包名称&quot;</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;1.0.0&quot;</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;资源包描述&quot;</span>
<span class="token comment"># 你可以自定义一些信息,但请保证以上三个字段</span>
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>资源包加载遵循一个优先级，即后加载的资源包会覆盖前面的资源包，例如，你在A包中定义了一个<code>index.html</code>文件，B包也定义了一个<code>index.html</code>文件，那么加载B包后，A包中的<code>index.html</code>文件会被覆盖</li><li>对于不同资源包的不同文件，是可以相对引用的，例如你在A中定义了<code>templates/index.html</code>，在B中定义了<code>templates/style.css</code>，可以在A的<code>index.html</code>中用<code>./style.css</code>相对路径引用B中的css</li></ul>`,8);function y(g,b){const n=s("RouteLink");return l(),o("div",null,[u,p,e("ul",null,[e("li",null,[i(n,{to:"/store/"},{default:c(()=>[t("资源/主题商店")]),_:1}),t("提供了一些资源包供你选择，你也可以自己制作资源包")]),m,h,v,_]),k])}const x=a(r,[["render",y],["__file","resource_pack.html.vue"]]),B=JSON.parse('{"path":"/usage/resource_pack.html","title":"资源包","lang":"zh-CN","frontmatter":{"title":"资源包","icon":"paint-brush","order":3,"category":"使用手册","description":"简介 资源包,亦可根据用途称为主题包、字体包、语言包等，它允许你一定程度上自定义轻雪的外观,并且不用修改源代码 提供了一些资源包供你选择，你也可以自己制作资源包 资源包的制作很简单，如果你接触过Minecraft的资源包，那么你能够很快就上手，仅需按照原有路径进行文件替换即可，讲起打包成一个新的资源包。 部分内容制作需要一点点前端基础,例如html，c...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/usage/resource_pack.html"}],["meta",{"property":"og:site_name","content":"LiteyukiBot 轻雪机器人"}],["meta",{"property":"og:title","content":"资源包"}],["meta",{"property":"og:description","content":"简介 资源包,亦可根据用途称为主题包、字体包、语言包等，它允许你一定程度上自定义轻雪的外观,并且不用修改源代码 提供了一些资源包供你选择，你也可以自己制作资源包 资源包的制作很简单，如果你接触过Minecraft的资源包，那么你能够很快就上手，仅需按照原有路径进行文件替换即可，讲起打包成一个新的资源包。 部分内容制作需要一点点前端基础,例如html，c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T04:48:44.000Z"}],["meta",{"property":"article:author","content":"远野千束"}],["meta",{"property":"article:modified_time","content":"2024-06-19T04:48:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"资源包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-19T04:48:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"远野千束\\",\\"url\\":\\"https://snowykami.me\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"加载资源包","slug":"加载资源包","link":"#加载资源包","children":[]}],"git":{"createdTime":1718772524000,"updatedTime":1718772524000,"contributors":[{"name":"Nanaloveyuki","email":"miaomiao_159@outlook.com","commits":1}]},"readingTime":{"minutes":1.97,"words":591},"filePathRelative":"usage/resource_pack.md","localizedDate":"2024年6月19日","autoDesc":true}');export{x as comp,B as data};
