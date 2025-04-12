import { execSync } from 'child_process'; // Para executar comandos git
import fs from 'fs';
import path from 'path';

// Função para renomear as pastas
const renameFolders = (dir, tempSuffix) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const newDirName = file + tempSuffix;
      const newDirPath = path.join(dir, newDirName);
      fs.renameSync(filePath, newDirPath);
      console.log(`Renomeado: ${filePath} -> ${newDirPath}`);

      renameFolders(newDirPath, tempSuffix);
    } else if (stats.isFile()) {
      const newFileName = file + tempSuffix;
      const newFilePath = path.join(dir, newFileName);
      fs.renameSync(filePath, newFilePath);
      console.log(`Renomeado: ${filePath} -> ${newFilePath}`);
    }
  });
};

// Função para reverter a renomeação removendo o _temp
const revertRename = (dir, tempSuffix) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory() && file.endsWith(tempSuffix)) {
      const newDirName = file.slice(0, -tempSuffix.length);
      const newDirPath = path.join(dir, newDirName);
      fs.renameSync(filePath, newDirPath);
      console.log(`Revertido: ${filePath} -> ${newDirPath}`);

      revertRename(newDirPath, tempSuffix);
    } else if (stats.isFile() && file.endsWith(tempSuffix)) {
      const newFileName = file.slice(0, -tempSuffix.length);
      const newFilePath = path.join(dir, newFileName);
      fs.renameSync(filePath, newFilePath);
      console.log(`Revertido: ${filePath} -> ${newFilePath}`);
    }
  });
};

// Função para executar comandos Git (add, commit)
const gitCommit = (message) => {
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    console.log(`Comitado: ${message}`);
  } catch (error) {
    console.error('Erro ao fazer commit', error);
  }
};

// Caminho para o diretório 'src'
const rootDir = path.join('D:', 'Curso', 'MeusProjetos', 'PROJETOS ONLINE', 'Renato\'s Dev Page', 'src');

// Etapa 1: Renomear todas as pastas e arquivos com _temp
renameFolders(rootDir, '_temp');

// Etapa 2: Comitar as mudanças
gitCommit('Renomear todas as pastas e arquivos para _temp');

// Etapa 3: Reverter o _temp das pastas e arquivos
setTimeout(() => {
  revertRename(rootDir, '_temp');

  // Etapa 4: Comitar as mudanças novamente
  gitCommit('Reverter o _temp das pastas e arquivos');
}, 5000);  // Aguardar 5 segundos para garantir que o commit anterior seja feito
