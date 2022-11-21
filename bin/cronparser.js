const constant = require('../config/constants');
const parser = require('../logic/parser');
const labels = constant.labels();
const inputRegex = /(([*/]\d+|(\d+,)+\d+|(\d+(\/|-)\d+)|\d+|\*) ?){5,10} ([\w/ ]+)$/;

function cronParser(args) {
    let cronArguments = args.split(' ');
    if(cronArguments.length !== 6){
        return 'please add all 6 valid arguments';
    }
    else if (!inputRegex.test(args)) {
        return 'please add valid arguments';
    }else{
        let result = {};
        for (const [index, value] of cronArguments.entries()) {
            // getting type of argument and its label i.e. minute, minute
            const [type, label]  = labels[index];
            result[label] = parser.parse(value, type);
        }
        return result;
    }
}

module.exports = cronParser;