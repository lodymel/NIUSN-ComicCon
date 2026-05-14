/**
 * Opens the visitor's mail client with recipient, subject, and body prefilled from the form.
 * Set the inbox on `#tk-contact-form`: `data-business-email="sns@niusn.com"`.
 *
 * Important: This is a mailto: flow — mail is sent by the user's app, not your server.
 * For silent in-page submit + delivery without opening Mail, use a form backend
 * (Formspree, Getform, your own API + SMTP/SendGrid, etc.).
 */
(function () {
  function normalizeRecipient(raw) {
    return String(raw || "")
      .trim()
      .replace(/^mailto:/i, "");
  }

  function currentLang() {
    return document.documentElement.getAttribute("lang") || "en";
  }

  function fallbackSubject() {
    if (window.NIUSN_I18N && typeof window.NIUSN_I18N.t === "function") {
      return window.NIUSN_I18N.t(currentLang(), "contact.defaultSubject");
    }
    return "NIUSN · Hong Kong Comic Con 2026 — inquiry";
  }

  function bind() {
    const form = document.getElementById("tk-contact-form") || document.querySelector(".tk-contact__form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const to = normalizeRecipient(form.getAttribute("data-business-email"));
      if (!to) return;

      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const reply = (fd.get("email") || "").toString().trim();
      let subject = (fd.get("subject") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();

      if (!subject) subject = fallbackSubject();

      const lines = [];
      if (name) lines.push("Name: " + name);
      if (reply) lines.push("Reply to: " + reply);
      lines.push("");
      lines.push(message);

      const body = lines.join("\n");
      const href =
        "mailto:" +
        to +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = href;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
