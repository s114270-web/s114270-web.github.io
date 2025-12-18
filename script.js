// =========================================
// 1. 初始化 15 種狗狗的計分器
// =========================================
const scores = {
    borderCollie: 0, goldenRetriever: 0, shibaInu: 0, chihuahua: 0,
    poodle: 0, husky: 0, pug: 0, germanShepherd: 0,
    corgi: 0, beagle: 0, samoyed: 0, doberman: 0,
    pomeranian: 0, dachshund: 0, labrador: 0
};

// =========================================
// 2. 15 個生活化問題 (完整計分版)
// =========================================
const questions = [
    { title: "Q1: 難得的假日，你通常會怎麼安排？", options: [
        { text: "去戶外大出汗，挑戰體能極限", score: { borderCollie: 3, husky: 3, doberman: 2, labrador: 2 } },
        { text: "與好友聚餐，聊上一整天", score: { goldenRetriever: 3, samoyed: 3, labrador: 2, corgi: 2 } },
        { text: "獨自在家研究感興趣的新技能", score: { shibaInu: 3, germanShepherd: 3, dachshund: 2, borderCollie: 2 } },
        { text: "在床上躺到天荒地老，外送解決", score: { pug: 3, corgi: 2, chihuahua: 2 } },
        { text: "精緻打扮後去逛街或看展覽", score: { poodle: 3, pomeranian: 3, samoyed: 2 } }
    ]},
    { title: "Q2: 遇到突發狀況（如電腦突然當機）你的反應是？", options: [
        { text: "冷靜分析原因，嘗試各種修復方法", score: { germanShepherd: 3, borderCollie: 3, doberman: 3, poodle: 2 } },
        { text: "尖叫或碎唸，表達不滿後找人求救", score: { husky: 3, chihuahua: 3, pomeranian: 3, samoyed: 2 } },
        { text: "嘆口氣，先去吃點東西冷靜一下", score: { pug: 3, beagle: 3, labrador: 3, corgi: 2 } },
        { text: "雖然焦慮，但會禮貌地請教懂的人", score: { goldenRetriever: 3, samoyed: 2, labrador: 2 } },
        { text: "覺得很煩，乾脆放棄去做別的事", score: { shibaInu: 3, dachshund: 3, husky: 2 } }
    ]},
    { title: "Q3: 在團隊合作中，你比較偏向？", options: [
        { text: "默默做事，把自己的份內事做到完美", score: { shibaInu: 3, dachshund: 3, germanShepherd: 2 } },
        { text: "帶領大家，分配任務並確保效率", score: { germanShepherd: 3, doberman: 3, borderCollie: 3 } },
        { text: "負責緩和氣氛，讓大家開心地工作", score: { samoyed: 3, goldenRetriever: 3, labrador: 3, corgi: 2 } },
        { text: "提供各種古靈精怪的點子", score: { poodle: 3, beagle: 3, corgi: 2, husky: 2 } },
        { text: "主要是跟隨，只要環境舒服就好", score: { pug: 3, chihuahua: 2, pomeranian: 2 } }
    ]},
    { title: "Q4: 關於吃，你的態度是？", options: [
        { text: "只要好吃，不管熱量，吃到撐為止", score: { labrador: 3, beagle: 3, pug: 3, goldenRetriever: 2 } },
        { text: "精緻美食，擺盤美不美很重要", score: { poodle: 3, pomeranian: 3, doberman: 2 } },
        { text: "補充能量就好，講求快速有效率", score: { borderCollie: 3, germanShepherd: 2, doberman: 2 } },
        { text: "喜歡跟人分享，大家一起吃更好吃", score: { goldenRetriever: 3, samoyed: 3, corgi: 2 } },
        { text: "對食物很挑剔，只吃自己愛的那幾種", score: { shibaInu: 3, chihuahua: 3, dachshund: 3 } }
    ]},
    { title: "Q5: 當你進入一個全新的社交場合時？", options: [
        { text: "立刻主動跟所有人打招呼", score: { samoyed: 3, labrador: 3, goldenRetriever: 3, beagle: 2 } },
        { text: "先觀察環境，確定安全再行動", score: { germanShepherd: 3, doberman: 3, shibaInu: 3, dachshund: 2 } },
        { text: "找個角落待著，等別人來找我", score: { pug: 3, corgi: 3, chihuahua: 2 } },
        { text: "成為目光焦點，展示自己最好的一面", score: { poodle: 3, husky: 3, pomeranian: 3 } },
        { text: "觀察有沒有好吃的或是好玩的", score: { beagle: 3, dachshund: 2, labrador: 2 } }
    ]},
    { title: "Q6: 你的房間通常看起來像什麼樣子？", options: [
        { text: "極致整潔，所有東西都有固定的位置", score: { germanShepherd: 3, doberman: 3, poodle: 2 } },
        { text: "亂中有序，只有我自己找得到東西", score: { shibaInu: 3, dachshund: 3, borderCollie: 2 } },
        { text: "像被炸彈炸過，但我完全不在乎", score: { husky: 3, beagle: 3, pug: 2 } },
        { text: "溫馨舒適，有很多抱枕和裝飾", score: { goldenRetriever: 3, samoyed: 3, pomeranian: 2 } },
        { text: "普通，雖然想整理但總是明天再說", score: { corgi: 3, labrador: 3, pug: 2 } }
    ]},
    { title: "Q7: 朋友對你的第一印象通常是？", options: [
        { text: "好專業、好冷靜，有點距離感", score: { doberman: 3, germanShepherd: 3, shibaInu: 2 } },
        { text: "天啊！你也太熱情、太好笑了吧", score: { samoyed: 3, goldenRetriever: 3, husky: 3, labrador: 2 } },
        { text: "非常有氣質，感覺生活過得很精緻", score: { poodle: 3, pomeranian: 3 } },
        { text: "小小一隻，但感覺很有主見（氣勢強）", score: { chihuahua: 3, dachshund: 3, pomeranian: 2 } },
        { text: "很溫和，感覺很好欺負（開玩笑地）", score: { pug: 3, corgi: 3, labrador: 2 } }
    ]},
    { title: "Q8: 遇到討厭的人故意挑釁你，你會？", options: [
        { text: "冷靜瞪著他，用眼神和氣場逼退對方", score: { doberman: 3, germanShepherd: 3, shibaInu: 2 } },
        { text: "直接大聲反擊，絕對不吃虧", score: { chihuahua: 3, pomeranian: 3, dachshund: 2 } },
        { text: "尷尬地笑笑，試圖快速逃離現場", score: { pug: 3, goldenRetriever: 2, corgi: 2 } },
        { text: "裝作沒聽到，繼續做自己的事", score: { borderCollie: 3, shibaInu: 2, poodle: 2 } },
        { text: "用幽默的方式化解尷尬", score: { husky: 3, samoyed: 2, labrador: 2 } }
    ]},
    { title: "Q9: 你理想的旅行方式是？", options: [
        { text: "行前做足功課，精確到分秒的行程表", score: { borderCollie: 3, germanShepherd: 3, poodle: 2 } },
        { text: "探索沒去過的祕境，越刺激越好", score: { husky: 3, beagle: 3, doberman: 2 } },
        { text: "住在高級飯店，享受放鬆的服務", score: { poodle: 3, pomeranian: 3, pug: 2 } },
        { text: "走到哪算哪，隨興地感受當地生活", score: { labrador: 3, corgi: 3, goldenRetriever: 2 } },
        { text: "只要跟喜歡的朋友在一起，哪裡都好", score: { samoyed: 3, goldenRetriever: 3, labrador: 2 } }
    ]},
    { title: "Q10: 你睡覺時的習慣通常是？", options: [
        { text: "睡相超差，會滾來滾去甚至踢人", score: { husky: 3, labrador: 3, corgi: 2 } },
        { text: "縮成一小團，佔據床的一角", score: { chihuahua: 3, dachshund: 3, pomeranian: 2 } },
        { text: "規規矩矩地平躺，幾乎不動", score: { germanShepherd: 3, doberman: 3, poodle: 2 } },
        { text: "一定要抱著東西或貼著人睡", score: { goldenRetriever: 3, samoyed: 3, pug: 3 } },
        { text: "隨時隨地都能秒睡，打呼聲還很大", score: { pug: 3, beagle: 3, shibaInu: 2 } }
    ]},
    { title: "Q11: 面對一件全新的高科技產品，你會？", options: [
        { text: "不看說明書，自己摸索出所有功能", score: { borderCollie: 3, poodle: 3, beagle: 2 } },
        { text: "仔細閱讀說明書，按部就班操作", score: { germanShepherd: 3, doberman: 3, dachshund: 2 } },
        { text: "研究它美不美，跟我的穿搭合不合", score: { pomeranian: 3, poodle: 2, samoyed: 2 } },
        { text: "隨便亂按，按壞了再找人修", score: { husky: 3, chihuahua: 2, corgi: 2 } },
        { text: "覺得很酷，想趕快分享給朋友看", score: { labrador: 3, goldenRetriever: 3, samoyed: 2 } }
    ]},
    { title: "Q12: 如果看到路邊有一隻流浪貓，你會？", options: [
        { text: "輕聲細語地靠近，試圖跟牠交朋友", score: { samoyed: 3, goldenRetriever: 3, labrador: 2 } },
        { text: "保持警覺，遠遠觀察牠的一舉一動", score: { shibaInu: 3, germanShepherd: 3, doberman: 2 } },
        { text: "興奮地衝過去想跟牠玩", score: { husky: 3, beagle: 3, corgi: 2 } },
        { text: "想辦法弄點吃的給牠", score: { labrador: 3, pug: 3, goldenRetriever: 2 } },
        { text: "覺得牠很可愛，立刻拿出手機狂拍", score: { poodle: 3, pomeranian: 3, corgi: 2 } }
    ]},
    { title: "Q13: 你的「社交電力」通常可以維持多久？", options: [
        { text: "我是超級電池，可以連玩三天三夜", score: { samoyed: 3, labrador: 3, goldenRetriever: 3, husky: 2 } },
        { text: "大約 3 小時，之後就想回家一個人", score: { shibaInu: 3, dachshund: 3, chihuahua: 2 } },
        { text: "只要有美食和舒服的位子，我可以很久", score: { pug: 3, corgi: 3, beagle: 2 } },
        { text: "看對象，遇到合得來的人就不會累", score: { borderCollie: 3, germanShepherd: 2, doberman: 2 } },
        { text: "我需要適時的讚美來幫我充電", score: { poodle: 3, pomeranian: 3, samoyed: 2 } }
    ]},
    { title: "Q14: 關於穿著，你最在意的是？", options: [
        { text: "功能性，要方便運動和工作", score: { borderCollie: 3, germanShepherd: 3, labrador: 2 } },
        { text: "品牌與質感，這代表了我的身份", score: { doberman: 3, poodle: 3, pomeranian: 2 } },
        { text: "舒適度，軟綿綿的材質最棒了", score: { pug: 3, goldenRetriever: 2, labrador: 2 } },
        { text: "一定要有亮點，讓人一眼就看到我", score: { husky: 3, samoyed: 3, corgi: 2 } },
        { text: "穿自己喜歡的就好，管別人怎麼看", score: { shibaInu: 3, dachshund: 3, chihuahua: 2 } }
    ]},
    { title: "Q15: 你的終極人生目標比較接近？", options: [
        { text: "成為專業領域的頂尖專家", score: { borderCollie: 3, germanShepherd: 3, doberman: 3, poodle: 2 } },
        { text: "環遊世界，體驗各種刺激的生活", score: { husky: 3, beagle: 3, labrador: 2 } },
        { text: "建立溫暖的家庭，身邊都是愛的人", score: { goldenRetriever: 3, samoyed: 3, labrador: 3, corgi: 2 } },
        { text: "過著精緻且受人景仰的生活", score: { poodle: 3, pomeranian: 3, shibaInu: 2 } },
        { text: "平平安安、無憂無慮地吃飽睡好", score: { pug: 3, corgi: 3, dachshund: 2 } }
    ]}
];

