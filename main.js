/* =======================================
   Portfolio - Zhang Jinghao Designer & Visual Artist
   主 JavaScript 文件
   ======================================= */

// ── Works Data ──
const works = [
    { type:'image', src:'作品/安全气囊.jpg', name:'安全气囊' },
    { type:'video', src:'作品/北京轨道交通1.mp4', name:'北京轨道交通1' },
    { type:'video', src:'作品/北京轨道交通2.mp4', name:'北京轨道交通2' },
    { type:'video', src:'作品/北京轨道交通3.mp4', name:'北京轨道交通3' },
    { type:'image', src:'作品/超感知安全系统.jpg', name:'超感知安全系统' },
    { type:'video', src:'作品/成都音乐会-一阵恼人的秋风1.mp4', name:'成都音乐会-一阵恼人的秋风1' },
    { type:'video', src:'作品/成都音乐会-一阵恼人的秋风2.mp4', name:'成都音乐会-一阵恼人的秋风2' },
    { type:'video', src:'作品/成都音乐会-一阵恼人的秋风3.mp4', name:'成都音乐会-一阵恼人的秋风3' },
    { type:'video', src:'作品/达梦数据.mp4', name:'达梦数据' },
    { type:'image', src:'作品/高效热管理-春天.jpg', name:'高效热管理-春天' },
    { type:'image', src:'作品/高效热管理-冬天.jpg', name:'高效热管理-冬天' },
    { type:'image', src:'作品/高效热管理-夏天.jpg', name:'高效热管理-夏天' },
    { type:'video', src:'作品/嘉展力拓芯片制造1.mp4', name:'嘉展力拓芯片制造1' },
    { type:'video', src:'作品/嘉展力拓芯片制造2.mp4', name:'嘉展力拓芯片制造2' },
    { type:'video', src:'作品/京东618-快-方屏.mp4', name:'京东618-快-方屏' },
    { type:'image', src:'作品/练习1.png', name:'练习1' },
    { type:'image', src:'作品/练习10.png', name:'练习10' },
    { type:'image', src:'作品/练习11.png', name:'练习11' },
    { type:'image', src:'作品/练习12.png', name:'练习12' },
    { type:'image', src:'作品/练习13.png', name:'练习13' },
    { type:'image', src:'作品/练习14.png', name:'练习14' },
    { type:'image', src:'作品/练习15.png', name:'练习15' },
    { type:'image', src:'作品/练习16.png', name:'练习16' },
    { type:'image', src:'作品/练习17.png', name:'练习17' },
    { type:'image', src:'作品/练习18.png', name:'练习18' },
    { type:'image', src:'作品/练习19.png', name:'练习19' },
    { type:'image', src:'作品/练习2.png', name:'练习2' },
    { type:'image', src:'作品/练习20.jpg', name:'练习20' },
    { type:'image', src:'作品/练习21.png', name:'练习21' },
    { type:'image', src:'作品/练习3.png', name:'练习3' },
    { type:'image', src:'作品/练习4.png', name:'练习4' },
    { type:'image', src:'作品/111.png', name:'练习5' },
    { type:'image', src:'作品/练习6.png', name:'练习6' },
    { type:'image', src:'作品/练习7.png', name:'练习7' },
    { type:'image', src:'作品/练习9.png', name:'练习9' },
    { type:'video', src:'作品/练习视频1.mp4', name:'练习视频1' },
    { type:'video', src:'作品/练习视频2.mp4', name:'练习视频2' },
    { type:'video', src:'作品/练习视频3.mp4', name:'练习视频3' },
    { type:'video', src:'作品/练习视频4.mp4', name:'练习视频4' },
    { type:'video', src:'作品/裸眼3D衢州.mp4', name:'裸眼3D衢州' },
    { type:'video', src:'作品/牛郎织女.mp4', name:'牛郎织女' },
    { type:'video', src:'作品/武重集团.mp4', name:'武重集团' },
    { type:'image', src:'作品/芯片1.png', name:'芯片1' },
    { type:'image', src:'作品/芯片2.png', name:'芯片2' },
    { type:'video', src:'作品/阳光电源智能清扫.mp4', name:'阳光电源智能清扫' },
    { type:'video', src:'作品/中国电建.mp4', name:'中国电建' },
    { type:'video', src:'作品/中国联通裸眼3D.mp4', name:'中国联通裸眼3D' }
];

// 交错排列图片和视频
const imgs = works.filter(w => w.type === 'image');
const vids = works.filter(w => w.type === 'video');
const sorted = [];
const max = Math.max(imgs.length, vids.length);
for (let i = 0; i < max; i++) {
    if (i < imgs.length) sorted.push(imgs[i]);
    if (i < vids.length) sorted.push(vids[i]);
}

