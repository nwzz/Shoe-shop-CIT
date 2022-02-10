// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import "swiper/swiper-bundle.css";
// import SwiperCore, { Pagination, Autoplay } from "swiper";

// SwiperCore.use([Pagination, Autoplay]);

// const data = [
//   {
//     id: 1,
//     name: "partner",
//     img: "https://cdn.shopify.com/s/files/1/2287/9679/files/power_682726c7-7b67-4bb9-b4fe-ed1c46929d75_200x.png?v=1526372107",
//   },
//   {
//     id: 1,
//     name: "partner",
//     img: "https://cdn.shopify.com/s/files/1/2287/9679/files/mc_200x.png?v=1525608259",
//   },
//   {
//     id: 1,
//     name: "partner",
//     img: "https://cdn.shopify.com/s/files/1/2287/9679/files/ns_200x.png?v=1525608190",
//   },
//   {
//     id: 1,
//     name: "partner",
//     img: "https://cdn.shopify.com/s/files/1/2287/9679/files/power_80743e54-9758-463f-ad3f-08ed9552f8fb_200x.png?v=1535428792",
//   },
//   {
//     id: 1,
//     name: "partner",
//     img: "https://cdn.shopify.com/s/files/1/2287/9679/files/wein_200x.png?v=1525608033",
//   },
// ];

// const Partner = () => {
//   //   const { data: list } = useGetData("partner", "/partner-list");

//   return (
//     <>
//       <div className="bg-gray-100">
//         <div className="max-w-7xl mx-auto px-5 py-10">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               540: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 40,
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 50,
//               },
//             }}
//           >
//             {data.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <img className="h-36" src={item.img} alt="" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Partner;
