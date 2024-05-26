console.info('Greg Material: Registering Modifications...')
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')

GTCEuStartupEvents.materialModification(e => {

	GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_FRAME)
	GTMaterials.Brass.addFlags(GTMaterialFlags.GENERATE_FRAME)
	GTMaterials.Zinc.addFlags(GTMaterialFlags.GENERATE_FRAME)
	GTMaterials.Bronze.addFlags(GTMaterialFlags.GENERATE_FRAME)
	GTMaterials.Tin.addFlags(GTMaterialFlags.GENERATE_FRAME)

})//End Of File