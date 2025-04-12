document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const infoText = this.getAttribute('data-info');
        document.getElementById('item-info').textContent = infoText;
    });
});