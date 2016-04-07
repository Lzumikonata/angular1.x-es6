/**
 * Created by Witt on 2016/4/3.
 */
export default class self{
    constructor (){
        this.h2 = '这是home路由页面'
    }
    foo (...value){
        for(let v of value){
            alert(v)
        }
    }
}