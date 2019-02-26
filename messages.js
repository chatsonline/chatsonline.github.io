const secMessages = document.querySelector("#secMessages");
const form = document.querySelector("#form");
const inpMessages = document.querySelector("#inpMessages");

const db = firebase.database();
const messages = db.ref("myMessages");

//Definerer en bruker
let user;
function saveMessages(evt) {
    evt.preventDefault();
    // Legger inn tekst, user id , displayName, profilbilde og tidspunkt for når meldingen ble sendt
    messages.push({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        text: inpMessages.value
    });
    form.reset();
}

function showMessage(snap) {
    const message = snap.val();
    let _class = "others";
    // Sjekker om denne meldingen kommer fra meg selv
    if(user.uid === message.uid) {
        _class = "me";
    }

    let picture = "anonym.png";
    if(message.photoURL) {
        picture = message.photoURL;
    }
    secMessages.innerHTML += `
      <div class="${_class}">
          <img src="${picture}" title="${message.displayName}"></img>
          <section class="textMessage">
            <section class="displayName">${message.displayName}</section>
            <span class="messageApperance">${message.text}</span>
          </section>
      </div>
    `;
}

// Sjekker om vi er logget inn
firebase.auth().onAuthStateChanged( newuser => {
    if(newuser) {
        // Setter user til den innloggede brukeren
        user = newuser;
        // Event Listeners
        form.addEventListener("submit", saveMessages);
        messages.on("child_added", showMessage);
    } else {
      document.body.innerHTML = `
      <main class="notloggedin">
        <div class="signIn">YOU ARE CURRENTLY NOT LOGGED IN</div>
        <a href="index.html">SIGN IN BY CLICKING HERE</a>
      </main>
    `;
    }
});
