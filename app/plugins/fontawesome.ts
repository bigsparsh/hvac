import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faBolt,
  faEnvelope,
  faLocationDot,
  faMoon,
  faPaperPlane,
  faPhone,
  faSun,
  faUserTie,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faBolt,
  faEnvelope,
  faLocationDot,
  faMoon,
  faPaperPlane,
  faPhone,
  faSun,
  faUserTie,
  faXmark
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
