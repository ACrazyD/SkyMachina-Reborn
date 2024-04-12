ServerEvents.recipes(e => {

    // netherrack_gen_tier_1
    e.shaped('rfd:netherrack_gen_tier_1', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#minecraft:logs',
        C: 'minecraft:lava_bucket',
        D: 'gtceu:netherrack_dust',
        E: 'minecraft:glass',
    }
    )

    // end_gen_tier_1
    e.shaped('rfd:end_gen_tier_1', [
        'ABA',
        'CEC',
        'ADA',
    ], {
        A: 'minecraft:stone_bricks',
        B: '#minecraft:logs',
        C: 'minecraft:lava_bucket',
        D: 'gtceu:endstone_dust',
        E: 'minecraft:glass',
    }
    )

})//End Of File