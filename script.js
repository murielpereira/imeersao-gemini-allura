// console.log(dados[1].titulo);

function pesquisar() {
    // Essa função é responsável por realizar a pesquisa e atualizar a interface com os resultados.

    let section = document.getElementById("resultados-pesquisa");
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena-o na variável 'section'.
    // Esse elemento provavelmente é uma seção da página onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhuma pesquisa realizada</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // Essa string será preenchida com o HTML que será inserido na seção.

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += 
            `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Instagram</a>
            </div>
            `
        }

        
    }

    if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
        // Inicia um loop 'for...of' para percorrer cada item (dado) dentro do array 'dados'.
        // A cada iteração, a variável 'dado' receberá o valor do próximo item do array.
        // Dentro do loop, é construída uma string de HTML para cada resultado da pesquisa.
        // A string é concatenada à variável 'resultados' usando template literals (``).
        // As propriedades 'titulo', 'descricao' e 'link' do objeto 'dado' são inseridas no HTML usando interpolação de strings.
        
    section.innerHTML = resultados;
    // Após o loop, o conteúdo HTML da variável 'resultados' é atribuído ao atributo 'innerHTML' do elemento 'section'.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados da pesquisa.
}
