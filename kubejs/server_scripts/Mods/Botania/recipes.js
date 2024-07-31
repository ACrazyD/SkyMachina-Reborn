console.info('Botania: Registering recipes...')
ServerEvents.recipes(e => {

    e.remove({ output: 'botania:livingwood_log' })
    e.remove({ output: 'botania:livingrock' })

    //e.recipes.botania.pure_daisy("gtceu:treated_wood", "botania:livingwood_log")

})//End Of File