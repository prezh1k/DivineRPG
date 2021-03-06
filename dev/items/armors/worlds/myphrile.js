IDRegistry.genItemID("quandn");
IDRegistry.genItemID("quando");
IDRegistry.genItemID("quandp");
IDRegistry.genItemID("quandq");
Item.createArmorItem("quandn", "Skythern helmet", {
    name: "quandnhelm"
}, {
    type: "helmet",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_7.png"
});
Item.createArmorItem("quando", "Skythern chestplate", {
    name: "quandochest"
}, {
    type: "chestplate",
    armor: 10,
    durability: 4200,
    texture: "armor/quanda_7.png"
});
Item.createArmorItem("quandp", "Skythern leggings", {
    name: "quandplegs"
}, {
    type: "leggings",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_8.png"
});
Item.createArmorItem("quandq", "Skythern boots", {
    name: "quandqboots"
}, {
    type: "boots",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_7.png"
});
Recipes.addShaped({
    id: ItemID.quandn,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "      ",
], ['a', ItemID.ternkristal, 0]);


Recipes.addShaped({
    id: ItemID.quando,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a ",
], ['a', ItemID.ternkristal, 0]);

Recipes.addShaped({
    id: ItemID.quandp,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.ternkristal, 0]);

Recipes.addShaped({
    id: ItemID.quandq,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.ternkristal, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quandn && Player.getArmorSlot(1).id == ItemID.quando && Player.getArmorSlot(2).id == ItemID.quandp && Player.getArmorSlot(3).id == ItemID.quandq) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 25)
      }
      if (victim == Player.get()){
        if (damageType == 5){
          Game.prevent()
        }
      }
         Entity.addEffect(Player.get(), 8, 4, 20, false, false);
    }
  )}
})