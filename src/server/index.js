//动态导出api
const files = require.context('.', false, /\.js$/)
const api = {}
files.keys().forEach(key => {
  if (key === './index.js') return
  api[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default api
