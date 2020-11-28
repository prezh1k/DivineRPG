IDRegistry.genItemID("quanda");
IDRegistry.genItemID("quandb");
IDRegistry.genItemID("quandc");
IDRegistry.genItemID("quandd");
Item.createArmorItem("quanda", "Eden helmet", {
    name: "quandahelm"
}, {
    type: "helmet",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_1.png"
});
Item.createArmorItem("quandb", "Eden chestplate", {
    name: "quandbchest"
}, {
    type: "chestplate",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_1.png"
});
Item.createArmorItem("quandc", "Eden leggings", {
    name: "quandclegs"
}, {
    type: "leggings",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_2.png"
});
Item.createArmorItem("quandd", "Eden boots", {
    name: "quanddboots"
}, {
    type: "boots",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_1.png"
});

Recipes.addShaped({
    id: ItemID.quanda,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "   ",
], ['a', ItemID.edemkristal, 0]);


Recipes.addShaped({
    id: ItemID.quandb,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa ",
    " a ",
], ['a', ItemID.edemkristal, 0]);

Recipes.addShaped({
    id: ItemID.quandc,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.edemkristal, 0]);

Recipes.addShaped({
    id: ItemID.quandd,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.edemkristal, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quanda && Player.getArmorSlot(1).id == ItemID.quandb && Player.getArmorSlot(2).id == ItemID.quandc && Player.getArmorSlot(3).id == ItemID.quandd) {
        Entity.addEffect(Player.get(), 5, 10, 2, false, false);
    }
    
})