// Dados do jogo
const gameData = {
    level1: {
        title: "Nível 1 - Conhecimentos Básicos",
        questions: [
            {
                question: "Qual é o principal benefício do alongamento antes de iniciar atividades repetitivas no trabalho?",
                options: [
                    "Aumentar a força muscular",
                    "Preparar músculos e articulações, reduzindo riscos de lesão",
                    "Queimar calorias rapidamente",
                    "Melhorar apenas a aparência física"
                ],
                correct: 1,
                explanation: "O alongamento prepara os músculos e articulações para o movimento, aumentando a flexibilidade e reduzindo significativamente o risco de lesões."
            },
            {
                question: "Para funcionários que passam muito tempo sentados, qual região do corpo mais se beneficia do alongamento?",
                options: [
                    "Apenas os braços",
                    "Coluna, quadris e pernas",
                    "Somente o pescoço",
                    "Apenas os pés"
                ],
                correct: 1,
                explanation: "Ficar sentado por longos períodos causa tensão na coluna, encurtamento dos músculos do quadril e má circulação nas pernas."
            },
            {
                question: "Qual é a duração ideal para manter cada posição de alongamento?",
                options: [
                    "5-10 segundos",
                    "15-30 segundos",
                    "1-2 minutos",
                    "5 minutos"
                ],
                correct: 1,
                explanation: "Entre 15-30 segundos é o tempo ideal para permitir que o músculo relaxe e se estenda adequadamente, sem causar lesões."
            },
            {
                question: "Quando é o melhor momento para fazer alongamentos durante o trabalho?",
                options: [
                    "Apenas no final do expediente",
                    "Somente no início do dia",
                    "A cada 1-2 horas de atividade",
                    "Apenas quando sentir dor"
                ],
                correct: 2,
                explanation: "Fazer pausas para alongamento a cada 1-2 horas previne o acúmulo de tensão muscular e mantém a flexibilidade ao longo do dia."
            }
        ]
    },
    level2: {
        title: "Nível 2 - Aplicação Prática",
        questions: [
            {
                question: "Um funcionário da limpeza que trabalha com movimentos repetitivos de varrer deve focar alongamentos em quais músculos?",
                options: [
                    "Apenas braços",
                    "Ombros, braços, coluna e quadris",
                    "Somente as pernas",
                    "Apenas o pescoço"
                ],
                correct: 1,
                explanation: "O movimento de varrer envolve rotação do tronco, flexão da coluna e uso repetitivo de ombros e braços, exigindo alongamento integrado."
            },
            {
                question: "Para trabalhadores que carregam peso, qual alongamento é mais importante antes da atividade?",
                options: [
                    "Alongamento de dedos",
                    "Aquecimento da coluna e fortalecimento do core",
                    "Apenas flexão de joelhos",
                    "Somente rotação de punhos"
                ],
                correct: 1,
                explanation: "Carregar peso exige estabilidade da coluna vertebral e ativação dos músculos do core para proteção da região lombar."
            },
            {
                question: "Qual sinal indica que o alongamento está sendo feito corretamente?",
                options: [
                    "Dor intensa e tremor muscular",
                    "Sensação de tensão suave e confortável",
                    "Sensação de queimação forte",
                    "Dormência no membro alongado"
                ],
                correct: 1,
                explanation: "O alongamento correto deve causar uma tensão suave e confortável. Dor intensa, queimação ou dormência indicam execução incorreta."
            },
            {
                question: "Para funcionários do setor administrativo, qual exercício ajuda a prevenir a síndrome do túnel do carpo?",
                options: [
                    "Apenas flexão de cotovelo",
                    "Alongamentos de punho, dedos e antebraço",
                    "Somente rotação de ombros",
                    "Apenas caminhada"
                ],
                correct: 1,
                explanation: "A síndrome do túnel do carpo afeta punhos e mãos. Alongar essas regiões e os antebraços ajuda a prevenir a compressão nervosa."
            }
        ]
    },
    level3: {
        title: "Nível 3 - Especialista",
        questions: [
            {
                question: "Qual é a diferença entre alongamento estático e dinâmico no ambiente de trabalho?",
                options: [
                    "Não há diferença entre eles",
                    "Estático: posições mantidas; Dinâmico: movimentos controlados",
                    "Estático é sempre melhor que dinâmico",
                    "Dinâmico só pode ser feito por atletas"
                ],
                correct: 1,
                explanation: "Alongamento estático mantém a posição, ideal para relaxamento. Dinâmico usa movimentos controlados, melhor para aquecimento pré-atividade."
            },
            {
                question: "Como implementar um programa de alongamento eficaz no ambiente corporativo?",
                options: [
                    "Obrigar todos a fazer os mesmos exercícios",
                    "Educar, personalizar por função e criar lembretes regulares",
                    "Fazer apenas uma palestra sobre o assunto",
                    "Deixar cada um fazer o que quer"
                ],
                correct: 1,
                explanation: "Um programa eficaz envolve educação sobre benefícios, exercícios específicos para cada função e lembretes sistemáticos para criar hábito."
            },
            {
                question: "Qual é o impacto do alongamento na produtividade e bem-estar dos funcionários?",
                options: [
                    "Reduz a produtividade por tirar tempo do trabalho",
                    "Aumenta energia, reduz dores e melhora o foco",
                    "Não tem nenhum impacto mensurável",
                    "Só beneficia funcionários mais velhos"
                ],
                correct: 1,
                explanation: "Estudos mostram que pausas para alongamento aumentam a energia, reduzem dores musculares e melhoram a concentração e produtividade."
            },
            {
                question: "Como adaptar exercícios de alongamento para funcionários com limitações físicas?",
                options: [
                    "Esses funcionários não podem fazer alongamento",
                    "Adaptar amplitude, posição e oferecer alternativas seguras",
                    "Fazer sempre os mesmos exercícios básicos",
                    "Apenas exercícios sentados são seguros"
                ],
                correct: 1,
                explanation: "Todos podem se beneficiar do alongamento. É importante adaptar a amplitude, posição (sentado, em pé) e oferecer alternativas seguras para cada limitação."
            }
        ]
    }
};

