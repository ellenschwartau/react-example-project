// adds some javascript functions to phantom js
require("babel-polyfill");
var context = require.context('./test/', true,  /.+\.*.spec.js/);
context.keys().forEach(context);
module.exports = context;