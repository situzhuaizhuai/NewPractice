/*
@desc: 全局变量
*/
import AssetManager from "./AssetManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Gameinfo extends cc.Component {
    public static MoneyInfo ={
        diamond:10,    
        gold:0,   
        yield: 10,
    }
    public static Shops ={
        shopnum:1,  
    }

    // onLoad () {}

    // start () {

    // }

    // update (dt) {}
}
