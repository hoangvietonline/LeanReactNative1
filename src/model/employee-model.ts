export class EmployResponse {
  data: EmployeeData | null;

  constructor(data: Partial<EmployResponse>) {
    this.data = data.data ? new EmployeeData(data.data) : null;
  }
}

export class EmployeeData {
  items: EmployeeModel[];

  constructor(data: Partial<EmployeeData>) {
    this.items = data.items
      ? data.items.map((qa: any) => new EmployeeModel(qa))
      : [];
  }
}


export class EmployeeModel {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;

  constructor(data: Partial<EmployeeModel>) {
    this.id = data.id || 0;
    this.name = data.name || "";
    this.email = data.email || "";
    this.gender = data.gender || "";
    this.status = data.status || "";
  }

  static map(dataArray: Array<Partial<EmployeeModel>>): EmployeeModel[] {
    return dataArray.map(data => new EmployeeModel(data));

  }
}
