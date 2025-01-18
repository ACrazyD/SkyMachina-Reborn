ServerEvents.recipes(e => {

    //BANG BANG!!
    e.remove({ mod: 'exdeorum'})
    //Crafting Everything
    // Functions
    let Nsieve = (plank, sieve) => {
        e.shaped(sieve, [
            'p p',
            'p p',
            's s'
        ],{
            p: plank,
            s: 'stick'
        })
    }

    let Csieve = (log, csieve) => {
        e.shaped(csieve, [
            'p p',
            'p p',
            's s'
        ],{
            p: log,
            s: 'stick'
        })
    }

    let Nbarrel = (plank,slab,barrel) => {
        e.shaped(barrel, [
            'p p',
            'p p',
            'psp'
        ],{
            p: plank,
            s: slab
        })
    }

    let crucible = (log, slab, crucible) => {
        e.shaped(crucible, [
            'p p',
            'p p',
            'psp'
        ],{
            p: log,
            s: slab
        })
    }


    //Recipes
    // Normal Sieves
    Nsieve('oak_planks', 'exdeorum:oak_sieve')
    Nsieve('spruce_planks', 'exdeorum:spruce_sieve')
    Nsieve('birch_planks', 'exdeorum:birch_sieve')
    Nsieve('jungle_planks', 'exdeorum:jungle_sieve')
    Nsieve('acacia_planks', 'exdeorum:acacia_sieve')
    Nsieve('dark_oak_planks', 'exdeorum:dark_oak_sieve')
    Nsieve('crimson_planks', 'exdeorum:crimson_sieve')
    Nsieve('warped_planks', 'exdeorum:warped_sieve')
    Nsieve('cherry_planks', 'exdeorum:cherry_sieve')
    Nsieve('bamboo_planks', 'exdeorum:bamboo_sieve')
    Nsieve('ars_nouveau:archwood_planks', 'exdeorum:archwood_sieve')
    // Compressed Seives
    Csieve('oak_log', 'exdeorum:oak_compressed_sieve')
    Csieve('spruce_log', 'exdeorum:spruce_compressed_sieve')
    Csieve('birch_log', 'exdeorum:birch_compressed_sieve')
    Csieve('jungle_log', 'exdeorum:jungle_compressed_sieve')
    Csieve('acacia_log', 'exdeorum:acacia_compressed_sieve')
    Csieve('dark_oak_log', 'exdeorum:dark_oak_compressed_sieve')
    Csieve('crimson_stem', 'exdeorum:crimson_compressed_sieve')
    Csieve('warped_stem', 'exdeorum:warped_compressed_sieve')
    Csieve('cherry_log', 'exdeorum:cherry_compressed_sieve')
    Csieve('bamboo_block', 'exdeorum:bamboo_compressed_sieve')
    Csieve('ars_nouveau:blue_archwood_log', 'exdeorum:blue_archwood_compressed_sieve')
    Csieve('ars_nouveau:red_archwood_log', 'exdeorum:red_archwood_compressed_sieve')
    Csieve('ars_nouveau:green_archwood_log', 'exdeorum:green_archwood_compressed_sieve')
    Csieve('ars_nouveau:purple_archwood_log', 'exdeorum:purple_archwood_compressed_sieve')
    // Barrels
    Nbarrel('oak_planks', 'oak_slab', 'exdeorum:oak_barrel')
    Nbarrel('spruce_planks', 'spruce_slab', 'exdeorum:spruce_barrel')
    Nbarrel('birch_planks', 'birch_slab', 'exdeorum:birch_barrel')
    Nbarrel('jungle_planks', 'jungle_slab', 'exdeorum:jungle_barrel')
    Nbarrel('acacia_planks', 'acacia_slab', 'exdeorum:acacia_barrel')
    Nbarrel('dark_oak_planks', 'dark_oak_slab', 'exdeorum:dark_oak_barrel')
    Nbarrel('crimson_planks', 'crimson_slab', 'exdeorum:crimson_barrel')
    Nbarrel('warped_planks', 'warped_slab', 'exdeorum:warped_barrel')
    Nbarrel('cherry_planks', 'cherry_slab', 'exdeorum:cherry_barrel')
    Nbarrel('bamboo_planks', 'bamboo_slab', 'exdeorum:bamboo_barrel')
    Nbarrel('ars_nouveau:archwood_planks', 'ars_nouveau:archwood_slab', 'exdeorum:archwood_barrel')
    // crucible
    crucible('oak_log', 'oak_slab', 'exdeorum:oak_crucible')
    crucible('spruce_log', 'spruce_slab', 'exdeorum:spruce_crucible')
    crucible('birch_log', 'birch_slab', 'exdeorum:birch_crucible')
    crucible('jungle_log', 'jungle_slab', 'exdeorum:jungle_crucible')
    crucible('acacia_log', 'acacia_slab', 'exdeorum:acacia_crucible')
    crucible('dark_oak_log', 'dark_oak_slab', 'exdeorum:dark_oak_crucible')
    crucible('crimson_stem', 'crimson_slab', 'exdeorum:crimson_crucible')
    crucible('warped_stem', 'warped_slab', 'exdeorum:warped_crucible')
    crucible('cherry_log', 'cherry_slab', 'exdeorum:cherry_crucible')
    crucible('bamboo_block', 'bamboo_slab', 'exdeorum:bamboo_crucible')
    crucible('ars_nouveau:blue_archwood_log', 'ars_nouveau:archwood_slab', 'exdeorum:blue_archwood_crucible')
    crucible('ars_nouveau:red_archwood_log', 'ars_nouveau:archwood_slab', 'exdeorum:red_archwood_crucible')
    crucible('ars_nouveau:green_archwood_log', 'ars_nouveau:archwood_slab', 'exdeorum:green_archwood_crucible')
    crucible('ars_nouveau:purple_archwood_log', 'ars_nouveau:archwood_slab', 'exdeorum:purple_archwood_crucible')


})
// End of File