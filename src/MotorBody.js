import "./MotorBody.css";
import MotorItem from "./MotorItem";
import Motors from "./Motors";

function MotorBody() {
    return (
        <div className="container">
            <div className="card-container">
                <MotorItem />
            </div>
        </div>
    );
}

export default MotorBody;
