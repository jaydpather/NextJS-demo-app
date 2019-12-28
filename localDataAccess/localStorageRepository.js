export default class LocalStorageRepository{
    constructor(){
    }

    getItem(key){
        return localStorage.getItem(key);
    }

    setItem(key, value){
        localStorage.setItem(key, value);
        
        console.log("setItem - " + value);
    }
}