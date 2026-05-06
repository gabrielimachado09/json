function cofs() {
    fetch('dados.json')
    .then(Response => Response.json())
    .then(dadinho => {
        document.getElementById('destino').innerHTML = 
        `<div class="card">
            <img src="img/`+dadinho.imagen+`"alt="">
            <h3>`+dadinho.nome+`</h3>
            <p>`+dadinho.descricao+`</p>
               <a href="`+dadinho.endereco+`">
            <button type="button">Comprar</button>
            </a>
        </div>`;
    })
}