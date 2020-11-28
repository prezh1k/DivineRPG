Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.angel1 && Player.getArmorSlot(1).id == ItemID.angel2 && Player.getArmorSlot(2).id == ItemID.angel3 && Player.getArmorSlot(3).id == ItemID.angel4) {
        UIbuttons.enableButton("fly_on_button");
    }
})

Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.angel1 && Player.getArmorSlot(1).id == ItemID.angel2 && Player.getArmorSlot(2).id == ItemID.angel3 && Player.getArmorSlot(3).id == ItemID.angel4) {
        UIbuttons.enableButton("button_fly");
    }
});
//registerArmor
IDRegistry.genItemID("angel1");
IDRegistry.genItemID("angel2");
IDRegistry.genItemID("angel3");
IDRegistry.genItemID("angel4");
Item.createArmorItem("angel1", "Angel helmet", {
    name: "angelicHelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_1.png"
});
Item.createArmorItem("angel2", "Angel chestplate", {
    name: "angelicChestplate"
}, {
    type: "chestplate",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_1.png"
});
Item.createArmorItem("angel3", "Angel leggins", {
    name: "angelicLeggings"
}, {
    type: "leggings",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_2.png"
});
Item.createArmorItem("angel4", "Angel boots", {
    name: "angelicBoots"
}, {
    type: "boots",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_1.png"
});

Recipes.addShaped({
    id: ItemID.angel1,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.angel, 0]);

Recipes.addShaped({
    id: ItemID.angel2,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.angel, 0]);

Recipes.addShaped({
    id: ItemID.angel3,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.angel, 0]);

Recipes.addShaped({
    id: ItemID.angel4,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.angel, 0]);