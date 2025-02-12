import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSentenceCase(text: string) {
  let newString = text.split(' ').map((word, index) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return newString.join(' ');
}

export function removeNonAlphabetCharacters(str: string) {
  return str.replace(/[^a-zA-Z]/g, '');
}
