import { lato } from "@/app/fonts";
import { Card, Col, Row, Space } from "antd";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

type ItemsProps = {
   image: string;
   title: string;
   text: string;
  }

type PupleBigCardProps = {
    items: ItemsProps[];
}
  
  function PurpleBigCard({ items }: PupleBigCardProps ) { 
    return (
   
        <Card className="rounded-[24px] bg-[#5F29CC]">
        
        <Row className=" justify-center">
            <Col xs={18}>
                <h2  className={`${lato.className} p-5 pt-1 text-white font-bold text-[24px]`}>
                Create effective science figures in minutes
                </h2>
                <h4 className={`${lato.className} p-10 text-white  text-[16px]`}>
                We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations
                </h4>
            </Col>
            </Row>

        <Row className=" justify-center">
            {
                items.map((item,index) => {
                    return(
                        <Col xs={6} key={index} className=" flex text-center justify-center">
                            <Row className=" justify-center">
                        
                               <Col xs={24} className=" flex text-center justify-center">
                <Image alt='' src={item.image} width={80} height={80} />
            </Col>
            <Col xs={20}>
                <h3 className={`${lato.className} p-5 pb-1 text-white font-bold text-[16px]`}>{item.title}</h3>
            </Col>
            <Col xs={20} className="text-center">
                <span className={`${lato.className} p-5 pt-1 text-white text-[14px]`}>{item.text}</span>
            </Col>
            </Row>
            </Col>
                    )
                })
            }
         
        </Row>
        </Card>
    )
  }
   
  export default PurpleBigCard