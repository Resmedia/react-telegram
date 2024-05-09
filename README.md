# Telegram Mini App - T2C

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@tma.js SDK](https://docs.telegram-mini-apps.com/packages/tma-js-sdk)
- [Vite](https://vitejs.dev/)

## Getting Started with Docker

## 1. Add SSL, build and run docker

```bash
#Add domain to hosts
echo "127.0.0.1 t2c.docker" >> /etc/hosts
# Add SSL for MACOS
pnpm run sert-mac
# build at first time container
docker build -t app-t2c .
# Run docker
docker-compose up -d
# Stop docker
docker-compose down
```

## 2. Create a new app in Telegram

Go to Telegram open `@BotFather`

1. Run command: `/newbot`
2. Add name: T2CTest 
3. Add username: T2CTestBot 
4. Then run: `/newapp`
5. Send: @T2CTestBot 
6. Add title: T2CtestApp 
7. Add description: T2CtestApp 
8. Add avatar: 640x360 pixels. 
9. Add domain: https://t2c.docker
10. Add name of space: app 
11. Run: https://t.me/T2CTestBot/app

# Scripts
```bash

## Scripts

This project contains the following scripts:

dev #Runs the application in development mode.
build #Builds the application for production.
lint #Runs eslint to ensure the code quality meets the required standards.
deploy #Deploys the application to GitHub Pages.

# To run a script, use the `pnpm run` command:
pnpm run {script}
# Example: pnpm run build
```
