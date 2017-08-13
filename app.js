const application = require('./config/server');

var porta = process.env.PORT;

application.listen(porta);
console.log(porta);
const server = application.listen(porta);

const io = require('socket.io').listen(server);

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

