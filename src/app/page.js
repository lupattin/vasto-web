import Initial from "@/components/inital/inital";
import Welcomeinitial from "@/components/welcomeinitial/welcomeinitial";
import Thesolution from "@/components/thesolution/thesolution";
import Howitworks from "@/components/howitworks/howitworks";
import WhyVasto from "@/components/whyvasto/whyvasto";
import Ours from "@/components/ours/ours";
import ContactForm from "@/components/contactform/contactform";
export default function Home() {
  return (
    <>
      <Initial />
      <Welcomeinitial/>
      <Thesolution/>
      <Howitworks/>
      <WhyVasto />
      <Ours /> 
      <ContactForm />
    </>
  );
}
