// import React, { useState, ChangeEvent, useEffect } from "react";
// import ReactCrop, { Crop } from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
// import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
// import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
// import { IoMdUndo, IoMdRedo, IoIosImage } from "react-icons/io";
// import storeData from "@/utils/helperData";
// import Typography from "@/design-systems/Atoms/Typography";
// import Image from "next/image";
// import { ImageEditorTemplateProps, State } from "./interface";

// const ImageEditorTemplate: React.FC<ImageEditorTemplateProps> = ({
//   files,
//   setSavedImg,
// }) => {
//   const [details, setDetails] = useState<HTMLImageElement | null>(null);
//   const [crop, setCrop] = useState<Crop | undefined>(undefined);
//   const [editedImage, setEditedImage] = useState<string | null>(null);
//   const [state, setState] = useState<State>({
//     image: "",
//     rotate: 0,
//     vartical: 1,
//     horizental: 1,
//   });

//   //   useEffect(() => {
//   //     if (files && files.length > 0) {
//   //       const reader = new FileReader();
//   //       reader.onload = () => {
//   //         const updatedState = {
//   //           image: reader.result as string,
//   //           rotate: 0,
//   //           vartical: 1,
//   //           horizental: 1,
//   //         };
//   //         setState(updatedState);
//   //         storeData.insert(updatedState);
//   //       };
//   //       reader.readAsDataURL(files[0]);
//   //     }
//   //   }, [files]);

//   console.log("fiels", files);
//   const leftRotate = (): void => {
//     const updatedState = {
//       ...state,
//       rotate: state.rotate - 90,
//     };
//     setState(updatedState);
//     storeData.insert(updatedState);
//   };

//   const rightRotate = (): void => {
//     const updatedState = {
//       ...state,
//       rotate: state.rotate + 90,
//     };
//     setState(updatedState);
//     storeData.insert(updatedState);
//   };

//   const varticalFlip = (): void => {
//     const updatedState = {
//       ...state,
//       vartical: state.vartical === 1 ? -1 : 1,
//     };
//     setState(updatedState);
//     storeData.insert(updatedState);
//   };

//   const horizentalFlip = (): void => {
//     const updatedState = {
//       ...state,
//       horizental: state.horizental === 1 ? -1 : 1,
//     };
//     setState(updatedState);
//     storeData.insert(updatedState);
//   };

//   const imageHandle = (e: ChangeEvent<HTMLInputElement>): void => {
//     if (e.target.files && e.target.files.length !== 0) {
//       const reader = new FileReader();

//       reader.onload = () => {
//         const updatedState = {
//           image: reader.result as string,
//           rotate: 0,
//           vartical: 1,
//           horizental: 1,
//         };
//         setState(updatedState);
//         storeData.insert(updatedState);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const imageCrop = (): void => {
//     if (!details || !crop) return;

//     const canvas = document.createElement("canvas");
//     const scaleX = details.naturalWidth / details.width;
//     const scaleY = details.naturalHeight / details.height;
//     canvas.width = crop.width!;
//     canvas.height = crop.height!;
//     const ctx = canvas.getContext("2d");

//     ctx?.drawImage(
//       details,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width!,
//       crop.height!
//     );

//     const base64Url = canvas.toDataURL("image/jpg");

//     setState({
//       ...state,
//       image: base64Url,
//     });
//   };

//   const saveImage = (): void => {
//     if (!details) return;

//     const canvas = document.createElement("canvas");
//     canvas.width = details.naturalHeight;
//     canvas.height = details.naturalHeight;
//     const ctx = canvas.getContext("2d");

//     if (ctx) {
//       ctx.translate(canvas.width / 2, canvas.height / 2);
//       ctx.rotate((state.rotate * Math.PI) / 180);
//       ctx.scale(state.vartical, state.horizental);

//       ctx.drawImage(
//         details,
//         -canvas.width / 2,
//         -canvas.height / 2,
//         canvas.width,
//         canvas.height
//       );

//       const editedImageUrl = canvas.toDataURL();
//       setSavedImg(editedImageUrl);
//     }
//   };

//   return (
//     <div className="bg-white flex items-center shadow-lg justify-center p-4 w-full max-w-[400px]">
//       <div>
//         <div className="flex flex-col items-center justify-center">
//           <div className="my-2 flex justify-start w-full">
//             <Typography className="font-bold">Image crop & Rotate</Typography>
//           </div>

//           <div className="bg-[#f0f0f0] h-[300px] w-[370px] max-w-[370px] max-h-[300px] flex items-center justify-center">
//             {state.image ? (
//               <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
//                 <Image
//                   onLoad={(e) => setDetails(e.currentTarget)}
//                   style={{
//                     transform: `rotate(${state.rotate}deg) scale(${state.vartical},${state.horizental})`,
//                   }}
//                   src={state.image}
//                   // src={files[0]?.preview as string}
//                   alt=""
//                   width={100}
//                   height={100}
//                   className="h-auto w-auto !max-w-[370px] !max-h-[300px]"
//                 />
//               </ReactCrop>
//             ) : (
//               <div className="flex flex-col items-center">
//                 <IoIosImage />
//               </div>
//             )}
//           </div>

//           <div className="flex mt-4 w-full">
//             <div className="flex items-center w-full">
//               <div
//                 onClick={leftRotate}
//                 className="border border-[#f0f2f2] py-1 px-2 cursor-pointer"
//               >
//                 <GrRotateLeft />
//               </div>
//               <div
//                 onClick={rightRotate}
//                 className="border border-[#f0f2f2] py-1 px-2 cursor-pointer"
//               >
//                 <GrRotateRight />
//               </div>
//               <div
//                 onClick={varticalFlip}
//                 className="border border-[#f0f2f2] py-1 px-2 cursor-pointer"
//               >
//                 <CgMergeVertical />
//               </div>
//               <div
//                 onClick={horizentalFlip}
//                 className="border border-[#f0f2f2] py-1 px-2 cursor-pointer"
//               >
//                 <CgMergeHorizontal />
//               </div>
//             </div>
//             <div className="flex gap-2  ">
//               {crop && (
//                 <button
//                   onClick={imageCrop}
//                   className="bg-[#03cafc] rounded py-1 text-white px-4"
//                 >
//                   Crop
//                 </button>
//               )}
//               <button
//                 onClick={saveImage}
//                 className="bg-[#03cafc] rounded py-1 text-white px-4"
//               >
//                 Save
//               </button>
//             </div>
//           </div>

//           <div className="">
//             <label htmlFor="choose">Choose Image</label>
//             <input onChange={imageHandle} type="file" id="choose" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageEditorTemplate;
