IMPORT("ToolLib");

ToolType.maul = {
    isWeapon: true,
    enchantType: Native.EnchantType.weapon,
    damage: 8,
    blockTypes: ["fibre", "corweb"],
    onAttack: function(item, mob) {}
}

IDRegistry.genItemID("bedrSword");
IDRegistry.genItemID("bedrShovel");
IDRegistry.genItemID("bedrPickaxe");
IDRegistry.genItemID("bedrAxe");
IDRegistry.genItemID("bedrMaul");
Item.createItem("bedrSword", "Bedrock sword", {
    name: "bedrocksw",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrShovel", "Bedrock shovel", {
    name: "bedrocksh",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrPickaxe", "Bedrock pickaxe", {
    name: "bedrockpick",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrAxe", "Bedrock axe", {
    name: "bedrockaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrMaul", "Bedrock maul", {
    name: "bedrockmaul"
}, {
    stack: 1
});

ToolAPI.addToolMaterial("bedr", {
    durability: 10000000,
    level: 4,
    efficiency: 9,
    damage: 2,
    enchantability: 13
});
ToolAPI.addToolMaterial("bedrsw", {
    durability: 1400,
    level: 4,
    efficiency: 18,
    damage: 14,
    enchantability: 13
});
ToolAPI.addToolMaterial("bedrma", {
    durability: 10000000,
    level: 4,
    efficiency: 18,
    damage: 14,
    enchantability: 13
});

ToolAPI.setTool(ItemID.bedrSword, "bedrsw", ToolType.sword);
ToolAPI.setTool(ItemID.bedrShovel, "bedr", ToolType.shovel);
ToolAPI.setTool(ItemID.bedrPickaxe, "bedr", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bedrAxe, "bedr", ToolType.axe);
ToolAPI.setTool(ItemID.bedrMaul, "bedrma", ToolType.maul);

Recipes.addShaped({
    id: ItemID.bedrSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrMaul,
    count: 1,
    data: 0
}, [
    " a ",
    "aaa",
    " a "
], ['a', 7, 0]);
