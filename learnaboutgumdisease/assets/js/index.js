// Hamburger-menu/Methodology-popup/Form-popup/Leaving-popup overlay hide and show

// Protect BodyScroll function - When overlay comes
var bodyScroll = document.querySelector(".body__scroll");
// Show&BodyScroll class Add/Remove function for Overlay
function addShowClass(overlayName) {
    overlayName.classList.add("show");
    bodyScroll.classList.add("prevent-body__scroll");
}
function removeShowClass(overlayName) {
    overlayName.classList.remove("show");
    bodyScroll.classList.remove("prevent-body__scroll");
}
// On click overlay scallup function
function scallOverlay(overlayName) {
    let overlaysPopup = overlayName.children[0].children[0].children[0].children[0];
    
    if (overlaysPopup == "true") {
        console.log(overlaysPopup);
    }
    overlayName.classList.add("clicked");
    setTimeout(() => {
        overlayName.classList.remove("clicked");
    }, 250);
}

var hamburgerExpandBtn = document.querySelector(".hamburger-expand-btn");
var hamburgerCollapseBtn = document.querySelector(".hamburger-collapse-btn");
var hamburgerOverlay = document.querySelector(".hamburger-overlay");
// Overlay Expand function
hamburgerExpandBtn.addEventListener("click", function () {
    addShowClass(hamburgerOverlay);
});
// Overlay Collapse function
hamburgerCollapseBtn.addEventListener("click", function () {
    removeShowClass(hamburgerOverlay);
});

    
var methodExpandBtn = document.querySelectorAll(".method-expand-btn");
var methodCollapseBtn = document.querySelector(".method-collapse-btn");
var methodOverlay = document.querySelector(".method__overlay");
// Overlay Expand function
for (let overlayLoopNo = 0; overlayLoopNo < methodExpandBtn.length; overlayLoopNo++) {
    methodExpandBtn[overlayLoopNo].addEventListener("click", function () {
        addShowClass(methodOverlay);
    });
}
// Overlay Collapse function
methodCollapseBtn.addEventListener("click", function () {
    removeShowClass(methodOverlay);
});
// On click overlay scallup function
methodOverlay.addEventListener("click", function () {
    scallOverlay(methodOverlay);
});


// Form Overlay Hide/Show
var formExpandBtn = document.querySelectorAll(".form-expand-btn");
var formCollapseBtn = document.querySelector(".form-collapse-btn");
var formOverlay = document.querySelector(".form__overlay");
for (let overlayLoopNo = 0; overlayLoopNo < formExpandBtn.length; overlayLoopNo++) {
    // Form Overlay Show function
    formExpandBtn[overlayLoopNo].addEventListener("click", function () {
        addShowClass(formOverlay);
    });
}
// Form Overlay Hide function
formCollapseBtn.addEventListener("click", function () {
    removeShowClass(formOverlay);
});
// On click overlay scallup function
formOverlay.addEventListener("click", function () {
    scallOverlay(formOverlay);
});
function formAppearance() {
    // Form Overlay Hide/Show
    var formExpandBtn = document.querySelectorAll(".form-expand-btn");
    var formCollapseBtn = document.querySelector(".form-collapse-btn");
    var formOverlay = document.querySelector(".form__overlay");
    for (let overlayLoopNo = 0; overlayLoopNo < formExpandBtn.length; overlayLoopNo++) {
        // Form Overlay Show function
        formExpandBtn[overlayLoopNo].addEventListener("click", function () {
            addShowClass(formOverlay);
        });
    }
    // Form Overlay Hide function
    formCollapseBtn.addEventListener("click", function () {
        removeShowClass(formOverlay);
    });
    // On click overlay scallup function
    formOverlay.addEventListener("click", function () {
        scallOverlay(formOverlay);
    });
}


var leavingExpandBtn = document.querySelectorAll(".leaving-expand-btn");
var leavingCollapseBtn = document.querySelectorAll(".leaving-collapse-btn");
var continueLeavingCta = document.querySelector(".continue-leaving-cta");
var leavingOverlay = document.querySelector(".leaving__overlay");
// Overlay Expand function
for (let overlayLoopNo = 0; overlayLoopNo < leavingExpandBtn.length; overlayLoopNo++) {
    leavingExpandBtn[overlayLoopNo].addEventListener("click", function (event) {
        continueLeavingCta.setAttribute("href", leavingExpandBtn[overlayLoopNo].getAttribute("data-href"));
        addShowClass(leavingOverlay);
    });
}
// Overlay Collapse function
for (let overlayLoopNo = 0; overlayLoopNo < leavingCollapseBtn.length; overlayLoopNo++) {
    leavingCollapseBtn[overlayLoopNo].addEventListener("click", function () {
        removeShowClass(leavingOverlay);
    });
}
continueLeavingCta.addEventListener("click", function () {
    removeShowClass(leavingOverlay);
});
// On click overlay scallup function
leavingOverlay.addEventListener("click", function () {
    scallOverlay(leavingOverlay);
})

