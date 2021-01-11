


var navbar = document.getElementById("navbar");


var header = navbar.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset > header) {
        navbar.classList.add("header-sticky");
      }
    
      else {
        navbar.classList.remove("header-sticky");
      }
};

$(document).ready(function(){
    $('.platorm-heading').waypoint(function(direction){
        $('.hex-logo-animation').addClass('animate__animated animate__bounce')
    })
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {    
    if(isScrolledIntoView($('#hex-icon')))
    {
        $('.hexagon').addClass('animate__animated animate__flipInY')
    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#events')))
    {
        $('.event-summary-l').addClass('animate__animated animate__slideInLeft')
        $('.event-summary-r').addClass('animate__animated animate__slideInRight')
        $('.event-summary-btn').addClass('animate__animated animate__fadeIn')
    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#tabs-prof')))
    {
        $('.professor').addClass('animate__animated animate__zoomIn')

    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#senior-exp')))
    {
        $('.senior-exp').addClass('animate__animated animate__fadeIn')

    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#resource-card')))
    {
        $('.resource-card').addClass('animate__animated animate__zoomIn')

    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#faq')))
    {
        $('.faq').addClass('animate__animated animate__slideInLeft')
        $('.drop-question-sec').addClass('animate__animated animate__fadeIn')

    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#contributer')))
    {
        $('.contributer').addClass('animate__animated animate__zoomIn')

    }    
});

$(window).scroll(function() {    
    if(isScrolledIntoView($('#submit')))
    {
        $('.contributer-text').addClass('animate__animated animate__slideInLeft')
        $('.contributer-form').addClass('animate__animated animate__slideInRight')

    }    
});