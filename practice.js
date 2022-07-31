const firebaseConfig = {
    apiKey: "AIzaSyAsqr9AdUho0lowI1D9YcTRgHgNPQ7TklQ",
    authDomain: "kwitter-d57a5.firebaseapp.com",
    databaseURL: "https://kwitter-d57a5-default-rtdb.firebaseio.com",
    projectId: "kwitter-d57a5",
    storageBucket: "kwitter-d57a5.appspot.com",
    messagingSenderId: "353823032",
    appId: "1:353823032:web:85653b4bc4fff6385179cd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

}
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actial_answer)

    {
        update_player1_score = update_player1_score + 1 ;
        document.getElementById("player1_score").innerHTML = update_player1_score;

    }
    else
    {
        update_player2_score +1;
        document.getElementById("player1_score").innerHTML = update_player2_score;
    }
}