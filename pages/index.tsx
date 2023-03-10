import Head from "next/head";
import Header from "@components/components/header";
import questions from "../questions.json";
import IntakeForm from "@components/components/intakeForm";

// TODO: Read through code and optimize/clean up

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayble Health Onboarding</title>
        <meta name="description" content="Ayble Health Intake Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <div className="mx-10 flex justify-center">
          <IntakeForm questions={questions} />
        </div>
      </main>
    </>
  );
}
