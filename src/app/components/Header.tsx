 'use client'
import {Col, Row } from "antd"
import Image from "next/image"
import { lato } from "../fonts"
import FullColorButton from "./Buttons/FullColorButton";
import BorderButton from "./Buttons/BorderButton";

function Header() {

    const items=[
        {
            title: "Templates",
            url: '/'
        },
        {
            title: "Pricing",
            url: '/'
        },
        {
            title: "Blog",
            url: '/'
        },
        {
            title: "Jobs",
            url: '/'
        },
    ]
  return (
   <Row  className={`${lato.className}`}>
    <Col xs={24} md={10} className="relative">
        <div className="absolute left-[35px] top-[45px]">
        <Image src={'/logo_mindthegraph.svg'} alt={""} width={135} height={45} />
        </div>
    </Col>
    <Col xs={24} md={14}  className={lato.className}>
       
           <Row gutter={8} className="relative ">
            {
                items.map((item, index) => {
                    return (
                        <Col md={3}  className={`${lato.className} top-[48px] text-center text-white font-bold text-[16px]`} key={index}>
                        {item.title} 
                        </Col>
                    )
                })
            }
            <Col md={4} className={'top-[38px]'}>
        <BorderButton  text={'Login'}onClick={() => { console.log('Login clicked'); }}/>
            </Col>
            <Col md={6} className={'top-[38px]'}>
              <FullColorButton   text={'Sign up free'} onClick={() => { console.log('Login clicked'); }}/>
            </Col>
           </Row>
       
    </Col>
   </Row>
  )
}
 
export default Header