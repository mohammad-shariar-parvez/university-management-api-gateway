import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const getAllFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getSingleFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  createFaculty
};
