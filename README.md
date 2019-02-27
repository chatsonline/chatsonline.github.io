<!DOCTYPE html>
<html lang="no" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>CHATS</title>

    <link rel="shortcut Icon" href="unfinished send logo.png">
    <link rel="stylesheet" href="scroll.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300" rel="stylesheet">
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <header>
      <div class="logo">CHATS</div>
    </header>
    <main>
      <p class="signIn">SIGN INTO CHATS</p>
      <div id="firebaseui-auth-container"></div>

      <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase.js"></script>
      <script>
        // Initialize Firebase
        var config = {
          apiKey: "AIzaSyA-5xuWezGFCfpgPq70P2npyfH_2hfjJNE",
          authDomain: "test-120220.firebaseapp.com",
          databaseURL: "https://test-120220.firebaseio.com",
          projectId: "test-120220",
          storageBucket: "test-120220.appspot.com",
          messagingSenderId: "266307446382"
        };
        firebase.initializeApp(config);
      </script>
      <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
      <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
    </main>
    <script src="signIn.js"></script>
  </body>
</html>
