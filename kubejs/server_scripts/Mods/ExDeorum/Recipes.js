console.info('exdeorum: Registering Recipes...')
ServerEvents.recipes(e => {

    e.remove({output: 'exdeorum:gold_mesh'})
    e.remove({output: 'exdeorum:emerald_mesh'})
    e.remove({output: 'exdeorum:diamond_mesh'})
    e.remove({output: 'exdeorum:netherite_mesh'})
    e.remove({output: 'exdeorum:flint_mesh'})

    e.recipes.gtceu.assembler('flint_mesh')
        .itemInputs('exdeorum:string_mesh', '6x minecraft:flint')
        .itemOutputs('exdeorum:flint_mesh')
        .duration(300)
        .EUt(22);

    e.recipes.gtceu.assembler('iron_mesh')
        .itemInputs('exdeorum:flint_mesh', '16x gtceu:wrought_iron_foil')
        .itemOutputs('exdeorum:iron_mesh')
        .duration(300)
        .EUt(78);

    e.recipes.gtceu.assembler('diamond_mesh')
        .itemInputs('exdeorum:iron_mesh', '16x #forge:dusts/diamond')
        .itemOutputs('exdeorum:diamond_mesh')
        .duration(300)
        .EUt(345);

    e.recipes.gtceu.assembler('netherite_mesh')
        .itemInputs('exdeorum:emerald_mesh', '4x minecraft:netherite_ingot')
        .itemOutputs('exdeorum:netherite_mesh')
        .duration(300)
        .EUt(4096);

    e.recipes.gtceu.forge_hammer('gravel_to_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16);

    e.recipes.gtceu.forge_hammer('sand_to_dust')
        .itemInputs('minecraft:sand')
        .itemOutputs('exdeorum:dust')
        .duration(10)
        .EUt(16);

    e.recipes.gtceu.macerator('crushed_blackstone')
        .itemInputs('minecraft:blackstone')
        .itemOutputs('exdeorum:crushed_blackstone')
        .duration(10)
        .EUt(8);


})//End Of File