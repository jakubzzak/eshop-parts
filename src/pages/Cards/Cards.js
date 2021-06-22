import Products from "../../component/Products/Products";
import Link from "../../component/Link/Link";


const Cards = () => {

  const products = [
    { title: 'Beautiful sunset', price: 200, slug: 'beautiful-sunset', img: 'card1' },
    { title: 'Wonderful world', price: 33, slug: 'wonderful-world', img: 'card2' },
    { title: 'Rising sun', price: 145, slug: 'rising-sun', img: 'card3' },
    { title: 'Morning sunshine', price: 99, slug: 'morning-sunshine', img: 'card3' },
    { title: 'Beloved nature', price: 123, slug: 'beloved-nature', img: 'card3' },
    { title: 'Great summit', price: 299, slug: 'great-summit', img: 'card3' },
  ]

  return (
    <div className="">
      <div className="container mx-auto p-2">
        <Products products={products} />
      </div>
      <div className="h-96 lg:bg-fixed bg-cover bg-no-repeat bg-banner1 relative">
        <div className="text-white text-lg absolute bottom-0 w-full h-full pl-10 md:pl-32 lg:pl-32 pt-20 md:pt-28 lg:pt-28 bg-opacity-50 bg-gradient-to-l from-black via-transparent to-black">
          <h1 className="text-5xl">
            New Collection
          </h1>
          <div className="w-24">
            <Link text={'Explore'} link={'/'} />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2">
        <Products products={products} />
      </div>
    </div>
  )
}

export default Cards