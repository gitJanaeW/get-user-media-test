// const video = document.getElementById("video");

// function startUp(){
//     navigator.mediaDevices.getUserMedia({
//         audio: false,
//         video: true
//     }).then(stream =>{
//         video.srcObject = stream;
//     }).catch(console.error);
// }

// window.addEventListener("load", startUp, false);

// const imgInput = document.querySelector("#img-input");
//  var uploadedImg = "";

//  imgInput.addEventListener("change", function(){
//     const FileReader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploadedImg = reader.result;
//         console.log(uploadedImg)
//         document.querySelector("#display-img").style.backgroundImage = "url(" + uploadedImg + ")"; // This line isn't working
//     });
//     reader.readAsDataURL(this.files[0]);

//  })

var uploadedImg = undefined;

window.addEventListener("load", function(){
    // check if images are uploaded

    this.document.querySelector("input[type='file']").addEventListener("change", function(){
        if(this.files && this.files[0]){    
            var img = document.getElementById("myImg");

            img.src = URL.createObjectURL(this.files[0]);

            uploadedImg = img.src;

            img.onload = imageIsLoaded;
        }
    });
});

function imageIsLoaded(e){ console.log("Showing: ", e); }