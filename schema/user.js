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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.registerUserSchema = void 0;
const express_validator_1 = require("express-validator");
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient();
exports.registerUserSchema = [
    (0, express_validator_1.body)("username")
        .trim()
        .isString()
        .isLength({ min: 3, max: 20 })
        .withMessage("Username must be between 3 and 20 characters")
        .notEmpty()
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield Prisma.user.findFirst({
            where: {
                username: {
                    equals: value,
                    mode: "insensitive",
                },
            },
        });
        if (user)
            throw new Error("Username already taken");
    })),
    (0, express_validator_1.body)("email")
        .trim()
        .toLowerCase()
        .isEmail()
        .withMessage("Valid email required")
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield Prisma.user.findFirst({
            where: { email: value },
        });
        if (user)
            throw new Error("Email already registered");
    })),
    (0, express_validator_1.body)("fullName")
        .trim()
        .isString()
        .isLength({ min: 2, max: 50 })
        .withMessage("Full name must be 2-50 characters"),
    (0, express_validator_1.body)("phone_number")
        .trim()
        .isMobilePhone("any")
        .withMessage("Invalid phone number format"),
    (0, express_validator_1.body)("sex")
        .isIn(["male", "female", "other"])
        .withMessage("Invalid gender selection"),
    (0, express_validator_1.body)("password")
        .isString()
        .isLength({ min: 2, max: 64 })
        .withMessage("Password must be 2+ characters at least"),
    (0, express_validator_1.body)("comfirmPassword")
        .custom((value, { req }) => value === req.body.password)
        .withMessage("Passwords do not match"),
];
exports.loginUserSchema = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email must be a valid email address"),
    (0, express_validator_1.body)("password")
        .isString()
        .isLength({ min: 2, max: 64 })
        .withMessage("Password must be between 2 and 64 characters.")
        .notEmpty(),
];
