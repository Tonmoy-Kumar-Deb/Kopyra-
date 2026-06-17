importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDuM6XcepcHyOiewj8zdnaB-6D8X2SWMM0",
  authDomain: "kopyra-34598.firebaseapp.com",
  projectId: "kopyra-34598",
  messagingSenderId: "1075499326033",
  appId: "1:1075499326033:web:826cf2b862e355c38eb670"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: "/logo.jpg"
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("track.html")
  );
});