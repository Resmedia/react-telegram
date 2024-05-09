# Используем базовый образ Node.js
FROM node:20

LABEL maintainer="Evgenii Res <resmedia@ya.ru>"

USER root

# Устанавливаем pnpm
RUN npm install -g pnpm

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта в контейнер
COPY . .

# Устанавливаем зависимости проекта
RUN pnpm i

# Запускаем проект
CMD ["pnpm", "run", "dev"]
