import { BaseConfig } from "@renderer/config/base.config";

export class MySQLConfig implements BaseConfig {
  columnDiskUsedRatio: string;
  columnItems: string;
  connectionFetchAll: string;
  databaseCreate: string;
  databaseDiskUsedRatio: string;
  databaseFetchAll: string;
  databaseItems: string;
  databaseItemsFilterFuzzy: string;
  databaseItemsFilterPrecise: string;
  diskUsedRatio: string;
  processesFetchAll: string;
  schemaFetchAll: string;
  serverInfo: string;
  slowQueryFetchAll: string;
  tableDiskUsedRatio: string;
  tableFetchAll: string;
  tableItems: string;
  tableItemsFilterFuzzy: string;
  tableItemsFilterPrecise: string;
  tableSchemaFetchAll: string;
  version = `SELECT version() AS version`;
}