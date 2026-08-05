module.exports = {
    env: {
        // 是否使用该环境的全局变量
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        // 继承现成的规则包，不用从零手写上千条校验
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parser: "vue-eslint-parser", // 专门解析 .vue 单文件组件
    parserOptions: {
        parser: "@typescript-eslint/parser", //script 内部代码使用 TS 解析器
        ecmaVersion: "latest" //支持最新版 ECMAScript 语法
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        // 禁止使用any，组件库类型严格
        "@typescript-eslint/no-explicit-any": "warn",
        // 关闭必须导出默认
        "import/no-default-export": "off"
    }
}
