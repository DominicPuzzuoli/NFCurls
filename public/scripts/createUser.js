var db = firebase.firestore();
 
function storeData() {
 
    var inputName = googleUser.getBasicProfile().getName()
    var inputEmail = googleUser.getBasicProfile().getEmail()
    var inputID = googleUser.getBasicProfile().getID()

        db.collection("users").doc(inputID).set({
            Name: inputName,
            Email: inputEmail

        })
        .then(function() {
            console.log("Success")
        })
        .catch(function(error) {
            console.error("Error writing doc", error)
        })
}