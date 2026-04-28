export interface Formation {
  institution: string;
  start_date: { seconds: number; nanoseconds: number };
  end_date: { seconds: number; nanoseconds: number };
  diploma_url: string;
  name: string;
  description: string;
}
