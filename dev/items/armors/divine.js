IDRegistry.genItemID("divHelmet");
IDRegistry.genItemID("divChestplate");
IDRegistry.genItemID("divLeggings");
IDRegistry.genItemID("divBoots");

Item.createArmorItem("divHelmet", "Divine helmet", {
    name: "divinehelmet"
}, {
    type: "helmet",
    armor: 4,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Item.createArmorItem("divChestplate", "Divine chestplate", {
    name: "divinechestplate"
}, {
    type: "chestplate",
    armor: 9,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Item.createArmorItem("divLeggings", "Divine leggings", {
    name: "divineleggings"
}, {
    type: "leggings",
    armor: 6,
    durability: 10000000,
    texture: "armor/divine_2.png"
});
Item.createArmorItem("divBoots", "Divine boots", {
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
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.divHelmet && Player.getArmorSlot(1).id == ItemID.divChestplate && Player.getArmorSlot(2).id == ItemID.divLeggings && Player.getArmorSlot(3).id == ItemID.divBoots) {
        Entity.addEffect(Player.get(), 5, 1, 20,false, false);
        Entity.addEffect(Player.get(), 8, 1, 20, false, false);
    }
})