let bannedItems = [
    'minecraft:bedrock'
  ]
  bannedItems.forEach(item => {
    PlayerEvents.inventoryChanged(item, event => {
      event.player.tell([
          "Item ",
          Text.yellow(item),
          " has been ",
          Text.red("removed"),
          ".\nReason: This item is banned."
        ]);
      event.player.inventory.clear(event.item)
    })
  })