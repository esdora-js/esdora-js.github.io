import{_ as a,i as n,o as i,an as l}from"./chunks/framework.rOq7ezfl.js";const c=JSON.parse('{"title":"Kit 工具函数模板","description":"为 @esdora/kit 工具函数库编写文档的详细模板、AI 提示词和内容规范。","frontmatter":{"title":"Kit 工具函数模板","description":"为 @esdora/kit 工具函数库编写文档的详细模板、AI 提示词和内容规范。"},"headers":[],"relativePath":"contributing/documentation/kit-template.md","filePath":"contributing/documentation/kit-template.md","lastUpdated":1754549878000}'),t={name:"contributing/documentation/kit-template.md"};function p(e,s,h,k,o,d){return i(),n("div",null,s[0]||(s[0]=[l(`<h1 id="kit-工具函数文档模板" tabindex="-1">Kit 工具函数文档模板 <a class="header-anchor" href="#kit-工具函数文档模板" aria-label="Permalink to “Kit 工具函数文档模板”">​</a></h1><p>本文档提供了为 <code>@esdora/kit</code> 中的工具函数编写和生成文档的<strong>唯一标准</strong>。</p><h2 id="文档结构模板" tabindex="-1">文档结构模板 <a class="header-anchor" href="#文档结构模板" aria-label="Permalink to “文档结构模板”">​</a></h2><p>每个 <code>kit</code> 函数的文档页面都必须遵循以下 Markdown 结构：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> [</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">函数名</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 基本用法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> [</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">场景...</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 签名与说明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 注意事项与边界情况</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 相关链接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 源码: ...</span></span></code></pre></div><h2 id="ai-生成提示词-推荐" tabindex="-1">AI 生成提示词 (推荐) <a class="header-anchor" href="#ai-生成提示词-推荐" aria-label="Permalink to “AI 生成提示词 (推荐)”">​</a></h2><p>我们强烈推荐使用以下 AI 提示词来生成文档初稿。</p><h3 id="提示词内容" tabindex="-1">提示词内容 <a class="header-anchor" href="#提示词内容" aria-label="Permalink to “提示词内容”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span># 上下文与角色 (Context &amp; Role)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你是一位经验丰富的开源项目维护者和技术文档专家。你正在为一个名为 &quot;Dora Pocket&quot; 的项目撰写函数参考文档。具体来说，是为其下的 \`@esdora/kit\` TypeScript 工具函数库编写内容。你的写作风格应该清晰、专业，并始终以开发者体验为中心。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任务 (Task)</span></span>
<span class="line"><span>你的任务是为我提供的一个函数，生成一份完整、准确、专业的 Markdown 格式的文档页面。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输入 (Input)</span></span>
<span class="line"><span>我将为你提供两部分核心信息：</span></span>
<span class="line"><span>1.  函数源码: 包含完整的函数实现和 JSDoc 注释。</span></span>
<span class="line"><span>2.  单元测试代码: 包含针对该函数的、使用 Vitest 编写的全面测试用例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输出格式 (Markdown 模板)</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>title: [函数名]</span></span>
<span class="line"><span>description: &quot;[函数名] - Dora Pocket 中 @esdora/kit 库提供的[内容类别]工具函数，用于[功能描述]。&quot;</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span># [函数名]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 示例</span></span>
<span class="line"><span>... (此处省略模板细节)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 签名与说明</span></span>
<span class="line"><span>... (此处省略模板细节)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 注意事项与边界情况</span></span>
<span class="line"><span>... (此处省略模板细节)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关链接</span></span>
<span class="line"><span>- 源码: \`packages/kit/src/[分类]/[函数名]/index.ts\`</span></span></code></pre></div><p>(注意：为保持本页简洁，省略了模板内部的详细结构，实际使用时请参考完整版提示词。)</p><h3 id="核心指令与规范" tabindex="-1">核心指令与规范 <a class="header-anchor" href="#核心指令与规范" aria-label="Permalink to “核心指令与规范”">​</a></h3><ul><li><strong>综合分析</strong>: 必须结合源码和测试用例。</li><li><strong>示例格式</strong>: 输出使用 <code>// =&gt;</code> 行内注释。</li><li><strong>签名与说明</strong>: 合并所有技术信息，优化 JSDoc。</li><li><strong>注意事项</strong>: 必须从测试用例中总结。</li><li><strong>相关链接</strong>: 只包含源码链接，并遵循特定格式。</li><li><strong>语言</strong>: 简体中文。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>&gt; **提示**: 上述提示词的完整版本，请参考项目仓库中的原始文件。我们鼓励你直接复制那个文件中的内容来使用。</span></span></code></pre></div>`,13)]))}const g=a(t,[["render",p]]);export{c as __pageData,g as default};
