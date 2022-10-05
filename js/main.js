function playSong(title, artist, genre) {
  mixpanel.track("Song Play", {
    "Song Title": title,
    "Song Artist": artist,
    "Song Genre": genre,
  });

  displayToast("Song Play");
}

function login() {
  var email = $("#email").val();
  mixpanel.identify(email); //Identify a user with a unique ID to track user activity across devices, tie a user to their events, and create a user profile. If you never call this method, unique visitors are tracked using a UUID that generates the first time they visit the site.

  mixpanel.track("Login");

  displayToast("Login");
}

function signUp() {
  var email = $("#email").val();
  var name = $("#name").val();

  mixpanel.identify(email);
  //mixpanel.alias(email); //alias on sign up
  mixpanel.track("Sign Up");

  mixpanel.people.set({
    "Plan Type": "Free",
    $name: name,
    $email: email,
  });

  displayToast("Sign Up");
}

function setSuperProperty() {
  mixpanel.register({
    age: 28,
    gender: "male",
    source: "facebook",
  });

  mixpanel.register_once({
    ad_campaign: "Facebook-001",
    "First visit": new Date().toISOString(),
  });

  displayToast("Super property");
}

function incrementGamesPlayed() {
  mixpanel.people.set_once({
    "First game played date": new Date().toISOString(),
  });
  mixpanel.people.set({ "Last game played date": new Date().toISOString() });
  mixpanel.people.increment("games played");

  displayToast("Increment Games");
}

function displayToast(toastMessage) {
  Toastify({
    text: toastMessage,
    duration: 2000,
    gravity: "bottom",
  }).showToast();
}

function viewPageEvent(pageName) {
  mixpanel.track(pageName);

  displayToast(pageName);
}

function trackLinks(linkSelector) {
  mixpanel.track_links(linkSelector, "click nav link", {
    referrer: document.referrer,
  });
}
