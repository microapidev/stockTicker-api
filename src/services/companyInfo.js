const https = require('https');

const companyInfo = {
  getProfile: (req, res) => {
    try {
      const symbol = req.query.symbol;
      https.get(
        'https://finnhub.io/api/v1/stock/profile2?symbol=' + symbol + '&&token=bscqdufrh5rcu5phfvm0',
        (resp) => {
          let data = '';
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            const info = JSON.parse(data);
            return res.status(200).json({
              status: 'Success',
              message: 'Financial Info',
              data: info
            });
          });
        }
      );
    } catch (e) {
      res.status(400).json({ status: 'Failed', message: `${e.message}`, data: null });
    }
  }
};
module.exports = companyInfo;
