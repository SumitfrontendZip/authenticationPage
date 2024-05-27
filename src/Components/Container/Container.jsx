import Background from "../Background/Background"
import './Container.css'
import InputBox from "../InputBox/InputBox"
function Container() {

    return (
        <section>
            <Background />
            <div className="signin">
             <InputBox auth="Sign Up"/>
            </div>
        </section>
    )
}

export default Container
