import { promises } from 'fs'

promises.readFile('data.txt','good')
.then(() => promises.readFile('file1.txt', 'utf8')
    .then(data => console.log('data: ', data))
    .catch(error => console.log('error: ', error))
)

fs.writeFileSync('file1.txt', 'hello')

promises.writeFile('file1.txt', 'hello')
// then - מופעל כשהפרומיס מחזיר הצלחה
.then(() => promises.readFile('file1.txt', 'utf8')
    .then(data => console.log('data: ', data))
    .catch(error => console.log('error: ', error))
)
// catch - מופעל כשהפרומיס מחזיר כישלון
.catch(error => console.log('error: ', error))

