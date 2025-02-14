import { EmailTemplate } from "@/lib/email";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST( req ) {

    const body = await req.json();
    
    console.log(body);
    

    
    

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['vastofoods@gmail.com'],
        subject: 'Haz recibido un nuevo contacto',
        react: EmailTemplate({ firstName: body.firstName, lastName: body.lastName, email: body.email, company: body.company, institutionType: body.institutionType, phone: body.phone, message: body.message }),    
      });

      if (error) {
        return new Response(error, { status: 400 })
      }else{
       return new Response(data, { status: 200 });
      }
  }