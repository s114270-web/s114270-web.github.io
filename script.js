// ----------------------------------------------------
// I. 數據結構 (問題、結果、計分器)
// ----------------------------------------------------

// 1. 初始化計分器
const scores = {
    borderCollie: 0, // 邊牧
    goldenRetriever: 0, // 黃金獵犬
    shibaInu: 0, // 柴犬
    chihuahua: 0, // 吉娃娃
    poodle: 0, // 貴賓
    husky: 0, // 哈士奇
    pug: 0, // 巴哥
    germanShepherd: 0, // 德牧
};

// 2. 問題資料 (使用我們之前設計的 8 個問題)
const questions = [
    {
        title: "Q1: 週末的理想活動是什麼？ (活動量/社交性)",
        options: [
            { text: "規劃一整天的戶外活動，例如登山或長跑。", score: { borderCollie: 3, husky: 3 } },
            { text: "邀請朋友到家裡聚會，大家一起看電影或玩桌遊。", score: { goldenRetriever: 3, poodle: 3 } },
            { text: "誰都不見，在溫暖的毯子裡睡到自然醒。", score: { pug: 3, chihuahua: 3 } },
            { text: "獨立完成一個持續很久的個人項目或學習新技能。", score: { shibaInu: 3, germanShepherd: 3 } },
            { text: "哪裡都無所謂，只要能吃到好吃的東西就好。", score: { pug: 3, goldenRetriever: 2 } },
        ]
    },
    {
        title: "Q2: 你在朋友聚會中扮演的角色是？ (個性/領導力)",
        options: [
            { text: "負責帶動氣氛，確保每個人都被照顧到。", score: { goldenRetriever: 3, poodle: 3 } },
            { text: "默默觀察，只有在有人問到我擅長的領域時才開口。", score: { germanShepherd: 3, borderCollie: 3 } },
            { text: "常常做出誇張的行為或反應，逗樂大家。", score: { husky: 3, chihuahua: 3 } },
            { text: "我只負責可愛，並且隨和地跟著大家做決定。", score: { pug: 3 } },
            { text: "我會保持距離，展現出我很獨立，不需要團體。", score: { shibaInu: 3, husky: 2 } },
        ]
    },
    {
        title: "Q3: 你的衣櫃裡通常是哪種風格的衣服？ (外觀/儀態)",
        options: [
            { text: "舒適、耐穿、適合運動，弄髒也沒關係。", score: { borderCollie: 3, goldenRetriever: 3 } },
            { text: "剪裁精緻，搭配飾品，注重個人風格和流行感。", score: { poodle: 3 } },
            { text: "簡單、低調，只要能遮住身體就好。", score: { shibaInu: 3, germanShepherd: 3 } },
            { text: "鮮豔、有圖案，或是看起來很戲劇化的單品。", score: { husky: 3, chihuahua: 3 } },
            { text: "舒服就好，最好是能馬上躺下的寬鬆家居服。", score: { pug: 3 } },
        ]
    },
    {
        title: "Q4: 你遇到挫折或壓力時，通常會如何處理？ (應對方式/情緒)",
        options: [
            { text: "嚴格分析問題，制定步驟，要求自己立即解決。", score: { germanShepherd: 3, borderCollie: 3 } },
            { text: "找最親近的人撒嬌或討拍，希望能獲得安慰。", score: { chihuahua: 3, poodle: 3 } },
            { text: "轉移注意力，去戶外跑一圈或做一些體力活。", score: { goldenRetriever: 3, husky: 3 } },
            { text: "生悶氣，不想跟任何人說話，等自己冷靜。", score: { shibaInu: 3 } },
            { text: "吃東西，用食物或睡覺來緩解焦慮。", score: { pug: 3 } },
        ]
    },
    {
        title: "Q5: 關於「個人空間」，你的態度是？ (親密關係/獨立性)",
        options: [
            { text: "無時無刻都想和親近的人黏在一起。", score: { goldenRetriever: 3, poodle: 3 } },
            { text: "我需要大量的獨處時間，不喜歡別人干涉我的事情。", score: { shibaInu: 3, husky: 3 } },
            { text: "雖然喜歡親近，但如果我覺得被侵犯了，我會立刻表示不滿。", score: { chihuahua: 3 } },
            { text: "我不介意被人打擾，但前提是要一起做點有意義的事。", score: { borderCollie: 3, germanShepherd: 3 } },
            { text: "只要在我身邊的人不吵到我睡覺，其他都無所謂。", score: { pug: 3 } },
        ]
    },
    {
        title: "Q6: 你的「保護慾」主要體現在？ (忠誠度/責任感)",
        options: [
            { text: "對於我在乎的人或東西，我會展現出極強的警惕和防禦性。", score: { germanShepherd: 3, chihuahua: 3 } },
            { text: "我會用我的愛和溫柔去陪伴和支持我愛的人。", score: { goldenRetriever: 3, poodle: 3 } },
            { text: "我只保護我自己，別人對我的看法不重要。", score: { shibaInu: 3 } },
            { text: "我會保護我的「地盤」和「規則」，不允許混亂。", score: { borderCollie: 3 } },
            { text: "什麼保護慾？我只負責可愛和被保護。", score: { pug: 3, husky: 2 } },
        ]
    },
    {
        title: "Q7: 你對待「新奇事物」或「新環境」的反應是？ (敏銳度/好奇心)",
        options: [
            { text: "立刻衝過去探索，越刺激越好。", score: { husky: 3 } },
            { text: "先保持距離，仔細觀察細節後再決定是否靠近。", score: { shibaInu: 3, germanShepherd: 3 } },
            { text: "感到緊張，可能會發出抱怨或不安的聲音。", score: { chihuahua: 3 } },
            { text: "充滿好奇，但必須有人引導或帶領我。", score: { goldenRetriever: 3, poodle: 3 } },
            { text: "只要不影響我現有的舒適狀態，我根本不會注意到。", score: { pug: 3 } },
        ]
    },
    {
        title: "Q8: 如果你被困在一棟房子裡，你會選擇如何離開？ (解決問題/行動力)",
        options: [
            { text: "測試所有門窗鎖，然後嘗試拆解最薄弱的環節。", score: { borderCollie: 3, germanShepherd: 3 } },
            { text: "發出巨大的聲音或戲劇化的行為，吸引別人來救我。", score: { husky: 3 } },
            { text: "找到一個舒服的地方坐下來等別人來，因為我知道我值得被救。", score: { shibaInu: 3, pug: 3 } },
            { text: "哭泣或抱怨，直到有人被我的聲音引來為止。", score: { chihuahua: 3, poodle: 3 } },
            { text: "試圖用蠻力撞開門，直到精疲力盡。", score: { goldenRetriever: 3 } },
        ]
    }
];

