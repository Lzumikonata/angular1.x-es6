/**
 * Created by Witt on 2016/4/6.
 */
import entries from 'babel-runtime/core-js/object/entries'

export default class self {
    constructor ($timeout){
        this.phoneReg = /^1[3|4|5|8]\d{9}$/
        this._$timeout = $timeout
    }
    isPhone (number = 0){
        return this.phoneReg.test(Number.parseInt(number))
    }
    set (key, value = undefined){
        if (!key) return 'undefined key';
        if (typeof key === 'object') {
            let oldKeyArr = []
            entries(key).forEach(v => {
                window.localStorage.setItem(v[0], v[1])
                oldKeyArr.push(window.localStorage.getItem(v[0]))
            })
            return oldKeyArr;
        }
        const oldKey = window.localStorage.getItem(key)
        window.localStorage.setItem(key, value)
        return oldKey
    }
    get (key){
        return window.localStorage.getItem(key)
    }
}












