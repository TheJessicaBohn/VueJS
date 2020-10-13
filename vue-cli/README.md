# projeto-simples
## CLI
- **O CLI já vem com diversos vantagens:**<br>
	- Ambiente de desenvolvimentos e build já configurados
	- Todos os componentes são compilados em um unico arquivo
	- Pré- processamnto, entre outros
	- A parte do compilador é removida tendo assim uma redução de 30% do tamanho do pacote
### Recursos:
- Instalação do CLI:
	- Antes da instalação do do cli entre no Windows Power Shell e verifique como estão as politicas de execução com o comando `Get-ExecutionPolicy` e se retornar `Restricted`
	- Para obter todas as políticas de execução que afetam a sessão atual e exibi-las em ordem de precedência `Get-ExecutionPolicy -List`
	- para mudar digite Set-ExecutionPolicy Unrestricted, e digitar [A] ou [S] e pode seguir para a instalação
	- dentro da pasta do projeto pelo terminal de o comando `mkdir vue-cli`
	- Para entrar na pasta digite `cd vue-cli`
	- e digite npm install -g @vue/cli para instalar o cli
	- para criar um novo projeto `vue create nome-do-projeto` e escolha a opção padrão Default(babel, eslint) e aguarde a instalação das dependências
	- entre na pasta `cd nome-do-projeto`
	- para iniciar o processo de building `npm run serve`
- Após a instalação pode-se verificar que o .js só roda em memoria 	
	- Então ` npm run build` gera a pasta dist, compila e mandar para a produção, lembrando que os arquivos gerados no npm não vão para o github, por conta do git ignore então é necessário sempre executar novamente os comandos caso trocar de maquina
- Adicionar plugins: `vue add @vue/nome-plugin`
- Configuração do projeto: `npm install`
- Compilar e fazer o monitoramento sem precisar dar o refresh`npm run serve`


### Lints and fixes files
`npm run lint`

### pastas/códigos
#### vue-cli/projeto-simples
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/vue-cli/projeto-simples/App.vue)** é um arquivo que contém o HTML, Java Script, e CSS contidos nele, gerado na criação do projeto
#### vue-cli/projeto-plugins
**Nesse caso o projeto foi criado de modo manual e selecionados os recursos ( Babel, Progressive Web App (PWA) Support, Router, Vuex, CSS Pre-processors, Linter / Formatter) Além do modo history, além disso foi criado um presset chamado curso-vue, que criando um novo projeto ele é uma opção a ser escolhido
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/blob/master/vue-cli/projeto-plugins/App.vue)**
#### Pluings
- A estrutura de plugins oficiais segue a formula: @vue/cli-plugins-algumacoisa, segue alguns padrões oficiais:
	- @vue/cli-plugins-babel;
	- @vue/cli-plugins-eslint;
	- @vue/cli-plugins-pwa;
- Para adicionar um novo de o seguinte comando :
	-`vue add electron-builder`, no caso o electron é para a aplicação ser desktop
	- Para executar `npm run electron: serve`
	
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
