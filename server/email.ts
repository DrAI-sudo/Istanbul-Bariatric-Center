import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken || !hostname) {
    console.log('Resend: Missing authentication tokens');
    return null;
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

  if (!response.ok) {
    console.log('Resend: Failed to fetch connection');
    return null;
  }

  const data = await response.json();
  connectionSettings = data.items?.[0];

  if (!connectionSettings || !connectionSettings.settings?.api_key) {
    console.log('Resend: Not connected or missing API key');
    return null;
  }

  return {
    apiKey: connectionSettings.settings.api_key,
    fromEmail: connectionSettings.settings.from_email || 'onboarding@resend.dev'
  };
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    const credentials = await getCredentials();
    
    if (!credentials) {
      console.log('Resend: Skipping email - no credentials available');
      return false;
    }

    const resend = new Resend(credentials.apiKey);

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <h3>Message:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    const result = await resend.emails.send({
      from: credentials.fromEmail,
      to: 'drmuratustun@gmail.com',
      subject: `Contact Form: ${formData.subject}`,
      html: emailHtml,
      replyTo: formData.email
    });

    console.log('Resend: Email sent successfully', result);
    return true;
  } catch (error) {
    console.error('Resend: Failed to send email:', error);
    return false;
  }
}
