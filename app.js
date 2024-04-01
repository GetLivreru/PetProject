const express = require('express');
const app = express();
const routes = require('./route');
const path = require('path');

// Установка EJS в качестве движка представлений по умолчанию
app.set('view engine', 'ejs');

// Установка пути к папке с представлениями
app.set('views', path.join(__dirname, 'views'));
 
app.get('/', (req, res) => {
  res.render('index'); // Рендерим шаблон index.ejs
});

// Маршрут для обработки запроса поиска
app.get('/search', (req, res) => {
  const query = req.query.query; // Получаем значение параметра запроса "query"
  // Здесь можно выполнить действия по поиску
  res.send(`Searching for: ${query}`);
});

// Middleware для обработки JSON и статических файлов
app.use(express.json());
app.use(express.static('public')); // Если у вас есть статические файлы (например, CSS, изображения), они могут быть доступны из папки 'public'

// Подключение маршрутов
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
