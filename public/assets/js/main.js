document.addEventListener('DOMContentLoaded', () => {
    // ✅ دمج القائمة المشتركة في جميع الصفحات
    fetch('/assets/components/navbar.html')
        .then(response => response.text())
        .then(html => {
            const header = document.querySelector('header');
            if (header) header.insertAdjacentHTML('afterbegin', html);
        });

    // ✅ قاموس مصطلحات الأمن السيبراني (محلي)
    const terms = {
    "الأمن السيبراني": "هو حماية الأنظمة والشبكات والبرامج والبيانات من الهجمات الرقمية. تهدف هذه الهجمات عادة إلى الوصول إلى المعلومات الحساسة أو تغييرها أو تدميرها، أو ابتزاز المال من المستخدمين، أو مقاطعة العمليات التجارية العادية.",
    "أمن الكمبيوتر": "يركز على حماية الأجهزة والبرامج والبيانات على الكمبيوتر الفردي أو الشبكة المحلية. يتضمن ذلك الحماية من البرامج الضارة، الوصول غير المصرح به، وسرقة البيانات من الجهاز نفسه.",
    "برامج الفدية (Ransomware)": "نوع من البرامج الضارة يقوم بتشفير ملفات الضحية ومنع الوصول إليها حتى يتم دفع فدية (عادة بعملة رقمية) مقابل مفتاح فك التشفير.",
    "التصيد الاحتيالي (Phishing)": "محاولة احتيالية للحصول على معلومات حساسة مثل أسماء المستخدمين وكلمات المرور وتفاصيل بطاقة الائتمان، عن طريق التنكر ككيان موثوق به في اتصال إلكتروني (مثل البريد الإلكتروني أو الرسائل النصية).",
    "جدار الحماية (Firewall)": "نظام أمان شبكة يراقب ويتحكم في حركة مرور الشبكة الواردة والصادرة بناءً على قواعد أمان محددة مسبقًا. يعمل كحاجز بين شبكة داخلية موثوق بها وشبكة خارجية غير موثوق بها (مثل الإنترنت).",
    "البرمجيات الخبيثة (Malware)": "مصطلح عام يشمل أي برنامج تم تصميمه لإلحاق الضرر أو الوصول غير المصرح به إلى نظام الكمبيوتر، مثل الفيروسات، الديدان، أحصنة طروادة، وبرامج التجسس.",
    "كلمة المرور القوية": "كلمة مرور يصعب على المتسللين تخمينها أو اختراقها. عادة ما تكون طويلة، تحتوي على مزيج من الأحرف الكبيرة والصغيرة، الأرقام، والرموز الخاصة.",
    "المصادقة الثنائية (Two-Factor Authentication - 2FA)": "طريقة أمان تتطلب نوعين مختلفين من التحقق لتأكيد هوية المستخدم، مثل كلمة المرور (شيء تعرفه) ورمز يتم إرساله إلى هاتفك (شيء تملكه).",
    "تشفير البيانات (Data Encryption)": "عملية تحويل البيانات إلى شكل مشفر (لا يمكن قراءته) لضمان سريتها. لا يمكن فك تشفير البيانات وإعادتها إلى شكلها الأصلي إلا باستخدام مفتاح التشفير الصحيح.",
    "الثغرة الأمنية (Vulnerability)": "نقطة ضعف في نظام أو برنامج أو جهاز كمبيوتر يمكن استغلالها من قبل المهاجم لإحداث ضرر أو الوصول غير المصرح به."
};


    const glossaryContainer = document.querySelector('.glossary-container');
    const definitionText = document.getElementById('definition-text');
    const definitionArea = document.getElementById('definition-area');

    if (glossaryContainer && definitionArea && definitionText) {
        const definitionAreaTitle = definitionArea.querySelector('h2');

        for (const term in terms) {
            const button = document.createElement('button');
            button.classList.add('term-button');
            button.textContent = term;
            button.addEventListener('click', () => {
                definitionAreaTitle.textContent = term;
                definitionText.textContent = terms[term];
            });
            glossaryContainer.appendChild(button);
        }
    }

    // ✅ زر العودة للأعلى
    const mybutton = document.getElementById("scrollToTopBtn");

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    if (mybutton) {
        mybutton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ✅ إدارة الأحداث للقائمة (اختياري)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // يمكنك منع السلوك الافتراضي أو تنفيذ التنقل البرمجي هنا
            // e.preventDefault();
        });
    });
});

// ✅ مسار API مخصص لاستخدام لاحق (مثلاً تحميل بيانات من الخادم)
const API_BASE_URL = '/api/v1';

// ✅ تحميل قاموس خارجي (اختياري - لم يتم استخدامه فعلياً في هذا الكود)
async function loadGlossary() {
    const response = await fetch(`${API_BASE_URL}/glossary`);
    return await response.json();
}
