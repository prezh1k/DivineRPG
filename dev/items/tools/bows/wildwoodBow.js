IMPORT("Bow");
IMPORT("ItemAnimator");
IMPORT("SoundAPI");

let SuperBowAnimator = new ItemAnimator()
let SBCrosshair = new Crosshair()
let SuperArrow = new Arrow()
let SuperBow = new Bow()


SuperBowAnimator.Create({
	name: 'Wildwood bow',
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
	name: "Wildwood arrow",
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