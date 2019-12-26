import { NavLink } from "react-router-dom";

export default function PurchaseComplete(){
    return (
        <div>
            <div>
                <h2>
                    Purchase Complete
                </h2>
                <h3>
                    Thank you
                </h3>
            </div>
            <div>
                <NavLink to="/">BACK TO HOME PAGE</NavLink>
            </div>
        </div>
    );
}