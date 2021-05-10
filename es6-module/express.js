 
import Express from 'express'
 
let app = Express()
 
app.get('/', (req, res) => {
  res.send('hello world')
})

 
app.listen(3000, () => console.log('server is running at http://localhost:3000'))
