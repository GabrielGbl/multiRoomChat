const application = require('./config/server');

const server = application.listen(3000);

const io = require('socket.io').listen(server);

//Criar variaveis no objeto do servidor
application.set('io', io);

io.on('connection', function(socket){	

	socket.on('disconnect', function(){
		let msg="usuário desconectou!";
		socket.broadcast.emit('msgUsuarioDesconectou', {mensagem:msg});
	});

	socket.on('msgParaServidor', function(data){		
		//dialogo
		socket.emit('msgParaClientes', {nome: data.nome, mensagem: data.mensagem});
		socket.broadcast.emit('msgParaClientes', {nome: data.nome, mensagem: data.mensagem});
		
		//participantes
		if(parseInt(data.nome_atualizado_clientes) == 0){		
			socket.emit('novoParticipante', {nome: data.nome});
			socket.broadcast.emit('novoParticipante', {nome: data.nome});
		}
	});	

});

