import React from 'react'
import DashboardLayout from '../../componets/DashboardLayout'
import SupportCart from './componets/SupportCart'
import ContactCart from './componets/ContactCart'
import { IoIosMail } from 'react-icons/io'
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCart from '../Dashboard/componets/InfoCart'
import { Stack } from '@chakra-ui/react'

const Support = () => {
  return (
    <>

      <DashboardLayout title="Support">
        <Stack spacing="80px">
          <SupportCart
            icon={IoIosMail}
            leftComponet={<ContactCart />}
            title="Contact Us"
            text="Have a question or just want to know more? Feel free to reach out to us."
          />

          <SupportCart
            icon={BiSolidMessageRounded}
            leftComponet={<InfoCart
              inverted={true}
              imgUrl="\Visual.svg"
              text="Learn more about our real estate, mortgage, and corporate account services"
              tagText="Contact"
            />}
            title="Live Chat"
            text="Don’t have time to wait for the answer? Chat with us now."
          />
        </Stack>
      </DashboardLayout>
    </>
  )
}

export default Support
