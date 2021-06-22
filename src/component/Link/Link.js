import { ArrowRightAlt } from "@material-ui/icons";
import { motion } from 'framer-motion'
import { useState } from "react";


const Link = ({ text, link, className }) => {
  const [isHover, setHover] = useState(false)

  const arrowVariants = {
    hidden: {
      x: 0,
      transition: {
        duration: .5,

      }
    },
    show: {
      x: 15,
      transition: {
        duration: .5,
      }
    },
  }

  const borderVariants = {
    hidden: {
      width: 0,
      transition: {
        duration: .5,

      }
    },
    show: {
      width: '100%',
      transition: {
        duration: .5,
      }
    },
  }

  return (
    <span className={ `${ className }` }
          onMouseOver={ () => setHover(true) }
          onMouseLeave={ () => setHover(false) }
    >
      <a href={ link } className="flex">
        { text }
        <motion.div animate={isHover ? "show":"hidden"}
                    variants={ arrowVariants }
        >
          <ArrowRightAlt/>
        </motion.div>
      </a>
      <motion.div className="border-t"
                  animate={isHover ? "show":"hidden"}
                  variants={borderVariants}
      />
    </span>
  )
}

export default Link