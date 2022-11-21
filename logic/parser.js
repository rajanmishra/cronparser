const constant = require('../config/constants')

class Parser {

    constructor(typeValues, typeRange){
        console.log('Parser Loaded');
        this.typeValues = typeValues;
        this.typeRange = typeRange;
    }

    parse(input, type){
        if (input.includes(',')){
            return this.parseSeperatorComma(input);
        } 
        else if (input.includes('-')){
            return this.parseSeperatorHypen(input, type);
        }
        else if (input.includes('*/')){
            return this.parseInterval(input, type); 
        }    
        else if (input.includes('*')){
            return this.parseAllInterval(type);
        }             
        else{
            return input;
        }
        
    }

    parseSeperatorComma(interval){
        try{
            let [start, end] = interval.split(',');
            return `${start} ${end}`;
        }catch(e){
            console.log(e)
            return 'Not a valid Input';
        }
    }

    parseSeperatorHypen(interval, type){
        try{
            let [start, end] = interval.split('-');
            return this.typeValues[type].slice(start-1, end).join(' ');
        }catch(e){
            console.log(e)
            return 'Not a valid Input';
        }
    }

    parseInterval(interval, type){
        let intervalVal = parseInt(interval.replace('*/', ''));
        const range = this.typeRange[type];
        if(intervalVal <= range){
            let currentVal = 0
            let output = [];
            do{
                output.push(currentVal);
                currentVal +=  intervalVal;
            }while(currentVal < range)
            return output.join(' ');
        }
        return 'Not a valid Input';
    }

    parseAllInterval(type){
        try{
            return this.typeValues[type].join(' ');
        }catch{
            return 'Not a valid Input';
        }
    }

}


module.exports = new Parser(constant.values(), constant.range());