<template>
  <div v-if="conditionToShow" class="error">{{ message }}
    <button class="btn_main_red" v-on:click="clicked">Close</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class Error extends Vue {
  @Prop({required: true}) conditionToShow: boolean;
  @Prop({required: true}) message: string;
  @Prop({required: true}) clicked: Function;
}
</script>

<style lang="scss">
@import "../sass/utils";

.error {
  width: 60%;
  margin: 1rem auto;
  padding: 1rem;
  background: $red-color-secondary-transparent;
}
</style>