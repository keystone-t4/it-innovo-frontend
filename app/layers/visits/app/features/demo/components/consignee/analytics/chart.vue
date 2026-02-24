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
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore";
import {sortByDateTime} from "~/layers/visits/app/features/demo/utils/sort";

const demoDbStore = useDemoDbStore()

const notDeclineRequests = computed(() => {
  return demoDbStore.requests.filter((request) => request.status === 'active' || request.status === 'accepted')
})

const requestsByDataKey = computed(() => {
  return sortByDateTime(notDeclineRequests.value, 'unload_date', 'unload_start_time', false)
})

const last14DaysStats = computed(() => {
  const result: Record<string, [number, number]> = {}
  const seenDates = new Set<string>()

  for (const r of requestsByDataKey.value) {
    const date = r.unload_date

    // если уже 14 дат и эта новая — пропускаем
    if (!seenDates.has(date) && seenDates.size >= 14) {
      continue
    }

    if (!result[date]) {
      result[date] = [0, 0] // [accepted, active]
      seenDates.add(date)
    }

    if (r.status === 'accepted') {
      result[date][0]++
    }

    if (r.status === 'active') {
      result[date][1]++
    }
  }

  return result
})

const labelsArray = Object.keys(last14DaysStats.value)
const acceptedRequestArray = Object.values(last14DaysStats.value).map(d => d[0])
const activeRequestArray = Object.values(last14DaysStats.value).map(d => d[1])

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
)

const chartData = computed<ChartData<'bar'>>(() => ({
  labels: labelsArray,
  datasets: [
    {
      label: 'Завершено',
      data: acceptedRequestArray,
      backgroundColor: '#b9e093'
    },
    {
      label: 'План',
      data: activeRequestArray,
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
        text: 'Кол-во заявок'
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
#my-chart-id {
  max-width: 100%;
  max-height: 100%;
}
</style>