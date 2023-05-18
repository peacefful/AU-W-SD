import SendData from './SendData'
import Weather from './Weather'
import AddUser from './AddUser'
import Timer from './Timer'

let components = [
  { name: 'SendData', component: SendData },
  { name: 'Adduser', component: AddUser },
  { name: 'Weather', component: Weather },
  { name: 'Timer', component: Timer }
]

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}
