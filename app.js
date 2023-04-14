$(document).ready(function(){
   
    $('#in').change(function(){
        var input =$(this).val();
        $('ul').append(' <li id=><strong >'+input+'</strong><i class="fa fa-check" ></i> <i class="fa fa-trash-o"></i> <i class="fa fa-pencil-square-o" onclick="cambiaContenuto()"> </i></li>');
        $(this).val('');
    });

    $('ul').on('click','.fa-trash-o',function(){
        $(this).parent('li').fadeOut(200);

    });

    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked');

    });

    
    $('ul').on('click','.fa-pencil-square-o',function(){
        var nuovoContenuto = prompt("Inserisci il nuovo contenuto del paragrafo:");
        $(this).parent('li').replaceWith(' <li><strong >'+nuovoContenuto+'</strong><i class="fa fa-check" ></i> <i class="fa fa-trash-o"></i> <i class="fa fa-pencil-square-o" onclick="cambiaContenuto()"> </i></li>');   
        $(this).val('');
      });

   /* $("button").mouseon(function() {
        $(this).toggleClass('colored');

    });*/
    

    $('.all').click(function(){
    $('li').hide(500);
    });
});
