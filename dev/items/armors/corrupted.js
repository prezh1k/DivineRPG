IDRegistry.genItemID("corptHelm");
IDRegistry.genItemID("corptChest");
IDRegistry.genItemID("corptLegs");
IDRegistry.genItemID("corptBoots");

Item.createArmorItem("corptHelm", "Corrupted helmet", {
    name: "corruptedHelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Item.createArmorItem("corptChest", "Corrupted chestplate", {
    name: "corruptedChestplate"
}, {
    type: "chestplate",
    armor: 7,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Item.createArmorItem("corptLegs", "Corrupted chestplate", {
    name: "corruptedLeggings"
}, {
    type: "leggings",
    armor: 4,
    durability: 6000,
    texture: "armor/corrupted_2.png"
});
Item.createArmorItem("corptBoots", "Corrupted boots", {
    name: "corruptedBoots"
}, {
    type: "boots",
    armor: 2,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Recipes.addShaped({
    id: ItemID.corptHelm,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a"
], ['a', ItemID.corruptStone, 0]);
Recipes.addShaped({
    id: ItemID.corptChest,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a "
], ['a', ItemID.corruptStone, 0]);
Recipes.addShaped({
    id: ItemID.corptLegs,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.corruptStone, 0]);
Recipes.addShaped({
    id: ItemID.corptBoots,
    count: 1,
    data: 0
}, [
    "a a",
    "a a"
], ['a', ItemID.corruptStone, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.corptHelmet && Player.getArmorSlot(1).id == ItemID.corptChestplate && Player.getArmorSlot(2).id == ItemID.corptLeggings && Player.getArmorSlot(3).id == ItemID.corptBoots) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 40)
      }
    }
  )}
});