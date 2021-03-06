IMPORT("PortalUtils");
let portals1 = 0;


var Aether = new Dimensions.CustomDimension("Aether", 1991); // (-_-)
Aether.setSkyColor(.96, .87, .7)
Aether.setFogColor(.96, .87, .7);

Aether.setGenerator(Dimensions.newGenerator({
layers: [
{
minY: 0, maxY: 80,
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

Callback.addCallback('CustomDimensionTransfer', function(entity, from, to) {
  if (to == Aether.id) {
    var players = Network.getConnectedPlayers();
    for (var i in players) {
      var player = players[i];
      var CP = Entity.getPosition(player);
      CP = GenerationUtils.findSurface(CP.x, 150, CP.z);
      Updatable.addUpdatable({
        age: 0,
        update: function() {
          Entity.setPosition(player, CP.x, 92, CP.z + 3);
          if (portals1 == 0) {
            portalGenerationHelper1.generatePortal({ x: CP.x, y: 90, z: CP.z });
            portals1 = +1;
          };
          this.remove = this.age++ > 5;
        }
      });
    }
  }
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

}
}});

Saver.addSavesScope("portals1",
function read(scope) {
TPA = scope.portals1;
  },
function save() {
return {TPA : portals1 };
});