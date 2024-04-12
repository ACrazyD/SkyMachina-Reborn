ServerEvents.recipes(event => {

  let ULV = 8
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920


// atomic_casing

event.recipes.gtceu.assembly_line('kubejs:assembly_line/atomic_casing')
.itemInputs('1x #forge:frames/neutronium')
.itemInputs('1x gtceu:ruthenium_trinium_americium_neutronate_hex_wire')
.itemInputs('2x #gtceu:circuits/uhv')
.itemInputs('4x gtceu:uv_field_generator')
.itemInputs('32x gtceu:highly_advanced_soc')
.itemInputs('6x #forge:double_plates/neutronium')
.itemInputs('64x #forge:bolts/neutronium')
.itemInputs('64x #forge:bolts/neutronium')
.inputFluids(Fluid.of('gtceu:argon_plasma', 1000))
.inputFluids(Fluid.of('gtceu:helium_plasma', 1000))
.inputFluids(Fluid.of('gtceu:nitrogen_plasma', 1000))
.inputFluids(Fluid.of('gtceu:oxygen_plasma', 1000))
.itemOutputs('gtceu:atomic_casing')
.duration(200)
.EUt(1966080)

// end_game

event.recipes.gtceu.assembly_line('kubejs:assembly_line/end_game')
.itemInputs('1x gtceu:atomic_casing')
.itemInputs('4x gtceu:ruthenium_trinium_americium_neutronate_hex_wire')
.itemInputs('16x #gtceu:circuits/uhv')
.itemInputs('16x gtceu:uv_sensor')
.itemInputs('16x gtceu:uv_emitter')
.itemInputs('64x gtceu:highly_advanced_soc')
.itemInputs('64x gtceu:highly_advanced_soc')
.itemInputs('12x #forge:double_plates/neutronium')
.itemInputs('64x #forge:bolts/neutronium')
.itemInputs('64x #forge:bolts/neutronium')
.inputFluids(Fluid.of('gtceu:polybenzimidazole', 1296))
.inputFluids(Fluid.of('gtceu:iron_plasma', 1000))
.inputFluids(Fluid.of('gtceu:nickel_plasma', 1000))
.itemOutputs('gtceu:end_game')
.duration(200)
.EUt(1966080)

})//End Of File