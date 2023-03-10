export interface AnswerType {
  answerId: string;
  answerText: string;
  score: number;
}

export interface QuestionType {
  questionId: string;
  fieldType: string;
  questionText: string;
  answers: AnswerType[];
}

export interface FormDataType {
  questionId: string;
  answerId: string | null;
}
