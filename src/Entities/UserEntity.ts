type servico = Array<
  "design" | "construction" | "reform" | "planned furnishings"
>;

export class User {
  email!: string;
  phone?: string;
  address?: string;
  number?: string;
  referência?: string;
  serviços?: servico;
  name?: string;
  fantasyName?: string;
  socialReason?: string;

  constructor(
    e: string,
    p?: string,
    a?: string,
    n?: string,
    r?: string,
    s?: servico,
    name?: string,
    f?: string,
    so?: string
  ) {
    this.email = e;
    this.phone = p;
    this.address = a;
    this.number = n;
    this.referência = r;
    this.serviços = s;
    this.name = name;
    this.fantasyName = f;
    this.socialReason = so;
  }
}