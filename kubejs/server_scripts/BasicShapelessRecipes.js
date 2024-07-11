console.info('Shapeless Recipes: Registering recipes...')
ServerEvents.recipes((e) => {
	//Rewooding the BadWoods
	//e.shapeless('2x create_dd:rose_planks', '#create_dd:rose_logs')
	//e.shapeless('2x create_dd:smoked_planks', '#create_dd:smoked_logs')
	//e.shapeless('2x create_dd:spirit_planks', '#create_dd:spirit_logs')
	//e.shapeless('2x create_dd:rubber_planks', '#create:rubber_logs')
	e.shapeless(
		'2x integrateddynamics:menril_planks',
		'#integrateddynamics:menril_logs'
	)

	//Item resets
	e.shapeless('gtceu:item_filter', 'gtceu:item_filter')
	e.shapeless('gtceu:item_tag_filter', 'gtceu:item_tag_filter')
	e.shapeless('gtceu:fluid_filter', 'gtceu:fluid_filter')
	e.shapeless('gtceu:fluid_tag_filter', 'gtceu:fluid_tag_filter')
	e.shapeless('endertanks:ender_tank', 'endertanks:ender_tank')
	e.shapeless('enderio:fluid_tank', 'enderio:fluid_tank')
	e.shapeless(
		'enderio:pressurized_fluid_tank',
		'enderio:pressurized_fluid_tank'
	)

	// ender_pearl_dust
	e.shapeless('4x gtceu:ender_pearl_dust', [
		'gtceu:beryllium_dust',
		'4x gtceu:potassium_dust',
	])

	e.shapeless('create:propeller', 'gtceu:iron_rotor')
	e.shapeless('gtceu:iron_rotor', 'create:propeller')

	e.shapeless('tfmg:screw', 'gtceu:steel_screw')
	e.shapeless('gtceu:steel_screw', 'tfmg:screw')
}) //End Of File
