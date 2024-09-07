function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<h2> Nada foi encontrado </h2>";
    return;
  }
  
  campoPesquisa = campoPesquisa.toLowerCase();

  let = resultados = "";
  let titulo = "";
  let descricao = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    titulo = dado.descricao.toLowerCase()
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa)
    ) {
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

    if (!resultados) {
      resultados = "<h2>Nenhum campeão encontrado</h2>"
  }

    section.innerHTML = resultados;
  }
}