// Hamburger-menu/Methodology-popup/Form-popup/Leaving-popup overlay hide and show - Ends


// Quiz JS script
var questionNo = 1;

var quizTab = document.querySelector(".quiz_tab");
var quizBody = document.querySelector(".quiz_body");
var quizOverlay = document.querySelector(".quiz_overlay");
var quizBtn = document.querySelector(".quiz-cta");
var quizText = document.querySelector(".quiz-text")

var qsHeading = quizBody.children[0].children[0];
var quizFooter = quizBtn.parentElement;


var quizContent = {
    two: {
        question: "True or False: Gum disease is caused only by poor oral hygiene.",
        correct: "<b>Correct!</b> You're among only 54% of U.S. adults 30+ who know that gum disease is not caused by poor oral hygiene alone. While poor oral hygiene may cause gum disease, individuals who smoke or have cardiovascular disease or diabetes may be at an increased risk for gum disease.",
        incorrect: "<b>Not quite!</b> You're among the <b>46%</b> of U.S. adults 30+ who believe, or are not sure, if gum disease is only caused by poor oral hygiene. While poor oral hygiene may cause gum disease, individuals who smoke or have cardiovascular disease or diabetes may be at an increased risk for gum disease.",
    },
    three: {
        question: "True or False: Gum disease is curable.",
        correct: "<b>Correct!</b> You're among only <b>9%</b> of U.S. adults 30+ who know that gum disease is not curable. Gum disease is a chronic bacterial infection that requires regular dental visits for monitoring and management. The earliest form of gum disease, gingivitis, is reversible.",
        incorrect: "<b>Not quite!</b> You're among the <b>91%</b> of U.S. adults 30+ who believe, or are not sure, if gum disease is curable. Gum disease is not curable, it is a chronic bacterial infection that requires regular dental visits for monitoring and management. The earliest form of gum disease, gingivitis, is reversible.",
    },
    four: {
        question: "True or False: Gum disease is an active bacterial infection.",
        correct: "<b>Correct!</b> Gum disease is an active bacterial infection; however, nearly half <b>(48%)</b> of U.S. adults do not know this.",
        incorrect: "<b>Not quite!</b> You're among the <b>48%</b> of U.S. adults who do not know that gum disease is an active bacterial infection.",
    },
    five: {
        question: "True or False: The risk of gum disease increases with age.",
        correct: "<b>Correct!</b> Gum disease risk does increase with age. If you're concerned about this, you're not alone, <b>86%</b> of U.S. adults worry about avoiding gum disease.",
        incorrect: "<b>Not quite!</b> Gum disease risk does increase with age. If you're concerned about this, you're not alone, <b>86%</b> of U.S. adults worry about avoiding gum disease.",
    },
    complete: {
        zeroToTwo: {    
            heading: "You got 0-2 questions right. <span>Looks like you might<span> ",
            subhead: "need to brush up on your oral health knowledge.",
            text: "Take a look at our Discussion Guide to see what questions you might want <br>to ask your dentist/hygienist at your next appointment.",
            iconlink: "./assets/img/img-50x50-wow.png",
        },
        threeTofour: {    
            heading: "You got 3-4 questions right.",
            subhead: "Not too bad, but there's room to improve!",
            text: "Take a look at our Discussion Guide to see if there is anything else you may <br>want to ask your dentist/hygienist during your next appointment.",
            iconlink: "./assets/img/img-50x50-excite.png",
        },
        five: {    
            heading: "You got all 5 questions right.",
            subhead: "Very impressive!",
            text: "In case you still have questions- take a look at our Discussion Guide to see what <br>questions you might want to ask your dentist/hygienist at your next appointment.",
            iconlink: "./assets/img/img-50x50-hpy.png",
        },
    },
};

var questionStatus = [];


