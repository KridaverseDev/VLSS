export interface FormData {
  SlNumber: string;
  applicationName: string;
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
}

const initialFormData: FormData = {
  SlNumber: "",
  applicationName: "",
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
};

export default initialFormData;
