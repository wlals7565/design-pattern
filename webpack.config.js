const path = require("path");
module.exports = {
    mode: "development",
    //entry: "./src/index.ts",
    //entry: "./src/iterator/index.ts",
    //entry: "./src/strategy/index.ts",
    //entry: "./src/template/index.ts",
    //entry: "./src/adapter/index.ts",
    //entry: "./src/bridge/index.ts",
    //entry: "./src/decorator/index.ts",
    //entry: "./src/singleton/index.ts",
    //entry: "./src/flyweight/index.ts",
    //entry: "./src/composite/index.ts",
    //entry: "./src/factory/index.ts",
    //entry: "./src/observer/index.ts",
    //entry: "./src/mediator/index.ts",
    //entry: "./src/memento/index.ts",
    //entry: "./src/proxy/index.ts",
    //entry: "./src/chain-of-responsibility/index.ts",
    //entry: "./src/prototype/index.ts",
    //entry: "./src/facade/index.ts",
    //entry: "./src/builder1/index.ts",
    //entry: "./src/builder2/index.ts",
    //entry: "./src/command/index.ts",
    //entry: "./src/abstract-factory/index.ts",
    entry: "./src/state/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
}