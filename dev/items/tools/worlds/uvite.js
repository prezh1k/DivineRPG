IDRegistry.genItemID("apalazisword");
IDRegistry.genItemID("apalazipickaxe");
IDRegistry.genItemID("apalazishovel");
IDRegistry.genItemID("apalaziaxe");
Item.createItem("apalazisword", "Apalachia sword", {
    name: "apalazisword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalazishovel", "Apalachia shovel", {
    name: "apalazishovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalazipickaxe", "Apalachia pickaxe", {
    name: "apalazipickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalaziaxe", "Apalachia axe", {
    name: "apalaziaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("apalazi", {
    durability: 2000,
    level: 4,
    efficiency: 30,
    damage: 2,
    enchantability: 13
});
ToolAPI.addToolMaterial("apalazisw", {
    durability: 2000,
    level: 4,
    efficiency: 30,
    damage: 29,
    enchantability: 13
});
ToolAPI.setTool(ItemID.apalazisword, "apalazisw", ToolType.sword);
ToolAPI.setTool(ItemID.apalazishovel, "apalazi", ToolType.shovel);
ToolAPI.setTool(ItemID.apalazipickaxe, "apalazi", ToolType.pickaxe);
ToolAPI.setTool(ItemID.apalaziaxe, "apalazi", ToolType.axe);

Recipes.addShaped({
    id: ItemID.apalazipickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.apalazisword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.apalaziaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.apalazishovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);
