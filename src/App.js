import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of these is the shortest time span?',
			answerOptions: [
				{ answerText: 'Century', isCorrect: false },
				{ answerText: 'A Dozen year', isCorrect: false },
				{ answerText: 'Decade', isCorrect: true },
				{ answerText: 'Millennium', isCorrect: false },
			],
		},
		{
			questionText: ' Which is the fastest bird?',
			answerOptions: [
				{ answerText: 'Hawk', isCorrect: false },
				{ answerText: 'Eagle', isCorrect: true },
				{ answerText: 'Perigrine Falcon', isCorrect: false },
				{ answerText: 'Stork', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the Capital of India?',
			answerOptions: [
				{ answerText: 'New delhi', isCorrect: true },
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Banglore', isCorrect: false },
				{ answerText: 'Indore', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the fastest fish',
			answerOptions: [
				{ answerText: 'Shark', isCorrect: false },
				{ answerText: 'Tuna', isCorrect: false },
				{ answerText: 'Flying fish', isCorrect: false },
				{ answerText: 'Sailfish', isCorrect: true },
			],
		},
	];

  const[currentQuestion,setcurrentQuestion]= useState(0);

  const[showScore,setShowScore]= useState(false);

  const[score,setScore]= useState(0);

  const handleChange = (isCorrect) =>{
    if(isCorrect===true)
    setScore(score+1);

    const nextQuestion =currentQuestion+1;
    if(nextQuestion < questions.length){
      setcurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true)
    }
    
  }

	return (
   
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=>(
            <button onClick={() => handleChange(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
					</div>
				</>
			)}
		</div>
	);
}