import https from 'https';
import CustomResponse from '../utils/customResponse';
import CustomError from '../utils/customError';

export const company = {
  getProfile: (request, response, next) => {
    try {
      const symbol = request.params.symbol;
      https.get(
        'https://finnhub.io/api/v1/stock/profile2?symbol=' + symbol + '&&token=bscqdufrh5rcu5phfvm0',
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

  getFinancialMetric: (request, response, next) => {
    try {
      const symbol = request.params.symbol;
      https.get(
        'https://finnhub.io/api/v1/stock/metric?symbol=' + symbol + '&metric=all&token=bscqdufrh5rcu5phfvm0',
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
      https.get('https://finnhub.io/api/v1/quote?symbol=' + symbol + '&token=bscqdufrh5rcu5phfvm0', (resp) => {
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
