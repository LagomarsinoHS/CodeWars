let instance = null;

class SingletonClass {
    constructor() {
        this.value = Math.random()
    }

    getValue() {
        return this.value
    }

    static getInstance() {
        if (!instance) instance = new SingletonClass()
        return instance;
    }
}



module.exports = SingletonClass;