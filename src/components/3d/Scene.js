import React, { Suspense } from "react";
import FloaterAnimals from "./objects/FloaterAnimals";

export default function Scene({ scroll }) {
  const getComponent = () => {
    const range = Math.floor(scroll / 10) * 10;
    const normalizedScroll = scroll % 10;
    switch (range) {
      case 0:
        return (
          <>
            <FloaterAnimals
              obj={"Colobus_Animations.glb"}
              animation={"Sit"}
              scroll={normalizedScroll}
              scrollAnimation={[
                [
                  [-4, 1.5, -20],
                  [0, 1.5, -5],
                  [0, 0, 0],
                  [0, 0, 2],
                  [2, -2, 5],
                ],
              ]}
            />
            <FloaterAnimals
              obj={"Sparrow_Animations.glb"}
              scroll={normalizedScroll}
              animation={"Fly"}
              scrollAnimation={[
                [
                  [-4, 1.5, -20],
                  [0, 1.5, -5],
                  [0, 0, 0],
                  [0, 0, 2],
                  [2, -2, 5],
                ],
              ]}
            />
          </>
        );
        // case 10:
        //   return (
        //     <>
        //       <FloaterAnimals
        //         obj={"Herring_Animations.glb"}
        //         position={[0.3, 0, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //       <FloaterAnimals
        //         obj={"Inkfish_Animations.glb"}
        //         position={[0.4, -0.23, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //     </>
        //   );
        // case 20:
        //   return (
        //     <>
        //       <FloaterAnimals
        //         obj={"Sparrow_Animations.glb"}
        //         position={[0.3, 0, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //       <FloaterAnimals
        //         obj={"Pudu_Animations.glb"}
        //         position={[0.4, -0.23, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //     </>
        //   );
        // case 30:
        //   return (
        //     <>
        //       <FloaterAnimals
        //         obj={"Gecko_Animations.glb"}
        //         position={[0.3, 0, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //       <FloaterAnimals
        //         obj={"Muskrat_Animations.glb"}
        //         position={[0.4, -0.23, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //       <FloaterAnimals
        //         obj={"Taipan_Animations.glb"}
        //         position={[0.4, -0.23, 3.5]}
        //         rotation={[0, 0.2, 0]}
        //         scroll={normalizedScroll}
        //       />
        //     </>
        //   );
        // case 40:
        //   return (
        //     <FloaterAnimals
        //       obj={"Taipan_Animations.glb"}
        //       position={[0.4, -0.23, 3.5]}
        //       rotation={[0, 0.2, 0]}
        //       scroll={normalizedScroll}
        //     />
        //   );
        // case 50:
        //   return (
        //     <FloaterAnimals
        //       obj={"Sparrow_Animations.glb"}
        //       position={[0.4, -0.23, 3.5]}
        //       rotation={[0, 0.2, 0]}
        //       scroll={normalizedScroll}
        //     />
        //   );
        // case 60:
        return (
          <>
            <FloaterAnimals
              obj={"Sparrow_Animations.glb"}
              position={[0.4, -0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Gecko_Animations.glb"}
              position={[0.3, 0, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Muskrat_Animations.glb"}
              position={[0.4, -0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Taipan_Animations.glb"}
              position={[0.4, -0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Pudu_Animations.glb"}
              position={[0.4, -0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Herring_Animations.glb"}
              position={[0.3, 0, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Inkfish_Animations.glb"}
              position={[0.4, -0.23, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
            <FloaterAnimals
              obj={"Colobus_Animations.glb"}
              position={[0.3, 0, 3.5]}
              rotation={[0, 0.2, 0]}
              scroll={normalizedScroll}
            />
          </>
        );
      default:
        return null;
    }
  };

  return <Suspense fallback={<></>}>{getComponent()}</Suspense>;
}
