console.info('Create Coiler: Registering recipes...')

const lv = 700

ServerEvents.recipes(e => {

    function tcoilerRecipe(input, count, output, time) {
        e.custom({
            "type": "vintageimprovements:coiling",
            "ingredients": [
                {
                    "tag" : input
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": count
                }
            ],
            "processingTime": time,
        })
    }


    //Greg Springs Large
    tcoilerRecipe('forge:rods/long/aluminium', 1, 'gtceu:aluminium_spring', lv)
    tcoilerRecipe('forge:rods/long/copper', 1, 'gtceu:copper_spring', lv)
    tcoilerRecipe('forge:rods/long/europium', 1, 'gtceu:europium_spring', lv)
    tcoilerRecipe('forge:rods/long/gold', 1, 'gtceu:gold_spring', lv)
    tcoilerRecipe('forge:rods/long/iron', 1, 'gtceu:iron_spring', lv)
    tcoilerRecipe('forge:rods/long/lead', 1, 'gtceu:lead_spring', lv)
    tcoilerRecipe('forge:rods/long/tin', 1, 'gtceu:tin_spring', lv)
    tcoilerRecipe('forge:rods/long/tungsten', 1, 'gtceu:tungsten_spring', lv)
    tcoilerRecipe('forge:rods/long/naquadah', 1, 'gtceu:naquadah_spring', lv)
    tcoilerRecipe('forge:rods/long/cupronickel', 1, 'gtceu:cupronickel_spring', lv)
    tcoilerRecipe('forge:rods/long/kanthal', 1, 'gtceu:kanthal_spring', lv)
    tcoilerRecipe('forge:rods/long/nichrome', 1, 'gtceu:nichrome_spring', lv)
    tcoilerRecipe('forge:rods/long/nioium_titanium', 1, 'gtceu:nioium_titanium_spring', lv)
    tcoilerRecipe('forge:rods/long/rtm_alloy', 1, 'gtceu:rtm_alloy_spring', lv)
    tcoilerRecipe('forge:rods/long/steel', 1, 'gtceu:steel_spring', lv)
    tcoilerRecipe('forge:rods/long/vanadium_gallium', 1, 'gtceu:vanadium_gallium_spring', lv)
    tcoilerRecipe('forge:rods/long/yttrium_barium_cuprate', 1, 'gtceu:yttrium_barium_cuprate_spring', lv)
    tcoilerRecipe('forge:rods/long/tungsten_steel', 1, 'gtceu:tungsten_steel_spring', lv)
    tcoilerRecipe('forge:rods/long/naquadah_alloy', 1, 'gtceu:naquadah_alloy_spring', lv)
    tcoilerRecipe('forge:rods/long/hssg', 1, 'gtceu:hssg_spring', lv)
    tcoilerRecipe('forge:rods/long/hsls', 1, 'gtceu:hsls_spring', lv)
    tcoilerRecipe('forge:rods/long/molybdenum_disilicide', 1, 'gtceu:molybdenum_disilicide_spring', lv)

    //Greg Springs Small
    tcoilerRecipe('forge:rods/aluminium', 1, 'gtceu:small_aluminium_spring', lv)
    tcoilerRecipe('forge:rods/copper', 1, 'gtceu:small_copper_spring', lv)
    tcoilerRecipe('forge:rods/gold', 1, 'gtceu:small_gold_spring', lv)
    tcoilerRecipe('forge:rods/iron', 1, 'gtceu:small_iron_spring', lv)
    tcoilerRecipe('forge:rods/lead', 1, 'gtceu:small_lead_spring', lv)
    tcoilerRecipe('forge:rods/tin', 1, 'gtceu:small_tin_spring', lv)
    tcoilerRecipe('forge:rods/tungsten', 1, 'gtceu:small_tungsten_spring', lv)
    tcoilerRecipe('forge:rods/niobium_titanium', 1, 'gtceu:small_niobium_titanium_spring', lv)
    tcoilerRecipe('forge:rods/steel', 1, 'gtceu:small_steel_spring', lv)
    tcoilerRecipe('forge:rods/vanadium_gallium', 1, 'gtceu:small_vanadium_gallium_spring', lv)
    tcoilerRecipe('forge:rods/yttrium_barium_cuprate', 1, 'gtceu:small_yttrium_barium_cuprate_spring', lv)

    //Coiler Custom Springs



})//End Of File