new Vue ({
    el: '#desafio',
    data: {
        nome: 'Jonathan Pablo',
        nome2: ' ',
        idade: 24,
        KisukeUraharaImg: 'https://static.wikia.nocookie.net/liberproeliis/images/8/89/Dfa76fa2164afac77d2217d4b90d2f12.png/revision/latest?cb=20190913214433&path-prefix=pt-br'
    },
    methods: {
        idadeX3(){
            return this.idade * 3
        },

        funcNumRandom(){
            return Math.random()
        },

        // alterarNome(event) {
        //     this.nome2 = event.target.value
        // }

    }
})