import Image from "next/image";
import icon from "@/app/icon.png";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="relative animate-breathe">
        <Image
          src={icon}
          loading="eager"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
};

export default SplashScreen;