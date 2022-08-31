import { useState } from 'react';
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva';

import React from '@types/react';
import Button from 'react-bootstrap/Button';

export default function CreateBlob() {
  const [blobs, setBlobs] = useState([]);
  const handelCreateBlob = () => {
    setBlobs(prevBlobs => [
      ...prevBlobs,
      {
        x: blobs.length * 150,
        color: Konva.Util.getRandomColor()
      }
    ]);
    console.log(blobs);
  };
  return (
    <>
      <Button variant="success" onClick={handelCreateBlob}>
        Success
      </Button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {blobs.map((blob, i) => (
            <Line
              key={i}
              x={blob.x}
              points={[50, 50, 150, 50, 100, 150]}
              tension={0.5}
              closed
              fill={blob.color}
              draggable
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
}
