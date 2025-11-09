#!/bin/bash

# 职场续命力 H5 - 快速部署脚本

echo "🚀 职场续命力 H5 - 快速部署"
echo "================================"
echo ""

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

echo "📦 准备部署文件..."
echo ""

# 显示项目信息
echo "项目文件:"
ls -lh *.html | awk '{print "  ✓", $9, "(" $5 ")"}'
echo ""

# 选择部署平台
echo "请选择部署平台:"
echo "  1) Vercel (推荐)"
echo "  2) Netlify"
echo "  3) 仅生成压缩包,手动上传"
echo ""
read -p "请输入选项 [1-3]: " choice

case $choice in
    1)
        echo ""
        echo "🔷 使用 Vercel 部署..."
        echo ""

        # 检查 Vercel CLI
        if ! command -v vercel &> /dev/null; then
            echo "📥 正在安装 Vercel CLI..."
            npx vercel --version
        fi

        echo ""
        echo "🚀 开始部署到 Vercel..."
        echo ""
        npx vercel --prod

        echo ""
        echo "✅ 部署完成!"
        echo ""
        ;;

    2)
        echo ""
        echo "🟢 使用 Netlify 部署..."
        echo ""

        # 检查 Netlify CLI
        if ! command -v netlify &> /dev/null; then
            echo "📥 正在安装 Netlify CLI..."
            npm install -g netlify-cli
        fi

        echo ""
        echo "🚀 开始部署到 Netlify..."
        echo ""
        netlify deploy --prod

        echo ""
        echo "✅ 部署完成!"
        echo ""
        ;;

    3)
        echo ""
        echo "📦 生成部署压缩包..."
        echo ""

        # 创建临时目录
        TEMP_DIR="career-longevity-h5-deploy"
        rm -rf $TEMP_DIR
        mkdir -p $TEMP_DIR

        # 复制文件
        cp -r *.html css js data $TEMP_DIR/
        [ -d images ] && cp -r images $TEMP_DIR/

        # 压缩
        zip -r career-longevity-h5.zip $TEMP_DIR

        # 清理
        rm -rf $TEMP_DIR

        echo "✅ 压缩包已生成: career-longevity-h5.zip"
        echo ""
        echo "📝 手动部署步骤:"
        echo "  1. 访问 https://vercel.com 或 https://netlify.com"
        echo "  2. 登录账号"
        echo "  3. 拖拽 career-longevity-h5.zip 到页面"
        echo "  4. 等待部署完成"
        echo ""
        ;;

    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

echo "🎉 部署指南: 查看 DEPLOYMENT.md 获取详细说明"
echo ""
echo "📱 测试清单:"
echo "  □ 在电脑浏览器打开"
echo "  □ 在手机浏览器打开"
echo "  □ 在微信中打开"
echo "  □ 完整测评流程"
echo ""
echo "✨ 部署完成后,别忘了:"
echo "  1. 保存部署URL"
echo "  2. 生成二维码"
echo "  3. 开始在私域推广!"
echo ""
