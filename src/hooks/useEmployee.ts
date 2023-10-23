import axios from 'axios';
import { EmployeeModel, EmployResponse } from "../model/employee-model";
import { useQuery } from "@tanstack/react-query";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { QUERY_KEY } from "../constant/enum";

const fetchEmployee = async () => {
  const {data} = await axios?.get("https://gorest.co.in/public/v2/users")
  console.log(data)
  // let responseModel = new EmployResponse(data)
  return EmployeeModel.map(data || []);
};

const useFetchEmployee = () => useQuery([QUERY_KEY.EMPLOYEE], fetchEmployee);

export default useFetchEmployee;
