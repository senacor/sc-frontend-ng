export interface LoginEvent {
  username: string;
  password: string;
}

export interface FeedbackEvent {
  subject: string;
  message: string;
  email: string;
}
