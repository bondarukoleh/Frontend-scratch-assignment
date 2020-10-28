<template>
  <main id="challenge1">
    <h1>Calculator</h1>
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
        <span>+</span>
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
      <span>=</span>
      <div class="result">{{ state.result }}</div>
      <button type="submit" class="btn_main">Addition</button>
      <button type="button" class="btn_main_red" v-on:click="handleReset">Reset</button>
    </form>
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

  private resetOperands(): void {
    this.state.firstOperand = null;
    this.state.secondOperand = null;
  }

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
}
</script>

<style lang="scss">
  @import "../sass/utils";

  #calculatorForm {
    .input, .btn_main {
      margin: .6rem;
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