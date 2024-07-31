console.info('Create Mixing: Registering recipes...')
ServerEvents.recipes((e) => {

	//Quartz Solution
	e.recipes.createMixing([Fluid.water(10)], 'gtceu:nether_quartz_dust'), [Fluid.of('kubejs:quartz_solution')].heated()

	//BronzeRefactor
	e.recipes
		.createMixing('2x gtceu:bronze_ingot', [
			'minecraft:copper_ingot',
			'minecraft:copper_ingot',
			'gtceu:tin_ingot',
			'create:zinc_nugget',
		])
		.heated()
}) //End Of File
