let $LevelPlatformHelper = Java.loadClass('dev.latvian.mods.kubejs.platform.LevelPlatformHelper')

LycheeEvents.customAction('consume_item_on_depot', event => {
    event.action.applyFunc = (recipe, ctx, times) => {
        let be = ctx.getParam('block_entity')
        let inv = $LevelPlatformHelper.get().getInventoryFromBlockEntity(be, 'up')
        inv.extractItem(0, 9, false) // Extract 9 items
    }
})

LycheeEvents.customCondition('has_item_on_depot', event => {
    let ingredient = Ingredient.of(event.data.ingredient)
    event.condition.testFunc = (recipe, ctx, times) => {
        let be = ctx.getParam('block_entity')
        let inv = $LevelPlatformHelper.get().getInventoryFromBlockEntity(be, 'up')
        let stack = inv.getStackInSlot(0)
        return ingredient.test(stack) && stack.getCount() >= 9 ? times : 0 // Check if there are at least 9 items
    }
})