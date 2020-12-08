IDRegistry.genItemID("bedrHelmet");
IDRegistry.genItemID("bedrChestplate");
IDRegistry.genItemID("bedrLeggings");
IDRegistry.genItemID("bedrBoots");

Item.createArmorItem("bedrHelmet", "Bedrock helmet", {
    name: "bedrockhelm"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/bedrock_1.png"
});
Item.createArmorItem("bedrChestplate", "Bedrock chestplate", {
    name: "bedrockch"
}, {
    type: "chestplate",
    armor: 8,
    texture: "armor/bedrock_1.png"
});
Item.createArmorItem("bedrLeggings", "Bedrocl leggings", {
    name: "bedrockleg"
}, {
    type: "leggings",
    armor: 5,
    durability: 10000000,
    texture: "armor/bedrock_2.png"
});
Item.createArmorItem("bedrBoots", "Bedrock boots", {
    name: "bedrockboots"
}, {
    type: "boots",
    armor: 2,
    durability: 10000000,
    texture: "armor/bedrock_1.png"
});
Recipes.addShaped({
    id: ItemID.bedrHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', 7, 0]);

Recipes.addShaped({
    id: ItemID.bedrChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', 7, 0]);

Recipes.addShaped({
    id: ItemID.bedrLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', 7, 0]);

Recipes.addShaped({
    id: ItemID.bedrBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', 7, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.bedrHelmet && Player.getArmorSlot(1).id == ItemID.bedrChestplate && Player.getArmorSlot(2).id == ItemID.bedrLeggings && Player.getArmorSlot(3).id == ItemID.bedrBoots) {
      Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
          if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 25)
      }
    }
  )}
});