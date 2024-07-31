console.info('RefinedStorage: Registering recipes...')
ServerEvents.recipes(e => {

    e.remove({ mod: 'refinedstorage' })

})//End Of File