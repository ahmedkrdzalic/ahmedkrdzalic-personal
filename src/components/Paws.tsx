"use client";
import React, { useEffect, useState } from "react";

function Paw({
  height,
  style,
  width,
  fill,
}: {
  height: number;
  style: any;
  width: number;
  fill: string;
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      height={height}
      width={width}
      fill={fill}
    >
      <g
        transform="matrix(4.0829010009765625, 0, 0, 4.0829010009765625, -709.3464965820312, -1008.0969848632814)"
        style={{}}
      >
        <ellipse
          style={{
            stroke: "rgb(0, 0, 0)",
            strokeWidth: "0px",
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
          }}
          cx="197.738"
          cy="300.731"
          rx="12.095"
          ry="13.59"
          transform="matrix(0.974063, -0.226275, 0.226275, 0.974063, -1.633107, -0.233441)"
        />
        <ellipse
          style={{
            stroke: "rgb(0, 0, 0)",
            strokeWidth: "0px",
            transformOrigin: "197.738px 300.731px",
          }}
          cx="197.738"
          cy="300.731"
          rx="12.095"
          ry="13.59"
          transform="matrix(0.989631, 0.143632, -0.143632, 0.989631, 75.827449, -0.000262)"
        />
        <ellipse
          style={{
            stroke: "rgb(0, 0, 0)",
            strokeWidth: "0px",
            transformOrigin: "197.738px 300.731px",
          }}
          cx="197.738"
          cy="300.731"
          rx="12.442"
          ry="14.877"
          transform="matrix(0.990757, 0.135649, -0.135649, 0.990757, 51.892705, -21.08609)"
        />
        <ellipse
          style={{
            stroke: "rgb(53, 139, 48)",
            strokeWidth: "0px",
            transformOrigin: "197.738px 300.731px",
          }}
          cx="197.738"
          cy="300.731"
          rx="12.653"
          ry="14.884"
          transform="matrix(0.974063, -0.226275, 0.226275, 0.974063, 21.795046, -21.20072)"
        />
        <path
          style={{
            stroke: "rgb(53, 139, 48)",
            strokeWidth: "0px",
          }}
          d="M 224.075 302.383 C 224.075 302.383 233.412 295.675 245.159 301.573 C 251.903 305.875 254.259 311.139 254.259 311.139 C 255.231 313.027 256.342 316.152 259.253 317.32 C 259.253 317.32 275.192 325.102 269.891 342.403 C 260.864 357.043 240.436 344.909 235.167 344.799 C 230.702 344.706 226.398 346.676 222.227 348.275 C 213.846 351.488 205.029 347.07 205.029 347.07 C 205.029 347.07 195.393 342.325 199.814 327.385 C 201.42 321.958 209.889 319.108 212.988 314.188 C 216.16 309.153 220.623 304.238 224.075 302.383 Z"
        />
      </g>
    </svg>
  );
}

export default function Paws() {
  const [paws, setPaws] = useState<
    {
      x: number;
      y: number;
      right?: boolean;
      angle: number;
      timestamp: number;
    }[]
  >([]);

  const pawSettings = {
    size: 17,
    color: "#696F82",
    trailLength: 20, //number of paws in the trail
    pawSpaceBetween: 40, //distance between lef and right paw
    pawDistance: 20, //forward distance between paws
  };

  const [isClicking, setIsClicking] = useState(false);

  const handleMouseDown = (event: any) => {
    setIsClicking(true);
  };

  const handleMouseUp = (event: any) => {
    setIsClicking(false);
    setPaws((prevPaws) => [
      {
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        angle: -90,
        timestamp: Date.now(), // Add timestamp
      },
    ]);

    const timer = setTimeout(() => {
      if (paws.length > 0) setPaws([]);
    }, 1000);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isClicking || event.buttons === 1) {
      return;
    }

    // console.log("handleMouseMove");
    setPaws((prevPaws) => {
      const dist = Math.sqrt(
        Math.pow(
          event.nativeEvent.offsetX -
            (prevPaws.length > 0 ? prevPaws.slice(-1)[0].x : 0),
          2
        ) +
          Math.pow(
            event.nativeEvent.offsetY -
              (prevPaws.length > 0 ? prevPaws.slice(-1)[0].y : 0),
            2
          )
      );

      const newPaw = {
        x: event.nativeEvent.offsetX,
        y: event.nativeEvent.offsetY,
        right: prevPaws.length > 0 ? !prevPaws.slice(-1)[0].right : true,
        angle:
          (Math.atan2(
            event.nativeEvent.offsetY -
              (prevPaws.length > 0 ? prevPaws.slice(-1)[0].y : 0),
            event.nativeEvent.offsetX -
              (prevPaws.length > 0 ? prevPaws.slice(-1)[0].x : 0)
          ) *
            180) /
          Math.PI,
        timestamp: Date.now(), // Add timestamp
      };

      if (prevPaws.length === 0) return [newPaw];
      if (dist < pawSettings.pawDistance) return [...prevPaws];

      if (prevPaws.length >= pawSettings.trailLength) {
        // Remove the oldest paw and add the new one
        return [...prevPaws.slice(1), newPaw];
      } else {
        // Add the new paw
        return [...prevPaws, newPaw];
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPaws((prevPaws) => {
        if (prevPaws.length > 0 && Date.now() - prevPaws[0].timestamp > 200) {
          // Remove the oldest paw
          return [...prevPaws.slice(1)];
        } else {
          // No paws to remove
          return [...prevPaws];
        }
      });
    }, 200);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Define the function
  const getJustifyContent = (right: boolean | undefined) => {
    let value;
    if (right === undefined) {
      value = "center";
    } else {
      value = right ? "flex-end" : "flex-start";
    }
    // console.log(value);
    return value;
  };

  return (
    <div
      className="absolute w-full h-full"
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onMouseDown={(event) => event.stopPropagation()}
      onMouseUp={(event) => event.stopPropagation()}
    >
      <div className="relative">
        {paws.map((paw, index) => (
          <div
            key={index}
            onMouseMove={(event) => event.stopPropagation()}
            style={{
              position: "absolute",
              left: `${paw.x - pawSettings.pawSpaceBetween / 2}px`,
              top: `${paw.y - pawSettings.size / 2}px`,
              width: `${pawSettings.pawSpaceBetween}px`,
              height: `${pawSettings.size}px`,
              rotate: `${paw.angle + 90}deg`,
              zIndex: -1,
              display: "flex",
              justifyContent: getJustifyContent(paw.right),
            }}
          >
            <Paw
              width={pawSettings.size}
              height={pawSettings.size}
              fill={pawSettings.color}
              style={
                {
                  // float:
                  //   paw.right === undefined
                  //     ? undefined
                  //     : paw.right === false
                  //     ? "left"
                  //     : "right",
                }
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
