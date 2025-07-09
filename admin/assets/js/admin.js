document.addEventListener('DOMContentLoaded', function() {
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
