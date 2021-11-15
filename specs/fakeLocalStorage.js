
global.window={}

global.window.localStorage={

    data(){},
    
    getItem(key){

        return this.data[key]
    },
    setItem(key, value){
        this.data[key] = value


    },
    removeItem(key){

        delete this.data[key]
    },
    clear(){

        this.data={}
    }
}