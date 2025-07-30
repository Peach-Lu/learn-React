import axios from "axios";
import { message } from "antd";


// 全局 loading 相关（纯 JS 方案）
let loadingCount = 0;
let loadingContainer: HTMLDivElement | null = null;

function showLoading() {
  if (!loadingContainer) {
    loadingContainer = document.createElement("div");
    loadingContainer.style.position = "fixed";
    loadingContainer.style.left = "0";
    loadingContainer.style.top = "0";
    loadingContainer.style.width = "100vw";
    loadingContainer.style.height = "100vh";
    loadingContainer.style.zIndex = "9999";
    loadingContainer.style.background = "rgba(255,255,255,0.3)";
    loadingContainer.innerHTML = `
      <div style="width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;">
        <div style="padding:24px 40px;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-size:18px;display:flex;align-items:center;gap:12px;">
          <span class="loading-spinner" style="display:inline-block;width:28px;height:28px;border:4px solid #1890ff;border-top:4px solid #f0f0f0;border-radius:50%;animation:spin 1s linear infinite;"></span>
          加载中...
        </div>
      </div>
      <style>
        @keyframes spin { 100% { transform: rotate(360deg); } }
      </style>
    `;
    document.body.appendChild(loadingContainer);
  }
}

function hideLoading() {
  if (loadingContainer) {
    document.body.removeChild(loadingContainer);
    loadingContainer = null;
  }
}
const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    loadingCount++;
    if (loadingCount === 1) {
      showLoading();
    }
    console.log('loadingCount',loadingCount)
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    loadingCount = Math.max(loadingCount - 1, 0);
    if (loadingCount === 0) {
      hideLoading();
    }
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    loadingCount = Math.max(loadingCount - 1, 0);
    if (loadingCount === 0) {
      hideLoading();
    }
    // 对响应数据做点什么
    console.log('response',response)
    const resData = (response.data || {}) as ResType;
    const { erron, data, msg } = resData;
    console.log('resData',resData)
    console.log('erron',erron)
    if (erron !== 0) {
      if (msg) {
        message.error(msg);
      }
      // 如果有错误码，抛出错误
      //   return Promise.reject(new Error(msg || "请求失败"));
      return new Error(msg || "请求失败");
    }
    console.log('loadingCount',loadingCount)

    return data as ResDataType | undefined;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    loadingCount = Math.max(loadingCount - 1, 0);
    if (loadingCount === 0) {
      hideLoading();
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;

export type ResType = {
  erron: number;
  data?: ResDataType;
  msg?: string;
};
export type ResDataType = {
  [key: string]: any;
  // 可以根据实际返回的数据结构定义更具体的类型
};
