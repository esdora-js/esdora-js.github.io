import{_ as i,i as n,o as a,an as h}from"./chunks/framework.C-vFFtwX.js";const r=JSON.parse('{"title":"贡献指南模板","description":"用于生成项目贡献指南的标准模板,定义开始贡献、开发流程、代码审查、测试规范和提交规范的规范结构。适用于 CONTRIBUTING.md 和开发协作文档。","frontmatter":{"title":"贡献指南模板","description":"用于生成项目贡献指南的标准模板,定义开始贡献、开发流程、代码审查、测试规范和提交规范的规范结构。适用于 CONTRIBUTING.md 和开发协作文档。"},"headers":[],"relativePath":"contributing/documentation/contribution-template.md","filePath":"contributing/documentation/contribution-template.md","lastUpdated":1764773245000}'),l={name:"contributing/documentation/contribution-template.md"};function t(k,s,p,e,d,g){return a(),n("div",null,[...s[0]||(s[0]=[h(`<h1 id="贡献指南模板" tabindex="-1">贡献指南模板 <a class="header-anchor" href="#贡献指南模板" aria-label="Permalink to “贡献指南模板”">​</a></h1><p>本模板用于生成<strong>项目贡献指南</strong>,适用于 CONTRIBUTING.md、开发流程说明、提交规范等场景。遵循 <strong>Layer 1 通用规范</strong> + <strong>Layer 2 贡献指南规范</strong>。</p><h2 id="文档结构模板" tabindex="-1">文档结构模板 <a class="header-anchor" href="#文档结构模板" aria-label="Permalink to “文档结构模板”">​</a></h2><h3 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to “Frontmatter”">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[项目名称] 贡献指南</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">description</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">[项目贡献的完整说明和流程要求]</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">category</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 贡献</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ai_model</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Codex</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 推荐使用 Codex 进行工作流程生成</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">---</span></span></code></pre></div><h3 id="章节结构" tabindex="-1">章节结构 <a class="header-anchor" href="#章节结构" aria-label="Permalink to “章节结构”">​</a></h3><h4 id="_1-开始贡献" tabindex="-1">1. 开始贡献 <a class="header-anchor" href="#_1-开始贡献" aria-label="Permalink to “1. 开始贡献”">​</a></h4><p><strong>目的</strong>: 指导新贡献者快速搭建开发环境并了解项目结构。</p><p><strong>内容要求</strong>:</p><ul><li><strong>环境准备</strong>: 必需的软件和工具版本要求</li><li><strong>仓库克隆</strong>: 获取代码的详细步骤</li><li><strong>依赖安装</strong>: 安装项目依赖的命令</li><li><strong>验证环境</strong>: 确认开发环境配置正确</li><li><strong>项目结构</strong>: 简要说明项目目录组织</li></ul><p><strong>示例结构</strong>:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 开始贡献</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">感谢你对 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">项目名称</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 的关注! 我们欢迎所有形式的贡献,包括但不限于:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 🐛 报告 Bug 和问题</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 💡 提出新功能建议</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 📝 改进文档</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 🔧 修复 Bug 和实现新功能</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 编写和改进测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 环境准备</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在开始之前,请确保你的开发环境满足以下要求:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">必需软件</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Node.js</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 18.0.0 (推荐使用最新 LTS 版本)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">pnpm</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 8.0.0 (包管理器)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Git</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 2.30.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">检查版本</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">node --version # 应显示 v18.x.x 或更高</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm --version # 应显示 8.x.x 或更高</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git --version # 应显示 2.30.x 或更高</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">安装 pnpm</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (如果未安装):</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">npm install -g pnpm</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 获取代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 1. Fork 仓库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">访问 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">项目仓库地址</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 并点击右上角的 &quot;Fork&quot; 按钮,将仓库复制到你的 GitHub 账户。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 2. 克隆你的 Fork</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 克隆你 fork 的仓库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git clone https://github.com/YOUR_USERNAME/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">repo-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 进入项目目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cd </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">repo-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 添加上游仓库 (用于同步最新代码)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git remote add upstream https://github.com/ORIGINAL_OWNER/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">repo-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 验证远程仓库配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git remote -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 应显示:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> origin https://github.com/YOUR_USERNAME/</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">[</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">repo-name</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">.git (fetch)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> origin https://github.com/YOUR_USERNAME/</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">[</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">repo-name</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">.git (push)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> upstream https://github.com/ORIGINAL_OWNER/</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">[</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">repo-name</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">.git (fetch)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> upstream https://github.com/ORIGINAL_OWNER/</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">[</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">repo-name</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">.git (push)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 安装依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 使用 pnpm 安装所有依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 构建项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行测试验证环境</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">预期结果</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 依赖安装成功,无错误信息</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 构建完成,生成 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">dist/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 目录</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 测试全部通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">如果遇到问题,请参考 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">常见问题</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">#常见问题</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 或在 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Issue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(项目 Issue 地址) 中寻求帮助。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 项目结构</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">repo-name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">├── packages/ # Monorepo 包目录</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">│ ├── kit/ # @esdora/kit 工具函数库</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">│ ├── color/ # @esdora/color 颜色处理库</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">│ └── ... # 其他包</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">├── docs/ # VitePress 文档网站</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">│ ├── packages/ # API 文档</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">│ └── guide/ # 用户指南</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">├── scripts/ # 构建和工具脚本</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">├── .github/ # GitHub 配置 (CI/CD, Issue 模板)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">├── package.json # 根 package.json (Monorepo 配置)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">├── pnpm-workspace.yaml # pnpm workspace 配置</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">└── turbo.json # Turbo 构建配置</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">核心目录说明</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">packages/[name]/src/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 包源代码</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">packages/[name]/tests/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 单元测试</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs/packages/[name]/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 包文档</span></span></code></pre></div><h4 id="_2-开发流程" tabindex="-1">2. 开发流程 <a class="header-anchor" href="#_2-开发流程" aria-label="Permalink to “2. 开发流程”">​</a></h4><p><strong>目的</strong>: 定义从需求到提交的完整开发流程。</p><p><strong>内容要求</strong>:</p><ul><li><strong>分支策略</strong>: 分支命名规范和用途</li><li><strong>开发步骤</strong>: 编码、测试、文档的完整流程</li><li><strong>同步上游</strong>: 如何保持 Fork 仓库最新</li><li><strong>本地验证</strong>: 提交前的检查清单</li></ul><p><strong>示例结构</strong>:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 开发流程</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 分支策略</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">我们使用 </span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Git Flow</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 分支模型:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">main</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 主分支,始终保持稳定,用于发布</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">develop</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 开发分支,集成所有新功能</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">feature/*</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 功能分支,用于开发新功能</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">fix/*</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 修复分支,用于修复 Bug</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">docs/*</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">\`</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 文档分支,用于文档更新</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 分支命名规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 功能开发</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feature/add-user-authentication</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feature/implement-search-filter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Bug 修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix/resolve-memory-leak</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix/correct-validation-logic</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 文档更新</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs/update-api-reference</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs/add-getting-started-guide</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 开发步骤</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 1. 同步上游仓库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在开始新工作前,确保你的 Fork 仓库是最新的:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 切换到主分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git checkout main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 拉取上游仓库的最新代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git fetch upstream</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 合并上游的 main 分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git merge upstream/main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 推送到你的 Fork</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git push origin main</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 2. 创建功能分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 从最新的 main 创建功能分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git checkout -b feature/your-feature-name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 或从 develop 创建 (取决于项目分支策略)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git checkout -b feature/your-feature-name develop</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 3. 进行开发</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">编码规范</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 遵循项目的代码风格 (参考 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">代码规范</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">#代码规范</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 保持函数简洁,单一职责</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 添加必要的注释和 JSDoc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">示例工作流</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 编辑代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行开发服务器 (如适用)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 实时查看文档变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run docs:dev</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 4. 编写测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">所有新功能和 Bug 修复都必须包含测试:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行所有测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行特定包的测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm --filter @esdora/kit test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行测试并查看覆盖率</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test:coverage</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">测试要求</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 单元测试覆盖率 &gt;= 80%</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 所有边界情况都有测试</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ✅ 测试命名清晰,说明测试意图</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">测试示例</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">import { describe, it, expect } from &#39;vitest&#39;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">import { functionName } from &#39;../src&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">describe(&#39;functionName&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle normal input correctly&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(functionName(normalInput)).toBe(expectedOutput)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle edge case: empty input&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(functionName(&#39;&#39;)).toBe(&#39;&#39;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should throw error for invalid input&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(() =&gt; functionName(invalidInput)).toThrow(&#39;Invalid input&#39;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 5. 更新文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">如果你的更改影响 API 或用户体验,请更新相应文档:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 添加或修改文档文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> docs/packages/</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">[</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">package-name</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">/reference/</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">[</span><span style="--shiki-light:#B56959;--shiki-light-font-weight:bold;--shiki-dark:#C98A7D;--shiki-dark-font-weight:bold;">function-name</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">]</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;">.md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 预览文档网站</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run docs:dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 访问 http://localhost:5173</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">文档要求</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 遵循 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">API 文档模板</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">./api-template.md</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 提供完整的代码示例</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 说明参数、返回值和边界情况</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 6. 本地验证</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">提交前运行以下检查:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 1. 代码格式化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run format</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 2. 代码检查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run lint</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 3. 类型检查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run typecheck</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 4. 运行所有测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 5. 构建项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run build</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">检查清单</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 所有测试通过</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 代码格式符合规范</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 无 TypeScript 类型错误</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 构建成功,无错误</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 文档已更新 (如适用)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 7. 提交代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">遵循 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">提交规范</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">#提交规范</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 添加修改的文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git add .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 提交 (遵循 Conventional Commits 规范)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git commit -m &quot;feat(kit): add isCircular function&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 推送到你的 Fork</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git push origin feature/your-feature-name</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span></code></pre></div><h4 id="_3-代码审查" tabindex="-1">3. 代码审查 <a class="header-anchor" href="#_3-代码审查" aria-label="Permalink to “3. 代码审查”">​</a></h4><p><strong>目的</strong>: 定义 Code Review 流程和审查标准。</p><p><strong>内容要求</strong>:</p><ul><li><strong>提交 PR</strong>: 如何创建 Pull Request</li><li><strong>PR 模板</strong>: 必需的 PR 信息</li><li><strong>审查标准</strong>: 代码审查的检查要点</li><li><strong>反馈处理</strong>: 如何响应审查意见</li></ul><p><strong>示例结构</strong>:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 代码审查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 提交 Pull Request</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 1. 创建 PR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">在你的功能分支完成并推送后:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 访问你的 Fork 仓库页面</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 点击 &quot;Compare &amp; pull request&quot; 按钮</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">3.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 填写 PR 信息 (参考 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PR 模板</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">#pr-模板</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">4.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 提交 PR</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 2. PR 标题格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">PR 标题应遵循 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Conventional Commits</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://www.conventionalcommits.org/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 规范:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;type&gt;(&lt;scope&gt;): &lt;description&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">类型 (type)</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 新功能</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: Bug 修复</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 文档更新</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">refactor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 代码重构</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 测试相关</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">chore</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 构建/工具配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">示例</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): add isCircular function to detect circular references</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix(color): resolve incorrect hex to rgb conversion</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs(guide): update getting started section with pnpm instructions</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> PR 模板</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">提交 PR 时,请填写以下信息:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">markdown</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 描述</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[简要描述这个 PR 解决了什么问题或添加了什么功能]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 相关 Issue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Closes #</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">issue-number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 更改类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 新功能 (feat)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] Bug 修复 (fix)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 文档更新 (docs)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 代码重构 (refactor)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 测试 (test)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 其他 (chore)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 更改内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [更改点 1]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [更改点 2]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [更改点 3]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 添加了单元测试</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 所有测试通过</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 测试覆盖率 &gt;= 80%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 更新了 API 文档 (如适用)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 更新了用户指南 (如适用)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 添加了代码注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 检查清单</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 代码遵循项目规范</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 通过了所有 CI 检查</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 更新了 CHANGELOG (如适用)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 自我审查了代码变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 截图/示例 (如适用)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[如果是 UI 变更或新功能,提供截图或使用示例]</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 审查标准</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Code Reviewer 会检查以下方面:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 代码质量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 代码清晰易懂,命名规范</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 遵循项目的代码风格和最佳实践</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 无明显的性能问题或安全隐患</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 错误处理完善</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 功能完整性</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 实现了 Issue 中描述的所有功能</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 边界情况处理正确</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 无明显的逻辑错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试覆盖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 测试覆盖率达标 (&gt;= 80%)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 测试用例全面,包含正常和异常场景</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 测试命名清晰,易于理解</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 文档完整性</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] API 文档准确反映代码实现</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 示例代码可运行</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 重要变更在 CHANGELOG 中记录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 兼容性</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 不破坏现有 API (除非是 Breaking Change)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] TypeScript 类型定义正确</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ ] 构建和测试在 CI 中通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 处理审查反馈</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">当收到审查意见时:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">1.</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">理解反馈</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 仔细阅读审查意见,如有疑问及时沟通</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">2.</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">修改代码</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 根据反馈修改代码</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">3.</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">更新提交</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">   \\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">   #</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 修改代码后</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   git add .</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   git commit -m &quot;fix: address review comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   git push origin feature/your-feature-name</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">   \\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">4.</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">回复评论</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 在 PR 中回复每条审查意见,说明你的修改</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">5.</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">请求重新审查</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 完成修改后,请求 Reviewer 重新审查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">沟通原则</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 保持开放和友好的态度</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 审查意见是为了提高代码质量,不是针对个人</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 如有不同意见,礼貌地讨论和说明理由</span></span></code></pre></div><h4 id="_4-测试规范" tabindex="-1">4. 测试规范 <a class="header-anchor" href="#_4-测试规范" aria-label="Permalink to “4. 测试规范”">​</a></h4><p><strong>目的</strong>: 定义测试的编写标准和覆盖率要求。</p><p><strong>内容要求</strong>:</p><ul><li><strong>测试框架</strong>: 项目使用的测试工具</li><li><strong>测试类型</strong>: 单元测试、集成测试、E2E 测试</li><li><strong>测试编写</strong>: 测试文件组织和命名规范</li><li><strong>覆盖率要求</strong>: 最低测试覆盖率标准</li></ul><p><strong>示例结构</strong>:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试框架</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">本项目使用以下测试工具:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Vitest</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 快速的单元测试框架</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">@vitest/coverage-v8</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 代码覆盖率工具</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 单元测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">目的</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 测试单个函数或模块的行为。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">位置</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">packages/[package-name]/tests/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">命名</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[function-name].test.ts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 或 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[module-name].test.ts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">示例结构</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">import { describe, it, expect } from &#39;vitest&#39;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">import { sum } from &#39;../src/math/sum&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">describe(&#39;sum&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should return sum of positive numbers&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(sum([1, 2, 3])).toBe(6)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should return 0 for empty array&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(sum([])).toBe(0)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle negative numbers&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(sum([-1, -2, -3])).toBe(-6)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle mixed numbers&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(sum([1, -2, 3])).toBe(2)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 集成测试 (如适用)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">目的</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 测试多个模块的协作。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">示例</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">describe(&#39;Color Conversion Pipeline&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should convert hex to rgb to hsl correctly&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">const hex = &#39;#FF5733&#39;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">const rgb = hexToRgb(hex)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">const hsl = rgbToHsl(rgb)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    expect(hsl).toEqual({ h: 9, s: 100, l: 60 })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试编写指南</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试命名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">使用清晰的描述性名称:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">// ✅ 推荐: 清晰说明测试意图</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should throw error when input is null&#39;, () =&gt; { })</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should return cached result for repeated calls&#39;, () =&gt; { })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">// ❌ 不推荐: 命名模糊</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;handles null&#39;, () =&gt; { })</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;works correctly&#39;, () =&gt; { })</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试结构 (AAA 模式)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">遵循 </span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Arrange-Act-Assert</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 模式:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should format user display name&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">// Arrange: 准备测试数据</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">const user = { firstName: &#39;John&#39;, lastName: &#39;Doe&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">// Act: 执行被测试的函数</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">const displayName = formatDisplayName(user)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">// Assert: 验证结果</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(displayName).toBe(&#39;John Doe&#39;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 边界情况测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">确保测试覆盖所有边界情况:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">describe(&#39;divide&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should divide two positive numbers&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(divide(10, 2)).toBe(5)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle division by zero&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(() =&gt; divide(10, 0)).toThrow(&#39;Division by zero&#39;)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle negative numbers&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(divide(-10, 2)).toBe(-5)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">it(&#39;should handle decimal results&#39;, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">expect(divide(10, 3)).toBeCloseTo(3.333, 2)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">})</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 覆盖率要求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">最低覆盖率标准</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">语句覆盖率 (Statements)</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 80%</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">分支覆盖率 (Branches)</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 75%</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">函数覆盖率 (Functions)</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 80%</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">行覆盖率 (Lines)</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: &gt;= 80%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">查看覆盖率报告</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 生成覆盖率报告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test:coverage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 查看 HTML 报告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">open coverage/index.html</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">覆盖率豁免</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">以下情况可适当降低覆盖率要求:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 错误处理代码 (难以触发的异常)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 类型守卫函数 (TypeScript 已提供类型安全)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 简单的 getter/setter</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">使用注释标记豁免</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">typescript</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/_ istanbul ignore next _/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">function unreachableCode() {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">// 不会被覆盖率统计</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行所有测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 监听模式 (开发时使用)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test:watch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 运行特定包的测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm --filter @esdora/kit test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 查看覆盖率</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test:coverage</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span></code></pre></div><h4 id="_5-提交规范" tabindex="-1">5. 提交规范 <a class="header-anchor" href="#_5-提交规范" aria-label="Permalink to “5. 提交规范”">​</a></h4><p><strong>目的</strong>: 定义 Commit Message 格式和 PR 提交流程。</p><p><strong>内容要求</strong>:</p><ul><li><strong>Commit Message 格式</strong>: 遵循 Conventional Commits</li><li><strong>提交粒度</strong>: 如何组织提交</li><li><strong>Rebase vs Merge</strong>: 合并策略</li><li><strong>签名要求</strong>: DCO 或 GPG 签名 (如适用)</li></ul><p><strong>示例结构</strong>:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 提交规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Commit Message 格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">我们遵循 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Conventional Commits</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">https://www.conventionalcommits.org/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 规范:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;body&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">&lt;footer&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Type (必需)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">功能和修复</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 新功能</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: Bug 修复</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">perf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 性能优化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">代码质量</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">refactor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 代码重构 (不改变功能)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 代码格式调整 (不影响逻辑)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">文档和测试</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 文档更新</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">test</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 测试相关</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">工具和配置</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 构建系统或外部依赖变更</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ci</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: CI 配置文件和脚本变更</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">chore</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 其他不修改 src 或 test 的变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Breaking Change</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 在 type 后添加 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">!</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 标记: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat!:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 或 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix!:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Scope (可选)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">指定变更影响的范围:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): add isCircular function</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix(color): correct rgb to hex conversion</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs(guide): update installation steps</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">常用 scope</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">kit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: @esdora/kit 包</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: @esdora/color 包</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 文档网站</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ci</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: CI/CD 配置</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> \`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">deps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 依赖更新</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Subject (必需)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">简短描述 (50 字符以内):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 使用祈使句,现在时 (&quot;add&quot; 而非 &quot;added&quot;)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 不要首字母大写</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 不要以句号结尾</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> ✅ 推荐</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): add isCircular function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> ❌ 不推荐</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): Added isCircular function. # 过去时 + 句号</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): Adds isCircular function # 第三人称</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Body (可选)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">详细说明变更的原因和影响:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): add isCircular function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Implements circular reference detection for objects and arrays.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Uses a WeakSet to track visited objects for optimal performance.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">This solves the issue where deep cloning would hang on circular structures.</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Footer (可选)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">关闭 Issue 或说明 Breaking Change:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix(color): correct rgb to hex conversion</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">The previous implementation incorrectly handled values &lt; 16.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Closes #42</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">Breaking Change 示例</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit)!: change isCircular return type to boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">BREAKING CHANGE: isCircular now returns boolean instead of throwing errors.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Migration: Replace try-catch blocks with if-else checks.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Before:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">try { isCircular(obj) } catch { /_ handle _/ }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">After:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">if (isCircular(obj)) { /_ handle _/ }</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 提交粒度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">原则</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 每个 commit 应该是一个独立的逻辑单元。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> ✅ 推荐: 原子性提交</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 每个 commit 专注一个变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git commit -m &quot;feat(kit): add isCircular function&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git commit -m &quot;test(kit): add tests for isCircular&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git commit -m &quot;docs(kit): add isCircular documentation&quot;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> ❌ 不推荐: 混杂多个变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 一个 commit 包含多个不相关的变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git commit -m &quot;add isCircular, fix bug, update docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 提交前检查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">使用 Git Hooks (通过 Husky + lint-staged) 自动检查:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 提交时自动运行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git commit -m &quot;feat(kit): add new function&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Husky 会自动执行:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 1. lint-staged: 格式化和检查暂存的文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 2. commitlint: 验证 commit message 格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 3. test: 运行相关测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Rebase 策略</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">提交 PR 前</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 同步上游最新代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git fetch upstream</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git rebase upstream/main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 如遇冲突,解决后继续</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git add .</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git rebase --continue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 强制推送到你的分支 (仅自己的分支)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git push origin feature/your-feature-name --force</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">交互式 Rebase</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (整理提交历史):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 合并最近 3 个 commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">git rebase -i HEAD~3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 编辑器中将除第一个外的 commit 改为 squash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pick abc1234 feat(kit): add function</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">squash def5678 fix typo</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">squash ghi9012 update tests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 保存后合并为一个 commit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">注意</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 仅在自己的分支上使用 rebase,不要 rebase 已推送到共享分支的提交。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Commit 示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 新功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit): add debounce function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Implements a debounce utility that delays function execution until</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">after a specified wait time has elapsed since the last call.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Useful for optimizing event handlers like scroll, resize, and input.</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Bug 修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">fix(color): handle edge case in hexToRgb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Previously failed when hex string had uppercase letters.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Now normalizes input to lowercase before processing.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Closes #123</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">####</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> Breaking Change</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\`\\\`\\\`</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">feat(kit)!: remove deprecated compose function</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">BREAKING CHANGE: The compose function has been removed.</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Use the pipe function instead for better readability.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Migration guide:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Before: compose(f, g, h)(x)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> After: pipe(x, h, g, f)</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  \\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 常见问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 依赖安装失败</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">问题</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm install</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 报错</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">解决</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 确认 Node.js 版本 &gt;= 18.0.0</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 清除缓存: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm store prune</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">3.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 删除 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">node_modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 和 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm-lock.yaml</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">,重新安装</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 测试失败</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">问题</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 本地测试通过,但 CI 失败</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">原因</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 环境差异或测试顺序问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">解决</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 检查 Node.js 版本是否一致</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 确保测试之间无依赖,使用 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">beforeEach</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 重置状态</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">3.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 本地运行 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pnpm run test --run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">\`</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (禁用监听模式)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">###</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> PR 被拒绝</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">原因</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: 可能因为不符合规范或质量问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-light-font-weight:bold;--shiki-dark:#DBD7CAEE;--shiki-dark-font-weight:bold;">建议</span><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">1.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 仔细阅读审查意见</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">2.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 根据反馈修改代码</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">3.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 确保通过所有 CI 检查</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">4.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 如有疑问,礼貌地与 Reviewer 沟通</span></span></code></pre></div><h2 id="ai-生成提示词" tabindex="-1">AI 生成提示词 <a class="header-anchor" href="#ai-生成提示词" aria-label="Permalink to “AI 生成提示词”">​</a></h2><p>以下提示词适用于使用 <strong>Codex</strong> 生成贡献指南 (推荐模型: <code>gpt-5.1-codex</code>)。</p><h3 id="角色定义" tabindex="-1">角色定义 <a class="header-anchor" href="#角色定义" aria-label="Permalink to “角色定义”">​</a></h3><p>你是一位<strong>开源项目维护者和开发流程专家</strong>,擅长设计高效的协作流程、编写清晰的贡献指南并生成可执行的工作流程脚本。</p><h3 id="任务说明" tabindex="-1">任务说明 <a class="header-anchor" href="#任务说明" aria-label="Permalink to “任务说明”">​</a></h3><p>基于提供的项目结构、CI/CD 配置或开发流程需求,生成一份完整的贡献指南,符合以下规范:</p><ol><li><p><strong>遵循规范</strong>:</p><ul><li>Layer 1 通用文档规范 (Frontmatter、标题结构、语言、链接格式、代码示例、注意事项)</li><li>Layer 2 贡献指南规范 (工作流程说明、规范和标准、协作指南)</li><li>本模板的 5 个章节结构</li></ul></li><li><p><strong>内容要求</strong>:</p><ul><li><strong>开始贡献章节</strong>: 提供完整的环境搭建步骤、仓库克隆和依赖安装命令,包含验证步骤和项目结构说明</li><li><strong>开发流程章节</strong>: 定义分支策略、同步上游、开发步骤和本地验证清单,提供完整的 Git 命令示例</li><li><strong>代码审查章节</strong>: 说明 PR 提交流程、PR 模板、审查标准和反馈处理方式</li><li><strong>测试规范章节</strong>: 定义测试框架、测试类型、编写指南和覆盖率要求,提供测试示例代码</li><li><strong>提交规范章节</strong>: 定义 Commit Message 格式 (Conventional Commits)、提交粒度和 Rebase 策略,提供提交示例</li></ul></li><li><p><strong>质量检查点</strong>:</p><ul><li><strong>流程完整性</strong>: 从环境搭建到 PR 合并的每个步骤都有清晰的指令和命令示例,无遗漏环节</li><li><strong>Checklist 实用性</strong>: 所有检查清单项目具体可操作,可直接用于自查,避免模糊或抽象的描述</li><li><strong>规范可操作性</strong>: 提交规范和测试规范包含具体示例,开发者可直接参考执行</li></ul></li></ol><h3 id="输入要求" tabindex="-1">输入要求 <a class="header-anchor" href="#输入要求" aria-label="Permalink to “输入要求”">​</a></h3><ul><li><strong>项目结构</strong>: 提供项目目录结构和主要文件路径</li><li><strong>CI/CD 配置</strong>: 如有 GitHub Actions 或其他 CI 配置文件</li><li><strong>开发工具</strong>: 说明使用的包管理器、测试框架、构建工具</li></ul><h3 id="输出格式" tabindex="-1">输出格式 <a class="header-anchor" href="#输出格式" aria-label="Permalink to “输出格式”">​</a></h3><ul><li><strong>格式</strong>: Markdown 文件,包含 YAML frontmatter</li><li><strong>语言</strong>: 简体中文 (命令和代码可使用英文)</li><li><strong>代码块</strong>: 使用三反引号 (\`\`\`) 包裹,标注语言类型</li><li><strong>命令示例</strong>: 提供完整可执行的命令,包含注释说明</li></ul><h2 id="推荐模型" tabindex="-1">推荐模型 <a class="header-anchor" href="#推荐模型" aria-label="Permalink to “推荐模型”">​</a></h2><ul><li><strong>首选</strong>: <strong>Codex</strong> (<code>gpt-5.1-codex</code>) - 工作流程生成能力强,擅长编写配置脚本和命令示例</li><li><strong>备选</strong>: <strong>Gemini</strong> (<code>gemini-2.5-pro</code>) - 当侧重规范说明和协作指南时使用</li></ul><h3 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to “使用示例”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 使用 Codex 生成贡献指南</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">codex</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -C</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --full-auto</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">PURPOSE: 生成 Dora Pocket 项目的贡献指南</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">TASK:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 提取现有的工作流程 (Git 分支策略、PR 流程)</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 生成开发环境配置步骤和脚本示例</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 定义 Commit Message 规范和测试覆盖率要求</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">• 创建 PR 模板和代码审查检查清单</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">MODE: auto</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">CONTEXT: @.github/**/* @package.json @pnpm-workspace.yaml @CLAUDE.md | Memory: Monorepo 结构,pnpm + Turbo 工具链,Vitest 测试框架,VitePress 文档系统</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">EXPECTED: 完整的贡献指南,包含 5 个章节、可执行命令示例和 3 个质量检查点的验证</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">RULES: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.claude/workflows/cli-templates/prompts/development/02-implement-feature.txt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> | 遵循 L1+L2 贡献指南规范,使用 Conventional Commits,提供完整工作流程 | auto=FULL operations</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --skip-git-repo-check</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> danger-full-access</span></span></code></pre></div><h2 id="核心指令与规范" tabindex="-1">核心指令与规范 <a class="header-anchor" href="#核心指令与规范" aria-label="Permalink to “核心指令与规范”">​</a></h2><ol><li><p><strong>继承规范</strong>:</p><ul><li>✅ Layer 1 通用文档规范 (参见 <a href="./architecture#layer-1-通用文档规范层">architecture.md</a>)</li><li>✅ Layer 2 贡献指南规范 (参见 <a href="./architecture#类型-5-贡献指南规范">architecture.md</a>)</li></ul></li><li><p><strong>必需章节</strong>:</p><ul><li>开始贡献 (环境搭建、仓库说明、项目结构)</li><li>开发流程 (分支策略、开发步骤、本地验证)</li><li>代码审查 (PR 提交、审查标准、反馈处理)</li><li>测试规范 (测试框架、编写指南、覆盖率要求)</li><li>提交规范 (Commit Message、提交粒度、Rebase 策略)</li></ul></li><li><p><strong>命令示例要求</strong>:</p><ul><li>所有命令都包含注释说明</li><li>提供完整的 Git 工作流命令序列</li><li>包含验证步骤和预期结果</li></ul></li><li><p><strong>质量检查要点</strong>:</p><ul><li><strong>流程完整性</strong>: 验证所有开发步骤都有清晰指令</li><li><strong>Checklist 实用性</strong>: 确保检查清单具体可操作</li><li><strong>规范可操作性</strong>: 检查规范包含具体示例和参考</li></ul></li></ol><h2 id="相关文档" tabindex="-1">相关文档 <a class="header-anchor" href="#相关文档" aria-label="Permalink to “相关文档”">​</a></h2><ul><li><a href="./glossary">术语表</a> - 文档类型和 AI 模型定义</li><li><a href="./architecture">文档规范体系架构</a> - 3 层规范体系设计</li><li><a href="./ai-model-strategy">AI 模型调度策略</a> - 模型选择和使用规范</li><li><a href="./api-template">API 文档模板</a> - API 文档模板参考</li><li><a href="./">文档规范系统概览</a> - 文档哲学和核心理念</li></ul><h2 id="版本历史" tabindex="-1">版本历史 <a class="header-anchor" href="#版本历史" aria-label="Permalink to “版本历史”">​</a></h2><ul><li><strong>v1.0</strong> (2025-11-19): 初始版本,定义贡献指南的 5 个章节结构和 AI 生成提示词</li></ul>`,57)])])}const y=i(l,[["render",t]]);export{r as __pageData,y as default};
