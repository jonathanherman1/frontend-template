type ApiResponseSuccess<T> = {
  success: true
  data: T
}

type ApiResponseError = {
  success: false
  message: string
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError


export type ReactProps = {
  children?: React.ReactNode
}

export type StyleSlots = {
  className?: string
  classNames?: {
    base?: string
  }
}