// Variáveis do jogo
let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let totalQuestions = 0;
let participantName = "";
let gameCompleted = false;

function startGame() {
    const nameInput = document.getElementById('participant-name');
    if (nameInput.value.trim() === "") {
        alert("Por favor, digite seu nome para continuar!");
        nameInput.focus();
        return;
    }
    
    participantName = nameInput.value.trim();
    currentLevel = 1;
    currentQuestion = 0;
    score = 0;
    totalQuestions = Object.values(gameData).reduce((total, level) => total + level.questions.length, 0);
    
    showScreen('game-screen');
    loadQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    const levelData = gameData[`level${currentLevel}`];
    const questionData = levelData.questions[currentQuestion];
    
    // Atualizar indicadores
    document.getElementById('level-indicator').textContent = levelData.title;
    document.getElementById('current-score').textContent = score;
    document.getElementById('current-question').textContent = getCurrentQuestionNumber();
    document.getElementById('current-level').textContent = currentLevel;
    
    // Atualizar barra de progresso
    const progress = (getCurrentQuestionNumber() - 1) / totalQuestions * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    // Carregar pergunta
    document.getElementById('question-text').textContent = questionData.question;
    
    // Carregar opções
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });
    
    // Esconder feedback e botão próximo
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

function getCurrentQuestionNumber() {
    let questionNumber = 0;
    for (let i = 1; i < currentLevel; i++) {
        questionNumber += gameData[`level${i}`].questions.length;
    }
    return questionNumber + currentQuestion + 1;
}

function selectOption(selectedIndex) {
    const levelData = gameData[`level${currentLevel}`];
    const questionData = levelData.questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    
    // Desabilitar todas as opções
    options.forEach(option => {
        option.onclick = null;
    });
    
    // Verificar resposta
    const isCorrect = selectedIndex === questionData.correct;
    
    if (isCorrect) {
        score += 10;
        options[selectedIndex].classList.add('correct');
        feedback.className = 'feedback correct';
        feedback.innerHTML = `
            <strong>✅ Correto!</strong><br>
            ${questionData.explanation}
        `;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[questionData.correct].classList.add('correct');
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `
            <strong>❌ Incorreto!</strong><br>
            ${questionData.explanation}
        `;
    }
    
    feedback.style.display = 'block';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('current-score').textContent = score;
}

