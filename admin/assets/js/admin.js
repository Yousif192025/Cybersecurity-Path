document.addEventListener('DOMContentLoaded', function() {
    // إدارة أحداث لوحة التحكم وخدمة القاموس (تمت الإضافة هنا)
    // تحميل بيانات القاموس
    fetch('/api/glossary')
        .then(response => response.json())
        .then(data => renderGlossary(data)) // تحتاج إلى تعريف وظيفة renderGlossary
        .catch(error => console.error('خطأ في تحميل بيانات القاموس:', error)); // إضافة معالجة الأخطاء

    // إدارة تنقل لوحة التحكم
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', switchTab); // تحتاج إلى تعريف وظيفة switchTab
    });

    // تنشيط عناصر القائمة
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // رسالة تسجيل الخروج
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
                // هنا يمكنك إضافة منطق تسجيل الخروج
                window.location.href = '/login.html';
            }
        });
    }

    // محاكاة تحميل البيانات
    function loadData() {
        // يمكن استبدال هذا بطلبات AJAX فعلية
        console.log('جاري تحميل بيانات لوحة التحكم...');
    }

    loadData();

    // تأثيرات للبطاقات
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// تعريفات الدوال الناقصة (مثال، تحتاج إلى إضافة المنطق الفعلي لها)
function renderGlossary(data) {
    console.log('بيانات القاموس المحملة:', data);
    // هنا تضع منطق عرض بيانات القاموس في الصفحة
}

function switchTab(event) {
    console.log('تم التبديل إلى التبويب:', event.currentTarget.textContent);
    // هنا تضع منطق تبديل المحتوى بناءً على التبويب الذي تم النقر عليه
    // يمكنك استخدام data attributes لتحديد المحتوى المرتبط بكل تبويب
}
