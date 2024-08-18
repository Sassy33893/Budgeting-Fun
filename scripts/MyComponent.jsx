import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const QuestionForm = () => {  
  const [income, setIncome] = useState(''); 
  const [incomeAmount, setIncomeA] = useState('');  
  const [pg, setPg] = useState(0);  
  const [questionTwoAnswer, setQuestionTwoAnswer] = useState("");

  const questions = [  
    "What is your yearly salary?",  
    "What are your yearly expenses?",
  ];  

  const handleKeyDown = (e) => {  
    if (e.key === 'Enter') {  
      e.preventDefault();
    
      if (pg === 0) {  
        if (!isNaN(income) && income.trim() !== "") {
          localStorage.setItem('income', income);  
          setPg(1);  
        } else {  
          alert("Please enter a valid income.");  
        }  
      } else if (pg === 1) {  
        if (!isNaN(questionTwoAnswer) && questionTwoAnswer.trim() !== "") {  
          localStorage.setItem('questionTwoAnswer', questionTwoAnswer);  
          window.location.href = "spread.html";
        } else {  
          alert("Please enter a valid answer.");
        }
      }  
    }  
  };  

  return (  
    <div>  
      <div className={`center-items-v q1 ${pg === 0 ? 'd-block' : 'd-none'}`}>  
        <form id="questionBox">  
          <div className="center-items">  
            <h1 id="question-start" className="display-3">{questions[0]}</h1>  
          </div>  
          <div className="center-items">  
            <input  
              type="text"  
              id="income-input"  
              value={income}  
              onChange={(e) => setIncome(e.target.value)}  
              onKeyDown={handleKeyDown}  
              placeholder="Enter your income name"  
              className="form-control"  
            />
          </div>
          <div className="center-items">  
            <input  
              type="text"  
              id="income-amount-input"  
              value={incomeAmount}  
              onChange={(e) => setIncomeA(e.target.value)}  
              onKeyDown={handleKeyDown}  
              placeholder="Enter your income amount"  
              className="form-control"  
            />
          </div>
        </form>  
      </div>  
      <div className={`center-items-v q2 ${pg === 1 ? 'd-block' : 'd-none'}`}>  
        <form id="questionBox">  
          <div className="center-items">  
            <h1 id="question-start" className="display-3">{questions[1]}</h1>  
          </div>  
          <div className="center-items">  
            <input  
              type="text"  
              id="question-two-answer"  
              value={questionTwoAnswer}  
              onChange={(e) => setQuestionTwoAnswer(e.target.value)}  
              onKeyDown={handleKeyDown}  
              placeholder="Enter your answer"  
              className="form-control"  
            />  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
};  

ReactDOM.render(<QuestionForm />, document.getElementById('root'));
