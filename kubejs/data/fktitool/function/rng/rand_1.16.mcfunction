summon minecraft:area_effect_cloud ~ 1 ~ {Tags:["fktool.rng"]}
execute store result score Random fktool run data get entity @e[type=minecraft:area_effect_cloud,tag=fktool.rng,limit=1] UUID[0] 1
scoreboard players operation Random fktool %= #101 fktool
kill @e[type=minecraft:area_effect_cloud,tag=fktool.rng]