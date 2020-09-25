new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		perigo: true,
		classe3: '',
		classe4: ''


	},
	methods: {
		iniciarEfeito() {
			setInterval(() =>{
				this.classe1 = this.classe1 == 'destaque'
					? 'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {

		}
	}
})
