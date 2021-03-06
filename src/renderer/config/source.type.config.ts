import {Injectable} from '@angular/core';
import {DatabaseEnum} from '@renderer/enum/database.enum';
import {DatabaseModel} from '@renderer/model/database.model';
import {StringUtils} from '@renderer/utils/string.utils';
import {TranslateUtils} from '@renderer/utils/translate.utils';

@Injectable()
export class SourceTypeConfig {
  getConfig(): DatabaseModel[] {
    const basicType = new DatabaseModel();
    const typeEngines = new Array();
    basicType.name = StringUtils.format('{0}',
      [TranslateUtils.getValue('common.basic')]);
    basicType.description = TranslateUtils.getValue('tooltip.source.basic');
    const basicEngines = new Array();
    // ClickHouse
    basicEngines.push(DatabaseModel.builder(TranslateUtils.getValue('common.clickhouse'),
      TranslateUtils.getValue('tooltip.source.clickhouse'),
      DatabaseEnum.clickhosue,
      null,
      false,
      null,
      './renderer/assets/icon/source/ClickHouse.svg'));
    // MySQL
    basicEngines.push(DatabaseModel.builder(TranslateUtils.getValue('common.mysql'),
      TranslateUtils.getValue('tooltip.source.mysql'),
      DatabaseEnum.mysql,
      null,
      false,
      null,
      './renderer/assets/icon/source/MySQL.svg'));
    basicType.engines = basicEngines;

    // -------------- Experimental ----------------
    const experimentalType = new DatabaseModel();
    const experimentalEngines = new Array();
    experimentalType.name = StringUtils.format('{0}',
      [TranslateUtils.getValue('common.experimental')]);
    experimentalType.description = TranslateUtils.getValue('tooltip.experimental');
    // Presto
    experimentalEngines.push(DatabaseModel.builder(TranslateUtils.getValue('common.presto'),
      TranslateUtils.getValue('tooltip.source.presto'),
      DatabaseEnum.presto,
      null,
      true,
      null,
      './renderer/assets/icon/source/Presto.svg'));
    // Trino
    experimentalEngines.push(DatabaseModel.builder(TranslateUtils.getValue('common.trino'),
      TranslateUtils.getValue('tooltip.source.trino'),
      DatabaseEnum.trino,
      null,
      true,
      null,
      './renderer/assets/icon/source/Trino.svg'));
    // PostgreSQL
    experimentalEngines.push(DatabaseModel.builder(TranslateUtils.getValue('common.postgresql'),
      TranslateUtils.getValue('tooltip.source.postgresql'),
      DatabaseEnum.postgresql,
      null,
      true,
      null,
      './renderer/assets/icon/source/PostgreSQL.svg'));
    // Apache Druid
    experimentalEngines.push(DatabaseModel.builder(TranslateUtils.getValue('common.druid'),
      TranslateUtils.getValue('tooltip.source.druid'),
      DatabaseEnum.druid,
      null,
      true,
      null,
      './renderer/assets/icon/source/Druid.svg'));
    experimentalType.engines = experimentalEngines;

    typeEngines.push(basicType, experimentalType);
    return typeEngines;
  }
}
