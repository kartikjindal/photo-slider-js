const data = [
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cooking couple shoot portofilio(1).jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2021.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-june-2021.key"
    },
]

// export default data;


let m = 4, siz = data.length, n = 1;
function seq(m, n, siz, x) {
    return (m * (n - 1) + x) % siz;
}

function createListElement(n) {
    let optionstab = document.getElementById('optionsdiv');
    optionstab.innerHTML = "";
    for (let i = 0; i < m; i++) {
        let li = document.createElement("li");
        let d = data[seq(m, n, siz, i)];
        const image = document.createElement("img");
        image.src = d.previewImage;
        const text = document.createElement("span");
        text.innerText=d.title;
        // const p=document.createElement
        li.appendChild(image);
        li.appendChild(text);
        // text{
        //     padding=3rem;
        // }
        optionstab.appendChild(li);
    }
    addingDesignToOptions();
    liClick(0, n);
}

let optionclicked = 0, buttonclicked = 0;

// getittoggled(0);

function getittoggled(i) {
    let item = document.getElementsByTagName('li');
    item[i].classList.add('active');
    item[i].classList.add('clicked');
}

function liClick(i, n) {
    optionclicked = i;
    let d = data[seq(m, n, siz, i)];
    let img = document.getElementsByClassName('mainpic')
    img[0].src = d.previewImage;
    // console.log("I am clicked");
    let imgname = document.getElementById('imgname')
    imgname.innerText = d.title;
    // imgname.style.padding=30px
    getittoggled(i);
}


function addingDesignToOptions() {
    let optionslist = document.getElementsByTagName('li');
    for (let i = 0; i < optionslist.length; i++) {
        const button = optionslist[i];
        button.addEventListener('click', () => {
            liClick(i,n);
            for (let j = 0; j < optionslist.length; j++) {
                const btn = optionslist[j];
                if (btn !== button) {
                    btn.classList.remove('active');
                    btn.classList.remove('clicked');
                }
            }
            button.classList.add('active');
            button.classList.add('clicked');
            console.log("Button clicked:", button.innerText);
        });
    }
}

function newpage(txt, i) {
    n = txt;
    buttonclicked = i;
    createListElement(n);
}

let belowbuttons = document.getElementsByClassName("w3-button demo");
for (let i = 0; i < 3; i++) {
    belowbuttons[i].addEventListener('click', function () { newpage(belowbuttons[i].innerText, i) });
}
let counter = 1;
//value of down buttons
function displaybelowbuttons(counter) {
    for (let i = 0; i < 3; i++) {
        belowbuttons[i].innerText = 3 * (counter - 1) + i + 1;

    }
    n = 3 * (counter) - 1;
    belowbuttons[0].click();
    createListElement(n);
}

// action to increase or decrease slider using arrows
function plusDivs(i) {
    // if(i==1 )
    // {
    //     if(buttonclicked<2)
    //     {
    //         buttonclicked++;

    //     }
    //     if(buttonclicked==2 && counter<5)
    //     {
    //         counter++;
    //         displaybelowbuttons(counter);
    //     }
        
    //     else 
    //     {
    //         createListElement(++n);
    //         belowbuttons[buttonclicked].click();
    //     }
    // }
    if (i == 1 && counter < 5) {
        counter++;
    }
    else if (counter == 5 && i == 1)
        return;
    else if (counter > 1)
        counter--;
    displaybelowbuttons(counter);
    
}
// keyboard actions


let keyscroll = (i) => {
    if (i == -1)
    {   if (optionclicked - 1==-1)
        return optionclicked=m-1;
        return optionclicked=optionclicked-1;
    }
    else if (i == 1)
    {   
        if(optionclicked==m-1) 
        return optionclicked= 0;
        return optionclicked=optionclicked+1;
}
}
document.addEventListener('keydown', (e) => {
    let li = document.getElementsByTagName('li');
    if (e.keyCode == 37) {
        plusDivs(-1);
    }
    else if (e.keyCode == 39)
        plusDivs(1);
    else if (e.keyCode == 38) {
        li[keyscroll(-1)].click();
        liClick((optionclicked), n);
    }
    else if (e.keyCode == 40) {
        li[keyscroll(+1)].click();
        liClick(optionclicked, n);
    }
})

//button clicking action
for (let i = 0; i < belowbuttons.length; i++) {
    const button = belowbuttons[i];
    button.addEventListener('click', () => {
        for (let j = 0; j < belowbuttons.length; j++) {
            const btn = belowbuttons[j];
            if (btn !== button) {
                btn.classList.remove('active');
                btn.classList.remove('clicked');
            }
        }
        button.classList.add('active');
        button.classList.add('clicked');
        console.log("Button clicked:", button.innerText);
    });
}
createListElement(1);
// addingDesignToOptions();
belowbuttons[0].click();
