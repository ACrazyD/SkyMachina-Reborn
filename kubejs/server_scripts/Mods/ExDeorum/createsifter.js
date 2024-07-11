console.info('CreateSifter: Recipes and Tweaks...')
ServerEvents.recipes(e => {

    e.remove({ mod: 'createsifter' })
    e.shapeless('createsifter:string_mesh', 'exdeorum:string_mesh')
    e.shapeless('exdeorum:string_mesh', 'createsifter:string_mesh')



    e.recipes.createsifterSifting([
        Item.of('minecraft:iron_nugget').withChance(0.45),
        Item.of('minecraft:iron_nugget').withChance(0.25),
        Item.of('create:copper_nugget').withChance(0.35),
        Item.of('gtceu:tin_nugget').withChance(0.3),
        Item.of('create:zinc_nugget').withChance(0.25),
        Item.of('minecraft:flint').withChance(0.6),
        Item.of('exdeorum:andesite_pebble').withChance(0.6)
        ],
        ['minecraft:gravel','createsifter:string_mesh'])





    /*sieve('exdeorum:string_mesh', 0.45, gravel, 'gtceu:crushed_iron_ore');
    sieve('exdeorum:string_mesh', 0.25, gravel, 'gtceu:crushed_magnetite_ore');
    sieve('exdeorum:string_mesh', 0.35, gravel, 'gtceu:crushed_copper_ore');
    sieve('exdeorum:string_mesh', 0.3, gravel, 'gtceu:crushed_tin_ore');
    sieve('exdeorum:string_mesh', 0.25, gravel, 'gtceu:crushed_sphalerite_ore'); */
})//End Of File