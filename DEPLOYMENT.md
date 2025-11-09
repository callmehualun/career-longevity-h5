# 职场续命力 H5 - 部署指南

## 🚀 方法1: 使用 Vercel (推荐)

### 步骤1: 准备 Vercel 账号

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击右上角 "Sign Up"
3. 使用 GitHub/GitLab/Bitbucket 账号登录(推荐GitHub)

### 步骤2: 部署项目

#### 方式A: 通过 Web 界面部署(最简单)

1. 登录 Vercel 后,点击 "Add New" → "Project"
2. 点击 "Import Git Repository"
3. 如果还没有推送到GitHub,选择 "Import from other Git provider"
4. 或者直接拖拽整个 `career-longevity-h5` 文件夹到页面
5. Vercel会自动识别为静态网站
6. 点击 "Deploy"
7. 等待30秒-1分钟,部署完成!

#### 方式B: 通过 CLI 部署

```bash
# 1. 进入项目目录
cd /Users/fcy/Documents/vibe\ coding/vscode/career-longevity-h5

# 2. 使用 npx 部署(无需安装)
npx vercel

# 3. 首次使用会要求登录
# - 选择邮箱登录或GitHub登录
# - 在浏览器中完成授权

# 4. 回答几个问题:
# ? Set up and deploy "~/career-longevity-h5"? [Y/n] y
# ? Which scope do you want to deploy to? [你的账号]
# ? Link to existing project? [N/y] n
# ? What's your project's name? career-longevity
# ? In which directory is your code located? ./

# 5. 部署完成!会显示部署URL
# ✅ https://career-longevity-xxx.vercel.app
```

### 步骤3: 获取访问链接

部署成功后,你会得到:
- **预览链接**: `https://career-longevity-xxx.vercel.app`
- **生产链接**: 同上(首次部署就是生产环境)

### 步骤4: 自定义域名(可选)

1. 在 Vercel 项目设置中
2. 点击 "Domains"
3. 添加自己的域名(如 career.yourdomain.com)
4. 按照提示配置DNS记录

---

## 🚀 方法2: 使用 Netlify (同样免费)

### 步骤1: 注册 Netlify

