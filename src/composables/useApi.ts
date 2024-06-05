import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios'
import { R } from 'vite/dist/node/types.d-aGj9QkWt'
// import { ElNotification } from 'element-plus'

export const useApi = (apiUrl?: string) => {
  const baseURL = apiUrl || import.meta.env.VITE_APP_SERVER_URL

  // function handleErrors(errors) {
  //   if (errors.error) {
  //     ElNotification({
  //       title: 'Error',
  //       message: errors.error,
  //       type: 'error',
  //     })
  //     // toast.error(errors?.message)
  //   }
  // }

  const $service = (config?: CreateAxiosDefaults): AxiosInstance => {
    const headers = {
      ...config?.headers,
      // layouts headers
    }
    const _axios = axios.create({
      ...config,
      baseURL,
      headers,
    })
    // Use interceptors here
    _axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        // handleErrors(error.response.data)
        throw error
      },
    )
    return _axios
  }

  function $get<R = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .get<R>(url, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $delete<R = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .delete<R>(url, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $post<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .post<R>(url, data, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $put<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .put<R>(url, data, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  function $patch<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return new Promise((resolve, reject) => {
      $service()
        .patch<R>(url, data, config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }

  return { $get, $delete, $post, $patch, $put }
}
