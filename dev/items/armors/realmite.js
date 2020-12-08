IDRegistry.genItemID("realHelmet");
IDRegistry.genItemID("realChestplate");
IDRegistry.genItemID("realLeggings");
IDRegistry.genItemID("realBoots");

Item.createArmorItem("realHelmet", "Realmite helmet", {
    name: "realmitehelm"
}, {
    type: "helmet",
    armor: 3,
    durability: 2000,
    texture: "armor/real_1.png"
});
Item.createArmorItem("realChestplate", "Realmite chestplate", {
    name: "realmitebody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 2000,
    texture: "armor/real_1.png"
});
Item.createArmorItem("realLeggings", "Realmite leggings", {
    name: "realmitelegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 2000,
    texture: "armor/real_2.png"
});
Item.createArmorItem("realBoots", "Realmite boots", {
    name: "realmiteboots"
}, {
    type: "boots",
    armor: 2,
    durability: 1960,
    texture: "armor/real_1.png"
});
Recipes.addShaped({
    id: ItemID.realHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotReal, 0]);

Recipes.addShaped({
    id: ItemID.realChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotReal, 0]);

Recipes.addShaped({
    id: ItemID.realLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotReal, 0]);

Recipes.addShaped({
    id: ItemID.realBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.ingotReal, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.realHelmet && Player.getArmorSlot(1).id == ItemID.realChestplate && Player.getArmorSlot(2).id == ItemID.realLeggings && Player.getArmorSlot(3).id == ItemID.realBoots) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 50)
      }
    }
  )}
});