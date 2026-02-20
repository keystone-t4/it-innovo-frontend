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
      label: 'Завершено',
      data: [40, 20, 12],
      backgroundColor: '#b9e093'
    },
    {
      label: 'План',
      data: [0, 0, 4],
      backgroundColor: '#95b7de'
    }
  ]
}))

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Месяцы'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Количество заявок'
      },
      beginAtZero: true
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