import Image from "next/image";
import Text from "@/public/GALLERY.svg";
import Line from "@/public/Vector 3.png"
const GalleryHeader = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 ">
            <Image
                className="grid col-start-1 row-start-2"
                src={Text}
                alt="Gallery"
            />
            <Image
                className="grid col-span-2 row-start-2 pb-"
                src={Line}
                alt="line design"
            />
        </div>
    );
};

export default GalleryHeader