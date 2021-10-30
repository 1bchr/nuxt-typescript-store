export interface ProductGalleryImages {
  id: number
  imageUrl: string
  smallThumbnailUrl: string
  thumbnailUrl: string
}

export interface Product {
  name: string
  description: string
  galleryImages: ProductGalleryImages[]
  defaultDisplayedPrice: number
  defaultDisplayedPriceFormatted: string
}

export interface ProductsList {
  count: number
  limit: number
  offset: number
  total: number
  items: Product[]
}
