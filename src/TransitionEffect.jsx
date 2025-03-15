// import React, { useState, useEffect } from "react";

// function TransitionEffect() {
//     const [darkmode, setDarkmode] = useState(() => {
//         return localStorage.getItem("theme") === "dark";
//     });

//     useEffect(() => {
//         if (darkmode) {
//             document.body.classList.add("dark-mode");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.body.classList.remove("dark-mode");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkmode]);

//     return (
        // //<div className="Container">
//            // <h1>{darkmode ? "Dark Mode" : "Light Mode"}</h1>
//             //<button onClick={() => setDarkmode(!darkmode)}>Toggle Mode</button>
//         //</div>
//     )
// }

//export default TransitionEffect;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import "./App.css"; // Make sure to link the CSS file

// function TransitionEffect() {
//     const [darkmode, setDarkmode] = useState(() => {
//         return localStorage.getItem("theme") === "dark";
//     });

//     useEffect(() => {
//         if (darkmode) {
//             document.body.classList.add("dark-mode");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.body.classList.remove("dark-mode");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkmode]);

//     return (
//         <div className="container">
//             //<h1>{darkmode ? "Dark Mode" : "Light Mode"}</h1>
//             //<button onClick={() => setDarkmode(!darkmode)}>Toggle Mode</button>

//            // <div className={`image-container ${darkmode ? "expanded" : ""}`}>
//                // <img src="https://media.istockphoto.com/photos/sunrise-at-taj-mahal-picture-id535896489?k=6&m=535896489&s=612x612&w=0&h=zCcVwirrarzd_8_SIDRLOusZzvdRwLFkT_63nCUkFNo=" alt="Taj Mahal" className="place-image" />
//                // <img src="https://th.bing.com/th/id/R.a0311fd81325d6cb63b3599b1e240b14?rik=qzlfFSJwn6cQxg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-nrOnp5UqAqE%2fUoiit3NJY5I%2fAAAAAAAAQxM%2fYPlslXITl68%2fs1600%2fgreat%2bwall%2bof%2bchina%2b(2).jpg&ehk=IxP8eR0veITqPYgLOjLaa%2bY7qa4LlfAMzD%2bvyaTEpsk%3d&risl=&pid=ImgRaw&r=0" alt="Great Wall of China" className="place-image" />
//               //  <img src="https://media.cntraveler.com/photos/58da7b6e1021b64be09794da/master/pass/GettyImages-177303568.jpg" alt="Colosseum" className="place-image" />
//            // </div>
//       //  </div>
//     );
// }

// export default TransitionEffect;

// --------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TransitionEffect = () => {
//     const { scrollYProgress } = useScroll();

//     // Transform background color from white to black as user scrolls
//     const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#000000"]);

//     return (
//        // <motion.div
//             className="transition-container"
//             style={{ background: backgroundColor }}
//         >
//            // <section className="white-section">
//               //  <h1>White Section</h1>
//             //    <p>Scroll down to see the transition effect.</p>
//             //</section>

//           //  <section className="black-section">
//            //     <h1>Black Section</h1>
//           //      <p>You've reached the dark side!</p>
//           //  </section>
//       //  </motion.div>
//     );
// };

// export default TransitionEffect;

// ----------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure this CSS file is included

function TransitionEffect() {
    const [darkmode, setDarkmode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkmode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkmode]);

    return (
        <div className="container">
            {/* First Row - 5 Images */}
            <div className="row">
                <img src="./image1.jpg" alt="Place 1" className="place-image" />
                <img src="./image2.jpg" alt="Place 2" className="place-image" />
                <img src="./image3.jpg" alt="Place 3" className="place-image" />
                <img src="./image4.jpg" alt="Place 4" className="place-image" />
                <img src="./image5.jpg" alt="Place 5" className="place-image" />
            </div>

            {/* Second Row - 2 Images & Button in Center */}
            <div className="row middle-row">
                <img src="./image6.jpg" alt="Place 6" className="place-image" />
                <button onClick={() => setDarkmode(!darkmode)}>Click Me</button>
                <img src="./image7.jpg" alt="Place 7" className="place-image" />
            </div>

            {/* Third Row - 5 Images */}
            <div className="row">
                <img src="./image8.jpg" alt="Place 8" className="place-image" />
                <img src="./image9.jpg" alt="Place 9" className="place-image" />
                <img src="./image10.jpg" alt="Place 10" className="place-image" />
                <img src="./image11.jpg" alt="Place 11" className="place-image" />
                <img src="image12.jpg" alt="Place 12" className="place-image" />
            </div>
        </div>
    );
}

export default TransitionEffect;
