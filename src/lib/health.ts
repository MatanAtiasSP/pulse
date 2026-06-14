export interface AppStatus {
  status: "ok";
  version: string;
}

export function appStatus(): AppStatus {
  return {
    status: "ok",
    version: process.env.npm_package_version ?? "0.0.0",
  };
}
