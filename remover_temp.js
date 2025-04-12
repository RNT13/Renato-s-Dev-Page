import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Compatibilidade com __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const folderPath = path.join(__dirname, 'src', 'Components')

fs.readdirSync(folderPath, { withFileTypes: true }).forEach((dirent) => {
  if (dirent.isDirectory() && dirent.name.endsWith('_temp')) {
    const oldName = dirent.name
    const newName = oldName.replace(/_temp$/, '')
    const oldPath = path.join(folderPath, oldName)
    const newPath = path.join(folderPath, newName)
    fs.renameSync(oldPath, newPath)
    console.log(`Renomeado: ${oldName} -> ${newName}`)
  }
})
