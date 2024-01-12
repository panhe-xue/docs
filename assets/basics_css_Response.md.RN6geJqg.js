import{_ as i,c as s,o as a,U as e}from"./chunks/framework.K5DDV7Tz.js";const g=JSON.parse('{"title":"参考致谢","description":"","frontmatter":{},"headers":[],"relativePath":"basics/css/Response.md","filePath":"basics/css/Response.md"}'),t={name:"basics/css/Response.md"},l=e(`<h4 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h4><p>响应式布局我觉得分2大部分：</p><ol><li>我们为什么要使用响应式，一套固定的css布局为什么不满足不同屏幕尺寸？</li><li>第二个就是实现响应式布局的方案有哪些以及怎么使用。</li></ol><p>对于第一个问题，应该要弄清楚这些概念： 像素，分辨率，PPI，物理像素，css像素/设备独立像素，视口等等</p><h3 id="一-分辨率" tabindex="-1">一，分辨率 <a class="header-anchor" href="#一-分辨率" aria-label="Permalink to &quot;一，分辨率&quot;">​</a></h3><h4 id="屏幕尺寸" tabindex="-1">屏幕尺寸 <a class="header-anchor" href="#屏幕尺寸" aria-label="Permalink to &quot;屏幕尺寸&quot;">​</a></h4><p>一般说手机是多大的尺寸，指的是对角线的长度，单位使用的是英寸，如下图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d28f4ea50cf64ad4b7a94c15a67484f5~tplv-k3u1fbpfcp-watermark.awebp" alt=""></p><p>以上是从苹果官网截取的对iPhone 12 的屏幕描述。可以看到主要有 尺寸、像素分辨率、ppi 这三个词。</p><p>单位换算：1英寸 = 2.54 厘米</p><h4 id="分辨率和物理像素" tabindex="-1">分辨率和物理像素 <a class="header-anchor" href="#分辨率和物理像素" aria-label="Permalink to &quot;分辨率和物理像素&quot;">​</a></h4><p>iPhone 12 的分辨率2532 x 1170 ，是什么意思呢？在这之前我们先了解一个概念。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe60446886344abcb143a5196b0fc83b~tplv-k3u1fbpfcp-watermark.awebp" alt=""></p><p>这张图是由特定的小方块拼接而成的，这个小方块就是我们说的像素。</p><p>分辨率分屏幕分辨率和图片分辨率。</p><p>屏幕分辨率是指屏幕由多少个像素组成。图片同理。所以iPhone 12 的分辨率2532 x 1170是指：横向上有1170个像素点，竖向上有2532个像素点。</p><p>所以设备的分辨率像素称为物理像素或者设备像素，它是显示设备中的最小单位。</p><h4 id="ppi" tabindex="-1">PPI <a class="header-anchor" href="#ppi" aria-label="Permalink to &quot;PPI&quot;">​</a></h4><p><code>PPI(Pixel Per Inch)</code>：每英寸包括的像素数。它的计算方式如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36a759ceb3ba455c80b7259f5b7496ab~tplv-k3u1fbpfcp-watermark.awebp" alt=""></p><p>一个屏幕并不是分辨率像素越大它就越清晰。而是PPI越高，屏幕越清晰。</p><h4 id="设备独立像素" tabindex="-1">设备独立像素 <a class="header-anchor" href="#设备独立像素" aria-label="Permalink to &quot;设备独立像素&quot;">​</a></h4><p>设备独立像素：device-independent pixels 简称：DIPs</p><p>在不同分辨率像素的设备上，必须要有一个单位来体现元素显示的大小。这个单位就是设备独立像素。</p><p>我们把375px 667px这样的尺寸称为独立设备像素尺寸或者css像素，就是开发日常使用的css的px大小。</p><h4 id="dpr-设备像素比" tabindex="-1">DPR- 设备像素比 <a class="header-anchor" href="#dpr-设备像素比" aria-label="Permalink to &quot;DPR- 设备像素比&quot;">​</a></h4><p>devicePixelRatio 简称 DPR</p><p>它用来描述物理像素和设备独立像素的比例，其值&quot;物理像素/设备独立像素&quot;。</p><p>iPhone 12 的设备独立像素为390x844，分辨率像素宽高为1170×2532， 所以 iPhone12 的 DPR 为 1170/390=3。</p><p>标准屏的DPR为1，即物理像素点和显示大小的设备像素是相等的。当DPR为2时，则是2倍屏，3则是3倍屏。</p><p>在<code>web</code>中，浏览器为我们提供了<code>window.devicePixelRatio</code>来帮助我们获取<code>dpr</code>。</p><p>在<code>css</code>中，可以使用媒体查询<code>min-device-pixel-ratio</code>，区分<code>dpr</code>：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-webkit-min-device-pixel-ratio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(min-device-pixel-ratio: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){ }</span></span></code></pre></div><h3 id="二-视口" tabindex="-1">二，视口 <a class="header-anchor" href="#二-视口" aria-label="Permalink to &quot;二，视口&quot;">​</a></h3><p>视口代表当前可见的计算机图像区域。在pc端的浏览器上，这个视口一般就是浏览器的可见范围（不包括菜单栏）。</p><p>但是在手机端为了适配浏览器上的内容，分了三种视口：布局视口、视觉视口和理想视口。</p><h4 id="布局视口" tabindex="-1">布局视口 <a class="header-anchor" href="#布局视口" aria-label="Permalink to &quot;布局视口&quot;">​</a></h4><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce11243ea8b54da68c1b899a235c83d2~tplv-k3u1fbpfcp-watermark.awebp" alt=""></p><p>在移动端，布局视口被赋予一个默认值，大部分为<code>980px</code>，这保证<code>PC</code>的网页可以在手机浏览器上呈现，但是非常小，用户可以手动对网页进行放大。</p><p>我们可以通过调用<code>document.documentElement.clientWidth / clientHeight</code>来获取布局视口大小。</p><h4 id="视觉视口" tabindex="-1">视觉视口 <a class="header-anchor" href="#视觉视口" aria-label="Permalink to &quot;视觉视口&quot;">​</a></h4><p>视觉视口就是用户真实看到的区域。</p><p>上图中手机屏幕显示的区域为视觉视口。</p><p>我们可以通过调用<code>window.innerWidth / innerHeight</code>来获取视觉视口大小。</p><p>手机一般会让浏览器不产生滚动条，会缩放布局视口到视觉视口大小，所以会导致页面整体看起来非常小。</p><h4 id="理想视口" tabindex="-1">理想视口 <a class="header-anchor" href="#理想视口" aria-label="Permalink to &quot;理想视口&quot;">​</a></h4><p>因为手机端展示的效果有缩小的效果，所以理想视口出现了，让布局视口等于理想视口就是理想视口了。</p><p>在css中怎么设置呢？简单的meta标签即可。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name=&quot;viewport&quot; content=&quot;width=</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">device-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">initial-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1; </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maximum-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1; </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">minimum-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1; </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">user-scalable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=no;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>每个字段的含义如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6aab5f910ca46588476ef7e2978d701~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p><strong>其中user-scalable设置为no 可以解决移动端点击事件延迟问题</strong></p><h3 id="适配方案" tabindex="-1">适配方案 <a class="header-anchor" href="#适配方案" aria-label="Permalink to &quot;适配方案&quot;">​</a></h3><h4 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h4><p>css3的媒体查询可以使我们在不同的媒体设备上展示不同效果。当浏览器窗口大小改变的时候，会根据浏览器的大小重新渲染页面。</p><h4 id="如何确定屏幕大小的分割点" tabindex="-1">如何确定屏幕大小的分割点 <a class="header-anchor" href="#如何确定屏幕大小的分割点" aria-label="Permalink to &quot;如何确定屏幕大小的分割点&quot;">​</a></h4><p>如果我们选择<code>600px</code>,<code>900px</code>,<code>1200px</code>,<code>1800px</code>作为分割点，可以适配到常见的14个机型：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5deab03c6ff445daf9bc342ad5ed8d0~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>当然这只是其中的一种分割方案，我们还可以这样划分：<code>480px</code>,<code>800px</code>,<code>1400px</code>,<code>1400px</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08bc0cdeb607418e97b0ec455394343d~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h4 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h4><p>语法：</p><h5 id="meta标签" tabindex="-1">meta标签 <a class="header-anchor" href="#meta标签" aria-label="Permalink to &quot;meta标签&quot;">​</a></h5><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 首先是meta标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name=&quot;viewport&quot; content=&quot;width=</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">device-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">initial-scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">user-scalable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=no&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>参数具体意思：</p><ul><li>width 设置的是 layoutviewport 的宽度</li><li>initial-scale 设置页面的初始缩放值，并且这个初始缩放值是相对于 idealviewport 缩放的，最终得到的结果不仅会决定 visualviewport，还会影响到 layoutviewport</li><li>user-scalable 是否允许用户进行缩放的设置</li></ul><h5 id="css3的-media" tabindex="-1">css3的@media <a class="header-anchor" href="#css3的-media" aria-label="Permalink to &quot;css3的@media&quot;">​</a></h5><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mediaType and|not|only (media feature) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     /*CSS-Code;*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 加载兼容文件JS</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">因为IE8既不支持HTML5也不支持CSS3 @media ，所以我们需要加载两个JS文件，来保证我们的代码实现兼容效果 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!--[if lt IE 9]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　　&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src=&quot;https://oss</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.maxcdn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.com/libs/html5shiv/3</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.0/html5shiv.js&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　　&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src=&quot;https://oss</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.maxcdn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.com/libs/respond.js/1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.0/respond</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.js&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;![</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]--</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h6 id="媒体类型" tabindex="-1">媒体类型 <a class="header-anchor" href="#媒体类型" aria-label="Permalink to &quot;媒体类型&quot;">​</a></h6><ul><li>all 所有媒体</li><li>braille 盲文触觉设备</li><li>embossed 盲文打印机</li><li>print 手持设备</li><li>projection 打印预览</li><li>screen 彩屏设备</li><li>speech &#39;听觉&#39;类似的媒体类型</li><li>tty 不适用像素的设备</li><li>tv 电视</li></ul><h6 id="关键字" tabindex="-1">关键字 <a class="header-anchor" href="#关键字" aria-label="Permalink to &quot;关键字&quot;">​</a></h6><ul><li>and</li><li>not ，not关键字是用来排除某种制定的媒体类型</li><li>only ，only用来定某种特定的媒体类型</li></ul><h6 id="所有参数" tabindex="-1">所有参数 <a class="header-anchor" href="#所有参数" aria-label="Permalink to &quot;所有参数&quot;">​</a></h6><ul><li>width:浏览器可视宽度。</li><li>max-width: 浏览器最大可视宽度</li><li>min-width: 浏览器最小可视宽度</li><li>height:浏览器可视高度。</li><li>device-width:设备屏幕的宽度。</li><li>device-height:设备屏幕的高度。</li><li>orientation:检测设备目前处于横向还是纵向状态。</li><li>aspect-ratio:检测浏览器可视宽度和高度的比例。(例如：aspect-ratio:16/9)</li><li>device-aspect-ratio:检测设备的宽度和高度的比例。</li><li>color:检测颜色的位数。（例如：min-color:32就会检测设备是否拥有32位颜色）</li><li>color-index:检查设备颜色索引表中的颜色，他的值不能是负数。</li><li>monochrome:检测单色楨缓冲区域中的每个像素的位数。（这个太高级，估计咱很少会用的到）</li><li>resolution:检测屏幕或打印机的分辨率。(例如：min-resolution:300dpi或min-resolution:118dpcm)。</li><li>orientation: portrait横屏/landscape竖屏</li><li>-webkit-min-device-pixel-ratio：number /dpr 设备像素比</li></ul><h4 id="rem适配" tabindex="-1">rem适配 <a class="header-anchor" href="#rem适配" aria-label="Permalink to &quot;rem适配&quot;">​</a></h4><p>rem是css3新增的单位，在移动端基本都支持。rem的大小是根据根元素html的大小来决定大小的。即html的font-size值改变，其大小也会随着改变。大小关系：1rem = html/font-size.</p><p>一个简单的根据屏幕大小改变font-size的方法：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*容器分为10份，font-size用十分之一的宽度来表示，最后在header标签中执行这段代码，就可以动态定义font-size的大小，从而1rem在不同的视觉容器中表示不同的大小，用rem固定单位可以实现不同容器内布局的自适应。*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> refreshRem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> docEl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> doc.documentElement;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> docEl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBoundingClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().width;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    docEl.style.fontSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    flexible.rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> win.rem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rem;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">win.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;resize&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, refreshRem);</span></span></code></pre></div><p>Webpack插件：同时为了书写方便可以直接通过 px 布局，然后在打包时利用 pxtorem 库转化为基于 rem 的布局</p><h4 id="vw-vh布局" tabindex="-1">vw，vh布局 <a class="header-anchor" href="#vw-vh布局" aria-label="Permalink to &quot;vw，vh布局&quot;">​</a></h4><p>vh、vw方案即将视觉视口宽度 window.innerWidth和视觉视口高度 window.innerHeight 等分为 100 份。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4e95db63e8c47e2bd3275cb454d6336~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>单位定义：</p><ul><li><code>vw(Viewport&#39;s width)</code>：<code>1vw</code>等于视觉视口的<code>1%</code></li><li><code>vh(Viewport&#39;s height)</code> :<code> 1vh</code> 为视觉视口高度的<code>1%</code></li><li><code>vmin</code> : <code>vw</code> 和 <code>vh</code> 中的较小值</li><li><code>vmax</code> : 选取 <code>vw</code> 和 <code>vh</code> 中的较大值</li></ul><p>缺陷：</p><ul><li><code>px</code>转换成<code>vw</code>不一定能完全整除，因此有一定的像素差。</li></ul><h1 id="参考致谢" tabindex="-1">参考致谢 <a class="header-anchor" href="#参考致谢" aria-label="Permalink to &quot;参考致谢&quot;">​</a></h1><ul><li><a href="https://juejin.cn/post/6992595716820434981" target="_blank" rel="noreferrer">一文读懂屏幕尺寸、分辨率、PPI、设备独立像素、Retina</a></li><li><a href="https://juejin.cn/post/6844903845617729549#heading-29" target="_blank" rel="noreferrer">关于移动端适配，你必须要知道的</a></li><li><a href="https://juejin.cn/post/6844903631993454600" target="_blank" rel="noreferrer">面试官：你了解过移动端适配吗？</a></li><li><a href="https://juejin.cn/post/6844903734347055118#heading-11" target="_blank" rel="noreferrer">移动端适配总结</a></li><li><a href="https://juejin.cn/post/6844903814332432397#heading-6" target="_blank" rel="noreferrer">前端响应式布局原理与方案（详细版）</a></li></ul>`,88),p=[l];function n(h,k,r,d,o,c){return a(),s("div",null,p)}const m=i(t,[["render",n]]);export{g as __pageData,m as default};
