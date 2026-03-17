// ===== LANGUAGE SYSTEM =====
let currentLang = 'en'; // 'en' or 'hi'

const hindiQ1 = [
    "क्या आपने कभी अपने वयस्क जीवन में नींद में चलने का अनुभव किया है?",
    "किशोरावस्था में, क्या आप अपने माता-पिता में से एक या दोनों के सामने अपनी भावनाएँ व्यक्त करने में सहज महसूस करते थे?",
    "क्या आपकी प्रवृत्ति होती है कि किसी दिलचस्प विषय पर चर्चा करते समय लोगों की आँखों में सीधे देखें और/या उनके करीब जाएँ?",
    "क्या आपको लगता है कि पहली बार मिलने वाले अधिकांश लोग आपकी दिखावट की आलोचना नहीं करते?",
    "नए लोगों के समूह में, क्या आप बातचीत शुरू करके ध्यान आकर्षित करने में सहज महसूस करेंगे?",
    "क्या आप अपने साथी का हाथ पकड़ने या गले लगाने में सहज महसूस करते हैं जब अन्य लोग मौजूद हों?",
    "जब कोई शारीरिक रूप से गर्मी महसूस करने की बात करता है, तो क्या आपको भी गर्मी महसूस होने लगती है?",
    "क्या कभी-कभी आपकी प्रवृत्ति होती है कि जब कोई बात कर रहा हो तो आप अनसुना कर दें, क्योंकि आप अपना पक्ष रखने की जल्दी में होते हैं?",
    "क्या आपको लगता है कि आप सुनने की तुलना में देखकर और/या पढ़कर बेहतर सीखते हैं?",
    "किसी नई कक्षा या व्याख्यान में, क्या आप समूह के सामने प्रश्न पूछने में सहज महसूस करते हैं?",
    "अपने विचार व्यक्त करते समय, क्या आपको लगता है कि सभी विवरण बताना जरूरी है ताकि दूसरा व्यक्ति पूरी तरह समझ सके?",
    "क्या आप बच्चों से जुड़ने का आनंद लेते हैं?",
    "क्या अपरिचित लोगों और परिस्थितियों में भी आपको अपने शरीर की हरकतों में सहज और आरामदायक रहना आसान लगता है?",
    "क्या आप गैर-काल्पनिक साहित्य की बजाय काल्पनिक साहित्य पढ़ना पसंद करते हैं?",
    "यदि आप एक खट्टे, रसीले, पीले नींबू को चूसने की कल्पना करें, तो क्या आपके मुँह में पानी आ जाएगा?",
    "यदि आपको लगता है कि आप किसी अच्छे काम के लिए तारीफ़ के हकदार हैं, तो क्या दूसरों के सामने तारीफ़ मिलने पर आप सहज महसूस करते हैं?",
    "क्या आपको लगता है कि आप एक अच्छे वार्ताकार हैं?",
    "जब आपके शरीर या दिखावट पर प्रशंसात्मक ध्यान दिया जाता है, तो क्या आप सहज महसूस करते हैं?"
];

