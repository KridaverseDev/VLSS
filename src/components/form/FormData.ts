export interface FormData {
  applicationName: string;
  occupation: string;
  fatherOrHusbandName: string;
  dob: Date;
  education: string;
  bloodGroup: string;
  introducerDetails: string;
  memberResAddress: string;
  resTaluk: string;
  resDistrict: string;
  resPincode: string;
  memberPerAddress: string;
  perTaluk: string;
  perDistrict: string;
  perPincode: string;
  familyDetails: string;
  phoneNumber: string;
  aadharNumber: string;
  emailId: string;
  membershipFee: string;
  amountPaidInCash: string;
  utrNumber: string;
}

const initialFormData: FormData = {
  applicationName: "",
  occupation: "",
  fatherOrHusbandName: "",
  dob: new Date(),
  education: "",
  bloodGroup: "",
  introducerDetails: "",
  memberResAddress: "",
  resTaluk: "",
  resDistrict: "",
  resPincode: "",
  memberPerAddress: "",
  perTaluk: "",
  perDistrict: "",
  perPincode: "",
  familyDetails: "",
  phoneNumber: "",
  aadharNumber: "",
  emailId: "",
  membershipFee: "1000",
  amountPaidInCash: "",
  utrNumber: "",
};

export default initialFormData;
