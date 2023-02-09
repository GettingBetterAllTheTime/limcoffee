$(function () {
    //header menu-----------------------------------------
    $('header nav>ul').mouseenter(function () {
        $('ul.sub').stop().slideDown(500)
    })
    $('header nav>ul').mouseleave(function () {
        $('ul.sub').stop().slideUp(500)
    })

    // drink, beverage, milk, tea 를 containers 변수에 담기
    const containers = document.querySelectorAll('.cont');
    // drink, beverage, milk, tea 탭의 배경이미지를 pc, tablet, mobile 크기별로 각각 담기
    const bgDesktop = ["url('img/coffee0.png')", "url('img/beverage0.png')", "url('img/milk0.png')", "url('img/tea0.png')"];
    const bgTablet = ["url('img/coffee1.png')", "url('img/beverage1.png')", "url('img/milk1.png')", "url('img/tea1.png')"];
    const bgMobile = ["url('img/coffee2.png')", "url('img/beverage2.png')", "url('img/milk2.png')", "url('img/tea2.png')"];
    // 배경이미지 들어갈 공간을 mainBg 변수에 담기
    const mainBg = document.querySelector('.drink_bg');

    const contResult = (num = 0) => {
        for (let k = 0; k < containers.length; k++) {
            if (k == num) {
                containers[k].style.display = 'block';
            } else {
                containers[k].style.display = 'none';
            }
        }
        if (window.innerWidth > 1200) {
            mainBg.style.backgroundImage = bgDesktop[num];
        } else if (window.innerWidth > 576) {
            mainBg.style.backgroundImage = bgTablet[num];
        } else {
            mainBg.style.backgroundImage = bgMobile[num];
        }
    }
    contResult();

    const tabMenus = document.querySelectorAll('.tab_menu_items');
    tabMenus[0].focus()
    for (let i = 0; i < tabMenus.length; i++) {
        tabMenus[i].addEventListener('click', (e) => {
            e.preventDefault();
            let n = e.target.getAttribute('data-index');
            contResult(n)
        })
    }
    let drinkSub = document.querySelectorAll('.sub');
    console.log(drinkSub);
    let dessertSub = document.querySelectorAll('.sub')[1];
    let li = drinkSub[0].getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", (e) => {
            sessionStorage.setItem("drink_key", i);
        });
    };
})