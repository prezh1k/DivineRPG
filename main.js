/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 37
*/



// file: blocks/blocks.js

IMPORT("DivineHelper");
IMPORT("ToolLib");
IMPORT("ENV");
IMPORT("TileRender");
IMPORT("Structures")

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    base: 5,
    destroytime: 0.5,
});

var BLOCK_TYPE_SAPLING = Block.createSpecialType({
    base: 6,
    destroyTime: 0, 
    explosionResistance: 0,
    renderLayer: 4,
    rendertype: 1,
    lightOpacity: 0
})

var BLOCK_TYPE_LOG = Block.createSpecialType({
    base: 17,
    solid: true,
    destroyTime: 1,
    explosionResistance: 10,
    lightOpacity: 15,
    renderLayer: 2,
    translucency: 0
});

var BLOCK_TYPE_BRUSH = Block.createSpecialType({
    destroytime: 0.1});

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
    explosionResistance: 1,
    renderLayer: 1,
    lightOpacity: 4,
    translucency: 4,
    solid: false,
    sound: "grass"
});

var BLOCK_Type_ORE = Block.createSpecialType({
	base: 1,
	destroytime: 1,
	opaque: true,
}, "ore");

var LampType = Block.createSpecialType({
	lightlevel: 10
});


var GlassType = Block.createSpecialType({
	lightlevel: 1,
	lightopacity: 0,
	renderlayer: 4
});

