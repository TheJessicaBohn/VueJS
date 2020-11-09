# formulario-final

## Confiuração do projeto
- `npm i`
- `npm run serve`

### :scroll: Pastas/Códigos:
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/formulario-exercicios/src/App.vue)** cuida de E-mail, Senha, Idade, Mensagem, Caracteristicas do Problema, Qual produto? e Prioridade.
- **[Escolha.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/formulario-exercicios/src/components/Escolha.vue)** a escolha modificada dentro de **App.vue** não aceita `v-model` por padrão, então ela é modificada por `props` 
### Dicionário
- `.lazy` só atualiza o campo quando sai do mesmo, e não enquanto digita
- `.number` faz com que o valor recebido seja convertido em numerico, dede que seja um numero valido tanto int quanto float
- `.trim` tira os espaços em branco das pontas que iriam para o backend
- `value=""` não inicializa dentro de textarea, mas pode ser inicializado dentro da tag
- `white-space: pre;` preserva os espaços em branco
- quando se usa mais de um `type="radio"` e se passa o mesmo valor para todos, o mesmo entende que apenas um deve ser selecionado
-  `@click="$emit('input', !value)"` faz com que o Escolha.vue suporte o two-way data binding




