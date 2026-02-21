import Image from "next/image";
import Text from "@/public/GALLERY.svg";
import Line from "@/public/Vector 3.png"
const GalleryHeader = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-1 w-full">
            <Image
                className=" col-start-1 row-start-1 ml-70 mt-50"
                src={Text}
                alt="Gallery"
            />
            <Image
                className=" col-start-1 row-start-1 mt-20 ml-220 w-2/4"
                src={Line}
                alt="line design"
            />
        </div>
    );
};

export default GalleryHeader