var numberOfCheckboxs = document.querySelectorAll(".checkbox").length;
var checkboxs = document.querySelectorAll(".checkbox");

for (let i = 0; i < numberOfCheckboxs; i++) {
    
    checkboxs[i].addEventListener("click", function () {

        if (checkboxs[i].checked == false) {

            if (questionNo == 1) {
                if ((checkboxs[0].checked == false) && (checkboxs[1].checked == false) && (checkboxs[2].checked == false) && (checkboxs[3].checked == false) && (checkboxs[4].checked == false) && (checkboxs[5].checked == false)) {
                    quizBtn.classList.remove("next");
                }
            } else {
                if ((checkboxs[6].checked == false) && (checkboxs[7].checked == false)) {
                    quizBtn.classList.remove("next");
                }
            }

        } else {
            quizBtn.classList.add("next");

            // console.log(this);
            // makeAllCboxsFalse ();
            // this.checked;
            if (checkboxs[6].checked == true) {
                checkboxs[7].checked = false;
            } else {
            // if (checkboxs[7].checked == true) {
                checkboxs[6].checked = false;
            }
            // Butto action function call
            // buttonAction ();
        }

    });

}


// function buttonAction () {

    quizBtn.addEventListener("click", function () {

        let state, num;
        var selectOverlay, nextQuestion, completeHeading, completeSubhead, completeIcon, completeText;
        
        if ((checkboxs[0].checked == true) || (checkboxs[1].checked == true) || (checkboxs[2].checked == true) || (checkboxs[3].checked == true) || (checkboxs[4].checked == true) || (checkboxs[5].checked == true) || (checkboxs[6].checked == true) || (checkboxs[7].checked == true)) {

            if (quizBtn.value != "next") {
                quizBtn.innerHTML = "Next Question";
                quizBtn.value = "next";

                switch (questionNo) {
                    case 1:
                        if ((checkboxs[0].checked == true) && (checkboxs[1].checked == true) && (checkboxs[2].checked == false) && (checkboxs[3].checked == true) && (checkboxs[4].checked == true) && (checkboxs[5].checked == false)) {
                            quizBody.classList.add("correct");
                            questionStatus[0] = true;
                        } else {
                            quizBody.classList.add("incorrect");
                            questionStatus[0] = false;
                        }
                        break;
    
                    case 2:
                        if ((checkboxs[6].checked == false) && (checkboxs[7].checked == true)) {
                            quizBody.classList.add("correct");
                            state = "correct";
                            selectOverlay = quizContent.two.correct;
                            questionStatus[1] = true;
                        } else {
                            quizBody.classList.add("incorrect");
                            state = "incorrect";
                            selectOverlay = quizContent.two.incorrect;
                            questionStatus[1] = false;                           
                        }

                        // Show overlay function call
                        num = "two";
                        showOverlay(num, state, selectOverlay);
                        break;

                    case 3:
                        if ((checkboxs[6].checked == false) && (checkboxs[7].checked == true)) {
                            quizBody.classList.add("correct");
                            state = "correct";
                            selectOverlay = quizContent.three.correct;
                            questionStatus[2] = true;
                        } else {
                            quizBody.classList.add("incorrect");
                            state = "incorrect";
                            selectOverlay = quizContent.three.incorrect;
                            questionStatus[2] = false;                           
                        }

                        // Show overlay function call
                        num = "three";
                        showOverlay(num, state, selectOverlay);
                        break;

                    case 4:
                        if ((checkboxs[6].checked == true) && (checkboxs[7].checked == false)) {
                            quizBody.classList.add("correct");
                            state = "correct";
                            selectOverlay = quizContent.four.correct;
                            questionStatus[3] = true;
                        } else {
                            quizBody.classList.add("incorrect");
                            state = "incorrect";
                            selectOverlay = quizContent.four.incorrect;
                            questionStatus[3] = false;                          
                        }

                        // Show overlay function call
                        num = "four";
                        showOverlay(num, state, selectOverlay);
                        break;

                    case 5:
                        if ((checkboxs[6].checked == true) && (checkboxs[7].checked == false)) {
                            quizBody.classList.add("correct");
                            state = "correct";
                            selectOverlay = quizContent.five.correct;
                            questionStatus[4] = true;
                        } else {
                            quizBody.classList.add("incorrect");
                            state = "incorrect";
                            selectOverlay = quizContent.five.incorrect;
                            questionStatus[4] = false;                         
                        }

                        // Show overlay function call
                        num = "five";
                        showOverlay(num, state, selectOverlay);
                        break;
                    
                    default:
                        break;
                }
                
            } else if (quizBtn.value == "next") {

                questionNo += 1;
                switch (questionNo) {
                    case 2:
                        nextQuestion = quizContent.two.question;
                        break;

                    case 3:
                        nextQuestion = quizContent.three.question;
                        break;

                    case 4:
                        nextQuestion = quizContent.four.question;
                        break;

                    case 5:
                        nextQuestion = quizContent.five.question;
                        break;

                    default:
                        break;

                }
                
                quizBody.classList.remove("correct");
                quizBody.classList.remove("incorrect");
                quizBtn.classList.remove("next");

                // Make all checkbox empty function call
                makeAllCboxsFalse ();

                if (questionNo >= 6) {  
                    quizTab.classList.add("complete");
                    quizBody.classList.add("complete");
                    removeQtsNo = questionNo - 1;
                    quizTab.classList.remove("qts-" + removeQtsNo);

                    if ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == true)) {
                        completeHeading = quizContent.complete.five.heading;
                        completeSubhead = quizContent.complete.five.subhead;
                        completeIcon = quizContent.complete.five.iconlink;
                        completeText = quizContent.complete.five.text;
                    } else if (((questionStatus[0] == false) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == false) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == false) && (questionStatus[3] == true) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == false) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == false)) || 
                                ((questionStatus[0] == false) && (questionStatus[1] == false) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == false) && (questionStatus[2] == false) && (questionStatus[3] == true) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == false) && (questionStatus[3] == false) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == false) && (questionStatus[4] == false)) || 
                                ((questionStatus[0] == false) && (questionStatus[1] == true) && (questionStatus[2] == false) && (questionStatus[3] == true) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == false) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == false) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == false) && (questionStatus[1] == true) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == false)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == false) && (questionStatus[2] == true) && (questionStatus[3] == false) && (questionStatus[4] == true)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == false) && (questionStatus[2] == true) && (questionStatus[3] == true) && (questionStatus[4] == false)) || 
                                ((questionStatus[0] == true) && (questionStatus[1] == true) && (questionStatus[2] == false) && (questionStatus[3] == true) && (questionStatus[4] == false))) {
                        completeHeading = quizContent.complete.threeTofour.heading;
                        completeSubhead = quizContent.complete.threeTofour.subhead;
                        completeIcon = quizContent.complete.threeTofour.iconlink;
                        completeText = quizContent.complete.threeTofour.text;
                    } else {
                        completeHeading = quizContent.complete.zeroToTwo.heading;
                        completeSubhead = quizContent.complete.zeroToTwo.subhead;
                        completeIcon = quizContent.complete.zeroToTwo.iconlink;
                        completeText = quizContent.complete.zeroToTwo.text;
                    }

                    quizBody.innerHTML =`<div class="quiz_qts">
                                            <div class="qts complete">
                                                <h2>${completeHeading}</h2>
                                                <p>${completeSubhead}</p>
                                            </div>
                                            <div class="status complete">
                                                <!-- <p class="text">Correct!</p> -->
                                                <img src="${completeIcon}" alt="status icon" class="icon img-fluid">
                                            </div>
                                        </div>
                                        <div class="quiz_opt">
                                            <div class="complete">
                                                <p>${completeText}</p>
                                                <a class="cta form-download form-expand-btn">Download Discussion Guide</a>
                                            </div>
                                        </div>`;

                    quizFooter.classList.add("complete");
                    quizFooter.innerHTML = `<a href="./index.html#quiz" class="quiz-cta complete">Start Over</a>`;
                    // setTimeout(() =>  {
                    //     quizFooter.innerHTML = `<a href="./index.html" class="quiz-cta complete">Start Over</a>`
                    // }, 100);

                    // Form Overlay Hide/Show function call
                    formAppearance();
                } else {
                    qsHeading.innerHTML = `<div class="qts qts-` + questionNo + `">
                                                <h2>Question ` + questionNo + `:</h2>
                                                <p>` + nextQuestion + `</p>
                                            </div>`;
                    quizText.innerHTML = "Showing Question <span>" + questionNo + " of 5</span>";
                    quizBtn.innerHTML = "Submit";
                    quizBtn.value = "empty";

                    addQtsNo = questionNo;
                    quizTab.classList.add("qts-" + addQtsNo);
                    removeQtsNo = questionNo - 1;
                    quizTab.classList.remove("qts-" + removeQtsNo);
                }
                
            } else if (quizBtn.value == "complete") {
                quizBtn.innerHTML = "Start Over";
            }

        }
        
    });
    
