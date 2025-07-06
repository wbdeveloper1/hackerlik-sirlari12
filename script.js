document.addEventListener('DOMContentLoaded', () => {
    // 🎉 Kirishdagi xush kelibsiz oynasi
    alert("Saytga xush kelibsiz! 👨‍💻");

    // 🌗 Oldingi tanlangan mavzuni yuklash
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // 🌙 Rejim tugmasi bosilganda
    const modeToggleBtn = document.getElementById('modeToggle');
    if (modeToggleBtn) {
        modeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // 📩 Agar kontakt formasi mavjud bo‘lsa, yuborishni tutib qolish
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (!name) {
                alert("Iltimos, ismingizni kiriting.");
                return;
            }

            if (!message) {
                alert("Iltimos, xabaringizni yozing.");
                return;
            }

            alert(`${name}, xabaringiz yuborildi! Rahmat 😊`);
            this.reset();
        });
    }

    // 🛡️ Xavfsizlik qoidalari tugmalari funksiyasi
    const ruleButtons = document.querySelectorAll('.rule-btn');
    const ruleDescription = document.getElementById('ruleDescription');

    const rulesInfo = {
        xss: "🛑 <strong>XSS (Cross-Site Scripting)</strong> — bu hujum turi foydalanuvchi brauzerida zararli JavaScript kodini ishga tushirib, cookie ma’lumotlar, login sessiyalarni o‘g‘irlashga olib keladi.",
        sql: "📂 <strong>SQL Injection</strong> — foydalanuvchidan kiritilgan so‘rov orqali ma’lumotlar bazasiga nojo‘ya so‘rov yuboriladi. Bu orqali attacker ma’lumotlarni o‘chirishi, o‘zgartirishi yoki ko‘rishi mumkin.",
        csrf: "🔐 <strong>CSRF (Cross-Site Request Forgery)</strong> — bu foydalanuvchining nomidan maxfiy yoki xavfli so‘rovlar yuborilishi bo‘lib, u autentifikatsiyalangan sessiyalardan foydalanadi."
    };

    if (ruleButtons && ruleDescription) {
        ruleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const topic = button.getAttribute('data-topic');
                ruleDescription.innerHTML = `<div style="padding:10px; border:1px solid #58a6ff; border-radius:8px; margin-top:10px;">${rulesInfo[topic]}</div>`;
            });
        });
    }
});
