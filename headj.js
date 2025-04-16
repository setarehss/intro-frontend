// بعد از لود شدن صفحه کد ها اجرا شود
document.addEventListener("DOMContentLoaded", function () {

    const itemsMenu = document.querySelectorAll('.item');

    // حلقه روی .item ها
    itemsMenu.forEach((item, index) => {

        // اضافه کردن اکشن هاور روی المنت item
        item.addEventListener('mouseenter', function () {

            itemsMenu.forEach((element) => {
                element.classList.remove('active');
            })

            // اضافه کردن کلاس active به المنت item
            item.classList.add('active');

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

function openCanvas() {
    document.getElementById("myOffcanvas").classList.toggle("show");
    document.getElementById("mainContent").classList.add("shifted");
}

function closeCanvas() {
    document.getElementById("myOffcanvas").classList.remove("show");
    document.getElementById("mainContent").classList.remove("shifted");
}