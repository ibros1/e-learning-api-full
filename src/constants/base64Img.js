"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveBase64Image = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const saveBase64Image = (base64, filename) => {
    const matches = base64.match(/^data:.+\/(.+);base64,(.*)$/);
    const ext = matches === null || matches === void 0 ? void 0 : matches[1];
    const data = matches === null || matches === void 0 ? void 0 : matches[2];
    if (!ext || !data) {
        throw new Error("Invalid base64 image data");
    }
    const buffer = Buffer.from(data, "base64");
    const uploadDir = path_1.default.join(__dirname, "../../uploads");
    if (!fs_1.default.existsSync(uploadDir)) {
        fs_1.default.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path_1.default.join(uploadDir, `${filename}.${ext}`);
    fs_1.default.writeFileSync(filePath, buffer);
    return `${filename}.${ext}`;
};
exports.saveBase64Image = saveBase64Image;
