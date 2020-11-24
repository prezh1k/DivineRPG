IMPORT("Structures")

edentree = new Structure("edenTree");
wildwoodtree = new Structure("wildwoodTree");
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == Aether.id) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 75, coords.z);
 for (i = 0; i < 25; i++) {
 if (coords.y < 20) return;
if (random.nextFloat() < .9) {
  if (World.getBlockID(coords.x, coords.y, coords.z) == BlockID.edenGrass)
edentree.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi); 
    }
  }
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
if(dimensionId == Aether.id) { 
 var coords = GenerationUtils.randomCoords(chunkX, chunkZ); 
 coords = GenerationUtils.findSurface(coords.x, 75, coords.z); 
 let regi = BlockSource.getCurrentWorldGenRegion(); 
 if(coords.y < 20) return; 
 function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}
 for(var i = 0; i < randomInt(20, 34); i++) { 
 if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.edenGrass) { 
 regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.edenBrush, 0); 
 } 
 } 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
if (dimensionId == wildwood.id) {
 let regi = BlockSource.getCurrentWorldGenRegion();
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 75, coords.z);
 for (i = 0; i < 30; i++) {
 if (coords.y < 20) return;
if (random.nextFloat() < .9) {
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
 for(var i = 0; i < randomInt(16, 24); i++) { 
 if(Math.random() < .75){ 
 if(regi.getBlockId(coords.x,coords.y,coords.z) == BlockID.wildwoodGrass) { 
 regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.wildwoodTallgrassBottom, 0);
 regi.setBlock(coords.x, coords.y + 2, coords.z,
     BlockID.wildwoodTallgrassTop, 0)
 } 
 } 
 } 
} 
});