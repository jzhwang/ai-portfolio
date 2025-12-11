// ========== 简单滚动动画替代 AOS ==========
// 使用 Intersection Observer 实现滚动动画
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    elements.forEach(el => observer.observe(el));
};

// 添加动画样式
const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        [data-aos] {
            opacity: 0;
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        [data-aos].aos-animate {
            opacity: 1;
        }

        [data-aos="fade-down"] {
            transform: translateY(-50px);
        }
        [data-aos="fade-down"].aos-animate {
            transform: translateY(0);
        }

        [data-aos="fade-right"] {
            transform: translateX(-50px);
        }
        [data-aos="fade-right"].aos-animate {
            transform: translateX(0);
        }

        [data-aos="fade-up"] {
            transform: translateY(50px);
        }
        [data-aos="fade-up"].aos-animate {
            transform: translateY(0);
        }

        [data-aos="zoom-in"] {
            transform: scale(0.8);
        }
        [data-aos="zoom-in"].aos-animate {
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);
};

// ========== 粒子背景效果 ==========
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // 随机位置
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${['#bf40ff', '#00f0ff', '#ff006e'][Math.floor(Math.random() * 3)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: float ${Math.random() * 10 + 5}s linear infinite;
            box-shadow: 0 0 ${Math.random() * 10 + 5}px currentColor;
        `;

        particlesContainer.appendChild(particle);
    }
}

// 粒子浮动动画
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
            transform: translateY(-20vh) translateX(10vw) rotate(90deg);
        }
        50% {
            transform: translateY(-40vh) translateX(-10vw) rotate(180deg);
        }
        75% {
            transform: translateY(-60vh) translateX(10vw) rotate(270deg);
        }
        100% {
            transform: translateY(-100vh) translateX(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ========== 头像特效 ==========
const avatar = document.getElementById('avatar');
if (avatar) {
    // 默认头像处理
    avatar.onerror = function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23667eea;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23764ba2;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx="100" cy="100" r="100" fill="url(%23grad)"/%3E%3Ctext x="100" y="130" font-size="80" text-anchor="middle" fill="white" font-family="Arial"%3EJ%3C/text%3E%3C/svg%3E';
    };

    // 鼠标跟随效果
    avatar.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        avatar.style.transform = `scale(1.1) rotate(${x / 10}deg) translate(${x / 10}px, ${y / 10}px)`;
    });

    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = '';
    });
}

// ========== 视频卡片懒加载优化 ==========
const videoCards = document.querySelectorAll('.video-card');
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 可以在这里添加视频预加载逻辑
        }
    });
}, observerOptions);

videoCards.forEach(card => {
    videoObserver.observe(card);
});

// ========== 应用卡片交互增强 ==========
const appCards = document.querySelectorAll('.app-card');

appCards.forEach(card => {
    // 鼠标移动时的发光跟随效果
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const glow = card.querySelector('.card-glow');
        if (glow) {
            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(191, 64, 255, 0.4) 0%, transparent 50%)`;
        }
    });

    // 3D 倾斜效果
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `translateY(-15px) scale(1.03) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });

    // 点击波纹效果
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: rippleEffect 0.6s ease-out;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// 波纹动画
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========== 滚动显示动画 ==========
let lastScrollTop = 0;
const navbar = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (navbar) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-20px)';
            navbar.style.opacity = '0.8';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
        }
    }

    lastScrollTop = scrollTop;
});

// ========== 性能优化：节流函数 ==========
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========== 添加键盘导航支持 ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // 关闭所有视频（如果需要）
        document.querySelectorAll('.video-wrapper iframe').forEach(iframe => {
            const src = iframe.src;
            iframe.src = src; // 重新加载以停止播放
        });
    }
});

// ========== 视频覆盖层控制 ==========
function initVideoOverlays() {
    const videoWrappers = document.querySelectorAll('.video-wrapper');

    videoWrappers.forEach(wrapper => {
        // 为每个视频添加覆盖层
        const overlay = document.createElement('div');
        overlay.className = 'video-overlay';
        overlay.innerHTML = '<div class="play-icon">▶</div>';
        wrapper.appendChild(overlay);

        const iframe = wrapper.querySelector('iframe');
        const originalSrc = iframe.src;

        // 点击覆盖层开始播放
        overlay.addEventListener('click', function() {
            // 添加 autoplay 参数重新加载视频
            iframe.src = originalSrc.replace('autoplay=0', 'autoplay=1');

            // 移除覆盖层
            overlay.classList.add('playing');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        });
    });
}

// ========== 页面加载完成后的初始化 ==========
window.addEventListener('DOMContentLoaded', () => {
    // 添加动画样式
    addAnimationStyles();

    // 初始化滚动动画
    setTimeout(() => animateOnScroll(), 100);

    // 初始化视频覆盖层
    initVideoOverlays();

    // 创建粒子
    createParticles();

    // 添加淡入效果
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 预加载关键资源
    const preloadLinks = document.querySelectorAll('a[href]');
    preloadLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('http')) {
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'prefetch';
                preloadLink.href = href;
                document.head.appendChild(preloadLink);
            }
        });
    });
});

// ========== 控制台彩蛋 ==========
console.log(
    '%c🎨 Jessica的AI作品集 %c',
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px; font-weight: bold;',
    ''
);
console.log('%c欢迎探索我的AI世界！', 'color: #bf40ff; font-size: 14px;');
console.log('%c如果你对这个网站感兴趣，欢迎联系我！', 'color: #00f0ff; font-size: 12px;');
