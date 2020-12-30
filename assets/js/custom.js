$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() > 60){
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
    })

    $('.home').click(function(e){
        e.preventDefault()
        $('.home').addClass('active');
        $('.about').removeClass('active');
        $('.prosedur').removeClass('active');
        $('.contact').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 500)
    })

    $('.about').click(function(e){
        e.preventDefault()
        $('.home').removeClass('active');
        $('.about').addClass('active');
        $('.prosedur').removeClass('active');
        $('.contact').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#about').offset().top - 150
        }, 500)
    })

    $('.prosedur').click(function(e){
        e.preventDefault()
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.prosedur').addClass('active');
        $('.contact').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#prosedur').offset().top - 150
        }, 500)
    })

    $('.contact').click(function(e){
        e.preventDefault()
        $('.home').removeClass('active');
        $('.about').removeClass('active');
        $('.prosedur').removeClass('active');
        $('.contact').addClass('active');
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - 150
        }, 500)
    })

    $('#login').submit(function(e){
        e.preventDefault();
        window.location.assign('home.html');
    })

    $('.logout').click(function(){
        swal.fire({
            title: 'Logout?',
            icon: 'question',
            text: 'Anda ingin keluar?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if(result.isConfirmed){
                window.location.assign('index.html');
            }
        })
    })

})