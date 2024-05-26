console.info('CustomGreging: Working Around some Greg Jank...')
ServerEvents.recipes(e => {

    //Functions to make Redneck Greging easier
    function cframe(material, output) {
        e.shaped(output,
            [
                'rrr',
                'rtr',
                'rrr'
            ], {
            r: material,
            t: '#forge:tools/wrenches'
        })
    }

    function crodf(material, output) {
        e.shaped(output,
            [
                't ',
                ' i'
            ], {
            i: material,
            t: '#forge:tools/files'
        })
    }

    function crods(material, output) {
        e.shaped(output,
            [
                't',
                'l'
            ], {
            l: material,
            t: '#forge:tools/saws'
        })
    }

    function cgear(material1, material2, output) {
        e.shaped(output,
            [
                'rpr',
                'ptp',
                'rpr'
            ], {
            r: material1,
            p: material2,
            t: '#forge:tools/wrenches'
        })
    }

    function cplate(material, output) {
        e.shaped(output,
            [
                't',
                'r',
                'r'
            ], {
            r: material,
            t: '#forge:tools/hammers'
        })
    }

    function clrod(material, output) {
        e.shaped(output,
            [
                'rtr'
            ], {
            r: material,
            t: '#forge:tools/hammers'
        })
    }

    function cdouble(material, output) {
        e.shaped(output,
            [
                'h',
                'r',
                'r'
            ], {
            r: material,
            h: '#forge:tools/hammers'
        })
    }

    function csgear(material1, material2, output) {
        e.shaped(output,
            [
                ' r ',
                'hpw',
                ' r '
            ], {
            r: material1,
            p: material2,
            h: '#forge:tools/hammers',
            w: '#forge:tools/wire_cutters'
        })
    }




    //Adding RedNeck Greg Recipes
    cframe('kubejs:andesite_alloy_rod', 'kubejs:andesite_alloy_frame')
    crodf('create:andesite_alloy', 'kubejs:andesite_alloy_rod')
    crods('kubejs:andesite_alloy_long_rod', '2x kubejs:andesite_alloy_rod')
    cgear('kubejs:andesite_alloy_rod', 'kubejs:andesite_alloy_plate', 'kubejs:andesite_alloy_gear')
    cplate('create:andesite_alloy', 'kubejs:andesite_alloy_plate')
    clrod('kubejs:andesite_alloy_rod', 'kubejs:andesite_alloy_long_rod')
    cdouble('kubejs:andesite_alloy_plate', 'kubejs:double_andesite_alloy_plate')
    csgear('kubejs:andesite_alloy_rod', 'kubejs:andesite_alloy_plate', 'kubejs:andesite_alloy_small_gear')





})//End Of File