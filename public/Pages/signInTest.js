<html><script src="https://apis.google.com/js/platform.js" async defer></script>
<meta name="google-signin-client_id" content="48180444980-7c2qdhtq2eonoc5di07i117cr68vg9d5.apps.googleusercontent.com"/>

<div class="g-signin2" data-onsuccess="onSignIn"></div>
</html>
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }




