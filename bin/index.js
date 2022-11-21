#! /usr/bin/env node

/** TODO */
// 1. handle different type of input
// 2. Modularity
// 2. validation
// 3. test cases
// 4. help 

const { hideBin } = require('yargs/helpers');
const argv = hideBin(process.argv);
const cronParser = require('./cronparser');

/**handling the inputs */
if(argv[0]){
    if(argv[0] == "--help"){
        console.log('/*********************/');
        console.log('Just type in --- cronparser "*/15 0 1,15 * 1-5 /usr/bin/find"');
        console.log('/*********************/');
    }else{
        console.table(cronParser(argv[0]));
    }
}else{
    console.log('Argumets are missing');
}
