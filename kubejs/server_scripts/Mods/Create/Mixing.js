console.info('Create Mixing: Registering recipes...')
ServerEvents.recipes((e) => {
	//BronzeRefactor
	e.recipes
		.createMixing('2x gtceu:bronze_ingot', [
			'minecraft:copper_ingot',
			'minecraft:copper_ingot',
			'gtceu:tin_ingot',
			'create:zinc_nugget',
		])
		.superheated()
}) //End Of File
