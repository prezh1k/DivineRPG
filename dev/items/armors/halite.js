IDRegistry.genItemID("quandv");
IDRegistry.genItemID("quandw");
IDRegistry.genItemID("quandx");
IDRegistry.genItemID("quandy");
Item.createArmorItem("quandv", "Halite helmet", {
    name: "quandvhelm"
}, {
    type: "helmet",
    armor: 20,
    durability: 10000000,
    texture: "armor/quanda_11.png"
});
Item.createArmorItem("quandw", "Halite chestplate", {
    name: "quandwchest"
}, {
    type: "chestplate",
    armor: 20,
    durability: 10000000,
    texture: "armor/quanda_11.png"
});
Item.createArmorItem("quandx", "Halite leggings", {
    name: "quandxlegs"
}, {
    type: "leggings",
    armor: 20,
    durability: 10000000,
    texture: "armor/quanda_12.png"
});
Item.createArmorItem("quandy", "Halite boots", {
    name: "quandyboots"
}, {
    type: "boots",
    armor: 20,
    durability: 10000000,
    texture: "armor/quanda_11.png"
});
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quandv && Player.getArmorSlot(1).id == ItemID.quandw && Player.getArmorSlot(2).id == ItemID.quandx && Player.getArmorSlot(3).id == ItemID.quandy) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()){
          Game.prevent();
          Entity.damageEntity(victim, Math.floor((damageValue / 200) *  17));
        if (attacker == Player.get()){
          Game.prevent();
          Entity.damageEntity(victim, damageValue + 24)
        }
      }
    }
  )}
});