// 3. 結果描述 (請記得為每個犬種找到一張合適的圖片)
const results = {
    borderCollie: { name: "邊境牧羊犬 (Border Collie)", desc: "你極度聰明、專注且精力充沛。你的人生需要目標和挑戰，是天生的優等生和工作狂。如果沒有任務給你，你可能會感到無聊而做出一些『拆家』的行為。", img: "images/bordercollie.jpg" },
    goldenRetriever: { name: "黃金獵犬 (Golden Retriever)", desc: "你友善、忠誠、樂觀且極度熱愛社交。你是朋友間的陽光，隨時準備好給予擁抱。你溫和且易於訓練，但唯一的弱點可能是對食物的熱愛。", img: "images/goldenretriever.jpg" },
    shibaInu: { name: "柴犬 (Shiba Inu)", desc: "你高傲、固執且極度獨立。你很有自己的想法，不喜歡被人強迫。你雖然深情，但只會用自己的方式表達，是典型的『愛面子』專家。", img: "images/shibainu.jpg" },
    chihuahua: { name: "吉娃娃 (Chihuahua)", desc: "你性情敏感多變，有時暴躁，但面對你在乎的人會展現出強烈的保護慾。你外表小巧，但內心卻是個勇敢的戰士，並且非常愛撒嬌。", img: "images/chihuahua.jpg" },
    poodle: { name: "貴賓犬 (Poodle)", desc: "你優雅、聰明且極度社交。你喜歡被關注、被讚美，並擁有細膩的感情。你的高智商讓你學得很快，但偶爾會有點愛吃醋。", img: "images/poodle.jpg" },
    husky: { name: "哈士奇 (Siberian Husky)", desc: "你戲劇化、愛說話，並充滿了不受拘束的獨立精神。你充滿好奇心和精力，有時顯得有點笨拙，但總能給周遭帶來歡樂和混亂。", img: "images/husky.jpg" },
    pug: { name: "巴哥犬 (Pug)", desc: "你是天生的喜劇演員，性格懶散、貪吃且非常幽默。你最喜歡的事情是睡覺和陪伴主人。你對運動興趣不大，但卻是最佳的沙發伴侶。", img: "images/pug.jpg" },
    germanShepherd: { name: "德國牧羊犬 (German Shepherd)", desc: "你忠誠、嚴謹、專注且擁有強烈的保護慾。你是天生的領導者和守護者，重視秩序和規矩。你對待任務嚴肅，很少有幽默的一面。", img: "images/germanshepherd.jpg" },
};

