import './ProductCard.module.css'
import { motion } from "framer-motion"
import { useState } from "react";
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import Link from "../Link/Link";

const ProductCard = ({ data, className }) => {

  const [isHover, setHover] = useState(false)
  const [isFavourite, setFavourite] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, scale: .3 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        bounce: .3,
      }
    },
  }

  const titleVariants = {
    hidden: {
      y: -120,
      transition: {
        duration: .7,

      }
    },
    show: {
      y: 0,
      transition: {
        duration: .5,
      }
    },
  }

  const blendVariants = {
    hidden: {
      y: 130,
      transition: {
        duration: .7
      },
    },
    show: {
      y: 0,
      transition: {
        duration: .5
      },
    }
  }

  return (
    <motion.li
      className={ `overflow-hidden ${ className } h-80 w-full shadow-2xl rounded-lg relative text-white text-lg` }
      variants={ cardVariants }
      onMouseOver={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }>
      <motion.div animate={ isHover ? "show" : "hidden" }
                  variants={ titleVariants }
                  className="h-32 w-full bg-opacity-50 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-start justify-between p-5">
          <span>{ data.title }</span>
          <span className="cursor-pointer" onClick={ () => setFavourite(!isFavourite) }>
          { isFavourite ? (<Favorite/>) : (<FavoriteBorder/>) }
        </span>
        </div>
      </motion.div>
      <motion.div animate={ isHover ? "show" : "hidden" }
                  variants={ blendVariants }
                  className="h-32 w-full bg-opacity-50 bg-gradient-to-t from-black to-transparent absolute bottom-0">
        <div className="h-full flex items-end justify-between p-5">
          <span className="">
            { `${ data.price }.00 €` }
          </span>
          <Link text={ 'Detail' } link={ `/detail/${ data.slug }` }/>
        </div>
      </motion.div>
    </motion.li>
  )
}

export default ProductCard