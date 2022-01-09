require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/4AV33xpws6vk5UOuX-Qai9pvmu6smLLa',
      accounts: ['32b3526d1839063f34df9bf016507824e74c628b3e2b2a5d97bb08f07cb03af8'],
    },
  },
};