# set / reset
execute unless entity @e[type=minecraft:marker,tag=fktool.systime,limit=1] run schedule function fktitool:systime/install 1t
execute at @e[type=minecraft:marker,tag=fktool.systime,limit=1] unless block ~ ~ ~ repeating_command_block run schedule function fktitool:systime/install 1t

# get
execute if score McVersion fktool matches 12003.. as @e[type=minecraft:marker,tag=fktool.systime,limit=1] at @s run function fktitool:systime/read_1.20
execute if score McVersion fktool matches 11904..12002 as @e[type=minecraft:marker,tag=fktool.systime,limit=1] at @s run function fktitool:systime/read_1.19
