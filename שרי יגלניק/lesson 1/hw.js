import fs from 'fs'
import { promises } from 'fs'
// קריאה לקובץ data.txt עם קידוד תקין
promises.readFile('data.txt', 'utf8')
.then(() =>
    promises.readFile('file1.txt', 'utf8')
        .then(data => console.log('data: ', data))
        .catch(error => console.log('error: ', error))
)
// כתיבה סינכרונית
fs.writeFileSync('file1.txt', 'hello')
// כתיבה אסינכרונית
promises.writeFile('file1.txt', 'hello')
.then(() =>
    promises.readFile('file1.txt', 'utf8')
        .then(data => console.log('data: ', data))
        .catch(error => console.log('error: ', error))
)
.catch(error => console.log('error: ', error))
// אם את רוצה אובייקט JSON – צריך לשים אותו במשתנה
const myData = {
    "name": "sari",
    "age": "20"
}