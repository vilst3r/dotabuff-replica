import fs from 'fs'

class HeroService {
	getHeroes(api) {
		let result
		try {
			result = fs.readFileSync('cached_data/heroes.json')
			return new Promise((resolve) => resolve(JSON.parse(result)))
		} catch(err) {
			console.log("Writing data to cache directory")

			return api.getHeroes()
			.then(({result: {heroes}}) => 
				heroes.map(hero => {
					hero.icon_url = api.getHeroIconPath(hero.name, "full.png");
					hero.name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
					hero.localized_name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
						.split(' ').map(word => 
							word.charAt(0).toUpperCase() + word.slice(1)
						)
						.join(' ')
					return hero      
				})
				.sort((a, b) => a.localized_name < b.localized_name ? -1 : a.localized_name == b.localized_name ? 0 : 1)
			)
			.then(heroes => {
				result = heroes
				let hashMap = {}
				
				heroes.map(hero => hashMap[hero.id] = hero)
				return hashMap
			})
			.then(hashMap => {
				fs.mkdir('cached_data', err => err ? console.log('Writing directory failed!\n' + err) : null)
				fs.writeFile('cached_data/heroes.json', 
					JSON.stringify(hashMap, null, 4), 
					(err => err ? console.log('Writing file failed!\n' + err) : null)
				)
				return result
			})
			.catch(error => error)
		}
	}

	getHero(api, heroId) {
		let result
		try {
			result = fs.readFileSync('cached_data/heroes.json')
			return new Promise((resolve) => resolve(JSON.parse(result)[heroId]))
		} catch(err) {
			console.log("Data for hero_id:%d is not cached - making call to SDK with given id", heroId)

			return api.getHeroes()
			.then(body => body.result.heroes.filter(hero => hero.id == heroId))
			.then(hero => hero[0])
			.then(hero => {
				hero.icon_url = api.getHeroIconPath(hero.name, "full.png")
				hero.name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
				hero.localized_name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
						.split(' ').map(word => 
							word.charAt(0).toUpperCase() + word.slice(1)
						).join(' ')
				return hero
			})
			.catch(error => error)
		}
	}
}

export default HeroService