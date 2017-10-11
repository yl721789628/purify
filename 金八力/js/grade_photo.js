$('.grade_list li').live('mouseenter',function(){
    $(this).find('i').show();
});
$('.grade_list li').live('mouseleave',function(){
    $(this).find('i').hide();
});
$('.grade_list li i').live('click',function(){
    $(this).parent().remove();
});
scrollY($('.drag'),$('.box'),$('.photo_box'),$('.grade_list'))