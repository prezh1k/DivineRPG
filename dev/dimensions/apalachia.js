IMPORT("PortalUtils");
let portals = 0;


var apalachia = new Dimensions.CustomDimension("apalachia", 1993); // (-_-)
apalachia.setSkyColor(.33, .42, .54)
apalachia.setFogColor(.33, .42, .54);


apalachia.setGenerator(Dimensions.newGenerator({
layers: [
{
minY: 0, maxY: 80,
yConversion: [[0, -.6], [0.1, -.52], [0.5, -.25], [0.7, -.25], [.85, -.24], [1, -.6]],
material: {base: BlockID.twilightStone, surface: {id:BlockID.apalachiaDirt, data: 0, width:4}, cover: BlockID.apalachiaGrass},
noise: {octaves: {count: 4, scale: 40, weight_factor: 3, weight: 1.28}}
}
]
}));

PortalUtils.newPortalBlock("apalachiaPortal", ["apalachiaPortal", 0], {type: "v-plane", frameId: BlockID.wildwoodBlock}, true);

TileEntity.registerPrototype(BlockID.apalachiaPortal, {
tick: function(){
    Particles.addParticle(20, this.x+Math.random(), this.y+Math.random(), this.z+Math.random(), 0, 0, 0, 0);
}
});

var shapeapalachia = new PortalShape();
shapeapalachia.setPortalId(BlockID.apalachiaPortal);
shapeapalachia.setFrameIds(BlockID.wildwoodBlock);
shapeapalachia.setMinSize(2, 3);

    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == BlockID.wildwoodBlock || block.id == BlockID.apalachiaPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.apalachiaPortal, [BlockID.wildwoodBlock]);
    }
}); 
Callback.addCallback("ItemUse", function(coords, item, block){ 
if(Player.getCarriedItem().id == ItemID.twilightClock) 
var rect = shapeapalachia.findPortal(coords.relative.x, coords.relative.y, coords.relative.z); 
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
shapeapalachia.buildPortal(rect, false); 
 }
});
Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.apalachiaPortal){
    Dimensions.transfer(Player.get(), apalachia.id);
}
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.apalachiaPortal){
    Dimensions.transfer(Player.get(), 0);
}});

Callback.addCallback('CustomDimensionTransfer', function (entity, from, to) { 

if (to == apalachia.id) { 
 var players = Network.getConnectedPlayers(); 
 for (var i in players) { 
var player = players[i]; 
var CP = Entity.getPosition(player); 
CP = GenerationUtils.findSurface(CP.x, 150, CP.z);
 Updatable.addUpdatable({ 
 age: 0, 
 update: function () { 
   if (portals == 0) {
 portalGenerationHelper3.generatePortal({x: CP.x, y: 90, z: CP.z});
 portals =+ 1;
};
Entity.setPosition(player, CP.x+1, 93, CP.z+2); 
 this.remove = this.age++ > 5; 
 } 
 }); 
 } 
 } 
});

Callback.addCallback('CustomDimensionTransfer', function (entity, from, to) {
if (to == 0 && from == apalachia.id) { 
var players = Network.getConnectedPlayers();
 for (var i in players) {
 var player = players[i];
 var CP = Entity.getPosition(player);
 CP = GenerationUtils.findSurface(CP.x, 255, CP.z);
 Updatable.addUpdatable({
 age: 0,
 update: function () {
Entity.setPosition(player, CP.x, CP.y+4, CP.z-2); 
 this.remove = this.age++ > 5;
 }
});
}
}});

Saver.addSavesScope("portals",
function read(scope) {
TPA = scope.portals;
  },
function save() {
return {TPA : portals };
});