const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index'); // Рендерим шаблон index.ejs
});

router.get('/login', (req, res) => {
  res.render('login'); // Рендерим шаблон login.ejs
});

// Маршрут для обработки запроса авторизации (POST)
router.post('/login', (req, res) => {
  // Обработка запроса авторизации
});

// Маршрут для страницы регистрации (GET)
router.get('/register', (req, res) => {
  res.render('register'); // Рендерим шаблон register.ejs
});

// Маршрут для обработки запроса регистрации (POST)
router.post('/register', (req, res) => {
  // Обработка запроса регистрации
});

module.exports = router;
