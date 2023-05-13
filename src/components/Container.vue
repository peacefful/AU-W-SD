<script setup>
import { ref, reactive } from "vue"
import dayjs from 'dayjs';

import SendData from "./global/SendData.vue"
import Weather from "./global/Weather.vue"
import AddUser from "./global/AddUser.vue"
import Test from "./Test.vue"

const currentPage = ref("AddUser")
const pages = {
	SendData,
	Weather,
	AddUser,
}
const clock = () => {
	const date = ref(new Date())

	const interval = setInterval(() => {
		date.value = new Date()
	}, 1000);

	let hour = date.value.getHours()
	let min = date.value.getMinutes()
	let sec = date.value.getSeconds()

	if (min < 10) {
		min = "0" + min
	} else if (sec < 10) {
		sec = "0" + sec
	}

	return `${hour}:${min}:${sec}`
}

const boolean = ref(false)

</script>

<template>
	<header>
		<div class="container">
			<div class="container__time">
				{{ clock() }}
			</div>
			<div class="container__list">
				<nav 
					v-for="(_, page) in pages" 
					:key="page"
					@click="currentPage = page"
					class="list__nav"
				>
					{{ page }}
				</nav>
			</div>
		</div>
	</header>
	<section>
		<keep-alive>
			<component class="component" :is="pages[currentPage]"></component>
		</keep-alive>
	</section>
	<main class="page">
		<div class="page__content">
		</div>
	</main>
</template>