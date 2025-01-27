'use client'

import { useChangeLocale } from "@/locales/client";
import { RiTranslate } from "react-icons/ri";

function LocaleSwap() {
    // 定义可用的语言和当前选中的语言
    const changeLocale = useChangeLocale()
 


    return (
        <div className="flex flex-col md:flex-row gap-2 text-lg">
            <button onClick={() => changeLocale('en')} className={`min-w-24 md:min-w-32 btn  btn-outline `}  >English</button>
            <button onClick={() => changeLocale('zh')} className={`min-w-24 md:min-w-32 btn  btn-outline `}  >简体中文</button>
        </div>
    );
}




export default function LocaleModal() {
    const openModal = () => {
        const dialog = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (dialog) {
            dialog.showModal(); // 调用 showModal 方法
        }
    };

    return (
        <div>
            {/* 打开 modal 的按钮 */}
            <button className="btn btn-square btn-ghost rounded-full" onClick={openModal}>
                <RiTranslate size={24} />
            </button>

            {/* 模态框 */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box border-primary">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* 语言切换部分 */}
                    <div className="py-4">
                        <LocaleSwap />
                    </div>
                </div>

                {/* 关闭模态框的按钮 */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}
