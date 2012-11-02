IANA Protocol Numbers
=====================

Assigned Internet Protocol Numbers (from iana.org)

Usage
-----

In Node.js

``` js
> var protocols = require('protocol-numbers')
undefined
> protocols[4].name
'IPv4'
> protocols[4].description
'IPv4 encapsulation'
> 
```

In the Browser

```
<script src="protocol-numbers.js"></script>
<script>
    alert(protocol_numbers[4].name); // => 'IPv4'
</script>
```

Up to date list
---------------

You can generate an up-to-date list of the protocols.  Follow these steps:

    git clone git://github.com/bahamas10/node-protocol-numbers.git
    cd node-protocol-numbers
    npm install # for xml2js and request
    make

This will run the included script `get-list.js` and redirect the output for you

Installation
------------

    npm install protocol-numbers

License
-------

MIT Licensed
