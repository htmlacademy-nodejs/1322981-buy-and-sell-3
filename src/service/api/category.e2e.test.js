'use strict';

const express = require(`express`);
const request = require(`supertest`);
const category = require(`./category`);
const CategoryService = require(`../data-service/category`);
const {HttpCode} = require(`../../constants`);

const mockData = [
  {
    "id": `VZRihx`,
    "category": [
      `Игры`,
      `Разное`,
      `Канцтовары`,
      `Посуда`,
      `Журналы`,
      `Книги`
    ],
    "picture": `item06.jpg`,
    "description": `Даю недельную гарантию. Бонусом отдам все аксессуары. При покупке с меня бесплатная доставка в черте города. Не пытайтесь торговаться. Цену вещам я знаю.`,
    "title": `Продам отличную подборку фильмов на VHS.`,
    "type": `offer`,
    "sum": 82083,
    "comments": [
      {
        "id": `nhWmJO`,
        "text": `А где блок питания? А сколько игр в комплекте? Продаю в связи с переездом. Отрываю от сердца.`
      },
      {
        "id": `qolhlF`,
        "text": `Почему в таком ужасном состоянии? Продаю в связи с переездом. Отрываю от сердца. Совсем немного... С чем связана продажа? Почему так дешёво? А сколько игр в комплекте?`
      },
      {
        "id": `3JRsX8`,
        "text": `Совсем немного... С чем связана продажа? Почему так дешёво? А где блок питания? Неплохо, но дорого`
      },
      {
        "id": `0aokWP`,
        "text": `А сколько игр в комплекте?`
      }
    ]
  },
  {
    "id": `TyPXOQ`,
    "category": [
      `Посуда`
    ],
    "picture": `item07.jpg`,
    "description": `Совершенно новый, экспортный (клеймо - MADE IN USSR). Не пытайтесь торговаться. Цену вещам я знаю. Кому нужен этот новый телефон, если тут такое... Пользовались бережно и только по большим праздникам.`,
    "title": `Продам советскую посуду. Почти не разбита.`,
    "type": `sale`,
    "sum": 28389,
    "comments": [
      {
        "id": `xy3dXG`,
        "text": `Оплата наличными или перевод на карту? А где блок питания?`
      },
      {
        "id": `AkiOWl`,
        "text": `Вы что?! В магазине дешевле. С чем связана продажа? Почему так дешёво?`
      },
      {
        "id": `eJZ7FV`,
        "text": `Неплохо, но дорого Вы что?! В магазине дешевле.`
      }
    ]
  },
  {
    "id": `R7rFeh`,
    "category": [
      `Посуда`,
      `Недвижимость`,
      `Животные`,
      `Журналы`,
      `Книги`
    ],
    "picture": `item13.jpg`,
    "description": `Пользовались бережно и только по большим праздникам. Кажется, что это хрупкая вещь. Если найдёте дешевле — сброшу цену. Бонусом отдам все аксессуары.`,
    "title": `Продам коллекцию журналов «Огонёк».`,
    "type": `sale`,
    "sum": 23877,
    "comments": [
      {
        "id": `gyaVjU`,
        "text": `Вы что?! В магазине дешевле. А сколько игр в комплекте?`
      },
      {
        "id": `G06_Wz`,
        "text": `Продаю в связи с переездом. Отрываю от сердца. Совсем немного... А сколько игр в комплекте? Вы что?! В магазине дешевле. С чем связана продажа? Почему так дешёво?`
      },
      {
        "id": `73v0t2`,
        "text": `А где блок питания? С чем связана продажа? Почему так дешёво? Неплохо, но дорого А сколько игр в комплекте? Почему в таком ужасном состоянии?`
      },
      {
        "id": `pnowXU`,
        "text": `Неплохо, но дорого Совсем немного...`
      }
    ]
  }
];

const app = express();
app.use(express.json());
category(app, new CategoryService(mockData));

describe(`API returns category list`, () => {

  let response;

  beforeAll(async () => {
    response = await request(app)
      .get(`/categories`);
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`Returns list of 3 categories`, () => expect(response.body.length).toBe(2));

  test(`Category names are "Игры", "Посуда"`,
      () => expect(response.body).toEqual(
          expect.arrayContaining([`Игры`, `Посуда`])
      )
  );

});
