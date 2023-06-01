import fs from 'fs';

async function createFile() {
  const filePath = './files/fresh.txt';
  const fileContent = 'I am fresh and young';

  try {
    await fs.promises.access(filePath);
    throw new Error('File already exists');
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.promises.writeFile(filePath, fileContent);
      console.log('Файл успешно создан');
    } else {
      throw new Error('Ошибка операции с файловой системой');
    }
  }
}

export default createFile;

createFile()
  .then(() => console.log('Готово'))
  .catch((error) => console.error(error));
