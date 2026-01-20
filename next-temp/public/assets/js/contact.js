document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const loading = form.querySelector(".loading");
    const errorMessage = form.querySelector(".error-message");
    const sentMessage = form.querySelector(".sent-message");

    loading && (loading.style.display = "block");
    errorMessage && (errorMessage.innerHTML = "");
    sentMessage && (sentMessage.style.display = "none");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      loading && (loading.style.display = "none");
      if (json.success) {
        sentMessage && (sentMessage.style.display = "block");
        form.reset();
      } else {
        errorMessage &&
          (errorMessage.innerHTML = json.error || "Failed to send");
      }
    } catch (err) {
      loading && (loading.style.display = "none");
      errorMessage && (errorMessage.innerHTML = "An error occurred");
    }
  });
});
