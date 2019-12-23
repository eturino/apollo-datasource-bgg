import { DataSource, DataSourceConfig } from "apollo-datasource";

export class ApolloDatasourceBGG<TContext = any> extends DataSource<TContext> {
  public context!: TContext;

  public initialize(config: DataSourceConfig<TContext>): void {
    this.context = config.context;
  }
}
