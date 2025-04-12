// بعد از لود شدن صفحه کد ها اجرا شود
document.addEventListener("DOMContentLoaded", function () {

    // حلقه روی .item ها
    document.querySelectorAll('.item').forEach((item, index) => {

        // اضافه کردن اکشن هاور روی المنت item
        item.addEventListener('mouseenter', function () {

            // حلقه برای پنهان کردن المنت های دیگر
            document.querySelectorAll('.left-panel > div').forEach((div) => {
                div.style.display = 'none';
            })

            // نشان دادن المنت مورد نظر بر اساس index
            // نکته : index از 0 شروع می شود و id ها از 1
            document.getElementById(`content${index + 1}`).style.display = 'block';
        });

    });
})