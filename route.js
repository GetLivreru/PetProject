const express = require('express');
const router = express.Router();

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






// Пример маршрута GET для получения списка товаров
router.get('/products', (req, res) => {
  // Обработка запроса и отправка ответа
});

// Пример маршрута POST для создания нового товара
router.post('/products', (req, res) => {
  // Обработка запроса и отправка ответа
});

// Добавьте другие маршруты по необходимости

module.exports = router;
