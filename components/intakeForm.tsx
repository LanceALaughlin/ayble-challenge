import { FormEvent, useState, useEffect } from "react";
import RadioField from "./radioField";
import { QuestionType } from "@components/types/app";

interface FormDataType {
  questionId: string;
  answerId: string | null;
}

// Creates an default state, which is an array of objects with the questionId and an empty answerId
const generateDefaultState = (questions: QuestionType[]) => {
  return questions.map((question) => {
    return {
      questionId: question.questionId,
      answerId: null,
    };
  });
};

const IntakeForm = ({ questions }: { questions: QuestionType[] }) => {
  const [formData, setFormData] = useState<FormDataType[]>(() =>
    generateDefaultState(questions)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [formData]);

  const onFieldChange = (
    questionId: string,
    answerId: string,
    questionIndex: number
  ) => {
    const formDataCopy = [...formData];
    const questionInSet = formDataCopy.find(
      (question) => question.questionId === questionId
    );

    if (questionInSet) {
      questionInSet.answerId = answerId;
      setFormData(formDataCopy);
    }

    if (
      questionIndex === currentQuestionIndex &&
      currentQuestionIndex !== questions.length - 1
    ) {
      setCurrentQuestionIndex((i) => i + 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const canSubmitForm =
    currentQuestionIndex === questions.length - 1 &&
    formData.every((set) => set.answerId);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center mb-10"
    >
      {questions.map((question, i) => {
        return (
          <RadioField
            key={question.questionId}
            hidden={i > currentQuestionIndex}
            question={question}
            value={formData[i].answerId}
            onChange={(questionId, answerId) =>
              onFieldChange(questionId, answerId, i)
            }
          />
        );
      })}
      {canSubmitForm && (
        <button
          className="bg-ayble-secondary py-[16px] px-[32px] w-[200px] my-5 rounded-full text-white hover:bg-ayble-green transition-colors"
          type="submit"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default IntakeForm;
