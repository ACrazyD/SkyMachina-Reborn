ServerEvents.recipes(e => {

    // simple_ore_generator
    e.remove({ id: 'simple_resource_generators:simple_ore_generator_recipe' })
    e.shaped('simple_resource_generators:simple_ore_generator', [
        'FAF',
        'BCB',
        'GDG',
    ], {
        A: '#forge:gears/steel',
        B: 'gtceu:nickel_small_item_pipe',
        C: 'simple_resource_generators:raw_conversion_generator',
        D: 'gtceu:lead_rotor',
        F: '#forge:plates/nickel',
        G: '#forge:springs/lead',
    }
    )

    // random_ore_generator
    e.remove({ output: 'simple_resource_generators:random_ore_generator' })
    e.shaped('simple_resource_generators:random_ore_generator', [
        'FAF',
        'BCB',
        'GDG',
    ], {
        A: '#forge:gears/steel',
        B: 'gtceu:nickel_small_item_pipe',
        C: 'simple_resource_generators:random_ore_block_generator_placement',
        D: 'gtceu:lead_rotor',
        F: '#forge:plates/nickel',
        G: '#forge:springs/lead',
    }
    )

})//End Of File