import avatar from './images/avatar.png'
import patika from "./images/newPatikaLogo.svg"
import Slider from "react-slick";
import html from "./images/html.svg"
import css from "./images/css.svg"
import js from "./images/javascript.svg"
import react from "./images/react.svg"
import next from "./images/next.svg"
import bootstrap from "./images/bootstrap.svg"
import tailwind from "./images/tailwind.svg"
import php from "./images/php.svg"
import {AiFillMail,AiFillLinkedin} from 'react-icons/ai'

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };


  const data=[
    {
        id:1,
        title:'HTML',
        url:html
    },
    {
        id:2,
        title:'CSS',
        url:css
    },
    {
        id:3,
        title:'Javascript',
        url:js
    },
    {
        id:4,
        title:'React',
        url:react
    },
    {
        id:5,
        title:'Next',
        url:next
    },
    {
        id:6,
        title:'Bootstrap',
        url:bootstrap
    },
    {
        id:7,
        title:'Tailwind',
        url:tailwind
    },
    {
        id:8,
        title:'PHP',
        url:php
    }

]

  return (
    <>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>RESUL BİŞGİN</h1>
            <ul className='flex items-center text-lg '>
              <li className='text-teal-500  font-medium px-2 cursor-pointer hover:underline transition-all'>About</li>
              <li className=' text-teal-500 font-medium hover:underline  cursor-pointer transition-all'>Skills</li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Resul Bişgin</h2>
            <h3 className='text-2xl py-2 md:text-3xl '>Front-End Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
            A person who is trying to improve himself and stay
             up-to-date with software and who wants to prepare useful contents, 
             products for people. 
            </p>
          </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700'>
         <a href="mailto:resulbiginresul_20011@hotmail.com"><AiFillMail/></a>   
           <a href="https://www.linkedin.com/in/resulbi%C5%9Fgin/"> <AiFillLinkedin/></a>
           <a href="https://app.patika.dev/resulbsgn"><img src={patika} className="w-[76px] h-[76px]" /></a>
        </div>
        <div className='  bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mx-auto mt-20 mb-20 overflow-hidden flex justify-center items-center md:w-96 '>
            <img src={avatar} className="  w-[230px] h-[230px] object-fill"   />
        </div>

        <Slider {...settings}>
          {data.map((item)=>(
            <div  key={item.id}>
              <div className='flex justify-center items-center'>
                <img  className="w-[120px] h-[120px]"  src={item.url}/>
              </div>
              <div  className='flex justify-center items-center text-lg font-medium'>
                {item.title}
              </div>
            </div>

          ))}

        </Slider>
        
        
        
        </section>
      </main>
    </>
  );
}

export default App;
