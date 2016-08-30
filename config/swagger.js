/**
	* https://github.com/langateam/sails-swagger
	* Consultar la documentación en http://localhost:1337/swagger/doc
*/

module.exports.swagger = {
  /**
   * require() the package.json file for your Sails app.
   */
  pkg: require('../package'),
  ui: {
    url: 'http://swagger.balderdash.io'
  }
};