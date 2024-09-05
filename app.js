function pesquisar() {
    for (let dado of dados) {
        resultados += `
      <div class="item-resultado">
                <h2>
                  <a
                    href="${dado.link}"
                    target="_blank"
                    >${dado.titulo}
                    </a>
                </h2>
                <p class="descricao-meta">
                ${dado.descricao}
                
                </p>
              </div>
      `;
      }
      
      section.innerHTML = resultados
}

// console.log (dados);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = ""

// para cada dentro da lista de dados

