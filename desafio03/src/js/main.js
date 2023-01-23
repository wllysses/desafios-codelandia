const cards = [
    {
        color: '#ff6363',
        title: 'Título do card',
        text: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Vestibulum in neque et nisl.'
    },
    {
        color: '#63ECFF',
        title: 'Título do card',
        text: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Vestibulum in neque et nisl.'
    },
    {
        color: '#F363FF',
        title: 'Título do card',
        text: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Vestibulum in neque et nisl.'
    },
    {
        color: '#63FF73',
        title: 'Título do card',
        text: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Vestibulum in neque et nisl.'
    },
    {
        color: '#FFDD63',
        title: 'Título do card',
        text: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Vestibulum in neque et nisl.'
    },
    {
        color: '#6663FF',
        title: 'Título do card',
        text: 'Lorem ipsum dolor sit amet, consectetur adpiscing elit. Vestibulum in neque et nisl.'
    }
]


function createCards() {
    const cardsList = document.querySelector('.cards-list')

    cards.forEach((card) => {
        cardsList.innerHTML += `
            <div class="card-item">
                <div class="figure" style="background-color: ${card.color};"></div>
                <div class="card-data">
                    <h3 class="title">${card.title}</h3>
                    <p class="subtitle text-muted">
                        ${card.text}
                    </p>
                </div>
            </div>
    `
    })
}

createCards()