var b=document.querySelector(".top");

const a=["Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub",
    "Stay home and self-isolate from others in the household if you feel unwell",
    "Don't touch your eyes, nose, or mouth if your hands are not clean",
    "If you have fever, cough and difficulty breathing, seek medical care early",
    "Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze "
]

var i=0;
setInterval(() => {
    if(i>=a.length){
        i=0;
    }
    b.innerText=a[i++];
    
},2000);
