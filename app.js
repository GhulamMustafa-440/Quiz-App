const quizData = [
    {
        question: 'Which language run in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'javascript',
        correct: 'd',
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central style sheets',
        b: 'Cascading style sheets',
        c: 'Cascading simple sheets',
        d: 'Cars SUVs sailboats',
        correct: 'b',
    },
    {
        question: 'What does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Makeup Language',
        c: 'Hypertext Machine Language',
        d: 'Helicopter Markup Language',
        correct: 'a',
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of them',
        correct: 'b',
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const next = document.getElementById('next')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl  => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

next.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick = 'location.reload()'>Reload</button>
            `
        }
    }
})
