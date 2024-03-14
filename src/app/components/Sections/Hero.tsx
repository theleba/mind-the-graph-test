import { lato } from "@/app/fonts";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./../../styles/Home.module.css";

const Header = dynamic(() => import("./../../components/Header"), {
  ssr: false,
});
const FullColorButton = dynamic(
  () => import("./../../components/Buttons/FullColorButton"),
  { ssr: false },
);

function Hero() {
  return (
    <Row>
      <Col
        xs={24}
        className={`${styles.bg_gradient} min-h-[800px] md:min-h-[544px]`}
      >
        <Header />
        <Row gutter={20} className="relative justify-center lg:left-[111px]">
          <Col
            xs={24}
            md={12}
            lg={8}
            className={` ${lato.className} top-[130px] `}
          >
            <h1 className="text-[30px] text-white font-black pr-10 pl-10">
              Discover all possibilities of using this powerfull tool and create
              science figures, posters and infographics.
            </h1>
            <div className="w-[200px] h-[77px] mt-10 pl-10">
              <FullColorButton text="Start creating now" onClick={() => {}} />
            </div>
          </Col>
          <Col
            xs={22}
            md={12}
            lg={14}
            className="relative z-10 top-[170px] lg:top-[100px]"
          >
            <Image
              src={"/images/mindPlatform.png"}
              alt="MindTheGraphPlatform"
              width={650}
              height={427}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Hero;
