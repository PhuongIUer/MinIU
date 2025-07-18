// Environment.js
const GITHUB_JSON_URL = "https://res.cloudinary.com/miniu2025/raw/upload/v1752864252/domain_e7pfdj.json";
const DEFAULT_FALLBACK_URL = "/api"; // URL dự phòng nếu fetch thất bại

const EnvironmentConfig = {
  NGROK_BASE_URL: "",
  API_ENDPOINTS: {
    USERS: "/users",
    PRODUCTS: "/products",
    ORDERS: "/orders"
  },
  isInitialized: false,
};

let initializationPromise = null;

export async function initializeEnvironment() {
  if (!initializationPromise) {
    initializationPromise = (async () => {
      try {
        // Thêm cache: 'no-store' và timestamp để tránh dùng cache
        const response = await fetch(`${GITHUB_JSON_URL}?t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });

        // Kiểm tra response hợp lệ
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Kiểm tra dữ liệu nhận được có hợp lệ không
        if (!data || !data.domain) {
          throw new Error("Invalid configuration data");
        }

        EnvironmentConfig.NGROK_BASE_URL = data.domain + "/api";
        EnvironmentConfig.isInitialized = true;
      } catch (error) {
        console.error("Lỗi khi fetch domain.json:", error);
        
        // Sử dụng giá trị fallback nếu có lỗi
        EnvironmentConfig.NGROK_BASE_URL = DEFAULT_FALLBACK_URL;
        EnvironmentConfig.isInitialized = true;
        
        // Vẫn throw error để bên ngoài có thể xử lý nếu cần
        throw error;
      }
    })();
  }
  return initializationPromise;
}

export default EnvironmentConfig;