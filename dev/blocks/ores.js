IMPORT("DivineHelper");
IMPORT("ToolLib");
IMPORT("ENV");
 
 ToolAPI.addBlockMaterial("ore", 3)
 
IDRegistry.genBlockID("edenOre");
Block.createBlock("edenOre", [
	{name: "Дравитовая Руда", texture: [["edenOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.edenOre, "ore");
Block.registerDropFunction("edenOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.edenOre, 1, 0)
  });
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
ToolAPI.registerBlockMaterial(BlockID.netheriteOre, "ore");
Block.registerDropFunction("netheriteOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.netheriteOre, 1, 0)
  });
Callback.addCallback("GenerateNetherChunk",function(chunkX, chunkZ, random){
    for (var i=0; i<6; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 128);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.netheriteOre, 0, random(1,4));
    }
});

IDRegistry.genBlockID("bloodgemOre");
Block.createBlock("bloodgemOre", [
	{name: "Каменно-кровавая руда", texture: [["bloodgemore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.netheriteOre, "ore");
Block.registerDropFunction("bloodgemOre",
function(coords, blockID, blockData, level, enchant){
  return(BlockID.bloodgemOre, 1, 0)
});
Callback.addCallback("GenerateNetherChunk",function(chunkX, chunkZ, random){
    for (var i=0; i<6; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 128);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.bloodgemOre, 0, random(1,4));
    }
});


IDRegistry.genBlockID("wildwoodOre");
Block.createBlock("wildwoodOre", [
	{name: "Азуритовая Руда", texture: [["wildwoodOre", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.wildwoodOre, "ore");
Block.registerDropFunction("wildwoodOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.wildwoodOre, 1, 0)
  });
Callback.addCallback("GenerateCustomDimensionChunk",function(chunkX, chunkZ, random, dimensionid){

    if(dimensionid == wildwood.id){

    for (var i=0; i<10; i++) {
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 96);
        GenerationUtils.generateOreCustom(c.x, c.y, c.z, BlockID.wildwoodOre, 0, random(1,8), true, [BlockID.twilightStone]);
    }
}});


IDRegistry.genBlockID("arlemiteOre");
Block.createBlock("arlemiteOre", [
	{name: "Арлемитовая Руда", texture: [["arlemiteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.arlemiteOre, "ore");
Block.registerDropFunction("arlemiteOre",
function(coords, blockID, blockData, level, enchant){
  return(BlockID.arlemiteOre, 1, 0)
});
Callback.addCallback("GenerateChunkUnderground",function(chunkX, chunkZ){
    for (var i=0; i<2; i++){
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 15);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.arlemiteOre, 0, random(1,3));
    }
});
IDRegistry.genBlockID("realmiteOre");
Block.createBlock("realmiteOre", [
	{name: "Реалмитовая ", texture: [["realmiteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.realmiteOre, "ore");
Block.registerDropFunction("realmiteOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.realmiteOre, 1, 0)
  }); 
  Callback.addCallback("GenerateChunkUnderground",function(chunkX, chunkZ){
    for (var i=0; i<3; i++){
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 20);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.realmiteOre, 0, random(0,5));
    }
});

IDRegistry.genBlockID("rupeeOre");
Block.createBlock("rupeeOre", [
	{name: "Рупиевая Руда", texture: [["rupeeore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rupeeOre, "ore");
Block.registerDropFunction("rupeeOre",
  function(coords, blockID, blockData, level, enchant) {
    return (BlockID.rupeeOre, 1, 0)
  }); 
  Callback.addCallback("GenerateChunkUnderground",function(chunkX, chunkZ){
    for (var i=0; i<2; i++){
        var c = GenerationUtils.randomCoords(chunkX,chunkZ, 0, 15);
        GenerationUtils.generateOre(c.x, c.y, c.z, BlockID.rupeeOre, 0, random(1,3));
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
