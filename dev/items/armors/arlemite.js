IDRegistry.genItemID("arlHelmet");
IDRegistry.genItemID("arlChestplate");
IDRegistry.genItemID("arlLeggings");
IDRegistry.genItemID("arlBoots");

Item.createArmorItem("arlHelmet", "Arlemite helmet", {
    name: "arlemitehelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 2000,
    texture: "armor/arlemite_1.png"
});
Item.createArmorItem("arlChestplate", "Arlemite chestplate", {
    name: "arlemitebody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 2000,
    texture: "armor/arlemite_1.png"
});
Item.createArmorItem("arlLeggings", "Arlemite leggings", {
    name: "arlemitelegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 2000,
    texture: "armor/arlemite_2.png"
});
Item.createArmorItem("arlBoots", "Arlemite boots", {
    name: "arlemiteboots"
}, {
    type: "boots",
    armor: 2,
    durability: 2000,
    texture: "armor/arlemite_1.png"
});
Recipes.addShaped({
    id: ItemID.arlHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotArl, 0]);

Recipes.addShaped({
    id: ItemID.arlChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotArl, 0]);

Recipes.addShaped({
    id: ItemID.arlLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotArl, 0]);

Recipes.addShaped({
    id: ItemID.arlBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.ingotArl, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.arlHelmet && Player.getArmorSlot(1).id == ItemID.arlChestplate && Player.getArmorSlot(2).id == ItemID.arlLeggings && Player.getArmorSlot(3).id == ItemID.arlBoots) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, Math.floor((damageValue / 100) *  40));
      }
    }
  )}
});