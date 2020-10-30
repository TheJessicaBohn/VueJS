# projeto-02-tarefas

## Configurando o projeto
- `npm i` para instalar as dependncias 
- `npm run serve` para execurar o projeto
- `npm audit fix` para corrigir as vunerabilidades

## pastas/código
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/projeto-02-tarefas/src/App.vue)** contem o style da pagina, a lem de ser o pai dos outros componentes
- **[TaskGrid.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/projeto-02-tarefas/src/components/TaskGrid.vue)** componente que contem a lista de tarefas, além de ser o componente pai de Task
- **[Task.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/projeto-02-tarefas/src/components/Task.vue)** componente que representa cada taref individualmente
- **[NewTask.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/projeto-02-tarefas/src/components/NewTask.vue)** componente input para adicionar novas tarefas
- **[TaskProgress.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/projeto-02-tarefas/src/components/TaskProgress.vue)**
## Dicionário
- `cursor: pointer;` faz o cursor ser uma mãozinha
- `user-select: none;` não deixa o usuário selecionar o texto
- `const reallyNew = this.tasks.filter(sameName).length == 0` se fazendo o filtro o tamanho do array o valor de uma nova palavra = 0, significa que o valor é realmente novo 
- `this.tasks.splice(i,1)` o splice esclui pelo indice e `i` e `1` é a quantidade de quantos vai excluir
## Observações
- Quando trabalhamos com eventos o ideal é utilizar kebab-case e não camelCase, pois ele pode gerar erro.`taskDeleted`teve de ser substituido por `task-deleted` 