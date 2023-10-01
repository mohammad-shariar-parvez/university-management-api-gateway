
import { Request, Response, NextFunction } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AcademicDepartmentService.createDepartment(req);
		sendResponse(res, result);
	} catch (error) {
		next(error);
	}
};

const getAllDepartments = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AcademicDepartmentService.getAllDepartments(req);
		sendResponse(res, result);
	} catch (error) {
		next(error);
	}
};

const getSingleDepartment = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AcademicDepartmentService.getSingleDepartment(req);
		sendResponse(res, result);
	} catch (error) {
		next(error);
	}
};

const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AcademicDepartmentService.updateDepartment(req);
		sendResponse(res, result);
	} catch (error) {
		next(error);
	}
};
const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AcademicDepartmentService.deleteDepartment(req);
		sendResponse(res, result);
	} catch (error) {
		next(error);
	}
};

export const AcademicDepartmentController = {
	createDepartment,
	getAllDepartments,
	getSingleDepartment,
	updateDepartment,
	deleteDepartment,
};
