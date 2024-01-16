import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { firebaseConfig } from "@constants/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const initializeFirebase = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig)
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
}

export const setTabTag = () => {
  if (import.meta.env.DEV) document.title = "Plantasker (Dev.)"
  if (import.meta.env.PROD) document.title = "Plantasker"
}
