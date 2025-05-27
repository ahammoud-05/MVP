// utils/emailTemplate.ts
export const EmailTemplate = ({ values }) => {
  const signupTime = new Date().toUTCString();
  const { email, isAdmin } = values;

  if (isAdmin) {
    return `
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📢 New User Signup Notification</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Signup Time:</strong> ${signupTime}</p>
        </body>
      </html>
    `;
  }

  return `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>🎉 Welcome to MVP.ai!</h1>
        <p>Hi ${email},</p>
        <p>Thanks for signing up — we’re thrilled to have you onboard!</p>
        <p>Let’s build something amazing together 🚀</p>
        <br />
        <p style="font-size: 12px; color: gray;">© ${new Date().getFullYear()} MVP.ai — All rights reserved.</p>
      </body>
    </html>
  `;
};
