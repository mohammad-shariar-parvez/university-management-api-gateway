import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const createAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
	// console.log("req", req);

	const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
		headers: {
			Authorization: req.headers.authorization
		}
	});


	return response;
};

export const AcademicSemesterService = {
	createAcademicSemester
};