StartupEvents.registry('item', e => {
    
    e.create('skytweaker:copper_flake').maxStackSize(16).displayName('Copper Flakes')
    e.create('skytweaker:iron_flake').maxStackSize(16).displayName('Iron Flakes')
    e.create('skytweaker:gold_flake').maxStackSize(16).displayName('Gold Flakes')
    e.create('skytweaker:coal_shavings').maxStackSize(16).displayName('Coal Shavings')
    e.create('skytweaker:bas_emitter').displayName('Emitter').texture('skytweaker:item/emitter')
    e.create('skytweaker:bas_sensor').displayName('Sensor').texture('skytweaker:item/sensor')
    e.create('skytweaker:adv_emitter').displayName('Advanced Emitter').texture('skytweaker:item/adv_emitter')
    e.create('skytweaker:adv_sensor').displayName('Advanced Sensor').texture('skytweaker:item/adv_sensor')

})// End Of File