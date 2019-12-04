export const router = (fn) => {
  let from = {
    path: '/login',
    name: 'login'
  }
  let to = {
    path: '/home',
    name: 'home'
  }

  const handler = (resolve, reject) => {
    fn(from, to, (config = {}) => {
      let target = config.name || config.path
      if(target) {
        resolve(target)
      } else {
        resolve(to.name)
      }
    })
    reject(`error`)
  }

  new Promise(handler)
  .then(target => {
    console.log('go to: ', target)
  })
  .catch(e => {
    console.log(e, 'go has not handled')
  })
}