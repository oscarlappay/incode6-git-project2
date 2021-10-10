const contactForm = document.querySelector("#contact-form")
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const telephone = document.querySelector("#telephone") 


const popup = document.querySelector(".popup")
const body = document.querySelector("body")
const popupOverlay = document.querySelector(".popup-overlay")
const closeButton = document.querySelector(".f1button")

//regex
const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const fnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'\.]+$/
const lnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'\.]+$/
//can do telephone and mobile phone numbers,can accept space,dash,parenthesis 
const tphoneRegex = /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/
const messageRegex = /^[^<>]+$/

contactForm.setAttribute("novalidate",true)
contactForm.addEventListener("submit", validateForm)
closeButton.addEventListener("click", closePopup)


function validateForm(e){
    e.preventDefault()
    if(isValid(fname,fnameRegex) && isValid(lname,lnameRegex) && isValid(email,emailRegex) && isValid(message,messageRegex) && isValid(telephone,tphoneRegex)){
        openPopup()
       
    }else if (isValid(fname,fnameRegex)==false || fname.value == ""){
       alert("Please enter a valid First Name")
       fname.value=""
       fname.focus()
    }else if (isValid(lname,lnameRegex)==false || lname.value == ""){
      alert("Please enter a valid Last Name")
      lname.value=""
    } else if (isValid(telephone,tphoneRegex)==false || telephone.value == ""){
      alert("Please enter a valid Mobile Phone Number")
      telephone.value=""
    } else if (isValid(email,emailRegex)==false || email.value == ""){
      alert("Please enter a valid Email")
      email.value=""
    }else if (isValid(message,messageRegex)==false || message.value == ""){
      alert("Please enter a valid Message")
      message.value=""
    }

}

//valiation
function isValid(element, regex){
    return regex.test(element.value)
}


function openPopup() {
  popup.classList.add("active")
  body.classList.add("popup-open")
  popupOverlay.classList.add("active")
}

function closePopup() {
  contactForm.reset()
  popup.classList.remove("active")
  body.classList.remove("popup-open")
  popupOverlay.classList.remove("active")
}