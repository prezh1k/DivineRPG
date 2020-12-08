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
	{name: "Realmite block", texture: [["realmiteblock", 0]], inCreative: true}
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
	{name: "Eden block", texture: [["edenBlock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.edenBlock, "stone", 3);
Recipes.addShaped({id: BlockID.edenBlock, count: 1, data: 0}, [
		"bbb",
		"bbb",
		"bbb"
	], ['b', ItemID.edemfrag, 0]);

IDRegistry.genBlockID("wildwoodBlock");
Block.createBlock("wildwoodBlock", [
	{name: "Wildwood block", texture: [["wildwoodBlock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.wildwoodBlock, "stone", 3);
Recipes.addShaped({id: BlockID.wildwoodBlock, count: 1, data: 0}, [
		"bbb",
		"bbb",
		"bbb"
	], ['b', ItemID.lesfrag, 0]);

IDRegistry.genBlockID("arlemiteBlock");
Block.createBlock("arlemiteBlock", [
	{name: "Arlemite block", texture: [["arlemiteblock", 0]], inCreative: true}
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
	{name: "Rupee block", texture: [["rupeeblock", 0]], inCreative: true}
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
	{name: "Arlemite lamp", texture: [["arlemitelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.arlemiteLamp, "stone", 2);

IDRegistry.genBlockID("rupeeLamp");
Block.createBlock("rupeeLamp", [
	{name: "Rupee lamp", texture: [["rupeelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.rupeeLamp, "stone", 2);

IDRegistry.genBlockID("goldLamp");
Block.createBlock("goldLamp", [
	{name: "Gold lamp", texture: [["goldlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.goldLamp, "stone", 2);

IDRegistry.genBlockID("lapisLamp");
Block.createBlock("lapisLamp", [
	{name: "Lapis lamp", texture: [["lapislamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.lapisLamp, "stone", 2);

IDRegistry.genBlockID("redsLamp");
Block.createBlock("redsLamp", [
	{name: "Redstone lamp", texture: [["redstonelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.redsLamp, "stone", 2);

IDRegistry.genBlockID("realLamp");
Block.createBlock("realLamp", [
	{name: "Realmite lamp", texture: [["realmitelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.realLamp, "stone", 2);

IDRegistry.genBlockID("endLamp");
Block.createBlock("endLamp", [
	{name: "Ender lamp", texture: [["enderLamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.endLamp, "stone", 2);

IDRegistry.genBlockID("blazeLamp");
Block.createBlock("blazeLamp", [
	{name: "Blaze lamp", texture: [["blazelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.blazeLamp, "stone", 2);

IDRegistry.genBlockID("lavaLamp");
Block.createBlock("lavaLamp", [
	{name: "Lava lamp", texture: [["lavalamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.lavaLamp, "stone", 2);

IDRegistry.genBlockID("diamondLamp");
Block.createBlock("diamondLamp", [
	{name: "Diamond lamp", texture: [["diamondlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.diamondLamp, "stone", 2);

IDRegistry.genBlockID("krakLamp");
Block.createBlock("krakLamp", [
	{name: "Kraken lamp", texture: [["krakenlamp", 0]], inCreative: true}
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
	{name: "Iron brick", texture: [["ironBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.ironBrick, "stone", 2);
Recipes.addShaped({id: BlockID.ironBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 265, 0]);
	

IDRegistry.genBlockID("goldBrick");
Block.createBlock("goldBrick", [
	{name: "Gold brick", texture: [["goldBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.goldBrick, "stone", 2);
Recipes.addShaped({id: BlockID.goldBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 266, 0]);
IDRegistry.genBlockID("lapisBrick");
Block.createBlock("lapisBrick", [
	{name: "Lapis brick", texture: [["lapisBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.lapisBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lapisBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 351, 4]);
IDRegistry.genBlockID("lavaBrick");
Block.createBlock("lavaBrick", [
	{name: "Lava brick", texture: [["lavaBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.lavaBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', 325, 10]);
IDRegistry.genBlockID("diamBrick");
Block.createBlock("diamBrick", [
	{name: "Iron brick", texture: [["diamondBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.diamBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', 264, 0]);
IDRegistry.genBlockID("realBrick");
Block.createBlock("realBrick", [
	{name: "Realmite brick", texture: [["realmiteBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.realBrick, "stone", 2);
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', ItemID.ingotReal, 0]);
IDRegistry.genBlockID("arleBrick");
Block.createBlock("arleBrick", [
	{name: "Arlemite brick", texture: [["arlemiteBricks", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.arleBrick, count: 1, data: 0}, ["bb","bb "], ['b',ItemID.ingotArl, 0]);
ToolAPI.registerBlockMaterial(BlockID.arleBrick, "stone", 2);

IDRegistry.genBlockID("edenGrass");
Block.createBlockWithRotation("edenGrass", [
	{name: "Eden grassblock", texture: [["edenGrass", 0], ["edenGrass", 1], ["edenGrass", 0], ["edenGrass", 0], ["edenGrass", 0], ["edenGrass", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.edenGrass, "dirt", 0, true);
Block.registerDropFunction("edenGrass", function(){
return [[BlockID.edenDirt, 1, 0]];});

IDRegistry.genBlockID("edenLog");
Block.createBlockWithRotation("edenLog", [
	{name: "Eden log", texture: [["edenLog", 1], ["edenLog", 1], ["edenLog", 0], ["edenLog", 0], ["edenLog", 0], ["edenLog", 0]], inCreative: true}], BLOCK_TYPE_LOG);

IDRegistry.genBlockID("twilightStone");
Block.createBlock("twilightStone", [
	{name: "Twilight stone", texture: [["twilightStone", 0]], inCreative: true} 
]);
ToolAPI.registerBlockMaterial(BlockID.twilightStone, "stone", 0);
Block.setDestroyTime(BlockID.twilightStone,1)
IDRegistry.genBlockID("divineStone");
Block.createBlock("divineStone", [
	{name: "Divine block", texture: [["divinestone", 0]], inCreative: true} 
]);
Block.setDestroyTime(BlockID.divineStone,1)


IDRegistry.genBlockID("edenDirt");
Block.createBlock("edenDirt", [
	{name: "Eden dirt", texture: [["edenDirt", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.edenDirt, 0.5);
ToolAPI.registerBlockMaterial(BlockID.edenDirt, "dirt", 0, true);

IDRegistry.genBlockID("edenLeaves");
Block.createBlock("edenLeaves", [
	{name: "Eden leaves", texture: [["edenLeaves", 0]], inCreative: false},
	{name: "Eden leaves", texture: [["edenLeaves", 0]], inCreative: false},
	{name: "Eden leaves", texture: [["edenLeaves", 0]], inCreative: true}
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
		return [[BlockID.edenSapling, 1, 0]]
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
    {name: "Eden grass", texture:
        [["edenBrush", 0]], inCreative:
        true}], BLOCK_TYPE_BRUSH);
ToolAPI.registerBlockMaterial(BlockID.edenBrush, "plant");
TileRenderer.setPlantModel(BlockID.edenBrush, 0, "edenBrush", 0);

IDRegistry.genBlockID("edenPlanks");
Block.createBlock("edenPlanks", [
    {name: "Eden planks", texture:
        [["edenPlanks", 0]], inCreative: 
        true}], BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.edenPlanks, "wood");
Recipes.addShaped({id: BlockID.edenPlanks, count: 4, data: 0},
["a"], ["a", BlockID.edenLog, 0]);

IDRegistry.genBlockID("wildwoodDirt");
Block.createBlock("wildwoodDirt", [
    {name: "Wildwood dirt", texture:
        [["wildwoodDirt", 0]], inCreative:
        true}], "opaque");
Block.setDestroyTime(BlockID.wildwoodDirt, 0.5);
ToolAPI.registerBlockMaterial(BlockID.wildwoodDirt, "dirt", 0, true);

IDRegistry.genBlockID("wildwoodGrass");
Block.createBlockWithRotation("wildwoodGrass", [
	{name: "Wildwood grass", texture: [["wildwoodGrass", 0], ["wildwoodGrass", 1], ["wildwoodGrass", 0], ["wildwoodGrass", 0], ["wildwoodGrass", 0], ["wildwoodGrass", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.wildwoodGrass, "dirt", 0, true);
Block.registerDropFunction("wildwoodGrass", function(){
return [[BlockID.wildwoodDirt, 1, 0]];});

IDRegistry.genBlockID("wildwoodLog");
Block.createBlockWithRotation("wildwoodLog", [
	{name: "Wildwood log", texture: [["wildwoodLog", 1], ["wildwoodLog", 1], ["wildwoodLog", 0], ["wildwoodLog", 0], ["wildwoodLog", 0], ["wildwoodLog", 0]], inCreative: true}], BLOCK_TYPE_LOG,"opaque");

IDRegistry.genBlockID("wildwoodTallgrassTop");
Block.createBlock("wildwoodTallgrassTop", [
    {name: "Wildwood tallgrass", texture:
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
    {name: "Wildwood tallgrass", texture:
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
	{name: "Wildwood leaves", texture: [["wildwoodLeaves", 0]], inCreative: false},
	{name: "Wildwood leaves", texture: [["wildwoodLeaves", 0]], inCreative: false},
	{name: "Wildwood leaves", texture: [["wildwoodLeaves", 0]], inCreative: true}
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
		return [[BlockID.wildwoodSapling, 1, 0]]
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
Item.createItem("edenSapling", "Eden sapling", {
    name: "edenSapling"
}, {
    isTech: true,
    stack: 64
});
IDRegistry.genBlockID("edenSapling");
Block.createBlock("edenSapling", [
    {name: "Eden sapling", texture:
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
Item.createItem("wildwoodSapling", "Wildwood sapling", {
    name: "wildwoodSapling"
}, {
    isTech: true,
    stack: 64
});
IDRegistry.genBlockID("wildwoodSapling");
Block.createBlock("wildwoodSapling", [
    {name: "Wildwood sapling", texture:
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

IDRegistry.genBlockID("apalachiaDirt");
Block.createBlock("apalachiaDirt", [
    {name: "Apalachia dirt", texture:
        [["apalachiaDirt", 0]], inCreative:
        true}], "opaque");
Block.setDestroyTime(BlockID.apalachiaDirt, 0.5);
ToolAPI.registerBlockMaterial(BlockID.apalachiaDirt, "dirt", 0, true);

IDRegistry.genBlockID("apalachiaGrass");
Block.createBlockWithRotation("apalachiaGrass", [
	{name: "Apalachia grass", texture: [["apalachiaGrass", 0], ["apalachiaGrass", 1], ["apalachiaGrass", 0], ["apalachiaGrass", 0], ["apalachiaGrass", 0], ["apalachiaGrass", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.apalachiaGrass, "dirt", 0, true);
Block.setDestroyTime(BlockID.apalachiaGrass, 0.5);
Block.registerDropFunction("apalachiaGrass", function(){
return [[BlockID.apalachiaDirt, 1, 0]];});

IDRegistry.genBlockID("apalachiaLog");
Block.createBlockWithRotation("apalachiaLog", [
	{name: "Apalachia log", texture: [["apalachiaLog", 1], ["apalachiaLog", 1], ["apalachiaLog", 0], ["apalachiaLog", 0], ["apalachiaLog", 0], ["apalachiaLog", 0]], inCreative: true}], BLOCK_TYPE_LOG,"opaque");
IDRegistry.genBlockID("apalachiaLeaves");
Block.createBlock("apalachiaLeaves", [
	{name: "Apalachia leaves", texture: [["apalachiaLeaves", 0]], inCreative: false},
	{name: "Apalachia leaves", texture: [["apalachiaLeaves", 0]], inCreative: false},
	{name: "Apalachia leaves", texture: [["apalachiaLeaves", 0]], inCreative: true}
], {
	base: 18,
	destroytime: 0.2,
	explosionres: 1,
	renderallfaces: true, 
	renderlayer: 1,
	lightopacity: 1,
	translucency: 0.5
});
Block.registerDropFunction("apalachiaLeaves", function(coords, blockID, blockData, level, enchant){
	if(level > 0 || Player.getCarriedItem().id == 359){
		return [[blockID, 1, 2]];
	}
	if(Math.random() < .1){
		return [[BlockID.apalachiaSapling, 1, 0]]
	}
	return [];
});
ToolAPI.registerBlockMaterial(BlockID.apalachiaLeaves, "plant");
function checkLeaves(x, y, z, explored){
	let blockID = World.getBlockID(x, y, z);
	if(blockID == BlockID.apalachiaLog){
		return true;
	}
	if(blockID == BlockID.apalachiaLeaves){
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
				if(block.id == BlockID.apalachiaLeaves && block.data == 0){
					World.setBlock(xx, yy, zz, BlockID.apalachiaLeaves, 1);
				}
			}
		}
	}
};

Callback.addCallback("DestroyBlock", function(coords, block, player){
	updateLeaves(coords.x, coords.y, coords.z);
});


IDRegistry.genBlockID("apalachiaTallgrass");
Block.createBlock("apalachiaTallgrass", [
    {name: "Apalachia tall grass", texture:
        [["apalachiaTallgrass", 0]], inCreative:
        true}], BLOCK_TYPE_BRUSH);
ToolAPI.registerBlockMaterial(BlockID.apalachiaTallgrass, "plant");
TileRenderer.setPlantModel(BlockID.apalachiaTallgrass, 0, "apalachiaTallgrass", 0);
IDRegistry.genBlockID("apalachiaPlanks");
Block.createBlock("apalachiaPlanks", [
    {name: "Apalachia planks", texture:
        [["apalachiaPlanks", 0]], inCreative: 
        true}], BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.apalachiaPlanks, "wood");
Recipes.addShapeless(
  {id: BlockID.apalachiaPlanks, count: 4, data: 0},[
    {id: BlockID.apalachiaLog, data: 0}
]);

IDRegistry.genItemID("apalachiaSapling");
Item.createItem("apalachiaSapling", "Apalachia sapling", {
    name: "apalachiaSapling"
}, {
    isTech: true,
    stack: 64
});
IDRegistry.genBlockID("apalachiaSapling");
Block.createBlock("apalachiaSapling", [
    {name: "Apalachia sapling", texture:
        [["apalachiaSapling", 0]], inCreative:
        true}], BLOCK_TYPE_SAPLING);
ToolAPI.registerBlockMaterial(BlockID.apalachiaSapling, "plant");
Block.registerDropFunction("apalachiaLeaves", function(coords, blockID, blockData, level, enchant){
	if(level > 0 || Player.getCarriedItem().id == 359){
		return [[blockID, 1, 2]];
	}
	if(Math.random() < .1){
		return [[ItemID.apalachiaSapling, 1, 0]]
	}
	return [];
});
TileRenderer.setPlantModel(BlockID.apalachiaSapling, 0, "apalachiaSapling", 0);
Item.registerUseFunction("apalachiaSapling", function(coords, item, block){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (World.canTileBeReplaced(tile1.id, tile1.data) && DIRT_TILES[tile2.id]) {
		World.setBlock(place.x, place.y, place.z, BlockID.apalachiaSapling);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.playSound(place.x, place.y, place.z, "dig.grass", 1, 0.8)
	}
});
Block.registerDropFunction("apalachiaSapling", function(){
    return [[BlockID.apalachiaSapling, 1, 0]];
});
Block.setRandomTickCallback(BlockID.apalachiaSapling, function(x, y, z){
	if(!DIRT_TILES[World.getBlockID(x, y-1, z)]){
		World.destroyBlock(x, y, z, true);
	}
	else if(Math.random() < 0.25 && World.getLightLevel(x, y, z) >= 4){
		apalachiatree.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, random, regi);
	}
});
Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.apalachiaSapling){
		World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
	}
});