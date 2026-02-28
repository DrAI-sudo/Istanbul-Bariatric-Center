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
    fromEmail: 'onboarding@resend.dev'
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

export async function sendHealthProfileEmail(formData: Record<string, any>): Promise<boolean> {
  try {
    const credentials = await getCredentials();
    
    if (!credentials) {
      console.log('Resend: Skipping health profile email - no credentials available');
      return false;
    }

    const resend = new Resend(credentials.apiKey);

    const checklistItems = [
      { key: 'highBloodPressure', label: 'High Blood Pressure / Hypertension' },
      { key: 'diabetes', label: 'Diabetes' },
      { key: 'bleedingProblems', label: 'Bleeding Problems' },
      { key: 'skinProblems', label: 'Skin Problems' },
      { key: 'medicationAllergies', label: 'Medication Allergies' },
      { key: 'foodAllergies', label: 'Food Allergies' },
      { key: 'bloodThinners', label: 'Aspirin / Blood Thinners' },
      { key: 'anaesthesiaReaction', label: 'Anaesthesia Reaction' },
      { key: 'otherMedicalProblems', label: 'Other Medical Problems' },
    ];

    const checkedItems = checklistItems.filter(item => formData[item.key]).map(item => item.label);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <div style="background: #1e293b; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Personal Health Profile Submission</h1>
          <p style="margin: 8px 0 0; opacity: 0.8;">Istanbul Bariatric Center</p>
        </div>
        
        <div style="padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 200px;">Title:</td><td style="padding: 6px 0;">${formData.title || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Name:</td><td style="padding: 6px 0;"><strong>${formData.firstName} ${formData.surname}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Date of Birth:</td><td style="padding: 6px 0;">${formData.dateOfBirth || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Height:</td><td style="padding: 6px 0;">${formData.height || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Weight:</td><td style="padding: 6px 0;">${formData.weight || '-'}</td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 24px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 200px;">Address:</td><td style="padding: 6px 0;">${formData.address || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Post Code:</td><td style="padding: 6px 0;">${formData.postCode || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Telephone:</td><td style="padding: 6px 0;">${formData.telephone || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Mobile:</td><td style="padding: 6px 0;">${formData.mobile || '-'}</td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 24px;">Lifestyle</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 200px;">Smoking:</td><td style="padding: 6px 0;">${formData.smoke || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Recreational Drugs:</td><td style="padding: 6px 0;">${formData.recreationalDrugs || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Exercise:</td><td style="padding: 6px 0;">${formData.exercise || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Alcohol:</td><td style="padding: 6px 0;">${formData.drink || '-'}${formData.unitsPerWeek ? ` (${formData.unitsPerWeek} units/week)` : ''}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Pregnant/Lactating:</td><td style="padding: 6px 0;">${formData.pregnantLactating || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Children:</td><td style="padding: 6px 0;">${formData.haveChildren || '-'}${formData.childrenAges ? ` (Ages: ${formData.childrenAges})` : ''}</td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 24px;">Surgery Interest</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 200px;">Procedures:</td><td style="padding: 6px 0;">${[formData.interestedProcedures1, formData.interestedProcedures2, formData.interestedProcedures3].filter(Boolean).join(', ') || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Desired Results:</td><td style="padding: 6px 0;">${formData.desiredResults || '-'}</td></tr>
          </table>

          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 24px;">Medical History</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 200px;">Medical Conditions:</td><td style="padding: 6px 0;">${[formData.medicalConditions1, formData.medicalConditions2, formData.medicalConditions3].filter(Boolean).join(', ') || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Medications:</td><td style="padding: 6px 0;">${[formData.medications1, formData.medications2, formData.medications3, formData.medications4].filter(Boolean).join(', ') || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Previous Surgery:</td><td style="padding: 6px 0;">${[formData.previousSurgery1, formData.previousSurgery2, formData.previousSurgery3].filter(Boolean).join(', ') || '-'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Anemia/Jaundice/HIV:</td><td style="padding: 6px 0;">${formData.anemiaDetails || '-'}</td></tr>
          </table>

          ${checkedItems.length > 0 ? `
          <h2 style="color: #1e293b; border-bottom: 2px solid #dc2626; padding-bottom: 8px; margin-top: 24px;">⚠️ Medical Checklist (Flagged)</h2>
          <ul style="margin: 8px 0; padding-left: 20px;">
            ${checkedItems.map(item => `<li style="padding: 4px 0; color: #dc2626;">${item}</li>`).join('')}
          </ul>
          ${formData.otherMedicalDetails ? `<p style="color: #64748b;">Details: ${formData.otherMedicalDetails}</p>` : ''}
          ` : ''}

          ${formData.additionalInfo ? `
          <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 24px;">Additional Information</h2>
          <p style="color: #334155;">${formData.additionalInfo.replace(/\n/g, '<br>')}</p>
          ` : ''}
        </div>
        
        <div style="background: #f1f5f9; padding: 16px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
          <p style="margin: 0; color: #64748b; font-size: 12px;">Submitted from Istanbul Bariatric Center website - Personal Health Profile form</p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: credentials.fromEmail,
      to: 'drmuratustun@gmail.com',
      subject: `Health Profile: ${formData.firstName} ${formData.surname}`,
      html: emailHtml,
      replyTo: formData.email
    });

    console.log('Resend: Health profile email sent successfully', result);
    return true;
  } catch (error) {
    console.error('Resend: Failed to send health profile email:', error);
    return false;
  }
}
