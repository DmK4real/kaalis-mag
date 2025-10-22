import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  const form = await req.formData()
  const email = String(form.get('email') || '')
  if (!email.includes('@')) return NextResponse.json({ ok: false }, { status: 400 })
  // TODO: intégrer Mailchimp/Resend ici
  return NextResponse.json({ ok: true })
}
