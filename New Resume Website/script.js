// ================= FADE-IN SECTIONS =================
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade').forEach(el => fadeObserver.observe(el));

// ================= SKILL BARS ANIMATION =================
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.dataset.width; // get width from HTML data-width
            fill.style.width = width; // animate fill
            skillObserver.unobserve(fill); // animate only once
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ================= HERO FADE-IN ON LOAD =================
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('show');
});

// ================= NAVBAR SHRINK ON SCROLL =================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// 3D card mouse move effect
document.querySelectorAll('.card').forEach(card => {
    const inner = card.querySelector('.card-inner') || card;
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x pos inside card
        const y = e.clientY - rect.top;  // y pos inside card
        const cx = rect.width/2;
        const cy = rect.height/2;

        const dx = (x - cx)/cx;
        const dy = (y - cy)/cy;

        inner.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg) scale(1.05)`;
    });
    card.addEventListener('mouseleave', () => {
        inner.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
});

// Flip card on click
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// ================= GALLERY PRO VERSION =================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Load saved likes
const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];

document.querySelectorAll('.gallery-item').forEach((item, index) => {
    const img = item.querySelector('img');

    // Restore liked state
    if (likedImages.includes(index)) {
        item.classList.add('liked');
    }

    // CLICK IMAGE → OPEN LIGHTBOX
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        lightbox.classList.add('active');
        lightboxImg.src = img.src;

        // animation
        lightboxImg.classList.remove('lightbox-img-animate');
        void lightboxImg.offsetWidth;
        lightboxImg.classList.add('lightbox-img-animate');
    });

    // SINGLE CLICK → LIKE
    item.addEventListener('click', () => {
        toggleLike(item, index);
    });

    // DOUBLE CLICK → LIKE + HEART BURST
    item.addEventListener('dblclick', (e) => {
        toggleLike(item, index);
        createHeart(e, item);
    });
});

// LIKE FUNCTION
function toggleLike(item, index) {
    item.classList.toggle('liked');

    if (item.classList.contains('liked')) {
        if (!likedImages.includes(index)) likedImages.push(index);
    } else {
        const i = likedImages.indexOf(index);
        if (i > -1) likedImages.splice(i, 1);
    }

    localStorage.setItem('likedImages', JSON.stringify(likedImages));
}

// HEART BURST EFFECT
function createHeart(e, item) {
    const heart = document.createElement('span');
    heart.classList.add('heart-burst');
    heart.innerHTML = "❤";

    const rect = item.getBoundingClientRect();
    heart.style.left = (e.clientX - rect.left) + "px";
    heart.style.top = (e.clientY - rect.top) + "px";

    item.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}

// CLOSE BUTTON
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// CLICK OUTSIDE IMAGE
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});

// ================= HTML EXAMPLES =================
const examples = {
    1: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 200px;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="calculator">
        <input type="text" id="num1" placeholder="First number">
        <input type="text" id="num2" placeholder="Second number">
        <button onclick="add()">Add</button>
        <input type="text" id="result" placeholder="Result" readonly>
    </div>

    <script
>
     function add() {
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);
            document.getElementById("result").value = n1 + n2;
        }
</script>
</body>

</html>
`,

    2: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .alcohol {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 95%;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = "alcohol">
        <input type=" text" id="age" placeholder="Age">
        <button onclick="checkAlcohol()">Check Alcohol Eligibility</button>
    </div>
    <script>
        function checkAlcohol() {
                let age = Number(document.getElementById("age").value);
                if (age >= 18) {
                    alert("You are eligible to purchase alcohol.");
                } else {
                    alert("You are not eligible to purchase alcohol.");
                }
            }
        
    </script>
</body>
</html></div>

`,

    3: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlertWindow</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #070000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .HelloWorld {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = HelloWorld>
       <button onclick="alert('Ganda jaypi')">Click Me!</button> 
    </div>
       
</body>
</html>


`,

    4: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .birthday {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 95%;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = "birthday">
        <input type=" text" id="name" placeholder="Name">
        <button onclick="Birthday()">Let see!</button>
    </div>
    <script>
      function Birthday(){
        let name = document.getElementById("name").value;
        alert("Happy Birthday " + name + "! Wishing you a wonderful year ahead.");
      }
        
    </script>
</body>
</html></div>

`,

    5: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .currentdate {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
        </style>
</head>
<body>
    <div class="currentdate">
        <button onclick="showDate()">Show Current Date</button>
    </div>
    <script>
        function showDate() {
            let currentDate = new Date();
            alert("Today is: " + currentDate.toDateString());
        }
    </script>
</body>
</html>`,

    6: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 200px;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="calculator">
        <input type="text" id="num1" placeholder="First number">
        <input type="text" id="num2" placeholder="Second number">
        <button onclick="div()">Div</button>
        <input type="text" id="result" placeholder="Result" readonly>
    </div>

    <script
>
     function div() {
    
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);
            if (n2 === 0) {
                document.getElementById("result").value = "Error";
                return;
            }
            else
            {
            document.getElementById("result").value = n1 / n2;
        }
    }
</script>
</body>

</html>


`,

    7: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #070000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .HelloWorld {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = HelloWorld>
       <button onclick="alert('Hello, World!')">Click Me!</button> 
    </div>
       
</body>
</html>
`,

    8: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .ifelse {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 95%;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = "ifelse">
        <input type=" text" id="name" placeholder="Name">
        <button onclick="RUN()">RUN</button>
    </div>
    <script>
      function RUN(){
        let name = document.getElementById("name").value;
        if(name === "Joshua"){
            alert("Hello Joshua! Welcome back!");
        } else {
            alert("Hello " + name + "! Nice to meet you!");
        }
       
    }
    </script>
</body>
</html></div>
`,

    9: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div class = "img">
        <button onclick="sad()">Sad face</button>
        <button onclick="happy()">Happy face</button>
        <script>
            function sad() {
                document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUl-5vHCj28yOLm2VXJk_Z8K4EFNWFEtVZw&s')";
                document.body.style.backgroundSize = "cover";
            }
            function happy() {
                document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnt3YMTCH0l9Lau3-MmSQq61jmuFbBlx8tDQ&s')";
                document.body.style.backgroundSize = "cover";
            }
        </script>   
     </div>
</body>
</html>

`,

    10: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
var sec = 60;
var min = 60;
var hr = 24;

    </script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
        </style>

</head>
<body>
    <h1>JavaScript Calculations</h1>
    <script type = "text/javascript">
        document.write("Seconds in a minute: " + sec + "<br>");
        document.write("Seconds in an hour: " + sec * min + "<br>");
        document.write("Seconds in a day: " + sec * min * hr + "<br>");
    </script>
</body>
</html>

`,

    11: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 200px;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="calculator">
        <input type="text" id="num1" placeholder="First number">
        <input type="text" id="num2" placeholder="Second number">
        <button onclick="mul()">Mul</button>
        <input type="text" id="result" placeholder="Result" readonly>
    </div>

    <script
>
     function mul() {
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);
            document.getElementById("result").value = n1 * n2;
        }
</script>
</body>

</html>`,

    12: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .name {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 95%;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = "name">
        <input type=" text" id="name" placeholder="Name">
        <button onclick="RUN()">RUN</button>
    </div>
    <script>
      function RUN(){
        let name = document.getElementById("name").value;
        
            alert("Hello " + name + "! Nice to meet you!");
        
       
    }
    </script>
</body>
</html></div>



`,

    13: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .name {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 95%;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class = "name">
        <input type=" text" id="name" placeholder="Name">
        <button onclick="RUN()">RUN</button>
    </div>
    <script>
      function RUN(){
        let name = document.getElementById("name").value;
        
            alert("Your name is " + name );
        
       
    }
    </script>
</body>
</html></div>
`,

    14: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        input {
            width: 200px;
            padding: 8px;
            margin: 5px 0;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="calculator">
        <input type="text" id="num1" placeholder="First number">
        <input type="text" id="num2" placeholder="Second number">
        <button onclick="sub()">Sub</button>
        <input type="text" id="result" placeholder="Result" readonly>
    </div>

    <script
>
     function sub() {
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);
            document.getElementById("result").value = n1 - n2;
        }
</script>
</body>

</html>`,

    15: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
        .timer {
            background: white;
            padding: 50px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input[type="text"] {
            width: 95%;
            padding: 8px;
            font-size: 16px;
            margin-bottom: 10px;
            text-align: center;
        }
        button {
            width: 100%;
            padding: 8px;
            font-size: 16px;
            cursor: pointer;
        }
        </style>
</head>
<body>
    <div class = "timer">
        <input type="text" id="timer" readonly value="">
        <button onclick="startTimer()">Start Timer</button>
    </div>
    <script>
        var timeLeft = 60;
        var timerId;

        function startTimer() {
            timerId = setInterval(countdown, 1000);
        }

        function countdown() {
            if (timeLeft == 0) {
                clearInterval(timerId);
                alert("Time's up!");
            } else {
                document.getElementById("timer").value = timeLeft;
                timeLeft--;
            }
        }
    </script>
</body>
</html>
`
};

// Load example
function loadExample(num) {
    const code = examples[num];

    document.getElementById("exampleCode").textContent = code;

    document.getElementById("previewFrame").srcdoc = code;
}

// Copy code
function copyCode() {
    const code = document.getElementById("exampleCode").textContent;
    navigator.clipboard.writeText(code);
    alert("Code copied!");
}

// Auto load first example
window.addEventListener("load", () => {
    loadExample(1);
});