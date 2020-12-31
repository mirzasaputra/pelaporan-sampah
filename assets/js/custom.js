$(document).ready(function(){

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

    $(window).on('load', function(){
        $('.pre-loader').hide();
    })

})