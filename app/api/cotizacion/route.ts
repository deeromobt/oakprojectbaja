import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { name, email, phone, eventType, eventDate, venue, guests, budget, source, vision } = body

  try {
    await resend.emails.send({
      from: 'Oak Project Baja <bookings@oakprojectbaja.com>',
      to: 'bookings@oakprojectbaja.com',
      replyTo: email,
      subject: `New quote request — ${eventType || 'Event'} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FCF7E8; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 2px solid #C9B889; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #2A1E08; font-size: 24px; margin: 0;">New Quote Request</h1>
            <p style="color: #968148; margin: 4px 0 0;">Oak Project Baja — oakprojectbaja.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #7A6535; font-size: 13px; width: 160px; vertical-align: top;">Full name</td>
              <td style="padding: 10px 0; color: #2A1E08; font-weight: bold;">${name}</td>
            </tr>
            <tr style="background: #EDE4CC;">
              <td style="padding: 10px 8px; color: #7A6535; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 8px; color: #2A1E08;"><a href="mailto:${email}" style="color: #968148;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6535; font-size: 13px; vertical-align: top;">Phone / WhatsApp</td>
              <td style="padding: 10px 0; color: #2A1E08;">${phone}</td>
            </tr>
            <tr style="background: #EDE4CC;">
              <td style="padding: 10px 8px; color: #7A6535; font-size: 13px; vertical-align: top;">Event type</td>
              <td style="padding: 10px 8px; color: #2A1E08;">${eventType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6535; font-size: 13px; vertical-align: top;">Event date</td>
              <td style="padding: 10px 0; color: #2A1E08;">${eventDate}</td>
            </tr>
            <tr style="background: #EDE4CC;">
              <td style="padding: 10px 8px; color: #7A6535; font-size: 13px; vertical-align: top;">Venue</td>
              <td style="padding: 10px 8px; color: #2A1E08;">${venue}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6535; font-size: 13px; vertical-align: top;">Guests</td>
              <td style="padding: 10px 0; color: #2A1E08;">${guests}</td>
            </tr>
            <tr style="background: #EDE4CC;">
              <td style="padding: 10px 8px; color: #7A6535; font-size: 13px; vertical-align: top;">Budget</td>
              <td style="padding: 10px 8px; color: #2A1E08; font-weight: bold;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A6535; font-size: 13px; vertical-align: top;">How they found us</td>
              <td style="padding: 10px 0; color: #2A1E08;">${source}</td>
            </tr>
          </table>

          ${vision ? `
          <div style="margin-top: 24px; padding: 16px; background: #EDE4CC; border-radius: 8px; border-left: 3px solid #C9B889;">
            <p style="color: #7A6535; font-size: 13px; margin: 0 0 8px;">Their vision</p>
            <p style="color: #2A1E08; margin: 0; line-height: 1.6;">${vision}</p>
          </div>` : ''}

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #D9C99A; text-align: center;">
            <a href="https://wa.me/526241392530?text=Hola%20${encodeURIComponent(name)}%2C%20gracias%20por%20tu%20solicitud%20de%20cotizaci%C3%B3n."
               style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-right: 8px;">
              Reply on WhatsApp
            </a>
            <a href="mailto:${email}"
               style="display: inline-block; background: #968148; color: #FCF7E8; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Reply by email
            </a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
