export interface Feedback {
  subject: string;
  body: string;
  email: string;
  context: FeedbackContext;
}

export enum FeedbackContext {
  BUG, OPTIMIZATION, OTHER, ACCESS_ISSUE
}
