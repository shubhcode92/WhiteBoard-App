// import { useEffect, useRef } from "react";
// import rough from "roughjs";

const roughGenerator = rough.generator();

// const WhiteBoard = ({
//     canvasRef,
//     ctxRef,
//     elements,
//     setElements
// }) => {
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         ctxRef.current = ctx;
//     }, [])

//     const handleMouseDown = (e) => {
//         console.log("mouse down", e);
//     }
//     const handleMouseMove = (e) => {
//         console.log("mouse move", e);
//     }
//     const handleMouseUp = (e) => {
//         console.log("mouse up", e);
//     }
//   return (
//     <canvas 
//         ref={canvasRef} 
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         className="border border-3 border-dark h-100 w-100">

//     </canvas>
//   )
// }

// export default WhiteBoard;



import React, { useRef, useEffect, useState } from 'react';
import rough from 'roughjs';

const WhiteBoard = ({
    tool,
    setElements
}) => {
  const canvasRef = useRef(null);
  const roughCanvas = useRef(null);
  const drawingOptions = useRef({});
//   const tool = useRef({});
    // const [tool, setTool] = useState("pencil");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      roughCanvas.current = rough.canvas(canvas);
    }
  }, []);

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const roughCanvasInstance = roughCanvas.current;

    if (tool === "pencil") {
        if (canvas && roughCanvasInstance) {
          const x = event.clientX - canvas.getBoundingClientRect().left;
          const y = event.clientY - canvas.getBoundingClientRect().top;
          drawingOptions.current.x = x;
          drawingOptions.current.y = y;
        }
    } else if (tool === "line") {
        setElements((preElements) => [
            ...preElements,
            {
                type: "line",
                offsetX,
                offsetY,
                width: offsetX,
                height: offsetY,
                storke: "black",
            }
        ])
    }
  };

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const roughCanvasInstance = roughCanvas.current;
    if (tool === "pencil") {
        if (canvas && roughCanvasInstance && drawingOptions.current.x && drawingOptions.current.y) {
          const x = event.clientX - canvas.getBoundingClientRect().left;
          const y = event.clientY - canvas.getBoundingClientRect().top;
          const roughness = 1;
          const shape = 'line';
          const options = { roughness, strokeWidth: 2, fill: 'black', ...drawingOptions.current };
    
          roughCanvasInstance.line(drawingOptions.current.x, drawingOptions.current.y, x, y, options);
          drawingOptions.current.x = x;
          drawingOptions.current.y = y;
        }
    }
  };

  const handleMouseUp = () => {
    drawingOptions.current = {};
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className='border border-3 border-dark h-100 w-100'
    />
  );
};

export default WhiteBoard;


