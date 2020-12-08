IMPORT("DivineHelper");
IMPORT("ToolLib");
IMPORT("ENV");

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
IDRegistry.genItemID("misteriousClock");
Item.createItem("ingotReal", "Realmite ingot", {
    name: "realmiteingot"
});
Item.createItem("bloodgem", "Blood gem", {
    name: "bloodgem"
});
Item.createItem("netheriteIngot", "Netherite ingot", {
    name: "netheriteIngot"
});
Item.createItem("netheriteChunk", "Netherite chunk", {
    name: "netheriteChunk"
});
Recipes.addShaped({
    id: ItemID.netheriteChunk, count: 1, data: 0}, [
    " b ",
		"bbb",
		" b "
	], ['b', ItemID.netheriteIngot, 0]);
Item.createItem("ingotArl", "Arlemite ingot", {
    name: "arlemiteingot"
});
Item.createItem("ingotRup", "Rupee ingot", {
    name: "rupeeingot"
});
Item.createItem("crabclaw", "Crab claw", {
    name: "crabclaw"
});
Item.createItem("cyclopeye", "Cyclop eye", {
    name: "cyclopseye"
});
Item.createItem("smesh", "Divine shard", {
    name: "divineShard"
});
Item.createItem("divinestone", "Divine stone", {
    name: "divinestone"
});
Item.createItem("krscale", "Kraken scale", {
    name: "krakenscale"
});
Item.createItem("krskin", "Kraken skin", {
    name: "krakenskin"
});
Item.createItem("terrastone", "Terra Stone", {
    name: "terranStone"
});
Item.createItem("shadowingot", "Shadow ingot", {
    name: "shadowing"
});
Item.createItem("shadowstone", "Shadow stone", {
    name: "shadowstone"
});
Item.createItem("shadowstick", "Shadow stick", {
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
Item.createItem("corruptShard", "Corrupted shard", {
    name: "corruptedShard"
});
Item.createItem("corruptStone", "Corrupted stone", {
    name: "corruptedStone"
});
Item.createItem("twilightClock", "Twilight clock", {
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
Item.createItem("misteriousClock", "Mysterious clock", {
    name: "mysteriousClock"
}, {
    stack: 1
});
Recipes.addShaped({
    id: ItemID.misteriousClock, count: 1, data: 0}, [
        " c ",
        "bab",
        " b"
    ], ['b',ItemID.corruptStone, 0, 'a', 347, 0, 'c', ItemID.netherIngot, 0]);
Item.registerUseFunction("misteriousClock", function(coords, item, block, player){
  let b = BlockSource.getDefaultForActor(player);
  let mob = b.spawnEntity(coords.x, coords.y, coords.z, "divine:ancient_entity")
  Player.decreaseCarriedItem();
});

Recipes.addShaped({
    id: ItemID.shadowingot,
    count: 1,
    data: 0
}, [
    "bc"
], ['b', ItemID.ingotArl, 0, 'c', ItemID.ingotRup, 0]);
Recipes.addShaped({
    id: ItemID.shadowstone,
    count: 1,
    data: 0
}, [
    "bb",
    "bb"
], ['b', ItemID.shadowingot, 0]);


IDRegistry.genItemID("halsword");
Item.createItem("halsword", "Halite sword", {
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
Item.createItem("edemfrag", "Eden fragments", {
    name: "edemfrag"
});

IDRegistry.genItemID("edemkusok");
Item.createItem("edemkusok", "Eden gem", {
    name: "edemkusok"
});

IDRegistry.genItemID("edemkristal");
Item.createItem("edemkristal", "Eden chunk", {
    name: "edemkristal"
});

IDRegistry.genItemID("lesfrag");
Item.createItem("lesfrag", "Wildwood fragments", {
    name: "lesfrag"
});

IDRegistry.genItemID("leskusok");
Item.createItem("leskusok", "Wildwood gem", {
    name: "leskusok"
});

IDRegistry.genItemID("leskristal");
Item.createItem("leskristal", "Wildwood chunk", {
    name: "leskristal"
});

IDRegistry.genItemID("apafrag");
Item.createItem("apafrag", "Apalachia fragments", {
    name: "apafrag"
});

IDRegistry.genItemID("apakusok");
Item.createItem("apakusok", "Apalachia gem", {
    name: "apakusok"
});

IDRegistry.genItemID("apakristal");
Item.createItem("apakristal", "Apalachia chunk", {
    name: "apakristal"
});

IDRegistry.genItemID("ternfrag");
Item.createItem("ternfrag", "Skythern fragments", {
    name: "ternfrag"
});

IDRegistry.genItemID("ternkusok");
Item.createItem("ternkusok", "Skythern gem", {
    name: "ternkusok"
});

IDRegistry.genItemID("ternkristal");
Item.createItem("ternkristal", "Skytherm chunk", {
    name: "ternkristal"
});

IDRegistry.genItemID("morfrag");
Item.createItem("morfrag", "Mortum fragments", {
    name: "morfrag"
});

IDRegistry.genItemID("morkusok");
Item.createItem("morkusok", "Mortum gem", {
    name: "morkusok"
});

IDRegistry.genItemID("morkristal");
Item.createItem("morkristal", "Mortum chunk", {
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
    id: ItemID.halsword,
    count: 1,
    data: 0
}, [
    " a ",
    "bab",
    " c "
], ['a', ItemID.morsword, 0, 'b', 388, 0, 'c', 280, 0]);

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
    id: ItemID.corruptStone,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.corruptShard, 0]);

