console.info('Remover: Removing Create Directly...')
ServerEvents.recipes(e => {
    
    let idRemover = (output) =>
		e.remove({ id: output})

    let outRemover = (outputs) =>
		e.remove({ output: outputs})

    //Removing Create Casings and Machinisems
    idRemover('create:item_application/andesite_casing_from_wood')
    idRemover('create:item_application/andesite_casing_from_log')
    idRemover('create:item_application/brass_casing_from_log')
    idRemover('create:item_application/brass_casing_from_wood')
    idRemover('create:item_application/copper_casing_from_log')
    idRemover('create:item_application/copper_casing_from_wood')
    idRemover('create:item_application/railway_casing')
    idRemover('tfmg:item_application/steel_casing')
    idRemover('tfmg:item_application/heavy_macinery_casing')
    idRemover('create_dd:item_application/mithril_casing')
    idRemover('create_dd:bronze_casing_from_wood')
    idRemover('create_dd:bronze_casing_from_log')
    idRemover('create_dd:tin_casing_from_wood')
    idRemover('create_dd:tin_casing_from_log')
    idRemover('create_dd:item_application/netherite_casing')
    idRemover('create_dd:brick_casing_from_wood')
    idRemover('create_dd:brick_casing_from_log')
    idRemover('create_dd:item_application/nether_brick_casing')
    idRemover('create_dd:crafting/moddy_andesite_casing')
    idRemover('create_dd:item_application/hydraulic_casing')
    idRemover('create_dd:item_application/idustrial_casing')
    idRemover('create_dd:item_application/overburden_casing')
    idRemover('create_dd:item_application/refined_radiance_casing')
    idRemover('create_dd:acompat/create/createaddition/item_application/overcharged_casing')
    idRemover('create_dd:item_application/blaze_gold_casing')
    idRemover('create_dd:item_application/stargaze_singularity_casing')
    idRemover('create_dd:item_application/bronze_casing_from_wood')
    idRemover('create_dd:item_application/bronze_casing_from_log')
    idRemover('create_dd:item_application/shadow_steel_casing')
    idRemover('create_dd:acompat/createaddition/item_application/overcharged_casing')
    idRemover('create_dd:item_application/steel_casing')
    idRemover('create_dd:item_application/industrial_casing')
    idRemover('create_dd:item_application/brick_casing_from_wood')
    idRemover('create_dd:item_application/brick_casing_from_log')
    idRemover('create_dd:item_application/tin_casing_from_wood')
    idRemover('create_dd:item_application/tin_casing_from_log')




    //Removing ReMade Items
    outRemover('create:crushing_wheel')
    outRemover('create:shaft')
    outRemover('create:cogwheel')
    outRemover('create:large_cogwheel')
    outRemover('create:vertical_gearbox')
    outRemover('create:gearbox')
    outRemover('create:encased_chain_drive')
    outRemover('create:clutch')
    outRemover('create:gearshift')
    outRemover('create:adjestable_chain_drive')
    outRemover('create:belt_connector')
    outRemover('create:water_wheel')
    outRemover('create:large_water_wheel')
    outRemover('create:turntable')
    outRemover('create:nozzle')
    outRemover('create:encased_fan')
    outRemover('create:hand_crank')
    outRemover('create:millstone')
    outRemover('create:mechanical_press')
    outRemover('create:mechanical_mixer')
    outRemover('create:basin')
    outRemover('create:weighted_ejector')
    outRemover('create:empty_blaze_burner')
    outRemover('create:chute')
    outRemover('create:smart_chute')
    outRemover('create:depot')
    idRemover('create:crafting/kenetics/depot')
    outRemover('create:fluid_pipe')
    outRemover('create:mechanical_pump')
    outRemover('create:smart_fluid_pipe')
    outRemover('create:fluid_tank')
    outRemover('create:copper_valve_handle')
    outRemover('create:fluid_valve')
    outRemover('create:hose_pulley')
    outRemover('create:item_drain')
    outRemover('create:spout')
    idRemover('tfmg:crafting/pipes/brass_pipe_horizontal')
    idRemover('tfmg:crafting/pipes/brass_pipe_vertical')
    idRemover('tfmg:crafting/pipes/steel_pipe_horizontal')
    idRemover('tfmg:crafting/pipes/steel_pipe_vertical')
    idRemover('tfmg:crafting/pipes/aluminium_pipe_horizontal')
    idRemover('tfmg:crafting/pipes/aluminium_pipe_vertical')
    outRemover('create:propeller')
    outRemover('create:brass_hand')
    outRemover('create:whisk')

    //Create Stuffs
	e.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
	e.remove({ id: 'createaddition:mechanical_crafting/alternator' })

	/* e.remove({ mod: 'create_new_age'})
	e.remove({ mod: 'design_decor'})
	e.remove({ mod: 'vintageinprovements'})
	e.remove({ mod: 'railways'})
	e.remove({ mod: 'create'})
	e.remove({ mod: 'balancedflight'})
	e.remove({ mod: 'tfmg'})
	e.remove({ mod: 'create_dd'})
	e.remove({ mod: 'createaddition'}) */

})//End Of File