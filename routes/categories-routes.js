import express from "express";
import categoryController from "../controllers/categories-controller.js";

const router = express.Router();

router
.route("/")
.get(categoryController.index);