function nextQuestion() {
    currentQuestion++;
    
    // Verificar se ainda há perguntas no nível atual
    const levelData = gameData[`level${currentLevel}`];
    if (currentQuestion >= levelData.questions.length) {
        // Avançar para o próximo nível
        currentLevel++;
        currentQuestion = 0;
        
        // Verificar se o jogo terminou
        if (currentLevel > 3) {
            endGame();
            return;
        }
    }
    
    loadQuestion();
}

function endGame() {
    gameCompleted = true;
    const percentage = Math.round((score / (totalQuestions * 10)) * 100);
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-percentage').textContent = percentage + '%';
    
    // Título baseado na performance
    const resultTitle = document.getElementById('result-title');
    const finalTips = document.getElementById('final-tips');
    
    if (percentage >= 90) {
        resultTitle.textContent = '🏆 Excelente! Você é um especialista!';
        finalTips.innerHTML = `
            <strong>Parabéns!</strong> Você demonstrou excelente conhecimento sobre alongamento no trabalho:<br>
            • Implemente uma rotina diária de alongamento<br>
            • Compartilhe seus conhecimentos com colegas<br>
            • Torne-se um multiplicador de boas práticas<br>
            • Continue estudando sobre ergonomia e saúde ocupacional
        `;
    } else if (percentage >= 70) {
        resultTitle.textContent = '👍 Muito bem! Você tem bom conhecimento!';
        finalTips.innerHTML = `
            <strong>Ótimo resultado!</strong> Você já sabe bastante sobre alongamento no trabalho:<br>
            • Pratique os exercícios aprendidos diariamente<br>
            • Observe como seu corpo responde aos alongamentos<br>
            • Ajude colegas com dificuldades posturais<br>
            • Mantenha regularidade nas práticas de alongamento
        `;
    } else if (percentage >= 50) {
        resultTitle.textContent = '📚 Bom início! Continue aprendendo!';
        finalTips.innerHTML = `
            <strong>Você está no caminho certo!</strong> Para melhorar seus conhecimentos:<br>
            • Revise os conceitos básicos de alongamento<br>
            • Pratique exercícios simples durante as pausas<br>
            • Observe profissionais experientes<br>
            • Participe de mais treinamentos sobre saúde ocupacional
        `;
    } else {
        resultTitle.textContent = '💪 Precisa melhorar, mas não desista!';
        finalTips.innerHTML = `
            <strong>Todo começo é um recomeço!</strong> Recomendações para você:<br>
            • Jogue novamente para revisar os conceitos<br>
            • Converse com profissionais de educação física<br>
            • Comece com alongamentos básicos e simples<br>
            • Procure orientação no SESC Campo Mourão
        `;
    }
    
    showScreen('results-screen');
}

function generateDiploma() {
    const percentage = Math.round((score / (totalQuestions * 10)) * 100);
    
    // Preencher dados do diploma
    document.getElementById('diploma-name').textContent = participantName;
    document.getElementById('diploma-score').textContent = score;
    document.getElementById('diploma-percentage').textContent = percentage + '%';
    
    // Data atual formatada
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    document.getElementById('diploma-date').textContent = formattedDate;
    
    showScreen('diploma-screen');
}

function printDiploma() {
    window.print();
}

function restartGame() {
    // Reset todas as variáveis
    currentLevel = 1;
    currentQuestion = 0;
    score = 0;
    gameCompleted = false;
    
    // Limpar nome se quiser
    document.getElementById('participant-name').value = participantName;
    
    // Voltar para tela inicial
    showScreen('welcome-screen');
}
// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Focus no campo de nome
    document.getElementById('participant-name').focus();
    // Enter para começar o jogo
    document.getElementById('participant-name').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            startGame();
        }
    });
});
// Prevenir reload acidental durante o jogo
window.addEventListener('beforeunload', function(e) {
    if (!gameCompleted && (currentLevel > 1 || currentQuestion > 0)) {
        const confirmationMessage = 'Tem certeza que deseja sair? Seu progresso será perdido.';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
});
