# scores
scoreboard objectives add fktool dummy

# fkversion
scoreboard players set #FktoolVersion fktool 12100
execute store success score #tmp fktool run function fktitool:fkversion
scoreboard players reset #FktoolVersion fktool
execute if score #tmp fktool matches 0 run return run tellraw @a[tag=fkdev] [{"text":"[fktool] exit: error during update","color":"red"}]

# init
function fktitool:utils/set_constants
function fktitool:difficulty/get
function fktitool:mcv/get
function fktitool:rng/get
function fktitool:warnings/get

# modules
#function fktitool:systime/get
