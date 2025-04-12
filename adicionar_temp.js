import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Compatibilidade com __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const folderPath = path.join(__dirname, 'src', 'Components')

fs.readdirSync(folderPath, { withFileTypes: true }).forEach((dirent) => {
  if (dirent.isDirectory() && !dirent.name.endsWith('_temp')) {
    const oldPath = path.join(folderPath, dirent.name)
    const newPath = path.join(folderPath, `${dirent.name}_temp`)
    fs.renameSync(oldPath, newPath)
    console.log(`Renomeado: ${dirent.name} -> ${dirent.name}_temp`)
  }
})
