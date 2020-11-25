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