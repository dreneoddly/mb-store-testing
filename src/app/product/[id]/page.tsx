import { Heart, Minus, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface RelatedProduct {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
}

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}
async function getRelatedProducts(category: string, currentProductId: number) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`)
  if (!res.ok) throw new Error('Failed to fetch related products')
  const data = await res.json()
  return data.products
    .filter((p: RelatedProduct) => p.id !== currentProductId)
    .slice(0, 4)
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Await params before destructuring
  const { id } = await params;
  const product = await getProduct(id);
    const relatedProducts = await getRelatedProducts(product.category, product.id)
  
  return (
    <div className="min-h-screen bg-main-pink">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex gap-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>{'>'}</li>
            <li>
              <Link href="/clothes" className="hover:underline">{product.category}</Link>
            </li>
            <li>{'>'}</li>
            <li className="font-medium">{product.title}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(0, 3).map((image: string, index: number) => (
                <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-xl font-medium md:text-2xl">{product.title}</h1>
            
            <div className="flex items-center gap-4">
              <span className="text-base line-through text-gray-400 md:text-2xl">${product.price}.00$</span>
              <span className="text-base font-bold md:text-2xl">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}$</span>
              <span className="text-base text-red-500 font-bold md:text-2xl">{product.discountPercentage.toFixed(0)}% OFF</span>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <h3 className="font-medium">Size</h3>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="w-20 h-8 rounded-2xl bg-black text-white flex items-center justify-center border border-black hover:bg-white hover:text-black transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-2">
              <h3 className="font-medium">Color</h3>
              <div className="flex gap-2">
                {['purple', 'orange', 'blue', 'green', 'black'].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border border-gray-200"
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <h3 className="font-medium">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button className="p-2 hover:bg-gray-100" aria-label="Decrease quantity">
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value="1"
                    className="w-12 text-center bg-main-pink border-x"
                    readOnly
                  />
                  <button className="p-2 hover:bg-gray-100" aria-label="Increase quantity">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add to wishlist">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="px-6 py-2 bg-black border border-black text-white rounded-full hover:bg-white  hover:text-black transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6 border-t">
              <h2 className="text-lg font-medium mb-4">Description</h2>
              <div className="space-y-4 text-gray-600">
                <p>{product.description}</p>
                <div>
                  <p><span className="font-medium">Color: </span>Purple, Orange, Blue, Green, Black</p>
                  <p><span className="font-medium">Size: </span>S, M, L, XL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

                  {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-6">Related Product</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product: RelatedProduct) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="bg-white rounded-lg p-5 transition-transform hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discountPercentage.toFixed(0)}%
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">{product.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-red-500 font-bold">
                      ${product.price.toFixed(2)}$
                    </span>
                    <span className="text-gray-500 line-through text-base ml-2">
                      ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}$
                    </span>
                    <span className="text-gray-600 text-base">
                      {product.discountPercentage.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
    
  )
}