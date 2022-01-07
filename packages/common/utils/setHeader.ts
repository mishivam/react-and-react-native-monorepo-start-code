export default function setHeader(
  header:
    | {
        autherization?: string;
        contentType?: string;
      }
    | undefined
): object {
  return {
    // accept: "*/*",
    "Content-Type": header?.contentType || "application/json",
    Authorization: `Bearer ${header?.autherization}`,
  };
}
