import Quote from "../components/Quote"
import SigninComp from "../components/SigninComp"

function Signin() {
  return (
    <div className="grid lg:grid-cols-2">
    <div>
        <SigninComp/>
    </div>
    <div className="hidden lg:block">
    <Quote/>

    </div>
  </div>
  )
}

export default Signin
