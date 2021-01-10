$(document).ready(function() {
    const loading = document.querySelector('.loading');
    (function (){
        setTimeout(() => {
            loading.style.display = 'none';
        }, 2500)
    }())
    function debounce(func, wait=20, immediate = true){
        var timeout;
        return function(){
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }
    const ani_item = document.querySelectorAll('.animate_fade');
    $('#demo01').animatedModal();
    $('#demo02').animatedModal({modalTarget:'Modal02'});
    $('#demo03').animatedModal({modalTarget:'Modal03'});
    $('#demo04').animatedModal({modalTarget:'Modal04'}); 
    $('#demo05').animatedModal({modalTarget:'Modal05'}); 
    $('#demo06').animatedModal({modalTarget:'Modal06'}); 
    $('#demo07').animatedModal({modalTarget:'Modal07'}); 
    var topMenuHeight = $('header').height();
    $('.nav-link').click(function(e){
        let href=$(this).attr('href');
        offsetTop=href==='#' ? 0 : $(href).offset().top-topMenuHeight;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    });
    $('.scrollico').click(function(e){
        let href=$(this).attr('href');
        offsetTop=href==='#' ? 0 : $(href).offset().top-topMenuHeight;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    })
    /* $('.about_con').smoove({moveY:'60%'});
    $('.skillcon').smoove({moveY:'60%'});
    $('.contact_con').smoove({moveY:'40%'}); */
    function checkSlide(){
        ani_item.forEach(item=>{
            const scrollPos = window.innerHeight + window.scrollY;
            if (scrollPos >= item.offsetTop) {
                item.classList.add('fade_up');
            }
        })
    };
    window.addEventListener('scroll', debounce(checkSlide));
    // document.querySelector('.scrolldown a').addEventListener('click', function(e){
    //     e.preventDefault();
    // }, false)

});