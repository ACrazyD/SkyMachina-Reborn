console.info('Lychee: Tinkering')
ServerEvents.recipes(e => {

    e.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "tag": "exdeorum:hammers"
            },
            "block_in": "create:depot",
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:iron_ingot"
                },
                {
                    "type": "prevent_default"
                },
                {
                    "type": "custom",
                    "id": "consume_item_on_depot"
                }
            ],
            "contextual": {
                "type": "custom",
                "id": "has_item_on_depot",
                "ingredient": {
                    "item": "minecraft:iron_nugget",
                    "count": 9
                }
            }
        }
    )

    e.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "tag": "exdeorum:hammers"
            },
            "block_in": "create:depot",
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:copper_ingot"
                },
                {
                    "type": "prevent_default"
                },
                {
                    "type": "custom",
                    "id": "consume_item_on_depot"
                }
            ],
            "contextual": {
                "type": "custom",
                "id": "has_item_on_depot",
                "ingredient": {
                    "item": "create:copper_nugget",
                    "count": 9
                }
            }
        }
    )

    e.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "tag": "exdeorum:hammers"
            },
            "block_in": "create:depot",
            "post": [
                {
                    "type": "drop_item",
                    "item": "create:zinc_ingot"
                },
                {
                    "type": "prevent_default"
                },
                {
                    "type": "custom",
                    "id": "consume_item_on_depot"
                }
            ],
            "contextual": {
                "type": "custom",
                "id": "has_item_on_depot",
                "ingredient": {
                    "item": "create:zinc_nugget",
                    "count": 9
                }
            }
        }
    )

    e.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "tag": "exdeorum:hammers"
            },
            "block_in": "create:depot",
            "post": [
                {
                    "type": "drop_item",
                    "item": "gtceu:tin_ingot"
                },
                {
                    "type": "prevent_default"
                },
                {
                    "type": "custom",
                    "id": "consume_item_on_depot"
                }
            ],
            "contextual": {
                "type": "custom",
                "id": "has_item_on_depot",
                "ingredient": {
                    "item": "gtceu:tin_nugget",
                    "count": 9
                }
            }
        }
    )

})//End Of File