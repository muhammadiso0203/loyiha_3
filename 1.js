const fs = require('fs');
const os = require('os');
const path = require('path');
const event1 = require('events');

//Tasodifiy sonlarni faylga yozish (sinxron versiya)
function writeNumbersSync() {
  const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
  try {
    fs.writeFileSync('sonlar.txt', randomNumbers.join('\n'), 'utf8'); //yangi qatorga yozish
    console.log('100 ta tasodifiy son sonlar.txt fayliga yozildi');
  } catch (err) {
    console.error('Faylga yozishda xato:', err);
  }
}

//Sonlarni fayldan o'qish (sinxron versiya)
function readNumbersSync() {
  try {
    const data = fs.readFileSync('sonlar.txt', 'utf8');
    const numbers = data.split('\n').map(Number); // Massivga aylantirish
    console.log('Fayldan o\'qilgan sonlar:', numbers);
  } catch (err) {
    console.error('Fayldan o\'qishda xato:', err);
  }
}

//Tasodifiy sonlarni faylga yozish (asinxron versiya)
function writeNumbersAsync() {
  const randomNumbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
  fs.writeFile('sonlar.txt', randomNumbers.join('\n'), 'utf8', (err) => {
    if (err) {
      console.error('Faylga yozishda xato:', err);
    } else {
      console.log('100 ta tasodifiy son sonlar.txt fayliga yozildi');
    }
  });
}

//Sonlarni fayldan o'qish (asinxron versiya)
function readNumbersAsync() {
  fs.readFile('sonlar.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Fayldan o\'qishda xato:', err);
    } else {
      const numbers = data.split('\n').map(Number);
      console.log('Fayldan o\'qilgan sonlar:', numbers);
    }
  });
}

//my_nodejs_files degan papka yaratish va faylni yozish
function createFilesSync() {
  try {
    if (!fs.existsSync('my_nodejs_files')) {
      fs.mkdirSync('my_nodejs_files'); // papka yaratish
    }
    fs.writeFileSync('my_nodejs_files/hello_world.txt', 'Hello, world!\n', 'utf8');
    console.log('hello_world.txt fayli "my_nodejs_files" katalogida yaratildi');
  } catch (err) {
    console.error('Fayl yaratishda xato:', err);
  }
}

//Sana va vaqtni faylga qo'shish
function appendDateToFile() {
  const date = new Date();
  const dateString = date.toString();
  fs.appendFileSync('my_nodejs_files/hello_world.txt', `Hozirgi vaqt: ${dateString}\n`, 'utf8');
  console.log('Sana va vaqt hello_world.txt fayliga qo\'shildi');
}

//Operatsion tizim haqida ma'lumot olish
function getOSInfo() {
  const hostname = os.hostname(); //host name
  const username = os.userInfo().username; // user name
  console.log(`Hostname: ${hostname}, Username: ${username}`);
}

//papkani olish va faylga yozish
function getPaths() {
  const currentDir = process.cwd();
  console.log('Joriy ishchi katalog:', currentDir);

  const relativePath = path.join(currentDir, 'docs', 'readme.md');
  console.log('readme.md fayliga nisbiy yo\'l:', relativePath);

  // docs katalogi mavjudligini tekshirish va yaratish
  if (!fs.existsSync(path.join(currentDir, 'docs'))) {
    fs.mkdirSync(path.join(currentDir, 'docs'));
    console.log('"docs" katalogi yaratildi');
  }
}

//event1 orqali hodisalar yuborish
function event1Example() {
  const emitter = new event1();

  emitter.on('dataReceived', (data) => {
    console.log('Hodisa qabul qilindi:', data);
  });

  emitter.emit('dataReceived', 'Salom, bu yangi ma\'lumot!');
}


//"Hello World!" xabarini faylga yozish
function writeMessageFile() {
  try {
    fs.writeFileSync('message.txt', 'Hello World!\n', 'utf8');
    console.log('message.txt fayliga "Hello World!" yozildi');
  } catch (err) {
    console.error('Faylga yozishda xato:', err);
  }
}

//Faylga qo'shimcha matn qo'shish
function appendMessageFile() {
  try {
    fs.appendFileSync('message.txt', 'This is appended content.\n', 'utf8');
    console.log('message.txt fayliga qo\'shimcha matn qo\'shildi');
  } catch (err) {
    console.error('Faylga qo\'shimcha matn yozishda xato:', err);
  }
}

// Katalogni o'qish
function listDirectoryContents() {
  fs.readdir('.', (err, files) => {
    if (err) {
      console.log('Katalogni o\'qishda xato:', err.message);
    } else {
      console.log('Katalog tarkibi:', files);
    }
  });
}

//chaqirish
writeNumbersSync(); // Sinxron yozish
readNumbersSync();  // Sinxron o'qish


writeNumbersAsync(); // Asinxron yozish
readNumbersAsync();  // Asinxron o'qish

createFilesSync();  // Sinxron fayl yaratish
appendDateToFile();  // Sana va vaqtni faylga qo'shish
getOSInfo();         // Operatsion tizim haqida ma'lumot
getPaths();          // Joriy katalog va nisbiy yo'lni olish
event1Example(); // Hodisa yuborish
writeMessageFile();  // "Hello World!" yozish
appendMessageFile(); // Faylga qo'shimcha yozish
listDirectoryContents(); // Katalogni o'qish
