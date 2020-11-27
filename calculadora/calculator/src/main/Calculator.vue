<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button lable="AC" triple @on-calc-button-click="clearMemory" />
    <Button lable="/" operation @on-calc-button-click="SetOperation" />
    <Button lable="7" @on-calc-button-click="addDigit" />
    <Button lable="8" @on-calc-button-click="addDigit" />
    <Button lable="9" @on-calc-button-click="addDigit" />
    <Button lable="*" operation @on-calc-button-click="SetOperation" />
    <Button lable="4" @on-calc-button-click="addDigit" />
    <Button lable="5" @on-calc-button-click="addDigit" />
    <Button lable="6" @on-calc-button-click="addDigit" />
    <Button lable="-" operation @on-calc-button-click="SetOperation" />
    <Button lable="1" @on-calc-button-click="addDigit" />
    <Button lable="2" @on-calc-button-click="addDigit" />
    <Button lable="3" @on-calc-button-click="addDigit" />
    <Button lable="+" operation @on-calc-button-click="SetOperation" />
    <Button lable="0" double @on-calc-button-click="addDigit" />
    <Button lable="." @on-calc-button-click="addDigit" />
    <Button lable="=" operation @on-calc-button-click="SetOperation" />
  </div>
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    data: function () {
        return {
            displayValue: '0',
            clearDisplay:false,
            operation:null,
            values:[0,0],
            current:0,
         }
    },
    components:{Button, Display},
    methods:{
        clearMemory(){
            Object.assign(this.$data, this.$options.data()) //objeto volta para o estado inicialx'x'
            // console.log('Limpar Memoria')
        },
        SetOperation(operation){
            if (this.current === 0){
                    this.operation = operation
                    this.current = 1
                    this.clearDisplay = true
            }else{
                const equals = operation === '='
                const currentOperation = this.operation

                try{
                  this.values[0] = eval(
                      `${this.values[0]} ${currentOperation} ${this.values[1]}`
                      )  
                }catch (e){
                    this.$emit('onError',e)
                }

                this.values[1] = 0
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0:1
                this.clearDisplay = !equals
            }
            //  console.log('Operação' + operation)
        },
        addDigit(n){
            if (n === '.'&& this.displayValue.includes('.')){
                    return
            } 

            const clearDisplay = this.displayValue === '0'
             || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false
             //Alternativa 1
            this.values[this.current] = displayValue
            
            //Alternativa 2
            // if (n !== '.'){
            //     const i = this.current
            //     const newValue = parseFloat (displayValue);
            //     this.values[i] = newValue
            // }
            //  console.log('Digto' + n)
        },
    },
}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>