IDRegistry.genItemID("quandr");
IDRegistry.genItemID("quands");
IDRegistry.genItemID("quandt");
IDRegistry.genItemID("quandu");
Item.createArmorItem("quandr", "Mortum helmet", {
    name: "quandrhelm"
}, {
    type: "helmet",
    armor: 12,
    durability: 10000000,
    texture: "armor/quanda_9.png"
});
Item.createArmorItem("quands", "Mortum chestplate", {
    name: "quandschest"
}, {
    type: "chestplate",
    armor: 12,
    durability: 10000000,
    texture: "armor/quanda_9.png"
});
Item.createArmorItem("quandt", "Mortum leggings", {
    name: "quandtlegs"
}, {
    type: "leggings",
    armor: 12,
    durability: 10000000,
    texture: "armor/quanda_10.png"
});
Item.createArmorItem("quandu", "Mortum boots", {
    name: "quanduboots"
}, {
    type: "boots",
    armor: 12,
    durability: 10000000,
    texture: "armor/quanda_9.png"
});
Recipes.addShaped({
    id: ItemID.quandr,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "      ",
], ['a', ItemID.morkristal, 0]);


Recipes.addShaped({
    id: ItemID.quands,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a ",
], ['a', ItemID.morkristal, 0]);

Recipes.addShaped({
    id: ItemID.quandt,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.morkristal, 0]);

Recipes.addShaped({
    id: ItemID.quandu,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.morkristal, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quandr && Player.getArmorSlot(1).id == ItemID.quands && Player.getArmorSlot(2).id == ItemID.quandt && Player.getArmorSlot(3).id == ItemID.quandu) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 20)
      }
    }
  )}
});