
 src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js";
 src="https://www.gstatic.com/firebasejs/7.18.0/firebase-analytics.js";


  var firebaseConfig = {
    apiKey: "AIzaSyDzvO30F2w9CCj0scCCMHdE_W7TkHdBo88",
    authDomain: "database-8538d.firebaseapp.com",
    databaseURL: "https://database-8538d.firebaseio.com",
    projectId: "database-8538d",
    storageBucket: "database-8538d.appspot.com",
    messagingSenderId: "32389034873",
    appId: "1:32389034873:web:a3c363231bca650a7275a8",
    measurementId: "G-HLV0GL2NET"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function writedata(){
      firebase.database().ref("user").set({
             name:document.getElementById("namefield").value,
         
          email:document.getElementById("emailfield").value,
          number:document.getElementById("numberfield").value,
        price: document.getElementById("pricefield").value,
             password:document.getElementById("passwordfield").value,
             buy:document.getElementById("buyfield").value,
        comment:document.getElementById("commentfield").value,
         lname:document.getElementById("lnmamefield").value,
         
         seller:document.getElementById("sellerfield").value,
        crop:document.getElementById("cropfield").value,
        quantity:document.getElementById("quantityfield").value,
          
      });
      {
      const dbRefObject = firebase.database().ref("user").child('namefield');
    //   const dbRefObject= firebase.database().ref("user").child('emailfield');
    //   const dbRefObject= firebase.database().ref("user").child('numberfield');
    //   const dbRefObject= firebase.database().ref("user").child('pricefield');
    //   const dbRefObject= firebase.database().ref("user").child('cropfield');
    //   const dbRefObject= firebase.database().ref("user").child('passwordield');
    //   const dbRefObject= firebase.database().ref("user").child('buyerfield');
    //   const dbRefObject= firebase.database().ref("user").child('sellerfield');
    //   const dbRefObject= firebase.database().ref("user").child('lnamefield');
    //   const dbRefObject= firebase.database().ref("user").child('quantityfield');
    //   };

  };
dbRefObject.on('value',snap =>{
    console.log(snap.val());
    preObject.innertext=JSON.stringify(snap.val(),null,100);
},function(error){
    console.error(error);
});