import { lato } from "@/app/fonts";
import { Col, Row } from "antd";
import PurpleBigCard from "../Cards/PurpleBigCard";
import InvisibleSmallCards from "../Cards/InivisibleSmallCard";
import { functionalities, services } from "@/app/utils/contentArrays";

function Functionalities() {
  return (
    <Row>
      <Col xs={24} className="bg-[#EEEEEE] pb-10 text-center">
        <h2
          className={`${lato.className} mt-20 text-[#7833FF] font-bold text-[30px]`}
        >
          Visualize what Mind the Graph can do for you
        </h2>
        <Row gutter={[20, 50]} className="relative justify-center mt-20">
          {services.map((service, index) => {
            return (
              <Col xs={24} md={6} key={index}>
                <InvisibleSmallCards
                  image={service.image}
                  title={service.title}
                  text={service.text}
                />
              </Col>
            );
          })}
        </Row>
        <Row className="relative justify-center mt-20">
          <Col xs={22} md={20} className="relative justify-center">
            <PurpleBigCard items={functionalities} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Functionalities;
