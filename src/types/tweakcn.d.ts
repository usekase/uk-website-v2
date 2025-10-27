declare module 'tweakcn' {
  import { ClassValue } from 'class-variance-authority';

  export function tweakcn<T extends (...args: any[]) => any>(
    base: T,
    config?: any
  ): T;
}
