document.addEventListener('DOMContentLoaded', () => {

    // ===== DATA =====
    const vocabularyParts = [
        // Part 1
        [
            { word: "Hello", definition: "A greeting used when you meet someone", example: "Hello! My name is Maria.", translation: "Hola", synonyms: ["Hi", "Hey"] },
            { word: "Goodbye", definition: "A word you say when you leave someone", example: "Goodbye! See you tomorrow.", translation: "Adiós", synonyms: ["Bye", "See you"] },
            { word: "My name is", definition: "A phrase to tell someone what you are called", example: "My name is John.", translation: "Mi nombre es", synonyms: ["I am", "I'm called"] },
            { word: "Nice to meet you", definition: "A polite phrase when you meet someone for the first time", example: "Nice to meet you, Sarah!", translation: "Mucho gusto", synonyms: ["Pleased to meet you", "Good to meet you"] },
            { word: "How are you?", definition: "A question to ask about someone's health or feelings", example: "Hello! How are you today?", translation: "¿Cómo estás?", synonyms: ["How's it going?", "How do you do?"] },
            { word: "I'm fine", definition: "An answer to say you feel good or okay", example: "I'm fine, thank you.", translation: "Estoy bien", synonyms: ["I'm good", "I'm okay"] },
            { word: "Please", definition: "A polite word when you ask for something", example: "Can you help me, please?", translation: "Por favor", synonyms: ["Kindly", "If you don't mind"] },
            { word: "Thank you", definition: "A phrase to show you are grateful", example: "Thank you for your help!", translation: "Gracias", synonyms: ["Thanks", "Thanks a lot"] },
            { word: "You're welcome", definition: "A polite response when someone thanks you", example: "You're welcome! Happy to help.", translation: "De nada", synonyms: ["No problem", "My pleasure"] },
            { word: "Excuse me", definition: "A phrase to get attention politely or say sorry", example: "Excuse me, where is the bathroom?", translation: "Disculpe / Perdón", synonyms: ["Pardon me", "Sorry"] }
        ],
        // Part 2
        [
            { word: "I'm from", definition: "A phrase to tell where you come from", example: "I'm from Mexico.", translation: "Soy de", synonyms: ["I come from", "I am originally from"] },
            { word: "What's your name?", definition: "A question to ask someone their name", example: "Hi! What's your name?", translation: "¿Cómo te llamas?", synonyms: ["What are you called?", "May I have your name?"] },
            { word: "This is", definition: "A phrase to introduce another person", example: "This is my friend, Tom.", translation: "Este/a es", synonyms: ["Meet", "Let me introduce"] },
            { word: "Friend", definition: "A person you like and know well", example: "She is my best friend.", translation: "Amigo/a", synonyms: ["Buddy", "Pal"] },
            { word: "Where are you from?", definition: "A question to ask about someone's country or city", example: "Where are you from? I'm from Brazil.", translation: "¿De dónde eres?", synonyms: ["Where do you come from?", "What country are you from?"] },
            { word: "Yes", definition: "A word to agree or say something is true", example: "Yes, I am a student.", translation: "Sí", synonyms: ["Yeah", "Yep"] },
            { word: "No", definition: "A word to disagree or say something is not true", example: "No, I am not hungry.", translation: "No", synonyms: ["Nope", "Not really"] },
            { word: "Sorry", definition: "A word to apologize or express regret", example: "Sorry, I am late.", translation: "Lo siento / Disculpa", synonyms: ["I apologize", "My apologies"] },
            { word: "Good morning", definition: "A greeting used in the early part of the day", example: "Good morning! How are you?", translation: "Buenos días", synonyms: ["Morning", "Good day"] },
            { word: "Good night", definition: "A phrase to say goodbye in the evening or before bed", example: "Good night! Sleep well.", translation: "Buenas noches", synonyms: ["Night", "Sweet dreams"] }
        ]
    ];
    const quizQuestions = [
        { question: "Which word is a greeting to use when you meet someone?", options: ["Hello", "Goodbye", "Thank you", "Sorry"], answer: "Hello" },
        { question: "What do you say when you leave?", options: ["Goodbye", "Hello", "Please", "Yes"], answer: "Goodbye" },
        { question: "How do you tell someone your name?", options: ["My name is...", "How are you?", "I'm from...", "Excuse me"], answer: "My name is..." },
        { question: "What do you say when you meet a new person?", options: ["Nice to meet you", "Thank you", "You're welcome", "Goodbye"], answer: "Nice to meet you" },
        { question: "Which phrase asks about someone's feelings?", options: ["How are you?", "What's your name?", "Where are you from?", "My name is..."], answer: "How are you?" },
        { question: "How do you answer 'How are you?' if you feel good?", options: ["I'm fine", "I'm from Mexico", "My name is Maria", "Sorry"], answer: "I'm fine" },
        { question: "Which word do you use to ask for something politely?", options: ["Please", "Sorry", "Yes", "No"], answer: "Please" },
        { question: "What do you say when someone gives you a gift?", options: ["Thank you", "You're welcome", "Please", "Excuse me"], answer: "Thank you" },
        { question: "How do you respond to 'Thank you'?", options: ["You're welcome", "Please", "Sorry", "Hello"], answer: "You're welcome" },
        { question: "What do you say to get a waiter's attention?", options: ["Excuse me", "Goodbye", "I'm fine", "Thank you"], answer: "Excuse me" },
        { question: "How do you tell someone your country?", options: ["I'm from...", "This is...", "I'm fine", "Yes"], answer: "I'm from..." },
        { question: "Which question asks for someone's name?", options: ["What's your name?", "How are you?", "Where are you from?", "Is this your friend?"], answer: "What's your name?" },
        { question: "How do you introduce your friend?", options: ["This is...", "I'm from...", "My name is...", "You're welcome"], answer: "This is..." },
        { question: "A person you like and know well is a...", options: ["Friend", "Student", "Morning", "Name"], answer: "Friend" },
        { question: "How do you ask someone their country?", options: ["Where are you from?", "What's your name?", "How are you?", "Are you okay?"], answer: "Where are you from?" },
        { question: "Which word means you agree?", options: ["Yes", "No", "Sorry", "Please"], answer: "Yes" },
        { question: "What is the opposite of 'Yes'?", options: ["No", "Okay", "Fine", "Hello"], answer: "No" },
        { question: "What do you say when you make a mistake?", options: ["Sorry", "Thank you", "Please", "Yes"], answer: "Sorry" },
        { question: "What do you say at 8 AM?", options: ["Good morning", "Good night", "Goodbye", "Hello"], answer: "Good morning" },
        { question: "What do you say before you go to sleep?", options: ["Good night", "Good morning", "Thank you", "Sorry"], answer: "Good night" }
    ];

    // ===== STATE MANAGEMENT =====
    let currentMode = 'study';
    let currentPart = { study: 0, practice: 0 };
    let progress = {
        study: [new Set(), new Set()],
        practice: [new Set(), new Set()]
    };
    
    // ===== DOM ELEMENTS =====
    const sections = {
        study: document.getElementById('study-section'),
        practice: document.getElementById('practice-section'),
        quiz: document.getElementById('quiz-section')
    };
    const navButtons = {
        study: document.getElementById('study-mode-btn'),
        practice: document.getElementById('practice-mode-btn'),
        quiz: document.getElementById('quiz-mode-btn')
    };
    const progressElements = {
        desktopText: document.getElementById('desktopProgressText'),
        ring: document.getElementById('progressRing'),
        mobileText: document.getElementById('mobileProgressText'),
        barFill: document.getElementById('progressBarFill'),
        container: document.querySelector('.floating-progress')
    };
    const studyDOM = {
        vocabContainer: document.getElementById('vocab-container'),
        partIndicator: document.getElementById('study-part-indicator'),
        loadMoreBtn: document.getElementById('load-more-study'),
        detailsContainer: document.getElementById('word-details'),
        detailsPanel: document.getElementById('word-details-panel')
    };

    // ===== INITIALIZATION =====
    function init() {
        navButtons.study.addEventListener('click', () => switchMode('study'));
        navButtons.practice.addEventListener('click', () => switchMode('practice'));
        navButtons.quiz.addEventListener('click', () => switchMode('quiz'));
        document.getElementById('reset-progress').addEventListener('click', resetCurrentModeProgress);
        initStudyMode();
        initPracticeMode();
        initQuizMode();
        switchMode('study');
    }
    
    // ===== MODE SWITCHING =====
    function switchMode(newMode) {
        if (currentMode === newMode && document.body.dataset.initialized) {
            return;
        }
        if (!document.body.dataset.initialized) {
            document.body.dataset.initialized = "true";
        }
        
        currentMode = newMode;

        Object.values(sections).forEach(s => s.classList.add('hidden'));
        sections[currentMode].classList.remove('hidden');

        Object.values(navButtons).forEach(b => b.classList.remove('active'));
        navButtons[currentMode].classList.add('active');
        
        if (currentMode === 'quiz') {
            progressElements.container.classList.add('hidden');
            startQuiz();
        } else {
            progressElements.container.classList.remove('hidden');
            updateProgress();
        }

        if(currentMode === 'practice') {
            checkMicrophonePermission();
        }
    }

    // ===== PROGRESS MANAGEMENT =====
    function updateProgress() {
        if (currentMode === 'quiz') return;
        const partIndex = currentPart[currentMode];
        const currentVocab = vocabularyParts[partIndex];
        const currentViewed = progress[currentMode][partIndex];
        const percentage = currentVocab.length > 0 ? (currentViewed.size / currentVocab.length) * 100 : 0;
        const roundedPercentage = Math.round(percentage);
        progressElements.desktopText.textContent = `${roundedPercentage}%`;
        progressElements.mobileText.textContent = `${roundedPercentage}%`;
        progressElements.barFill.style.width = `${percentage}%`;
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (percentage / 100) * circumference;
        progressElements.ring.style.strokeDashoffset = offset;
    }

    function resetCurrentModeProgress() {
        if (currentMode === 'quiz') return;
        const partIndex = currentPart[currentMode];
        progress[currentMode][partIndex].clear();
        updateProgress();
        if (currentMode === 'study') {
            document.querySelectorAll('#vocab-container .vocab-card').forEach(c => c.classList.remove('active'));
            studyDOM.detailsContainer.innerHTML = `<p class="text-gray-500">Select a word to see its details</p>`;
        }
        if (currentMode === 'practice') {
             document.querySelectorAll('#practice-vocab-container .vocab-card').forEach(el => el.classList.remove('active'));
        }
    }
    
    // ===== AUDIO HELPERS =====
    function formatFileName(text) {
        return text.toLowerCase().replace(/'/g, '').replace(/[?]/g, '').replace(/\s+/g, '_');
    }
    function playAudio(filePath) {
        return new Promise((resolve, reject) => {
            const audio = new Audio(filePath);
            audio.onended = resolve;
            audio.onerror = reject;
            audio.play().catch(e => reject(e));
        });
    }
    function playWord(word) { return playAudio(`sound/${formatFileName(word)}.mp3`); }
    function playExample(word) { return playAudio(`sound/ex_${formatFileName(word)}.mp3`); }

    // ===================================
    // =========== STUDY MODE ============
    // ===================================
    function initStudyMode() {
        loadStudyPart(currentPart.study);
        studyDOM.loadMoreBtn.addEventListener('click', toggleStudyPart);
    }

    function loadStudyPart(partIndex) {
        studyDOM.vocabContainer.innerHTML = '';
        vocabularyParts[partIndex].forEach((word, index) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'vocab-card bg-white p-4 rounded-lg shadow border border-gray-100';
            wordElement.addEventListener('click', () => handleStudyWordClick(word, index, wordElement));
            wordElement.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <h3 class="font-semibold text-lg text-indigo-700">${word.word}</h3>
                    <span class="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">${word.translation}</span>
                </div>
                <p class="text-gray-600">${word.definition}</p>`;
            studyDOM.vocabContainer.appendChild(wordElement);
        });
        updateStudyPartIndicator();
        updateProgress();
    }
    
    function handleStudyWordClick(word, index, element) {
        const isMobile = window.innerWidth < 768;
        if (!progress.study[currentPart.study].has(index)) {
            progress.study[currentPart.study].add(index);
            updateProgress();
        }

        document.querySelectorAll('#vocab-container .vocab-card').forEach(el => el.classList.remove('active'));
        element.classList.add('active');

        if (!isMobile) {
            studyDOM.detailsPanel.classList.remove('hidden');
        }
        
        showWordDetails(word);
    }

    function showWordDetails(word) {
        studyDOM.detailsContainer.innerHTML = `
            <div class="w-full bg-indigo-50 rounded-lg p-6">
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center">
                        <h2 class="text-2xl font-bold text-indigo-800">${word.word}</h2>
                        <i class="fas fa-volume-up sound-icon" data-sound-type="word" data-word="${word.word}"></i>
                    </div>
                    <span class="text-sm px-2 py-1 bg-indigo-200 text-indigo-800 rounded-full">${word.translation}</span>
                </div>
                <div class="mb-4"><h3 class="font-semibold text-gray-700 mb-1">Definition</h3><p class="text-gray-800">${word.definition}</p></div>
                <div class="mb-4"><h3 class="font-semibold text-gray-700 mb-1 flex items-center">Example <i class="fas fa-volume-up sound-icon ml-2" data-sound-type="example" data-word="${word.word}"></i></h3><p class="text-gray-800 italic">"${word.example}"</p></div>
                <div><h3 class="font-semibold text-gray-700 mb-1">Synonyms</h3><div class="flex flex-wrap gap-2">${word.synonyms.map(syn => `<span class="text-sm px-2 py-1 bg-gray-200 text-gray-800 rounded-full">${syn}</span>`).join('')}</div></div>
            </div>`;
        studyDOM.detailsContainer.querySelectorAll('.sound-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const type = e.target.dataset.soundType;
                const word = e.target.dataset.word;
                if (type === 'word') playWord(word); else playExample(word);
            });
        });
    }

    function toggleStudyPart() {
        currentPart.study = (currentPart.study + 1) % vocabularyParts.length;
        loadStudyPart(currentPart.study);
        studyDOM.detailsContainer.innerHTML = `<p class="text-gray-500">Select a word to see its details</p>`;
        studyDOM.detailsPanel.classList.add('hidden');
    }

    function updateStudyPartIndicator() {
        studyDOM.partIndicator.textContent = `Part ${currentPart.study + 1} of ${vocabularyParts.length}`;
        studyDOM.loadMoreBtn.textContent = currentPart.study === 0 ? 'Load More Words' : 'Back to Part 1';
    }

    // ===================================
    // ======== SPEECH PRACTICE MODE =====
    // ===================================
    const practiceDOM = {
        vocabContainer: document.getElementById('practice-vocab-container'),
        partIndicator: document.getElementById('practice-part-indicator'),
        loadMoreBtn: document.getElementById('load-more-practice'),
        targetPhrase: document.getElementById('targetPhrase'),
        playTargetSoundBtn: document.getElementById('playTargetSoundBtn'),
        micBtn: document.getElementById('micBtn'),
        statusDiv: document.getElementById('status'),
        resultDiv: document.getElementById('result'),
        transcriptText: document.getElementById('transcriptText'),
        permissionSection: document.getElementById('permissionSection')
    };
    let recognition;
    let currentPracticeWord = null;
    let isListening = false;

    function initPracticeMode() {
        loadPracticePart(currentPart.practice);
        practiceDOM.loadMoreBtn.addEventListener('click', togglePracticePart);
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Sorry, your browser does not support the Web Speech API.'); return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false; recognition.interimResults = false; recognition.lang = 'en-US';
        practiceDOM.micBtn.addEventListener('click', toggleListening);
        practiceDOM.playTargetSoundBtn.addEventListener('click', async () => {
            if (currentPracticeWord && !isListening) {
                practiceDOM.micBtn.disabled = true;
                await playWord(currentPracticeWord.word);
                practiceDOM.micBtn.disabled = false;
            }
        });
        recognition.onstart = () => { isListening = true; updateMicButtonUI(); };
        recognition.onresult = handleRecognitionResult;
        recognition.onerror = handleRecognitionError;
        recognition.onend = () => {
            isListening = false; updateMicButtonUI();
            if(!practiceDOM.statusDiv.textContent.includes('Error')) {
                practiceDOM.statusDiv.textContent = "Finished. Click mic to try again.";
            }
        };
    }

    function loadPracticePart(partIndex) {
        practiceDOM.vocabContainer.innerHTML = '';
        vocabularyParts[partIndex].forEach((word, index) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'vocab-card bg-white p-4 rounded-lg shadow border border-gray-100';
            wordElement.addEventListener('click', () => selectPracticeWord(word, index, wordElement));
            wordElement.innerHTML = `<h3 class="font-semibold text-lg text-indigo-700">${word.word}</h3>`;
            practiceDOM.vocabContainer.appendChild(wordElement);
        });
        updatePracticePartIndicator();
        updateProgress();
    }

    function selectPracticeWord(word, index, element) {
        currentPracticeWord = word;
        practiceDOM.targetPhrase.textContent = word.word;
        practiceDOM.playTargetSoundBtn.classList.remove('hidden');
        practiceDOM.micBtn.disabled = false;
        practiceDOM.statusDiv.textContent = 'Click the mic to begin.';
        practiceDOM.resultDiv.innerHTML = 'Your result will appear here.';
        practiceDOM.resultDiv.className = 'result-box';
        document.querySelectorAll('#practice-vocab-container .vocab-card').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }

    async function checkMicrophonePermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach(track => track.stop());
            practiceDOM.permissionSection.style.display = 'none';
            if (currentPracticeWord) practiceDOM.micBtn.disabled = false;
            return true;
        } catch (error) {
            practiceDOM.permissionSection.style.display = 'block';
            practiceDOM.micBtn.disabled = true;
            return false;
        }
    }

    async function toggleListening() {
        if (!currentPracticeWord) return;
        const hasPermission = await checkMicrophonePermission();
        if (!hasPermission) return;
        if (isListening) { recognition.stop(); } 
        else {
            try {
                recognition.start();
                practiceDOM.statusDiv.textContent = '🎤 Listening...';
                practiceDOM.resultDiv.innerHTML = '';
                practiceDOM.resultDiv.className = 'result-box';
            } catch(e) { console.error("Error starting recognition: ", e); }
        }
    }

    function updateMicButtonUI() {
        const icon = practiceDOM.micBtn.querySelector('i');
        const text = practiceDOM.micBtn.querySelector('span');
        if (isListening) {
            practiceDOM.micBtn.classList.add('listening');
            icon.className = 'fas fa-stop'; text.textContent = 'Stop';
        } else {
            practiceDOM.micBtn.classList.remove('listening');
            icon.className = 'fas fa-microphone'; text.textContent = 'Start Listening';
        }
    }
    
    function handleRecognitionResult(event) {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript.trim().toLowerCase().replace(/[.,!?]/g, '');
        const originalTranscript = result[0].transcript.trim();
        const target = currentPracticeWord.word.trim().toLowerCase().replace(/[.,!?]/g, '');
        practiceDOM.transcriptText.textContent = originalTranscript;
        
        if (transcript === target) {
            practiceDOM.resultDiv.innerHTML = `
                <h3><i class="fas fa-check-circle"></i> Perfect Match!</h3>
                <p class="feedback-transcript">You said: "<strong>${originalTranscript}</strong>"</p>`;
            practiceDOM.resultDiv.className = 'result-box success';
            const wordIndex = vocabularyParts[currentPart.practice].findIndex(w => w.word === currentPracticeWord.word);
            if (wordIndex !== -1 && !progress.practice[currentPart.practice].has(wordIndex)) {
                progress.practice[currentPart.practice].add(wordIndex);
                updateProgress();
            }
        } else {
            practiceDOM.resultDiv.innerHTML = `
                <h3><i class="fas fa-times-circle"></i> Not Quite Right</h3>
                <p class="feedback-transcript">You said: "<strong>${originalTranscript}</strong>"</p>`;
            practiceDOM.resultDiv.className = 'result-box failure';
        }
    }
    
    function handleRecognitionError(event) {
        console.error('Recognition error:', event.error);
        let errorMessage = `Error: ${event.error}`;
        if (event.error === 'not-allowed') errorMessage = '🚫 Mic access denied.';
        if (event.error === 'no-speech') {
            errorMessage = '🔇 No speech detected.';
            practiceDOM.resultDiv.innerHTML = `<p>No speech recognized. Please try again.</p>`;
            practiceDOM.resultDiv.className = 'result-box failure';
        }
        practiceDOM.statusDiv.textContent = errorMessage;
    }

    function togglePracticePart() {
        currentPart.practice = (currentPart.practice + 1) % vocabularyParts.length;
        loadPracticePart(currentPart.practice);
    }

    function updatePracticePartIndicator() {
        practiceDOM.partIndicator.textContent = `Part ${currentPart.practice + 1} of ${vocabularyParts.length}`;
        practiceDOM.loadMoreBtn.textContent = currentPart.practice === 0 ? 'Load More Words' : 'Back to Part 1';
    }

    // ===================================
    // =========== QUIZ MODE =============
    // ===================================
    const quizDOM = {
        container: document.getElementById('quiz-container'),
        results: document.getElementById('quiz-results'),
        counter: document.getElementById('question-counter'),
        text: document.getElementById('question-text'),
        options: document.getElementById('options-container'),
        feedback: document.getElementById('feedback'),
        nextBtn: document.getElementById('next-question-btn'),
        restartBtn: document.getElementById('restart-quiz-btn'),
        scoreDisplay: document.getElementById('score-display'),
        totalDisplay: document.getElementById('total-questions-display')
    };
    let currentQuestionIndex = 0, score = 0, selectedQuestions = [];

    function initQuizMode() {
        quizDOM.nextBtn.addEventListener('click', () => { currentQuestionIndex++; displayQuestion(); });
        quizDOM.restartBtn.addEventListener('click', startQuiz);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startQuiz() {
        currentQuestionIndex = 0; score = 0;
        selectedQuestions = shuffleArray([...quizQuestions]).slice(0, 10);
        quizDOM.container.classList.remove('hidden');
        quizDOM.results.classList.add('hidden');
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex >= selectedQuestions.length) {
            showResults();
            return;
        }
        const questionData = selectedQuestions[currentQuestionIndex];
        quizDOM.counter.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
        quizDOM.text.textContent = questionData.question;
        quizDOM.options.innerHTML = '';
        quizDOM.feedback.textContent = '';
        quizDOM.feedback.className = 'mt-4 font-semibold text-center h-6';
        quizDOM.nextBtn.classList.add('hidden');
        shuffleArray([...questionData.options]).forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => checkAnswer(option, questionData.answer, button));
            quizDOM.options.appendChild(button);
        });
    }

    function checkAnswer(selectedOption, correctAnswer, button) {
        const options = document.querySelectorAll('.option-btn');
        options.forEach(opt => {
            opt.disabled = true;
            if (opt.textContent === correctAnswer) opt.classList.add('correct');
        });
        if (selectedOption === correctAnswer) {
            quizDOM.feedback.textContent = "Correct!";
            quizDOM.feedback.classList.add('correct');
            score++;
        } else {
            button.classList.add('incorrect');
            quizDOM.feedback.textContent = `Incorrect. The answer is highlighted.`;
            quizDOM.feedback.classList.add('incorrect');
        }
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            quizDOM.nextBtn.classList.remove('hidden');
        } else {
            setTimeout(showResults, 1500);
        }
    }

    function showResults() {
        quizDOM.container.classList.add('hidden');
        quizDOM.results.classList.remove('hidden');
        quizDOM.scoreDisplay.textContent = score;
        quizDOM.totalDisplay.textContent = selectedQuestions.length;
    }

    // ===== START THE APP =====
    init();
});