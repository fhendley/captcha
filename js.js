// selects random words from list to present as the captcha
// var[] image;
// for(int i=6;i<9;i++){
//   image[i] = "images/sb" + i + ".PNG";
// }
//
// console.log('image);


// function captcha() {

var random_images_array = ["prosthetics.PNG", "beast.PNG", "medical.PNG", "orthotist.PNG", "physiotherapy.PNG", "paediatric.PNG" ];
var word;
function captcha(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = (path + imgAr[ num ]);
    // var imgStr = '<img src="' + path + img + '>';
    // name = imgStr.getAttribute('alt');
    // document.write(imgStr); document.close();
    // console.log(imgAR)
    document.getElementById("contactForm").src = img;
    // console.log(imgStr);
    // console.log(img);
    word = img.slice (7, -4);
    console.log(word);




  //   words = ['PROSTHETICS', 'BEAST', 'ORTHOTIST', 'MEDICAL', 'PHYSICOTHERAPY', 'PAEDIATRIC', 'PROTHETIST' ];
  //  randomWord = words[Math.floor(Math.random()*words.length)];
  // document.getElementById("contactForm").innerHTML = randomWord;

};



// Creates validation rules for form
function validate()
{
var local = word;

    if((form.name.value == "") || (form.email.value == "") || (form.phone.value == "") || (form.mes.value == "") || (form.captcha.value == ""))
    {
        alert("Please fill in all fields");
        return false;
    }
    else if(form.captcha.value !== word)
    {

        alert("Please enter the correct Captcha code");
        return false;
    }
    else
    {
      alert("Submitted");
        return true;
    }
};








//
//   randomWord = image[Math.floor(Math.random()*image.length)];
//   console.log(randomWord);

//
//
// console.log(randomWord);
// };
