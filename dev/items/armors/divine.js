IDRegistry.genItemID("divHelmet");
IDRegistry.genItemID("divChestplate");
IDRegistry.genItemID("divLeggings");
IDRegistry.genItemID("divBoots");

Item.createArmorItem("divHelmet", "Divine Helmet", {
    name: "divinehelmet"
}, {
    type: "helmet",
    armor: 4,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Item.createArmorItem("divChestplate", "Divine Chestplate", {
    name: "divinechestplate"
}, {
    type: "chestplate",
    armor: 9,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Item.createArmorItem("divLeggings", "Divine Leggings", {
    name: "divineleggings"
}, {
    type: "leggings",
    armor: 6,
    durability: 10000000,
    texture: "armor/divine_2.png"
});
Item.createArmorItem("divBoots", "Divine Boots", {
    name: "divineboots"
}, {
    type: "boots",
    armor: 3,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Recipes.addShaped({
    id: ItemID.divHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "x x"
], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({
    id: ItemID.divChestplate,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    " x "
], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({
    id: ItemID.divLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({
    id: ItemID.divBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.divinestone, 0]);