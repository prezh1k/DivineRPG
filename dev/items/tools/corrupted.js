ToolType.maul = {
    isWeapon: true,
    enchantType: Native.EnchantType.weapon,
    damage: 15,
    blockTypes: ["fibre", "corweb"],
    onAttack: function(item, mob) {}
}
IDRegistry.genItemID("corruptedSword");
IDRegistry.genItemID("corruptedPickaxe");
IDRegistry.genItemID("corruptedAxe");
IDRegistry.genItemID("corruptedShovel");
IDRegistry.genItemID("corruptedMaul");
Item.createItem("corruptedSword", "Приносящий смерть", {
    name: "deathBringer",
    meta: 0
}, {
    stack: 1
});
Item.createItem("corruptedPickaxe", "Поврежденная кирка", {
    name: "corruptedPickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("corruptedAxe", "Поврежденный топор", {
    name: "corruptedAxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("corruptedShovel", "Поврежденная лопата", {
    name: "corruptedShovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("corruptedMaul", "Поврежденная кувалда", {
    name: "corruptedMaul",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("crpt", {
    durability: 6000,
    level: 4,
    efficiency: 16,
    damage: 25,
    enchantability: 13
});
ToolAPI.setTool(ItemID.corruptedSword, "crpt", ToolType.sword);
ToolAPI.setTool(ItemID.corruptedPickaxe, "crpt", ToolType.pickaxe);
ToolAPI.setTool(ItemID.corruptedAxe, "crpt", ToolType.axe);
ToolAPI.setTool(ItemID.corruptedShovel, "crpt", ToolType.shovel);
ToolAPI.setTool(ItemID.corruptedMaul, "crpt", ToolType.maul);
Recipes.addShaped({
    id: ItemID.corruptedSword,
    count: 1,
    data: 0
}, [
    " a ",
    "aba",
    " b "
], ['a', ItemID.corruptStone, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.corruptedPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.corruptStone, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.corruptedAxe,
    count: 1,
    data: 0
}, [
    "aa ",
    "ab ",
    " b "
], ['a', ItemID.corruptStone, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.corruptedShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.corruptStone, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.corruptedMaul,
    count: 1,
    data: 0
}, [
    "aaa",
    "aba",
    " b "
], ['a', ItemID.corruptStone, 0, 'b', 280, 0]);
