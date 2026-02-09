// --- Language Dictionary ---
const langData = {
    uz: {
        "nav-core": "Asosiy", "nav-projects": "Loyihalar", "nav-tarifs": "Tariflar", "nav-sync": "Bog'lanish",
        "hero-sub": "Intellekt • Nafosat • Evolyutsiya", "hero-btn": "Protokolni Boshlash",
        "registry-title": "Mukammallik Reyestri", "catalog-title": "Loyihalar Katalogi",
        "vault-web": "Veb-saytlar", "vault-smm": "SMM / Instagram", "vault-media": "Media / Multfilmlar",
        "web-tag-1": "E-Kommertsiya / Veb-sayt", "web-title-1": "Kofe Distributsiyasi", "web-desc-1": "Premium kofe brendi uchun veb-sayt",
        "web-tag-2": "Next.js / AI Integratsiya", "web-title-2": "Texnologik Hamjamiyat", "web-desc-2": "Axborot texnologiyalari vazirligi uchun sayt",
        "web-tag-3": "Veb-sayt / Brending", "web-title-3": "Yuk mashinalari savdosi", "web-desc-3": "Xalqaro diler uchun veb-sayt",
        "view-project": "Loyihani Ko'rish →",
        "smm-story-1": "\"SMM strategiya va brendingdan so'ng, mijoz PIIMA bilan yirik shartnoma imzoladi. Endi ular barcha Prezident maktablari uchun rasmiy kiyim yetkazib beruvchi hisoblanadi.\"",
        "smm-story-2": "Kuchli brend identifikatsiyasini ishlab chiqqanimizdan so'ng, kompaniyani bozorda ishonchli nom sifatida tanitdik. O'zbekiston bo'ylab distributsiya tizimi yaratildi.",
        "smm-story-3": "Natijaga yo'naltirilgan SMM strategiyasi orqali mebel brendlari savdosini oshirdik va ijtimoiy tarmoqlarni daromad manbaiga aylantirdik.",
        "smm-story-4": "Lead-generatsiya kampaniyalari orqali biz har oy 10 dan ortiq faol talabalarni jalb qiladigan pipeline yaratdik.",
        "badge-prestige": "NUFUZLI SHARTNOMA", "badge-success": "MUVAFFAQIYATLI EKSPANSIYA",
        "tag-furniture": "Mebel Kompaniyasi", "tag-branding": "Brend Identifikatsiyasi",
        "tag-education": "Ta'lim", "tag-students": "Talabalar",
        "media-type-1": "Dorixonalar tarmog'i", "media-type-2": "Multfilm", "media-type-3": "Kosmetika", "media-type-4": "Jamoat transporti", "media-type-5": "Kosmetika",
        "pricing-mod": "Investitsiya Modullari", "pricing-title": "Xizmat Tariflari",
        "t1-name": "Ekonom", "t1-list": "<li>2 ta kreativ</li><li>1 ta shooting day</li><li>4 ta Reels / 8 ta Post</li><li>15 ta stories</li>",
        "t2-name": "Online", "t2-list": "<li>Onlayn boshqaruv</li><li>2 ta kreativ</li><li>6-8 ta Reels / 10 ta Post</li><li>20 ta stories</li>",
        "t3-name": "Standart", "t3-list": "<li>8 ta Reels / 12 ta Post</li><li>20+ stories</li><li>2 ta shooting day</li><li>4 ta kreativ</li>",
        "t4-name": "Premium", "t4-list": "<li>12 ta Reels / 15 ta Post</li><li>4 ta shooting day</li><li>6 ta kreativ</li><li>To'liq Analitika</li>",
        "t5-name": "VIP", "t5-list": "<li>Veb-sayt</li><li>Logotip brending</li><li>Cheksiz Reels</li><li>Cheksiz Postlar</li>",
        "optimal": "Optimal", "btn-init": "Tanlash",
        "form-title": "Aloqa O'rnatish", "form-sub": "Konsultatsiya bosqichini boshlash uchun parametrlarni kiriting.",
        "label-name": "Shaxsiyat", "label-email": "Aloqa_Link", "label-type": "Missiya_Turi", "label-msg": "Missiya_Tafsiloti",
        "ph-name": "To'liq Ismingiz", "ph-email": "Email manzilingiz", "opt-1": "Tarif protokolini tanlang", "ph-msg": "Loyiha haqida yozing...", "form-btn": "Ma'lumotni Yuborish"
    },
    ru: {
        "nav-core": "ГЛАВНАЯ", "nav-projects": "ПРОЕКТЫ", "nav-tarifs": "ТАРИФЫ", "nav-sync": "СВЯЗАТЬСЯ",
        "hero-sub": "ИНТЕЛЛЕКТ • ЭЛЕГАНТНОСТЬ • ЭВОЛЮЦИЯ", "hero-btn": "ЗАПУСТИТЬ ПРОТОКОЛ",
        "registry-title": "РЕЕСТР СОВЕРШЕНСТВА", "catalog-title": "КАТАЛОГ ПРОЕКТОВ",
        "vault-web": "Веб-сайты", "vault-smm": "SMM / Инстаграм", "vault-media": "Медиа / Мультфильмы",
        "web-tag-1": "E-Commerce / Веб-сайт", "web-title-1": "Дистрибуция Кофе", "web-desc-1": "Сайт для премиального бренда кофе",
        "web-tag-2": "Next.js / AI Интеграция", "web-title-2": "Тех-сообщество", "web-desc-2": "Сайт для Министерства ИТ",
        "web-tag-3": "Веб-сайт / Брендинг", "web-title-3": "Продажа грузовиков", "web-desc-3": "Сайт для международного дилера",
        "view-project": "Смотреть Проект →",
        "smm-story-1": "\"После внедрения SMM стратегии и брендинга, клиент подписал крупный контракт с PIIMA на поставку формы для всех Президентских школ.\"",
        "smm-story-2": "После разработки бренда мы вывели компанию на рынок как надежное имя. Создана система дистрибуции по всему Узбекистану.",
        "smm-story-3": "С помощью SMM стратегии мы увеличили продажи мебельных брендов, превратив соцсети в источник дохода.",
        "smm-story-4": "Через кампании лидогенерации мы создали поток из более чем 10 активных студентов ежемесячно.",
        "badge-prestige": "ПРЕСТИЖНАЯ СДЕЛКА", "badge-success": "УСПЕШНАЯ ЭКСПАНСИЯ",
        "tag-furniture": "Мебельная Компания", "tag-branding": "Брендинг",
        "tag-education": "Образование", "tag-students": "Студенты",
        "media-type-1": "Аптечная сеть", "media-type-2": "Мультфильм", "media-type-3": "Косметика", "media-type-4": "Транспорт", "media-type-5": "Косметика",
        "pricing-mod": "Инвестиционные Модули", "pricing-title": "Тарифы Услуг",
        "t1-name": "Эконом", "t1-list": "<li>2 креатива</li><li>1 съемочный день</li><li>4 Reels / 8 Постов</li><li>15 сторис</li>",
        "t2-name": "Онлайн", "t2-list": "<li>Онлайн управление</li><li>2 креатива</li><li>6-8 Reels / 10 Постов</li><li>20 сторис</li>",
        "t3-name": "Стандарт", "t3-list": "<li>8 Reels / 12 Постов</li><li>20+ сторис</li><li>2 съемочных дня</li><li>4 креатива</li>",
        "t4-name": "Премиум", "t4-list": "<li>12 Reels / 15 Постов</li><li>4 съемочных дня</li><li>6 креативов</li><li>Полная Аналитика</li>",
        "t5-name": "VIP", "t5-list": "<li>Веб-сайт</li><li>Лого брендинг</li><li>Безлимит Reels</li><li>Безлимит Постов</li>",
        "optimal": "Оптимальный", "btn-init": "Выбрать",
        "form-title": "Установить Связь", "form-sub": "Введите параметры для начала фазы консультации.",
        "label-name": "Личность", "label-email": "Связь_Линк", "label-type": "Тип_Миссии", "label-msg": "Детали_Миссии",
        "ph-name": "Ваше Имя", "ph-email": "Ваш Email", "opt-1": "Выберите тарифный протокол", "ph-msg": "Напишите о проекте...", "form-btn": "Отправить Данные"
    },
    en: {
        "nav-core": "CORE", "nav-projects": "PROJECTS", "nav-tarifs": "TARIFS", "nav-sync": "SYNC NOW",
        "hero-sub": "INTELLIGENCE • ELEGANCE • EVOLUTION", "hero-btn": "INITIALISE PROTOCOL",
        "registry-title": "REGISTRY OF EXCELLENCE", "catalog-title": "PROJECT CATALOG",
        "vault-web": "Websites", "vault-smm": "SMM / Instagram", "vault-media": "Media / Cartoons",
        "web-tag-1": "E-Commerce / Website", "web-title-1": "Coffee Distribution", "web-desc-1": "Website for Premium Coffee brand",
        "web-tag-2": "Next.js / AI Integration", "web-title-2": "Tech Community", "web-desc-2": "Website for Ministry of Information Technologies",
        "web-tag-3": "Website / Branding", "web-title-3": "Truck sellers", "web-desc-3": "Website for International Truck Seller",
        "view-project": "VIEW PROJECT →",
        "smm-story-1": "\"After we executed a comprehensive SMM strategy and refined their digital identity, our client successfully secured a massive contract with **PIIMA**...\"",
        "smm-story-2": "After developing a strong brand identity and executing a targeted PR strategy, we positioned the company as a recognizable name across Uzbekistan.",
        "smm-story-3": "By implementing a results-focused SMM strategy, we helped furniture brands increase customer inquiries and consistent sales.",
        "smm-story-4": "Through lead generation campaigns, we created a steady pipeline of 10+ active students every month.",
        "badge-prestige": "PRESTIGE DEAL", "badge-success": "SUCCESSFUL EXPANSION",
        "tag-furniture": "Furniture Company", "tag-branding": "Brand Identity",
        "tag-education": "Education", "tag-students": "Students",
        "media-type-1": "Chemists' shop", "media-type-2": "Cartoon", "media-type-3": "Cosmetics", "media-type-4": "Public Transport", "media-type-5": "Cosmetics",
        "pricing-mod": "INVESTMENT MODULES", "pricing-title": "SERVICE TARIFS",
        "t1-name": "Econom", "t1-list": "<li>2 creative assets</li><li>1 shooting day</li><li>4 Reels / 8 Posts</li><li>15 stories</li>",
        "t2-name": "Online", "t2-list": "<li>Online management</li><li>2 creative assets</li><li>6-8 Reels / 10 posts</li><li>20 stories</li>",
        "t3-name": "Standard", "t3-list": "<li>8 reels / 12 posts</li><li>20+ stories</li><li>2 shooting days</li><li>4 creative assets</li>",
        "t4-name": "Premium", "t4-list": "<li>12 reels / 15 posts</li><li>4 shooting days</li><li>6 creative assets</li><li>Full Analytics</li>",
        "t5-name": "VIP", "t5-list": "<li>Website</li><li>Logo branding</li><li>Infinity Reels</li><li>Infinity Posts</li>",
        "optimal": "Optimal", "btn-init": "INITIALIZE",
        "form-title": "ESTABLISH CONNECTION", "form-sub": "Enter your parameters to begin the consultation phase.",
        "label-name": "Identity", "label-email": "Comm_Link", "label-type": "Mission_Type", "label-msg": "Mission_Brief",
        "ph-name": "Full Name", "ph-email": "Email Address", "opt-1": "Select Tarif Protocol", "ph-msg": "Tell us about your project...", "form-btn": "TRANSMIT DATA"
    }
};

