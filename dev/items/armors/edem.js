IDRegistry.genItemID("quanda");
IDRegistry.genItemID("quandb");
IDRegistry.genItemID("quandc");
IDRegistry.genItemID("quandd");
Item.createArmorItem("quanda", "Шлем эдема", {
    name: "quandahelm"
}, {
    type: "helmet",
    armor: 6,
    durability: 2000,
    texture: "armor/quanda_1.png"
});
Item.createArmorItem("quandb", "Нагрудник эдема", {
    name: "quandbchest"
}, {
    type: "chestplate",
    armor: 6,
    durability: 2500,
    texture: "armor/quanda_1.png"
});
Item.createArmorItem("quandc", "Штаны эдема", {
    name: "quandclegs"
}, {
    type: "leggings",
    armor: 6,
    durability: 2400,
    texture: "armor/quanda_2.png"
});
Item.createArmorItem("quandd", "Ботинки эдема", {
    name: "quanddboots"
}, {
    type: "boots",
    armor: 6,
    durability: 2000,
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