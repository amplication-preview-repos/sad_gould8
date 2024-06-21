import { Entry as TEntry } from "../api/entry/Entry";

export const ENTRY_TITLE_FIELD = "id";

export const EntryTitle = (record: TEntry): string => {
  return record.id?.toString() || String(record.id);
};
