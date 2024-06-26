import "./index.css";
import JoinRoomForm from "./JoinRoomForm";
import CreateRoomForm from "./CreateRoomForm";

const Forms = () => {
    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mt-5 form-box py-3 px-5 border border-primary border-2 rounded-2 mx-auto d-flex flex-column align-item-center text-center">
                <h1 className="text-primary fw-bold ">Created Room</h1>
                < CreateRoomForm />
            </div>
            <div className="col-md-4 mt-5 form-box py-3 px-5 border border-primary border-2 rounded-2 mx-auto d-flex flex-column align-item-center text-center">
                <h1 className="text-primary fw-bold">Join Room</h1>
                <JoinRoomForm />
            </div>
        </div>       
        
    )
}

export default Forms;