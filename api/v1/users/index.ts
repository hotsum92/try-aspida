import type { DefineMethods } from "aspida";

type User = {
  id: number;
  name: string;
};

export type Methods = DefineMethods<{
  get: {
    resBody: User;
  };
}>;
