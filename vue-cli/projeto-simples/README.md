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
	- para criar um novo projeto `vue create projeto-simples` e escolha a opção padrão Default(babel, eslint) e aguarde a instalação das dependências

- Adicionar plugins: `vue add @vue/nome-plugin`
- 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
