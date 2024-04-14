console.info('TOOLTIPS script loading...')

const bannedItems = [
    {
        id: 'minecraft:bedrock',
        text: 'Testing'
    },
    {
        id: 'minecraft:barrier',
        text: 'Testing Still'
    }
]

ItemEvents.tooltip(event => {

bannedItems.forEach((bannedItems) => {
    event.add(bannedItems.id,
        [
            Text.of(TextColor.RED, "This item is banned."),
            Text.of(bannedItems.text)
        ]
    )
})

})//End Of File