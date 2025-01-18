# get hour
data modify storage fktitool:systime input set string block ~ ~ ~ LastOutput 10 11
function fktitool:systime/convert
execute store result score SysTime.hour fktool run scoreboard players operation #int fktool *= #10 fktool

data modify storage fktitool:systime input set string block ~ ~ ~ LastOutput 11 12
function fktitool:systime/convert
scoreboard players operation SysTime.hour fktool += #int fktool

# get minute
data modify storage fktitool:systime input set string block ~ ~ ~ LastOutput 13 14
function fktitool:systime/convert
execute store result score SysTime.min fktool run scoreboard players operation #int fktool *= #10 fktool

data modify storage fktitool:systime input set string block ~ ~ ~ LastOutput 14 15
function fktitool:systime/convert
scoreboard players operation SysTime.min fktool += #int fktool

# get second
data modify storage fktitool:systime input set string block ~ ~ ~ LastOutput 16 17
function fktitool:systime/convert
execute store result score SysTime.sec fktool run scoreboard players operation #int fktool *= #10 fktool

data modify storage fktitool:systime input set string block ~ ~ ~ LastOutput 17 18
function fktitool:systime/convert
scoreboard players operation SysTime.sec fktool += #int fktool