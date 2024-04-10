var nav_full = document.getElementById('navbarNav');

nav_full.addEventListener('click', function() {
   
    var toggler = document.querySelector(".navbar-toggler");
    toggler.click();
   
});

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.pbtn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
