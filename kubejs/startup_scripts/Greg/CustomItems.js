console.info('Greg Material Registration: Registering Additions...')
//Matt Flags
const plate = GTMaterialFlags.GENERATE_PLATE;
const gear = GTMaterialFlags.GENERATE_GEAR;
const frame = GTMaterialFlags.GENERATE_FRAME;
const rod = GTMaterialFlags.GENERATE_ROD;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const dense = GTMaterialFlags.GENERATE_DENSE;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;

//Icon Sets
const DULL = GTMaterialIconSet.DULL;


GTCEuStartupEvents.registry('gtceu:material', e => {

	e.create('andesite_alloy')
		.ingot()
		.components('1x andesite', '1x iron')
		.color(0x747878)
		.iconSet(DULL)
		//.flags(plate, gear, small_gear, frame, rod, long_rod, dense)

})//End Of File //  Broken Files :/