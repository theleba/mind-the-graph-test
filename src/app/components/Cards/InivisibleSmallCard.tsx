import { lato } from "@/app/fonts";
import { Col, Row, Space } from "antd";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

type InvisibleSmallCardsProps = {
   image: string;
   title: string;
   text: string;
  }
  
  function InvisibleSmallCards({ image, title, text }: InvisibleSmallCardsProps ) { 
    return (
   
        <Row className=" justify-center">
            <Col xs={24} className=" flex text-center justify-center">
                <Image alt='' src={image} width={200} height={200} />
            </Col>
            <Col xs={20}>
                <h3 className={`${lato.className} p-5 pb-1 text-[#7833FF] font-bold text-[17px]`}>{title}</h3>
            </Col>
            <Col xs={20}>
                <span className={`${lato.className} p-5 pt-1 text-[#212121] font-bold text-[16px]`}>{text}</span>
            </Col>
            <Col xs={20}>
                <Space direction="horizontal" className={`${lato.className} mt-10 text-[#7833FF] font-bold text-[12px]`}>
                    <FaAngleRight /> LEARN MORE
                </Space>
            </Col>
        </Row>
    )
  }
   
  export default InvisibleSmallCards