IDRegistry.genBlockID("realmiteBlock");
Block.createBlock("realmiteBlock", [
	{name: "Realmite Block", texture: [["realmiteblock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.realmiteBlock, "stone", 3);
Block.registerDropFunction("realmiteBlock", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.realmiteBlock, 1, 0]]
	}
	return [];
}, 2);

Recipes.addShaped({id: 7, count: 3, data: 0}, [
    "aaa",
    "aba",
    " aa"
  ], ['a', 49, 0, 'b', BlockID.rupeeBlock, 0]);

IDRegistry.genBlockID("edenBlock");
Block.createBlock("edenBlock", [
	{name: "Дравитовый Блок", texture: [["edenBlock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.arlemiteBlock, "stone", 3);
Recipes.addShaped({id: BlockID.edenBlock, count: 1, data: 0}, [
		"bbb",
		"bbb",
		"bbb"
	], ['b', ItemID.edemfrag, 0]);

IDRegistry.genBlockID("arlemiteBlock");
Block.createBlock("arlemiteBlock", [
	{name: "Arlemite Block", texture: [["arlemiteblock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.arlemiteBlock, "stone", 3);
Block.registerDropFunction("arlemiteBlock", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.arlemiteBlock, 1, 0]]
	}
	return [];
}, 2);

IDRegistry.genBlockID("rupeeBlock");
Block.createBlock("rupeeBlock", [
	{name: "Rupee Block", texture: [["rupeeblock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.rupeeBlock, "stone", 3);
Block.registerDropFunction("rupeeBlock", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[BlockID.rupeeBlock, 1, 0]]
	}
	return [];
}, 2);

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



IDRegistry.genBlockID("arlemiteLamp");
Block.createBlock("arlemiteLamp", [
	{name: "Arlemite Lamp", texture: [["arlemitelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.arlemiteLamp, "stone", 2);

IDRegistry.genBlockID("rupeeLamp");
Block.createBlock("rupeeLamp", [
	{name: "Rupee Lamp", texture: [["rupeelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.rupeeLamp, "stone", 2);

IDRegistry.genBlockID("goldLamp");
Block.createBlock("goldLamp", [
	{name: "Gold Lamp", texture: [["goldlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.goldLamp, "stone", 2);

IDRegistry.genBlockID("lapisLamp");
Block.createBlock("lapisLamp", [
	{name: "Lapis Lamp", texture: [["lapislamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.lapisLamp, "stone", 2);

IDRegistry.genBlockID("redsLamp");
Block.createBlock("redsLamp", [
	{name: "Redstone Lamp", texture: [["redstonelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.redsLamp, "stone", 2);

IDRegistry.genBlockID("realLamp");
Block.createBlock("realLamp", [
	{name: "Realmite Lamp", texture: [["realmitelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.realLamp, "stone", 2);

IDRegistry.genBlockID("endLamp");
Block.createBlock("endLamp", [
	{name: "Ender Lamp", texture: [["enderLamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.endLamp, "stone", 2);

IDRegistry.genBlockID("blazeLamp");
Block.createBlock("blazeLamp", [
	{name: "Blaze Lamp", texture: [["blazelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.blazeLamp, "stone", 2);

IDRegistry.genBlockID("lavaLamp");
Block.createBlock("lavaLamp", [
	{name: "Lava Lamp", texture: [["lavalamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.lavaLamp, "stone", 2);

IDRegistry.genBlockID("diamondLamp");
Block.createBlock("diamondLamp", [
	{name: "Diamond Lamp", texture: [["diamondlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.diamondLamp, "stone", 2);

IDRegistry.genBlockID("krakLamp");
Block.createBlock("krakLamp", [
	{name: "Kraken Lamp", texture: [["krakenlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.krakenLamp, "stone", 2);
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


IDRegistry.genBlockID("ironBrick");
Block.createBlock("ironBrick", [
	{name: "Iron Brick", texture: [["ironBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.ironBrick, "stone", 2);
Recipes.addShaped({id: BlockID.ironBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 265, 0]);
	

IDRegistry.genBlockID("goldBrick");
Block.createBlock("goldBrick", [
	{name: "Gold Brick", texture: [["goldBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.goldBrick, "stone", 2);
Recipes.addShaped({id: BlockID.goldBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 266, 0]);
IDRegistry.genBlockID("lapisBrick");
Block.createBlock("lapisBrick", [
	{name: "Lapis Brick", texture: [["lapisBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.lapisBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lapisBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 351, 4]);
IDRegistry.genBlockID("lavaBrick");
Block.createBlock("lavaBrick", [
	{name: "Lava Brick", texture: [["lavaBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.lavaBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', 325, 10]);
IDRegistry.genBlockID("diamBrick");
Block.createBlock("diamBrick", [
	{name: "Iron Brick", texture: [["diamondBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.diamBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', 264, 0]);
IDRegistry.genBlockID("realBrick");
Block.createBlock("realBrick", [
	{name: "Realmite Brick", texture: [["realmiteBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.realBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', ItemID.ingotReal, 0]);
IDRegistry.genBlockID("arleBrick");
Block.createBlock("arleBrick", [
	{name: "Arlemite Brick", texture: [["arlemiteBricks", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.arleBrick, count: 1, data: 0}, ["bb","bb "], ['b',ItemID.ingotArl, 0]);
ToolAPI.registerBlockMaterial(BlockID.arleBrick, "stone", 2);

IDRegistry.genBlockID("edenGrass");
Block.createBlockWithRotation("edenGrass", [
	{name: "Земля с травой Эдема", texture: [["edenGrass", 0], ["edenGrass", 1], ["edenGrass", 0], ["edenGrass", 0], ["edenGrass", 0], ["edenGrass", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.edenGrass, "dirt", 0, true);
Block.registerDropFunction("edenGrass", function(){
return [[BlockID.edenDirt, 1, 0]];});

IDRegistry.genBlockID("edenLog");
Block.createBlockWithRotation("edenLog", [
	{name: "Древесина Эдема", texture: [["edenLog", 1], ["edenLog", 1], ["edenLog", 0], ["edenLog", 0], ["edenLog", 0], ["edenLog", 0]], inCreative: true}], BLOCK_TYPE_LOG);

IDRegistry.genBlockID("twilightStone");
Block.createBlock("twilightStone", [
	{name: "Сумеречный камень", texture: [["twilightStone", 0]], inCreative: true} 
]);
ToolAPI.registerBlockMaterial(BlockID.twilightStone, "stone", 0);
Block.setDestroyTime(BlockID.twilightStone,1)
IDRegistry.genBlockID("divineStone");
Block.createBlock("divineStone", [
	{name: "Божественный камень", texture: [["divinestone", 0]], inCreative: true} 
]);
Block.setDestroyTime(BlockID.divineStone,1)


IDRegistry.genBlockID("edenDirt");
Block.createBlock("edenDirt", [
	{name: "Земля Эдема", texture: [["edenDirt", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.edenDirt, 0.5);
ToolAPI.registerBlockMaterial(BlockID.edenDirt, "dirt", 0, true);

IDRegistry.genBlockID("edenLeaves");
Block.createBlock("edenLeaves", [
	{name: "Листва Дерева эдема", texture: [["edenLeaves", 0]], inCreative: false},
	{name: "Листва Дерева эдема", texture: [["edenLeaves", 0]], inCreative: false},
	{name: "Листва Дерева эдема", texture: [["edenLeaves", 0]], inCreative: true}
], {
	base: 18,
	destroytime: 0.2,
	explosionres: 1,
	renderallfaces: true, 
	renderlayer: 1,
	lightopacity: 1,
	translucency: 0.5
});
Block.registerDropFunction("edenLeaves", function(coords, blockID, blockData, level, enchant){
	if(level > 0 || Player.getCarriedItem().id == 359){
		return [[blockID, 1, 2]];
	}
	if(Math.random() < .1){
		return [[ItemID.edenSapling, 1, 0]]
	}
	return [];
});
ToolAPI.registerBlockMaterial(BlockID.edenLeaves, "plant");
Block.registerDropFunction("edenLeaves",
   function(){
return 0;
});
function checkLeaves(x, y, z, explored){
	let blockID = World.getBlockID(x, y, z);
	if(blockID == BlockID.edenLog){
		return true;
	}
	if(blockID == BlockID.edenLeaves){
		explored[x+':'+y+':'+z] = true;
	}
	return false;
}

function checkLeavesFor6Sides(x, y, z, explored){
	return checkLeaves(x-1, y, z, explored) ||
	checkLeaves(x+1, y, z, explored) ||
	checkLeaves(x, y, z-1, explored) ||
	checkLeaves(x, y, z+1, explored) ||
	checkLeaves(x, y-1, z, explored) ||
	checkLeaves(x, y+1, z, explored);
}

function updateLeaves(x, y, z){
	for(let xx = x - 1; xx <= x + 1; xx++){
		for(let yy = y - 1; yy <= y + 1; yy++){
			for(let zz = z - 1; zz <= z + 1; zz++){
				let block = World.getBlock(xx, yy, zz);
				if(block.id == BlockID.edenLeaves && block.data == 0){
					World.setBlock(xx, yy, zz, BlockID.edenLeaves, 1);
				}
			}
		}
	}
};

Callback.addCallback("DestroyBlock", function(coords, block, player){
	updateLeaves(coords.x, coords.y, coords.z);
});


IDRegistry.genBlockID("edenBrush");
Block.createBlock("edenBrush", [
    {name: "Трава Эдема", texture:
        [["edenBrush", 0]], inCreative:
        true}], BLOCK_TYPE_BRUSH);
ToolAPI.registerBlockMaterial(BlockID.edenBrush, "plant");
TileRenderer.setPlantModel(BlockID.edenBrush, 0, "edenBrush", 0);

IDRegistry.genBlockID("edenPlanks");
Block.createBlock("edenPlanks", [
    {name: "Доски Эдема", texture:
        [["edenPlanks", 0]], inCreative: 
        true}], BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.edenPlanks, "wood");
Recipes.addShaped({id: BlockID.edenPlanks, count: 4, data: 0},
["a"], ["a", BlockID.edenLog, 0]);

IDRegistry.genBlockID("wildwoodDirt");
Block.createBlock("wildwoodDirt", [
    {name: "Азуритовая земля", texture:
        [["wildwoodDirt", 0]], inCreative:
        true}], "opaque");
Block.setDestroyTime(BlockID.wildwoodDirt, 0.5);
ToolAPI.registerBlockMaterial(BlockID.wildwoodDirt, "dirt", 0, true);

IDRegistry.genBlockID("wildwoodGrass");
Block.createBlockWithRotation("wildwoodGrass", [
	{name: "Земля с травой Эдема", texture: [["wildwoodGrass", 0], ["wildwoodGrass", 1], ["wildwoodGrass", 0], ["wildwoodGrass", 0], ["wildwoodGrass", 0], ["wildwoodGrass", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.wildwoodGrass, "dirt", 0, true);
Block.registerDropFunction("wildwoodGrass", function(){
return [[BlockID.wildwoodDirt, 1, 0]];});

IDRegistry.genBlockID("wildwoodLog");
Block.createBlockWithRotation("wildwoodLog", [
	{name: "Азуритовая Древесина", texture: [["wildwoodLog", 1], ["wildwoodLog", 1], ["wildwoodLog", 0], ["wildwoodLog", 0], ["wildwoodLog", 0], ["wildwoodLog", 0]], inCreative: true}], BLOCK_TYPE_LOG,"opaque");

IDRegistry.genBlockID("wildwoodTallgrassTop");
Block.createBlock("wildwoodTallgrassTop", [
    {name: "Высокая трава Дикого Леса", texture:
        [["wildwoodTallgrassTop", 0]], inCreative:
        false}], BLOCK_TYPE_LEAVES);
ToolAPI.registerBlockMaterial(BlockID.wildwoodTallgrass1, "plant");
TileRenderer.setPlantModel(BlockID.wildwoodTallgrass1, 0, "wildwoodTallgrassTop", 0);
Block.registerDropFunction("wildwoodTallgrassTop", function(){
return 0;
});
TileRenderer.setPlantModel(BlockID.wildwoodTallgrassTop, 0, "wildwoodTallgrassTop", 0);


IDRegistry.genBlockID("wildwoodTallgrassBottom");
Block.createBlock("wildwoodTallgrassBottom", [
    {name: "Высокая трава Дикого Леса", texture:
        [["wildwoodTallgrassBottom", 0]], inCreative:
        false}], BLOCK_TYPE_LEAVES);
ToolAPI.registerBlockMaterial(BlockID.wildwoodTallgrass, "plant");
TileRenderer.setPlantModel(BlockID.wildwoodTallgrass, 0, "wildwoodTallgrassBottom", 0);
Block.registerDropFunction("wildwoodTallgrassBottom", function(){
return 0;
});
TileRenderer.setPlantModel(BlockID.wildwoodTallgrassBottom, 0, "wildwoodTallgrassBottom", 0);

IDRegistry.genBlockID("wildwoodLeaves");
Block.createBlock("wildwoodLeaves", [
	{name: "Листва Азуритового дерева", texture: [["wildwoodLeaves", 0]], inCreative: false},
	{name: "Листва Азуритового дерева", texture: [["wildwoodLeaves", 0]], inCreative: false},
	{name: "Листва Азуритового дерева", texture: [["wildwoodLeaves", 0]], inCreative: true}
], {
	base: 18,
	destroytime: 0.2,
	explosionres: 1,
	renderallfaces: true, 
	renderlayer: 1,
	lightopacity: 1,
	translucency: 0.5
});
Block.registerDropFunction("wildwoodLeaves", function(coords, blockID, blockData, level, enchant){
	if(level > 0 || Player.getCarriedItem().id == 359){
		return [[blockID, 1, 2]];
	}
	if(Math.random() < .1){
		return [[ItemID.wildwoodSapling, 1, 0]]
	}
	return [];
});
ToolAPI.registerBlockMaterial(BlockID.edenLeaves, "plant");
Block.registerDropFunction("wildwoodLeaves",
   function(){
return 0;
});
function checkLeaves(x, y, z, explored){
	let blockID = World.getBlockID(x, y, z);
	if(blockID == BlockID.wildwoodLog){
		return true;
	}
	if(blockID == BlockID.edenLeaves){
		explored[x+':'+y+':'+z] = true;
	}
	return false;
}

function checkLeavesFor6Sides(x, y, z, explored){
	return checkLeaves(x-1, y, z, explored) ||
	checkLeaves(x+1, y, z, explored) ||
	checkLeaves(x, y, z-1, explored) ||
	checkLeaves(x, y, z+1, explored) ||
	checkLeaves(x, y-1, z, explored) ||
	checkLeaves(x, y+1, z, explored);
}

function updateLeaves(x, y, z){
	for(let xx = x - 1; xx <= x + 1; xx++){
		for(let yy = y - 1; yy <= y + 1; yy++){
			for(let zz = z - 1; zz <= z + 1; zz++){
				let block = World.getBlock(xx, yy, zz);
				if(block.id == BlockID.wildwoodLeaves && block.data == 0){
					World.setBlock(xx, yy, zz, BlockID.wildwoodLeaves, 1);
				}
			}
		}
	}
};

var DIRT_TILES = {
	2: true,
	3: true,
	60: true
};
IDRegistry.genItemID("edenSapling");
Item.createItem("edenSapling", "Саженец божественного дерева", {
    name: "edenSapling"
}, {
    isTech: true,
    stack: 64
});
IDRegistry.genBlockID("edenSapling");
Block.createBlock("edenSapling", [
    {name: "Саженец Дерева эдема", texture:
        [["edenSapling", 0]], inCreative:
        true}], BLOCK_TYPE_SAPLING);
ToolAPI.registerBlockMaterial(BlockID.edenSapling, "plant");
Block.registerDropFunction("edenLeaves", function(coords, blockID, blockData, level, enchant){
	if(level > 0 || Player.getCarriedItem().id == 359){
		return [[blockID, 1, 2]];
	}
	if(Math.random() < .1){
		return [[ItemID.edenSapling, 1, 0]]
	}
	return [];
});
TileRenderer.setPlantModel(BlockID.edenSapling, 0, "edenSapling", 0);
Item.registerUseFunction("edenSapling", function(coords, item, block){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (World.canTileBeReplaced(tile1.id, tile1.data) && DIRT_TILES[tile2.id]) {
		World.setBlock(place.x, place.y, place.z, BlockID.edenSapling);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.playSound(place.x, place.y, place.z, "dig.grass", 1, 0.8)
	}
});
Block.registerDropFunction("edenSapling", function(){
    return [[ItemID.edenSapling, 1, 0]];
});

let regi = BlockSource.getCurrentWorldGenRegion();
Block.setRandomTickCallback(BlockID.edenSapling, function(x, y, z){
	if(!DIRT_TILES[World.getBlockID(x, y-1, z)]){
		World.destroyBlock(x, y, z, true);
	}
	else if(Math.random() < 0.3 && World.getLightLevel(x, y, z) >= 9){
		edentree.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, random, regi);
	}
});
Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.edenSapling){
		World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
	}
});


IDRegistry.genItemID("wildwoodSapling");
Item.createItem("wildwoodSapling", "Саженец азуритового дерева", {
    name: "wildwoodSapling"
}, {
    isTech: true,
    stack: 64
});
IDRegistry.genBlockID("wildwoodSapling");
Block.createBlock("wildwoodSapling", [
    {name: "Саженец Азуритового дерева", texture:
        [["wildwoodSapling", 0]], inCreative:
        true}], BLOCK_TYPE_SAPLING);
ToolAPI.registerBlockMaterial(BlockID.edenSapling, "plant");
Block.registerDropFunction("wildwoodLeaves", function(coords, blockID, blockData, level, enchant){
	if(level > 0 || Player.getCarriedItem().id == 359){
		return [[blockID, 1, 2]];
	}
	if(Math.random() < .1){
		return [[ItemID.wildwoodSapling, 1, 0]]
	}
	return [];
});
TileRenderer.setPlantModel(BlockID.wildwoodSapling, 0, "wildwoodSapling", 0);
Item.registerUseFunction("wildwoodSapling", function(coords, item, block){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (World.canTileBeReplaced(tile1.id, tile1.data) && DIRT_TILES[tile2.id]) {
		World.setBlock(place.x, place.y, place.z, BlockID.wildwoodSapling);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.playSound(place.x, place.y, place.z, "dig.grass", 1, 0.8)
	}
});
Block.registerDropFunction("wildwoodSapling", function(){
    return [[ItemID.wildwoodSapling, 1, 0]];
});
Block.setRandomTickCallback(BlockID.wildwoodSapling, function(x, y, z){
	if(!DIRT_TILES[World.getBlockID(x, y-1, z)]){
		World.destroyBlock(x, y, z, true);
	}
	else if(Math.random() < 0.15 && World.getLightLevel(x, y, z) >= 9){
		wildwoodtree.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, random, regi);
	}
});
Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.edenSapling){
		World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
	}
});





// file: blocks/ores.js

IMPORT("DivineHelper");
IMPORT("ToolLib");
IMPORT("ENV");

IDRegistry.genBlockID("edenOre");
Block.createBlock("edenOre", [
	{name: "Дравитовая Руда", texture: [["edenOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.edenOre, "stone", 3);
Block.registerDropFunction("edenOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.edenOre, 1, 0)
  });
Block.setDestroyTime(BlockID.edenOre, 6);
Block.setDestroyLevel(BlockID.edenOre, 3);
Callback.addCallback("GenerateCustomDimensionChunk",function(chunkX, chunkZ, random, dimensionid){

    if(dimensionid == Aether.id){

    for (var i=0; i<10; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 96);
        GenerationUtils.generateOreCustom(c.x, c.y, c.z, BlockID.edenOre, 0, 8, true , [BlockID.twilightStone]);
    }
}});

IDRegistry.genBlockID("netheriteOre");
Block.createBlock("netheriteOre", [
	{name: "Незеритовая руда", texture: [["netherore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.netheriteOre, "stone", 3);
Block.registerDropFunction("netheriteOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.netheriteOre, 1, 0)
  });
Block.setDestroyTime(BlockID.netheriteOre, 6);
Block.setDestroyLevel(BlockID.netheriteOre, 3);
Callback.addCallback("GenerateNetherChunk",function(chunkX, chunkZ, random){
    for (var i=0; i<6; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 128);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.netheriteOre, 0, 4);
    }
});

IDRegistry.genBlockID("bloodgemOre");
Block.createBlock("bloodgemOre", [
	{name: "Каменно-кровавая руда", texture: [["bloodgemore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.bloodgemOre, "stone", 3);
Block.registerDropFunction("bloodgemOre",
function(coords, blockID, blockData, level, enchant){
  return(BlockID.bloodgemOre, 1, 0)
});
Block.setDestroyTime(BlockID.bloodgemOre, 6);
Block.setDestroyLevel(BlockID.bloodgemOre, 3);
Callback.addCallback("GenerateNetherChunk",function(chunkX, chunkZ, random){
    for (var i=0; i<6; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 128);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.bloodgemOre, 0, 4);
    }
});


IDRegistry.genBlockID("wildwoodOre");
Block.createBlock("wildwoodOre", [
	{name: "Азуритовая Руда", texture: [["wildwoodOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.wildwoodOre, "stone", 3);
Block.registerDropFunction("wildwoodOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.wildwoodOre, 1, 0)
  });
Block.setDestroyTime(BlockID.wildwoodOre, 6);
Block.setDestroyLevel(BlockID.wildwoodOre, 3);
Callback.addCallback("GenerateCustomDimensionChunk",function(chunkX, chunkZ, random, dimensionid){

    if(dimensionid == wildwood.id){

    for (var i=0; i<10; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 96);
        GenerationUtils.generateOreCustom(c.x, c.y, c.z, BlockID.wildwoodOre, 0, 8, true, [BlockID.twilightStone]);
    }
}});


IDRegistry.genBlockID("arlemiteOre");
Block.createBlock("arlemiteOre", [
	{name: "Арлемитовая Руда", texture: [["arlemiteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.arlemiteOre, "stone", 3);
Block.registerDropFunction("arlemiteOre",
function(coords, blockID, blockData, level, enchant){
  return(BlockID.arlemiteOre, 1, 0)
});
Block.setDestroyTime(BlockID.arlemiteOre, 6);
Block.setDestroyLevel(BlockID.arlemiteOre, 3);
Callback.addCallback("GenerateChunkUnderground",function(chunkX, chunkZ){
    for (var i=0; i<2; i++){
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 15);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.arlemiteOre, 0, 3);
    }
});
IDRegistry.genBlockID("realmiteOre");
Block.createBlock("realmiteOre", [
	{name: "Реалмитовая ", texture: [["realmiteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.realmiteOre, "stone", 3);
Block.registerDropFunction("realmiteOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.realmiteOre, 1, 0)
  }); 
Block.setDestroyTime(BlockID.realmiteOre, 6);
Block.setDestroyLevel(BlockID.realmiteOre, 3);
  Callback.addCallback("GenerateChunkUnderground",function(chunkX, chunkZ){
    for (var i=0; i<3; i++){
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 20);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.realmiteOre, 0, 5);
    }
});

IDRegistry.genBlockID("rupeeOre");
Block.createBlock("rupeeOre", [
	{name: "Рупиевая Руда", texture: [["rupeeore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rupeeOre, "stone", 3);
Block.registerDropFunction("rupeeOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.rupeeOre, 1, 0)
  }); 
Block.setDestroyTime(BlockID.rupeeOre, 6);
Block.setDestroyLevel(BlockID.rupeeOre, 3);
  Callback.addCallback("GenerateChunkUnderground",function(chunkX, chunkZ){
    for (var i=0; i<2; i++){
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 15);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.rupeeOre, 0, 5);
    }
});

Callback.addCallback('PostLoaded',
function (){
  Recipes.addFurnace(BlockID.bloodgemOre, ItemID.bloodgem);
  Recipes.addFurnace(BlockID.edenOre, ItemID.edemfrag);
  Recipes.addFurnace(BlockID.wildwoodOre, ItemID.lesfrag);
  Recipes.addFurnace(BlockID.netheriteOre, ItemID.netheriteIngot);
  Recipes.addFurnace(BlockID.rupeeOre, ItemID.ingotRup);
  Recipes.addFurnace(BlockID.arlemiteOre, ItemID.ingotArl);
  Recipes.addFurnace(BlockID.realmiteOre, ItemID.ingotReal);
});




// file: blocks/group.js

Item.addCreativeGroup("blocks", Translation.translate("Блоки"), [
  Block.realmiteBlock,
  Block.edenBlock,
  Block.arlemiteBlock,
  Block.rupeeBlock,
]);
 
Item.addCreativeGroup("lamps", Translation.translate("Лампы"), [
  Block.arlemiteLamp,
  Block.rupeeLamp,
  Block.goldLamp,
  Block.lapisLamp,
  Block.redsLamp,
  Block.realLamp,
  Block.endLamp,
  Block.blazeLamp,
  Block.lavaLamp,
  Block.diamondLamp,
  Block.krakLamp
]);

Item.addCreativeGroup("bricks", Translation.translate("Кирпичи"), [
  Block.ironBrick,
  Block.goldBrick,
  Block.lapisBrick,
  Block.lavaBrick,
  Block.diamBrick,
  Block.realBrick,
  Block.arleBrick
]);

Item.addCreativeGroup("ores", Translation.translate("Руды"), [
  Block.edenOre,
  Block.netheriteOre,
  Block.bloodgemOre,
  Block.wildwoodOre,
  Block.arlemiteOre,
  Block.realmiteOre,
  Block.rupeeOre,
]);




// file: dimensions/eden.js

IMPORT("PortalUtils");

var Aether = new Dimensions.CustomDimension("Aether", 1991); // (-_-)
Aether.setSkyColor(.97, .87, .7)
Aether.setFogColor(.97, .87, .7);
World.setDayMode(true);

Aether.setGenerator(Dimensions.newGenerator({
layers: [
{
minY: 0, maxY: 180,
yConversion: [[0, -.6], [0.1, -.52], [0.5, -.25], [0.7, -.25], [.85, -.24], [1, -.6]],
material: {base: BlockID.twilightStone, surface: {id:BlockID.edenDirt, data: 0, width:4}, cover: BlockID.edenGrass},
noise: {octaves: {count: 4, scale: 40, weight_factor: 3, weight: 1.28}}
}
]
}));

PortalUtils.newPortalBlock("edenPortal", ["edenPortal", 0], {type: "v-plane", frameId: BlockID.divinestone}, true);

TileEntity.registerPrototype(BlockID.edenPortal, {
tick: function(){
    Particles.addParticle(20, this.x+Math.random(), this.y+Math.random(), this.z+Math.random(), 0, 0, 0, 0);
}
});

var shapeAether = new PortalShape();
shapeAether.setPortalId(BlockID.edenPortal);
shapeAether.setFrameIds(BlockID.divineStone);
shapeAether.setMinSize(2, 3);

    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == BlockID.divineStone || block.id == BlockID.edenPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.edenPortal, [BlockID.divineStone]);
    }
}); 
Callback.addCallback("ItemUse", function(coords, item, block){ 
if(Player.getCarriedItem().id == ItemID.twilightClock) 
var rect = shapeAether.findPortal(coords.relative.x, coords.relative.y, coords.relative.z); 
 if (rect) { 
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x, coords.y+i, coords.z);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x+1, coords.y+i, coords.z);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x-1, coords.y+i, coords.z);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x, coords.y+i, coords.z+i);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x, coords.y+i, coords.z-i);
}
shapeAether.buildPortal(rect, false); 
 }
});
Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.edenPortal){
    Dimensions.transfer(Player.get(), Aether.id);
}
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.edenPortal){
    Dimensions.transfer(Player.get(), 0);
}});

Callback.addCallback('CustomDimensionTransfer', function (entity, from, to, coords) {
if (to == Aether.id) { 
var players = Network.getConnectedPlayers();
 for (var i in players) {
 var player = players[i];
 var CP = Entity.getPosition(player);
 CP = GenerationUtils.findSurface(CP.x, 89, CP.z);
 
 Updatable.addUpdatable({
 age: 0,
 update: function () {
   for (i =0; i < 256; i++) {

   if (World.getBlock(CP.x, i, CP.z) == BlockID.edenGrass){
continue;
 portalGenerationHelper1.generatePortal({x: CP.x, y: i, z: CP.z});
 Entity.setPosition(player, CP.x+1, i+2, CP.z+1);
}
  else{
  portalGenerationHelper1.generatePortal({x: CP.x, y: 140, z: CP.z});
  Entity.setPosition(player, CP.x+2, 142, CP.z+2);
 this.remove = this.age++ > 100;
  }
 }
}
})
}}
}); 

var teleport = false;
Callback.addCallback('CustomDimensionTransfer', function (entity, from, to) {
if (to == 0 && from == Aether.id) { 
var players = Network.getConnectedPlayers();
 for (var i in players) {
 var player = players[i];
 var CP = Entity.getPosition(player);
 CP = GenerationUtils.findSurface(CP.x, 78, CP.z);
 Updatable.addUpdatable({
 age: 0,
 update: function () {
Entity.setPosition(player, CP.x, CP.y+4, CP.z-2); 
 this.remove = this.age++ > 5;
 }
});
teleport = true;
}
}});

Saver.addSavesScope("teleport",
function read(scope) {
TPA = scope.teleport;
  },
function save() {
return {TPA : teleport };
  }
);




// file: dimensions/wildwood.js

IMPORT("PortalUtils");

var wildwood = new Dimensions.CustomDimension("wildwood", 1992); // (-_-)
wildwood.setSkyColor(.53, .81, .98)
wildwood.setFogColor(.53, .81, .98);

wildwood.setGenerator(Dimensions.newGenerator({
layers: [
{
minY: 0, maxY: 75,
yConversion: [[0, -.5], [.25, -.25], [.5, 0], [.75, -.25], [1, -.5 ]],
material: {base: BlockID.twilightStone, surface: {id:BlockID.wildwoodDirt, data: 0, width:4}, cover: BlockID.wildwoodGrass},
noise: {octaves: {count: 4, scale: 40, weight_factor: 3, weight: 1.28}}
}
]
}));

PortalUtils.newPortalBlock("wildwoodPortal", ["wildwoodPortal", 0], {type: "v-plane", frameId: BlockID.edenBlock}, true);

TileEntity.registerPrototype(BlockID.wildwoodPortal, {
tick: function(){
    Particles.addParticle(20, this.x+Math.random(), this.y+Math.random(), this.z+Math.random(), 0, 0, 0, 0);
}
});

var shapewildwood = new PortalShape();
shapewildwood.setPortalId(BlockID.wildwoodPortal);
shapewildwood.setFrameIds(BlockID.edenBlock);
shapewildwood.setMinSize(2, 3);

    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == BlockID.edenBlock || block.id == BlockID.wildwoodPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.wildwoodPortal, [BlockID.edenBlock]);
    }
}); 
Callback.addCallback("ItemUse", function(coords, item, block){ 
if(Player.getCarriedItem().id == ItemID.twilightClock) 
var rect = shapewildwood.findPortal(coords.relative.x, coords.relative.y, coords.relative.z); 
 if (rect) { 
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x, coords.y+i, coords.z);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x+1, coords.y+i, coords.z);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x-1, coords.y+i, coords.z);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x, coords.y+i, coords.z+i);
}
for(i = 0;i<=3;i++){
World.addTileEntity(coords.x, coords.y+i, coords.z-i);
}
shapewildwood.buildPortal(rect, false); 
 }
});

Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.wildwoodPortal){
    Dimensions.transfer(Player.get(), wildwood.id);
}
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.wildwoodPortal){
    Dimensions.transfer(Player.get(), 0);
}});

Callback.addCallback('CustomDimensionTransfer', function (entity, from, to) { 
if (to == wildwood.id) { 
 var players = Network.getConnectedPlayers(); 
 for (var i in players) { 
var player = players[i]; 
var CP = Entity.getPosition(player); 
CP = GenerationUtils.findSurface(CP.x, 78, CP.z); 
 
 Updatable.addUpdatable({ 
 age: 0, 
 update: function () { 
 Entity.setPosition(player, CP.x, CP.y + 2, CP.z); 
 this.remove = this.age++ > 5; 
 } 
 }); 
 } 
 } 
});

var teleport = false;

Callback.addCallback('CustomDimensionTransfer', function (entity, from, to) {

if (to == 0 && from == wildwood.id) { 
var players = Network.getConnectedPlayers();
 for (var i in players) {
 var player = players[i];
 var CP = Entity.getPosition(player);
 CP = GenerationUtils.findSurface(CP.x, 78, CP.z);
 Updatable.addUpdatable({
 age: 0,
 update: function () {
Entity.setPosition(player, CP.x, CP.y+4, CP.z-2); 
 this.remove = this.age++ > 5;
 }
});
teleport = true;
}
}});

Saver.addSavesScope("teleport",
function read(scope) {
TPA = scope.teleport;
  },
function save() {
return {TPA : teleport };
  }
);




// file: items/armors/realmite.js

IDRegistry.genItemID("realHelmet");
IDRegistry.genItemID("realChestplate");
IDRegistry.genItemID("realLeggings");
IDRegistry.genItemID("realBoots");

Item.createArmorItem("realHelmet", "Realmite Helmet", {
    name: "realmitehelm"
}, {
    type: "helmet",
    armor: 3,
    durability: 2000,
    texture: "armor/real_1.png"
});
Item.createArmorItem("realChestplate", "Realmite Chestplate", {
    name: "realmitebody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 2000,
    texture: "armor/real_1.png"
});
Item.createArmorItem("realLeggings", "Realmite Leggings", {
    name: "realmitelegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 2000,
    texture: "armor/real_2.png"
});
Item.createArmorItem("realBoots", "Realmite Boots", {
    name: "realmiteboots"
}, {
    type: "boots",
    armor: 2,
    durability: 1960,
    texture: "armor/real_1.png"
});
Recipes.addShaped({
    id: ItemID.realHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotReal, 0]);

Recipes.addShaped({
    id: ItemID.realChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotReal, 0]);

Recipes.addShaped({
    id: ItemID.realLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotReal, 0]);

Recipes.addShaped({
    id: ItemID.realBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.ingotReal, 0]);




// file: items/armors/arlemite.js

IDRegistry.genItemID("arlHelmet");
IDRegistry.genItemID("arlChestplate");
IDRegistry.genItemID("arlLeggings");
IDRegistry.genItemID("arlBoots");

Item.createArmorItem("arlHelmet", "Arlemite Helmet", {
    name: "arlemitehelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 2000,
    texture: "armor/arlemite_1.png"
});
Item.createArmorItem("arlChestplate", "Arlemite Chestplate", {
    name: "arlemitebody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 2000,
    texture: "armor/arlemite_1.png"
});
Item.createArmorItem("arlLeggings", "Arlemite Leggings", {
    name: "arlemitelegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 2000,
    texture: "armor/arlemite_2.png"
});
Item.createArmorItem("arlBoots", "Arlemite Boots", {
    name: "arlemiteboots"
}, {
    type: "boots",
    armor: 2,
    durability: 2000,
    texture: "armor/arlemite_1.png"
});
Recipes.addShaped({
    id: ItemID.arlHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotArl, 0]);

Recipes.addShaped({
    id: ItemID.arlChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotArl, 0]);

Recipes.addShaped({
    id: ItemID.arlLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotArl, 0]);

Recipes.addShaped({
    id: ItemID.arlBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.ingotArl, 0]);




// file: items/armors/rupee.js

IDRegistry.genItemID("rupHelmet");
IDRegistry.genItemID("rupChestplate");
IDRegistry.genItemID("rupLeggings");
IDRegistry.genItemID("rupBoots");

Item.createArmorItem("rupHelmet", "Rupee Helmet", {
    name: "rupeehelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 3000,
    texture: "armor/rupee_1.png"
});
Item.createArmorItem("rupChestplate", "Rupee Chestplate", {
    name: "rupeebody"
}, {
    type: "chestplate",
    armor: 8,
    durability: 3000,
    texture: "armor/rupee_1.png"
});
Item.createArmorItem("rupLeggings", "Rupee Leggings", {
    name: "rupeelegs"
}, {
    type: "leggings",
    armor: 5,
    durability: 3000,
    texture: "armor/rupee_2.png"
});
Item.createArmorItem("rupBoots", "Rupee Boots", {
    name: "rupeeboots"
}, {
    type: "boots",
    armor: 2,
    durability: 3000,
    texture: "armor/rupee_1.png"
});
Recipes.addShaped({
    id: ItemID.rupHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotRup, 0]);

Recipes.addShaped({
    id: ItemID.rupChestplate,
    count: 1,
    data: 0
}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotRup, 0]);

Recipes.addShaped({
    id: ItemID.rupLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotRup, 0]);

Recipes.addShaped({
    id: ItemID.rupBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.ingotRup, 0]);




// file: items/armors/divine.js

IDRegistry.genItemID("divHelmet");
IDRegistry.genItemID("divChestplate");
IDRegistry.genItemID("divLeggings");
IDRegistry.genItemID("divBoots");

Item.createArmorItem("divHelmet", "Divine Helmet", {
    name: "divinehelmet"
}, {
    type: "helmet",
    armor: 4,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Item.createArmorItem("divChestplate", "Divine Chestplate", {
    name: "divinechestplate"
}, {
    type: "chestplate",
    armor: 9,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Item.createArmorItem("divLeggings", "Divine Leggings", {
    name: "divineleggings"
}, {
    type: "leggings",
    armor: 6,
    durability: 10000000,
    texture: "armor/divine_2.png"
});
Item.createArmorItem("divBoots", "Divine Boots", {
    name: "divineboots"
}, {
    type: "boots",
    armor: 3,
    durability: 10000000,
    texture: "armor/divine_1.png"
});
Recipes.addShaped({
    id: ItemID.divHelmet,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    "x x"
], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({
    id: ItemID.divChestplate,
    count: 1,
    data: 0
}, [
    "xxx",
    "xxx",
    " x "
], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({
    id: ItemID.divLeggings,
    count: 1,
    data: 0
}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({
    id: ItemID.divBoots,
    count: 1,
    data: 0
}, [
    "x x",
    "x x"
], ['x', ItemID.divinestone, 0]);
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.divHelmet && Player.getArmorSlot(1).id == ItemID.divChestplate && Player.getArmorSlot(2).id == ItemID.divLeggings && Player.getArmorSlot(3).id == ItemID.divBoots) {
        Entity.addEffect(Player.get(), 5, 1, 20,false, false);
        Entity.addEffect(Player.get(), 8, 1, 20, false, false);
    }
})




// file: items/armors/bedrock.js

IDRegistry.genItemID("bedrHelmet");
IDRegistry.genItemID("bedrChestplate");
IDRegistry.genItemID("bedrLeggings");
IDRegistry.genItemID("bedrBoots");

Item.createArmorItem("bedrHelmet", "Шлем из коренной породы", {
    name: "bedrockhelm"
}, {
    type: "helmet",
    armor: 3,
    durability: 10000000,
    texture: "armor/bedrock_1.png"
});
Item.createArmorItem("bedrChestplate", "Кираса из коренной породы", {
    name: "bedrockch"
}, {
    type: "chestplate",
    armor: 8,
    texture: "armor/bedrock_1.png"
});
Item.createArmorItem("bedrLeggings", "Поножи из коренной породы", {
    name: "bedrockleg"
}, {
    type: "leggings",
    armor: 5,
    durability: 10000000,
    texture: "armor/bedrock_2.png"
});
Item.createArmorItem("bedrBoots", "Ботинки из коренной породы", {
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




// file: items/armors/nether.js

IDRegistry.genItemID("netherIngot")
Item.createItem("netherIngot", "Слиток адского камня", {
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

Item.createArmorItem("netherHelmet", "Незеритовый шлем", {
    name: "netheriteHelmet"
}, {
    type: "helmet",
    armor: 6,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Item.createArmorItem("netherChestplate", "Незеритовая кираса", {
    name: "netheriteChestplate"
}, {
    type: "chestplate",
    armor: 15,
    durability: 5000,
    texture: "armor/netherite_1.png"
});
Item.createArmorItem("netherLeggings", "Незеритовые поножи", {
    name: "netheriteLeggins"
}, {
    type: "leggings",
    armor: 10,
    durability: 5000,
    texture: "armor/netherite_2.png"
});
Item.createArmorItem("netherBoots", "Незеритовые ботинки", {
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




// file: items/armors/corrupted.js

IDRegistry.genItemID("corptHelm");
IDRegistry.genItemID("corptChest");
IDRegistry.genItemID("corptLegs");
IDRegistry.genItemID("corptBoots");

Item.createArmorItem("corptHelm", "Поврежденный шлем", {
    name: "corruptedHelmet"
}, {
    type: "helmet",
    armor: 3,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Item.createArmorItem("corptChest", "Поврежденная кираса", {
    name: "corruptedChestplate"
}, {
    type: "chestplate",
    armor: 7,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Item.createArmorItem("corptLegs", "Поврежденные поножи", {
    name: "corruptedLeggings"
}, {
    type: "leggings",
    armor: 4,
    durability: 6000,
    texture: "armor/corrupted_2.png"
});
Item.createArmorItem("corptBoots", "Поврежденные ботинки", {
    name: "corruptedBoots"
}, {
    type: "boots",
    armor: 2,
    durability: 6000,
    texture: "armor/corrupted_1.png"
});
Recipes.addShaped({
    id: ItemID.corptHelm,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a"
], ['a', ItemID.corruptStone, 0]);
Recipes.addShaped({
    id: ItemID.corptChest,
    count: 1,
    data: 0
}, [
    "aaa",
    "aaa",
    " a "
], ['a', ItemID.corruptStone, 0]);
Recipes.addShaped({
    id: ItemID.corptLegs,
    count: 1,
    data: 0
}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.corruptStone, 0]);
Recipes.addShaped({
    id: ItemID.corptBoots,
    count: 1,
    data: 0
}, [
    "a a",
    "a a"
], ['a', ItemID.corruptStone, 0]);




// file: items/armors/shadow.js

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




// file: items/armors/kraken.js

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




// file: items/armors/halite.js

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




// file: items/armors/worlds/edem.js

IDRegistry.genItemID("quanda");
IDRegistry.genItemID("quandb");
IDRegistry.genItemID("quandc");
IDRegistry.genItemID("quandd");
Item.createArmorItem("quanda", "Дравитовый шлем", {
    name: "quandahelm"
}, {
    type: "helmet",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_1.png"
});
Item.createArmorItem("quandb", "Дравитовая кираса", {
    name: "quandbchest"
}, {
    type: "chestplate",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_1.png"
});
Item.createArmorItem("quandc", "Дравитовые поножи", {
    name: "quandclegs"
}, {
    type: "leggings",
    armor: 6,
    durability: 10000000,
    texture: "armor/quanda_2.png"
});
Item.createArmorItem("quandd", "Дравитовые ботинки", {
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




// file: items/armors/worlds/azurite.js

IDRegistry.genItemID("quande");
IDRegistry.genItemID("quandf");
IDRegistry.genItemID("quandg");
IDRegistry.genItemID("quandh");
Item.createArmorItem("quande", "Азуритовый шлем", {
    name: "quandehelm"
}, {
    type: "helmet",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_3.png"
});
Item.createArmorItem("quandf", "Азуритовая кираса", {
    name: "quandfchest"
}, {
    type: "chestplate",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_3.png"
});
Item.createArmorItem("quandg", "Азуритовые поножи", {
    name: "quandglegs"
}, {
    type: "leggings",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_4.png"
});
Item.createArmorItem("quandh", "Азуритовые ботинки", {
    name: "quandhboots"
}, {
    type: "boots",
    armor: 8,
    durability: 10000000,
    texture: "armor/quanda_3.png"
});
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
Callback.addCallback("tick", function() {
    if (Player.getArmorSlot(0).id == ItemID.quande && Player.getArmorSlot(1).id == ItemID.quandf && Player.getArmorSlot(2).id == ItemID.quandg && Player.getArmorSlot(3).id == ItemID.quandh) {
      var crdsP = Player.getPosition();
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == 8 || 9) {
        Entity.addEffect(Player.get(), 10, 10, 20,false, false);
    }}
});




// file: items/armors/worlds/uvite.js

IDRegistry.genItemID("quandj");
IDRegistry.genItemID("quandk");
IDRegistry.genItemID("quandl");
IDRegistry.genItemID("quandm");
Item.createArmorItem("quandj", "Увитовый шлем", {
    name: "quandjhelm"
}, {
    type: "helmet",
    armor: 9,
    durability: 3500,
    texture: "armor/quanda_5.png"
});
Item.createArmorItem("quandk", "Увитовая кираса", {
    name: "quandkchest"
}, {
    type: "chestplate",
    armor: 9,
    durability: 3700,
    texture: "armor/quanda_5.png"
});
Item.createArmorItem("quandl", "Увитовые поножи", {
    name: "quandllegs"
}, {
    type: "leggings",
    armor: 9,
    durability: 3700,
    texture: "armor/quanda_6.png"
});
Item.createArmorItem("quandm", "Увитовые ботинки", {
    name: "quandmboots"
}, {
    type: "boots",
    armor: 9,
    durability: 3500,
    texture: "armor/quanda_5.png"
});

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




// file: items/armors/worlds/avgite.js

IDRegistry.genItemID("quandr");
IDRegistry.genItemID("quands");
IDRegistry.genItemID("quandt");
IDRegistry.genItemID("quandu");
Item.createArmorItem("quandr", "Авгитовый шлем", {
    name: "quandrhelm"
}, {
    type: "helmet",
    armor: 12,
    durability: 4500,
    texture: "armor/quanda_9.png"
});
Item.createArmorItem("quands", "Авгитовая кираса", {
    name: "quandschest"
}, {
    type: "chestplate",
    armor: 12,
    durability: 5000,
    texture: "armor/quanda_9.png"
});
Item.createArmorItem("quandt", "Авгитовые поножи", {
    name: "quandtlegs"
}, {
    type: "leggings",
    armor: 12,
    durability: 5000,
    texture: "armor/quanda_10.png"
});
Item.createArmorItem("quandu", "Авгитовые ботинки", {
    name: "quanduboots"
}, {
    type: "boots",
    armor: 12,
    durability: 4500,
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




// file: items/armors/worlds/myphrile.js

IDRegistry.genItemID("quandn");
IDRegistry.genItemID("quando");
IDRegistry.genItemID("quandp");
IDRegistry.genItemID("quandq");
Item.createArmorItem("quandn", "Мифриловый", {
    name: "quandnhelm"
}, {
    type: "helmet",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_7.png"
});
Item.createArmorItem("quando", "Мифриловая кираса", {
    name: "quandochest"
}, {
    type: "chestplate",
    armor: 10,
    durability: 4200,
    texture: "armor/quanda_7.png"
});
Item.createArmorItem("quandp", "Мифриловые поножи", {
    name: "quandplegs"
}, {
    type: "leggings",
    armor: 10,
    durability: 4000,
    texture: "armor/quanda_8.png"
});
Item.createArmorItem("quandq", "Мифриловые ботинки", {
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




// file: items/armors/group.js

Item.addCreativeGroup("helmets", Translation.translate("Шлемы"), [
	ItemID.arlHelmet,
	ItemID.quanda,
	ItemID.quande,
	ItemID.rupHelmet,
	ItemID.realHelmet,
	ItemID.corptHelm,
	ItemID.divHelmet,
	ItemID.bedrHelmet,
	ItemID.netherHelmet,
	ItemID.quandj,
	ItemID.quandn,
	ItemID.quandr,
	ItemID.quandv,
	ItemID.shadowHelmet,
	ItemID.krHelmet,
	ItemID.angel1
]);
Item.addCreativeGroup("chestplates", Translation.translate("Нагрудники"), [
	ItemID.arlChestplate,
	ItemID.quandb,
	ItemID.quandf,
	ItemID.rupChestplate,
	ItemID.realChestplate,
	ItemID.corptChest,
	ItemID.divChestplate,
	ItemID.bedrChestplate,
	ItemID.netherChestplate,
	ItemID.quandk,
	ItemID.quando,
	ItemID.quands,
	ItemID.quandw,
	ItemID.shadowChestplate,
	ItemID.krChestplate,
	ItemID.angel2
]);
Item.addCreativeGroup("leggings", Translation.translate("Поножи"), [
	ItemID.arlLeggings,
	ItemID.quandc,
	ItemID.quandg,
	ItemID.rupLeggings,
	ItemID.realLeggings,
	ItemID.corptLegs,
	ItemID.divLeggings,
	ItemID.bedrLeggings,
	ItemID.netherLeggings,
	ItemID.quandl,
	ItemID.quandp,
	ItemID.quandt,
	ItemID.quandx,
	ItemID.shadowLeggings,
	ItemID.krLeggings,
	ItemID.angel3
]);
Item.addCreativeGroup("boots", Translation.translate("Ботинки"), [
	ItemID.arlBoots,
	ItemID.quandd,
	ItemID.quandh,
	ItemID.rupBoots,
	ItemID.realBoots,
	ItemID.corptBoots,
	ItemID.divBoots,
	ItemID.bedrBoots,
	ItemID.netherBoots,
	ItemID.quandm,
	ItemID.quandq,
	ItemID.quandu,
	ItemID.quandy,
	ItemID.shadowBoots,
	ItemID.krBoots,
	ItemID.angel4
]);




// file: items/tools/arlemite.js

IMPORT("ToolLib");

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

IDRegistry.genItemID("arlSword");
IDRegistry.genItemID("arlShovel");
IDRegistry.genItemID("arlPickaxe");
IDRegistry.genItemID("arlAxe");
IDRegistry.genItemID("arlHoe");
IDRegistry.genItemID("arlShickaxe");
Item.createItem("arlSword", "Арлемитовый меч", {
    name: "arlemitesw",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlShovel", "Арлемитовая лопата", {
    name: "arlemitesh",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlPickaxe", "Арлемитовая кирка", {
    name: "arlemitepick",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlAxe", "Арлемитовый топор", {
    name: "arlemiteaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlHoe", "Арлемитовый топоо", {
    name: "arlemitehoe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("arlShickaxe", "Арлемитовый мультиинструмент", {
    name: "arlemiteshickaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("arl", {
    durability: 3000,
    level: 4,
    efficiency: 13,
    damage: 4,
    enchantability: 13
});

ToolAPI.addToolMaterial("arlsh", {
    durability: 12000,
    level: 5,
    efficiency: 13,
    damage: 4,
    enchantability: 13
});

ToolAPI.addToolMaterial("arlsw", {
    durability: 1000000,
    level: 7,
    efficiency: 20,
    damage: 12,
    enchantability: 13
});

ToolAPI.setTool(ItemID.arlSword, "arlsw", ToolType.sword);
ToolAPI.setTool(ItemID.arlShovel, "arl", ToolType.shovel);
ToolAPI.setTool(ItemID.arlPickaxe, "arl", ToolType.pickaxe);
ToolAPI.setTool(ItemID.arlAxe, "arl", ToolType.axe);
ToolAPI.setTool(ItemID.arlHoe, "arl", ToolType.hoe);
ToolAPI.setTool(ItemID.arlShickaxe, "arlsh", ToolType.shickaxe);
Recipes.addShaped({
    id: ItemID.arlSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotArl, -1, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.arlHoe,
    count: 1,
    data: 0
}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.arlShickaxe,
    count: 1,
    data: 0
}, [
    "ab",
    "cd"
], ['a', ItemID.arlPickaxe, -1, 'b', ItemID.arlShovel, -1, 'c', ItemID.arlAxe, -1, 'd', ItemID.arlHoe, -1]);




// file: items/tools/rupee.js

IMPORT("ToolLib");

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

IDRegistry.genItemID("rupSword");
IDRegistry.genItemID("rupShovel");
IDRegistry.genItemID("rupPickaxe");
IDRegistry.genItemID("rupAxe");
IDRegistry.genItemID("rupHoe");
IDRegistry.genItemID("rupShickaxe");
Item.createItem("rupSword", "Рупиевый меч", {
    name: "rupeesword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupShovel", "Рупиевая лопата", {
    name: "rupeeshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupPickaxe", "Рупиевая кирка", {
    name: "rupeepickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupAxe", "Рупиевый топор", {
    name: "rupeeaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupHoe", "Rupee Hoe", {
    name: "rupeehoe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("rupShickaxe", "Рупиевый мультиинструмент", {
    name: "rupeeshickaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("rup", {
    durability: 2500,
    level: 4,
    efficiency: 16,
    damage: 2,
    enchantability: 156
});
ToolAPI.addToolMaterial("rupsw", {
    durability: 4000,
    level: 4,
    damage: 12,
    enchantability: 15
});
ToolAPI.addToolMaterial("rupsh", {
    durability: 10000000,
    level: 4,
    efficiency: 16,
    damage: 9,
    enchantability: 15
});

ToolAPI.setTool(ItemID.rupSword, "rupsw", ToolType.sword);
ToolAPI.setTool(ItemID.rupShovel, "rup", ToolType.shovel);
ToolAPI.setTool(ItemID.rupPickaxe, "rup", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rupAxe, "rup", ToolType.axe);
ToolAPI.setTool(ItemID.rupHoe, "rup", ToolType.hoe);
ToolAPI.setTool(ItemID.rupShickaxe, "rupsh", ToolType.shickaxe);

Recipes.addShaped({
    id: ItemID.rupSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotRup, -1, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.rupHoe,
    count: 1,
    data: 0
}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);
Recipes.addShaped({
    id: ItemID.rupShickaxe,
    count: 1,
    data: 0
}, [
    "ab",
    "cd"
], ['a', ItemID.rupPickaxe, 0, 'b', ItemID.rupShovel, 0, 'c', ItemID.rupAxe, 0, 'd', ItemID.rupHoe, 0]);




// file: items/tools/realmite.js

IMPORT("ToolLib");

IDRegistry.genItemID("realSword");
IDRegistry.genItemID("realShovel");
IDRegistry.genItemID("realPickaxe");
IDRegistry.genItemID("realAxe");
IDRegistry.genItemID("realHoe");
Item.createItem("realSword", "Реалмитовый меч", {
    name: "realmitesw",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realShovel", "Реалмитовая лопата", {
    name: "realmitesh",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realPickaxe", "Реалмитовая кирка", {
    name: "realmitepick",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realAxe", "Реалмитовый топор", {
    name: "realmiteaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("realHoe", "Реалмитовая мотыга", {
    name: "realmitehoe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("real", {
    durability: 4000,
    level: 4,
    efficiency: 12,
    damage: 6,
    enchantability: 13
});
ToolAPI.setTool(ItemID.realSword, "real", ToolType.sword);
ToolAPI.setTool(ItemID.realShovel, "real", ToolType.shovel);
ToolAPI.setTool(ItemID.realPickaxe, "real", ToolType.pickaxe);
ToolAPI.setTool(ItemID.realAxe, "real", ToolType.axe);
ToolAPI.setTool(ItemID.realHoe, "real", ToolType.hoe);

Recipes.addShaped({
    id: ItemID.realSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotReal, -1, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.realHoe,
    count: 1,
    data: 0
}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);




// file: items/tools/divine.js

IMPORT("ToolLib");

ToolType.shickaxe = {
    enchantType: Native.EnchantType.pickaxe,
    damage: 7,
    blockTypes: ["stone", "wood", "dirt", "fibre"]
}

IDRegistry.genItemID("divineSword");
IDRegistry.genItemID("divineShovel");
IDRegistry.genItemID("divinePickaxe");
IDRegistry.genItemID("divineAxe");
IDRegistry.genItemID("divineShickaxe");
Item.createItem("divineSword", "Божественный меч", {
    name: "divinesword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divineShovel", "Божественная лопата", {
    name: "divineshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divinePickaxe", "Божественная кирка", {
    name: "divinepickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divineAxe", "Божественный топор", {
    name: "divineaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("divineShickaxe", "Божественный мультиинструмент", {
    name: "divineshickaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("divine", {
    durability: 1000000,
    level: 7,
    efficiency: 20,
    damage: 4,
    enchantability: 13
});

ToolAPI.addToolMaterial("divinesw", {
    durability: 1000000,
    level: 7,
    efficiency: 20,
    damage: 19,
    enchantability: 13
});

ToolAPI.setTool(ItemID.divineSword, "divinesw", ToolType.sword);
ToolAPI.setTool(ItemID.divineShovel, "divine", ToolType.shovel);
ToolAPI.setTool(ItemID.divinePickaxe, "divine", ToolType.pickaxe);
ToolAPI.setTool(ItemID.divineAxe, "divine", ToolType.axe);
ToolAPI.setTool(ItemID.divineShickaxe, "divine", ToolType.shickaxe);

Recipes.addShaped({
    id: ItemID.divinePickaxe,
    count: 1,
    data: 0
}, [
    "bbb",
    " d ",
    " d "
], ['b', ItemID.divinestone, 0, 'd', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.divineSword,
    count: 1,
    data: 0
}, [
    " b ",
    "bbb",
    " d "
], ['b', ItemID.divinestone, 0, 'd', 280, 0]);
Recipes.addShaped({
    id: ItemID.divineAxe,
    count: 1,
    data: 0
}, [
    "bb ",
    "bd ",
    " d "
], ['b', ItemID.divinestone, 0, 'd', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.divineShovel,
    count: 1,
    data: 0
}, [
    " b ",
    " d ",
    " d "
], ['b', ItemID.divinestone, 0, 'd', ItemID.shadowingot, 0]);
Recipes.addShaped({
    id: ItemID.divineShickaxe,
    count: 1,
    data: 0
}, [
    "bd ",
    "c  "
], ['b', ItemID.divinePickaxe, 0, 'd', ItemID.divineShovel, 0, 'c', ItemID.divineAxe,0]);




// file: items/tools/bedrock.js

IMPORT("ToolLib");

ToolType.maul = {
    isWeapon: true,
    enchantType: Native.EnchantType.weapon,
    damage: 8,
    blockTypes: ["fibre", "corweb"],
    onAttack: function(item, mob) {}
}

IDRegistry.genItemID("bedrSword");
IDRegistry.genItemID("bedrShovel");
IDRegistry.genItemID("bedrPickaxe");
IDRegistry.genItemID("bedrAxe");
IDRegistry.genItemID("bedrMaul");
Item.createItem("bedrSword", "Bedrock Sword", {
    name: "bedrocksw",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrShovel", "Bedrock Shovel", {
    name: "bedrocksh",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrPickaxe", "Bedrock Pickaxe", {
    name: "bedrockpick",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrAxe", "Bedrock Axe", {
    name: "bedrockaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("bedrMaul", "Bedrock Maul", {
    name: "bedrockmaul"
}, {
    stack: 1
});

ToolAPI.addToolMaterial("bedr", {
    durability: 10000000,
    level: 4,
    efficiency: 9,
    damage: 2,
    enchantability: 13
});
ToolAPI.addToolMaterial("bedrsw", {
    durability: 1400,
    level: 4,
    efficiency: 18,
    damage: 14,
    enchantability: 13
});
ToolAPI.addToolMaterial("bedrma", {
    durability: 10000000,
    level: 4,
    efficiency: 18,
    damage: 14,
    enchantability: 13
});

ToolAPI.setTool(ItemID.bedrSword, "bedrsw", ToolType.sword);
ToolAPI.setTool(ItemID.bedrShovel, "bedr", ToolType.shovel);
ToolAPI.setTool(ItemID.bedrPickaxe, "bedr", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bedrAxe, "bedr", ToolType.axe);
ToolAPI.setTool(ItemID.bedrMaul, "bedrma", ToolType.maul);

Recipes.addShaped({
    id: ItemID.bedrSword,
    count: 1,
    data: 0
}, [
    "a",
    "a",
    "b"
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrShovel,
    count: 1,
    data: 0
}, [
    "a",
    "b",
    "b"
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrPickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrAxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab",
    " b"
], ['a', 7, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.bedrMaul,
    count: 1,
    data: 0
}, [
    " a ",
    "aaa",
    " a "
], ['a', 7, 0]);




// file: items/tools/corrupted.js

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




// file: items/tools/worlds/edem.js

IDRegistry.genItemID("edemsword");
IDRegistry.genItemID("edempickaxe");
IDRegistry.genItemID("edemshovel");
IDRegistry.genItemID("edemaxe");
Item.createItem("edemsword", "Дравитовый клинок", {
    name: "edemsword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("edemshovel", "Дравитовая лопата", {
    name: "edemshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("edempickaxe", "Дравитовая кирка", {
    name: "edempickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("edemaxe", "Дравитовый топор", {
    name: "edemaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("edem", {
    durability: 2000,
    level: 4,
    efficiency: 24,
    damage: 24,
    enchantability: 13
});
ToolAPI.setTool(ItemID.edemsword, "edem", ToolType.sword);
ToolAPI.setTool(ItemID.edemshovel, "edem", ToolType.shovel);
ToolAPI.setTool(ItemID.edempickaxe, "edem", ToolType.pickaxe);
ToolAPI.setTool(ItemID.edemaxe, "edem", ToolType.axe);

Recipes.addShaped({
    id: ItemID.edempickaxe,
    count: 1,
    data: 0
}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.edemsword,
    count: 1,
    data: 0
}, [
    " a",
    " a ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);


Recipes.addShaped({
    id: ItemID.edemaxe,
    count: 1,
    data: 0
}, [
    "aa",
    "ab ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);

Recipes.addShaped({
    id: ItemID.edemshovel,
    count: 1,
    data: 0
}, [
    " a",
    " b ",
    " b "
], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);




// file: items/tools/worlds/azurite.js

IDRegistry.genItemID("azurisword");
IDRegistry.genItemID("azuripickaxe");
IDRegistry.genItemID("azurishovel");
IDRegistry.genItemID("azuriaxe");
Item.createItem("azurisword", "Азуритовый клинок", {
    name: "azurisword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azurishovel", "Азуритовая лопата", {
    name: "azurishovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azuripickaxe", "Азуритовая кирка", {
    name: "azuripickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("azuriaxe", "Азуритовый топор", {
    name: "azuriaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("azuri", {
    durability: 2000,
    level: 4,
    efficiency: 28,
    damage: 26,
    enchantability: 13
});
ToolAPI.setTool(ItemID.azurisword, "azuri", ToolType.sword);
ToolAPI.setTool(ItemID.azurishovel, "azuri", ToolType.shovel);
ToolAPI.setTool(ItemID.azuripickaxe, "azuri", ToolType.pickaxe);
ToolAPI.setTool(ItemID.azuriaxe, "azuri", ToolType.axe);
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




// file: items/tools/worlds/uvite.js

IDRegistry.genItemID("apalazisword");
IDRegistry.genItemID("apalazipickaxe");
IDRegistry.genItemID("apalazishovel");
IDRegistry.genItemID("apalaziaxe");
Item.createItem("apalazisword", "Увитовый клинок", {
    name: "apalazisword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalazishovel", "Увитовая лопата", {
    name: "apalazishovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalazipickaxe", "Увитовая кирка", {
    name: "apalazipickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("apalaziaxe", "Увитовый топор", {
    name: "apalaziaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("apalazi", {
    durability: 2000,
    level: 4,
    efficiency: 30,
    damage: 29,
    enchantability: 13
});
ToolAPI.setTool(ItemID.apalazisword, "apalazi", ToolType.sword);
ToolAPI.setTool(ItemID.apalazishovel, "apalazi", ToolType.shovel);
ToolAPI.setTool(ItemID.apalazipickaxe, "apalazi", ToolType.pickaxe);
ToolAPI.setTool(ItemID.apalaziaxe, "apalazi", ToolType.axe);

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




// file: items/tools/worlds/myphrile.js

IDRegistry.genItemID("ternsword");
IDRegistry.genItemID("ternpickaxe");
IDRegistry.genItemID("ternshovel");
IDRegistry.genItemID("ternaxe");
Item.createItem("ternsword", "Мифриловый клинок", {
    name: "ternsword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("ternshovel", "Мифриловая лопата", {
    name: "ternshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("ternpickaxe", "Мифриловая лопата", {
    name: "ternpickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("ternaxe", "Мифриловый топор", {
    name: "ternaxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("tern", {
    durability: 2000,
    level: 4,
    efficiency: 44,
    damage: 31,
    enchantability: 13
});
ToolAPI.setTool(ItemID.ternsword, "tern", ToolType.sword);
ToolAPI.setTool(ItemID.ternshovel, "tern", ToolType.shovel);
ToolAPI.setTool(ItemID.ternpickaxe, "tern", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ternaxe, "tern", ToolType.axe);

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




// file: items/tools/worlds/avgite.js

IDRegistry.genItemID("morsword");
IDRegistry.genItemID("morpickaxe");
IDRegistry.genItemID("morshovel");
IDRegistry.genItemID("moraxe");
Item.createItem("morsword", "Авгитовый клинок", {
    name: "morsword",
    meta: 0
}, {
    stack: 1
});
Item.createItem("morshovel", "Авгитовая лопата", {
    name: "morshovel",
    meta: 0
}, {
    stack: 1
});
Item.createItem("morpickaxe", "Авгитовая кирка", {
    name: "morpickaxe",
    meta: 0
}, {
    stack: 1
});
Item.createItem("moraxe", "Авгитовый топор", {
    name: "moraxe",
    meta: 0
}, {
    stack: 1
});

ToolAPI.addToolMaterial("mor", {
    durability: 2000,
    level: 4,
    efficiency: 55,
    damage: 33,
    enchantability: 13
});
ToolAPI.setTool(ItemID.morsword, "mor", ToolType.sword);
ToolAPI.setTool(ItemID.morshovel, "mor", ToolType.shovel);
ToolAPI.setTool(ItemID.morpickaxe, "mor", ToolType.pickaxe);
ToolAPI.setTool(ItemID.moraxe, "mor", ToolType.axe);

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





// file: items/tools/group.js

Item.addCreativeGroup("swords", Translation.translate("Мечи"), [
	ItemID.edemsword,
	ItemID.arlSword,
	ItemID.realSword,
	ItemID.bedrSword,
	ItemID.rupSword,
	ItemID.corruptedSword,
	ItemID.divineSword,
	ItemID.apalazisword,
	ItemID.azurisword,
	ItemID.ternsword,
	ItemID.morsword,
	ItemID.halsword,
	ItemID.azurisword
]);
Item.addCreativeGroup("pickaxes", Translation.translate("Кирки"), [
	ItemID.edempickaxe,
	ItemID.arlPickaxe,
	ItemID.bedrPickaxe,
	ItemID.realPickaxe,
	ItemID.rupPickaxe,
	ItemID.corruptedPickaxe,
	ItemID.divinePickaxe,
	ItemID.apalazipickaxe,
	ItemID.azuripickaxe,
	ItemID.ternpickaxe,
	ItemID.morpickaxe,
	ItemID.azuripickaxe
]);
Item.addCreativeGroup("axes", Translation.translate("Топоры"), [
	ItemID.edemaxe,
	ItemID.arlAxe,
	ItemID.bedrAxe,
	ItemID.rupAxe,
	ItemID.realAxe,
	ItemID.corruptedAxe,
	ItemID.divineAxe,
	ItemID.apalaziaxe,
	ItemID.azuriaxe,
	ItemID.ternaxe,
	ItemID.moraxe,
	ItemID.azuriaxe
]);
Item.addCreativeGroup("shovels", Translation.translate("Лопаты"), [
	ItemID.edemshovel,
	ItemID.arlShovel,
	ItemID.bedrShovel,
	ItemID.rupShovel,
	ItemID.realShovel,
	ItemID.corruptedShovel,
	ItemID.divineShovel,
	ItemID.apalazishovel,
	ItemID.azurishovel,
	ItemID.ternshovel,
	ItemID.morshovel,
	ItemID.azurishovel
]);
Item.addCreativeGroup("mauls", Translation.translate("Кувалды"), [
	ItemID.bedrMaul,
	ItemID.corruptedMaul
]);
Item.addCreativeGroup("shickaxes", Translation.translate("Мультиинструменты"), [
	ItemID.rupShickaxe,
	ItemID.arlShickaxe,
	ItemID.divineShickaxe
]);
Item.addCreativeGroup("hoes", Translation.translate("Мотыги"), [
	ItemID.rupHoe,
	ItemID.realHoe,
	ItemID.arlHoe
]);




// file: items/tools/bows/wildwoodBow.js

IMPORT("Bow");
IMPORT("ItemAnimator");
IMPORT("SoundAPI");

let SuperBowAnimator = new ItemAnimator()
let SBCrosshair = new Crosshair()
let SuperArrow = new Arrow()
let SuperBow = new Bow()


SuperBowAnimator.Create({
	name: 'Азуритовый лук',
	defaultTexture: 'wildwoodBow',
	defaultTextureData: 0,
	animtations: {
		anim1: {
			3: {texture: "wildwoodBow", data: 1},
			6: {texture: "wildwoodBow", data: 2},
			9: {texture: "wildwoodBow", data: 3}
	}
	}
});

SuperArrow.Create({
	namedID: "wildwoodArrow",
	name: "Азуритовая стрела",
	texture: "wildwoodArrow",
	data: 0,
	skin: "entity/wildwoodArrow",
	particle: 13,
	damage: 10,
	speed: 2
})
SBCrosshair.setUI()
SuperBow.Create({
	namedID: "wildwoodBow",
	name: "Азуритовый лук",
	baseTexture: "wildwoodBow",
	baseTextureData: 0,
	maxDamage: 1000000,
	crosshair: SBCrosshair,
	animation: SuperBowAnimator,
	arrows: {
		arrow1: {
			arrow: SuperArrow,
			startUseAnimation: 'anim1'
		}
	}
})




// file: items/tools/bows/uviteBow.js

IMPORT("Bow");
IMPORT("ItemAnimator");
IMPORT("SoundAPI");

let SuperBowAnimator2 = new ItemAnimator()
let SBCrosshair2 = new Crosshair()
let SuperArrow2 = new Arrow()
let SuperBow2 = new Bow()


SuperBowAnimator2.Create({
	name: 'Увитовый лук',
	defaultTexture: 'uviteBow',
	defaultTextureData: 0,
	animtations: {
		anim1: {
			6: {texture: "uviteBow", data: 1},
			12: {texture: "uviteBow", data: 2},
			18: {texture: "uviteBow", data: 3}
	}
	}
});

SuperArrow2.Create({
	namedID: "uviteArrow",
	name: "Увитовая стрела",
	texture: "uviteArrow",
	data: 0,
	skin: "entity/wildwoodArrow",
	particle: 13,
	damage: 15,
	speed: 1
})
SBCrosshair2.setUI()
SuperBow2.Create({
	namedID: "uviteBow",
	name: "Увитовый лук",
	baseTexture: "uviteBow",
	baseTextureData: 0,
	maxDamage: 1000000,
	crosshair: SBCrosshair2,
	animation: SuperBowAnimator2,
	arrows: {
		arrow1: {
			arrow: SuperArrow2,
			startUseAnimation: 'anim1'
		}
	}
})




// file: items/items.js

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
IDRegistry.genItemID("misteriousClock");
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
Item.createItem("crabclaw", "Коготь краба", {
    name: "crabclaw"
});
Item.createItem("cyclopeye", "Око циклопа", {
    name: "cyclopseye"
});
Item.createItem("smesh", "Божественный осколок", {
    name: "divineShard"
});
Item.createItem("divinestone", "Divine Stone", {
    name: "divinestone"
});
Item.createItem("krscale", "Чешуя кракена", {
    name: "krakenscale"
});
Item.createItem("krskin", "Кожа кракена", {
    name: "krakenskin"
});
Item.createItem("terrastone", "Terra Stone", {
    name: "terranStone"
});
Item.createItem("shadowingot", "Теневой слиток", {
    name: "shadowing"
});
Item.createItem("shadowstone", "Теневой камень", {
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
Item.createItem("corruptShard", "Поврежденный осколок", {
    name: "corruptedShard"
});
Item.createItem("corruptStone", "Повреждённый камень", {
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
Item.createItem("misteriousClock", "Мистические часы", {
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
  let mob = b.spawnEntity(coords.x, coords.y, coords.z, "Divine:ancient_entity")
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
            this.p(crds.x + 2, crds.y, crds.z + 2,
                  block.frame);
            this.p(crds.x - 1, crds.y, crds.z + 2,
                  block.frame);
            this.p(crds.x - 1, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x + 2, crds.y, crds.z+1,
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
            this.p(crds.x + 2, crds.y, crds.z + 2,
                  block.frame);
            this.p(crds.x - 1, crds.y, crds.z + 2,
                  block.frame);
            this.p(crds.x - 1, crds.y, crds.z+1,
                block.frame);
            this.p(crds.x + 2, crds.y, crds.z+1,
                block.frame);
            }
      }
}




// file: generation.js

IMPORT("Structures")

edentree = new Structure("edenTree");
wildwoodtree = new Structure("wildwoodTree");
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == Aether.id) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 160, coords.z);
 if (coords.y < 52) return;
if (random.nextFloat() < .85) {
  if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.edenGrass)
edentree.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi); 
    }
}
});
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min+1))+min;
};

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
if(dimensionId == Aether.id) {
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 140, coords.z);
  let regi = BlockSource.getCurrentWorldGenRegion();
 if(coords.y < 48) return;
  for(var i = 0; i < randomInt(40, 55); i++) { 
         if(Math.random() < .95){
          if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.edenGrass) {
       regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.edenBrush, 0);    
               }  
          }  
     }  
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == wildwood.id) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 75, coords.z);
 for (i = 0; i < 60; i++) {
 if (coords.y < 10) return;
if (random.nextFloat() < .95) {
  if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.wildwoodGrass)
wildwoodtree.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi); 
    }
  }
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
if(dimensionId == wildwood.id) { 
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ); 
 coords = GenerationUtils.findSurface(coords.x, 75, coords.z); 
 let regi = BlockSource.getCurrentWorldGenRegion(); 
 if(coords.y < 48) return; 
 function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}
 for(var i = 0; i < randomInt(90, 100); i++) { 
 if(Math.random() < .9){ 
 if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.wildwoodGrass) { 
 regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.wildwoodTallgrassBottom, 0);
 regi.setBlock(coords.x, coords.y + 2, coords.z,
     BlockID.wildwoodTallgrassTop, 0)
 } 
 } 
 } 
} 
});




