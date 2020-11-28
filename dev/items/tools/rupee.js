IMPORT("ToolLib");

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

IDRegistry.genItemID("rupSword");
IDRegistry.genItemID("rupShovel");
IDRegistry.genItemID("rupPickaxe");
IDRegistry.genItemID("rupAxe");
IDRegistry.genItemID("rupHoe");
IDRegistry.genItemID("rupShickaxe");
Item.createItem("rupSword", "Rupee sword", {
    name: "rupeesword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupShovel", "Rupee shovel", {
    name: "rupeeshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupPickaxe", "Rupee pickaxe", {
    name: "rupeepickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupAxe", "Rupee axe", {
    name: "rupeeaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupHoe", "Rupee hoe", {
    name: "rupeehoe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupShickaxe", "Rupee shickaxe", {
    name: "rupeeshickaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("rup", {
    durability: 2500,
    level: 4,
    efficiency: 16,
    damage: 2,
    enchantability: 156
});
ToolAPI.addToolMaterial("rupsw", {
    durability: 4000,
    level: 4,
    damage: 12,
    enchantability: 15
});
ToolAPI.addToolMaterial("rupsh", {
    durability: 10000000,
    level: 4,
    efficiency: 16,
    damage: 9,
    enchantability: 15
});

ToolAPI.setTool(ItemID.rupSword, "rupsw", ToolType.sword);
ToolAPI.setTool(ItemID.rupShovel, "rup", ToolType.shovel);
ToolAPI.setTool(ItemID.rupPickaxe, "rup", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rupAxe, "rup", ToolType.axe);
ToolAPI.setTool(ItemID.rupHoe, "rup", ToolType.hoe);
ToolAPI.setTool(ItemID.rupShickaxe, "rupsh", ToolType.shickaxe);

Recipes.addShaped({
    id: ItemID.rupSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotRup, -1, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupHoe,
    count: 1,
    data: 0
}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.rupShickaxe,
    count: 1,
    data: 0
}, [
    "ab",
    "cd"
], ['a', ItemID.rupPickaxe, 0, 'b', ItemID.rupShovel, 0, 'c', ItemID.rupAxe, 0, 'd', ItemID.rupHoe, 0]);