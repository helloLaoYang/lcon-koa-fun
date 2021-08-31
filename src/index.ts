
import app from './bin/www'
import KoaRouter from 'koa-router'

const router = new KoaRouter()

router.get('/', async (ctx) => {
  ctx.body = 'hello1'
})

app.use(router.routes())

app.use(async (ctx) => {
  ctx.body = 'hello'
})

export default app