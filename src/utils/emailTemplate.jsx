export const EmailTemplate = ({ values }) => {
  const {
    message = "Hello, I’m interested in your services.",
    email,
    service,
    name,
    phone,
  } = values;

  const isAdmin = email === "abdulhani232@gmail.com";

  const adminTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Admin Notification</title>
        <style>
          body { font-family: sans-serif; background: #fff; color: #333; padding: 20px; }
        </style>
      </head>
      <body>
        <h2>🚨 Admin Submission Received</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      </body>
    </html>
  `;

  const userTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>User Confirmation</title>
        <style>
          body { font-family: sans-serif; background: #f9f9f9; color: #333; padding: 20px; }
        </style>
      </head>
      <body>
        <h2>✅ Thank you for contacting us!</h2>
        <p>Dear ${name || "Customer"},</p>
        <p>We have received your request. Here are the details:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "N/A"}</li>
          <li><strong>Service:</strong> ${service || "N/A"}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>We will get back to you shortly.</p>
      </body>
    </html>
  `;

  return isAdmin ? adminTemplate : userTemplate;
};
