var Item = cc.Class({
    name: 'Item',
    properties: {
        id: 0,
        itemName: '',
        itemYield: 0,
        iconSF: cc.SpriteFrame
    }
});
import AssetManager from "./AssetManager";
const {ccclass, property} = cc._decorator;
@ccclass
export default class itemlist extends cc.Component {
    @property(cc.Prefab)
    itemPrefab: cc.Prefab = null;
    @property(Item)
    items=[];

    onLoad () {

    }

    start () {
        AssetManager.Instance().loadJson('Hero',function(){           
            this.init();
        }.bind(this))
    }
    init() {
        var myJsonData =AssetManager.Instance().getJsonData('Hero');      
            this.items=myJsonData.json;
        for (var i = 0; i < this.items.length; ++i) {
            var item = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);
            item.getComponent('ItemTemplate').init({
                id: data.id,
                itemName: data.itemName,
                itemYield: data.itemYield,
                iconSF: AssetManager.Instance().setSpriteFrame(cc.find('open/icon',item),data.iconSF,'textures/Hero'),                
            });
        }
    }
    // update (dt) {}
}
