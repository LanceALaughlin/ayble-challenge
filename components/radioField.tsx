import { QuestionType } from "@components/types/app";

const DropdownField = ({
  question,
  hidden,
  value,
  onChange,
}: {
  question: QuestionType;
  hidden: boolean;
  value: string | null;
  onChange: (key: string, value: string) => void;
}) => {
  return (
    <fieldset className={`mt-10 ${hidden ? "hidden" : "block"}`}>
      <div className="mb-5 max-w-[700px]">{question.questionText}</div>
      {question.answers.map((answer) => (
        <div
          key={answer.answerId}
          className="border rounded-md my-2 p-2 max-w-[400px] hover:border-black transition-colors"
        >
          <label className="block w-full h-full cursor-pointer">
            <input
              name={question.questionId}
              className="mr-2"
              type="radio"
              value={answer.answerId}
              checked={value === answer.answerId}
              onChange={() => onChange(question.questionId, answer.answerId)}
            />
            {answer.answerText}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default DropdownField;
