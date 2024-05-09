import "./index.css";
import { useState } from "react";


const RoomPage = () => {
    const [tool, setTool] = useState("pencil");
  return (
    <div className="row">
        <h1 className="text-center py-5"> White Board Sharing App</h1>
        <div className="col-md-12 px-5 mt-4 mb-5 d-flex align-item-center justify-content-around">
            <div className="d-flex col-md-2 justify-content-between gap-1">
                <div className="d-flex gap-1">
                    <label htmlFor="pencil">Pencil</label>
                    <input type="radio" id="pencil" name="tool" value="pencil" onChange={(e)=>setTool(e.target.value)} />
                </div>
                <div className="d-flex gap-1">
                    <label htmlFor="line">Line</label>
                    <input type="radio" id="line" name="tool" value="line" onChange={(e)=>setTool(e.target.value)} />
                </div>
                <div className="d-flex gap-1">
                    <label htmlFor="ract">Ractangle</label>
                    <input type="radio" id="ract" name="tool" value="ract" onChange={(e)=>setTool(e.target.value)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomPage;
