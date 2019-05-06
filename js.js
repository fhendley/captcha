// selects random words from list to present as the captcha

function captcha() {
  words = ['PROSTHETICS', 'BEAST', 'ORTHOTIST', 'MEDICAL', 'PHYSICOTHERAPY', 'PAEDIATRIC', 'PROTHETIST' ];
 randomWord = words[Math.floor(Math.random()*words.length)];
document.getElementById("contactForm").innerHTML = randomWord;
};


// Creates validation rules for form
function validate()
{
    if((form.name.value == "") || (form.email.value == "") || (form.phone.value == "") || (form.mes.value == "") || (form.captcha.value == ""))
    {
        alert("Please fill all fields");
        return false;
    }
    else if(form.captcha.value !== randomWord)
    {
        alert("Please enter the correct Captcha code");
        return false;
    }
    else
    {
      alert("Submitted");
        return true;
    }
}
