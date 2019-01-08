'use strict';

const args = require('minimist')(process.argv.slice(2),{
    alias: {
        input: 'name,address',
        inputtype: 'textquery or number'
    }
});

console.log('args:', args);