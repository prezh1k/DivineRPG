IMPORT("Bow");
IMPORT("ItemAnimator");
IMPORT("SoundAPI");

let SuperBowAnimator2 = new ItemAnimator()
let SBCrosshair2 = new Crosshair()
let SuperArrow2 = new Arrow()
let SuperBow2 = new Bow()


SuperBowAnimator2.Create({
	name: 'Apalachia bow',
	defaultTexture: 'uviteBow',
	defaultTextureData: 0,
	animtations: {
		anim1: {
			6: {texture: "uviteBow", data: 1},
			12: {texture: "uviteBow", data: 2},
			18: {texture: "uviteBow", data: 3}
	}
	}
});

SuperArrow2.Create({
	namedID: "uviteArrow",
	name: "Apalachia arrow",
	texture: "uviteArrow",
	data: 0,
	skin: "entity/wildwoodArrow",
	particle: 13,
	damage: 15,
	speed: 1
})
SBCrosshair2.setUI()
SuperBow2.Create({
	namedID: "uviteBow",
	name: "Увитовый лук",
	baseTexture: "uviteBow",
	baseTextureData: 0,
	maxDamage: 1000000,
	crosshair: SBCrosshair2,
	animation: SuperBowAnimator2,
	arrows: {
		arrow1: {
			arrow: SuperArrow2,
			startUseAnimation: 'anim1'
		}
	}
})