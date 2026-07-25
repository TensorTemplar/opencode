import { app } from "electron"

type Channel = "dev" | "beta" | "prod"
const raw = import.meta.env.OPENCODE_CHANNEL
export const CHANNEL: Channel = raw === "dev" || raw === "beta" || raw === "prod" ? raw : "dev"

export const UPDATER_ENABLED =
  app.isPackaged &&
  CHANNEL !== "dev" &&
  ["1", "true"].includes(process.env.OPENCODE_ENABLE_AUTOUPDATE?.toLowerCase() ?? "")
