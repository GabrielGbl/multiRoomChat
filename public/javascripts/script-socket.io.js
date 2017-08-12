const socket = io('http://localhost:3000');


$('#enviar-mensagem').click(function(){
	socket.emit('msgParaServidor',{
		nome:$('#nome').val(),
		mensagem:$('#mensagem').val(),
		nome_atualizado_clientes: $('#nome_atualizado_clientes').val()
	});

	$('#mensagem').val("");
	$('#nome_atualizado_clientes').val(1);
});

//NOVA MENSAGEM NO CHAT
//
socket.on('msgParaClientes', function(data){
	let html = '';
	html+='<section class="dialogo">';
			html+='<h4>' + data.nome + '</h4>';
			html+='<p>' + data.mensagem + '</p>';
	html+='</section>';
	$('#conversa').append(html);

	window.scrollTo(0, document.body.scrollHeight);
});

//USUARIO NOVO

socket.on('msgUsuarioNovo', function(data){
	let conversa = ''; 

	conversa+= '<section class="alert alert-success">';
		conversa+= '<p><h4>' + data.nome + ' </h4> - ' + data.mensagem + '</p>';		
	conversa+= '</section>';

	$('#conversa').append(conversa);

	window.scrollTo(0, document.body.scrollHeight);	
});


//PARTICIPANTE NOVO

socket.on('novoParticipante', function(data){
	let participante = '';

	participante+= '<section class="participante">';
		participante+= '<img src="images/ico_usuario.png">';
		participante+= '<h4>' + data.nome + '</h4>';
	participante+= '</section>';

	$('#participantes').append(participante);
});

//USUARIO DESCONECTOU

socket.on('msgUsuarioDesconectou', function(data){
	let usuario = ''; 

	usuario+= '<section class="alert alert-danger">';
	usuario+= '<h4>' + data.mensagem + '</h4>';
	usuario+= '</section>';

	$('#conversa').append(usuario);

	window.scrollTo(0, document.body.scrollHeight);	
});




