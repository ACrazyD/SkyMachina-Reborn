console.log('Botania: Registering recipes...')
ServerEvents.recipes(e => {
    console.log('Removing pure daisy recipes...')
    e.remove({ id: 'botania:pure_daisy/livingwood_log' })
    e.remove({ id: 'botania:pure_daisy/livingwood' })
    e.remove({ id: 'botania:pure_daisy/livingrock' })

    console.log('Adding replacement recipes...')
    e.recipes.botania.pure_daisy("botania:livingwood_log", "gtceu:treated_wood_planks")
})//End Of File