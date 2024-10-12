import { Reference } from "@/constants/post.constants"
import Link from "next/link"

export interface ReferenceProps{
    references: Reference
}

export const References: React.FC<ReferenceProps > = ({ references }): JSX.Element => {
    return(
        <div className="text-xs my-2 border border-[#0000001a] p-1 rounded-sm bg-[#00000008]">
            <Link href={references.link}>{references.title}</Link>
        </div>
    )
}