// ── Gallery ──
let curIdx = 0;
const gallery = document.getElementById('gallery');

sorted.forEach((w, i) => {
    const card = document.createElement('div');
    card.className = 'card';

    const wrap = document.createElement('div');
    wrap.className = 'media-wrap';

    if (w.type === 'image') {
        const img = document.createElement('img');
        img.src = w.src;
        img.alt = w.name;
        img.loading = 'lazy';
        wrap.appendChild(img);
    } else {
        const vid = document.createElement('video');
        vid.src = w.src;
        vid.muted = true;
        vid.preload = 'metadata';
        wrap.appendChild(vid);
        const play = document.createElement('div');
        play.className = 'play-icon';
        wrap.appendChild(play);
        card.addEventListener('mouseenter', () => vid.play());
        card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    }

    card.appendChild(wrap);

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = w.name;
    card.appendChild(label);

    card.addEventListener('click', () => openLB(i));
    gallery.appendChild(card);
});

// ── Lightbox ──
const lb = document.getElementById('lightbox');
const lbContent = document.getElementById('lb-content');
const lbCounter = document.getElementById('lb-counter');
const lbFilename = document.getElementById('lb-filename');

function openLB(i) {
    curIdx = i;
    updateLB();
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLB() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
    const v = lbContent.querySelector('video');
    if (v) v.pause();
}

function updateLB() {
    const w = sorted[curIdx];
    lbContent.innerHTML = '';
    if (w.type === 'image') {
        const img = document.createElement('img');
        img.src = w.src;
        lbContent.appendChild(img);
    } else {
        const vid = document.createElement('video');
        vid.src = w.src;
        vid.controls = true;
        vid.autoplay = true;
        lbContent.appendChild(vid);
    }
    lbCounter.textContent = (curIdx + 1) + ' / ' + sorted.length;
    lbFilename.textContent = w.name;
}

function nav(dir) {
    const v = lbContent.querySelector('video');
    if (v) v.pause();
    curIdx = (curIdx + dir + sorted.length) % sorted.length;
    updateLB();
}

document.getElementById('lb-close').addEventListener('click', closeLB);
document.getElementById('lb-prev').addEventListener('click', () => nav(-1));
document.getElementById('lb-next').addEventListener('click', () => nav(1));
lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
document.addEventListener('keydown', e => {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
});

// ── Hero Image Parallax ──
(() => {
    const wrap = document.querySelector('.hero-img-wrap');
    if (!wrap) return;
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', e => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        wrap.style.transform = 'scale(1.15) translate(' + (x * -16) + 'px, ' + (y * -12) + 'px)';
    });
    hero.addEventListener('mouseleave', () => {
        wrap.style.transform = 'scale(1.15) translate(0, 0)';
    });
})();

// ── Contact Lightbox ──
function openContact() {
    const lb = document.getElementById('lightbox');
    const lbContent = document.getElementById('lb-content');
    const lbFilename = document.getElementById('lb-filename');
    const lbCounter = document.getElementById('lb-counter');
    lbContent.innerHTML = '<img src="个人二维码.png" alt="个人二维码" style="max-width:400px;max-height:80vh;">';
    lbFilename.textContent = '扫码联系';
    lbCounter.textContent = '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ── Carousel ──
(() => {
    const track = document.getElementById('carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const dotsWrap = document.getElementById('carousel-dots');
    const total = slides.length;
    let cur = 0;
    let timer = null;

    // Build dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    }
    const dots = dotsWrap.querySelectorAll('.carousel-dot');

    function goTo(idx) {
        // Pause video in current slide
        const curSlide = slides[cur];
        const curVideo = curSlide.querySelector('video');
        if (curVideo) { curVideo.pause(); curVideo.currentTime = 0; }

        cur = ((idx % total) + total) % total;
        track.style.transform = 'translateX(-' + (cur * 100) + '%)';
        dots.forEach((d, i) => d.classList.toggle('active', i === cur));

        // Play video in new slide
        const newSlide = slides[cur];
        const newVideo = newSlide.querySelector('video');
        if (newVideo) newVideo.play();

        resetAuto();
    }

    document.getElementById('carousel-prev').addEventListener('click', () => goTo(cur - 1));
    document.getElementById('carousel-next').addEventListener('click', () => goTo(cur + 1));

    function autoPlay() { timer = setInterval(() => goTo(cur + 1), 4000); }
    function resetAuto() { clearInterval(timer); autoPlay(); }

    // Pause on hover
    const wrap = track.closest('.carousel-wrap');
    wrap.addEventListener('mouseenter', () => clearInterval(timer));
    wrap.addEventListener('mouseleave', autoPlay);

    autoPlay();
})();
