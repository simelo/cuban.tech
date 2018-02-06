  //Para cambiar la clase del navbar

  $(document).on('scroll', function() {
    if ($(document).scrollTop() > 400) {
      $('body nav').removeClass('navbar-default');
      $('body nav').addClass('navbar-inverse');
    } else {
      $('body nav').addClass('navbar-default');
      $('body nav').removeClass('navbar-inverse');

    }

  });

// Para subir el scroll

$(function(){
 $(".scroll").on("click", function(){
  var posicion = $("#inicio").offset().top;
  $("html, body").animate({
    scrollTop: posicion
  }, 2000); 
});
 $(document).on("scroll", function(){
  var desplazamientoActual = $(document).scrollTop();
  var controlArriba = $(".scroll");
  console.log("Estoy en " , desplazamientoActual); 
  if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
    controlArriba.fadeIn(500);
  }
  if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
    controlArriba.fadeOut(500);
  }
});
});


