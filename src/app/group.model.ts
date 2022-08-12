export class Group {
  constructor(
    public title?: string | null,
    public system?: string | null,
    public theme?: string | null,
    public date?: Date | null,
    public description?: string | null,
    public dateString?: string | null
  ) {}
}