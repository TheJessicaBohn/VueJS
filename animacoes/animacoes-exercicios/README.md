# animacoes-exercicios

- animações possui a utilização do bootstrap vue que pode ser encotrada em VueJS\animacoes\animacoes-exercicios\src\plugins
- É possivel fazer as transições por css e java script`<transition>`.Exemplo:
    - Quando se inicia a animação   `*-enter `\
	- Durante o processo de transição `*-enter-active `\  :arrow_right:**Elemento**
	- Destino da animação`*-enter-to `\
	
	- Estado inicial, saída`*-leave `\
	- Durante o processo de transição, saída`*-leave-active `\:arrow_left: **Elemento**:
	- Estado final, saída`*-leave-to `\
- A pricipio os elementos ficam escondidos e no final também
- `@keyframes slide-in/slide-out` muda a posição nos eixos XY, e alem disso existe as classes enter e leave para o slide
- Quando utilizadas duas ou mais animações é importante tomar cuidado com a diferença de tempo de cada pois uma pode interferir no desempenho da outra
- Então o type vai evitar que esse tipo de conflito ocorra `type="animation"`, pois ele define qual transição conduz o elemento

em index.htm é usada a cdn do animate css para a que possam ser modificas as transitions de forma personalizada
wrap

area vazia -> animação = div -> animação = area vazia

## Dicionario
-`appear` faz com que no moneto em que o refresh é dado a transição seja acatada
- `mode="out-in"` primeiro o elemento sai pra depois o outro entrar, e pode ser usado ao contrário

