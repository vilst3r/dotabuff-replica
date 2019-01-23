import fs from 'fs'

class HeroService {
	getHeroes(api) {
		return api.getHeroes()
		.then(body => body.result.heroes.map(hero => {
					hero.icon_url = api.getHeroIconPath(hero.name, "full.png");
					hero.name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
					hero.localized_name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
						.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
					return hero      
			})
			.sort((a, b) => a.localized_name < b.localized_name ? -1 : a.localized_name == b.localized_name ? 0 : 1)
		)
		.catch(error => error)
	}

	getHero(api, heroId) {
		return api.getHeroes()
		.then(body => body.result.heroes.filter(hero => hero.id == heroId))
		.then(hero => hero[0])
		.then(hero => {
			hero.icon_url = api.getHeroIconPath(hero.name, "full.png")
			hero.localized_name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
				.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
			return hero
		})
		.catch(error => error)
	}
}

// Use for caching data
const writeToDisk = (body) => {
	const data = body.map(hero => ({name: hero.name, localized_name: hero.localized_name}))
	fs.writeFile('cached_data/heroes.json', JSON.stringify(data, null, 4), (() => console.log('error writing')))
}

export default HeroService