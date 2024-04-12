ServerEvents.recipes(event => {

  let ULV = 8
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920

// fluix_crystal

event.recipes.gtceu.mixer('kubejs:mixer/fluix_crystal')
.itemInputs('ae2:charged_certus_quartz_crystal')
.itemInputs('minecraft:redstone')
.itemInputs('minecraft:quartz')
.inputFluids(Fluid.of('minecraft:water', 50))
.itemOutputs('2x ae2:fluix_crystal')
.duration(20)
.EUt(ULV)

// glowstone_dust

event.recipes.gtceu.mixer('kubejs:mixer/glowstone_dust')
.itemInputs('#forge:dusts/certus_quartz')
.itemInputs('minecraft:redstone')
.itemInputs('gtceu:gold_dust')
.inputFluids(Fluid.of('minecraft:water', 50))
.itemOutputs('3x minecraft:glowstone_dust')
.duration(100)
.EUt(LV)

// skystone_dust

event.recipes.gtceu.mixer('kubejs:mixer/skystone_dust')
.itemInputs('#forge:dusts/certus_quartz')
.itemInputs('gtceu:nether_quartz_dust')
.itemInputs('gtceu:silver_dust')
.inputFluids(Fluid.of('gtceu:oxygen', 150))
.itemOutputs('3x ae2:sky_dust')
.duration(100)
.EUt(LV)

// pointed_dripstone

event.recipes.gtceu.mixer('kubejs:mixer/pointed_dripstone')
.itemInputs('gtceu:clay_dust')
.itemInputs('gtceu:calcite_dust')
.itemInputs('gtceu:quartz_sand_dust')
.inputFluids(Fluid.of('minecraft:water', 1000))
.itemOutputs('minecraft:pointed_dripstone')
.duration(200)
.EUt(MV)

// netherite_scrap

event.recipes.gtceu.mixer('kubejs:mixer/netherite_scrap')
.itemInputs('gtceu:chromium_dust')
.itemInputs('gtceu:aluminium_dust')
.itemInputs('gtceu:manganese_dust')
.itemInputs('4x gtceu:quartzite_gem')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 250))
.itemOutputs('4x minecraft:netherite_scrap')
.duration(200)
.EUt(LV)

// grains_of_infinity

event.recipes.gtceu.mixer('kubejs:mixer/grains_of_infinity')
.itemInputs('gtceu:netherrack_dust')
.itemInputs('gtceu:endstone_dust')
.itemOutputs('enderio:grains_of_infinity')
.duration(200)
.EUt(LV)

// conduit_binder_composite

event.recipes.gtceu.mixer('kubejs:mixer/conduit_binder_composite')
.itemInputs('gtceu:flint_dust')
.itemInputs('gtceu:clay_dust')
.inputFluids(Fluid.of('minecraft:water', 50))
.itemOutputs('2x enderio:conduit_binder_composite')
.duration(20)
.EUt(LV)

// white_concrete

event.recipes.gtceu.mixer('kubejs:mixer/white_concrete')
.itemInputs('1x minecraft:white_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:white_concrete')
.duration(20)
.EUt(ULV)

// orange_concrete

event.recipes.gtceu.mixer('kubejs:mixer/orange_concrete')
.itemInputs('1x minecraft:orange_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:orange_concrete')
.duration(20)
.EUt(ULV)

// magenta_concrete

event.recipes.gtceu.mixer('kubejs:mixer/magenta_concrete')
.itemInputs('1x minecraft:magenta_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:magenta_concrete')
.duration(20)
.EUt(ULV)

// light_blue_concrete

event.recipes.gtceu.mixer('kubejs:mixer/light_blue_concrete')
.itemInputs('1x minecraft:light_blue_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:light_blue_concrete')
.duration(20)
.EUt(ULV)

// yellow_concrete

event.recipes.gtceu.mixer('kubejs:mixer/yellow_concrete')
.itemInputs('1x minecraft:yellow_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:yellow_concrete')
.duration(20)
.EUt(ULV)

// lime_concrete

event.recipes.gtceu.mixer('kubejs:mixer/lime_concrete')
.itemInputs('1x minecraft:lime_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:lime_concrete')
.duration(20)
.EUt(ULV)

// pink_concrete

event.recipes.gtceu.mixer('kubejs:mixer/pink_concrete')
.itemInputs('1x minecraft:pink_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:pink_concrete')
.duration(20)
.EUt(ULV)

