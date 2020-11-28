IMPORT("ToolLib");

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

IDRegistry.genItemID("arlSword");
IDRegistry.genItemID("arlShovel");
IDRegistry.genItemID("arlPickaxe");
IDRegistry.genItemID("arlAxe");
IDRegistry.genItemID("arlHoe");
IDRegistry.genItemID("arlShickaxe");
Item.createItem("arlSword", "Arlemite sword", {
    name: "arlemitesw",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlShovel", "Arlemite shovel", {
    name: "arlemitesh",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlPickaxe", "Arlemite pickaxe", {
    name: "arlemitepick",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlAxe", "Arlemite axe", {
    name: "arlemiteaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlHoe", "Arlemite hoe", {
    name: "arlemitehoe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlShickaxe", "Arlemite shickaxe", {
    name: "arlemiteshickaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("arl", {
    durability: 3000,
    level: 4,
    efficiency: 13,
    damage: 4,
    enchantability: 13
});

ToolAPI.addToolMaterial("arlsh", {
    durability: 12000,
    level: 5,
    efficiency: 13,
    damage: 4,
    enchantability: 13
});

ToolAPI.addToolMaterial("arlsw", {
    durability: 1000000,
    level: 7,
    efficiency: 20,
    damage: 12,
    enchantability: 13
});

ToolAPI.setTool(ItemID.arlSword, "arlsw", ToolType.sword);
ToolAPI.setTool(ItemID.arlShovel, "arl", ToolType.shovel);
ToolAPI.setTool(ItemID.arlPickaxe, "arl", ToolType.pickaxe);
ToolAPI.setTool(ItemID.arlAxe, "arl", ToolType.axe);
ToolAPI.setTool(ItemID.arlHoe, "arl", ToolType.hoe);
ToolAPI.setTool(ItemID.arlShickaxe, "arlsh", ToolType.shickaxe);
Recipes.addShaped({
    id: ItemID.arlSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotArl, -1, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlHoe,
    count: 1,
    data: 0
}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.arlShickaxe,
    count: 1,
    data: 0
}, [
    "ab",
    "cd"
], ['a', ItemID.arlPickaxe, -1, 'b', ItemID.arlShovel, -1, 'c', ItemID.arlAxe, -1, 'd', ItemID.arlHoe, -1]);