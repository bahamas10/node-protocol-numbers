#!/usr/bin/env node
/**
 * Grab the list of protocol numbers from iana
 * and spit out a javascript file to use
 */

var request = require('request');
var xml2js = require('xml2js');
var url = 'http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xml';

var parser = new xml2js.Parser();

// Get the URL
request(url, function(err, res, body) {
  if (err) throw err;
  if (res.statusCode !== 200)
    throw new Error('Status code: ' + res.statusCode);

  // Parse some XML
  parser.parseString(body, function(err, obj) {
    if (err) throw err;

    // starting point of the protocols
    var base = obj.registry.registry[0].record;

    // Key the array and clean up
    var keyed = key_array(base, 'value');
    Object.keys(keyed).forEach(function(key) {
      clean_obj(keyed[key]);
    });

    // Make the js output and print it
    s = [
      'var protocol_numbers = ' + JSON.stringify(keyed, null, 2) + ';',
      'if (module && module.exports) module.exports = protocol_numbers;'
    ].join('\n');
    console.log(s);
  });
});

/**
 * Internal function to turn an array into an object
 */
function key_array(array, key) {
  var d = {};
  for (var i in array) {
    d[array[i][key]] = array[i];
  }
  return d;
}

/**
 * Clean up arbitrary arrays in an obj
 */
function clean_obj(obj) {
  Object.keys(obj).forEach(function(key) {
    if (obj[key].length) obj[key] = obj[key][0];
  });
}
