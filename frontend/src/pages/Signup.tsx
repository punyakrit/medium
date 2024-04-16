import Quote from "../components/Quote"
import SignUpComp from "../components/SignUpComp"

function Signup() {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <SignUpComp/>
      </div>
      <div className="hidden lg:block">
      <Quote/>

      </div>
    </div>
  )
}

export default Signup