const hindiQ2 = [
    "क्या आप कभी आधी रात को जागे हैं और महसूस किया कि आप अपना शरीर हिला नहीं सकते और/या बोल नहीं सकते?",
    "बचपन में, क्या आपको लगता था कि आप अपने माता-पिता की आवाज़ के लहजे से ज़्यादा प्रभावित होते थे, बजाय इसके कि वे वास्तव में क्या कह रहे थे?",
    "यदि कोई परिचित व्यक्ति किसी ऐसे डर की बात करता है जो आपने भी अनुभव किया है, तो क्या आपको भी डर या आशंका महसूस होती है?",
    "किसी बहस के बाद, क्या आपकी प्रवृत्ति होती है कि आप सोचते रहें कि आपको क्या कहना चाहिए था?",
    "क्या कभी-कभी जब कोई आपसे बात कर रहा हो तो आपका ध्यान भटक जाता है, क्योंकि आपका मन किसी बिल्कुल अलग बात में चला गया?",
    "क्या आप कभी-कभी अच्छे काम के लिए तारीफ़ चाहते हैं, लेकिन तारीफ़ मिलने पर शर्मिंदगी या असहजता महसूस करते हैं?",
    "क्या आपको अक्सर इस बात का डर रहता है कि आप किसी नए व्यक्ति से बातचीत जारी नहीं रख पाएंगे?",
    "जब आपके शरीर या दिखावट पर ध्यान दिया जाता है, तो क्या आप आत्म-सचेत महसूस करते हैं?",
    "यदि आपके पास विकल्प हो, तो क्या आप अधिकतर समय बच्चों के आसपास रहने से बचना पसंद करेंगे?",
    "क्या आपको लगता है कि अपरिचित लोगों या परिस्थितियों में आप अपने शरीर की हरकतों में सहज या ढीले नहीं होते?",
    "क्या आप काल्पनिक की बजाय गैर-काल्पनिक साहित्य पढ़ना पसंद करते हैं?",
    "यदि कोई बहुत कड़वे स्वाद का वर्णन करे, तो क्या आपको उसकी शारीरिक अनुभूति महसूस करने में कठिनाई होती है?",
    "क्या आपको आमतौर पर लगता है कि आप खुद को दूसरों की तुलना में कम अनुकूल रूप से देखते हैं?",
    "क्या दूसरों की उपस्थिति में अपने साथी से स्पर्श (हाथ पकड़ना, चुंबन आदि) शुरू करने में आप अजीब या आत्म-सचेत महसूस करते हैं?",
    "किसी नई कक्षा में, क्या आप समूह के सामने प्रश्न पूछने में असहज महसूस करते हैं, भले ही आप और स्पष्टीकरण चाहते हों?",
    "यदि कोई नया व्यक्ति आपसे बात करते समय सीधे आपकी आँखों में देखे, तो क्या आप बेचैनी महसूस करते हैं?",
    "नए लोगों के समूह में, क्या बातचीत शुरू करके ध्यान आकर्षित करने में आप असहज महसूस करेंगे?",
    "यदि आप किसी के बहुत करीब हैं, तो क्या आपको उनसे अपना प्यार शब्दों में व्यक्त करना कठिन या शर्मनाक लगता है?"
];

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    const enEl = document.getElementById('lang-en');
    const hiEl = document.getElementById('lang-hi');
    enEl.setAttribute('data-active', currentLang === 'en' ? 'true' : 'false');
    hiEl.setAttribute('data-active', currentLang === 'hi' ? 'true' : 'false');
    updateAllText();
    // Re-render active questionnaire if visible
    if (currentQuestionnaire === 1) {
        renderQuestions(questionnaire1, 'questions-1', answers1, 1);
    } else if (currentQuestionnaire === 2) {
        renderQuestions(questionnaire2, 'questions-2', answers2, 2);
    }
}

function t(en, hi) { return currentLang === 'hi' ? hi : en; }

function updateAllText() {
    // Update static page text via data-i18n spans
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = currentLang === 'hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
    });
}

