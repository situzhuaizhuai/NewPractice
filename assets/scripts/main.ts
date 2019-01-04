import Gameinfo from "./Gameinfo";
import UIManager from "./UIManager";
const {ccclass, property} = cc._decorator;
@ccclass
export default class main extends cc.Component {
    @property(cc.Label)
    public diamondDisplay: cc.Label = null;
    @property(cc.Label)
    public goldDisplay: cc.Label = null;
    @property(cc.Label)
    public yieldDisplay: cc.Label = null; 

    diamond=Gameinfo.MoneyInfo.diamond;
    gold=Gameinfo.MoneyInfo.gold;
    yield=Gameinfo.MoneyInfo.yield;
 
    private i: number=0;
    onLoad () {
        this.diamondDisplay.string='钻石：'+this.diamond;
        this.goldDisplay.string='金币：'+this.gold;
        this.yieldDisplay.string=this.yield+'金/秒';
    }

    start () {

    }

    update () {
        if(this.i<60){
            this.i++;
            console.log(this.i+'测试');
        }
        else if(this.i=60){
            this.i=0;
            this.gold+=this.yield;
            this.goldDisplay.string='金币：'+this.gold;  
        }
    }
    OpenNew(){

    }

}
