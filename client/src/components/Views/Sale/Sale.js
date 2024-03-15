// import React, { useState, useEffect } from 'react';

// const Countdown = () => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date("2024-04-10") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });

//   return (
//     <div>
//       {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Title</h1>
//         <h2>Subtitle</h2>
//         <Countdown />
//         <div className="contact">
//           <a href="#">Liên Hệ Ngay</a>
//         </div>
//       </div>
//       <div className="image-frame">
//       <img src="https://toomva.com/tai-lieu/anhweb/102015/tu-van-thiet-ke-xay-dung.jpg" 
//       alt="image"/>
//       </div>
//     </div>
//   );
// };

// export default App;
