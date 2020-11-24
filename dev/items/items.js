IMPORT("DivineHelper");
IMPORT("ToolLib");
IMPORT("ENV");
IMPORT("PortalUtils");

/*
Callback.addCallback('EntityDeath', function(entity, attacker, damageType) {
    if (Entity.getType(entity) == 52) {
        let coords = Entity.getPosition(entity);
        World.drop(coords.x, coords.y, coords.z, ItemID.edenClock, 1, 0)
    }
});
*/

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

ToolType.phaser = {
    damage: 0,
    blockTypes: []
}


ToolType.maul = {
    isWeapon: true,
    enchantType: Native.EnchantType.weapon,
    damage: 8,
    blockTypes: ["fibre", "corweb"],
    onAttack: function(item, mob) {}
}

ToolType.blade = {
    isWeapon: true,
    enchantType: Native.EnchantType.weapon,
    damage: 12,
    blockTypes: ["fibre", "corweb"],
    onAttack: function(item, mob) {}
}

IDRegistry.genItemID("ingotReal");
IDRegistry.genItemID("ingotArl");
IDRegistry.genItemID("ingotRup");
IDRegistry.genItemID("crabclaw");
IDRegistry.genItemID("cyclopeye");
IDRegistry.genItemID("smesh");
IDRegistry.genItemID("divinestone");
IDRegistry.genItemID("krskin");
IDRegistry.genItemID("krscale");
IDRegistry.genItemID("shadowingot");
IDRegistry.genItemID("netheriteIngot");
IDRegistry.genItemID("netheriteChunk");
IDRegistry.genItemID("bloodgem");
IDRegistry.genItemID("shadowstone");
IDRegistry.genItemID("shadowstick");
IDRegistry.genItemID("terrastone");
IDRegistry.genItemID("iceStone");
IDRegistry.genItemID("iceShard");
IDRegistry.genItemID("moltenShard");
IDRegistry.genItemID("moltenStone");
IDRegistry.genItemID("corruptShard");
IDRegistry.genItemID("corruptStone");
IDRegistry.genItemID("twilightClock");
Item.createItem("ingotReal", "Реалмитовый слиток", {
    name: "realmiteingot"
});
Item.createItem("bloodgem", "Камень крови", {
    name: "bloodgem"
});
Item.createItem("netheriteIngot", "Незеритовый слиток", {
    name: "netheriteIngot"
});
Item.createItem("netheriteChunk", "Незеритовый кусок", {
    name: "netheriteChunk"
});
Recipes.addShaped({
    id: ItemID.netheriteChunk, count: 1, data: 0}, [
    " b ",
		"bbb",
		" b "
	], ['b', ItemID.netheriteIngot, 0]);
Item.createItem("ingotArl", "Арлемитовый слиток", {
    name: "arlemiteingot"
});
Item.createItem("ingotRup", "Рупиевый слиток", {
    name: "rupeeingot"
});
Item.createItem("crabclaw", "Crab Claw", {
    name: "crabclaw"
});
Item.createItem("cyclopeye", "Cyclops Eye", {
    name: "cyclopseye"
});
Item.createItem("smesh", "Divine Shard", {
    name: "divineShard"
});
Item.createItem("divinestone", "Divine Stone", {
    name: "divinestone"
});
Item.createItem("krscale", "Kraken Scale", {
    name: "krakenscale"
});
Item.createItem("krskin", "Kraken Skin", {
    name: "krakenskin"
});
Item.createItem("terrastone", "Terra Stone", {
    name: "terranStone"
});
Item.createItem("shadowingot", "Shadow Ingot", {
    name: "shadowing"
});
Item.createItem("shadowstone", "Shadow Stone", {
    name: "shadowstone"
});
Item.createItem("shadowstick", "Shadow Stick", {
    name: "shadowstick"
});
Item.createItem("iceStone", "Ice Stone", {
    name: "iceStone"
});
Item.createItem("iceShard", "Ice Shard", {
    name: "iceShard"
});
Item.createItem("moltenStone", "Molten Stone", {
    name: "moltenStone"
});
Item.createItem("moltenShard", "Molten Shard", {
    name: "moltenShard"
});
Item.createItem("corruptShard", "Corrupted Shard", {
    name: "corruptedShard"
});
Item.createItem("corruptStone", "Corrupted Stone", {
    name: "corruptedStone"
});
Item.createItem("twilightClock", "Сумеречные Часы", {
    name: "twilightClock"
}, {
    stack: 1
});
Recipes.addShaped({
    id: ItemID.twilightClock, count: 1, data: 0}, [
        "bbb",
        "bbb",
        "bbb"
    ], ['b', 347, 0]);
