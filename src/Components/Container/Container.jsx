import Background from "../Background/Background"
import './Container.css'
import InputBox from "../InputBox/InputBox"
function Container() {

    return (
        <section>
            <Background />
            <div className="signin">
             <InputBox/>
            </div>
        </section>
    )
}

export default Container
