import { NextFunction, Request, Response } from 'express';
var CURRENCY_DATA = require('../constants/currencies-data.json');
const fetch = require('node-fetch');

const axios = require('axios');

class SearchController {
  public author = {
    name: 'Jenniffer',
    lastname: 'Quintero',
  };
  public searchByQueryParams = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q='${req.query.q}&offset=0&limit=4`)
      .then(response => {
        const { data } = response;
        const categories =
          data.filters.length && data.filters[0].values
            ? data.filters[0].values[0].path_from_root
            : [
                {
                  id: '',
                  name: 'Sin Categoría',
                },
              ];
        const items = data.results
          .map(item => {
            const [, , , url] = item.thumbnail.split('/');
            const currency = CURRENCY_DATA[item.currency_id.toLowerCase()];
            return {
              id: item.id,
              title: item.title,
              price: {
                currency: currency.id,
                amount: item.price,
                decimal: currency.decimal_places,
                symbol: currency.symbol,
              },
              picture: url,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
              address: item.address,
            };
          });
        res.send({ author: this.author, categories: categories, items: items });
      })
      .catch(error => {
        // handle error
        res.status(404).send('Bad Request');
      });
  };

  public getItemDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const requestOne = axios.get(`https://api.mercadolibre.com/items/${req.params.id}`);
    const requestTwo = axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`);
    let categoryList = [];

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread(async (...responses) => {
          const [item, description] = responses;
          const { data: itemData } = item;
          const { data: descriptionData } = description;
          const currency = CURRENCY_DATA[itemData.currency_id.toLowerCase()];
          const fetchCategories = await fetch(`https://api.mercadolibre.com/categories/${itemData.category_id}`);
          const categories = await fetchCategories.json();
          const { path_from_root } = categories;
          try {
            categoryList = path_from_root;
          } catch {
            categoryList.push('Sin Categoría');
          }
          const [, , , url] = itemData.thumbnail.split('/');
          res.send({
            author: this.author,
            item: {
              id: itemData.id,
              title: itemData.title,
              price: {
                currency: currency.id,
                amount: itemData.price,
                decimal: currency.decimal_places,
                symbol: currency.symbol,
              },
              category_id: itemData.category_id,
              picture: url,
              condition: itemData.condition,
              free_shipping: itemData.shipping.free_shipping,
              sold_quantity: itemData.sold_quantity,
              description: descriptionData.plain_text,
              address: item.address,
              permalink: item.permalink,
            },
            categories: categoryList,
          });
        }),
      )
      .catch(error => {
        res.status(404).send({ author: this.author, item: 0, message: error.message });
      });
  };
}

export default SearchController;
