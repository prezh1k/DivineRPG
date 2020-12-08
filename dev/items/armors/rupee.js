IDRegistry.genItemID("rupHelmet");
IDRegistry.genItemID("rupChestplate");
IDRegistry.genItemID("rupLeggings");
IDRegistry.genItemID("rupBoots");

Item.createArmorItem("rupHelmet", "Rupee helmet", {
    name: "rupeehelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/rupee_1.png"
});
Item.createArmorItem("rupChestplate", "Rupee chestplate", {
    name: "rupeebody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 10000000,
    texture: "armor/rupee_1.png"
});
Item.createArmorItem("rupLeggings", "Rupee leggings", {
    name: "rupeelegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 10000000,
    texture: "armor/rupee_2.png"
});
Item.createArmorItem("rupBoots", "Rupee boots", {
    name: "rupeeboots"
}, {
    type: "boots",
    armor: 2,
    durability: 10000000,
    texture: "armor/rupee_1.png"
});
Recipes.addShaped({
    id: ItemID.rupHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotRup, 0]);

Recipes.addShaped({
    id: ItemID.rupChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotRup, 0]);

Recipes.addShaped({
    id: ItemID.rupLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotRup, 0]);

Recipes.addShaped({
    id: ItemID.rupBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.ingotRup, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.rupHelmet && Player.getArmorSlot(1).id == ItemID.rupChestplate && Player.getArmorSlot(2).id == ItemID.rupLeggings && Player.getArmorSlot(3).id == ItemID.rupBoots) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 45)
      }
      if (victim == Player.get()){
        if (damageType == 2){
          Game.prevent();
          Entity.damageEntity(victim, (damageValue / 100) * 15)
        }
      }
    }
  )}
});