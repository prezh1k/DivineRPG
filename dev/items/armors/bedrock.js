IDRegistry.genItemID("bedrHelmet");
IDRegistry.genItemID("bedrChestplate");
IDRegistry.genItemID("bedrLeggings");
IDRegistry.genItemID("bedrBoots");

Item.createArmorItem("bedrHelmet", "Bedrock Helmet", {
    name: "bedrockhelm"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/bedrock_1.png"
});
Item.createArmorItem("bedrChestplate", "Bedrock Chestplate", {
    name: "bedrockch"
}, {
    type: "chestplate",
    armor: 8,
    texture: "armor/bedrock_1.png"
});
Item.createArmorItem("bedrLeggings", "Bedrock Leggings", {
    name: "bedrockleg"
}, {
    type: "leggings",
    armor: 5,
    durability: 10000000,
    texture: "armor/bedrock_2.png"
});
Item.createArmorItem("bedrBoots", "Bedrock Boots", {
    name: "bedrockboots"
}, {
    type: "boots",
    armor: 2,
    durability: 10000000,
    texture: "armor/bedrock_1.png"
});
Recipes.addShaped({
    id: ItemID.bedrHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', 7, 0]);

Recipes.addShaped({
    id: ItemID.bedrChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', 7, 0]);

Recipes.addShaped({
    id: ItemID.bedrLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', 7, 0]);

Recipes.addShaped({
    id: ItemID.bedrBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', 7, 0]);
