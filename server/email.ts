import { Resend } from 'resend';

let resendClient: Resend | null = null;
let fromEmail: string = 'onboarding@resend.dev';

async function initializeResend(): Promise<boolean> {
  try {
    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const xReplitToken = process.env.REPL_IDENTITY 
      ? 'repl ' + process.env.REPL_IDENTITY 
      : process.env.WEB_REPL_RENEWAL 
      ? 'depl ' + process.env.WEB_REPL_RENEWAL 
      : null;

    if (!xReplitToken || !hostname) {
      console.log('Resend: Missing required environment variables');
      return false;
    }

    const response = await fetch(
      `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=resend`,
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    );
    
    if (!response.ok) {
      console.log('Resend: Failed to fetch connection settings');
      return false;
    }

    const data = await response.json();
    const connectionSettings = data.items?.[0];

    if (!connectionSettings?.settings?.api_key) {
      console.log('Resend: No API key configured');
      return false;
    }

    resendClient = new Resend(connectionSettings.settings.api_key);
    fromEmail = connectionSettings.settings.from_email || 'onboarding@resend.dev';
    console.log('Resend: Initialized successfully');
    return true;
  } catch (error) {
    console.error('Resend: Initialization error:', error);
    return false;
  }
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    if (!resendClient) {
      const initialized = await initializeResend();
      if (!initialized || !resendClient) {
        console.log('Resend: Client not available, skipping email');
        return false;
      }
    }

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `;

    const result = await resendClient.emails.send({
      from: fromEmail,
      to: 'drmuratustun@gmail.com',
      subject: `Contact Form: ${data.subject}`,
      html: emailHtml,
      replyTo: data.email
    });

    console.log('Resend: Email sent successfully', result);
    return true;
  } catch (error) {
    console.error('Resend: Failed to send email:', error);
    return false;
  }
}
