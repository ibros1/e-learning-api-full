"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseSchema = exports.registerCourseSchema = void 0;
const express_validator_1 = require("express-validator");
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient();
exports.registerCourseSchema = [
    (0, express_validator_1.body)("title")
        .isString()
        .isLength({ min: 4, max: 170 })
        .withMessage("The title of the course should be between 4 and 170 characters.")
        .notEmpty(),
];
exports.UpdateCourseSchema = [
    (0, express_validator_1.body)("title")
        .isString()
        .isLength({ min: 4, max: 170 })
        .withMessage("The title of the course should be between 4 and 170 characters.")
        .notEmpty(),
];