// --- Multi-Language Logic ---
function changeLang(lang) {
    document.documentElement.lang = lang;
    
    // Update simple text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(langData[lang][key]) {
            el.innerHTML = langData[lang][key]; // innerHTML allows <li> inside lists
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if(langData[lang][key]) {
            el.placeholder = langData[lang][key];
        }
    });

    // Highlight active button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('lang-active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if(activeBtn) activeBtn.classList.add('lang-active');

    AOS.refresh();
}

// --- Original Logic ---
AOS.init();

function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    document.body.style.backgroundColor = isDark ? "#05010a" : "#f9f5ff";
    document.body.style.color = isDark ? "white" : "#05010a";
}

// Particle Background
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = "rgba(139, 92, 246, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    if(cursor) cursor.style.left = e.clientX + 'px';
    if(cursor) cursor.style.top = e.clientY + 'px';
    
    if(cursorBlur) {
        cursorBlur.animate({
            left: `${e.clientX - 100}px`,
            top: `${e.clientY - 100}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// Tilt Effect
document.querySelectorAll('.glass-card, .web-catalog-item, .smm-story-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

function filterVault(category) {
    document.querySelectorAll('.vault-content').forEach(vault => {
        vault.classList.add('hidden');
    });
    document.querySelectorAll('.vault-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-purple-600');
    });
    document.getElementById('vault-' + category).classList.remove('hidden');
    event.currentTarget.classList.add('active', 'bg-purple-600');
    
    if(category === 'media') {
        initVideoPreviews();
    }
    AOS.refresh();
}

function initVideoPreviews() {
    const videos = document.querySelectorAll('.preview-video');
    videos.forEach(video => {
        video.play();
        // Reset loop every 10 seconds (as per your code)
        setInterval(() => {
            video.currentTime = 0;
            video.play();
        }, 10000); 
    });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    initVideoPreviews();
    changeLang('uz'); // Default language
});