1. 访问 [https://www.netlify.com](https://www.netlify.com)
2. 点击 "Sign up" 使用GitHub登录

### 步骤2: 拖拽部署(最快)

1. 登录后,进入 [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. 直接拖拽 `career-longevity-h5` 文件夹到页面
3. 等待上传和部署
4. 完成!获得链接: `https://random-name.netlify.app`

### 步骤3: 自定义域名

1. 在站点设置中点击 "Domain settings"
2. 可以修改子域名或添加自定义域名

---

## 🚀 方法3: 使用 GitHub Pages (免费)

### 步骤1: 创建 GitHub 仓库

```bash
# 1. 在 GitHub 创建新仓库 "career-longevity-h5"

# 2. 推送代码
cd /Users/fcy/Documents/vibe\ coding/vscode/career-longevity-h5
git remote add origin https://github.com/你的用户名/career-longevity-h5.git
git branch -M main
git push -u origin main
```

### 步骤2: 启用 GitHub Pages

1. 进入仓库 Settings
2. 找到 "Pages" 选项
3. Source 选择 "main" 分支
4. 点击 Save
5. 等待1-2分钟,访问: `https://你的用户名.github.io/career-longevity-h5/`

---

## 📱 部署后的验证步骤

部署完成后,请检查:

### 1. 基本功能测试

- [ ] 首页能正常打开
- [ ] 点击"开始测评"能跳转到测评页
- [ ] 24道题都能正常显示和选择
- [ ] 完成测评后能看到结果
- [ ] 雷达图正常显示
- [ ] 点击"解锁报告"能进入报告页

### 2. 移动端测试

- [ ] 在手机浏览器打开
- [ ] 在微信中打开链接
- [ ] 检查UI是否适配
- [ ] 测试触摸交互

### 3. 数据持久化测试

- [ ] 测评到一半刷新页面,进度是否保存
- [ ] 完成测评后,刷新结果页是否还在
- [ ] 重新测评能否清除旧数据

---

## 🔗 获取分享链接

部署成功后,你会得到类似这样的链接:

```
https://career-longevity-xxx.vercel.app
```

### 生成短链接(可选)

使用短链接服务让分享更友好:

1. **新浪短链接**: https://sina.lt
2. **百度短链接**: https://dwz.cn
3. **自定义域名**: 在Vercel中配置

### 生成二维码

1. 访问 [https://cli.im](https://cli.im)
2. 输入你的部署链接
3. 生成二维码图片
4. 下载保存,用于海报/宣传图

---

## 📊 监控和分析

### 添加 Google Analytics

在所有HTML文件的 `</head>` 前添加:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 添加百度统计

```html
<!-- 百度统计 -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?你的统计ID";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

---

## 🐛 常见问题

### Q1: 部署后页面空白?
**A**: 检查浏览器控制台是否有JavaScript错误,可能是路径问题。

### Q2: 雷达图不显示?
**A**: 某些老版本浏览器不支持Canvas,建议在移动端测试。

### Q3: localStorage不工作?
**A**: 检查是否在隐私模式/无痕模式,这会禁用localStorage。

### Q4: 微信中打开白屏?
**A**: 可能被微信拦截,检查域名是否被封。可以申请微信白名单。

### Q5: 如何更新部署?
**A**:
- **Vercel**: 再次运行 `npx vercel --prod`
- **Netlify**: 重新拖拽文件夹
- **GitHub Pages**: `git push` 即可自动更新

---

## 💡 优化建议

### 1. 性能优化

- [ ] 压缩HTML/CSS/JS文件
- [ ] 启用CDN加速
- [ ] 添加Service Worker离线缓存

### 2. SEO优化

在 `index.html` 的 `<head>` 中添加:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="职场续命力测评 - 24道题测出你的职场生存力,找到破局路径">
<meta name="keywords" content="职场测评,职业发展,职场续命力,35岁危机,职业规划">
<meta name="author" content="职场续命力团队">

<!-- Open Graph (分享到社交媒体) -->
<meta property="og:title" content="职场续命力测评 - 你的职场还能撑多久?">
<meta property="og:description" content="24道题测出你的职场生存力,获得专业的职业发展建议">
<meta property="og:image" content="https://你的域名/share-image.jpg">
<meta property="og:url" content="https://你的域名">
<meta property="og:type" content="website">
```

### 3. 微信分享优化

添加微信JS-SDK,自定义分享标题和图片:

```html
<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
<script>
// 配置微信分享
wx.config({
  // 配置信息
});

wx.ready(function() {
  wx.updateAppMessageShareData({
    title: '职场续命力测评',
    desc: '24道题测出你的职场生存力',
    link: window.location.href,
    imgUrl: 'https://你的域名/share-cover.jpg'
  });
});
</script>
```

---

## 📈 推广策略

### 1. 私域推广

**微信群**:
```
📊 发现一个很准的职场测评

24道题就能测出你的职场生存力
还有详细的破局建议,我测了XX分

免费测评👉 [链接]
```

**朋友圈**:
- 配图: 测评结果截图
- 文案: 简短+悬念
- 链接: 放评论区

### 2. 公域推广

- **小红书**: 写测评体验笔记
- **知乎**: 回答职场相关问题,附测评链接
- **豆瓣**: 职场小组发帖
- **B站**: 做测评视频,简介放链接

---

## 🎯 转化优化

### A/B测试建议

测试不同元素找到最佳转化:

1. **价格测试**: 9.9元 vs 19.9元 vs 14.9元
2. **标题测试**: "职场续命力" vs "职场生存力" vs "职场竞争力"
3. **CTA测试**: "开始测评" vs "免费测试" vs "立即测试"
4. **颜色测试**: 橙红色 vs 蓝色 vs 绿色

### 数据追踪点

关键节点埋点:

```javascript
// 进入首页
gtag('event', 'page_view', {'page': 'landing'});

// 开始测评
gtag('event', 'start_assessment');

// 完成题目
gtag('event', 'question_answered', {'question_id': 'Q1'});

// 查看结果
gtag('event', 'view_result', {'score': totalScore});

// 点击购买
gtag('event', 'click_purchase');

// 完成支付
gtag('event', 'purchase', {'value': 9.9, 'currency': 'CNY'});
```

---

## 📞 技术支持

如果遇到部署问题:

1. 查看 Vercel 文档: https://vercel.com/docs
2. 查看 Netlify 文档: https://docs.netlify.com
3. 检查项目 README: `README.md`

---

## ✅ 部署检查清单

部署前确认:

- [ ] 所有HTML文件都能正常打开
- [ ] CSS样式正确加载
- [ ] JavaScript无报错
- [ ] 图片路径正确(如果有)
- [ ] localStorage功能正常
- [ ] 移动端适配正常
- [ ] Git仓库已提交所有文件

部署后确认:

- [ ] 生产环境URL能访问
- [ ] 所有页面都能正常跳转
- [ ] 测评流程完整可用
- [ ] 雷达图正常显示
- [ ] 分享功能正常
- [ ] 在手机上测试通过
- [ ] 在微信中测试通过

---

**现在就去部署吧! 3分钟即可完成!** 🚀

推荐顺序:
1. 先用 Vercel Web界面(拖拽部署,最简单)
2. 如果不行,用 Netlify Drop
3. 都不行,用 GitHub Pages

部署成功后,记得把链接分享给我,我帮你检查! 😊
