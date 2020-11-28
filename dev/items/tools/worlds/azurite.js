IDRegistry.genItemID("azurisword");
IDRegistry.genItemID("azuripickaxe");
IDRegistry.genItemID("azurishovel");
IDRegistry.genItemID("azuriaxe");
Item.createItem("azurisword", "Wildwood sword", {
    name: "azurisword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azurishovel", "Wildwood shovel", {
    name: "azurishovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azuripickaxe", "Wildwood pickaxe", {
    name: "azuripickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azuriaxe", "Wildwood axe", {
    name: "azuriaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("azuri", {
    durability: 2000,
    level: 4,
    efficiency: 28,
    damage: 26,
    enchantability: 13
});
ToolAPI.setTool(ItemID.azurisword, "azuri", ToolType.sword);
ToolAPI.setTool(ItemID.azurishovel, "azuri", ToolType.shovel);
ToolAPI.setTool(ItemID.azuripickaxe, "azuri", ToolType.pickaxe);
ToolAPI.setTool(ItemID.azuriaxe, "azuri", ToolType.axe);
Recipes.addShaped({
    id: ItemID.azuripickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.azurisword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.azuriaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.azurishovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);
