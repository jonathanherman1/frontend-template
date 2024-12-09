import type { ReactProps } from "@/types"

export const ErrorMessageWrapper = ({ children }: ReactProps) => (
  <p className="ml-2 text-left">{children}</p>
)
