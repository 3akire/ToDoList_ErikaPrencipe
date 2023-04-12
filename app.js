$(document).ready(function(){
    $('#input').change(function(){
        var input =$(this).val();
        $('ul').append(' <div class="list"><li>'+input+'<button class="done">Done</button><button class="canc" >Clear</button></li></div>');
        $(this).val('');
    });

    $('ul').on('click','.canc',function(){
        $(this).parent('li').fadeOut(200);

    });

    $('ul').on('click','.done',function(){
        $(this).parent('li').toggleClass('checked');

    });

    $("button").click(function(){
    $('li').hide(500);
    });

});