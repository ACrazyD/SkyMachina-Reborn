console.info('Create Seqenced: Registering recipes...')
ServerEvents.recipes(e => {

	e.remove({ output: 'create:precision_mechanism' })

    let pm = 'create:incomplete_precision_mechanism'

    console.log('create sequenced loading?')
	//Create Percision Mechanism Rework :)
    e.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130.0),
		Item.of('gtceu:brass_plate').withChance(8.0),
		Item.of('create:large_cogwheel').withChance(8.0),
		Item.of('gtceu:vacuume_tube').withChance(5.0),
		Item.of('gtceu:bronze_gear').withChance(2.0),
		Item.of('gtceu:copper_single_wire').withChance(2.0),
		Item.of('gtceu:glass_dust').withChance(2.0),
		'iron_nugget',
		'cobblestone'
	], 'gtceu:brass_plate', [
		e.recipes.createDeploying(pm, [pm, 'create:large_cogwheel']),
        e.recipes.createDeploying(pm, [pm, 'gtceu:vacuum_tube']),
        e.recipes.createDeploying(pm, [pm, 'gtceu:bronze_gear']),
        e.recipes.createDeploying(pm, [pm, 'gtceu:vacuum_tube']),
        e.recipes.createDeploying(pm, [pm, 'create:large_cogwheel']),
        e.recipes.createPressing(pm,pm)
	]).transitionalItem(pm).loops(3)

})//End Of File