// ----------------------------------------------------
// II. 流程控制 (變數與事件監聽)
// ----------------------------------------------------

let currentQuestionIndex = 0; // 當前題目索引

// 獲取 DOM 元素
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const currentQDisplay = document.getElementById('current-q');

// --- 事件監聽 ---

// 1. 開始測驗
startButton.addEventListener('click', () => {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion(currentQuestionIndex);
});

// 2. 重新測驗
restartButton.addEventListener('click', () => {
    // 重置所有變數和分數
    currentQuestionIndex = 0;
    for (const dog in scores) {
        scores[dog] = 0;
    }
    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
});

// --- 主要函數 ---

/**
 * 載入並顯示當前題目。
 * @param {number} index - 問題在 questions 陣列中的索引。
 */
function loadQuestion(index) {
    if (index >= questions.length) {
        // 題目結束，顯示結果
        showResult();
        return;
    }

    const currentQuestion = questions[index];
    
    // 更新標題和進度條
    questionTitle.textContent = currentQuestion.title;
    currentQDisplay.textContent = index + 1;
    optionsContainer.innerHTML = ''; // 清空舊選項

    // 創建選項卡
    currentQuestion.options.forEach(option => {
        const optionCard = document.createElement('div');
        optionCard.classList.add('option-card');
        optionCard.textContent = option.text;
        
        // 為選項卡添加點擊事件
        optionCard.addEventListener('click', () => {
            handleAnswer(option.score);
        });

        optionsContainer.appendChild(optionCard);
    });
}

/**
 * 處理使用者選擇的答案，更新分數，並載入下一題。
 * @param {object} scoreData - 包含分數增量的物件。
 */
function handleAnswer(scoreData) {
    // 根據答案更新分數
    for (const dog in scoreData) {
        // 確保分數存在且是數字
        if (scores.hasOwnProperty(dog) && typeof scoreData[dog] === 'number') {
             scores[dog] += scoreData[dog];
        }
    }

    // 進入下一題
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}

/**
 * 計算總分並顯示最終結果。
 */
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // 找出分數最高的犬種
    let maxScore = -1;
    let tiedDogs = []; // 用來儲存所有分數最高的犬種

    for (const dog in scores) {
        if (scores[dog] > maxScore) {
            maxScore = scores[dog];
            tiedDogs = [dog]; // 發現更高分數，清空舊名單
        } else if (scores[dog] === maxScore && maxScore > 0) {
            tiedDogs.push(dog); // 分數一樣高，加入名單
        }
    }
    
    let resultDogKey = '';

    if (tiedDogs.length > 0) {
        // 如果有平手，隨機選擇其中一個
        const randomIndex = Math.floor(Math.random() * tiedDogs.length);
        resultDogKey = tiedDogs[randomIndex];
    } else {
        // 應急處理：如果分數全為零 (理論上不會發生)
        resultDogKey = 'goldenRetriever'; 
    }
    
    const finalResult = results[resultDogKey];

    // 顯示結果
    document.getElementById('result-dog-name').textContent = finalResult.name;
    document.getElementById('result-dog-desc').textContent = finalResult.desc;
    
    // 設置圖片路徑
    document.getElementById('result-dog-img').src = finalResult.img; 
}
