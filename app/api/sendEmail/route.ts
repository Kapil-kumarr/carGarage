import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate input
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const garageName = process.env.GARAGE_NAME || 'AutoCare Garage'
    const garageEmail = process.env.GARAGE_EMAIL || 'info@autocaregarage.com'

    // Email to user (confirmation)
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%); color: white; padding: 30px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; color: #FDB913; }
            .content { background: #f9f9f9; padding: 30px; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #FDB913; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #FDB913; color: #1A1A1A; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">${garageName}</div>
              <p>Professional Car Service & Repair</p>
            </div>
            <div class="content">
              <h2>Thank You for Contacting Us!</h2>
              <p>Dear ${name},</p>
              <p>We have received your message and appreciate you reaching out to ${garageName}. Our team will review your inquiry and get back to you within 24 hours.</p>
              
              <div class="message-box">
                <h3>Your Message:</h3>
                <p>${message}</p>
              </div>
              
              <p>If you need immediate assistance, please call us at <strong>${process.env.GARAGE_PHONE}</strong>.</p>
              
              <p>Best regards,<br>The ${garageName} Team</p>
            </div>
            <div class="footer">
              <p>${process.env.GARAGE_ADDRESS}</p>
              <p>Phone: ${process.env.GARAGE_PHONE} | Email: ${garageEmail}</p>
              <p>&copy; ${new Date().getFullYear()} ${garageName}. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Email to garage (notification)
    const garageEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
            .header { background: #1A1A1A; color: #FDB913; padding: 20px; text-align: center; }
            .content { background: white; padding: 30px; margin: 20px 0; }
            .field { margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #FDB913; }
            .label { font-weight: bold; color: #1A1A1A; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div>${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div>${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div>${phone}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div>${message}</div>
              </div>
              <p style="margin-top: 20px; color: #666; font-size: 14px;">
                Submitted on: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"${garageName}" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: `Thank You for Contacting ${garageName}`,
      html: userEmailHtml,
    })

    // Send notification email to garage
    await transporter.sendMail({
      from: `"${garageName} Website" <${process.env.SMTP_FROM}>`,
      to: garageEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: garageEmailHtml,
      replyTo: email,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
