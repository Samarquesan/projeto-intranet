const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const usuario = document.getElementById('IdUsuario').value;
const email = document.getElementById('IdEmail').value;
const senha = document.getElementById('IdSenha').value;

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


function logar(){
    var login = document.getElementById('IdEmail').value;
    var senha = document.getElementById('IdSenha').value;

    if(login == "0110adm" && senha == "adm1001"){
        alert('Sucesso!');
        location.href = "home.html";
    }else{
        alert('Usuário ou senha incorretos!');
    }
}



const registros = [
    {
        nome: "Samuel Marques dos Santos",
        email: "samuel_simic@hotmail.com",
        senha: "sam123"
    }
];

//Crirar Registro (CREATE)
function cadastrar(usuario, email, senha){
   registros = {nome: nome, email: email, senha: senha};

    
}


//Ver registros (READ)
function verRegistros() {
    console.log(registros);
    return registros;
}




//Atualizar cadastros (UPDATE)
function atualizaCadastro(nome, novoEmail, novaSenha) {
    const user = registros.findIndex(user => user.nome == nome);

    if(novoValor){
        produtos[user].email = novoEmail;
    }
    if(novoEstoque){
        produtos[user].senha = novaSenha;
    }
};

//Excluir registros(DELETE)
function excluirCadastro(nome){
    const user = produtos.findIndex(user => user.nome == nome);
    registros.splice(user, 1);
}

cadastrar("Samuel Braga da Silva", "sam.sambragasil@gmail", "bragasil1212");
//atualizaCadastro("Samuel Braga da Silva", "sam.sambragasil@gmail", "braga111222")
//excluirCadastro("Samuel Braga da Silva");
verRegistros();