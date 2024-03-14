"use client";
import { Col, Dropdown, Row } from "antd";
import Image from "next/image";
import { lato } from "../fonts";
import { FaBars } from "react-icons/fa6";
import BorderButton from "./Buttons/BorderButton";
import FullColorButton from "./Buttons/FullColorButton";
import { header, items } from "../utils/contentArrays";

function Header() {
  return (
    <Row className={`${lato.className}`}>
      <Col xs={20} md={6} lg={10} className="relative">
        <div className="absolute left-[35px] top-[40px] md:top-[45px]">
          <Image
            onClick={() => (window.location.href = "/")}
            src={"/images/logo_mindthegraph.svg"}
            alt={"MindTheGraphLogo"}
            width={135}
            height={45}
          />
        </div>
      </Col>
      <Col xs={4} className="mt-10 block md:hidden">
        <Dropdown className=" text-black" menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <FaBars className=" text-white text-[30px] " />
          </a>
        </Dropdown>
      </Col>
      <Col
        xs={24}
        md={18}
        lg={14}
        className={`${lato.className} hidden md:block`}
      >
        <Row gutter={8} className="relative ">
          {header.map((item, index) => {
            return (
              <Col
                md={3}
                className={`${lato.className} mt-[48px] cursor-pointer text-center text-white font-bold text-[16px]`}
                key={index}
              >
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              </Col>
            );
          })}
          <Col md={4} className={"mt-[38px]"}>
            <BorderButton
              text={"Login"}
              onClick={() => {
                window.open("https://mindthegraph.com/auth/login/", "_blank");
              }}
            />
          </Col>
          <Col md={6} className={"mt-[38px]"}>
            <FullColorButton
              text={"Sign up free"}
              onClick={() => {
                window.open(
                  "https://mindthegraph.com/auth/register/",
                  "_blank",
                );
              }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
