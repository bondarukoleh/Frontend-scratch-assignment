<template>
  <main id="challenge3">
    <h1>Translation</h1>
    <div class="promo">Translate the <b>English</b> days of the week to <b>Netherlands</b> ones and <b>vice versa.</b>
      Variety! &#128521;
    </div>
    <Error :clicked="hideWarn"
           :condition-to-show="translatorFormState.showWarn"
           :message="errorMessage"/>
    <section id="translator">
      <form id="translatorForm" action="#" @submit.prevent="handleTranslate">
        <label>
          <input
              class="input"
              required
              v-model="translatorFormState.wordToTranslate"
              :pattern="inputData.pattern"
              :title="inputData.title"
              :placeholder="inputData.placeholder"
          />
        </label>
        <label for="languageSelect">Translate to: </label>
        <select class="input" required name="language" id="languageSelect"
                v-model="translatorFormState.selectedLanguage">
          <option selected v-for="LangKey in languages" :key="LangKey" :value="LangKey">{{ LangKey }}</option>
        </select>
        <button class="btn_main" type="submit">GO</button>
        <div class="result">Result: {{ translatorFormState.result }}</div>
      </form>
    </section>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getLocalization, Locals} from "@/helpers/localization/localizationHelper"
import Error from "@/components/Error.vue";

type Translator = {
  showWarn: boolean;
  wordToTranslate: string;
  selectedLanguage: Locals;
  result: string;
}

@Component({
  name: "Challenge3",
  components: {Error}
})
export default class Challenge3 extends Vue {
  inputData = {
    placeholder: "Enter a day of week...",
    pattern: "[a-zA-Z]{3,}",
    title: "Only words allowed",
  }
  translatorFormState: Translator = {
    showWarn: false,
    wordToTranslate: '',
    selectedLanguage: Locals.english,
    result: ''
  }
  languages = Object.keys(Locals)
  errorMessage = "Sorry, we don't know this day of week 😕 Try another one 😊"

  hideWarn(): void {
    this.translatorFormState.showWarn = false;
  }

  handleTranslate(): void {
    const {wordToTranslate, selectedLanguage} = this.translatorFormState;
    const localization = getLocalization(Locals[selectedLanguage]);
    const translatedWord = localization[wordToTranslate.toLowerCase()];
    if (translatedWord) {
      this.translatorFormState.result = translatedWord
    } else {
      this.translatorFormState.showWarn = true;
      this.translatorFormState.result = ''
    }
    this.translatorFormState.wordToTranslate = ''
  }
}
</script>

<style lang="scss">
@import "../sass/utils";

#translatorForm {
  margin: auto;

  label, select, .btn_main {
    margin: .4rem;
  }
}
</style>