// }

// Make all checkbox empty function
function makeAllCboxsFalse () {

    for (let i = 0; i < numberOfCheckboxs; i++) {
        checkboxs[i].checked = false;
    }

}

// Show overlay function
function showOverlay (num, state, selectOverlay) {

    quizOverlay.innerHTML = `<div class="overlay-qts overlay-qts-` + num + ` ` + state + `">
                            <p>` + selectOverlay + `</p>
                        </div>`
}
// Quiz JS script - Ends


// Form Hide/Show and validations
var formCheckbox = document.querySelector("#form-checkbox");
var form = document.querySelector(".functional-form");

formCheckbox.addEventListener("click", function () {
    if (formCheckbox.checked == true) {
        form.classList.add("show");
    } 
    else {
        form.classList.remove("show");
    }
});

// Form validation start form here
// const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const eMail = document.getElementById("email");

// Alphabets Field valitation Prototype
String.prototype.isAlpha = function () {
    return !!this.match(/^[a-zA-Z]*$/);
};
// Email Field valitation Prototype
String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/);
};

// Empty Field valitaion
function checkRequired(inputs) {
    inputs.forEach(inputs => {
        if (inputs.value.trim() === "") {
            emptyField(inputs, `Enter your ${getFieldName(inputs)}.`);
        } else {
            filledField(inputs);
        }
    });
}
function getFieldName(inputs) {
    return inputs.name;
}
function emptyField(inputs, message) {
    const formGroup = inputs.parentElement;
    formGroup.className = "form-group error"
    const errorText = formGroup.querySelector("p");
    errorText.innerHTML = message;
}
function filledField(inputs) {
    checkAlpha(firstName);
    checkAlpha(lastName);
    checkEmail(eMail);
}
// Empty Field valitaion End

