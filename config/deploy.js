module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'drblossom',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
