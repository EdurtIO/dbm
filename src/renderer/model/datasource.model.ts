import { DatabaseEnum } from "@renderer/enum/database.enum";

export class DatasourceModel {
  id: number;
  name: string;
  alias: string;
  host: string;
  port: number = 8123;
  url: string;
  username: string;
  password: string;
  status = false;
  message: string;
  delivery = false;
  protocol = 'HTTP';
  sshHost: string;
  sshPort: number = 22;
  sshUsername: string = 'root';
  sshPassword: string = '123456';
  type: DatabaseEnum;
  version: string;
  maxTotal = 0;
  created: Date;
  updated: Date;
  validate: boolean = false;
  authorization: boolean = false;
  database: string;
  catalog: string;
}
