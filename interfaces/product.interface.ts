export interface ProductCharacteristic {
  value: string,
  name: string,
}

export interface ReviewModel {
  name: string,
  title: string,
  description: string,
  rating: number,
  createdAt: Date,
  _id: string,
  __v: number,
}

export interface ProductModel {
  _id: string,
  categories: string[],
  tags: string[],
  title: string,
  link: string,
  price: number,
  credit: number,
  oldPrice: number,
  description: string,
  characteristics: ProductCharacteristic[],
  createdAt: Date,
  updatedAt: Date,
  __v: number,
  image: string,
  initialRating: number,
  reviews: ReviewModel[],
  reviewCount: number,
  reviewAvg?: number,
  advantages: string,
}
