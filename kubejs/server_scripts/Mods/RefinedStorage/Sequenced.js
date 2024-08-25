console.info('Refined Seqenced: Registering recipes...')
ServerEvents.recipes(e => {

	let one = 'kubejs:incomplete_storage_module';

	e.recipes.create.sequenced_assembly([
		Item.of('kubejs:storage_module').withChance(130.0),
		Item.of('gtceu:vacuum_tube').withChance(5.0),
		Item.of('gtceu:copper_single_wire').withChance(2.0),
		Item.of('gtceu:glass_dust').withChance(2.0),
	], 'gtceu:basic_electronic_circuit', [
		e.recipes.createDeploying(one, [one, 'gtceu:vacuum_tube']),
        e.recipes.createDeploying(one, [one, 'advancedperipherals:memory_card']),
        e.recipes.createDeploying(one, [one, 'gtceu:vacuum_tube']),
		e.recipes.vintageimprovements.laser_cutting(one, one).energyCost(5000).maxChargeRate(500),
        e.recipes.createPressing(one,one)
	]).transitionalItem(one).loops(1)

})//End Of File