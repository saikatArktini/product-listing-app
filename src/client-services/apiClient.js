const BASE_URL = "/api";

export async function apiClient(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  const res=await response.json();
  console.log("11",res);
  if (!res.success) {
    //const error = await response.json();
    console.log("14", error);
    throw new Error(res?.message || "Something went wrong");
  }
  
  return  res.data;
}