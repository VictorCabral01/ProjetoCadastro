

function logar(){



    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    if(usuario == '' && senha == ''){
        alert('logar')
        location.href = "home.html"
    } else {
        alert('erro')
    }

}


function mudarParaCadastro(){
    location.href = "cadastro.html"
}


const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', receberNovosUsuarios)

function receberNovosUsuarios (e){

    e.preventDefault()


    const usuario = document.querySelector('#usuario')
    const senha = document.querySelector('#senha')

usuario.value
senha.value

console.log(usuario.value, senha.value)
}





