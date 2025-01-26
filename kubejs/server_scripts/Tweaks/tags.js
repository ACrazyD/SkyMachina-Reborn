ServerEvents.tags('block', e => {

})

ServerEvents.tags('item', e => {
    e.add('kubejs:owpebbles',
        [
            'skyblockessentials:dirt_chunk',
            'skyblockessentials:stone_chunk',
            'skyblockessentials:andesite_chunk',
            'skyblockessentials:diorite_chunk',
            'skyblockessentials:granite_chunk',
            'skyblockessentials:deepslate_chunk',
            'skyblockessentials:tuff_chunk',
            'skyblockessentials:calcite_chunk',
            'skyblockessentials:dripstone_chunk',
            'havenpebbles:tuff_pebble',
            'havenpebbles:stone_pebble',
            'havenpebbles:dripstone_pebble',
            'havenpebbles:diorite_pebble',
            'havenpebbles:deepslate_pebble',
            'havenpebbles:andesite_pebble',
        ]
    )

    e.add('kubejs:npebbles',
        [
            'skyblockessentials:netherrack_chunk',
            'skyblockessentials:basalt_chunk',
            'skyblockessentials:blackstone_chunk',
            'havenpebbles:netherrack_pebble',
            'havenpebbles:blackstone_pebble',
            'havenpebbles:basalt_pebble',
        ]
    )

    e.add('kubejs:epebbles',
        [
            'skyblockessentials:end_stone_chunk',
        ]
    )

})//End Of File