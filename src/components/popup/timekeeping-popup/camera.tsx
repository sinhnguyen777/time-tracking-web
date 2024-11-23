import { Button } from "antd";
import Image from "next/image";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const CameraInput: React.FC<any> = ({ value = null, onChange }) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(value);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const askForCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setHasPermission(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      setHasPermission(false);
      console.log(error);
    }
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      onChange(imageSrc);
    }
  }, [webcamRef, onChange]);

  const retake = () => {
    setCapturedImage(null);
    onChange(null);
  };

  return (
    <div>
      {hasPermission && capturedImage ? (
        <div>
          <Image
            src={capturedImage}
            height={500}
            width={500}
            alt="Captured"
            className="w-3/4 mx-auto -scale-x-100"
          />
          <div className="flex justify-center mt-2">
            <Button onClick={retake} className="text-red-500 border-red-500">
              Chụp ảnh lại
            </Button>
          </div>
        </div>
      ) : hasPermission ? (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="75%"
            height="auto"
            className="mx-auto -scale-x-100"
          />
          <div className="flex justify-center mt-2">
            <Button type="primary" onClick={capture}>
              Chụp ảnh
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div> Bạn phải cấp quyền truy cập camera để có thể chụp hình. </div>
          <Button onClick={askForCameraPermission}>
            Request Camera Permission
          </Button>
        </div>
      )}
    </div>
  );
};

export default CameraInput;
