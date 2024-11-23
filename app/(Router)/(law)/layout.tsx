'use client'


export default function layout({ children }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" max-w-4xl p-2">
                {children}
            </div>
        </div>
    )
}