import React from 'react'

const NewSVG = () => {
    return (
        <div>
                <svg height="110" width="110">
                    <defs>
                        <filter id="f1" x="0" y="0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                        </filter>
                    </defs>
                        <rect width="90" height="90" stroke="green" stroke-width="3"
                        fill="blue" filter="url(#f1)" />
                </svg>
            
        </div>
    )
}

export default NewSVG


// const MyComponent = () => (
//     <motion.div
//       drag
//       dragConstraints={{
//         top: -50,
//         left: -50,
//         right: 50,
//         bottom: 50,
//       }}
//     />
//   )

