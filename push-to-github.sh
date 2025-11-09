#!/bin/bash

# 推送代码到 GitHub 的脚本
# 使用方法: bash push-to-github.sh

echo "🚀 准备推送代码到 GitHub..."
echo ""

cd "/Users/fcy/Documents/vibe coding/vscode/career-longevity-h5"

# 检查仓库状态
echo "📊 当前仓库状态:"
git status
echo ""

# 显示远程仓库
echo "🔗 远程仓库:"
git remote -v
echo ""

# 推送代码
echo "⬆️ 开始推送到 GitHub..."
echo ""
echo "请输入您的 GitHub 用户名和密码(或 Personal Access Token)"
echo "提示: 如果没有 Personal Access Token,请访问:"
echo "https://github.com/settings/tokens/new"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功!"
    echo ""
    echo "📱 下一步: 部署到 Vercel"
    echo "访问: https://vercel.com/new"
    echo "选择: Import Git Repository"
    echo "选择: callmehualun/career-longevity-h5"
    echo ""
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "💡 解决方案:"
    echo ""
    echo "方案1: 使用 Personal Access Token"
    echo "  1. 访问 https://github.com/settings/tokens/new"
    echo "  2. 创建新的 token (勾选 'repo' 权限)"
    echo "  3. 复制 token"
    echo "  4. 再次运行此脚本"
    echo "  5. 用户名输入: callmehualun"
    echo "  6. 密码输入: 粘贴你的 token"
    echo ""
    echo "方案2: 使用 GitHub Desktop"
    echo "  1. 下载并安装 GitHub Desktop"
    echo "  2. 登录 GitHub 账号"
    echo "  3. 添加本地仓库"
    echo "  4. 点击 Push origin"
    echo ""
    echo "方案3: 手动上传"
    echo "  1. 访问 https://github.com/callmehualun/career-longevity-h5"
    echo "  2. 点击 'uploading an existing file'"
    echo "  3. 拖拽所有文件到页面"
    echo ""
fi