//molten
IDRegistry.genItemID("moltenSword");
Item.createItem("moltenSword", "Molten Sword", {
    name: "moltenSword",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("molt", {
    durability: 2500,
    level: 4,
    efficiency: 16,
    damage: 10,
    enchantability: 13
});
ToolAPI.setTool(ItemID.moltenSword, "molt", ToolType.sword);
//corrupt
IDRegistry.genItemID("corruptedSword");
Item.createItem("corruptedSword", "Corrupted Sword", {
    name: "corruptedSword",
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
//bedrock

//ice
IDRegistry.genItemID("iceBlade");
IDRegistry.genItemID("icePick");
Item.createItem("iceBlade", "Ice Blade", {
    name: "iceBlade",
    meta: 0
}, {
    stack: 1
});
Item.createItem("icePick", "Ice Pickaxe", {
    name: "icePick",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("ice", {
    durability: 5000,
    level: 4,
    efficiency: 18,
    damage: 25,
    enchantability: 15
});
ToolAPI.setTool(ItemID.iceBlade, "ice", ToolType.sword);
ToolAPI.setTool(ItemID.icePick, "ice", ToolType.pickaxe);
//cyclop
IDRegistry.genItemID("crabclawmaul");
Item.createItem("crabclawmaul", "Crab Claw Maul", {
    name: "crabclawmaul",
    meta: 0
}, {
    stack: 1
});
ToolAPI.setTool(ItemID.crabclawmaul, "divine", ToolType.sword);
//crab
IDRegistry.genItemID("cyclopSword");
Item.createItem("cyclopSword", "Cyclopsian Sword", {
    name: "cyclopsiansword",
    meta: 0
}, {
    stack: 1
});
ToolAPI.setTool(ItemID.cyclopSword, "divine", ToolType.sword);

Recipes.addShaped({
    id: ItemID.cyclopSword,
    count: 1,
    data: 0
}, [
    "b",
    "b",
    "d"
], ['b', ItemID.cyclopeye, 0, 'd', 280, 0]);

//massivnec
//shadow
IDRegistry.genItemID("massivnic");
Item.createItem("massivnic", "Massivence", {
    name: "massivence"
}, {
    stack: 1
});
ToolAPI.setTool(ItemID.massivnic, "real", ToolType.maul);
Recipes.addShaped({
    id: ItemID.massivnic,
    count: 1,
    data: 0
}, [
    "b",
    "cbc",
    "d"
], ['b', ItemID.shadowstone, 0, 'd', 280, 0, 'c', ItemID.ingotRup, 0]);
//terrain
IDRegistry.genItemID("terranDagger");
IDRegistry.genItemID("terranMaul");
IDRegistry.genItemID("terranKnife");
Item.createItem("terranDagger", "Terran Dagger", {
    name: "terranDagger"
}, {
    stack: 1
});
Item.createItem("terranMaul", "Terran Maul", {
    name: "terranMaul"
}, {
    stack: 1
});
Item.createItem("terranKnife", "Terran Knife", {
    name: "terranKnife"
}, {
    stack: 1
});
ToolAPI.addToolMaterial("terra", {
    durability: 1500,
    level: 4,
    efficiency: 27,
    damage: 6,
    enchantability: 13
});
ToolAPI.addToolMaterial("terraone", {
    durability: 2000,
    level: 4,
    efficiency: 27,
    damage: 12,
    enchantability: 13
});
ToolAPI.setTool(ItemID.terranDagger, "terra", ToolType.sword);
ToolAPI.setTool(ItemID.terranMaul, "terra", ToolType.maul);
ToolAPI.setTool(ItemID.terranKnife, "terraone", ToolType.maul);
//RecipeTerranSwords
Recipes.addShaped({
    id: ItemID.terranDagger,
    count: 1,
    data: 0
}, [
    "b",
    "d"
], ['b', ItemID.terrastone, 0, 'd', 280, 0]);
Recipes.addShaped({
    id: ItemID.terranMaul,
    count: 1,
    data: 0
}, [
    " b ",
    "10000000b",
    " d "
], ['b', ItemID.terrastone, 0, 'd', 280, 0]);
Recipes.addShaped({
    id: ItemID.shadowstick,
    count: 1,
    data: 0
}, [
    "bb"
], ['b', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.terranKnife,
    count: 1,
    data: 0
}, [
    "b b",
    "10000000b",
    " d "
], ['b', ItemID.terrastone, 0, 'd', 280, 0]);
//shadow
IDRegistry.genItemID("shadowSaber");
Item.createItem("shadowSaber", "Shadow Saber", {
    name: "shadowSaber"
}, {
    stack: 1
});
ToolAPI.setTool(ItemID.shadowSaber, "terra", ToolType.maul);
Recipes.addShaped({
    id: ItemID.shadowSaber,
    count: 1,
    data: 0
}, [
    "b",
    "b",
    "d"
], ['b', ItemID.shadowstone, 0, 'd', 280, 0]);

//corrupt
IDRegistry.genItemID("corptHelm");
IDRegistry.genItemID("corptChest");
IDRegistry.genItemID("corptLegs");
IDRegistry.genItemID("corptBoots");

Item.createArmorItem("corptHelm", "Corrupted Helmet", {
    name: "corruptedHelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Item.createArmorItem("corptChest", "Corrupted Chestplate", {
    name: "corruptedChestplate"
}, {
    type: "chestplate",
    armor: 7,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Item.createArmorItem("corptLegs", "Corrupted Leggings", {
    name: "corruptedLeggings"
}, {
    type: "leggings",
    armor: 4,
    durability: 6000,
    texture: "armor/corrupted_2.png"
});
Item.createArmorItem("corptBoots", "Corrupted Boots", {
    name: "corruptedBoots"
}, {
    type: "boots",
    armor: 2,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});

//shadow
IDRegistry.genItemID("shadowHelmet");
IDRegistry.genItemID("shadowChestplate");
IDRegistry.genItemID("shadowLeggings");
IDRegistry.genItemID("shadowBoots");

Item.createArmorItem("shadowHelmet", "Shadow Helmet", {
    name: "shadowhelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/shadow_1.png"
});
Item.createArmorItem("shadowChestplate", "Shadow Chestplate", {
    name: "shadowbody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 10000000,
    texture: "armor/shadow_1.png"
});
Item.createArmorItem("shadowLeggings", "Shadow Leggings", {
    name: "shadowlegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 10000000,
    texture: "armor/shadow_2.png"
});
Item.createArmorItem("shadowBoots", "Shadow Boots", {
    name: "shadowboots"
}, {
    type: "boots",
    armor: 2,
    durability: 10000000,
    texture: "armor/shadow_1.png"
});

//kraken
IDRegistry.genItemID("krHelmet");
IDRegistry.genItemID("krChestplate");
IDRegistry.genItemID("krLeggings");
IDRegistry.genItemID("krBoots");

Item.createArmorItem("krHelmet", "Kraken Helmet", {
    name: "krakenhelmet"
}, {
    type: "helmet",
    armor: 2,
    durability: 5000,
    texture: "armor/kraken_1.png"
});
Item.createArmorItem("krChestplate", "Kraken Chestplate", {
    name: "krakenbody"
}, {
    type: "chestplate",
    armor: 6,
    durability: 5000,
    texture: "armor/kraken_1.png"
});
Item.createArmorItem("krLeggings", "Kraken Leggings", {
    name: "krakenlegs"
}, {
    type: "leggings",
    armor: 4,
    durability: 5000,
    texture: "armor/kraken_2.png"
});
Item.createArmorItem("krBoots", "Kraken Boots", {
    name: "krakenboots"
}, {
    type: "boots",
    armor: 1,
    durability: 5000,
    texture: "armor/kraken_1.png"
});

IDRegistry.genItemID("trHelmet");
IDRegistry.genItemID("trChestplate");
IDRegistry.genItemID("trLeggings");
IDRegistry.genItemID("trBoots");
Item.createArmorItem("trHelmet", "Terran Helmet", {
    name: "terranHelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 5000,
    texture: "armor/terran_1.png"
});
Item.createArmorItem("trChestplate", "Terran Chestplate", {
    name: "terranChestplate"
}, {
    type: "chestplate",
    armor: 7,
    durability: 5000,
    texture: "armor/terran_1.png"
});
Item.createArmorItem("trLeggings", "Terran Leggings", {
    name: "terranLeggings"
}, {
    type: "leggings",
    armor: 5,
    durability: 5000,
    texture: "armor/terran_2.png"
});
Item.createArmorItem("trBoots", "Terran Boots", {
    name: "terranBoots"
}, {
    type: "boots",
    armor: 2,
    durability: 5000,
    texture: "armor/terran_1.png"
});

//worlds

IDRegistry.genItemID("quande");
IDRegistry.genItemID("quandf");
IDRegistry.genItemID("quandg");
IDRegistry.genItemID("quandh");
Item.createArmorItem("quande", "Шлем дикого леса", {
    name: "quandehelm"
}, {
    type: "helmet",
    armor: 8,
    durability: 3000,
    texture: "armor/quanda_3.png"
});
Item.createArmorItem("quandf", "Нагрудник дикого леса", {
    name: "quandfchest"
}, {
    type: "chestplate",
    armor: 8,
    durability: 3100,
    texture: "armor/quanda_3.png"
});
Item.createArmorItem("quandg", "Штаны дикого леса", {
    name: "quandglegs"
}, {
    type: "leggings",
    armor: 8,
    durability: 3050,
    texture: "armor/quanda_4.png"
});
Item.createArmorItem("quandh", "Ботинки дикого леса", {
    name: "quandhboots"
}, {
    type: "boots",
    armor: 8,
    durability: 3000,
    texture: "armor/quanda_3.png"
});


IDRegistry.genItemID("quandj");
IDRegistry.genItemID("quandk");
IDRegistry.genItemID("quandl");
IDRegistry.genItemID("quandm");
Item.createArmorItem("quandj", "Шлем апалачия", {
    name: "quandjhelm"
}, {
    type: "helmet",
    armor: 9,
    durability: 3500,
    texture: "armor/quanda_5.png"
});
Item.createArmorItem("quandk", "Нагрудник апалачия", {
    name: "quandkchest"
}, {
    type: "chestplate",
    armor: 9,
    durability: 3700,
    texture: "armor/quanda_5.png"
});
Item.createArmorItem("quandl", "Штаны апалачии", {
    name: "quandllegs"
}, {
    type: "leggings",
    armor: 9,
    durability: 3700,
    texture: "armor/quanda_6.png"
});
Item.createArmorItem("quandm", "Ботинки апалачии", {
    name: "quandmboots"
}, {
    type: "boots",
    armor: 9,
    durability: 3500,
    texture: "armor/quanda_5.png"
});


IDRegistry.genItemID("quandn");
IDRegistry.genItemID("quando");
IDRegistry.genItemID("quandp");
IDRegistry.genItemID("quandq");
Item.createArmorItem("quandn", "Шлем небесного терна", {
    name: "quandnhelm"
}, {
    type: "helmet",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_7.png"
});
Item.createArmorItem("quando", "Нагрудник небесного терна", {
    name: "quandochest"
}, {
    type: "chestplate",
    armor: 10,
    durability: 4200,
    texture: "armor/quanda_7.png"
});
Item.createArmorItem("quandp", "Штаны небесного терна", {
    name: "quandplegs"
}, {
    type: "leggings",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_8.png"
});
Item.createArmorItem("quandq", "Ботинки небесного терна", {
    name: "quandqboots"
}, {
    type: "boots",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_7.png"
});

IDRegistry.genItemID("quandr");
IDRegistry.genItemID("quands");
IDRegistry.genItemID("quandt");
IDRegistry.genItemID("quandu");
Item.createArmorItem("quandr", "Шлем мортума", {
    name: "quandrhelm"
}, {
    type: "helmet",
    armor: 12,
    durability: 4500,
    texture: "armor/quanda_9.png"
});
Item.createArmorItem("quands", "Нагрудник мортума", {
    name: "quandschest"
}, {
    type: "chestplate",
    armor: 12,
    durability: 5000,
    texture: "armor/quanda_9.png"
});
Item.createArmorItem("quandt", "Штаны мортума", {
    name: "quandtlegs"
}, {
    type: "leggings",
    armor: 12,
    durability: 5000,
    texture: "armor/quanda_10.png"
});
Item.createArmorItem("quandu", "Ботинки мортума", {
    name: "quanduboots"
}, {
    type: "boots",
    armor: 12,
    durability: 4500,
    texture: "armor/quanda_9.png"
});


IDRegistry.genItemID("quandv");
IDRegistry.genItemID("quandw");
IDRegistry.genItemID("quandx");
IDRegistry.genItemID("quandy");
Item.createArmorItem("quandv", " Халитовый Шлем", {
    name: "quandvhelm"
}, {
    type: "helmet",
    armor: 20,
    durability: 5100,
    texture: "armor/quanda_11.png"
});
Item.createArmorItem("quandw", "Халитовый нагрудник", {
    name: "quandwchest"
}, {
    type: "chestplate",
    armor: 20,
    durability: 5500,
    texture: "armor/quanda_11.png"
});
Item.createArmorItem("quandx", "Халитовые штаны", {
    name: "quandxlegs"
}, {
    type: "leggings",
    armor: 20,
    durability: 5500,
    texture: "armor/quanda_12.png"
});
Item.createArmorItem("quandy", "Халитовые ботинки ", {
    name: "quandyboots"
}, {
    type: "boots",
    armor: 20,
    durability: 5200,
    texture: "armor/quanda_11.png"
});

IDRegistry.genItemID("apalazisword");
IDRegistry.genItemID("apalazipickaxe");
IDRegistry.genItemID("apalazishovel");
IDRegistry.genItemID("apalaziaxe");
Item.createItem("apalazisword", "апалачивый меч", {
    name: "apalazisword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalazishovel", "апалачивая лопата", {
    name: "apalazishovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalazipickaxe", "апалачивая кирка", {
    name: "apalazipickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalaziaxe", "апалачивый тапор", {
    name: "apalaziaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("apalazi", {
    durability: 3500,
    level: 4,
    efficiency: 30,
    damage: 30,
    enchantability: 13
});
ToolAPI.setTool(ItemID.apalazisword, "apalazi", ToolType.sword);
ToolAPI.setTool(ItemID.apalazishovel, "apalazi", ToolType.shovel);
ToolAPI.setTool(ItemID.apalazipickaxe, "apalazi", ToolType.pickaxe);
ToolAPI.setTool(ItemID.apalaziaxe, "apalazi", ToolType.axe);

IDRegistry.genItemID("azurisword");
IDRegistry.genItemID("azuripickaxe");
IDRegistry.genItemID("azurishovel");
IDRegistry.genItemID("azuriaxe");
Item.createItem("azurisword", "меч дикого леса", {
    name: "azurisword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azurishovel", "лопата дикого леса", {
    name: "azurishovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azuripickaxe", " кирка дикого леса", {
    name: "azuripickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azuriaxe", "тапор дикого леса", {
    name: "azuriaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("azuri", {
    durability: 2500,
    level: 4,
    efficiency: 27,
    damage: 28,
    enchantability: 13
});
ToolAPI.setTool(ItemID.azurisword, "azuri", ToolType.sword);
ToolAPI.setTool(ItemID.azurishovel, "azuri", ToolType.shovel);
ToolAPI.setTool(ItemID.azuripickaxe, "azuri", ToolType.pickaxe);
ToolAPI.setTool(ItemID.azuriaxe, "azuri", ToolType.axe);


IDRegistry.genItemID("ternsword");
IDRegistry.genItemID("ternpickaxe");
IDRegistry.genItemID("ternshovel");
IDRegistry.genItemID("ternaxe");
Item.createItem("ternsword", "меч неберного терна", {
    name: "ternsword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("ternshovel", "лопата небесного терна", {
    name: "ternshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("ternpickaxe", " кирка небесного терна", {
    name: "ternpickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("ternaxe", "тапор небесного терна", {
    name: "ternaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("tern", {
    durability: 4500,
    level: 4,
    efficiency: 44,
    damage: 32,
    enchantability: 13
});
ToolAPI.setTool(ItemID.ternsword, "tern", ToolType.sword);
ToolAPI.setTool(ItemID.ternshovel, "tern", ToolType.shovel);
ToolAPI.setTool(ItemID.ternpickaxe, "tern", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ternaxe, "tern", ToolType.axe);

IDRegistry.genItemID("morsword");
IDRegistry.genItemID("morpickaxe");
IDRegistry.genItemID("morshovel");
IDRegistry.genItemID("moraxe");
Item.createItem("morsword", "меч мортума", {
    name: "morsword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("morshovel", "лопата мортума", {
    name: "morshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("morpickaxe", " кирка мортума", {
    name: "morpickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("moraxe", "топор мортума", {
    name: "moraxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("mor", {
    durability: 5000,
    level: 4,
    efficiency: 55,
    damage: 34,
    enchantability: 13
});
ToolAPI.setTool(ItemID.morsword, "mor", ToolType.sword);
ToolAPI.setTool(ItemID.morshovel, "mor", ToolType.shovel);
ToolAPI.setTool(ItemID.morpickaxe, "mor", ToolType.pickaxe);
ToolAPI.setTool(ItemID.moraxe, "mor", ToolType.axe);

IDRegistry.genItemID("halsword");
Item.createItem("halsword", "Халитовый клинок", {
    name: "halsword",
    meta: 0
}, {
    stack: 1
});


ToolAPI.addToolMaterial("hal", {
    durability: 2000,
    level: 4,
    efficiency: 15,
    damage: 36,
    enchantability: 13
});
ToolAPI.setTool(ItemID.halsword, "hal", ToolType.sword);



IDRegistry.genItemID("edemfrag");
Item.createItem("edemfrag", "Дравитовый Фрагмент", {
    name: "edemfrag"
});

IDRegistry.genItemID("edemkusok");
Item.createItem("edemkusok", "Дравитовый Самоцвет", {
    name: "edemkusok"
});

IDRegistry.genItemID("edemkristal");
Item.createItem("edemkristal", "Дравитовый Кусок", {
    name: "edemkristal"
});

IDRegistry.genItemID("lesfrag");
Item.createItem("lesfrag", "Азуритовый Фрагмент", {
    name: "lesfrag"
});

IDRegistry.genItemID("leskusok");
Item.createItem("leskusok", "Азуритовый Самоцвет", {
    name: "leskusok"
});

IDRegistry.genItemID("leskristal");
Item.createItem("leskristal", "Азуритовый кусок", {
    name: "leskristal"
});

IDRegistry.genItemID("apafrag");
Item.createItem("apafrag", "Увитовый Фрагмент", {
    name: "apafrag"
});

IDRegistry.genItemID("apakusok");
Item.createItem("apakusok", "Увитовый Самоцвет", {
    name: "apakusok"
});

IDRegistry.genItemID("apakristal");
Item.createItem("apakristal", "Увитовый Кусок", {
    name: "apakristal"
});

IDRegistry.genItemID("ternfrag");
Item.createItem("ternfrag", "Мифриловый Фрагмент", {
    name: "ternfrag"
});

IDRegistry.genItemID("ternkusok");
Item.createItem("ternkusok", "Мифриловый Самоцвет", {
    name: "ternkusok"
});

IDRegistry.genItemID("ternkristal");
Item.createItem("ternkristal", "Мифриловый кусок", {
    name: "ternkristal"
});

IDRegistry.genItemID("morfrag");
Item.createItem("morfrag", "Фрагмент Мортума", {
    name: "morfrag"
});

IDRegistry.genItemID("morkusok");
Item.createItem("morkusok", "Осколок Мортума", {
    name: "morkusok"
});

IDRegistry.genItemID("morkristal");
Item.createItem("morkristal", "Кристалл Мортума", {
    name: "morkristal"
});

Recipes.addShaped({
    id: ItemID.edemkusok,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.edemfrag, 0]);

Recipes.addShaped({
    id: ItemID.edemkristal,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.edemkusok, 0]);

Recipes.addShaped({
    id: ItemID.leskusok,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.lesfrag, 0]);

Recipes.addShaped({
    id: ItemID.lesfrag,
    count: 9,
    data: 0
}, [
    "   ",
    "xxx",
    "    "
], ['x', ItemID.edemkristal, 0]);

Recipes.addShaped({
    id: ItemID.leskristal,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.leskusok, 0]);

Recipes.addShaped({
    id: ItemID.azuripickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.azurisword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.azuriaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.azurishovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.leskristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.quande,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "      ",
], ['a', ItemID.leskristal, 0]);


Recipes.addShaped({
    id: ItemID.quandf,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a ",
], ['a', ItemID.leskristal, 0]);

Recipes.addShaped({
    id: ItemID.quandg,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.leskristal, 0]);

Recipes.addShaped({
    id: ItemID.quandh,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.leskristal, 0]);


Recipes.addShaped({
    id: ItemID.apakusok,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.apafrag, 0]);

Recipes.addShaped({
    id: ItemID.apafrag,
    count: 9,
    data: 0
}, [
    "   ",
    "xxx",
    "    "
], ['x', ItemID.leskristal, 0]);

Recipes.addShaped({
    id: ItemID.apakristal,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.apakusok, 0]);

Recipes.addShaped({
    id: ItemID.apalazipickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.apalazisword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.apalaziaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.apalazishovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.apakristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.quandj,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "      ",
], ['a', ItemID.apakristal, 0]);


Recipes.addShaped({
    id: ItemID.quandk,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a ",
], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({
    id: ItemID.quandl,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a",
], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({
    id: ItemID.quandm,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    "  "
], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({
    id: ItemID.ternkusok,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.ternfrag, 0]);

Recipes.addShaped({
    id: ItemID.ternfrag,
    count: 9,
    data: 0
}, [
    "   ",
    "xxx",
    "    "
], ['x', ItemID.apakristal, 0]);

Recipes.addShaped({
    id: ItemID.ternkristal,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.ternkusok, 0]);

Recipes.addShaped({
    id: ItemID.ternpickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.ternsword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.ternaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.ternshovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);

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

Recipes.addShaped({
    id: ItemID.morkusok,
    count: 7,
    data: 0
}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.morfrag, 0]);

Recipes.addShaped({
    id: ItemID.morfrag,
    count: 9,
    data: 0
}, [
    "   ",
    "xxx",
    "    "
], ['x', ItemID.ternkristal, 0]);

Recipes.addShaped({
    id: ItemID.morkristal,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.morkusok, 0]);

Recipes.addShaped({
    id: ItemID.morpickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.morkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.morsword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.morkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.moraxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.morkristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.morshovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.morkristal, 0, 'b', 280, 0]);

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

Recipes.addShaped({
    id: ItemID.halsword,
    count: 1,
    data: 0
}, [
    " a ",
    "bab",
    " c "
], ['a', ItemID.morsword, 0, 'b', 388, 0, 'c', 280, 0]);


Recipes.addShaped({
    id: ItemID.quandv,
    count: 1,
    data: 0
}, [
    " b",
    " a ",
    "  "
], ['a', ItemID.quandr, 0, 'b', 388, 0]);

Recipes.addShaped({
    id: ItemID.quandw,
    count: 1,
    data: 0
}, [
    " b",
    " a ",
    "  "
], ['a', ItemID.quands, 0, 'b', 388, 0]);

Recipes.addShaped({
    id: ItemID.quandx,
    count: 1,
    data: 0
}, [
    "    ",
    " a ",
    " b "
], ['a', ItemID.quandt, 0, 'b', 388, 0]);

Recipes.addShaped({
    id: ItemID.quandy,
    count: 1,
    data: 0
}, [
    "    ",
    " a ",
    " b "
], ['a', ItemID.quandu, 0, 'b', 388, 0]);

Recipes.addShaped({
    id: ItemID.ingotArl,
    count: 9,
    data: 0
}, [
    "x"
], ['x', BlockID.arlemiteBlock, 0]);
Recipes.addShaped({
    id: ItemID.ingotReal,
    count: 9,
    data: 0
}, [
    "x"
], ['x', BlockID.realmiteBlock, 0]);
Recipes.addShaped({
    id: ItemID.ingotRup,
    count: 9,
    data: 0
}, [
    "x"
], ['x', BlockID.rupeeBlock, 0]);
Recipes.addShaped({
    id: BlockID.arlemiteBlock,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx",
], ['x', ItemID.ingotArl, 0]);
Recipes.addShaped({
    id: BlockID.realmiteBlock,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx",
], ['x', ItemID.ingotReal, 0]);
Recipes.addShaped({
    id: BlockID.rupeeBlock,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx",
], ['x', ItemID.ingotRup, 0]);
Recipes.addShaped({
    id: ItemID.divinestone,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx",
], ['x', ItemID.smesh, 0]);
Recipes.addShaped({
    id: BlockID.arlemiteLamp,
    count: 1,
    data: 0
}, [
    "xxx",
    "xbx",
    "xxx",
], ['x', ItemID.ingotArl, 0, 'b', 89, 0]);
Recipes.addShaped({
    id: BlockID.rupeeLamp,
    count: 1,
    data: 0
}, [
    "xxx",
    "xbx",
    "xxx",
], ['x', ItemID.ingotRup, 0, 'b', 89, 0]);
Recipes.addShaped({
    id: BlockID.lapisLamp,
    count: 1,
    data: 0
}, [
    "xxx",
    "xbx",
    "xxx",
], ['x', 351, 4, 'b', 89, 0]);
Recipes.addShaped({
    id: BlockID.goldLamp,
    count: 1,
    data: 0
}, [
    "xxx",
    "xbx",
    "xxx",
], ['x', 266, 0, 'b', 89, 0]);
Recipes.addShaped({
    id: ItemID.shadowingot,
    count: 1,
    data: 0
}, [
    "xb",
], ['x', ItemID.ingotReal, 0, 'b', ItemID.ingotRup, 0]);
Recipes.addShaped({
    id: ItemID.krskin,
    count: 1,
    data: 0
}, [
    "xx",
    "xx",
], ['x', 351, 0]);
Recipes.addShaped({
    id: ItemID.krscale,
    count: 1,
    data: 0
}, [
    "xx",
    "xx",
], ['x', ItemID.krskin, 0]);
Recipes.addShaped({
    id: ItemID.shadowstone,
    count: 1,
    data: 0
}, [
    "x x",
    " b ",
    "x x",
], ['x', ItemID.shadowingot, 0, 'b', 264, 0]);
//shadowarmors
Recipes.addShaped({
    id: ItemID.shadowHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.shadowstone, 0]);

Recipes.addShaped({
    id: ItemID.shadowChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.shadowstone, 0]);

Recipes.addShaped({
    id: ItemID.shadowLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.shadowstone, 0]);

Recipes.addShaped({
    id: ItemID.shadowBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.shadowstone, 0]);

//kraken
Recipes.addShaped({
    id: ItemID.krHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.krscale, 0]);

Recipes.addShaped({
    id: ItemID.krChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.krscale, 0]);

Recipes.addShaped({
    id: ItemID.krLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.krscale, 0]);

Recipes.addShaped({
    id: ItemID.krBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.krscale, 0]);

Recipes.addShaped({
    id: ItemID.trHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.terrastone, 0]);

Recipes.addShaped({
    id: ItemID.trChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.terrastone, 0]);

Recipes.addShaped({
    id: ItemID.trLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.terrastone, 0]);

Recipes.addShaped({
    id: ItemID.trBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.terrastone, 0]);

Recipes.addShaped({
    id: ItemID.iceBlade,
    count: 1,
    data: 0
}, [
    "a a",
    "a a",
    " b "
], ['a', ItemID.iceStone, 0, 'b', ItemID.shadowstick, 0]);

Recipes.addShaped({
    id: ItemID.icePick,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.iceStone, 0, 'b', ItemID.shadowstick, 0]);

Recipes.addShaped({
    id: ItemID.iceStone,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.iceShard, 0]);

Recipes.addShaped({
    id: ItemID.moltenStone,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.moltenShard, 0]);

Recipes.addShaped({
    id: ItemID.moltenSword,
    count: 1,
    data: 0
}, [
    " x ",
    " x ",
    " b "
], ['x', ItemID.moltenStone, 0, 'b', ItemID.shadowstick, 0]);

Recipes.addShaped({
    id: ItemID.corruptStone,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.corruptShard, 0]);

Recipes.addShaped({
    id: ItemID.corptHelm,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.corruptStone, 0]);

Recipes.addShaped({
    id: ItemID.corptChest,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.corruptStone, 0]);

Recipes.addShaped({
    id: ItemID.corptLegs,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.corruptStone, 0]);

Recipes.addShaped({
    id: ItemID.corptBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x",
], ['x', ItemID.corruptStone, 0]);

IDRegistry.genItemID("angel");
Item.createItem("angel", "Angelic Crystal", {
    name: "angelian_crystal"
});
Recipes.addShaped({
    id: ItemID.angel,
    count: 1,
    data: 0
}, [
    " xb "
], ['x', ItemID.morkristal, 0, 'b', 388, 0]);
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
Item.createArmorItem("angel1", "Angel Helmet", {
    name: "angelicHelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_1.png"
});
Item.createArmorItem("angel2", "Angel Chestplate", {
    name: "angelicChestplate"
}, {
    type: "chestplate",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_1.png"
});
Item.createArmorItem("angel3", "Angel Leggins", {
    name: "angelicLeggings"
}, {
    type: "leggings",
    armor: 3,
    durability: 10000000,
    texture: "armor/angelic_2.png"
});
Item.createArmorItem("angel4", "Angel Boots", {
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

Recipes.addFurnace(BlockID.arlemiteOre, ItemID.ingotArl, 0);
Recipes.addFurnace(BlockID.realmiteOre, ItemID.ingotReal, 0);
Recipes.addFurnace(BlockID.rupeeOre, ItemID.ingotRup, 0)

var portalGenerationHelper1 = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generatePortal:function(crds, block){
        var block = {
            frame: BlockID.divineStone,
            portal: BlockID.edenPortal
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);                
            this.p(crds.x, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x, crds.y, crds.z+2,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+2,
                block.frame);
            }if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);           
            this.p(crds.x, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x, crds.y, crds.z+2,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+2,
                block.frame);                 
            }
      }
}

var portalGenerationHelper2 = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generatePortal:function(crds, block){
        var block = {
            frame: BlockID.edenBlock,
            portal: BlockID.wildwoodPortal
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);               
            this.p(crds.x, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x, crds.y, crds.z+2,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+2,
                block.frame);
            }if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);               
            this.p(crds.x, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x, crds.y, crds.z+2,
                block.frame);
            this.p(crds.x+1, crds.y, crds.z+2,
                block.frame);
            }
      }
}
