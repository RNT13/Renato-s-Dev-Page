import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Função para renomear as pastas e arquivos com _temp
const renameFoldersAndFiles = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const newDirName = file + '_temp';
      const newDirPath = path.join(dir, newDirName);
      fs.renameSync(filePath, newDirPath);
      console.log(`Renomeado: ${filePath} -> ${newDirPath}`);

      renameFoldersAndFiles(newDirPath);
    } else if (stats.isFile()) {
      const newFileName = file + '_temp';
      const newFilePath = path.join(dir, newFileName);
      fs.renameSync(filePath, newFilePath);
      console.log(`Renomeado arquivo: ${filePath} -> ${newFilePath}`);
    }
  });
};

// Função para desfazer a renomeação (remover o _temp)
const removeTempFromFoldersAndFiles = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      if (file.endsWith('_temp')) {
        const newDirName = file.replace('_temp', '');
        const newDirPath = path.join(dir, newDirName);
        fs.renameSync(filePath, newDirPath);
        console.log(`Removido _temp da pasta: ${filePath} -> ${newDirPath}`);
      }
      removeTempFromFoldersAndFiles(path.join(dir, file));
    } else if (stats.isFile()) {
      if (file.endsWith('_temp')) {
        const newFileName = file.replace('_temp', '');
        const newFilePath = path.join(dir, newFileName);
        fs.renameSync(filePath, newFilePath);
        console.log(`Removido _temp do arquivo: ${filePath} -> ${newFilePath}`);
      }
    }
  });
};

// Função para executar o commit com Git
const gitCommit = (message) => {
  try {
    execSync('git add .');  // Adiciona todos os arquivos ao staging
    execSync(`git commit -m "${message}"`);  // Comita com a mensagem passada
    console.log(`Commit realizado: ${message}`);
  } catch (error) {
    console.error('Erro ao fazer commit:', error);
  }
};

// Caminho absoluto para o diretório 'src'
const rootDir = path.join('D:', 'Curso', 'MeusProjetos', 'PROJETOS ONLINE', 'Renato\'s Dev Page', 'src');

// Etapas
console.log('Iniciando renomeação com _temp...');

// Passo 1: Renomear as pastas e arquivos com '_temp'
renameFoldersAndFiles(rootDir);

// Passo 2: Commitar as mudanças
gitCommit('Renomeando pastas e arquivos com _temp');

// Passo 3: Remover '_temp' das pastas e arquivos
console.log('Removendo _temp...');

removeTempFromFoldersAndFiles(rootDir);

// Passo 4: Commitar novamente após remover o _temp
gitCommit('Removendo _temp das pastas e arquivos');
