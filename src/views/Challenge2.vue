<template>
  <main id="challenge2">
    <h1>My Boxing Area</h1>
    <button type="button" class="btn_main" v-on:click="handleAddBoxClick">Add a box</button>
    <section id="rows">
      <div class="row" v-for="row in rows" :key="row.id">
        <div class="box" :style="box.color" v-for="box in row.boxes" :key="box.color"></div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

Component.registerHooks(['m'])
type Box = {
  color: string;
}

type Row = {
  id: number;
  boxes: Array<Box>;
};

@Component({name: 'Challenge2'})
export default class Challenge2 extends Vue {
  rows: Array<Row> = [];

  created() {
    this.addRow();
  }

  private static randomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `background-color: ${color}`;
  }

  private static getRandomID(): number {
    return Math.floor(Math.random() * 1000);
  }

  private addBox(row: Row): void {
    row.boxes.push({color: Challenge2.randomColor()});
  }

  private addRow(): void {
    this.rows.push({id: Challenge2.getRandomID(), boxes: []})
  }

  private getLastRow(): Row {
    return this.rows[this.rows.length - 1];
  }

  handleAddBoxClick(): void {
    let lastRow = this.getLastRow()
    if (lastRow.boxes.length === 8) {
      this.addRow();
      lastRow = this.getLastRow();
    }
    this.addBox(lastRow);
  }
}
</script>

<style lang="scss">
@import "../sass/utils";

#rows {
  .row {
    padding: 1rem 2rem;
    display: flex;

    .box {
      height: 100px;
      flex-grow: 1;
    }
  }
}

</style>