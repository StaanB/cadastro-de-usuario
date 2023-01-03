import { inputsVerify } from "../first-page/FirstPageVerification";



export function ThirdPageVerification(e){
    e.preventDefault()
    console.log(localStorage);
}

export function BackSecondPage() {
    window.localStorage.removeItem("Second Verification");
    window.location.replace("http://localhost:3000/SecondPage");
  }