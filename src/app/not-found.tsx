"use client";
import { Col, Row } from "antd";
import styles from "./styles/Home.module.css";
import Header from "./components/Header";

export default function NotFound() {
  return (
    <div
      className={`${styles.bg_gradient} min-h-screen max-w-screen overflow-x-hidden bg-gradient `}
    >
      <Header />

      <Row>
        <Col xs={22}>
          <h1 className=" flex items-center justify-center text-center align-middle min-h-screen text-[50px] text-white font-bold">
            404 - Page not found =/
          </h1>
        </Col>
      </Row>
    </div>
  );
}
