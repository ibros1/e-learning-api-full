"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicIdFromUrl = exports.deleteFromCloudinary = exports.courseUpload = exports.userUpload = void 0;
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = __importDefault(require("multer-storage-cloudinary"));
// Configure Cloudinary
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// User upload configuration
const userStorage = new multer_storage_cloudinary_1.default({
    cloudinary: cloudinary_1.v2,
    params: (req, file) => ({
        folder: "e-learning/users",
        public_id: `user-${req.userId || "temp"}-${file.fieldname}-${Date.now()}`,
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 500, crop: "fill", gravity: "face" }],
    }),
});
// Course upload configuration
const courseStorage = new multer_storage_cloudinary_1.default({
    cloudinary: cloudinary_1.v2,
    params: (req, file) => ({
        folder: "e-learning/courses",
        public_id: `course-${Date.now()}-${file.fieldname}`,
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [
            { width: 800, height: 450, crop: "fill", quality: "auto" },
        ],
    }),
});
// Common multer configuration
const createUploadMiddleware = (storage) => (0, multer_1.default)({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        }
        else {
            cb(new Error("Only images are allowed!"));
        }
    },
});
// Export specific upload middlewares
exports.userUpload = createUploadMiddleware(userStorage);
exports.courseUpload = createUploadMiddleware(courseStorage);
// Helper to delete files from Cloudinary
const deleteFromCloudinary = (publicId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (publicId) {
            yield cloudinary_1.v2.uploader.destroy(publicId);
        }
    }
    catch (error) {
        console.error("Error deleting from Cloudinary:", error);
    }
});
exports.deleteFromCloudinary = deleteFromCloudinary;
// Helper to extract public_id from Cloudinary URL
const getPublicIdFromUrl = (url) => {
    if (!url)
        return null;
    const matches = url.match(/upload\/(?:v\d+\/)?([^\.]+)/);
    return matches ? matches[1] : null;
};
exports.getPublicIdFromUrl = getPublicIdFromUrl;
