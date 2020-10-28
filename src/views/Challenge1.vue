<template>
  <main id="challenge1">
    <header>
      <h2>Calculator.</h2>
    </header>
    <div class="promo">You can add values, check result and clear it. Have fun!&#128517;</div>
    <div v-if="showError" class="error">Sorry, something went wrong. Please enter different numbers.
      <button class="btn_main_red" v-on:click="errorShowChange">Close</button>
    </div>
    <form id="calculatorForm" action="#" @submit.prevent="handleAddition">
      <div>
        <label>
          <input
              class="input"
              required
              v-model="state.firstOperand"
              :pattern="inputData.pattern"
              :title="inputData.title"
              :placeholder="inputData.placeholder"
          />
        </label>
        <label>
          <input
              class="input"
              required
              v-model="state.secondOperand"
              :pattern="inputData.pattern"
              :title="inputData.title"
              :placeholder="inputData.placeholder"
          />
        </label>
      </div>
      <button type="submit" class="btn_main">Addition</button>
      <button type="button" class="btn_main_red" v-on:click="handleReset">Reset</button>
    </form>
    <div class="result">Result is: {{ state.result }}</div>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
type CalculatorType = {
  firstOperand: null | number;
  secondOperand: null | number;
  result: number;
}

@Component({name: 'Challenge1'})
export default class Challenge1 extends Vue {
  state: CalculatorType = {
    firstOperand: null,
    secondOperand: null,
    result: 0
  }
  inputData = {
    placeholder: "Enter a number...",
    pattern: "^[+]?\\d+([.]\\d{0,8})?$",
    title: "Only positive numbers allowed, with 0.00000000 format",
  }
  showError = false

  handleAddition() {
    this.state.result += Number(this.state.firstOperand) + Number(this.state.secondOperand);
    if(Number.isNaN(this.state.result)) {
      this.showError = true;
    }
    this.resetOperands();
  }

  handleReset(): void {
    this.resetOperands();
    this.state.result = 0;
  }

  errorShowChange () {
    this.showError = false;
  }

  private resetOperands(): void {
    this.state.firstOperand = null;
    this.state.secondOperand = null;
  }
}
</script>

<style lang="scss">
  @import "../sass/utils";

  .promo {
    padding: 0 1rem 2rem;
    font-size: 1.2rem;
  }

  #calculatorForm {
    .input, .btn_main {
      margin: .4rem;
    }
  }

  .result {
    background: #42b983;
    padding: 1rem;
    width: 20%;
    margin: auto;
  }

  .error {
    width: 60%;
    margin: 1rem auto;
    padding: 1rem;
    background: $red-color-secondary-transparent;
  }
</style>