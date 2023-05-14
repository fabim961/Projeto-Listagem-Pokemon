//Pega no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema")

//Pega no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");


//Identificar o clique do usuário no botão de troca de tema (gatilho)

botaoAlterarTema.addEventListener("click", () => {

    //Verificar se já tem a classe modo escuro. Contains retorna true ou false
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")
    body.classList.toggle("modo-escuro")

    if (modoEscuroAtivo) {

        //Remove a classe do body - modo escuro
        // body.classList.remove("modo-escuro");

        //Trocar a imagem do botão para sol
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")

    } else {

        //Adiciona a classe modo-escuro no body
        // body.classList.add("modo-escuro");

        //Trocar a imagem do botão para lua
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")

    }

});