// =========================================
// 3. 測驗結果資料庫 (中文檔名對應)
// =========================================
const results = {
    borderCollie: { name: "邊境牧羊犬 (Border Collie)", desc: "你是天生的「優等生」。擁有極高的智商與敏銳的觀察力。你追求目標時充滿動力，但有時會因為給自己太大壓力而感到焦慮。建議偶爾放慢腳步。", img: "images/邊牧.jpg" },
    goldenRetriever: { name: "黃金獵犬 (Golden Retriever)", desc: "你是溫暖的代名詞。在朋友眼中，你是一個完美的傾聽者。你熱愛和平，但也因為太想讓每個人開心，有時會忽略了自己的需求。", img: "images/金毛.jpeg" },
    shibaInu: { name: "柴犬 (Shiba Inu)", desc: "你擁有強烈的自我意識與獨特的美學。你並不孤僻，只是非常挑選能夠進入你內心的人。你是典型的「內冷外熱」。", img: "images/柴犬.png" },
    chihuahua: { name: "吉娃娃 (Chihuahua)", desc: "你外表看似嬌小，但內心卻有一座隨時會爆發的小火山。你對在乎的人極度忠誠且充滿保護慾。你是朋友圈中最勇敢的戰士。", img: "images/吉娃娃.jpg" },
    poodle: { name: "貴賓犬 (Poodle)", desc: "你優雅、精明且充滿好奇心。你學習速度極快，並且非常在意細節與生活品味。你的實力確實配得上這份自信。", img: "images/貴賓.png" },
    husky: { name: "哈士奇 (Siberian Husky)", desc: "你的人生字典裡沒有「無聊」兩個字。你擁有不受拘束的精神與驚人的創造力，總能把平凡的生活過得像一齣喜劇。", img: "images/哈士奇.jpg" },
    pug: { name: "巴哥犬 (Pug)", desc: "你是快樂的現實主義者，認為「吃得好、睡得飽」就是最大的幸福。你幽默感十足，知足心讓你比任何人都活得自在。", img: "images/巴哥.jpg" },
    germanShepherd: { name: "德國牧羊犬 (German Shepherd)", desc: "你擁有極強的責任感與領導潛力。你重視規則與秩序，對待任務嚴謹負責，是身邊人最信賴的守護者。", img: "images/得牧.jpg" },
    corgi: { name: "柯基犬 (Corgi)", desc: "你充滿活力且樂於社交。你熱情大方，對於想做的事情充滿幹勁。你是天生的社交達人，總能吸引眾人的目光。", img: "images/柯基.jpg" },
    beagle: { name: "米格魯 (Beagle)", desc: "你是一個好奇心過剩的探險家。一旦發現感興趣的事物，你就會全身心投入。你那份探索世界的熱情非常有感染力。", img: "images/米格魯.jpg" },
    samoyed: { name: "薩摩耶 (Samoyed)", desc: "你是治癒系的代表，擁有純真且樂觀的性格。你的笑容是最好的武器，總能輕易化解尷尬與衝突。", img: "images/薩摩耶.jpg" },
    doberman: { name: "杜賓犬 (Doberman)", desc: "你擁有精英氣質，極度自律，對生活有嚴格要求。在親近的人面前，你展現出無比的溫柔與忠誠。", img: "images/杜賓.jpg" },
    pomeranian: { name: "博美犬 (Pomeranian)", desc: "你是自信且迷人的小可愛，擁有強大的氣場。你非常清楚自己想要什麼，是絕對不會被忽視的存在。", img: "images/博美.jpg" },
    dachshund: { name: "臘腸犬 (Dachshund)", desc: "你擁有驚人的毅力與韌性。一旦目標確定，不管路有多遠你都會走完。那份「死不認輸」的勇氣是你的特質。", img: "images/臘腸.jpg" },
    labrador: { name: "拉布拉多 (Labrador)", desc: "你是穩定與友善的化身。你做事踏實，不愛出風頭，是讓人感到極度踏實的對象，適應能力驚人。", img: "images/拉不拉多.jpg" },
    
    // 彩蛋
    tingZhen: { 
        name: "隱藏版：黃庭溱", 
        desc: "恭喜！你觸發了 10% 機率的隱藏結局！你抽中的不是狗狗，而是這個測驗的開發者。這代表你是一個極其幸運、具備跳脫框架思考能力的人！", 
        img: "images/黃庭溱.JPG"  // 確保這裡是 .jpg
    }

};

