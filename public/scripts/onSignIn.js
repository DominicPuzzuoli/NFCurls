function onSignIn(googleUser)
{
    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","inline-block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#fullName").text(profile.getName())
    
}

function signOut()
{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){

        alert("User has been signed out!");

        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    })
}