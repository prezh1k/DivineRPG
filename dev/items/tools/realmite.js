IMPORT("ToolLib");

IDRegistry.genItemID("realSword");
IDRegistry.genItemID("realShovel");
IDRegistry.genItemID("realPickaxe");
IDRegistry.genItemID("realAxe");
IDRegistry.genItemID("realHoe");
Item.createItem("realSword", "Реалмитовый меч", {
    name: "realmitesw",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realShovel", "Реалмитовая лопата", {
    name: "realmitesh",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realPickaxe", "Реалмитовая кирка", {
    name: "realmitepick",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realAxe", "Реалмитовый топор", {
    name: "realmiteaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realHoe", "Реалмитовая мотыга", {
    name: "realmitehoe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("real", {
    durability: 4000,
    level: 4,
    efficiency: 12,
    damage: 6,
    enchantability: 13
});
ToolAPI.setTool(ItemID.realSword, "real", ToolType.sword);
ToolAPI.setTool(ItemID.realShovel, "real", ToolType.shovel);
ToolAPI.setTool(ItemID.realPickaxe, "real", ToolType.pickaxe);
ToolAPI.setTool(ItemID.realAxe, "real", ToolType.axe);
ToolAPI.setTool(ItemID.realHoe, "real", ToolType.hoe);

Recipes.addShaped({
    id: ItemID.realSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotReal, -1, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realHoe,
    count: 1,
    data: 0
}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);
