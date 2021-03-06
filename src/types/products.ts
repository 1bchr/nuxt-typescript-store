export interface ProductGalleryImages {
  id: number
  imageUrl: string
  smallThumbnailUrl: string
  thumbnailUrl: string
}

export interface Product {
  id: number
  name: string
  description: string
  galleryImages: ProductGalleryImages[]
  defaultDisplayedPrice: number
  defaultDisplayedPriceFormatted: string
  categoryIds: number[]
}

export interface CartProduct extends Product {
  count?: number
}

export interface ProductsList {
  count: number
  limit: number
  offset: number
  total: number
  items: Product[]
}
