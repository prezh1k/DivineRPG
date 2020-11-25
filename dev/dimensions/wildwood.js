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