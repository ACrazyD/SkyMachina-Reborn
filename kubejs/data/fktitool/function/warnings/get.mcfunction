# fkdev tag
execute as FunkyToc unless entity @s[tag=fkdev] run tellraw @s [{"text":"[fktool] DEV tag not found ","color":"red"},{"text":"[add fkdev tag]","bold":true,"color":"aqua","clickEvent":{"action":"run_command","value":"/tag FunkyToc add fkdev"}}]

# fktool folder not renamed
# DO NOT RENAME THIS NAMESPACE CALL
execute as FunkyToc run function fktool:warnings/namespace
# DO NOT RENAME THIS NAMESPACE CALL

# tick
execute if score McVersion fktool matches 12004.. run function fktitool:warnings/tick_rate
