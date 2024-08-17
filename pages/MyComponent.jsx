// // MyComponent.jsx
// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [income, setIncome] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if income is empty or not a number (parseInt returns NaN if invalid)
//     if (income === '' || isNaN(parseInt(income, 10))) { 
//       alert("Please fill in the fields correctly with a number.");
//     } else {
//       console.log(income); 
//     }
//   };

//   return (
//     <>
//       <h3>Income:</h3>
//       <form onSubmit={handleSubmit}> 
//         <input type="text" id="income" value={income} onChange={(e) => setIncome(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//       <h4>income</h4> 
//     </>
//   );
// };

// export default MyComponent;