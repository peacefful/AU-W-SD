<script setup>
import { ref, reactive, watch, computed } from 'vue'
import dayjs from 'dayjs'

const user = ref()
const users = reactive([])

const addUser = () => {
  if (user.value) {
    const date = dayjs()
    const formattedNow = date.format('HH:mm')

    let objName = user.value.toLowerCase()
    objName = {
      name: user.value,
      timeUserAdd: formattedNow
    }
    users.push(objName)
    user.value = ''
  }
}

const deleteUser = (index) => {
  users.splice(index, 1)
}
</script>

<template>
  <main class="add-user">
    <div class="add-user__container">
      <input placeholder="Add name" v-model="user" type="text" />
      <button @click.enter="addUser()">Add</button>
    </div>
    <transition-group name="list" tag="ul" class="add-user__list">
      <li class="add-user__item" v-for="(user, index) in users" :key="user">
        <div class="add-user__text">
          {{ user.name }}
        </div>
        <span style="color: rgba(255, 255, 255, 0.221); font-size: 17px">
          {{ user.timeUserAdd }}
        </span>
        <button @click="deleteUser(index)" class="button">Delete</button>
      </li>
    </transition-group>
  </main>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
