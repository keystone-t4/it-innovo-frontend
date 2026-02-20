<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type ChartData
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
)

const chartData = computed<ChartData<'bar'>>(() => ({
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Sales',
      data: [40, 20, 12],
      backgroundColor: '#42A5F5'
    }
  ]
}))

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Monthly Data'
    }
  }
}
</script>

<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<style scoped lang="scss">

</style>