'use strict';

const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    console.info(chalk.grey(`Программа запускает http-сервер и формирует файл с данными для API.

    Гайд:
    server <command>

    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json
    --server <port>       создает веб-сервер на заданом порте`));
  }
};
