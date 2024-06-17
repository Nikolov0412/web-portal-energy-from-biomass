export interface ITableConfig{
    field:string,
    headerName:string,
    flex:number
}
export interface IColumnConfigs {
    [key: string]: ITableConfig;
  }