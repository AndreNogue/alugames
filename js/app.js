function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let img =  gameClicado.querySelector('.dashboard__item__img');
    let botao =  gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (img.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Deseja devolver o jogo "${nomeJogo.innerText}"?`)) {
            // Aqui você pode adicionar a lógica para devolver o jogo
            console.log(`Devolvendo o jogo: ${nomeJogo.innerText}`);
        }
        img.classList.remove('dashboard__item__img--rented');
        img.classList.add('dashboard__item__img');

        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
        botao.innerText = "Alugar";
    } else {
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerText = "Devolver";
    }
}