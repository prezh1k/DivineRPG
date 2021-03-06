IDRegistry.genItemID("netherIngot")
Item.createItem("netherIngot", "Nether ingot", {
    name: "netherIngot"
});
Recipes.addShaped({
    id: ItemID.netherIngot, count: 1, data: 0}, [
		"ab"
	], ['a', ItemID.shadowingot, 0, 'b', ItemID.netheriteChunk,0]);
	
IDRegistry.genItemID("netherHelmet");
IDRegistry.genItemID("netherChestplate");
IDRegistry.genItemID("netherLeggings");
IDRegistry.genItemID("netherBoots");

Item.createArmorItem("netherHelmet", "Nether helmet", {
    name: "netheriteHelmet"
}, {
    type: "helmet",
    armor: 6,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Item.createArmorItem("netherChestplate", "Nether chestplate", {
    name: "netheriteChestplate"
}, {
    type: "chestplate",
    armor: 15,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Item.createArmorItem("netherLeggings", "Nether leggings", {
    name: "netheriteLeggins"
}, {
    type: "leggings",
    armor: 10,
    durability: 5000,
    texture: "armor/netherite_2.png"
});
Item.createArmorItem("netherBoots", "Nether boots", {
    name: "netheriteBoots"
}, {
    type: "boots",
    armor: 4,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Recipes.addShaped({
    id: ItemID.netherHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "a a",
    "x x"
], ['x', ItemID.netheriteChunk, 0, 'a', ItemID.shadowingot,0]);

Recipes.addShaped({
    id: ItemID.netherChestplate,
    count: 1,
    data: 0
}, [
    "xax",
    "xax",
    " x "
], ['x', ItemID.netheriteChunk, 0, 'a', ItemID.shadowingot,0]);

Recipes.addShaped({
    id: ItemID.netherLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "a a",
    "x x"
], ['x', ItemID.netheriteChunk, 0, 'a', ItemID.shadowingot, 0]);

Recipes.addShaped({
    id: ItemID.netherBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "a a"
], ['a', ItemID.netheriteChunk, 0, 'x', ItemID.shadowingot,0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.netherHelmet && Player.getArmorSlot(1).id == ItemID.netherChestplate && Player.getArmorSlot(2).id == ItemID.netherLeggings && Player.getArmorSlot(3).id == ItemID.netherBoots) {
        Entity.addEffect(Player.get(), 12, 10, 20,false, false);
        Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
        if (victim == Player.get()) {
            Game.prevent();
            Entity.damageEntity(victim, (damageValue / 100) * 50)
        }
       }
     )
    }
});