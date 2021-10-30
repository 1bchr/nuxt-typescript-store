export interface StoreProfile {
  settings: {
    storeName: string
  }
}

export interface CurrentCategory {
  id: number
  name: string
}

export interface ImageDetails {
  url: string
  width: number
  height: number
}

export interface CategoryItem {
  id: number
  parentId: number
  orderBy: number
  hdThumbnailUrl: string
  thumbnailUrl: string
  imageUrl: string
  originalImageUrl: string
  originalImage: ImageDetails
  name: string
  thumbnail: ImageDetails
  nameTranslated: any
  url: string
  productCount: number
  enabledProductCount: number
  description: string
  descriptionTranslated: any
  enabled: boolean
  productIds: number[]
}

export interface Category {
  total: number
  count: number
  offset: number
  limit: number
  items: CategoryItem[]
}
