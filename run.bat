@echo off
chcp 65001 > nul
echo ====================================
echo   🚀 启动 AI 作品集网站
echo ====================================
echo.
echo 正在启动本地服务器...
echo.
echo 浏览器将自动打开：http://localhost:8000
echo.
echo 💡 提示：
echo    - 视频需要通过 HTTP 服务器访问才能播放
echo    - 按 Ctrl+C 可以停止服务器
echo.
echo ====================================
echo.

cd /d "%~dp0"
start http://localhost:8000
python -m http.server 8000
