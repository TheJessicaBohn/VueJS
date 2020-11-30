# Vuex

- É um gerenciador de estados simples e poderoso que gerencia a arvore de componentes do aplicativo.
- Um componente App faz referencia a alguns componentes, como header, content, footer, e o content por sua vez faz referencia a um menu, sendo um pai referenciando um componente filho e um filho referenciando outro filho
- E como a aplicação pode crescer muito, ele vem auxiliar o seu gerenciamento, pois vários componentes podem entrar no processo de comunicação, em uma atividade onde envolveria apenas dois componentes
- O seu principio básico é a comunicação entre dois componentes, e assim existe um estado centralizado fora dos componente e é voltado para o gerenciamento de estado
- Conceitos : 
    - state -> Objeto que representa um estado compartilhado; 
    - Getters -> funções que lêem o estado e eventualmente fazer algum tipo de processamento;
    - Mutations ->(setters) funções responsáveis por alterar o estado global da aplicação (estado compartilhado);
    - Actions -> 
        - commit: quando vai de fato efetivar uma alteração 
        - dispatch: disparar um action.
## Instalação
- `npm install --save vuex`
 