/* --- 從這裡開始替換 (結果區的 }; 之後) --- */

let currentIndex = 0;
let userAnswers = []; // 儲存每一題的答案索引，例如 [0, 2, 1...]

// 取得畫面元素
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-button');
const restartBtn = document.getElementById('restart-result-button');
const floatingRestart = document.getElementById('floating-restart');

// 遊戲初始化/重置功能
const resetGame = () => {
    currentIndex = 0;
    userAnswers = [];
    welcomeScreen.classList.add('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    floatingRestart.classList.add('hidden');
};

// 綁定開始與重頭開始按鈕
startBtn.onclick = () => {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    floatingRestart.classList.remove('hidden');
    loadQ();
};
restartBtn.onclick = resetGame;
floatingRestart.onclick = resetGame;

// 核心功能：載入題目
function loadQ() {
    // 如果題號超過總數，顯示結果
    if (currentIndex >= questions.length) {
        showResult();
        return;
    }

    // --- 【上一題按鈕邏輯區】 ---
    const prevBtn = document.getElementById('prev-button');
    if (prevBtn) {
        // 第一題隱藏，第二題開始顯示
        prevBtn.style.display = (currentIndex === 0) ? "none" : "block";
        
        // 點擊事件：題號減一，重新載入
        prevBtn.onclick = (e) => {
            e.stopPropagation(); // 防止干擾
            if (currentIndex > 0) {
                currentIndex--;
                loadQ();
            }
        };
    }

    // 顯示標題與進度
    const q = questions[currentIndex];
    document.getElementById('question-title').innerText = q.title;
    document.getElementById('current-q').innerText = currentIndex + 1;
    
    // 清空並生成選項
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option-card';
        
        // 【記憶效果】如果這題之前選過，標示出來
        if (userAnswers[currentIndex] === index) {
            div.style.borderColor = "#ff9900";
            div.style.backgroundColor = "#fff3e0";
        }
        
        div.innerText = opt.text;
        
        // 點擊選項：儲存答案並進入下一題
        div.onclick = () => {
            userAnswers[currentIndex] = index; // 記憶答案
            setTimeout(() => {
                currentIndex++;
                loadQ();
            }, 250);
        };
        container.appendChild(div);
    });
}

// 核心功能：計算並顯示結果
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    floatingRestart.classList.add('hidden');

    // 1. 重要：先將所有狗狗分數歸零，重新計算
    for (let dog in scores) scores[dog] = 0;

    // 2. 根據 userAnswers 的紀錄來累加分數 (避免重複加分)
    userAnswers.forEach((ansIdx, qIdx) => {
        const selectedOpt = questions[qIdx].options[ansIdx];
        for (let dog in selectedOpt.score) {
            scores[dog] += selectedOpt.score[dog];
        }
    });

    let resKey = '';
    // 3. 10% 機率觸發庭溱驚喜
    if (Math.random() < 0.1) {
        resKey = 'tingZhen';
    } else {
        // 找出最高分的狗狗
        let maxScore = -1;
        for (let dog in scores) {
            if (scores[dog] > maxScore) {
                maxScore = scores[dog];
                resKey = dog;
            }
        }
    }

    // 4. 渲染結果到畫面
    const finalDog = results[resKey];
    document.getElementById('result-dog-name').innerText = finalDog.name;
    document.getElementById('result-dog-desc').innerText = finalDog.desc;
    document.getElementById('result-dog-img').src = finalDog.img;
}
