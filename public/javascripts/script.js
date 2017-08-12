$(document).ready(function(){
	
	$("#exibir-chat").click(function(){
		$("#conversa").show();
		$("#participantes").hide();
		ocultarNavbar();		
	});

	$("#exibir-participantes").click(function(){
		$("#participantes").show();
		$("#conversa").hide();
		ocultarNavbar();
	});

});

function ocultarNavbar(){
	$("#btn-navbar-toggle").attr("class", "navbar-toggle collapsed");
	$("#navbar-multiroom").attr("class", "navbar-collapse collapse");
	$("#btn-navbar-toggle").attr("aria-expanded","false");
	$("#navbar-multiroom").attr("aria-expanded","false");
}
