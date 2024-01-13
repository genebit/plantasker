import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { firebaseConfig } from "@config/config"

export const initializeFirebase = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig)
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
}
