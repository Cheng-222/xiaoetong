document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-button');
    const searchInputWrapper = document.querySelector('.search-input-wrapper');
    const searchCancel = document.querySelector('.search-cancel');
    const searchInput = document.querySelector('.search-input-wrapper input');
    const navMenu = document.querySelector('.nav-menu');
    const tabBtns = document.querySelector('.tabs');
    const sidebar = document.querySelector('.sidebar ul');
    // 点击搜索按钮展开搜索框
    searchButton.addEventListener('click', function () {
        searchInputWrapper.classList.add('active');
        searchCancel.classList.add('active');
        searchInput.focus();
        searchButton.style.opacity = '0';
    });

    // 点击取消按钮收起搜索框
    searchCancel.addEventListener('click', function () {
        searchInputWrapper.classList.remove('active');
        searchCancel.classList.remove('active');
        searchInput.value = '';
        searchButton.style.opacity = '1';
    });

    // 点击页面其他区域收起搜索框
    document.addEventListener('click', function (event) {
        const isClickInside = searchButton.contains(event.target) ||
            searchInputWrapper.contains(event.target) ||
            searchCancel.contains(event.target);

        if (!isClickInside && searchInputWrapper.classList.contains('active')) {
            searchInputWrapper.classList.remove('active');
            searchCancel.classList.remove('active');
            searchInput.value = '';
            searchButton.style.opacity = '1';
        }
    });

    //导航栏点击切换
    navMenu.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            const activeItem = navMenu.querySelector('.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            event.target.classList.add('active');
        }
    })

    // 点击标签切换
    tabBtns.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            const activeItem = tabBtns.querySelector('.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            event.target.classList.add('active');
        }
    })

    //侧边栏功能
    const sidebarItems = sidebar.querySelectorAll('li');

    sidebarItems.forEach(item => {
        const popover = item.querySelector('.popover');

        // 鼠标移入显示popover
        item.addEventListener('mouseenter', function () {
            popover.style.display = 'block';
        });

        // 鼠标移出隐藏popover
        item.addEventListener('mouseleave', function () {
            popover.style.display = 'none';
        });
    });
});