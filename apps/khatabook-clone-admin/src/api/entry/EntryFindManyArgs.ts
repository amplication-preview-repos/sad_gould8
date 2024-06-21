import { EntryWhereInput } from "./EntryWhereInput";
import { EntryOrderByInput } from "./EntryOrderByInput";

export type EntryFindManyArgs = {
  where?: EntryWhereInput;
  orderBy?: Array<EntryOrderByInput>;
  skip?: number;
  take?: number;
};
