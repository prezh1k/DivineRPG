IMPORT("ToolLib");

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

IDRegistry.genItemID("divineSword");
IDRegistry.genItemID("divineShovel");
IDRegistry.genItemID("divinePickaxe");
IDRegistry.genItemID("divineAxe");
IDRegistry.genItemID("divineShickaxe");
Item.createItem("divineSword", "Божественный меч", {
    name: "divinesword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divineShovel", "Божественная лопата", {
    name: "divineshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divinePickaxe", "Божественная кирка", {
    name: "divinepickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divineAxe", "Божественный топор", {
    name: "divineaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divineShickaxe", "Божественный мультиинструмент", {
    name: "divineshickaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("divine", {
    durability: 1000000,
    level: 7,
    efficiency: 20,
    damage: 4,
    enchantability: 13
});

ToolAPI.addToolMaterial("divinesw", {
    durability: 1000000,
    level: 7,
    efficiency: 20,
    damage: 19,
    enchantability: 13
});

ToolAPI.setTool(ItemID.divineSword, "divinesw", ToolType.sword);
ToolAPI.setTool(ItemID.divineShovel, "divine", ToolType.shovel);
ToolAPI.setTool(ItemID.divinePickaxe, "divine", ToolType.pickaxe);
ToolAPI.setTool(ItemID.divineAxe, "divine", ToolType.axe);
ToolAPI.setTool(ItemID.divineShickaxe, "divine", ToolType.shickaxe);

Recipes.addShaped({
    id: ItemID.divinePickaxe,
    count: 1,
    data: 0
}, [
    "bbb",
    " d ",
    " d "
], ['b', ItemID.divinestone, 0, 'd', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.divineSword,
    count: 1,
    data: 0
}, [
    " b ",
    "bbb",
    " d "
], ['b', ItemID.divinestone, 0, 'd', 280, 0]);
Recipes.addShaped({
    id: ItemID.divineAxe,
    count: 1,
    data: 0
}, [
    "bb ",
    "bd ",
    " d "
], ['b', ItemID.divinestone, 0, 'd', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.divineShovel,
    count: 1,
    data: 0
}, [
    " b ",
    " d ",
    " d "
], ['b', ItemID.divinestone, 0, 'd', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.divineShickaxe,
    count: 1,
    data: 0
}, [
    "bd ",
    "c  "
], ['b', ItemID.divinePickaxe, 0, 'd', ItemID.divineShovel, 0, 'c', ItemID.divineAxe,0]);
