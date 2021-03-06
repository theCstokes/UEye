import { BaseDataModel } from "App/Data/Models/Core/BaseDataModel";
import JointType from "App/Data/Models/Joint/JointType";

export default class PositionAnalysisCriteria extends BaseDataModel {
	public id?: number|string;

	public userID?: number

	public jointTypeID?: number

	public details?: Partial<PositionAnalysisCriteriaDetails>;
}

class PositionAnalysisCriteriaDetails {
	public jointType: JointType;
}