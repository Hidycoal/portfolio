// import React from 'react'
// import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// // import Swiper core and required modules
// import { Pagination } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// import 'swiper/css/pagination';



// const data = [
//   { 
//     avatar: AVTR1,
//     name: "Bolatito Ninolowo",
//     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores pariatur molestiae ad nulla eveniet ullam ea quis aliquam, repellendus atque totam. Culpa minima maiores rerum harum blanditiis sequi saepe!',
    
//   },
//   {
//     avatar: AVTR2,
//     name: "Idris Elber",
//     review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic mollitia nobis, nisi adipisci reiciendis, accusantium obcaecati fuga laboriosam voluptas laudantium molestias id exercitationem laborum consequatur tenetur velit aspernatur molestiae!',

//   },
//   {
//     avatar: AVTR3, 
//     name: "Bola Ahmed Tinubu",
//     review: '    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores unde quasi deserunt accusamus at expedita dignissimos incidunt laborum? Eaque nisi cum sed vero, id obcaecati ducimus hic nulla atque porro?',
//   },
//   {
//     avatar: AVTR4,
//     name: "Daddy General Overseer",
//     review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita hic mollitia nobis, nisi adipisci reiciendis, accusantium obcaecati fuga laboriosam voluptas laudantium molestias id exercitationem laborum consequatur tenetur velit aspernatur molestiae!',
    
//   },
//   {
//     avatar: AVTR2,
//     name: "Johnny Designs",
//     review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, vero, ipsam ratione odit quam culpa aliquid odio sequi cum qui error voluptatum obcaecati et accusamus vel architecto beatae aspernatur. Soluta?",
    
//   },
//   {
//     avatar: AVTR1,
//     name: "Sir Alex Ferguson",
//     review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus sit quos facere accusantium! Aliquam, tempora, nihil et adipisci consequuntur quibusdam distinctio quos, at libero repudiandae dolore perspiciatis eius in.",
//   },
// ]

// const Testimonials = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className="container testimonials__container"
//         // install Swiper modules
//         modules={[ Pagination ]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         >
//         {
//           data.map(({avatar, name, review}, index) => {
//             return (

//               <SwiperSlide key={index} className="testimonial">
//                 <div className="client__avatar">
//                   <img src={avatar} alt='image' />
//                 </div>
//                   <h5>{name}</h5>
//                   <small className="client__review">
//                     {review}
//                   </small>
//               </SwiperSlide>
//             )
//           })
//         }
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonials
