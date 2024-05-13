<img width="1302" alt="image" src="https://github.com/Bashkanitto/Mentally-vite/assets/86559848/00de7d6c-4240-43af-9d3c-681d95c37676">

# Mentally

## Описание

Mentally — это веб-приложение, предназначенное для ментальной поддержки мужчин. Проект находится на стадии MVP (минимально жизнеспособный продукт) и разработан с использованием Vite, React и TailwindCSS.

## Архитектура приложения

Структура каталогов в проекте:

src/ <br/>
├──── pages/ <br/>
│ ├── Chat.jsx <br/>
│ ├── SettingPage.jsx <br/>
│ ├── TechWorks.jsx <br/>
│ └── Welcome.jsx <br/>
└──── components/ <br/>
├── CustomSelect.jsx <br/>
├── Footer.jsx <br/>
├── Messages.jsx <br/>
├── Notification.jsx <br/>
├── prompts.js <br/>
├── Sidebar.jsx <br/>
└── TextAnimation.jsx <br/>

## Технологии

- **Vite**: Современный инструмент для сборки веб-проектов.
- **React**: Библиотека для создания пользовательских интерфейсов.
- **TailwindCSS**: Утилитарный фреймворк для CSS.
- **Lucide-react**: Коллекция React компонентов для иконок.
- **OpenAI API**: Интеграция с API OpenAI для генерации текстовых ответов на запросы пользователей.

## Установка и запуск

Для запуска проекта на вашем локальном компьютере выполните следующие шаги:

1. Клонируйте репозиторий:
```
git clone https://github.com/bashkanitto/mentally
cd mentally
```
2. Установите зависимости:
```
npm install
```

3. Запустите проект:
```
npm run dev
```


После запуска проект будет доступен по адресу `http://localhost:3000`.

## API

Проект взаимодействует с бэкендом, развернутым на Vercel. Основной эндпоинт для запросов к API:

- **POST** `https://gpt-backend-laab2kd55-aidyns-projects-9d4d7723.vercel.app/api/request`

## Поддержка

- **bashkanitto** - Все вопросы и предложения направляйте на мой GitHub.

## Лицензия

Проект распространяется под лицензией MIT. Смотрите файл `LICENSE` для дополнительной информации.
