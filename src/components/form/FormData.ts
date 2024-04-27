export interface FormData {
  applicationName: string;
  occupation: string;
  fatherOrHusbandName: string;
  dob: Date;
  introducerDetails: string;
  memberResAddress: string;
  resTaluk: string;
  resDistrict: string;
  memberPerAddress: string;
  perTaluk: string;
  perDistrict: string;
  familyDetails: string;
  phoneNumber: string;
  aadharNumber: string;
  membershipFee: string;
  amountPaidInCash: string;
  utrNumber: string;
}

const initialFormData: FormData = {
  applicationName: "",
  occupation: "",
  fatherOrHusbandName: "",
  dob: new Date(),
  introducerDetails: "",
  memberResAddress: "",
  resTaluk: "",
  resDistrict: "",
  memberPerAddress: "",
  perTaluk: "",
  perDistrict: "",
  familyDetails: "",
  phoneNumber: "",
  aadharNumber: "",
  membershipFee: "",
  amountPaidInCash: "",
  utrNumber: "",
};

export default initialFormData;