// gray_concrete

event.recipes.gtceu.mixer('kubejs:mixer/gray_concrete')
.itemInputs('1x minecraft:gray_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:gray_concrete')
.duration(20)
.EUt(ULV)

// light_gray_concrete

event.recipes.gtceu.mixer('kubejs:mixer/light_gray_concrete')
.itemInputs('1x minecraft:light_gray_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:light_gray_concrete')
.duration(20)
.EUt(ULV)

// cyan_concrete

event.recipes.gtceu.mixer('kubejs:mixer/cyan_concrete')
.itemInputs('1x minecraft:cyan_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:cyan_concrete')
.duration(20)
.EUt(ULV)

// purple_concrete

event.recipes.gtceu.mixer('kubejs:mixer/purple_concrete')
.itemInputs('1x minecraft:purple_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:purple_concrete')
.duration(20)
.EUt(ULV)

// blue_concrete

event.recipes.gtceu.mixer('kubejs:mixer/blue_concrete')
.itemInputs('1x minecraft:blue_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:blue_concrete')
.duration(20)
.EUt(ULV)

// brown_concrete

event.recipes.gtceu.mixer('kubejs:mixer/brown_concrete')
.itemInputs('1x minecraft:brown_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:brown_concrete')
.duration(20)
.EUt(ULV)

// green_concrete

event.recipes.gtceu.mixer('kubejs:mixer/green_concrete')
.itemInputs('1x minecraft:green_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:green_concrete')
.duration(20)
.EUt(ULV)

// red_concrete

event.recipes.gtceu.mixer('kubejs:mixer/red_concrete')
.itemInputs('1x minecraft:red_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:red_concrete')
.duration(20)
.EUt(ULV)

// black_concrete

event.recipes.gtceu.mixer('kubejs:mixer/black_concrete')
.itemInputs('1x minecraft:black_concrete_powder')
.inputFluids(Fluid.of('minecraft:water', 250))
.itemOutputs('1x minecraft:black_concrete')
.duration(20)
.EUt(ULV)

// warp_dust

event.remove ({ id: 'waystones:warp_dust'})
event.recipes.gtceu.mixer('kubejs:mixer/warp_dust')
.itemInputs('1x #forge:dusts/ender_pearl')
.itemInputs('3x #forge:dusts/amethyst')
.itemOutputs('4x waystones:warp_dust')
.duration(100)
.EUt(MV)
.circuit(1)

// gem_dust

event.recipes.gtceu.mixer('kubejs:mixer/gem_dust')
.itemInputs('1x #forge:dusts/diamond')
.itemInputs('1x #forge:dusts/emerald')
.itemInputs('1x #forge:dusts/amethyst')
.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 250))
.itemOutputs('3x apotheosis:gem_dust')
.duration(60)
.EUt(HV)

// dragon_breath

event.recipes.gtceu.mixer('kubejs:mixer/dragon_breath')
.itemInputs('1x minecraft:glass_bottle')
.itemInputs('4x #forge:dusts/endstone')
.itemInputs('4x #forge:dusts/amethyst')
.itemInputs('4x #forge:dusts/ender_eye')
.inputFluids(Fluid.of('gtceu:blaze', 576))
.inputFluids(Fluid.of('gtceu:phthalic_acid', 1000))
.itemOutputs('1x minecraft:dragon_breath')
.duration(60)
.EUt(EV)

// gem (ballast)

event.recipes.gtceu.mixer('kubejs:mixer/gem/ballast')
.itemInputs('1x #forge:exquisite_gems/monazite')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/ballast"}'))
.duration(200)
.EUt(HV)

// gem (brawlers)

event.recipes.gtceu.mixer('kubejs:mixer/gem/brawlers')
.itemInputs('1x #forge:exquisite_gems/realgar')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/brawlers"}'))
.duration(200)
.EUt(HV)

// gem (breach)

event.recipes.gtceu.mixer('kubejs:mixer/gem/breach')
.itemInputs('1x #forge:exquisite_gems/green_sapphire')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/breach"}'))
.duration(200)
.EUt(HV)

// gem (combatant)

event.recipes.gtceu.mixer('kubejs:mixer/gem/combatant')
.itemInputs('1x #forge:exquisite_gems/amethyst')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/combatant"}'))
.duration(200)
.EUt(HV)

