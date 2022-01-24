import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '@renderer/app/ng-zorro-antd.module';
import { MetadataComponent } from '@renderer/app/pages/management/metadata/metadata.component';
import { DatasourceService } from '@renderer/services/management/datasource.service';
import { ServiceModule } from '@renderer/app/service.module';
import { CommonShareModule } from '@renderer/app/common-share.module';
import { MetadataService } from '@renderer/services/management/metadata.service';
import { ContextMenuService } from '@renderer/services/context.menu.service';
import { InfoServerComponent } from '@renderer/components/server/info/info.server.component';
import { DatabaseBasicComponent } from '@renderer/components/database/basic/database.basic.component';
import { DrividerAntdComponent } from '@renderer/components/antd/drivider/drivider.antd.component';
import { LazyEngineDatabaseComponent } from '@renderer/components/database/engine/lazy/lazy.engine.database.component';
import { PropertyComponent } from '@renderer/components/property/property.component';
import { DatabaseDropComponent } from '@renderer/components/database/drop/database.drop.component';

const MANAGEMENT_METADATA_ROUTES: Routes = [
  {path: '', component: MetadataComponent}
];

@NgModule({
  imports: [
    FormsModule,
    TranslateModule,
    CommonModule,
    NgZorroAntdModule,
    ServiceModule,
    CommonShareModule,
    RouterModule.forChild(MANAGEMENT_METADATA_ROUTES)
  ],
  exports: [],
  declarations: [
    MetadataComponent,
    InfoServerComponent,
    DatabaseBasicComponent,
    DrividerAntdComponent,
    LazyEngineDatabaseComponent,
    PropertyComponent,
    DatabaseDropComponent
  ],
  providers: [
    DatasourceService,
    MetadataService,
    ContextMenuService
  ]
})
export class MetadataModule {
}
