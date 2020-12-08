IDRegistry.genItemID("edemsword");
IDRegistry.genItemID("edempickaxe");
IDRegistry.genItemID("edemshovel");
IDRegistry.genItemID("edemaxe");
Item.createItem("edemsword", "Eden sword", {
    name: "edemsword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("edemshovel", "Eden shovel", {
    name: "edemshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("edempickaxe", "Eden pickaxe", {
    name: "edempickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("edemaxe", "Eden axe", {
    name: "edemaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("edem", {
    durability: 2000,
    level: 4,
    efficiency: 24,
    damage: 2,
    enchantability: 13
});
ToolAPI.addToolMaterial("edemsw", {
    durability: 2000,
    level: 4,
    efficiency: 24,
    damage: 24,
    enchantability: 13
});
ToolAPI.setTool(ItemID.edemsword, "edemsw", ToolType.sword);
ToolAPI.setTool(ItemID.edemshovel, "edem", ToolType.shovel);
ToolAPI.setTool(ItemID.edempickaxe, "edem", ToolType.pickaxe);
ToolAPI.setTool(ItemID.edemaxe, "edem", ToolType.axe);

Recipes.addShaped({
    id: ItemID.edempickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.edemsword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.edemaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.edemshovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);