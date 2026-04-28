export interface Experience {
  id: string;
  company: string;
  start_date: { seconds: number; nanoseconds: number };
  end_date: { seconds: number; nanoseconds: number };
  description: string;
  position: string;
}
