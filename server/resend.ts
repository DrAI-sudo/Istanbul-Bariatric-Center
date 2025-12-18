import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  try {
    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const xReplitToken = process.env.REPL_IDENTITY 
      ? 'repl ' + process.env.REPL_IDENTITY 
      : process.env.WEB_REPL_RENEWAL 
      ? 'depl ' + process.env.WEB_REPL_RENEWAL 
      : null;

    if (!xReplitToken) {
      console.error('Resend: X_REPLIT_TOKEN not found');
      throw new Error('X_REPLIT_TOKEN not found for repl/depl');
    }

    if (!hostname) {
      console.error('Resend: REPLIT_CONNECTORS_HOSTNAME not set');
      throw new Error('REPLIT_CONNECTORS_HOSTNAME not set');
    }

    const response = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    );
    
    const data = await response.json();
    connectionSettings = data.items?.[0];

    if (!connectionSettings || !connectionSettings.settings?.api_key) {
      console.error('Resend: Connection not configured properly');
      throw new Error('Resend not connected');
    }
    return { apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email };
  } catch (error) {
    console.error('Error getting Resend credentials:', error);
    throw error;
  }
}

export async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail
  };
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `;

    const result = await client.emails.send({
      from: fromEmail,
      to: 'drmuratustun@gmail.com',
      subject: `Contact Form: ${data.subject}`,
      html: emailHtml,
      replyTo: data.email
    });

    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
