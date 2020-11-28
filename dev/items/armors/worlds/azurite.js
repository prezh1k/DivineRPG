IDRegistry.genItemID("quande");
IDRegistry.genItemID("quandf");
IDRegistry.genItemID("quandg");
IDRegistry.genItemID("quandh");
Item.createArmorItem("quande", "Wildwood helmet", {
    name: "quandehelm"
}, {
    type: "helmet",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_3.png"
});
Item.createArmorItem("quandf", "Wildwood chestplate", {
    name: "quandfchest"
}, {
    type: "chestplate",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_3.png"
});
Item.createArmorItem("quandg", "Wildwood leggings", {
    name: "quandglegs"
}, {
    type: "leggings",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_4.png"
});
Item.createArmorItem("quandh", "Wildwood boots", {
    name: "quandhboots"
}, {
    type: "boots",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_3.png"
});
Recipes.addShaped({
    id: ItemID.quande,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "      ",
], ['a', ItemID.leskristal, 0]);


Recipes.addShaped({
    id: ItemID.quandf,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a ",
], ['a', ItemID.leskristal, 0]);

Recipes.addShaped({
    id: ItemID.quandg,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.leskristal, 0]);

Recipes.addShaped({
    id: ItemID.quandh,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.leskristal, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quande && Player.getArmorSlot(1).id == ItemID.quandf && Player.getArmorSlot(2).id == ItemID.quandg && Player.getArmorSlot(3).id == ItemID.quandh) {
      var crdsP = Player.getPosition();
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == 8 || 9) {
        Entity.addEffect(Player.get(), 10, 10, 20,false, false);
    }}
});