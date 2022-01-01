import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

export default {
  install(app) {
    app.component('FontAwesomeIcon', FontAwesomeIcon)
  },
}
