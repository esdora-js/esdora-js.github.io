import{_ as a,i as n,o as i,an as p}from"./chunks/framework.C-vFFtwX.js";const c=JSON.parse('{"title":"API 文档模板","description":"为 API 文档编写提供的标准模板，包含类型定义、错误处理和性能考虑的详细规范。适用于所有 API 文档生成。","frontmatter":{"title":"API 文档模板","description":"为 API 文档编写提供的标准模板，包含类型定义、错误处理和性能考虑的详细规范。适用于所有 API 文档生成。"},"headers":[],"relativePath":"contributing/documentation/api-template.md","filePath":"contributing/documentation/api-template.md","lastUpdated":1764773245000}'),l={name:"contributing/documentation/api-template.md"};function h(t,s,e,k,d,r){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="api-文档模板" tabindex="-1">API 文档模板 <a class="header-anchor" href="#api-文档模板" aria-label="Permalink to “API 文档模板”">​</a></h1><p>本文档是 <strong>API 文档的标准模板</strong>，为所有 API 文档提供详细的结构模板、AI 提示词和质量检查点。</p><h2 id="继承关系" tabindex="-1">继承关系 <a class="header-anchor" href="#继承关系" aria-label="Permalink to “继承关系”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span>L1 通用文档规范</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>L2 API 文档规范</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>L3 api-template.md（本文档）</span></span></code></pre></div><p><strong>扩展内容:</strong></p><ul><li>3 个新增规范：类型定义详细度、错误处理说明、性能考虑提示</li><li>4 个质量检查点：类型准确性、边界情况覆盖、示例完整性、中文表达</li><li>优化的 AI 提示词结构</li></ul><h2 id="文档结构模板" tabindex="-1">文档结构模板 <a class="header-anchor" href="#文档结构模板" aria-label="Permalink to “文档结构模板”">​</a></h2><p>每个 API 函数的文档页面必须遵循以下 Markdown 结构：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">title: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">函数名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">description: &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">函数名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> - Dora Pocket 中 @esdora/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">package</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 库提供的</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">内容类别</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">工具函数，用于</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">功能描述</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">。&quot;</span></span>
<span class="line"><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> [</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">函数名</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">一句话功能描述，说明核心用途和价值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 基本用法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">最简单的使用示例，展示核心功能</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> [高级场景 1]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">展示特定使用场景</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> [高级场景 2]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">展示另一使用场景</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 签名与说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 类型签名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\`\`typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">function </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">functionName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Generics</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">param1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]:</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;"> [Type1],</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">param2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]:</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;"> [Type2]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">): </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ReturnType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 参数说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 参数     </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 类型    </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 描述       </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 必需  </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> --------</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -------</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ----------</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -----</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">param1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Type1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">详细说明</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 是/否 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">param2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Type2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">详细说明</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> |</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 是/否 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">|</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 返回值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">类型</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[ReturnType]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">说明</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">返回值的详细说明</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">特殊情况</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">错误时返回什么，边界情况的返回值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 泛型约束（如适用）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">[T]</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">泛型参数的约束和用途说明</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">[K extends keyof T]</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">泛型约束的含义</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 注意事项与边界情况</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 输入边界</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [特殊输入处理说明 1]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [特殊输入处理说明 2]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 错误处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">异常类型</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: [可能抛出的异常类型，如 TypeError, RangeError]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">处理建议</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">如何捕获和处理异常，是否返回默认值</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 性能考虑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">时间复杂度</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: O(</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">complexity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">) - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">复杂度说明</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">空间复杂度</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: O(</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">complexity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">) - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">内存使用说明</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">优化建议</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">大数据量时的使用建议，性能敏感场景的注意事项</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 相关链接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">源码</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://github.com/esdora-js/esdora/blob/main/packages/[package]/src/[category]/[function-name]/index.ts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h2 id="ai-生成提示词-推荐模型-codex" tabindex="-1">AI 生成提示词（推荐模型：Codex） <a class="header-anchor" href="#ai-生成提示词-推荐模型-codex" aria-label="Permalink to “AI 生成提示词（推荐模型：Codex）”">​</a></h2><h3 id="模型推荐" tabindex="-1">模型推荐 <a class="header-anchor" href="#模型推荐" aria-label="Permalink to “模型推荐”">​</a></h3><p>根据 <a href="./ai-model-strategy">AI 模型调度策略</a>：</p><ul><li><p><strong>推荐模型</strong>: Codex (<code>gpt-5.1-codex</code>)</p><ul><li>优势：精确的类型签名生成、参数表格自动化、测试用例理解深入</li><li>适用场景：单函数 API 文档、类型复杂度高的函数</li></ul></li><li><p><strong>备选模型</strong>: Gemini (<code>gemini-2.5-pro</code>)</p><ul><li>适用场景：涉及复杂跨模块依赖、需要深度架构理解的 API</li></ul></li></ul><h3 id="完整提示词" tabindex="-1">完整提示词 <a class="header-anchor" href="#完整提示词" aria-label="Permalink to “完整提示词”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span># 上下文与角色 (Context &amp; Role)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你是一位经验丰富的开源项目维护者和技术文档专家。你正在为一个名为 &quot;Dora Pocket&quot; 的项目撰写 API 参考文档。具体来说，是为其下的工具函数库编写内容。你的写作风格应该清晰、专业，并始终以开发者体验为中心。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你必须严格遵循文档规范体系的三层继承关系：</span></span>
<span class="line"><span>- **Layer 1 (L1)**: 通用文档规范 - Frontmatter、标题结构、语言、链接格式、代码示例、注意事项</span></span>
<span class="line"><span>- **Layer 2 (L2)**: API 文档规范 - 签名与说明章节、参数表格格式、示例优先原则</span></span>
<span class="line"><span>- **Layer 3 (L3)**: 本模板的增强规范 - 类型定义详细度、错误处理说明、性能考虑提示</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任务 (Task)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你的任务是为我提供的一个函数，生成一份完整、准确、专业的 Markdown 格式的 API 文档页面。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输入 (Input)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我将为你提供两部分核心信息：</span></span>
<span class="line"><span>1. **函数源码**: 包含完整的函数实现和 JSDoc 注释（如有）</span></span>
<span class="line"><span>2. **单元测试代码**: 包含针对该函数的、使用 Vitest 编写的全面测试用例</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输出格式 (Markdown 模板)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请严格按照以下 Markdown 模板生成文档：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>title: [函数名]</span></span>
<span class="line"><span>description: &quot;[函数名] - Dora Pocket 中 @esdora/[package] 库提供的[内容类别]工具函数，用于[功能描述]。&quot;</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span># [函数名]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[一句话功能描述]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 基本用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\`\`typescript</span></span>
<span class="line"><span>import { [functionName] } from &#39;@esdora/[package]&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[基本使用代码]</span></span>
<span class="line"><span>[functionName]([args]) // =&gt; [结果]</span></span>
<span class="line"><span>\\\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### [场景 2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\`\`typescript</span></span>
<span class="line"><span>[高级使用示例]</span></span>
<span class="line"><span>\\\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 签名与说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 类型签名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\`\`typescript</span></span>
<span class="line"><span>[完整的 TypeScript 函数签名，包含泛型]</span></span>
<span class="line"><span>\\\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 参数说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 参数 | 类型 | 描述 | 必需 |</span></span>
<span class="line"><span>|------|------|------|------|</span></span>
<span class="line"><span>| [param1] | [Type1] | [详细说明，来自 JSDoc 或测试] | 是/否 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 返回值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **类型**: \`[ReturnType]\`</span></span>
<span class="line"><span>- **说明**: [返回值详细说明]</span></span>
<span class="line"><span>- **特殊情况**: [错误时的返回值]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 泛型约束（如适用）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **\`[T]\`**: [泛型说明]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 注意事项与边界情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 输入边界</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[从测试用例中提取的边界情况]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 错误处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **异常类型**: [函数可能抛出的异常类型]</span></span>
<span class="line"><span>- **处理建议**: [如何处理异常，是否需要 try-catch]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 性能考虑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **时间复杂度**: O([complexity])</span></span>
<span class="line"><span>- **空间复杂度**: O([complexity])</span></span>
<span class="line"><span>- **优化建议**: [性能敏感场景的使用建议]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关链接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [源码](https://github.com/esdora-js/esdora/blob/main/packages/[package]/src/[category]/[function-name]/index.ts)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 核心指令与规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 1. 综合分析 (源码 + 测试用例)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **必须结合源码和测试用例**：不能仅依赖源码或仅依赖测试，两者缺一不可</span></span>
<span class="line"><span>- **从测试用例中提取**：</span></span>
<span class="line"><span>  - 所有使用场景和示例代码</span></span>
<span class="line"><span>  - 边界情况和异常处理（null、undefined、空数组、负数等）</span></span>
<span class="line"><span>  - 函数的实际行为和预期输出</span></span>
<span class="line"><span>- **从源码中提取**：</span></span>
<span class="line"><span>  - 完整的 TypeScript 类型签名（包含泛型、联合类型、条件类型）</span></span>
<span class="line"><span>  - JSDoc 注释中的参数说明和返回值说明</span></span>
<span class="line"><span>  - 算法复杂度（循环、递归）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 2. 示例格式 (严格遵循)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **输出注释格式**：所有示例代码的输出必须使用 \`// =&gt;\` 行内注释展示结果</span></span>
<span class="line"><span>  \`\`\`typescript</span></span>
<span class="line"><span>  isCircular(obj) // =&gt; true</span></span>
<span class="line"><span>  clamp(5, 0, 10) // =&gt; 5</span></span>
<span class="line"><span>  \`\`\`</span></span>
<span class="line"><span>- **完整性**：每个示例必须包含 \`import\` 语句，确保可独立运行</span></span>
<span class="line"><span>- **场景分类**：按照&quot;基本用法 → 高级场景&quot;的顺序组织示例</span></span>
<span class="line"><span>- **测试驱动**：优先使用测试用例中的代码作为示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 3. 签名与说明 (增强规范)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3.1 类型签名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **完整性**：必须包含完整的 TypeScript 类型定义，包括泛型、约束、联合类型</span></span>
<span class="line"><span>- **来源**：直接从源码中复制函数签名，不要简化或改写</span></span>
<span class="line"><span>- **格式**：使用 TypeScript 代码块，保持原有的换行和缩进</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3.2 参数说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **表格格式**：必须使用 Markdown 表格，列为：参数、类型、描述、必需</span></span>
<span class="line"><span>- **详细说明**：</span></span>
<span class="line"><span>  - 参数名：与源码保持一致</span></span>
<span class="line"><span>  - 类型：完整的 TypeScript 类型（如 \`T[]\`、\`Record&lt;string, any&gt;\`）</span></span>
<span class="line"><span>  - 描述：从 JSDoc 提取，补充测试用例中体现的行为</span></span>
<span class="line"><span>  - 必需：明确标注&quot;是&quot;或&quot;否&quot;（可选参数）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3.3 返回值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **三要素**：类型、说明、特殊情况</span></span>
<span class="line"><span>- **特殊情况**：必须说明错误时返回什么（undefined、null、抛出异常）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 3.4 泛型约束（新增）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **适用条件**：函数签名包含泛型参数（如 \`&lt;T&gt;\`、\`&lt;K extends keyof T&gt;\`）</span></span>
<span class="line"><span>- **说明内容**：</span></span>
<span class="line"><span>  - 泛型参数的名称和约束条件</span></span>
<span class="line"><span>  - 泛型的用途和作用（如类型推断、类型安全）</span></span>
<span class="line"><span>  - 泛型参数之间的关系（如 \`K extends keyof T\` 表示 K 是 T 的键）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 4. 注意事项与边界情况 (必须完整)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 4.1 输入边界</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **来源**：必须从测试用例中总结</span></span>
<span class="line"><span>- **内容**：特殊输入的处理（null、undefined、空值、负数、超大数值等）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 4.2 错误处理（新增）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **异常类型**：</span></span>
<span class="line"><span>  - 明确函数可能抛出的异常类型（TypeError、RangeError、Error）</span></span>
<span class="line"><span>  - 从源码的 \`throw\` 语句或测试用例的 \`expect().toThrow()\` 中提取</span></span>
<span class="line"><span>- **处理建议**：</span></span>
<span class="line"><span>  - 是否需要 try-catch 包裹</span></span>
<span class="line"><span>  - 是否返回默认值（如 undefined）</span></span>
<span class="line"><span>  - 推荐的错误处理模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 4.3 性能考虑（新增）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **时间复杂度**：</span></span>
<span class="line"><span>  - 分析源码中的循环、递归、嵌套结构</span></span>
<span class="line"><span>  - 标注 Big-O 复杂度（O(1)、O(n)、O(n²)、O(log n)）</span></span>
<span class="line"><span>  - 说明复杂度的含义（如 O(n) 表示与输入大小线性相关）</span></span>
<span class="line"><span>- **空间复杂度**：</span></span>
<span class="line"><span>  - 分析是否创建新数组、对象或递归调用栈</span></span>
<span class="line"><span>  - 标注额外内存使用（O(1) 原地操作、O(n) 创建新数组）</span></span>
<span class="line"><span>- **优化建议**：</span></span>
<span class="line"><span>  - 大数据量时的使用注意事项</span></span>
<span class="line"><span>  - 性能敏感场景的替代方案</span></span>
<span class="line"><span>  - 是否适合高频调用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 5. 相关链接 (固定格式)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **必须包含源码链接**：每个 API 文档必须在结尾包含&quot;相关链接&quot;章节</span></span>
<span class="line"><span>- **格式**：\`- [源码](https://github.com/esdora-js/esdora/blob/main/packages/[package]/src/[category]/[function-name]/index.ts)\`</span></span>
<span class="line"><span>- **路径规则**：</span></span>
<span class="line"><span>  - \`[package]\`: 如 \`kit\`、\`color\`、\`date\`</span></span>
<span class="line"><span>  - \`[category]\`: 如 \`is\`、\`function\`、\`tree\`、\`url\`</span></span>
<span class="line"><span>  - \`[function-name]\`: 与函数名一致的目录名（kebab-case）</span></span>
<span class="line"><span>- **示例**：</span></span>
<span class="line"><span>  \`\`\`markdown</span></span>
<span class="line"><span>  ## 相关链接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - [源码](https://github.com/esdora-js/esdora/blob/main/packages/kit/src/is/is-circular/index.ts)</span></span>
<span class="line"><span>  \`\`\`</span></span>
<span class="line"><span>- **注意**：仅包含源码链接，不要添加其他链接（如测试文件、相关函数）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 6. 禁止元描述 (Meta-Description Ban)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**严格禁止添加任何关于文档来源、生成过程的元描述**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 6.1 禁止的元描述模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- ❌ &quot;以下示例全部来源于...&quot;</span></span>
<span class="line"><span>- ❌ &quot;以下类型信息来自构建流程生成的声明文件...&quot;</span></span>
<span class="line"><span>- ❌ &quot;本文档基于 XXX 版本生成...&quot;</span></span>
<span class="line"><span>- ❌ &quot;见 XXX 文件...&quot;</span></span>
<span class="line"><span>- ❌ 任何形式的来源说明、生成过程说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 6.2 正确做法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- ✅ 直接开始章节内容，无需说明数据来源</span></span>
<span class="line"><span>- ✅ 示例章节直接展示 \`### 基本用法\`</span></span>
<span class="line"><span>- ✅ 签名章节直接展示 \`\\\`\`\`typescript\`</span></span>
<span class="line"><span>- ✅ 源码链接必须使用 Markdown 超链接格式：\`[源码](URL)\`，不使用行内代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 6.3 原则</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**文档必须是官方的、规范的、自包含的内容**，不应包含任何关于文档生成过程的描述。用户阅读文档时应感受到这是官方发布的正式文档，而非自动生成的草稿。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 7. 语言与表达 (中文规范)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- **主语言**：简体中文</span></span>
<span class="line"><span>- **专业术语**：参考 [术语表](./glossary.md)</span></span>
<span class="line"><span>- **代码注释**：可使用英文，但输出说明使用中文 \`// =&gt; 结果\`</span></span>
<span class="line"><span>- **表达风格**：</span></span>
<span class="line"><span>  - 清晰简洁，避免冗长</span></span>
<span class="line"><span>  - 使用主动语态：&quot;该函数用于...&quot; 而非 &quot;可以用来...&quot;</span></span>
<span class="line"><span>  - 使用准确的技术术语，避免口语化表达</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 质量检查点（4 个关键验证）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>生成文档后，必须进行以下 4 个质量检查：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 检查点 1: 类型准确性检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [ ] 函数签名与源码完全一致（包括泛型、约束、可选参数）</span></span>
<span class="line"><span>- [ ] 参数表格中的类型与签名一致</span></span>
<span class="line"><span>- [ ] 返回值类型准确（包括联合类型、条件类型）</span></span>
<span class="line"><span>- [ ] 泛型约束的说明准确且完整</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**验证方法**：将文档中的类型签名复制到 TypeScript 文件，确保能通过类型检查。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 检查点 2: 边界情况覆盖检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [ ] 所有测试用例中的边界情况都已记录（null、undefined、空值、边界数值）</span></span>
<span class="line"><span>- [ ] 错误处理部分包含所有可能的异常类型</span></span>
<span class="line"><span>- [ ] 输入边界部分完整且准确</span></span>
<span class="line"><span>- [ ] 特殊情况的返回值已明确说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**验证方法**：对比测试文件中的 \`expect\` 断言，确保所有边界情况都在&quot;注意事项&quot;章节中体现。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 检查点 3: 示例完整性检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [ ] 基本用法示例存在且可运行（包含 import 语句）</span></span>
<span class="line"><span>- [ ] 所有示例使用 \`// =&gt;\` 注释展示输出</span></span>
<span class="line"><span>- [ ] 高级场景覆盖主要使用场景（至少 2-3 个）</span></span>
<span class="line"><span>- [ ] 示例代码与测试用例一致或源于测试用例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**验证方法**：复制示例代码到 TypeScript 项目，确保能成功运行且输出与注释一致。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 检查点 4: 中文表达规范检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [ ] 所有技术术语使用简体中文且符合术语表</span></span>
<span class="line"><span>- [ ] 描述清晰简洁，无语法错误</span></span>
<span class="line"><span>- [ ] 代码注释使用中文说明（如 \`// =&gt; 返回 true\`）</span></span>
<span class="line"><span>- [ ] 避免直译英文的生硬表达</span></span>
<span class="line"><span>- [ ] **无任何元描述**：无来源说明（&quot;以下示例来源于...&quot;）、生成过程说明（&quot;以下类型信息来自...&quot;）</span></span>
<span class="line"><span>- [ ] **源码链接使用超链接格式**：\`[源码](https://github.com/...)\`，不使用行内代码格式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**验证方法**：通读全文，确保表达自然流畅，符合中文技术文档习惯，且无任何元描述和格式错误。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输出要求总结</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **结构完整**：必须包含所有 4 个主要章节（示例、签名与说明、注意事项、相关链接）</span></span>
<span class="line"><span>2. **内容准确**：基于源码和测试用例，不得臆造或简化</span></span>
<span class="line"><span>3. **格式规范**：严格遵循 Markdown 模板，代码块标注语言，表格格式正确</span></span>
<span class="line"><span>4. **质量保证**：通过 4 个质量检查点的验证</span></span>
<span class="line"><span>5. **继承规范**：符合 L1 通用规范 + L2 API 规范 + L3 增强规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请开始生成文档。</span></span></code></pre></div><h2 id="使用示例-完整的-api-文档生成流程" tabindex="-1">使用示例：完整的 API 文档生成流程 <a class="header-anchor" href="#使用示例-完整的-api-文档生成流程" aria-label="Permalink to “使用示例：完整的 API 文档生成流程”">​</a></h2><h3 id="_1-准备输入材料" tabindex="-1">1. 准备输入材料 <a class="header-anchor" href="#_1-准备输入材料" aria-label="Permalink to “1. 准备输入材料”">​</a></h3><ul><li>函数源码文件：<code>packages/kit/src/is/is-circular/index.ts</code></li><li>单元测试文件：<code>packages/kit/tests/is/is-circular.test.ts</code></li></ul><h3 id="_2-使用-codex-生成文档-推荐" tabindex="-1">2. 使用 Codex 生成文档（推荐） <a class="header-anchor" href="#_2-使用-codex-生成文档-推荐" aria-label="Permalink to “2. 使用 Codex 生成文档（推荐）”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 使用完整的标准提示词模板（第一次生成）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">codex</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -C</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> packages/kit</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --full-auto</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PURPOSE: 为 isCircular 函数生成增强版 API 文档</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">TASK:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 读取源码和测试文件</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 提取类型签名、参数说明、返回值、泛型约束</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 生成示例代码（基本用法 + 高级场景）</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 添加错误处理说明和性能考虑</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 执行 4 个质量检查点验证</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">MODE: auto</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">CONTEXT: @src/is/is-circular/**/* @tests/is/is-circular.test.ts @../../docs/contributing/documentation/api-template.md</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">EXPECTED: 完整的 API 文档，符合 api-template.md 规范，包含类型定义、错误处理、性能说明，通过 4 个质量检查点</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">RULES: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">(cat ~/.claude/workflows/cli-templates/prompts/development/02-implement-feature.txt) | 遵循 L1+L2+L3 规范，使用 api-template.md 提示词 | auto=FULL operations</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --skip-git-repo-check</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> danger-full-access</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 后续生成（使用会话恢复）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">codex</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --full-auto</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">为 is-empty 函数生成类似的增强版 API 文档</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> resume</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --last</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --skip-git-repo-check</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> danger-full-access</span></span></code></pre></div><h3 id="_3-使用-gemini-生成文档-备选-复杂依赖场景" tabindex="-1">3. 使用 Gemini 生成文档（备选，复杂依赖场景） <a class="header-anchor" href="#_3-使用-gemini-生成文档-备选-复杂依赖场景" aria-label="Permalink to “3. 使用 Gemini 生成文档（备选，复杂依赖场景）”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> packages/kit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> gemini</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PURPOSE: 为涉及复杂跨模块依赖的 API 生成增强版文档</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">TASK:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 分析函数的跨模块依赖关系</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 提取类型签名和泛型约束</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 生成完整的示例代码和边界情况说明</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 添加性能考虑和优化建议</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">MODE: write</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">CONTEXT: @src/**/* @tests/**/* @../../docs/contributing/documentation/api-template.md | Memory: 遵循 api-template.md 增强规范，包含类型定义、错误处理、性能说明</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">EXPECTED: 符合 api-template.md 规范的 API 文档，通过 4 个质量检查点</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">RULES: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">(cat ~/.claude/workflows/cli-templates/prompts/development/02-implement-feature.txt) | 遵循 L1+L2+L3 规范 | write=CREATE/MODIFY/DELETE</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --approval-mode</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yolo</span></span></code></pre></div><h3 id="_4-质量验证" tabindex="-1">4. 质量验证 <a class="header-anchor" href="#_4-质量验证" aria-label="Permalink to “4. 质量验证”">​</a></h3><p>生成文档后，执行以下验证：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查点 1: 类型准确性</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 将签名复制到 TypeScript 文件，运行 tsc 检查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查点 2: 边界情况覆盖</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rg</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">expect\\(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tests/is/is-circular.test.ts</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -A</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -E</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">null|undefined|empty|边界</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查点 3: 示例完整性</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 复制示例代码到临时文件，运行确保输出正确</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查点 4: 中文表达</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 通读文档，检查术语一致性和表达流畅性</span></span></code></pre></div><h2 id="相关文档" tabindex="-1">相关文档 <a class="header-anchor" href="#相关文档" aria-label="Permalink to “相关文档”">​</a></h2><ul><li><a href="./glossary">术语表</a> - 核心术语和命名规范</li><li><a href="./architecture">文档规范体系架构</a> - 3 层规范体系设计</li><li><a href="./ai-model-strategy">AI 模型调度策略</a> - 模型选择和使用规范</li><li><a href="./quality-checklist">质量检查清单</a> - 文档质量验证标准（待创建）</li></ul><h2 id="版本历史" tabindex="-1">版本历史 <a class="header-anchor" href="#版本历史" aria-label="Permalink to “版本历史”">​</a></h2><ul><li><strong>v1.0</strong> (2025-11-19): 初始版本，建立 API 文档标准模板，增加 3 个新规范和 4 个质量检查点</li></ul>`,29)])])}const o=a(l,[["render",h]]);export{c as __pageData,o as default};
