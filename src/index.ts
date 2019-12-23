import { DataSource, DataSourceConfig } from "apollo-datasource";

export class ApolloDatasourceBGG<TContext = any> extends DataSource<TContext> {
  protected context!: TContext;

  constructor() {
    super();
  }

  public initialize(config: DataSourceConfig<TContext>): void {
    this.context = config.context;
  }
}
