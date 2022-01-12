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


$('.menuBtn, label.texture').click(function(){
    $('.col-md-3').toggle()
    $('.col-md-9').toggleClass('wider')
})

$('label.texture').click(function(){
    $('.col-md-3').hide()
    $('.col-md-9').addClass('wider')
})