// gem (guardian)

event.recipes.gtceu.mixer('kubejs:mixer/gem/guardian')
.itemInputs('1x #forge:exquisite_gems/olivine')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/guardian"}'))
.duration(200)
.EUt(HV)

// gem (lightning)

event.recipes.gtceu.mixer('kubejs:mixer/gem/lightning')
.itemInputs('1x #forge:exquisite_gems/topaz')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/lightning"}'))
.duration(200)
.EUt(HV)

// gem (lunar)

event.recipes.gtceu.mixer('kubejs:mixer/gem/lunar')
.itemInputs('1x #forge:exquisite_gems/lazurite')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/lunar"}'))
.duration(200)
.EUt(HV)

// gem (samurai)

event.recipes.gtceu.mixer('kubejs:mixer/gem/samurai')
.itemInputs('1x #forge:exquisite_gems/diamond')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/samurai"}'))
.duration(200)
.EUt(HV)

// gem (slipstream)

event.recipes.gtceu.mixer('kubejs:mixer/gem/slipstream')
.itemInputs('1x #forge:exquisite_gems/emerald')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/slipstream"}'))
.duration(200)
.EUt(HV)

// gem (solar)

event.recipes.gtceu.mixer('kubejs:mixer/gem/solar')
.itemInputs('1x #forge:exquisite_gems/spessartine')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/solar"}'))
.duration(200)
.EUt(HV)

// gem (splendor)

event.recipes.gtceu.mixer('kubejs:mixer/gem/splendor')
.itemInputs('1x #forge:exquisite_gems/malachite')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/splendor"}'))
.duration(200)
.EUt(HV)

// gem (tyrannical)

event.recipes.gtceu.mixer('kubejs:mixer/gem/tyrannical')
.itemInputs('1x #forge:exquisite_gems/cinnabar')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/tyrannical"}'))
.duration(200)
.EUt(HV)

// gem (warlord)

event.recipes.gtceu.mixer('kubejs:mixer/gem/warlord')
.itemInputs('1x #forge:exquisite_gems/yellow_garnet')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:common_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:common"},gem:"apotheosis:core/warlord"}'))
.duration(200)
.EUt(HV)

// gem (earth)

event.recipes.gtceu.mixer('kubejs:mixer/gem/earth')
.itemInputs('1x #forge:exquisite_gems/uvarovite')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:rare_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/earth"}'))
.duration(200)
.EUt(HV)

// gem (royalty)

event.recipes.gtceu.mixer('kubejs:mixer/gem/royalty')
.itemInputs('1x #forge:exquisite_gems/andradite')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:rare_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:overworld/royalty"}'))
.duration(200)
.EUt(HV)

// gem (endersurge)

event.recipes.gtceu.mixer('kubejs:mixer/gem/endersurge')
.itemInputs('1x #forge:exquisite_gems/opal')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:epic_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/endersurge"}'))
.duration(200)
.EUt(HV)

// gem (mageslayer)

event.recipes.gtceu.mixer('kubejs:mixer/gem/mageslayer')
.itemInputs('1x #forge:exquisite_gems/coke')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:epic_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:epic"},gem:"apotheosis:the_end/mageslayer"}'))
.duration(200)
.EUt(HV)

// gem (blood_lord)

event.recipes.gtceu.mixer('kubejs:mixer/gem/blood_lord')
.itemInputs('1x #forge:exquisite_gems/rutile')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:rare_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/blood_lord"}'))
.duration(200)
.EUt(HV)

// gem (inferno)

event.recipes.gtceu.mixer('kubejs:mixer/gem/inferno')
.itemInputs('1x #forge:exquisite_gems/almandine')
.itemInputs('4x apotheosis:gem_dust')
.itemInputs('1x apotheosis:rare_material')
.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 144))
.itemOutputs(Item.of('apotheosis:gem',
'{affix_data:{rarity:"apotheosis:rare"},gem:"apotheosis:the_nether/inferno"}'))
.duration(200)
.EUt(HV)

// mud

event.remove ({ id: 'gtceu:mixer/mud'})
event.recipes.gtceu.mixer('kubejs:mixer/mud')
.itemInputs('1x minecraft:dirt')
.inputFluids(Fluid.of('minecraft:water', 144))
.itemOutputs('2x minecraft:mud')
.duration(100)
.EUt(4)
.circuit(1)

})//End Of File