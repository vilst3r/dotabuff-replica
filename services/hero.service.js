class HeroService {

	getHeroes(api) {
		return api.getHeroes()
		.then(body => 
			body.result.heroes.map(hero => {
					hero.icon_url = api.getHeroIconPath(hero.name, "full.png");
					hero.name = hero.name.replace(/npc_dota_hero_/g, '').replace(/_/g, ' ')
					hero.localized_name = capitalizeLocalisedName(hero.name)
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

export default HeroService