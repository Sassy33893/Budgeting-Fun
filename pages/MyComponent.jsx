// import React, { useState } from 'react';

// const QuestionForm = () => {
//     const [income, setIncome] = useState('');
//     const [pg, setPg] = useState(0);

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             if (income === "" || isNaN(income)) {
//                 alert("Please fill in the fields correctly.");
//             } else {
//
//                 setPg(1);
//             }
//         }
//     };

//     return (
//         <div>
//             <input
//                 id="start-questions"
//                 value={income}
//                 onChange={(e) => setIncome(e.target.value)}
//                 onKeyDown={handleKeyDown}
//             />
//             <div className="q1" style={{ display: pg === 0 ? 'block' : 'none' }}>
//                 {<h1>Hi</h1>}
//             </div>
//             <div className="q2" style={{ display: pg === 1 ? 'block' : 'none' }}>
//                 {<h1>Bi</h1>}
//             </div>
//         </div>
//     );
// };

// export default QuestionForm;
