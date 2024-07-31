console.info('Custom Fluids: Registering Additions...')
StartupEvents.registry('fluid', (e) => {

	e.create('quartz_solution')
        .thickTexture(0xc2c6bb)
        .bucketColor(0xc2c6bb)
        .displayName('Quartz Solution')


})//End Of File