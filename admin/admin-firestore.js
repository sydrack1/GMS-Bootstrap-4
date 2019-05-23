// Your web app's Firebase configuration
/*
document.getElementById('files').addEventListener('change', file => {
    firebase.initializeApp({
        apiKey: firebaseConfig.apiKey,
        authDomain: firebaseConfig.authDomain,
        projectId: firebaseConfig.projectId
    });
    var storageRef = firebase.storage().ref();
    var mountainsRef = storageRef.child(file.target.files[0]);

    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
    db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
})*/