// ===== QUESTIONNAIRE DATA =====
const questionnaire1 = [
    { id: 1, text: "Have you ever walked in your sleep during your adult life?", points: 10 },
    { id: 2, text: "As a teenager, did you feel comfortable expressing your feelings to one or both of your Maternal and Paternal figures?", points: 10 },
    { id: 3, text: "Do you have a tendency to look directly into people's eyes and/or move close to them when discussing an interesting subject?", points: 5 },
    { id: 4, text: "Do you feel that most people you meet for the first time are uncritical of your appearance?", points: 5 },
    { id: 5, text: "In a group situation with people you have just met, would you feel comfortable drawing attention to yourself by initiating a conversation?", points: 5 },
    { id: 6, text: "Do you feel comfortable holding hands or hugging someone you are in a relationship with while other people are present?", points: 5 },
    { id: 7, text: "When someone talks about feeling warm physically, do you begin to feel warm also?", points: 5 },
    { id: 8, text: "Do you occasionally have a tendency to tune out when someone is talking to you, and at times not even hear what the other person is saying, because you are anxious to come up with your side of it?", points: 5 },
    { id: 9, text: "Do you feel that you learn and comprehend better by seeing and/or reading than by hearing?", points: 5 },
    { id: 10, text: "In a new class or lecture situation, do you usually feel comfortable asking questions in front of the group?", points: 5 },
    { id: 11, text: "When expressing your ideas, do you find it important to relate all the details leading up to the subject so the other person can understand it completely?", points: 5 },
    { id: 12, text: "Do you enjoy relating to children?", points: 5 },
    { id: 13, text: "Do you find it easy to be at ease and comfortable with your body movements, even when faced with unfamiliar people and circumstances?", points: 5 },
    { id: 14, text: "Do you prefer reading fiction rather than non-fiction?", points: 5 },
    { id: 15, text: "If you were to imagine sucking on a sour, juicy, yellow lemon, would your mouth water?", points: 5 },
    { id: 16, text: "If you feel that you deserve to be complemented for something well done, do you feel comfortable if the compliment is given to you in front of other people?", points: 5 },
    { id: 17, text: "Do you feel that you are a good conversationalist?", points: 5 },
    { id: 18, text: "Do you feel comfortable when complimentary attention is drawn to your physical body or appearance?", points: 5 }
];

const questionnaire2 = [
    { id: 1, text: "Have you ever awakened in the middle of the night and felt you could not move your body and/or could not talk?", points: 10 },
    { id: 2, text: "As a child, did you feel that you were more affected by the tone of voice of your Maternal and Paternal figures than by what they actually said?", points: 10 },
    { id: 3, text: "If someone you are associated with talks about a fear that you too have experienced, do you have a tendency to have an apprehensive or fearful feeling also?", points: 5 },
    { id: 4, text: "If you are involved in an argument with someone, after the argument is over do you have a tendency to dwell on what you could or should have said?", points: 5 },
    { id: 5, text: "Do you have a tendency to tune out occasionally when someone is talking to you, perhaps not even hear what was said, because your mind has drifted to something totally unrelated?", points: 5 },
    { id: 6, text: "Do you sometimes desire to be complemented for a job well done, but feel embarrassed or uncomfortable when complemented?", points: 5 },
    { id: 7, text: "Do you often have a fear or dread of not being able to carry on a conversation with someone you have just met?", points: 5 },
    { id: 8, text: "Do you feel self-conscious when attention is drawn to your physical body or appearance?", points: 5 },
    { id: 9, text: "If you have your choice, would you rather avoid being around children most of the time?", points: 5 },
    { id: 10, text: "Do you feel that you are not relaxed or loose in body movements, especially when faced with unfamiliar people or circumstances?", points: 5 },
    { id: 11, text: "Do you prefer reading non-fiction rather than fiction?", points: 5 },
    { id: 12, text: "If someone describes a very bitter taste, do you have difficulty experiencing the physical feeling of it?", points: 5 },
    { id: 13, text: "Do you generally feel that you see yourself less favourably than others see you?", points: 5 },
    { id: 14, text: "Do you tend to feel awkward or self-conscious initiating touch (holding hands, kissing, etc.) with someone you are in a relationship with while other people are present?", points: 5 },
    { id: 15, text: "In a new class or lecture situation, do you usually feel uncomfortable asking questions in front of the group even though you may desire further explanation?", points: 5 },
    { id: 16, text: "Do you feel uneasy if someone you have just met looks you directly in the eyes when talking to you, especially if the conversation is about you?", points: 5 },
    { id: 17, text: "In a group situation with people you have just met, would you feel uncomfortable drawing attention to yourself by initiating a conversation?", points: 5 },
    { id: 18, text: "If you are in a relationship or are very close to someone, do you find it difficult or embarrassing to verbalize your love for him or her?", points: 5 }
];

// ===== STATE =====
const answers1 = {};
const answers2 = {};
let currentQuestionnaire = 0; // 0=start, 1=q1, 2=q2

