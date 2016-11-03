import fs  from 'fs'

const TASKS = fs.readdirSync('./_config/tasks/')

TASKS.forEach((task) => {
  require('./_config/tasks/' + task)
})
