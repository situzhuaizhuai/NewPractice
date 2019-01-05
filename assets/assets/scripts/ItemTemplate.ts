
const {ccclass, property} = cc._decorator;

@ccclass
export default class item extends cc.Component {

    @property(cc.Label)
    itemName: cc.Label = null;
    @property(cc.Label)
    itemYield: cc.Label = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    id: 0;


    // onLoad () {}

    start () {

    }

    init(data) {
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF;       
        this.itemName.string = data.itemName;
        this.itemYield.string = data.itemYield;
    }

    // update (dt) {}
}
