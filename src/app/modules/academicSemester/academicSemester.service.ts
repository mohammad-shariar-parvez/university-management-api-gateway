import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService as HttpService } from "../../../shared/axios";

const createSemester = async (req: Request): Promise<IGenericResponse> => {
	const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
		headers: {
			Authorization: req.headers.authorization
		}
	});
	return response;
};
const getAllSemesters = async (req: Request): Promise<IGenericResponse> => {
	// console.log("req", req);
	const response: IGenericResponse = await HttpService.get('/academic-semesters', {
		params: req.query,
		headers: {
			Authorization: req.headers.authorization
		}
	});
	return response;
};
const updateSemester = async (req: Request): Promise<IGenericResponse> => {
	const { id } = req.params;
	const response: IGenericResponse = await HttpService.patch(`/academic-semesters/${id}`, req.body, {
		headers: {
			Authorization: req.headers.authorization
		}
	});
	return response;
};

const getSingleSemester = async (req: Request): Promise<IGenericResponse> => {
	const { id } = req.params;
	const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, {
		headers: {
			Authorization: req.headers.authorization
		}
	});
	return response;
};

const deleteSemester = async (req: Request): Promise<IGenericResponse> => {
	const { id } = req.params;
	const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
		headers: {
			Authorization: req.headers.authorization
		}
	});
	return response;
};
export const AcademicSemesterService = {
	createSemester,
	getAllSemesters,
	getSingleSemester,
	updateSemester,
	deleteSemester,

};