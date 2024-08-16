// "use client";
// import React, { useState, useMemo } from "react";
// import Image from "next/image";
// import { FaUpload } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";
// import { useToast } from "@/hooks/useToast";
// import { CustomFile } from "./interface";
// import Typography from "../../Atoms/Typography";
// const HomePageTemplate: React.FC = () => {
//   const [file, setFile] = useState<CustomFile | undefined>();

//   const { warningToast } = useToast();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;

//     if (files && files.length > 0) {
//       const selectedFile = files[0];

//       if (selectedFile) {
//         const fileWithPreview = Object.assign(selectedFile, {
//           preview: URL.createObjectURL(selectedFile),
//         });
//         console.log("file", fileWithPreview);
//         setFile(fileWithPreview);
//       }
//     } else {
//     }
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const selectedFile = event.dataTransfer.files?.[0];
//     console.log("image", selectedFile);
//     if (selectedFile) {
//       const fileWithPreview = Object.assign(selectedFile, {
//         preview: URL.createObjectURL(selectedFile),
//       });

//       setFile(fileWithPreview);
//       setFile(fileWithPreview);
//     } else {
//     }
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleClose = () => {
//     setFile(undefined);
//   };

//   return (
//     <div className="container">
//       <div className="font-Inter mt-12 w-full">
//         <Typography className="text-xl font-medium text-center">
//           Upload Image
//         </Typography>

//         <div className="mt-8 mb-12 !w-full grid grid-cols-1">
//           <div className="w-full flex">
//             <div
//               className="relative py-4 cursor-pointer border rounded-sm border-dashed border-[#12121252] dark:border-white flex items-center gap-2 flex-col justify-center !w-full transition-all ease-in-out duration-300 hover:bg-lightGray hover:border-solid"
//               onClick={() =>
//                 document.getElementById(!file ? "file-upload" : "")?.click()
//               }
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//             >
//               <input
//                 type="file"
//                 accept=".jpg,.png,.gif,.svg,.mp4"
//                 style={{ display: "none" }}
//                 id="file-upload"
//                 onChange={handleFileChange}
//               />

//               {!file ? (
//                 <>
//                   <FaUpload />

//                   <Typography className="font-medium">
//                     Drag and drop media
//                   </Typography>
//                   <Typography className="text-[#03a5fc]">
//                     Browse files
//                   </Typography>
//                   <Typography className="text-md">Max size:50MB</Typography>
//                   <Typography className="text-md">JPG,PNG,GIF,SVG</Typography>
//                 </>
//               ) : (
//                 file && (
//                   <div className="w-full h-full">
//                     <GrClose
//                       className="absolute right-2 top-2 z-10"
//                       onClick={handleClose}
//                     />
//                     {/* <RiDeleteBin6Line className='absolute right-0 top-0 z-10' /> */}

//                     <Image
//                       src={file?.preview as string}
//                       alt="Preview"
//                       height={100}
//                       width={100}
//                       className="rounded-sm hover:opacity-20 max-h-full h-full w-full"
//                     />
//                   </div>
//                 )
//               )}

//               {/* {errors.file_upload && touched.file_upload && (
//                 <p className="absolute bottom-[-25px] text-error-800">
//                   A File is required
//                 </p>
//               )} */}
//             </div>
//           </div>

//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageTemplate;

//   "use client";
// import React, { useState, useCallback } from "react";
// import Image from "next/image";
// import { FaUpload } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";
// import { useToast } from "@/hooks/useToast";
// import { CustomFile } from "./interface";
// import Typography from "../../Atoms/Typography";
// import Cropper from "react-easy-crop";
// import getCroppedImg from "@/utils/cropImage"; // Utility function to get the cropped image
// import { Area, Point } from "react-easy-crop";
// import Modal from "@/design-systems/Atoms/Modal";
// import Button from "@/design-systems/Atoms/Button";

// const HomePageTemplate: React.FC = () => {
//   const [files, setFiles] = useState<CustomFile[]>([]);
//   const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
//   const [editIndex, setEditIndex] = useState<number | null>(null);
//   const [modalOpen, setModalOpen] = useState<boolean>(false); // State to control modal visibility

//   const { warningToast } = useToast();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = Array.from(event.target.files || []);
//     const filesWithPreview = selectedFiles.map((file) =>
//       Object.assign(file, { preview: URL.createObjectURL(file) })
//     );
//     setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
//     setModalOpen(true);
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const selectedFiles = Array.from(event.dataTransfer.files || []);
//     const filesWithPreview = selectedFiles.map((file) =>
//       Object.assign(file, { preview: URL.createObjectURL(file) })
//     );
//     setModalOpen(true);
//     setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);

//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleClose = (index: number) => {
//     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   const handleCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleSaveCrop = useCallback(async () => {
//     if (editIndex !== null && croppedAreaPixels) {
//       try {
//         const croppedImage = await getCroppedImg(
//           files[editIndex].preview,
//           croppedAreaPixels
//         );
//         setFiles((prevFiles) =>
//           prevFiles.map((file, index) =>
//             index === editIndex ? { ...file, preview: croppedImage } : file
//           )
//         );
//         setEditIndex(null);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }, [editIndex, croppedAreaPixels, files]);

//   const handleEdit = (index: number) => {
//     setEditIndex(index);
//   };

//   const handleCloseModal = () => {
//     setFiles([]);
//     setModalOpen(false);
//   };

//   const handleSelectImage = (index: number) => {
//     setSelectedImageIndex(index);
//   };

//   return (
//     <div className="container">
//       <div className="font-Inter mt-12 w-full">
//         <Typography className="text-xl font-medium text-center">
//           Upload Image
//         </Typography>

//         <div className="mt-8 mb-12 !w-full grid grid-cols-1">
//           <div className="w-full flex">
//             <div
//               className="relative py-4 cursor-pointer border rounded-sm border-dashed border-[#12121252] dark:border-white flex items-center gap-2 flex-col justify-center !w-full transition-all ease-in-out duration-300 hover:bg-lightGray hover:border-solid"
//               onClick={() => document.getElementById("file-upload")?.click()}
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//             >
//               <input
//                 type="file"
//                 accept=".jpg,.png,.gif,.svg,.mp4"
//                 style={{ display: "none" }}
//                 id="file-upload"
//                 onChange={handleFileChange}
//                 multiple
//               />

//               {/* {!files.length ? ( */}
//                 <>
//                   <FaUpload />
//                   <Typography className="font-medium">
//                     Drop pictures here or
//                   </Typography>
//                   <Typography className="text-[#03a5fc]">
//                    Upload pictures
//                   </Typography>
//                   <Typography className="text-md">Max size:7MB</Typography>
//                   <Typography className="text-md">JPG,GIF or PNG, minimum size: 1000px width, 800px hone</Typography>
//                 </>
//               {/* ) : (
//                 files.map((file, index) => (
//                   <div key={index} className="relative">
//                     <GrClose
//                       className="absolute right-2 top-2 z-10"
//                       onClick={() => handleClose(index)}
//                     />
//                     <Image
//                       src={file.preview as string}
//                       alt="Preview"
//                       height={100}
//                       width={100}
//                       className="rounded-sm max-h-full h-full w-full cursor-pointer"
//                       onClick={() => handleEdit(index)}
//                     />
//                   </div>
//                 ))
//               )} */}
//             </div>
//           </div>

//           <div></div>
//         </div>

//         {editIndex !== null && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-white p-4 rounded shadow-lg">
//               <Cropper
//                 image={files[editIndex].preview}
//                 crop={crop}
//                 zoom={zoom}
//                 aspect={1}
//                 onCropChange={setCrop}
//                 onCropComplete={handleCropComplete}
//                 onZoomChange={setZoom}
//               />
//               <button onClick={handleSaveCrop} className="text-black">Save</button>
//               <button onClick={() => setEditIndex(null)} className="text-black">Cancel</button>
//             </div>
//           </div>
//         )}
//           {/* Modal for displaying selected images */}
//           <Modal open={modalOpen} handleClose={handleCloseModal} >
//           <div>
//             {files.length === 1 ? (
//               // <img src={files[0]?.preview} alt="Selected" />
//               <Image
//               src={files[0]?.preview as string}
//               alt="Preview"
//               height={100}
//               width={100}
//               className="max-h-[400px] h-auto max-w-[1000px] w-auto cursor-pointer"
//               // onClick={() => handleEdit(index)}
//             />
//             ) : (
//               <>
//                 <div>
//                   {/* <img src={files[0].preview} alt="Selected" /> */}

//                   <Image
//                       // src={files[0]?.preview as string}
//                       src={files[selectedImageIndex]?.preview as string}
//                       alt="Preview"
//                       height={100}
//                       width={100}
//                       className="max-h-[400px] h-auto max-w-[1000px] w-[1000px] cursor-pointer"
//                       // onClick={() => handleEdit(index)}
//                     />
//                 </div>
//                 <div className="flex mt-4 space-x-3 gap-3 flex-wrap mt-8">
//                   {files.map((file, index) => (
//                     // <img key={index} src={file.preview} alt={`Selected ${index}`} className="w-20 h-20 object-cover" />

//                     <Image
//                       src={file.preview as string}
//                       alt="Preview"
//                       height={100}
//                       width={100}
//                       // className="border shadow-lg h-auto max-h-[100px] w-auto max-w-[15%] cursor-pointer"
//                       // onClick={() => handleEdit(index)}
//                       className={`border shadow-lg h-auto max-h-[100px] w-auto max-w-[15%] cursor-pointer ${
//                         selectedImageIndex === index ? "border-[#09e677] border" : ""
//                       }`}
//                       onClick={() => handleSelectImage(index)}
//                     />

//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="w-full flex justify-end pr-5 mb-4 mt-5">
//             <Button className="bg-[#54d18e] text-white px-4 py-1 rounded">save</Button>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default HomePageTemplate;

// "use client";
// import React, { useState, useCallback } from "react";
// import Image from "next/image";
// import { FaUpload } from "react-icons/fa";
// import { GrClose } from "react-icons/gr";
// import { useToast } from "@/hooks/useToast";
// import { CustomFile } from "./interface";
// import Typography from "../../Atoms/Typography";
// import Cropper from "react-easy-crop";
// import getCroppedImg from "@/utils/cropImage"; // Utility function to get the cropped image
// import { Area } from "react-easy-crop";
// import Modal from "@/design-systems/Atoms/Modal";
// import Button from "@/design-systems/Atoms/Button";
// import { ReactPhotoEditor } from 'react-photo-editor'
// import 'react-photo-editor/dist/style.css'
// import { openEditor } from 'react-profile'
// import "react-profile/themes/dark.min.css";

// const HomePageTemplate: React.FC = () => {
//   const [files, setFiles] = useState<CustomFile[]>([]);
//   const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [rotation, setRotation] = useState(0);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
//   const [editIndex, setEditIndex] = useState<number | null>(null);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [showModal, setShowModal] = useState(false)

//   const { warningToast } = useToast();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = Array.from(event.target.files || []);
//     const filesWithPreview = selectedFiles.map((file) =>
//       Object.assign(file, { preview: URL.createObjectURL(file) })
//     );
//     setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
//     setModalOpen(true);
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const selectedFiles = Array.from(event.dataTransfer.files || []);
//     const filesWithPreview = selectedFiles.map((file) =>
//       Object.assign(file, { preview: URL.createObjectURL(file) })
//     );
//     setModalOpen(true);
//     setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleClose = (index: number) => {
//     setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   const handleCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleSaveCrop = useCallback(async () => {
//     if (editIndex !== null && croppedAreaPixels) {
//       try {
//         const croppedImage = await getCroppedImg(
//           files[editIndex].preview,
//           croppedAreaPixels,
//           rotation
//         );
//         setFiles((prevFiles) =>
//           prevFiles.map((file, index) =>
//             index === editIndex ? { ...file, preview: croppedImage } : file
//           )
//         );
//         setEditIndex(null);
//         setRotation(0);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }, [editIndex, croppedAreaPixels, rotation, files]);

//   const handleEdit = (index: number) => {
//     setEditIndex(index);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//     setRotation(0);
//   };

//   const handleSelectImage = (index: number) => {
//     setSelectedImageIndex(index);
//   };

//   const handleCloseModal = () => {
//     setFiles([]);
//     setModalOpen(false);
//   };

//   const rotateLeft = () => {
//     setRotation((prevRotation) => prevRotation - 90);
//   };

//   const rotateRight = () => {
//     setRotation((prevRotation) => prevRotation + 90);
//   };

//    // Save edited image
//    const handleSaveImage = (editedFile: File) => {
//     // setFile(editedFile);
//   };

//   // const setFileData = (e: React.ChangeEvent<HTMLInputElement> | null) => {
//   //   if (e?.target?.files && e.target.files.length > 0) {
//   //     setFile(e.target.files[0])
//   //   }
//   // }

//   const showModalHandler = () => {

//       setShowModal(true)

//   }

//   // Hide modal
//   const hideModal = () => {
//     setShowModal(false)
//   }

//   async function open() {
//     const result = await openEditor({ src: files[selectedImageIndex].preview });
//   }

//   return (
//     <div className="container">
//       <div className="font-Inter mt-12 w-full">
//         <Typography className="text-xl font-medium text-center">
//           Upload Image
//         </Typography>

//         <div className="mt-8 mb-12 !w-full grid grid-cols-1">
//           <div className="w-full flex">
//             <div
//               className="relative py-4 cursor-pointer border rounded-sm border-dashed border-[#12121252] dark:border-white flex items-center gap-2 flex-col justify-center !w-full transition-all ease-in-out duration-300 hover:bg-lightGray hover:border-solid"
//               onClick={() => document.getElementById("file-upload")?.click()}
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//             >
//               <input
//                 type="file"
//                 accept=".jpg,.png,.gif,.svg,.mp4"
//                 style={{ display: "none" }}
//                 id="file-upload"
//                 onChange={handleFileChange}
//                 multiple
//               />
//               <>
//                 <FaUpload />
//                 <Typography className="font-medium">
//                   Drop pictures here or
//                 </Typography>
//                 <Typography className="text-[#03a5fc]">
//                   Upload pictures
//                 </Typography>
//                 <Typography className="text-md">Max size: 7MB</Typography>
//                 <Typography className="text-md">
//                   JPG, GIF or PNG, minimum size: 1000px width, 800px height
//                 </Typography>
//               </>
//             </div>
//           </div>
//         </div>

//         <Modal open={modalOpen} handleClose={handleCloseModal}>
//           <div>
//             {files.length > 0 && (
//               <>
//                 <div className="relative">
//                   <Image
//                     src={files[selectedImageIndex]?.preview as string}
//                     alt="Preview"
//                     height={400}
//                     width={1000}
//                     className="max-h-[400px] h-auto max-w-[1000px] w-auto cursor-pointer"
//                     onClick={() => handleEdit(selectedImageIndex)}
//                   />
//                   <GrClose
//                     className="absolute right-2 top-2 z-10 cursor-pointer"
//                     onClick={() => handleClose(selectedImageIndex)}
//                   />
//                 </div>
//                 <div className="flex mt-4 space-x-3 row-gap-3 flex-wrap">
//                   {files.map((file, index) => (
//                     <Image
//                       key={index}
//                       src={file.preview as string}
//                       alt="Preview"
//                       height={100}
//                       width={100}
//                       className={`border shadow-lg h-auto max-h-[100px] w-auto max-w-[15%] cursor-pointer ${
//                         selectedImageIndex === index ? "border-blue-500" : ""
//                       }`}
//                       onClick={() => handleSelectImage(index)}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="w-full flex justify-end pr-5 mb-4 mt-5">
//             <button className="bg-[#54d18e] text-white px-4 py-1 rounded" onClick={open}>Edit</button>
//           </div>
//         </Modal>

//       {/* <ReactPhotoEditor
//         open={showModal}
//         onClose={hideModal}
//         file={files[selectedImageIndex]}
//         onSaveImage={handleSaveImage}
//         allowFlip={true}
//         allowZoom={true}
//         allowRotate={true}

//       /> */}

// {/* <ReactProfile src="./your-image.png" />; */}

//         {/* {editIndex !== null && (
//           <div className="fixed left-0 top-0 flex items-center justify-center z-[9000]">
//             <div className="bg-white p-4 rounded shadow-lg">
//               <Typography className="text-black">Cropper</Typography>
//               <Cropper
//                 image={files[editIndex]?.preview}
//                 crop={crop}
//                 zoom={zoom}
//                 rotation={rotation}
//                 aspect={1}
//                 onCropChange={setCrop}
//                 onCropComplete={handleCropComplete}
//                 onZoomChange={setZoom}
//               />
//               <div className="flex justify-between mt-4">
//                 <Button className="text-black" onClick={rotateLeft}>
//                   Rotate left
//                 </Button>
//                 <Button className="text-black" onClick={rotateRight}>
//                   Rotate right
//                 </Button>
//               </div>
//               <div className="flex justify-between mt-4">
//                 <Button onClick={handleSaveCrop} className="text-black">Save</Button>
//                 <Button onClick={() => setEditIndex(null)} className="text-black">Cancel</Button>
//               </div>
//             </div>
//           </div>
//         )} */}
//       </div>