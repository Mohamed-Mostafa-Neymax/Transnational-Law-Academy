import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ContributorItem: React.FC<{ imagePath: string; titleShort: string; description: string; slug: string; }> = ({ imagePath, titleShort, description, slug }) => {
    return (
        <div className='flex flex-col items-center md:flex-row md:items-start gap-5 p-6 rounded-3xl bg-[#F7F7F7] max-w-[555px]'>
            <div className="w-48 md:w-auto">
                <Image
                    src={imagePath}
                    width={300}
                    height={300}
                    alt="A member of Transnational Law Academy"
                    className='rounded-full' />
            </div>
            <div>
                <h1 className='text-lg text-center md:text-start 2xl:text-2xl font-bold text-[#6F85F6] mb-3 2xl:mb-5'>{titleShort}</h1>
                <p className='text-lg mb-3 2xl:mb-5'>{description.substring(0, 100)}...</p>
                <Link href={`/our-people/${slug}`} className='text-lg xl:text-xl text-[#485fd3] font-bold'>
                    <span>Read more</span> <FaArrowRightLong className='inline' />
                </Link>
            </div>
        </div>
    )
}

export default ContributorItem;


