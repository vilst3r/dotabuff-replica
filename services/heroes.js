/* converting outdated heroName names from the Steam API */
const getValidHeroNames = heroName => {
    switch (heroName) {
    	case 'npc_dota_hero_antimage':
    		return 'npc_dota_hero_anti-mage'
    		
    	case 'npc_dota_hero_zuus':
    		return 'npc_dota_hero_zeus'
    		
    	case 'npc_dota_hero_furion':
    		return 'npc_dota_hero_prophet'
    		
    	case 'npc_dota_hero_centaur':
    		return 'npc_dota_hero_centaur_warrunner'
    		
    	case 'npc_dota_hero_doom_bringer':
    		return 'npc_dota_hero_doom'
    		
    	case 'npc_dota_hero_magnataur':
    		return 'npc_dota_hero_magnus'
    		
    	case 'npc_dota_hero_necrolyte':
    		return 'npc_dota_hero_necrolyte'
    		
    	case 'npc_dota_hero_nevermore':
    		return 'npc_dota_hero_shadow_fiend'
    		
    	case 'npc_dota_hero_queenofpain':
    		return 'npc_dota_hero_queen_of_pain'
    		
    	case 'npc_dota_hero_rattletrap':
    		return 'npc_dota_hero_queen_of_pain'
    		
    	case 'npc_dota_hero_shredder':
    		return 'npc_dota_hero_timbersaw'
    		
    	case 'npc_dota_hero_treant':
    		return 'npc_dota_hero_treant_protector'
    		
    	case 'npc_dota_hero_vengefulspirit':
    		return 'npc_dota_hero_vengeful_spirit'
    		
    	case 'npc_dota_hero_windrunner':
    		return 'npc_dota_hero_windranger'
    		
    	default:
    		return heroName
    }
}

const capitalizeLocalisedName = localName => {
	let result = [] 

	for (var i = 0; i < localName.length; i++) {
		if (i == 0 || (i > 0 && (localName[i - 1] == ' ' || localName[i - 1] == '-'))) {
			result.push(localName[i].toUpperCase())
		}
		else {
			result.push(localName[i])
		}
	}

	return result.join('')
} 

function sortHeroMap(map) {
    map.sort( (a, b) =>
    (a.localized_name < b.localized_name) ?
      -1
    :
      (a.localized_name > b.localized_name) ? 1 : 0
    )    
}

module.exports = {
	getValidHeroNames: getValidHeroNames,
	capitalizeLocalisedName: capitalizeLocalisedName,
	sortHeroMap: sortHeroMap
}