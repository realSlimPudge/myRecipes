import { defineStore } from 'pinia'

export interface Product {
	id: number
	title: string
	instructions: string | null
	ingredients: string | null
	prep_time: number | null
	cook_time: number | null
	servings: number | null
}

export const useFavoriteStore = defineStore('favorite', {
	state: () => ({
		favorite: [] as Product[],
	}),
	actions: {
		addToFavorite(product: Product) {
			const exist = this.favorite.some(item => item.id === product.id)
			if (!exist) {
				this.favorite.push(product)
			}
		},
		removeFavorite(productId: number) {
			this.favorite = this.favorite.filter(item => item.id !== productId)
		},
	},
})
