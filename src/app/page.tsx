
'use client' 

import Image from "next/image";
import { Col, Row } from "antd";
import styles from './styles/Home.module.css';
import dynamic from 'next/dynamic';
import { lato } from "./fonts";
import FullColorButton from "./components/Buttons/FullColorButton";
import InvisibleSmallCards from "./components/Cards/InivisibleSmallCard";
import PurpleBigCard from "./components/Cards/PurpleBigCard";

const Header = dynamic(() => import('./components/Header'), { ssr: false });

export default function Home() {

  const services = [
    {
      image: '/infographics.svg',
      title: 'Graphical Abstracts and Infographics',
      text: 'Improve your papers’ impact and visibility through quality visual communication'
    },
    {
      image: '/scientificPoster.svg',
      title: 'Scientific Poster in a few clicks',
      text: 'Add visual impact to your posters with scientific illustrations and graphics'
    },
    {
      image: '/slidePresentation.svg',
      title: 'Make better Slide Presentation',
      text: 'Transform your lectures, meetings and classes into high-impact visual experiences'
    },
  ]

  const functionalities = [
    {
      image: '/functionalities/ico_drag.svg',
      title: 'Drag and Drop',
      text: 'Easily select and manage illustrations, text and templates'
    },
  ]
  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden ">
        <Row>
          <Col xs={24} className={styles.bg_gradient} >
          <Header/>
          <Row gutter={20} className="relative left-[111px]">
            <Col xs={24} md={8} className={` ${lato.className} top-[130px] `}>
              <h1 className="text-[30px] text-white font-black pr-10 pl-10">
                Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.  
              </h1>
              <div className="w-[200px] h-[77px] mt-10 pl-10"> 
              <FullColorButton text='Start creating now' onClick={() => {}}/>
              </div>
            </Col>
            <Col xs={24} md={14} className="relative top-[100px] z-10">
              <Image src={'/mindPlatform.png'} alt="" width={650} height={427} />
              </Col>
          </Row>
    </Col>
        </Row>
        <Row>
          <Col xs={24} className='bg-[#EEEEEE]  text-center'>
            <h2 className={`${lato.className} mt-20 text-[#7833FF] font-bold text-[30px]`}>
              Visualize what Mind the Graph can do for you
            </h2>
            <Row gutter={20} className="relative justify-center mt-20">

           {
            services.map((service, index) => {
              return (
                <Col xs={24} md={6} key={index}>
<InvisibleSmallCards image={service.image} title={service.title} text={service.text} />
                </Col>
              )
            })
           }
          
          
            </Row>
            <Row className="relative justify-center mt-20">

            <Col xs={24} md={20} className="relative justify-center">
              <PurpleBigCard items={functionalities} />
            </Col>
            </Row>

    </Col>

        </Row>
    
      
    </main>
  );
}
