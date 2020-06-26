import router from './router'

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('login_status') == '' || localStorage.getItem('login_status') == null) {
    if (to.name != 'login') {
      router.push('/')
    } else {
      next()
    }
  } else {
    if (to.name == 'login') {
      if (localStorage.getItem('login_status') == 'logged') {
        if (from.name == null) {
          router.push('/dashboard')
        } else {
          next()
        }
      } else {
        if (to.name != 'login') {
          router.push('/')
        } else {
          next()
        }
      }
    } else {
      next()
    }
  }
})
