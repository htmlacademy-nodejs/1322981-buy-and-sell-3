'use strict';

const {Router} = require(`express`);
const api = require(`../api`).getAPI();
const advert = new Router();

advert.get(`/`, async (req, res) => {
  const offers = await api.getOffers();
  res.render(`advert/my-tickets`, {offers});
});

advert.get(`/comments`, async (req, res) => {
  const offers = await api.getOffers();
  const offer = {...offers[0]};
  res.render(`advert/comments`, {thinks: {offer}});
});

module.exports = advert;
