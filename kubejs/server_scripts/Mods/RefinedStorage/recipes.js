console.info('RefinedStorage: Registering recipes...')
ServerEvents.recipes(e => {

    e.remove({ mod: 'refinedstorage' })
    e.remove({ mod: 'rsrequestify' })

})//End Of File