<script setup>
import { ref, watch, computed, reactive } from 'vue'

const findCity = ref('Karaganda')
const booleanWarning = ref(true)
const messageError = ref()

const _temp = ref('0')
const _feelsLike = ref('0')
const _humidity = ref('0')
const _wind = ref('0')

const getApiWet = async () => {
  try {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${findCity.value}&units=metric&appid=3b4a6966753788d1c453fc8fd87d9d80`

    let data = await fetch(URL)
    let result = await data.json()

    let { temp, feels_like, humidity } = await result.main
    let { speed } = result.wind

    _temp.value = temp
    _feelsLike.value = feels_like
    _humidity.value = humidity
    _wind.value = speed

    booleanWarning.value = true
  } catch (error) {
    booleanWarning.value = false
    messageError.value = 'Error, enter the correct name of the city'
  }
}

let bool = ref(false)

setTimeout(() => {
  bool.value = true
}, 1000)
</script>
<template>
  <main class="weather">
    <div class="weather__search-section">
      <input v-model="findCity" type="text" />
      <button @click="getApiWet()" class="weather__button">Find</button>
    </div>
    <div v-if="!booleanWarning" class="weather__text-group">
      <div class="weather__text" style="color: red">
        {{ messageError }}
      </div>
    </div>
    <transition v-else>
      <div v-if="bool && getApiWet()" class="weather__text-group">
        <div class="application__text">Temperature: {{ parseInt(_temp) }} °C</div>
        <div class="application__text">Feels like: {{ parseInt(_feelsLike) }} °C</div>
        <div class="application__text">Humidity: {{ _humidity }}%</div>
        <div class="application__text">Wind speed: {{ parseInt(_wind) }} км/ч</div>
      </div>
    </transition>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
