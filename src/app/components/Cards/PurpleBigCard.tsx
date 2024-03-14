import { lato } from "@/app/fonts";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import dynamic from "next/dynamic";

const BorderButton = dynamic(() => import("../Buttons/BorderButton"), {
  ssr: false,
});

type ItemsProps = {
  image: string;
  title: string;
  text: string;
};

type PupleBigCardProps = {
  items: ItemsProps[];
};

function PurpleBigCard({ items }: PupleBigCardProps) {
  return (
    <Card className="rounded-[24px] bg-[#5F29CC] ">
      <Row className="justify-center">
        <Col xs={22} md={18}>
          <h2
            className={`${lato.className} pt-1 text-white font-bold text-[24px] md:p-5`}
          >
            Create effective science figures in minutes
          </h2>
          <h4
            className={`${lato.className} pt-10 pb-10  text-white  text-[16px] md:p-10`}
          >
            We built Mind the Graph for simplicity. The platform is easy to use
            and just about anybody can use it to create great infographics and
            presentations - from beginners to professionals, individuals to
            groups and small labs to large organisations
          </h4>
        </Col>
      </Row>

      <Row gutter={[40, 100]} className=" justify-center">
        {items.map((item, index) => {
          return (
            <Col
              xs={22}
              md={7}
              key={index}
              className=" flex text-center justify-center"
            >
              <Row className=" justify-center">
                <Col xs={24} className=" flex text-center justify-center">
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={80}
                    height={80}
                  />
                </Col>
                <Col xs={20}>
                  <h3
                    className={`${lato.className}  text-white font-bold text-[16px]`}
                  >
                    {item.title}
                  </h3>
                </Col>
                <Col xs={20} className="text-center mt-3">
                  <span className={`${lato.className}  text-white text-[15px]`}>
                    {item.text}
                  </span>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
      <Row className="justify-center mt-10">
        <Col xs={24} md={6}>
          <BorderButton text="EXPLORE MIND THE GRAPH" onClick={() => {}} />
        </Col>
      </Row>
    </Card>
  );
}

export default PurpleBigCard;
