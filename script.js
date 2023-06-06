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
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cooking couple shoot portofilio(1).jpg"
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
    let optionstab = document.getElementById('optionsdiv'); // Accessing the first element in the collection
    optionstab.innerHTML = "";
    for (let i = 0; i < m; i++) {
        let li = document.createElement("li");
        let d = data[seq(m, n, siz, i)];
        const image = document.createElement("img");
        image.src = d.previewImage;
        const text = document.createTextNode(d.title);
        const container = document.createElement("div");
        container.appendChild(image);
        // text.classList.add("optiontext");
        container.appendChild(text);
        li.appendChild(container);
        optionstab.appendChild(li);
    }
    let allLi = document.getElementsByTagName('li');
    addingDesignToOptions();
    // allLi[0].click();
}

let optionclicked=0;

createListElement(1);
liClick(0,1);
linktobuttons();
getittoggled(0);
function liClick(i,n) {
    optionclicked=i;
    let d = data[seq(m, n, siz, i)];
    let img = document.getElementsByClassName('mainpic')
    img[0].src = d.previewImage;

    let imgname = document.getElementById('imgname')
    imgname.innerText = d.title;
    let item=document.getElementsByTagName('li');
    
    getittoggled(i);
}


function addingDesignToOptions() {
    let optionslist=document.getElementsByTagName('li');
    for (let i = 0; i < optionslist.length; i++) {
        const button = optionslist[i];
        button.addEventListener('click', () => {
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


function linktobuttons() {
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < m; i++) {
        li[i].addEventListener('click', function () { liClick(i,n) });
    }
    // liClick(0,n);
}

function newpage(txt) {
    n = txt;
    createListElement(n);
    linktobuttons();
}

let belowbuttons = document.getElementsByClassName("w3-button demo");
for (let i = 0; i < 3; i++) {
    console.log(belowbuttons[i])
    belowbuttons[i].addEventListener('click', function () { newpage(belowbuttons[i].innerText) });
}
belowbuttons[0].click();
let counter = 1;
//value of down buttons
function displaybelowbuttons(counter) {
    for (let i = 0; i < 3; i++) {
        belowbuttons[i].innerText = 3 * (counter - 1) + i + 1;

    }
    n=3*(counter)-1;
    // liClick(1);
    // liClick()
}
function getittoggled(i) {
    let item=document.getElementsByTagName('li');
    item[i].classList.add('active');
    item[i].classList.add('clicked');
}
// action to increase or decrease slider using arrows
function plusDivs(i) {
    if (i == 1 && counter<5) {
        counter++;
    }
    else if(counter==5 && i==1)
    return ;
    else if (counter > 1)
        counter--;
    displaybelowbuttons(counter);
}
// keyboard actions
document.addEventListener('keydown',(e)=>{
    if(e.keyCode==37)
    {
        plusDivs(-1);
    }
    else if(e.keyCode==39)
    plusDivs(1);
    else if(e.keyCode==38)
    liClick(optionclicked-1,n);
    else if(e.keyCode==40)
    liClick(optionclicked+1,n);

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
