import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://internalapis.clooops.com/api/v1',
  // baseURL: "http://localhost:8080/api/v1",
});

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

export const getUserProfile = async () => {
  return await axiosInstance
    .get('/profile')
    .then((res) => res.data)
    .catch((e) => {
      alert(`에러가 발생했습니다.${e}`);
    });
};

export const getAPI = async ({ kind, pathStr, params, custId }) => {
  const url = custId ? `/${kind}/${custId}/${pathStr}` : `/${kind}/${pathStr}`;
  return await axiosInstance.get(url, { params }).then((res) => res.data);
};

export const postAPI = async ({ url, params }) => {
  return await axiosInstance.post(url, params);
};

export const fileUpload = async ({ url, acceptedFiles }) => {
  const data = new FormData();
  acceptedFiles.map((f) => data.append(`upload`, f));
  return await axiosInstance.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const fileDownload = async (fileName) => {
  return await axiosInstance({
    url: '/service-request-download',
    method: 'GET',
    responseType: 'blob',
    params: {
      fileName,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName.split('__').reverse()[0]);
        document.body.appendChild(link);
        link.click();
      } else if (res.status === 204) {
        alert('서버에 파일이 존재하지 않습니다.');
      } else {
        alert(`파일 다운로드 중 에러가 발생했습니다.`);
      }
    })
    .catch((e) => {
      alert(`파일 다운로드 중 에러가 발생했습니다.<br/>${e}`);
    });
};

export const save = ({ kind, custId, pathStr, params }) => {
  return axiosInstance
    .patch(`/${kind}/${custId}/${pathStr}`, params)
    .then((res) => res)
    .catch((e) => {
      alert(`에러가 발생했습니다.${e}`);
    });
};
