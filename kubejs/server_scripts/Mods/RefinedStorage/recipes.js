console.info('RefinedStorage: Registering recipes...')
ServerEvents.recipes(e => {

    e.remove({ mod: 'refinedstorage' })
    e.remove({ mod: 'rsrequestify' })
    e.remove({ mod: 'extradisks' })

})//End Of File