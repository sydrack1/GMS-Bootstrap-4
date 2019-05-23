function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = ['<img class="img-thumbnail thumb" src="', e.target.result,
          '" title="', escape(theFile.name), '"/>'].join('');
        document.getElementById('list').insertBefore(span, null);
        // firebase
        function upload() {
          firebase.initializeApp({
            apiKey: "AIzaSyDVrP0WgjwQ1EWHZXXTV64Z7rwsNl_spaQ",
            authDomain: "gms-site.firebaseapp.com",
            databaseURL: "https://gms-site.firebaseio.com",
            projectId: "gms-site",
            storageBucket: "gms-site.appspot.com",
            messagingSenderId: "232688691047",
            appId: "1:232688691047:web:0938fe24584c3903"
          });
          var storageRef = firebase.storage().ref("/images/");
          var mountainsRef = storageRef.child(escape(theFile.name));
          mountainsRef.put(theFile).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
          });
        }
        document.getElementById('button-addon3').addEventListener('click', upload)
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);

  }

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

var textHtml = document.getElementById('html-text');
var dateHtml = document.getElementById('input-date');

//const testDBHome =
document.getElementById('button-addon2').addEventListener('click', () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDVrP0WgjwQ1EWHZXXTV64Z7rwsNl_spaQ",
    authDomain: "gms-site.firebaseapp.com",
    databaseURL: "https://gms-site.firebaseio.com",
    projectId: "gms-site",
    storageBucket: "gms-site.appspot.com",
    messagingSenderId: "232688691047",
    appId: "1:232688691047:web:0938fe24584c3903"
  });
  var db = firebase.firestore();
  db.collection("txt-home").add({
    text: textHtml.value,
    date: dateHtml.value
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});