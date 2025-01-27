
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'rgba(192, 226, 24, 0.3)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [ require("daisyui")],
  daisyui: {
    themes: [
      {
/*         light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#C0E218",
          "secondary": "#3f1de7",
          "accent": "#00ffff",
          "neutral": "#9dba0d",
          "base-100": "#ffffff",
          "base-200": "#EDEDED",
          "base-content": "#1d1d1d",
          "info": "#3f1de7",
          "success": "#00ff00",
          "warning": "#F37121",
          "error": "#ff0000",
          "--rounded-box": "0.5rem", //边框半径圆角盒实用类，用于卡片等大型盒子
          "--rounded-btn": "0.5rem",//border-radius圆角btn实用程序类，用于按钮和类似元素
          "--rounded-badge": "0.5rem", //边框半径圆形徽章实用类，用于徽章及类似产品
          "--animation-btn": "0.25s", //单击按钮时的动画持续时间
          "--animation-input": "0.2s", //复选框、切换、单选等输入的动画持续时间
          "--btn-focus-scale": "0.95", //聚焦按钮时的缩放变换
          "--border-btn": "1px", //聚焦按钮时的缩放变换
          "--tab-border": "1px", //选项卡的边框宽度
          "--tab-radius": "0.5rem", //选项卡的边界半径
        },
 */
        mytheme: {
          ...require("daisyui/src/theming/themes")["black"],
          "primary": "#C0E218",
          "secondary": "#3f1de7",
          "accent": "#00ffff",
          "neutral": "#C0E218",
          "base-100": "#000000",
          "base-200": "#111111",
          "base-content": "#ffffffe3",
          "info": "#C0E218",
          "success": "#00ff00",
          "warning": "#F37121",
          "error": "#ff0000",
          "--rounded-box": "1rem", //边框半径圆角盒实用类，用于卡片等大型盒子
          "--rounded-btn": "5rem",//border-radius圆角btn实用程序类，用于按钮和类似元素
          "--rounded-badge": "0.5rem", //边框半径圆形徽章实用类，用于徽章及类似产品
          "--animation-btn": "0.25s", //单击按钮时的动画持续时间
          "--animation-input": "0.2s", //复选框、切换、单选等输入的动画持续时间
          "--btn-focus-scale": "0.95", //聚焦按钮时的缩放变换
          "--border-btn": "1px", //聚焦按钮时的缩放变换
          "--tab-border": "1px", //选项卡的边框宽度
          "--tab-radius": "1rem", //选项卡的边界半径 
        }
      }
    ],//false:仅亮+暗|true:所有主题|array:像这样的特定主题[“亮”、“暗”、“纸杯蛋糕”]
    darkTheme: "dark", //暗模式的一个包含主题的名称
    base: true, // 默认为根元素应用背景色和前景色
    styled: true, // 包括所有组件的daisyUI颜色和设计决策
    utils: true, //添加响应和修饰符实用程序类
    prefix: "", //用于daisyUI类名的前缀（组件、修饰符和响应类名。不是颜色）
    logs: false, // 在构建CSS时在控制台中显示有关daisyUI版本和使用的配置的信息
    themeRoot: ":root", // 接收主题颜色CSS变量的元素
  },
};
export default config;
