import { useForm, FormProvider } from "react-hook-form"
import { InputHook } from "../../component/FormHooks/InputHook/InputHook"
import { Delete, IndeterminateCheckBox, AddBox } from '@material-ui/icons'
import '../../component/FormHooks/InputHook/InputHook.module.css'
import { motion } from 'framer-motion'
import { CheckBoxHook } from "../../component/FormHooks/CheckBoxHook/CheckBoxHook";
import { useState } from "react";
import RadioGroupHook from "../../component/FormHooks/RadioGroupHook/RadioGroupHook";


const Checkout = () => {

  const images = [
    'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081',
    'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-1_large.png?format=webp&v=1530129113',
    'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-2_large.png?format=webp&v=1530129132',
    'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-3_large.png?format=webp&v=1530129152',
    'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4_large.png?format=webp&v=1530129177',
    'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-5_large.png?format=webp&v=1530129199'
  ]

  const cartItems = [
    { title: 'Nike hoodie', size: 'L', color: 'orange', price: 100, quantity: 4 },
    { title: 'Gucci socks', size: 'M', color: 'green', price: 150, quantity: 2 },
    { title: 'Adidas hoodie', size: 'XS', color: 'red', price: 480, quantity: 3 },
    { title: 'Hodinky paradne', size: 'M', color: 'blue', price: 1280, quantity: 1 },
  ]

  const deliveryMethods = [
    { label: 'Post', value: 'POST', price: 1 },
    { label: 'Courier', value: 'COURIER', price: 3 },
    { label: 'Drop Box', value: 'DROP_BOX', price: .5 },
  ]

  const paymentMethods = [
    { label: 'Card', value: 'CARD', price: .5 },
    { label: 'Cash', value: 'CASH', price: 1 },
  ]

  const getTotal = (items) => {
    return items.map(item => item.price * item.quantity).reduce((acc, next) => acc + next)
  }

  const [deliverElsewhere, setDeliverElsewhere] = useState(false)

  const useFormMethods = useForm({ criteriaMode: 'all', mode: 'onSubmit', defaultValues: {} });
  const { handleSubmit } = useFormMethods

  const onSubmit = (data) => {
    console.log('submitting', data)
  }

  const variants = {
    hidden: {
      transition: {
        staggerDirection: -1,
        staggerChildren: .3,
      }
    },
    show: {
      transition: {
        staggerChildren: .3,
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: .8,
      transition: {
        duration: 1,
        staggerDirection: -1,
        staggerChildren: .3,
      }
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: .3,
      }
    }
  }

  return (
    <FormProvider { ...useFormMethods } >
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5 md:gap-10 lg:gap-15 p-5">
          <motion.ul initial="hidden"
                     animate="show"
                     variants={ variants }
                     className="col-span-1 md:col-span-5 lg:col-span-7 grid grid-cols-1 gap-5"
          >
            <motion.div variants={ itemVariants }>
              <motion.ol initial="hidden"
                         animate="show"
                         variants={ variants }
                         className="border rounded p-3 shadow-md"
              >
                <div className="font-bold">Personal</div>
                <motion.li variants={ itemVariants }
                           className="flex flex-col lg:flex-row"
                >
                  <InputHook name="firstName"
                             label="First name"
                             rules={ { required: "This field is required" } }
                  />
                  <InputHook name="lastName"
                             label="Last name"
                             rules={ { required: "This field is required" } }
                  />
                </motion.li>
                <motion.li variants={ itemVariants }
                           className="flex flex-col lg:flex-row"
                >
                  <InputHook name="email"
                             label="Email"
                             rules={ { required: "This field is required" } }
                  />
                  <InputHook name="phoneNumber"
                             label="Phone number"
                             rules={ { required: "This field is required" } }
                  />
                </motion.li>
              </motion.ol>
            </motion.div>
            <motion.div variants={ itemVariants }>
              <motion.ol initial="hidden"
                         animate="show"
                         variants={ variants }
                         className="border rounded p-3 shadow-md"
              >
                <div className="font-bold">Address</div>
                <motion.li variants={ itemVariants }
                           className="flex flex-col lg:flex-row"
                >
                  <InputHook name="street"
                             label="Street and house number"
                             rules={ { required: "This field is required" } }
                  />
                  <InputHook name="city"
                             label="City"
                             rules={ { required: "This field is required" } }
                  />
                </motion.li>
                <motion.li variants={ itemVariants }
                           className="flex flex-col lg:flex-row"
                >
                  <InputHook name="postCode"
                             label="Post code"
                             rules={ { required: "This field is required" } }
                  />
                  <InputHook name="country"
                             label="Country"
                             rules={ { required: "This field is required" } }
                  />
                </motion.li>

                <CheckBoxHook name={ 'deliverElsewhere' }
                              label={ 'Deliver to different address' }
                              onChange={ (value) => setDeliverElsewhere(value) }
                />

                { deliverElsewhere &&

                  <motion.li variants={ itemVariants }
                             className="flex flex-col lg:flex-row"
                  >
                    <InputHook name="street"
                               label="Street and house number"
                               rules={ { required: "This field is required" } }
                    />
                    <InputHook name="city"
                               label="City"
                               rules={ { required: "This field is required" } }
                    />
                  </motion.li>}
                {deliverElsewhere &&
                  <motion.li variants={ itemVariants }
                             className="flex flex-col lg:flex-row"
                  >
                    <InputHook name="postCode"
                               label="Post code"
                               rules={ { required: "This field is required" } }
                    />
                    <InputHook name="country"
                               label="Country"
                               rules={ { required: "This field is required" } }
                    />
                  </motion.li>
                }
              </motion.ol>
            </motion.div>
            <motion.div variants={ itemVariants }>
              <motion.ol initial="hidden"
                         animate="show"
                         variants={ variants }
                         className="border rounded p-3 shadow-md"
              >
                <div className="font-bold">Delivery</div>
                <motion.li variants={ itemVariants }
                           className="flex flex-col lg:flex-row"
                >
                  <RadioGroupHook name="delivery"
                                  items={ deliveryMethods }
                                  rules={ { required: "One of the above is required" } }
                  />
                </motion.li>
              </motion.ol>
            </motion.div>
            <motion.div variants={ itemVariants }>
              <motion.ol initial="hidden"
                         animate="show"
                         variants={ variants }
                         className="border rounded p-3 shadow-md"
              >
                <div className="font-bold">Payment</div>
                <motion.li variants={ itemVariants }
                           className="flex flex-col lg:flex-row"
                >
                  <RadioGroupHook name="payment"
                                  items={ paymentMethods }
                                  rules={ { required: "One of the above is required" } }
                  />
                </motion.li>
              </motion.ol>
            </motion.div>
          </motion.ul>
          <div className="col-span-1 md:col-span-5 lg:col-span-3">
            <motion.div initial="hidden"
                        animate="show"
                        variants={ variants }
                        className="border rounded sticky top-5 shadow-md"
            >
              <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center justify-center p-3 font-bold shadow-b-md">
                    My cart
                  </div>
                <div className="divide-y max-h-72 overflow-scroll">
                  { cartItems.map((item, index) => (
                    <motion.div key={ index }
                                variants={ itemVariants }
                                className={ `p-3 flex` }
                    >
                      <div className="flex-1 flex">
                        <div className="flex-none">
                          <img src={ images[Math.floor(Math.random() * images.length)] } width={ 100 }
                               alt={ item.title }/>
                        </div>
                        <div className="flex-1 p-2">
                          <div className="text-xl font-medium flex items-center justify-between">
                            <div>
                              { item.title }
                            </div>
                            <div className="font-light">
                              { `${ item.price } €` }
                            </div>
                          </div>
                          <div>{ item.size }</div>
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <IndeterminateCheckBox className="cursor-pointer" onClick={ () => {} }/>
                              <span className="px-3">{ item.quantity }</span>
                              <AddBox className="cursor-pointer" onClick={ () => {} }/>
                            </div>
                            <div className="flex-none">
                              <Delete className="cursor-pointer" onClick={ () => {} }/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )) }
                </div>

                <div className="w-full divide-y">
                  <div className="p-5 flex items-center justify-between font-bold">
                    <div>
                      Total
                    </div>
                    <div>
                      { `${ getTotal(cartItems) } €` }
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2">
                      <CheckBoxHook name="newsletter"
                                    label={ 'Notify me about news and the latest info' }
                      />
                      <CheckBoxHook name="agree"
                                    label={ 'I agree with processing of my personal data.' }
                                    rules={ {
                                      validate: {
                                        isChecked: (value) => value || "This field is required",
                                      }
                                    } }
                      />
                    </div>
                    <div className="flex items-center justify-center ">
                      <button type="submit" onSubmit={ onSubmit }
                              className="focus:outline-none rounded bg-black text-white font-bold p-3 hover:bg-white hover:text-black border uppercase border-black">
                        Complete order
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default Checkout