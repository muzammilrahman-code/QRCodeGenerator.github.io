let  imageBox = document.getElementById("imageBox");
let  qrText = document.getElementById("qrText");
let  qrImage = document.getElementById("qrImage");

function generateQR(){
    if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imageBox.classList.add("show-img");
    qrText.value = "";
 }
else{
    qrText.classList.add("error");
    imageBox.classList.remove("show-img");
 // imageBox.style.border.display = "none";

    setTimeout(() => {
        qrText.classList.remove("error");
        },1000);
      }
  }
