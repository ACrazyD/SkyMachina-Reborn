ServerEvents.recipes(event => {

  let ULV = 8
  let LV = 30
  let MV = 120
  let HV = 480
  let EV = 1920
  let IV = 7680


// pressure_valve

event.remove ({ output: 'advgenerators:pressure_valve'})
event.recipes.gtceu.extruder('kubejs:extruder/pressure_valve')
.itemInputs('4x advgenerators:iron_tubing')
.notConsumable('1x gtceu:ingot_extruder_mold')
.itemOutputs('1x advgenerators:pressure_valve')
.duration(100)
.EUt(IV)


})//End Of File