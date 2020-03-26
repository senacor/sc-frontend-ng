export class Feedback {
  public subject: string;
  public body: string;
  public email: string;
  public context: FeedbackContext;

  constructor(subject: string, body: string, email: string, context: FeedbackContext) {
    this.subject = subject;
    this.body = body;
    this.email = email;
    this.context = context;
  }
}

export enum FeedbackContext {
  BUG, OPTIMIZATION, OTHER, ACCESS_ISSUE
}