// Alphabets Field Valitaion
function checkAlpha(inputs) {
    if (!inputs.value.trim().isAlpha()) {
        emptyField(inputs, `${getFieldName(inputs)} must be Alphabets.`);
    } else {
        textLength(inputs, 1, 20);
    }
}
// Email Field Valitaion
function checkEmail(inputs) {
    if (!inputs.value.trim().isEmail()) {
        emptyField(inputs, `This is not a valid ${getFieldName(inputs)} address.`);
    } else {
        textLength(eMail, 5, 40);
    }
}
// Field text Length Valitation
function textLength(inputs, min, max) {
    const dataLength = inputs.value.trim().length;
    if (dataLength < min) {
        emptyField(inputs, `${getFieldName(inputs)} must be atleast greater then ${min} characters.`);
    } else if (dataLength > max) {
        emptyField(inputs, `${getFieldName(inputs)} must be aleast lesser then ${max} characters.`);
    } else {
        const formGroup = inputs.parentElement;
        formGroup.className = "form-group success"
        const errorText = formGroup.querySelector("p");
        errorText.innerHTML = "";
    }
}

// Valitation functions call submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([firstName, lastName, eMail]);

    // textLength(password, 5, 15);
    // checkConfirmPassword(password, confirmPassword);
    var formGroup = document.querySelectorAll(".form-group");
    var formContainer = document.querySelector(".form__container");

    for (let fieldCount = 0; fieldCount < formGroup.length - 1; fieldCount++) {
        // var formGroupClass = formGroup[fieldCount].getAttribute("class");
        if ((formGroup[0].getAttribute("class") == "form-group success") && (formGroup[1].getAttribute("class") == "form-group success") && (formGroup[2].getAttribute("class") == "form-group success")) {
            formContainer.innerHTML = `<div class="close-btn form-collapse-btn">
                                            <img src="./assets/img/close.png" alt="popup close button">
                                        </div>
                                        <div class="thank-texts">
                                            <h1>Thankyou</h1>
                                            <p>®/™ are trademarks of Bausch Health Companies Inc. or its affiliates. ©2024 Bausch Health Companies Inc. or its affiliates.</p>
                                        </div>`;
        }
    }

    // Form Overlay Hide/Show function call
    formAppearance();
});
// Form validation End for here

// Form Hide/Show and validations
