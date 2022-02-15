export default class HttpService {
    constructor() {}

    async get(url){
        const res =  await fetch(url);
        const data = res.json();
        return data;
    }
}