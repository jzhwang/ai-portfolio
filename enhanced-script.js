// 检测是否通过 HTTP/HTTPS 访问
function checkProtocol() {
    const protocol = window.location.protocol;

    if (protocol === 'file:') {
        // 显示警告提示
        const warning = document.createElement('div');
        warning.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ff6b6b, #ff8e53);
            color: white;
            padding: 15px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
            z-index: 9999;
            font-size: 14px;
            font-weight: 600;
            max-width: 90%;
            text-align: center;
            animation: slideDown 0.5s ease;
        `;

        warning.innerHTML = `
            ⚠️ 检测到使用 file:// 协议访问，B站视频无法播放<br>
            <small style="font-size: 12px; opacity: 0.9;">
                请使用 run.bat 启动本地服务器，或点击视频卡片下方的"在B站观看"按钮
            </small>
        `;

        document.body.appendChild(warning);

        // 5秒后淡出
        setTimeout(() => {
            warning.style.animation = 'slideUp 0.5s ease';
            setTimeout(() => warning.remove(), 500);
        }, 8000);

        // 为每个视频添加备用链接
        addBilibiliLinks();
    }
}

// 添加"在B站观看"按钮
function addBilibiliLinks() {
    const videoData = [
        { bvid: 'BV114C1BCEkK', title: '猫头鹰王国' },
        { bvid: 'BV1SJC1BEEAU', title: '酷炫飙车' },
        { bvid: 'BV1NmCyB3Egm', title: '长安的荔枝' },
        { bvid: 'BV1WmCyB3Eo8', title: '花木兰' },
        { bvid: 'BV1x1CyBkEWW', title: '仲夏梦舟' },
        { bvid: 'BV1McmtBVECc', title: '走过两个月亮' }
    ];

    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach((card, index) => {
        if (index < videoData.length) {
            const data = videoData[index];
            const link = document.createElement('a');
            link.href = `https://www.bilibili.com/video/${data.bvid}`;
            link.target = '_blank';
            link.style.cssText = `
                display: block;
                text-align: center;
                margin-top: 10px;
                padding: 8px 15px;
                background: linear-gradient(135deg, #00d4ff, #0099ff);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-size: 13px;
                font-weight: 600;
                transition: all 0.3s ease;
            `;
            link.textContent = '📺 在B站观看';

            link.addEventListener('mouseenter', () => {
                link.style.background = 'linear-gradient(135deg, #00ffff, #00d4ff)';
                link.style.transform = 'scale(1.05)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.background = 'linear-gradient(135deg, #00d4ff, #0099ff)';
                link.style.transform = 'scale(1)';
            });

            const videoInfo = card.querySelector('.video-info');
            if (videoInfo) {
                videoInfo.appendChild(link);
            }
        }
    });
}

// 添加滑动动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// 页面加载时执行检测
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkProtocol);
} else {
    checkProtocol();
}
