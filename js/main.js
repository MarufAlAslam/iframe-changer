$('.accordion-button').click(function(){
    $('.accordion-button').removeClass('active')
    $(this).toggleClass('active')
})

$('label.texture').click(function(){
    $('label.texture').removeClass('active')
    $(this).addClass('active')
})

$('.optionBtn').click(function(){
    $('.option__control').hide()
    $(this).parent().parent().children('.option__control').show()
})

if($(window).width()>=768){
    $('.menuBtn, label.texture').click(function(){
        $('.col-md-3').toggle()
        $('.col-md-9').toggleClass('wider')
    })
    
    $('label.texture').click(function(){
        $('.col-md-3').hide()
        $('.col-md-9').addClass('wider')
    
        basePrice = 100
        val = Number($('#amount').html())
        inc = Number($(this).children('.text-white').children('.inc').html())
        $('#amount').html(basePrice+inc)
    })
}

else{
    $('.menuBtn, label.texture').click(function(){
        $('.col-md-3').toggle()
        $('.col-md-9').toggleClass('wider')
    })
    $('label.texture').click(function(){
        basePrice = 100
        val = Number($('#amount').html())
        inc = Number($(this).children('.text-white').children('.inc').html())
        $('#amount').html(basePrice+inc)
    })
}




$('.btn-add').click(function(e){
    e.preventDefault()
    basePrice = 100
    val = Number($('#amount').html())
    inc = Number($(this).parent().children('.text-white').children('.inc').html())
    $('#amount').html(basePrice+inc)
    

})





$('.optionBtn').click(function(){
    $('.option__control').removeClass('flx')
    $(this).parent().parent().children('.option__control').addClass('flx')
})


