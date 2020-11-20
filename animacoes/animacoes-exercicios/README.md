# animacoes-exercicios

## Códigos
- **[App.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/animacoes/animacoes-exercicios/src/App.vue)** trata os efeitos das mensagens, e o efeito da div
- **[AlertaAdvertencia.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/animacoes/animacoes-exercicios/src/AlertaAdvertencia.vue)**
- **[AlertaInfo.vue](https://github.com/TheJessicaBohn/VueJS/tree/master/animacoes/animacoes-exercicios/src/AlertaInfo.vue)**
##Transições
`<transitions>`
**area vazia -> animação = div -> animação = area vazia**
- animações possui a utilização do bootstrap vue que pode ser encotrada em VueJS\animacoes\animacoes-exercicios\src\plugins
- É possivel fazer as transições por css e java script`<transition>`.Exemplo:
    - Quando se inicia a animação   `*-enter `\
	- Durante o processo de transição `*-enter-active `\  :arrow_right:**Elemento**
	- Destino da animação`*-enter-to `\
	
	- Estado inicial, saída`*-leave `\
	- Durante o processo de transição, saída`*-leave-active `\**Elemento**:arrow_right:
	- Estado final, saída`*-leave-to `\
- A pricipio os elementos ficam escondidos e no final também
- `@keyframes slide-in/slide-out` muda a posição nos eixos XY, e alem disso existe as classes enter e leave para o slide
- Quando utilizadas duas ou mais animações é importante tomar cuidado com a diferença de tempo de cada pois uma pode interferir no desempenho da outra
- Então o type vai evitar que esse tipo de conflito ocorra `type="animation"`, pois ele define qual transição conduz o elemento
- Em index.html é usada a cdn do animate css para a que possam ser modificas as transitions de forma personalizada

##Transições: Gatilhos JS
- Transiçõesapenas com javascript
	- `before-enter` antes entrar
	- `enter` entrar
	- `after-enter` depois de entrar
	- `enter-cancelled` cancelada

	:arrow_right:**Elemento**:arrow_right:

	- `before-leave` antes sair
	- `leave` sair
	- `after-leave` depois de sair
	- `leave-cancelled` cancelada

`<transitions-group>`
- A tag do `<transitions>` não gera nenhuma tag no html final, diferente da tag`<transitions-group>` que gera uma tag `<span>`





## Dicionario
-`appear` faz com que no moneto em que o refresh é dado a transição seja acatada
- `mode="out-in"` primeiro o elemento sai pra depois o outro entrar, e pode ser usado ao contrário
-`:css="false"` desativa qualquer influncia do css 