// ===== NAVIGATION =====
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Nav active state on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== RENDER QUESTIONS =====
function renderQuestions(questions, containerId, answersObj, qNum) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const hindiArr = qNum === 1 ? hindiQ1 : hindiQ2;
    const yesLabel = currentLang === 'hi' ? 'हाँ' : 'YES';
    const noLabel = currentLang === 'hi' ? 'नहीं' : 'NO';

    questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `q${qNum}-${q.id}`;
        card.style.animationDelay = `${idx * 0.04}s`;

        const displayText = currentLang === 'hi' ? hindiArr[idx] : q.text;

        // Check if already answered
        const wasAnswered = answersObj[q.id] !== undefined;
        const wasYes = answersObj[q.id] === true;
        if (wasAnswered) card.className += wasYes ? ' answered-yes' : ' answered-no';

        card.innerHTML = `
            <div class="q-number">${q.id}</div>
            <div class="q-content">
                <p class="q-text">${displayText}</p>
                <div class="q-options">
                    <button class="q-option${wasYes ? ' selected-yes' : ''}" onclick="answer(${qNum}, ${q.id}, true, this)" id="q${qNum}-${q.id}-yes">${yesLabel}</button>
                    <button class="q-option${wasAnswered && !wasYes ? ' selected-no' : ''}" onclick="answer(${qNum}, ${q.id}, false, this)" id="q${qNum}-${q.id}-no">${noLabel}</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ===== ANSWER HANDLER =====
function answer(qNum, qId, isYes, btnEl) {
    const answersObj = qNum === 1 ? answers1 : answers2;
    answersObj[qId] = isYes;

    // Update button styles
    const yesBtn = document.getElementById(`q${qNum}-${qId}-yes`);
    const noBtn = document.getElementById(`q${qNum}-${qId}-no`);
    const card = document.getElementById(`q${qNum}-${qId}`);

    yesBtn.classList.remove('selected-yes');
    noBtn.classList.remove('selected-no');
    card.classList.remove('answered-yes', 'answered-no');

    if (isYes) {
        yesBtn.classList.add('selected-yes');
        card.classList.add('answered-yes');
    } else {
        noBtn.classList.add('selected-no');
        card.classList.add('answered-no');
    }

    updateProgress();
    checkCompletion(qNum);
}

// ===== PROGRESS =====
function updateProgress() {
    const total = 36;
    const answered = Object.keys(answers1).length + Object.keys(answers2).length;
    const percent = (answered / total) * 100;

    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-count').textContent = `${answered} / ${total}`;

    if (currentQuestionnaire === 1) {
        document.getElementById('progress-label').textContent = 'Questionnaire 1 of 2';
    } else if (currentQuestionnaire === 2) {
        document.getElementById('progress-label').textContent = 'Questionnaire 2 of 2';
    }
}

function checkCompletion(qNum) {
    if (qNum === 1) {
        const allAnswered = Object.keys(answers1).length === 18;
        document.getElementById('next-btn-1').disabled = !allAnswered;
    } else {
        const allAnswered = Object.keys(answers2).length === 18;
        document.getElementById('submit-btn').disabled = !allAnswered;
    }
}

// ===== QUESTIONNAIRE FLOW =====
function startQuestionnaire() {
    currentQuestionnaire = 1;
    document.getElementById('start-card').style.display = 'none';
    document.getElementById('progress-container').style.display = 'block';
    document.getElementById('questionnaire-1').style.display = 'block';
    renderQuestions(questionnaire1, 'questions-1', answers1, 1);
    updateProgress();
    document.getElementById('questionnaire-1').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goToQuestionnaire2() {
    currentQuestionnaire = 2;
    document.getElementById('questionnaire-1').style.display = 'none';
    document.getElementById('questionnaire-2').style.display = 'block';
    renderQuestions(questionnaire2, 'questions-2', answers2, 2);
    updateProgress();
    document.getElementById('questionnaire-2').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goBackToQuestionnaire1() {
    currentQuestionnaire = 1;
    document.getElementById('questionnaire-2').style.display = 'none';
    document.getElementById('questionnaire-1').style.display = 'block';
    updateProgress();
    document.getElementById('questionnaire-1').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartAssessment() {
    // Clear answers
    Object.keys(answers1).forEach(k => delete answers1[k]);
    Object.keys(answers2).forEach(k => delete answers2[k]);
    currentQuestionnaire = 0;

    document.getElementById('results-section').style.display = 'none';
    document.getElementById('questionnaire-1').style.display = 'none';
    document.getElementById('questionnaire-2').style.display = 'none';
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('start-card').style.display = 'block';

    document.getElementById('questionnaire-section').scrollIntoView({ behavior: 'smooth' });
}

// ===== CALCULATE RESULTS =====
function calculateResults() {
    // Calculate Score A (Q1 - Physical)
    let scoreA = 0;
    questionnaire1.forEach(q => {
        if (answers1[q.id] === true) {
            scoreA += q.points;
        }
    });

    // Calculate Score B (Q2 - Emotional)
    let scoreB = 0;
    questionnaire2.forEach(q => {
        if (answers2[q.id] === true) {
            scoreB += q.points;
        }
    });

    const combined = scoreA + scoreB;
    let psPercent = 0;
    let esPercent = 0;

    if (combined > 0) {
        psPercent = (scoreA / combined) * 100;
        esPercent = 100 - psPercent;
    }

    // Hide questionnaire, show results
    document.getElementById('questionnaire-2').style.display = 'none';
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';

    // Animate results
    setTimeout(() => {
        displayResults(scoreA, scoreB, combined, psPercent, esPercent);
    }, 200);

    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function displayResults(scoreA, scoreB, combined, ps, es) {
    // Max possible score per questionnaire: 10+10+(16*5) = 100
    const maxScore = 100;

    // Scores
    document.getElementById('score-a').textContent = scoreA;
    document.getElementById('score-b').textContent = scoreB;
    document.getElementById('score-combined').textContent = combined;

    // Score bars
    setTimeout(() => {
        document.getElementById('score-bar-a').style.width = (scoreA / maxScore * 100) + '%';
        document.getElementById('score-bar-b').style.width = (scoreB / maxScore * 100) + '%';
    }, 300);

    // Percentages
    document.getElementById('ps-percent').textContent = ps.toFixed(1) + '%';
    document.getElementById('es-percent').textContent = es.toFixed(1) + '%';

    // Formula
    document.getElementById('formula-result').textContent = `${scoreA} / ${combined} × 100 = ${ps.toFixed(1)}%`;
    document.getElementById('formula-result-es').textContent = `100 – ${ps.toFixed(1)} = ${es.toFixed(1)}%`;

    // Gauge
    animateGauge(ps);

    // Interpretation
    renderInterpretation(ps, es);
}

// ===== GAUGE DRAWING =====
function animateGauge(psPercent) {
    const canvas = document.getElementById('gauge-canvas');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Set actual canvas size for retina
    const displaySize = canvas.clientWidth;
    canvas.width = displaySize * dpr;
    canvas.height = displaySize * dpr;
    ctx.scale(dpr, dpr);

    const cx = displaySize / 2;
    const cy = displaySize / 2;
    const radius = displaySize / 2 - 20;
    const lineWidth = 12;

    let currentAngle = 0;
    const targetAngle = (psPercent / 100) * 360;
    const animDuration = 1200;
    const startTime = performance.now();

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function draw(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / animDuration, 1);
        const easedProgress = easeOutCubic(progress);
        currentAngle = targetAngle * easedProgress;

        ctx.clearRect(0, 0, displaySize, displaySize);

        // Background ring
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Physical arc (purple)
        if (currentAngle > 0) {
            const startRad = -Math.PI / 2;
            const endRad = startRad + (currentAngle * Math.PI / 180);

            const gradient = ctx.createLinearGradient(0, 0, displaySize, displaySize);
            gradient.addColorStop(0, '#6c63ff');
            gradient.addColorStop(1, '#8b7cff');

            ctx.beginPath();
            ctx.arc(cx, cy, radius, startRad, endRad);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        // Emotional arc (pink)
        if (currentAngle < 360) {
            const startRad = -Math.PI / 2 + (currentAngle * Math.PI / 180);
            const endRad = -Math.PI / 2 + (360 * Math.PI / 180);

            const gradient = ctx.createLinearGradient(displaySize, 0, 0, displaySize);
            gradient.addColorStop(0, '#ff6b9d');
            gradient.addColorStop(1, '#ff9ebc');

            ctx.beginPath();
            ctx.arc(cx, cy, radius, startRad, endRad);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        // Update center value
        const animatedPS = (psPercent * easedProgress).toFixed(1);
        document.getElementById('gauge-ps-value').textContent = animatedPS + '%';

        if (progress < 1) {
            requestAnimationFrame(draw);
        }
    }

    requestAnimationFrame(draw);
}

// ===== INTERPRETATION =====
function renderInterpretation(ps, es) {
    const card = document.getElementById('interpretation-card');
    let dominantType, iconClass, title, subtitle;

    if (ps > 60) {
        dominantType = 'physical';
        iconClass = 'physical-dominant';
        title = 'Predominantly Physical Suggestibility';
        subtitle = `${ps.toFixed(1)}% Physical / ${es.toFixed(1)}% Emotional`;
    } else if (es > 60) {
        dominantType = 'emotional';
        iconClass = 'emotional-dominant';
        title = 'Predominantly Emotional Suggestibility';
        subtitle = `${ps.toFixed(1)}% Physical / ${es.toFixed(1)}% Emotional`;
    } else {
        dominantType = 'balanced';
        iconClass = 'balanced';
        title = 'Balanced Suggestibility';
        subtitle = `${ps.toFixed(1)}% Physical / ${es.toFixed(1)}% Emotional`;
    }

    const icons = {
        'physical-dominant': '⚡',
        'emotional-dominant': '💜',
        'balanced': '⚖️'
    };

    card.innerHTML = `
        <div class="interp-header">
            <div class="interp-icon ${iconClass}">${icons[iconClass]}</div>
            <div>
                <h4 class="interp-title">${title}</h4>
                <span class="interp-subtitle">${subtitle}</span>
            </div>
        </div>
        <div class="interp-body">
            <div class="interp-section">
                <h4>Best Hypnotic Approaches</h4>
                ${dominantType === 'physical' || dominantType === 'balanced' ? `
                    <ul>
                        <li>Progressive relaxation techniques</li>
                        <li>Direct physical suggestions</li>
                        <li>Arm levitation inductions</li>
                        <li>Sensory-focused imagery and concrete language</li>
                    </ul>
                ` : `
                    <ul>
                        <li>Visualization and guided imagery</li>
                        <li>Metaphorical and story-based language</li>
                        <li>Emotionally charged narratives</li>
                        <li>Indirect suggestion methods</li>
                    </ul>
                `}
            </div>
            <div class="interp-section emotional">
                <h4>Key Traits</h4>
                ${dominantType === 'physical' ? `
                    <ul>
                        <li>Responds well to direct, concrete suggestions</li>
                        <li>Physically expressive and comfortable with body awareness</li>
                        <li>Often extraverted in social settings</li>
                        <li>Learns better through visual and sensory experiences</li>
                    </ul>
                ` : dominantType === 'emotional' ? `
                    <ul>
                        <li>More responsive to indirect and abstract suggestions</li>
                        <li>Internally focused and introspective</li>
                        <li>May be more affected by tone than content</li>
                        <li>Rich inner emotional world and imagination</li>
                    </ul>
                ` : `
                    <ul>
                        <li>Versatile response to various suggestion styles</li>
                        <li>Blends physical awareness with emotional depth</li>
                        <li>Adaptable in social and therapeutic settings</li>
                        <li>Can benefit from both direct and indirect approaches</li>
                    </ul>
                `}
            </div>
        </div>
    `;
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.law-card, .about-card, .about-conclusion').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add staggered delay for law cards
document.querySelectorAll('.law-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});
