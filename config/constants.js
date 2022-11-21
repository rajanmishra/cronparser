class Arguments {
    #_labels;
    #_values;
    #_range;

    constructor(){
        // singleton 
        if (Arguments._instance) {
            return Arguments._instance;
        }
        Arguments._instance = this;
        console.log('Loading config');
        // Private Variables
        this.#_labels = [];
        this.#_values = {};
        this.#_range = {};
    }

    addValues(key, range){
        if(range){
            this.#_values[key] = [];
            for(let i = 1; i <= range; i++){
                this.#_values[key].push(i);
            }
        }else{
            this.#_values[key] = 0;
        }
    }

    addSupport(key, label, range){
        this.#_labels.push([key, label]);
        this.addValues(key, range); 
        this.#_range[key] = range;
    }

    labels(){
        return this.#_labels;
    }

    values(key){
        return this.#_values;
    }

    range(key){
        return this.#_range;
    }
}

const argumentsInstance = new Arguments();

// Add support to the arguments INORDER
argumentsInstance.addSupport('minutes', 'minute', 60)
argumentsInstance.addSupport('hours', 'hour', 24)
argumentsInstance.addSupport('dayOfMonth', 'day of month', 31)
argumentsInstance.addSupport('month', 'month', 12)
argumentsInstance.addSupport('dayOfWeek', 'day of week', 7)
argumentsInstance.addSupport('command', 'command', 0)

module.exports = argumentsInstance;