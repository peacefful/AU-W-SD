<script setup>
import { ref, reactive } from "vue"

const name = ref("")
const surname = ref("")
const age = ref("")

const warning = ref()

const postData = async () => {

if (name.value !== "" && surname.value !== "" && age.value !== "") {
		const user = reactive({
			name: name.value,
			surname: surname.value,
			age: age.value,
		})

		if (user.age > 100) {
			warning.value = false
		} else {
		const URL = "https://63d54f340e7ae91a00abed50.mockapi.io/goods/good/humans"
			const response = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});

			name.value = ""
			surname.value = ""
			age.value = ""

			warning.value = true

			return response.json(); 
		}
	}
}

</script>
<template>
	<main class="send-data">
		<div v-if="warning" class="send-data__success">
			Sent
		</div>
		<div v-else :class="{'send-data__error' : warning == false}">
			Enter the correct data
		</div>
		<div>
			<input 
				v-model="name" 
				placeholder="Your name" 
				type="text"
			>
		</div>
		<div>
			<input 
				v-model="surname" 
				placeholder="Your last name" 
				type="text"
			>
		</div>
		<div>
			<input 
				v-model="age" 
				placeholder="Your age" 
				type="number"
			>
		</div>
		<button 
			@click.enter="postData()" 
			class="send-data__button"
		>
			Send
		</button>
	</main>
</template>