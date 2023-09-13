export const verbose = true;
export const setupFilesAfterEnv = ["<rootDir>src/setupTests.ts"];
export const moduleFileExtensions = ["js", "jsx", "ts", "tsx"];
export const moduleDirectories = ["node_modules", "src"];
export const moduleNameMapper = {
    "\\.(css|less|scss)$": "identity-obj-proxy"
};
export const transform = {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file.js",
};