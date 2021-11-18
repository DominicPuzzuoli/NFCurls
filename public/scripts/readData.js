import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

alert("TEST")
const dbRef = ref(getDatabase());
get(child(dbRef, `users/${testUser}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});