'use client'
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes"

export default function ThemeSwap() {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <aside className="items-center grid-flow-col ">
                <label className="swap swap-rotate justify-center btn  btn-square btn-sm btn-ghost">
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    <RiSunLine className="swap-on fill-current w-7 h-7" onClick={() => setTheme('dark')} />

                    <RiMoonLine className="swap-off fill-current w-7 h-7" onClick={() => setTheme('light')} />

                </label>
            </aside>


{/*             <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="btn  btn-square btn-ghost rounded-full">
                {theme === 'dark' ?
                    (<RiSunLine size={24} />)
                    : (<RiMoonLine size={24} />)}
            </div> */}
        </div>
    )
}