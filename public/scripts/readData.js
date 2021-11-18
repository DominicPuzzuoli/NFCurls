import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

alert("TEST")
const dbRef = ref(getDatabase());

var ref = firebase.database().ref("users");

ref.on("value", function(snapshot) {
    var childData = snapshot.val();
    var key = Object.keys(childData)[0];    //this will return 1st key.
    console.log(childData[key].id);
});
/*
get(child(dbRef, `users/${testUser}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
*/
