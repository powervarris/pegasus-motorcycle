import React from "react";
import "./MotorItem.css";
import motorcycles from "./Data";
import Motors from "./Motors";

function MotorItem() {
    return (
        <div className="motocards">
            <div className="motocards-item">
                {motorcycles.map((motor, i) => {
                    return (
                        <Motors
                            key={i}
                            id={motor.motorKey}
                            img={motor.imgSRC}
                            brand={motor.brand}
                            model={motor.model}
                            color={motor.color}
                            price={motor.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MotorItem;
