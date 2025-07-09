// "use client";

// import Container from "@/utils/Container";
// import { useExpertsQuery } from "@/redux/features/career/career.api";
// import Expert from "../shared/Expert";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const Experts = () => {
//   const { data: allExperts } = useExpertsQuery("");
//   const experts = allExperts?.result || [];

//   const groupSize = 3;
//   const [startIndex, setStartIndex] = useState(0);
//   const [direction, setDirection] = useState(0); 

//   const handleNext = () => {
//     setDirection(1);
//     setStartIndex((prev) => (prev + 1) % experts.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setStartIndex((prev) => (prev - 1 + experts.length) % experts.length);
//   };

//   // Get current 3 experts, looping
//   const getCurrentExperts = () => {
//     const result = [];
//     for (let i = 0; i < groupSize; i++) {
//       result.push(experts[(startIndex + i) % experts.length]);
//     }
//     return result;
//   };

//   const visibleExperts = getCurrentExperts();

//   // Animation variants for the **new card entering from bottom**
//   const newCardVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
//   };

//   // Animation variants for the **other cards sliding left or right**
//   const sideCardVariants = {
//     initial: (direction: number) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0.5,
//     }),
//     animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -100 : 100,
//       opacity: 0.5,
//       transition: { duration: 0.5 },
//     }),
//   };

//   return (
//     <Container>
//       <div className="py-12 text-center">
//         <h1 className="text-2xl md:text-4xl text-primary font-bold mb-8">
//           Meet Our Experts
//         </h1>

//         <div className="relative overflow-hidden min-h-[400px]">
//           <AnimatePresence mode="popLayout" initial={false}>
//             <motion.div
//               key={startIndex}
//               layout
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             >
//               {visibleExperts.map((expert, idx) => {
//                 // Determine if this card is the new entering card:
//                 // If direction=1 (next), last card is new
//                 // If direction=-1 (prev), first card is new
//                 const isNewCard =
//                   (direction === 1 && idx === groupSize - 1) ||
//                   (direction === -1 && idx === 0);

//                 return (
//                   <motion.div
//                     key={expert._id}
//                     layout
//                     custom={direction}
//                     initial={isNewCard ? "initial" : "initial"}
//                     animate="animate"
//                     exit="exit"
//                     variants={isNewCard ? newCardVariants : sideCardVariants}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Expert experts={[expert]} />
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="flex justify-center gap-4 mt-6">
//           <button
//             onClick={handlePrev}
//             className="px-4 py-2 bg-primary text-white rounded-[4px]"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-primary text-white rounded-[4px]"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Experts;
import React from 'react';

const Experts = () => {
  return (
    <div>
      sdfsdf
    </div>
  );
};

export default Experts;
