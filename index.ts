
import serverless from '@serverless-devs/fc-http'
import app from './src'

const server = serverless(app)

exports.handler = server
