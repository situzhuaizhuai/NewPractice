const {ccclass, property} = cc._decorator;
const LEVEL = cc.Enum({EASY:1,HARD:2});
@ccclass
export class Game extends cc.Component {
    // 整型
    @property(cc.Integer)
    intVar: number = 0;
    // 浮点型
    @property(cc.Float)
    floatVar: number = 0;
    // 布尔型
    @property(cc.Boolean)
    boolVar: boolean = false;
    // 节点
    @property(cc.Node)
    nodeVar: cc.Node = null;
    // 节点数组
    @property([cc.Node])
    nodeArrVar: Array<cc.Node> = [];
    // Label
    @property(cc.Label)
    labelVar: cc.Label = null;
    // 预制体
    @property(cc.Prefab)
    prefabVar: cc.Prefab = null;
    // 点
    @property(cc.Vec2)
    vec2Var: cc.Vec2 = cc.v2();
    // 重点来了，自定义枚举
    /**
     * 全局变量
     * const LEVEL = cc.Enum({EASY:1,HARD:2});
     */ 
    @property({
        type:LEVEL
    })
    enumVa = LEVEL.EASY;
}
