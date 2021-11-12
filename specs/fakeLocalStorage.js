
global.window={}

global.window.localStorage={

    data(){},
    getItem(){},
    setItem(key, value){
        this.data[key] = value


    },
    removeItem(){},
    clear(){}
}