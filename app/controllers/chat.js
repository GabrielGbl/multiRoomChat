module.exports.iniciaChat = function(application, req, res){

	let form = req.body;
	
	req.assert('usu_nome','Usuário é obrigatório!').notEmpty();	
	let erros = req.validationErrors();

	if(erros){
		res.render('index', {validacao:erros});
		return;
	}
	
	application.get('io').emit('msgUsuarioNovo', {nome:form.usu_nome, mensagem: 'Acabou de entrar no chat'});

	res.render('chat',{dadosForm:form});
}