IDRegistry.genItemID("quandj");
IDRegistry.genItemID("quandk");
IDRegistry.genItemID("quandl");
IDRegistry.genItemID("quandm");
Item.createArmorItem("quandj", "Apalachia helmet", {
    name: "quandjhelm"
}, {
    type: "helmet",
    armor: 9,
    durability: 10000000,
    texture: "armor/quanda_5.png"
});
Item.createArmorItem("quandk", "Apalachia chestplate", {
    name: "quandkchest"
}, {
    type: "chestplate",
    armor: 9,
    durability: 10000000,
    texture: "armor/quanda_5.png"
});
Item.createArmorItem("quandl", "Apalachia leggings", {
    name: "quandllegs"
}, {
    type: "leggings",
    armor: 9,
    durability: 10000000,
    texture: "armor/quanda_6.png"
});
Item.createArmorItem("quandm", "Apalachia boots", {
    name: "quandmboots"
}, {
    type: "boots",
    armor: 9,
    durability: 10000000,
    texture: "armor/quanda_5.png"
});

Recipes.addShaped({
    id: ItemID.quandj,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "      ",
], ['a', ItemID.apakristal, 0]);


Recipes.addShaped({
    id: ItemID.quandk,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a ",
], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({
    id: ItemID.quandl,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({
    id: ItemID.quandm,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.apakristal, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quandj && Player.getArmorSlot(1).id == ItemID.quandk && Player.getArmorSlot(2).id == ItemID.quandl && Player.getArmorSlot(3).id == ItemID.quandm) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 28)
      }
    }
  )}
});