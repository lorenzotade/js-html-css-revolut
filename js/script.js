$(function(){
  // creo un event listener sui div.drop-trigger per
  // captare l'hover del mouse
  $('.drop-trigger').mouseenter(function(){
    // quando avviene, una funzione anonima cerca
    // all'interno di tutti i .drop-trigger
    // un tag che abbia classe .dropdown E .active
    // contemporaneamente. Quando lo trova rimuove la
    // classe chiudendo il dropdown
    $('.drop-trigger').find('.dropdown.active').removeClass('active');
    // a questo punto cerca se nel .drop-trigger in oggetto
    // è presente un elemento classe .dropdown e ad esso
    // aggiunge la classe .active aprendo il dropdown
    $(this).find('.dropdown').addClass('active');
  });

  // creo un altro event listener sempre sui div.drop-trigger
  // per captare questa volta il click del mouse
  $('.drop-trigger').click(function(){
    // quando avviene, la funzione anonima cerca
    // all'interno dell'elemento in oggetto
    // l'elemento con classe .dropdown e ad esso
    // rimuove la classe active chiudendo il dropdown.
    // cliccando di nuovo sullo stesso drop-trigger
    // riaggiungo la classe active con il toggle.
    $(this).find('.dropdown').toggleClass('active');
  });

});