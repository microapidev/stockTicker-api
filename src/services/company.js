const https = require('https');
const CustomResponse = require('../utils/customResponse');
const CustomError = require('../utils/customError');
const { FINNHUB_APIKEY } = require('../config/util');

const company = {
  getProfile: (request, response, next) => {
    try {
      const symbol = request.params.symbol;
      https.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&&token=${FINNHUB_APIKEY}`, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          const info = JSON.parse(data);
          return CustomResponse(response, 200, info, 'Financial Info');
        });
      });
    } catch (e) {
      next(CustomError(400, e.message, null));
    }
  },

  getFinancialMetric: (request, response, next) => {
    try {
      const symbol = request.params.symbol;
      https.get(
        `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${FINNHUB_APIKEY}`,
        (resp) => {
          let data = '';
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            const info = JSON.parse(data);

            return CustomResponse(response, 200, info, 'Financial Info');
          });
        }
      );
    } catch (e) {
      next(CustomError(400, e.message, null));
    }
  },

  getStockQuote: (request, response, next) => {
    try {
      const symbol = request.params.symbol;
      https.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_APIKEY}`, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          const info = JSON.parse(data);

          return CustomResponse(
            response,
            200,
            info,
            'Current Stock prices, and all relevant data to help make informed trades'
          );
        });
      });
    } catch (e) {
      next(CustomError(400, e.message, null));
    }
  }
};

module.exports = { company };
