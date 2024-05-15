import "./index.css";
import { useRef, useState } from "react";
import WhiteBoard from "../../components/Whiteboard";


const RoomPage = () => {
    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("black");
    const [user, setUser] = useState(0);

    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const [elements, setElements] = useState([])
    
  return (
    <div className="row">
        <h1 className="text-center py-4"> White Board Sharing App <span className="text-primary">[Users Online : <span>{user}</span> ]</span></h1>
        <div className="col-md-10 mx-auto gap-3 px-5 mb-3 d-flex align-item-center justify-content-between">
            <div className="d-flex col-md-2 justify-content-center gap-1">
                <div className="d-flex gap-1 align-items-center">
                    <label htmlFor="pencil">Pencil</label>
                    <input className="mt-1" type="radio" id="pencil" checked={tool === "pencil"} name="tool" value="pencil" onChange={(e)=>setTool(e.target.value)} />
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <label htmlFor="line">Line</label>
                    <input className="mt-1" type="radio" id="line" checked={tool === "line"} name="tool" value="line" onChange={(e)=>setTool(e.target.value)} />
                </div>
                <div className="d-flex gap-1 align-items-center">
                    <label htmlFor="ract">Ractangle</label>
                    <input className="mt-1" type="radio" id="ract" checked={tool === "ract"} name="tool" value="ract" onChange={(e)=>setTool(e.target.value)} />
                </div>
            </div>
            <div className="col-md-2 mx-auto">
                <div className="d-flex flex-col align-items-center mt-2 gap-2">
                    <label htmlFor="color">Select Color:</label>
                    <input 
                        type="color"
                        id="color"
                        className="mt-1" 
                        value = {color}
                        onChange={(e) => setColor(e.target.value)}                   
                    />
                </div>
            </div>
            <div className="col-md-3 d-flex gap-2">
                <button className="btn btn-primary mt-1">Undo</button>
                <button className="btn btn-outline-primary mt-1">Redu</button>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger">Clear Canvas</button>
            </div>
        </div>
        <div className="col-md-10 mx-auto canvas-box">
            <WhiteBoard 
                canvasRef={canvasRef} 
                ctxRef={ctxRef}
                elements={elements}
                setElements={setElements}
                tool={tool}
            />
        </div>
    </div>
  )
}

export default RoomPage;
