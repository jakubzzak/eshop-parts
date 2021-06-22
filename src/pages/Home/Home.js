import { motion } from "framer-motion";


const Home = () => {

  const parts = [
    { title: 'Cards', link: '/cards' },
    { title: 'Checkout', link: '/checkout', }
  ]

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: .3,
      transition: {
        duration: 1,
      }
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      }
    },
  }

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .3,
      }
    }
  }

  return (
    <div className="p-5">
      <motion.ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
                 initial="hidden"
                 animate="show"
                 variants={ variants }
      >
        { parts.map(part =>
          <a href={ part.link } key={ part.title }>
            <motion.li variants={ cardVariants }>
              <motion.div initial="hidden"
                          animate="show"
                          variants={ cardVariants }
                          whileHover={ { scale: 1.3, transition: { duration: .5 } } }
                          className={ `bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden hover:shadow-xl h-48 w-48 rounded-lg relative text-lg border` }
              >
                <div className="flex h-full items-center justify-center">
                  { part.title }
                </div>
              </motion.div>
            </motion.li>
          </a>
        ) }
      </motion.ul>
    </div>
  )
}

export default Home