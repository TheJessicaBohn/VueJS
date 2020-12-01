# Vuex

- É um gerenciador de estados simples e poderoso que gerencia a arvore de componentes do aplicativo.
- Um componente App faz referencia a alguns componentes, como header, content, footer, e o content por sua vez faz referencia a um menu, sendo um pai referenciando um componente filho e um filho referenciando outro filho
- E como a aplicação pode crescer muito, ele vem auxiliar o seu gerenciamento, pois vários componentes podem entrar no processo de comunicação, em uma atividade onde envolveria apenas dois componentes
- O seu principio básico é a comunicação entre dois componentes, e assim existe um estado centralizado fora dos componente e é voltado para o gerenciamento de estado
- Conceitos : 
    - state -> Objeto que representa um estado compartilhado; 
    - Getters -> funções que lêem o estado e eventualmente fazer algum tipo de processamento;
    - Mutations ->(setters) funções responsáveis por alterar o estado global da aplicação (estado compartilhado);
    - Actions -> Intermediario entre um nó neto/filho e uma mutatio, fazendo o commit, pelo dispatch disparado pelo componente, sendo assim uma diferença apenas uma situação de organização(Actions: regras, Mutations: efetivação da modificação), pois a mutation apenas faz o commit para alterar o estado, e a action é um local que se pode colocar regras ( mais voltadas para o negócio da aplicação) para as mudanças do estado central. Além disso apesar das Mutations trabalharemd e forma assincrona, só deve-se colocar código sincrono, já nas Actions pode-se colocar regras assincronas como por exemplo Ajax.
        - commit: quando vai de fato efetivar uma alteração 
        - dispatch: disparar um action.
## Instalação
- `npm install --save vuex`
 