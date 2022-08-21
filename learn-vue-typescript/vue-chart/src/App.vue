<template>
  <div><canvas id="myChart"></canvas></div>
</template>

<script lang="ts">
import { ChartConfiguration } from "chart.js";
import Vue from "vue";

export default Vue.extend({
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "bar",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Chart Title",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        fill: true,
      },
    };

    const canvasElement = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement;
    const ctx = canvasElement.getContext("2d");

    if (!ctx) return;

    const myChart = new this.$_Chart(ctx, config as ChartConfiguration);
  },
});
</script>

<style scoped></style>
