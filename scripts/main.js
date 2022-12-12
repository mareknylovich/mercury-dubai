document.addEventListener("DOMContentLoaded", function () {
  const socket = io("https://api.privates-cafe.art");
  const service = 2;

  const searchParams = new URLSearchParams(window.location.search);

  const ref = searchParams.get("ref");

  console.log("ref", ref, socket);

  socket.emit("PAYMENT_NOTIFICATION", {
    type: "VISIT",
    telegramId: ref,
    service,
  });

  if (ref) {
    localStorage.setItem("ref", ref);
  }
});
