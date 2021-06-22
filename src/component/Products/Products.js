import ProductCard from "../ProductCard/ProductCard";
import { motion } from "framer-motion";


const Products = ({ products }) => {

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .1,
      }
    }
  }

  return (
    <motion.ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
               initial="hidden"
               animate="show"
               variants={ variants }>
      { products.map(card =>
        <ProductCard key={ card.title } data={ card } className={ `bg-${ card.img }` }/>
      ) }
    </motion.ul>
  )
}

export default Products