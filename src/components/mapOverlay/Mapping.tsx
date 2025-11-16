// "use client";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import frameOne from "./images/frameOne.png";
// import frameTwo from "./images/frameTwo.png";
// import frameThree from "./images/frameThree.png";
// import frameFour from "./images/frameFour.png";
// import frameFive from "./images/frameFive.png";
// import AboutMe from "./AboutMe";

// export default function MapUnfoldAnimation() {
//   const [frame, setFrame] = useState(0);
//   const [isScaling, setIsScaling] = useState(false);
//   const [showNewComponent, setShowNewComponent] = useState(false);

//   const frames = [
//     { frameSource: frameOne.src, framewidth: 280 },
//     { frameSource: frameTwo.src, framewidth: 280 },
//     { frameSource: frameThree.src, framewidth: 280 },
//     { frameSource: frameFour.src, framewidth: 500 },
//     { frameSource: frameFive.src, framewidth: 500 },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setFrame((prev) => {
//         if (prev < frames.length - 1) {
//           return prev + 1;
//         } else {
//           // Last frame reached, start scaling
//           setIsScaling(true);
//           clearInterval(timer);
//           return prev;
//         }
//       });
//     }, 2000);
//     return () => clearInterval(timer);
//   }, []);

//   // Handle transition to new component after scaling
//   useEffect(() => {
//     if (isScaling) {
//       const scaleTimer = setTimeout(() => {
//         setShowNewComponent(true);
//       }, 2000); // Wait for scale animation to complete
//       return () => clearTimeout(scaleTimer);
//     }
//   }, [isScaling]);

//   if (showNewComponent) {
//     return <AboutMe />;
//   }

//   return (
//     <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={frame}
//           src={frames[frame].frameSource}
//           className="absolute"
//           initial={{ opacity: 0.4 }}
//           animate={{
//             opacity: 1,
//             scale: isScaling ? 3 : 1, // Scale up when last frame
//             width: isScaling ? "50vw" : frames[frame].framewidth,
//             height: isScaling ? "50vh" : "auto",
//           }}
//           exit={{ opacity: 0 }}
//           transition={{
//             opacity: { duration: 0.5, ease: "easeInOut" },
//             scale: { duration: 0.7, ease: "easeInOut" },
//             width: { duration: 2, ease: "easeInOut" },
//             height: { duration: 2, ease: "easeInOut" },
//           }}
//           style={{
//             objectFit: isScaling ? "cover" : "contain",
//           }}
//           width={frames[frame].framewidth}
//         />
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import frameOne from "./images/frameOne.png";
import frameTwo from "./images/frameTwo.png";
import frameThree from "./images/frameThree.png";
import frameFour from "./images/frameFour.png";
import frameFive from "./images/frameFive.png";
import AboutMe from "./AboutMe";

export default function MapUnfoldAnimation() {
  const [frame, setFrame] = useState(0);

  const [finalFade, setFinalFade] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const frames = [
    { frameSource: frameOne.src, framewidth: 280 },
    { frameSource: frameTwo.src, framewidth: 280 },
    { frameSource: frameThree.src, framewidth: 280 },
    { frameSource: frameFour.src, framewidth: 500 },
    { frameSource: frameFive.src, framewidth: 500 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => {
        if (prev < frames.length - 1) {
          return prev + 1;
        } else {
          // Last frame reached
          setFinalFade(true);
          clearInterval(timer);
          return prev;
        }
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // When fade-out completes, switch to AboutMe
  useEffect(() => {
    if (finalFade) {
      const doneTimer = setTimeout(() => {
        setShowNewComponent(true);
      }, 800); // fade-out duration
      return () => clearTimeout(doneTimer);
    }
  }, [finalFade]);

  if (showNewComponent) return <AboutMe />;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={frame}
          src={frames[frame].frameSource}
          className="absolute"
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: finalFade ? 0 : 1,
            scale: 1,
            width: frames[frame].framewidth,
            height: "auto",
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 0.7, ease: "easeInOut" },
            width: { duration: 2, ease: "easeInOut" },
            height: { duration: 2, ease: "easeInOut" },
          }}
          width={frames[frame].framewidth}
        />
      </AnimatePresence>
    </div>
  );
}
