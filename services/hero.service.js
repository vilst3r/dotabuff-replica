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
	capitalizeLocalisedName: capitalizeLocalisedName,
	sortHeroMap: sortHeroMap
}

// class HeroService {
	
// }