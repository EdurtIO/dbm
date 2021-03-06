import { Injectable } from '@angular/core';
import { RequestModel } from '@renderer/model/request.model';
import { ResponseModel } from '@renderer/model/response.model';
import { BaseService } from '@renderer/services/base.service';
import { HttpService } from '@renderer/services/http.service';
import { StringUtils } from '@renderer/utils/string.utils';
import { SshService } from '@renderer/services/ssh.service';
import { BasicService } from '@renderer/services/system/basic.service';
import { ForwardService } from '@renderer/services/forward.service';
import { FactoryService } from "@renderer/services/factory.service";
import { MySQLService } from "@renderer/services/plugin/mysql.service";
import { PostgresqlService } from "@renderer/services/plugin/postgresql.service";

@Injectable()
export class DatabaseService extends ForwardService implements BaseService {
  constructor(httpService: HttpService,
              factoryService: FactoryService,
              sshService: SshService,
              basicService: BasicService,
              mysqlService: MySQLService,
              postgresqlService: PostgresqlService) {
    super(basicService, factoryService, httpService, sshService, null, mysqlService, postgresqlService);
  }

  getResponse(request: RequestModel, sql?: string): Promise<ResponseModel> {
    return this.forward(request, sql);
  }

  getAll(request: RequestModel): Promise<ResponseModel> {
    const sql = 'SHOW DATABASES';
    return this.getResponse(request, sql);
  }

  getTables(request: RequestModel, database: string): Promise<ResponseModel> {
    const sql = StringUtils.format(this.factoryService.forward(request.config.type).showTableWithSize, [database]);
    return this.getResponse(request, sql);
  }

  getDatabase(request: RequestModel, database: string): Promise<ResponseModel> {
    const sql = StringUtils.format(`
      SELECT name,
             engine,
             uuid,
             if(upperUTF8(engine) == 'ATOMIC', 1, 0) AS isSupport
      FROM system.databases
      WHERE name = '{0}'`, [database]);
    return this.getResponse(request, sql);
  }

  rename(request: RequestModel, source: string, target: string): Promise<ResponseModel> {
    const sql = StringUtils.format('RENAME DATABASE `{0}` TO `{1}`', [source, target]);
    return this.getResponse(request, sql);
  }
}
