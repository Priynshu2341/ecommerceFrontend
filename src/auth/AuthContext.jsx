import { createContext, useContext, useEffect, useState } from "react";
import backendApi from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
  const [isAuthReady,setIsAuthReady] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");

    if (access) setAccessToken(access);
    if (refresh) setRefreshToken(refresh);

    setIsAuthReady(true); 
  }, []);

 
  const login = (access, refresh) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);

    setAccessToken(access);
    setRefreshToken(refresh);
    setIsAuthenticated(true);
  };

 
  const logout = () => {
    localStorage.clear();
    setAccessToken(null);
    setRefreshToken(null);
    setIsAuthenticated(false);

    window.location.href = "/login"; 
  };


  useEffect(() => {
    const requestInterceptor = backendApi.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => {
      backendApi.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);


  useEffect(() => {
    let isRefreshing = false;
    let queue = [];

    const responseInterceptor = backendApi.interceptors.response.use(
      (response) => response,

      async (error) => {
        const originalRequest = error.config;

        if (
          error.response?.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          if (isRefreshing) {
            return new Promise((resolve) => {
              queue.push((newToken) => {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                resolve(backendApi(originalRequest));
              });
            });
          }

          isRefreshing = true;

          try {
            const res = await backendApi.post("/auth/refresh", {
              refreshToken,
            });

            const newAccessToken = res.data.accessToken;

            localStorage.setItem("accessToken", newAccessToken);
            setAccessToken(newAccessToken);
            console.log("refresh sucessfull");

            
            queue.forEach((cb) => cb(newAccessToken));
            queue = [];

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return backendApi(originalRequest);

          } catch (err) {
            logout(); 
            return Promise.reject(err);
          } finally {
            isRefreshing = false;
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      backendApi.interceptors.response.eject(responseInterceptor);
    };
  }, [refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        isAuthReady,
        accessToken,
        refreshToken,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}