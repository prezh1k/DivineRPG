IDRegistry.genItemID("netherIngot")
Item.createItem("netherIngot", "Слиток адского камня", {
    name: "netherIngot"
});
Recipes.addShaped({
    id: ItemID.netherIngot, count: 1, data: 0}, [
		"ab"
	], ['a', ItemID.shadowingot, 0, 'b', ItemID.netheriteChunk,0]);
	
IDRegistry.genItemID("netherHelmet");
IDRegistry.genItemID("netherChestplate");
IDRegistry.genItemID("netherLeggings");
IDRegistry.genItemID("netherBoots");

Item.createArmorItem("arlHelmet", "Незеритовый шлем", {
    name: "arlemitehelmet"
}, {
    type: "helmet",
    armor: 6,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Item.createArmorItem("arlChestplate", "Незеритовая кираса", {
    name: "arlemitebody"
}, {
    type: "chestplate",
    armor: 15,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Item.createArmorItem("arlLeggings", "Незеритовые поножи", {
    name: "arlemitelegs"
}, {
    type: "leggings",
    armor: 10,
    durability: 5000,
    texture: "armor/netherite_2.png"
});
Item.createArmorItem("arlBoots", "Незеритовые ботинки", {
    name: "arlemiteboots"
}, {
    type: "boots",
    armor: 4,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Recipes.addShaped({
    id: ItemID.arlHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "a a",
    "x x"
], ['x', ItemID.netheriteChunk, 0, 'a', ItemID.shadowingot,0]);

Recipes.addShaped({
    id: ItemID.arlChestplate,
    count: 1,
    data: 0
}, [
    "xax",
    "xax",
    " x "
], ['x', ItemID.netheriteChunk, 0, 'a', ItemID.shadowingot,0]);

Recipes.addShaped({
    id: ItemID.arlLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "a a",
    "x x"
], ['x', ItemID.netheriteChunk, 0, 'a', ItemID.shadowingot, 0]);

Recipes.addShaped({
    id: ItemID.arlBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "a a"
], ['a', ItemID.netheriteChunk, 0, 'x', ItemID.shadowingot,0]);
