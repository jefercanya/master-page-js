/* $(document).ready(function() {
	$('.load-page').click(function(e) {
	  e.preventDefault();
	  var page = $(this).data('page');
	  $('#content').load(page);
	});
  }); */


/* 
  $(document).ready(function() {
	$('.load-page').click(function(e) {
	  e.preventDefault();
	  var page = $(this).data('page');
	  $('#content').load(page);
	  document.title = $(this).text() + ' - Página principal';
	});
  }); */
  

  $(document).ready(function() {
	// Cargar página secundaria por defecto
	$('#content').load('principal.html');
  
	$('.load-page').click(function(e) {
	  e.preventDefault();
	  var page = $(this).data('page');
	  $('#content').load(page, function() {
		var title = $(this).find('title').text();
		$('head title').text(title);
	  });
	});
  });


  clickPrueba = () =>{
	alert("Ejecucion funcion")
  }