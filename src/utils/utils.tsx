import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { firebaseConfig } from "@constants/constants"

export const initializeFirebase = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig)
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
}
