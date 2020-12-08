IMPORT("Structures")

edentree = new Structure("edenTree");
wildwoodtree = new Structure("wildwoodTree");
apalachiatree = new Structure("apalachiaTree");

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == Aether.id) {
   for (i = 0; i < randomInt(5, 15); i++ ) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 160, coords.z);
if (Math.random() < .75) {
  if (regi.getBlockID(coords.x, coords.y, coords.z) == BlockID.edenGrass) {
edentree.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);     }
     }
    }
  }
});
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min+1))+min;
}
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
if(dimensionId == Aether.id) {
  for(i=0; i<randomInt(40,55); i++) {
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 255, coords.z);
  let regi = BlockSource.getCurrentWorldGenRegion();
         if(Math.random() < .85){
          if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.edenGrass) {
       regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.edenBrush, 0);    
               }  
          }  
     }  
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == wildwood.id) {
   for (i = 0; i < randomInt(5, 19); i++ ) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 160, coords.z);
if (random.nextFloat() < .8) {
  if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.wildwoodGrass)
wildwoodtree.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);     }
    }
  }
});
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min+1))+min;
}
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
if(dimensionId == wildwood.id) { 
  for(i = 0; i < randomInt(40, 55);i++){
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ); 
 coords = GenerationUtils.findSurface(coords.x, 75, coords.z); 
 let regi = BlockSource.getCurrentWorldGenRegion();
 if(random.nextFloat() < .9){ 
 if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.wildwoodGrass) { 
 regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.wildwoodTallgrassBottom, 0);
 regi.setBlock(coords.x, coords.y + 2, coords.z,
     BlockID.wildwoodTallgrassTop, 0)
 } 
 } 
 } 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == apalachia.id) {
   for (i = 0; i < randomInt(5, 15); i++ ) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 160, coords.z);
if (Math.random() < .75) {
  if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.apalachiaGrass)
apalachiatree.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);     }
    }
  }
});
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min+1))+min;
}
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
if(dimensionId == apalachia.id) {
  for(i=0; i<randomInt(40,55); i++) {
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 255, coords.z);
  let regi = BlockSource.getCurrentWorldGenRegion();
         if(Math.random() < .85){
          if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.apalachiaGrass) {
       regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.apalachiaTallgrass, 0);    
               }  
          }  
     }  
}
});