IMPORT("PortalUtils");

var Aether = new Dimensions.CustomDimension("Aether", 1991); // (-_-)
Aether.setSkyColor(.97, .87, .7)
Aether.setFogColor(.97, .87, .7);
World.setDayMode(true);
alert(World.getWeather());

Aether.setGenerator(Dimensions.newGenerator({
layers: [
{
minY: 0, maxY: 75,
yConversion: [[0, -.5], [.25, -.25], [.5, 0], [.75, -.25], [1, -.5 ]],
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

var teleport = false;
Callback.addCallback('CustomDimensionTransfer', function (entity, from, to, coords) {
if (to == Aether.id) { 
if (!teleport) {
var players = Network.getConnectedPlayers();
 for (var i in players) {
 var player = players[i];
 var CP = Entity.getPosition(player);
 CP = GenerationUtils.findSurface(CP.x, 78, CP.z);
 Updatable.addUpdatable({
 age: 0,
 update: function () {
Entity.setPosition(player, CP.x, CP.y, CP.z);
 if(GenerationUtils.isTransparentBlock(World.getBlockID(CP.x, CP.y, CP.z-2))){
    portalGenerationHelper1.generatePortal({x: CP.x, y: CP.y, z: CP.z-2});    
 this.remove = this.age++ > 5;
       }
     }
   })
  }}
}});

Saver.addSavesScope("teleport",
function read(scope) {
TPA = scope.teleport;
  },
function save() {
return {TPA : teleport };
  }
);

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