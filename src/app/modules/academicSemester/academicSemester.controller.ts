import { Request, Response, NextFunction } from "express";
import { AcademicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/response";

const createAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AcademicSemesterService.createAcademicSemester(req);
		console.log("RESPONSE____", result);
		sendResponse(res, result.data);
	} catch (error) {
		next(error);
	}
};

export const AcademicSemesterController = {
	createAcademicSemester
};